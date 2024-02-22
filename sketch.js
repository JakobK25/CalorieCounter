let mgr;
let foodData;
let FinalCalories = 0;

function preload() {
  foodData = loadJSON("https://stor.25nets.com/CalorieData.json")
}

function setup() {
  createCanvas(350, 550);

  mgr = new SceneManager()

  // SceneManager configuration
  mgr.addScene(Dashboard)
  mgr.addScene(OpskrifterUI)
  mgr.addScene(LigevægtsindtagUI)
  mgr.addScene(MorgenmadUI)
  mgr.addScene(FrokostUI)
  mgr.addScene(AftensmadUI)
  mgr.addScene(SnackUI)

  mgr.showScene(Dashboard)

  console.log(GetFoodData("Skyr"));

}

function draw() {
  mgr.draw()
}

function GetFoodData(name) {
  if (foodData != null) {
    for (let i = 0; i < foodData.foods.length; i++) {
      if (foodData.foods[i].name === name) {
        return foodData.foods[i];
      }
    }
  } else {
    console.log("foodData is not loaded yet");
  }
}

function Dashboard() {
  //alle elementer i Dashboard
  let MorgenmadKnap, FrokostKnap, AftensmadKnap, SnackKnap, LigevægtsindtagKnap, OpskrifterKnap;

  //SETUP funktionen der viser alle elementer
  this.enter = function () {
    console.log("Hello")
    createCanvas(350, 550);
    background(200);

    //Kalorie opsumering på Dashboard:
    let CalorieGoal; // Mål for kalorieindtag
    let CurrentCalories = 0; // Aktuelt kalorieindtag
    let radius = 100; // Cirkelradius

    // Simuleret kalorieindtag (f.eks. fra en anden funktion)
    let FinalCalorie = 0; // Kalorier indtaget i dette tidsinterval

    function setup() {
      createCanvas(400, 400);
      CalorieGoal = createInput();

    }

    function draw() {
      background(220);

      // Opdater kalorier baseret på simulering
      CurrentCalories += FinalCalorie;

      // Beregn fyldningsgraden i grader
      let CircleInFill = map(CurrentCalories, 0, CalorieGoal, 0, 360);

      // Beregn procentdel af målet
      let procentOpnået = CurrentCalories / CalorieGoal;

      // Juster fyldningsgraden for at nå 360 grader ved 100%
      if (procentOpnået >= 1) {
        CircleInFill = 360;
      }

      // Beregn farve baseret på procentdel
      let farveCirkle = lerpColor(color(255, 0, 0), color(0, 255, 0), procentOpnået);

      // Tegn cirkel med variabel fyldning og farve
      noFill();
      strokeWeight(4);
      stroke(50);
      ellipse(200, 220, radius * 2, radius * 2);

      fill(farveCirkle);
      arc(200, 220, radius * 2, radius * 2, 0, radians(CircleInFill));

      // Vis tekst med kalorier og procentdel
      textSize(16);
      textAlign(CENTER);
      text(`${CurrentCalories} / ${CalorieGoal} Kalorier indtaget`, 200, 300 + 50);
    }

    function logMåltid(FinalCalorie, kalorier) {
      FinalCalorie += kalorier;
    }

    //laver alle elementer HVIS de ikke eksistere
    //vi tjekker om elementer eksistere ved at tjekke på om de er null
    if (MorgenmadKnap == null) {
      MorgenmadKnap = createButton("Morgenmad");
      MorgenmadKnap.position(125, 150);
      MorgenmadKnap.size(100, 30);
      MorgenmadKnap.style('background-color', '#ECC61A');
      MorgenmadKnap.mousePressed(function () {
        mgr.showScene(MorgenmadUI)
        HideButtons();
      })


      FrokostKnap = createButton("Frokost")
      FrokostKnap.position(125, 200);
      FrokostKnap.size(100, 30);
      FrokostKnap.style('background-color', '#ECC61A');
      FrokostKnap.mousePressed(function () {
        mgr.showScene(FrokostUI)
        HideButtons();

      })
      AftensmadKnap = createButton("Aftensmad")
      AftensmadKnap.position(125, 250);
      AftensmadKnap.size(100, 30);
      AftensmadKnap.style('background-color', '#ECC61A');
      AftensmadKnap.mousePressed(function () {
        mgr.showScene(AftensmadUI)
        HideButtons();
      })
      SnackKnap = createButton("Snack")
      SnackKnap.position(125, 300);
      SnackKnap.size(100, 30);
      SnackKnap.style('background-color', '#ECC61A');
      SnackKnap.mousePressed(function () {
        mgr.showScene(SnackUI)
        HideButtons();
      })

      LigevægtsindtagKnap = createButton("Ligevægts beregner")
      LigevægtsindtagKnap.position(220, 500);
      LigevægtsindtagKnap.size(120, 40);
      LigevægtsindtagKnap.style('background-color', '#FFFFFF');
      LigevægtsindtagKnap.mousePressed(function () {
        mgr.showScene(LigevægtsindtagUI)
        HideButtons();
      })

      OpskrifterKnap = createButton("Opskrifter")
      OpskrifterKnap.position(20, 500);
      OpskrifterKnap.size(120, 40);
      OpskrifterKnap.style('background-color', '#FFFFFF');
      OpskrifterKnap.mousePressed(function () {
        mgr.showScene(OpskrifterUI)
        HideButtons();
      })

    } else {
      MorgenmadKnap.show();
      FrokostKnap.show();
      AftensmadKnap.show();
      SnackKnap.show();
      LigevægtsindtagKnap.show();
      OpskrifterKnap.show();
    }
  }

  //ksjuler alle elementer i denne scene (DASHBOARD)
  function HideButtons() {
    MorgenmadKnap.hide();
    FrokostKnap.hide();
    AftensmadKnap.hide();
    SnackKnap.hide();
    LigevægtsindtagKnap.hide();
    OpskrifterKnap.hide();
  }
}

function OpskrifterUI() {

  let CancelButton, TilføjButton;
  let searchInput; // Declare search input variable

  this.enter = function () {
    createCanvas(350, 550);
    background('#f0f0f0');

    textSize(26);
    textAlign(CENTER);
    fill('#333');
    text("Personlige opskrifter", width / 2, 50);

    // Create search input field
    searchInput = createInput();
    searchInput.position(25, 100);
    searchInput.size(285, 30);
    searchInput.attribute('placeholder', 'Søg i mine opskrifter');

    if (CancelButton == null) {
      CancelButton = createButton('Tilbage');
      CancelButton.position(15, 395);
      CancelButton.size(150, 40);
      CancelButton.style('background-color', 'red');
      CancelButton.style('color', 'black');
      CancelButton.style('border', 'none');
      CancelButton.style('border-radius', '5px');
      CancelButton.mousePressed(function () {
        mgr.showScene(Dashboard)
        HideButtons();
      })

      TilføjButton = createButton('Lav ny opskrift');
      TilføjButton.position(180, 395);
      TilføjButton.size(150, 40);
      TilføjButton.mousePressed();
      TilføjButton.style('background-color', 'green');
      TilføjButton.style('color', 'black');
      TilføjButton.style('border', 'none');
      TilføjButton.style('border-radius', '5px');

      MyOP1Button = createButton('Min personlige opskrift 1');
      MyOP1Button.position(25, 150);
      MyOP1Button.size(290, 40);
      MyOP1Button.mousePressed();
      MyOP1Button.style('background-color', 'pink');
      MyOP1Button.style('color', 'black');
      MyOP1Button.style('border', 'none');
      MyOP1Button.style('border-radius', '5px');

      MyOP2Button = createButton('Min pesonlige opskrift 2');
      MyOP2Button.position(25, 210);
      MyOP2Button.size(290, 40);
      MyOP2Button.mousePressed();
      MyOP2Button.style('background-color', 'pink')
      MyOP2Button.style('color', 'black');
      MyOP2Button.style('border', 'none');
      MyOP2Button.style('border-radius', '5px');

    } else {
      CancelButton.show();
      TilføjButton.show();
      MyOP2Button.show();
      MyOP1Button.show();
      searchInput.show();
    }
  }

  function HideButtons() {
    CancelButton.hide();
    TilføjButton.hide();
    MyOP2Button.hide();
    MyOP1Button.hide();
    searchInput.hide();
  }
}





function LigevægtsindtagUI() {

  let vægtInput, højdeInput, alderInput, kønInput, beregnButton, resultText, CancelButton;

  this.enter = function () {
    createCanvas(350, 600);
    background('#f0f0f0');

    textAlign(LEFT);
    textSize(18);
    fill('#555');
    text("Højde (CM):", 60, 200);
    text("Vægt (KG):", 60, 130);
    text("Alder (år):", 60, 270);
    text("Køn:", 60, 340);

    textSize(26);
    textAlign(CENTER);
    fill('#333');
    text("Ligevægtsindtag Beregner", width / 2, 50);

    if (beregnButton == null) {
      beregnButton = createButton('Beregn');
      beregnButton.position(250, 500);
      beregnButton.size(80, 40);
      beregnButton.mousePressed(beregnLigevægtsindtag);
      beregnButton.style('background-color', '#4CAF50');
      beregnButton.style('color', 'white');
      beregnButton.style('border', 'none');
      beregnButton.style('border-radius', '5px');

      vægtInput = createInput();
      vægtInput.position(60, 140);
      vægtInput.size(230, 40);
      vægtInput.attribute('type', 'number');
      vægtInput.style('border-radius', '5px');

      højdeInput = createInput();
      højdeInput.position(60, 210);
      højdeInput.size(230, 40);
      højdeInput.attribute('type', 'number');
      højdeInput.style('border-radius', '5px');

      alderInput = createInput();
      alderInput.position(60, 280);
      alderInput.size(230, 40);
      alderInput.attribute('type', 'number');
      alderInput.style('border-radius', '5px');

      kønInput = createSelect();
      kønInput.position(60, 350);
      kønInput.option('Mand');
      kønInput.option('Kvinde');
      kønInput.style('border-radius', '5px');

      CancelButton = createButton('Tilbage');
      CancelButton.position(20, 500);
      CancelButton.size(80, 40);
      CancelButton.style('background-color', 'red');
      CancelButton.style('color', 'black');
      CancelButton.style('border', 'none');
      CancelButton.style('border-radius', '5px');
      CancelButton.mousePressed(function () {
        mgr.showScene(Dashboard);
        HideButtons();
      })

      resultText = createElement('textarea', "Dit ligevægtsindtag er:");
      resultText.position(30, 380);
      resultText.size(290, 80);
      resultText.attribute('readonly', 'true');
      resultText.style('font-size', '18px');
      resultText.style('background-color', '#ffffff');
      resultText.style('border', 'none');
      resultText.style('border-radius', '5px');
      resultText.style('resize', 'none');

    } else {
      resultText.show();
      CancelButton.show();
      beregnButton.show();
      vægtInput.show();
      højdeInput.show();
      alderInput.show();
      kønInput.show();
    }
  }

  function HideButtons() {
    resultText.hide();
    CancelButton.hide();
    beregnButton.hide();
    vægtInput.hide();
    højdeInput.hide();
    alderInput.hide();
    kønInput.hide();
  }

  function beregnBMI(){
  let vægt = parseFloat(vægtInput.value());
  let højde = parseFloat(højdeInput.value()) / 100; // Konverterer højde til meter
  let bmi = vægt / (højde * højde);
  resultText.value("Dit BMI er: " + bmi.toFixed(2));

  let besked;
  if (bmi < 18.5) {
    besked = "Undervægtig";
  } else if (bmi >= 18.5 && bmi < 25) {
    besked = "Normalvægtig";
  } else if (bmi >= 25 && bmi < 30) {
    besked = "Overvægtig";
  } else {
    besked = "Svært overvægtig";
  }

  // Opdater tekstfeltet med beskeden
  resultText.value(resultText.value() + ". Du er " + besked);
}
}

function MorgenmadUI() {
  let SkyrButton, BananButton, BollerButton, SmoothieButton, AndetButton, CancelButton, TilføjButton, ResultText;
  let MorCalories = 0;

  this.enter = function () {
    createCanvas(350, 550);
    background('#f0f0f0');

    textSize(26);
    textAlign(CENTER);
    fill('#333');
    text("Morgenmad", width / 2, 50);

    if (SkyrButton == null) {
      SkyrButton = createButton('Skyr');
      SkyrButton.position(25, 95);
      SkyrButton.size(290, 40);
      SkyrButton.style('background-color', 'yellow');
      SkyrButton.style('color', 'black');
      SkyrButton.style('border', 'none');
      SkyrButton.style('border-radius', '5px');
      SkyrButton.mousePressed(function () {
        MorCalories += GetFoodData("Skyr").calories;
        updateResultText();
      });

      BananButton = createButton('Banan');
      BananButton.position(25, 145);
      BananButton.size(290, 40);
      BananButton.style('background-color', 'yellow');
      BananButton.style('color', 'black');
      BananButton.style('border', 'none');
      BananButton.style('border-radius', '5px');
      BananButton.mousePressed(function () {
        MorCalories += GetFoodData("Banan").calories;
        updateResultText();
      });

      BollerButton = createButton('Boller');
      BollerButton.position(25, 195);
      BollerButton.size(290, 40);
      BollerButton.style('background-color', 'yellow');
      BollerButton.style('color', 'black');
      BollerButton.style('border', 'none');
      BollerButton.style('border-radius', '5px');
      BollerButton.mousePressed(function () {
        MorCalories += GetFoodData("Boller").calories;
        updateResultText();
      });

      SmoothieButton = createButton('Smoothie');
      SmoothieButton.position(25, 245);
      SmoothieButton.size(290, 40);
      SmoothieButton.style('background-color', 'green');
      SmoothieButton.style('color', 'black');
      SmoothieButton.style('border', 'none');
      SmoothieButton.style('border-radius', '5px');
      SmoothieButton.mousePressed(function () {
        MorCalories += GetFoodData("Smoothie").calories;
        updateResultText();
      });

      AndetButton = createButton('Opskrifter');
      AndetButton.position(25, 295);
      AndetButton.size(290, 40);
      AndetButton.style('background-color', 'pink');
      AndetButton.style('color', 'black');
      AndetButton.style('border', 'none');
      AndetButton.style('border-radius', '5px');
      AndetButton.mousePressed(function () {
        mgr.showScene(OpskrifterUI);
      });

      CancelButton = createButton('Tilbage');
      CancelButton.position(15, 395);
      CancelButton.size(150, 40);
      CancelButton.style('background-color', 'red');
      CancelButton.style('color', 'black');
      CancelButton.style('border', 'none');
      CancelButton.style('border-radius', '5px');
      CancelButton.mousePressed(function () {
        mgr.showScene(Dashboard);
        HideButtons()
      });

      TilføjButton = createButton('Tilføj');
      TilføjButton.position(180, 395);
      TilføjButton.size(150, 40);
      TilføjButton.style('background-color', 'green');
      TilføjButton.style('color', 'black');
      TilføjButton.style('border', 'none');
      TilføjButton.style('border-radius', '5px');
      TilføjButton.mousePressed(function () {
        FinalCalories =+ MorCalories
      });

      ResultText = createElement('textarea', "Antal kcal: " + MorCalories);
      ResultText.position(30, 450);
      ResultText.size(290, 80);
      ResultText.attribute('readonly', true);
      ResultText.style('font-size', '18px');
      ResultText.style('background-color', '#ffffff');
      ResultText.style('border', 'none');
      ResultText.style('border-radius', '5px');
      ResultText.style('resize', 'none');

    } else {
      SkyrButton.show();
      BananButton.show();
      BollerButton.show();
      SmoothieButton.show();
      AndetButton.show();
      CancelButton.show();
      TilføjButton.show();
      ResultText.show();
    }
  }

  function updateResultText() {
    ResultText.value("Antal kcal: " + MorCalories); // Update the displayed calories
  }

  function HideButtons() {
    SkyrButton.hide();
    BananButton.hide();
    BollerButton.hide();
    SmoothieButton.hide();
    AndetButton.hide();
    CancelButton.hide();
    TilføjButton.hide();
    ResultText.hide();
  }
}

function FrokostUI() {

  let RisButton, PastaButton, KyllingButton, ToastButton, AndetButton, CancelButton, TilføjButton

  this.enter = function () {
    createCanvas(350, 550);
    background('#f0f0f0');

    textSize(26);
    textAlign(CENTER);
    fill('#333');
    text("Frokost", width / 2, 50);


    if (RisButton == null) {
      RisButton = createButton('Ris');
      RisButton.position(25, 95);
      RisButton.size(290, 40);
      RisButton.style('background-color', 'yellow');
      RisButton.style('color', 'black');
      RisButton.style('border', 'none');
      RisButton.style('border-radius', '5px');

      PastaButton = createButton('Pasta');
      PastaButton.position(25, 145);
      PastaButton.size(290, 40);
      PastaButton.mousePressed();
      PastaButton.style('background-color', 'yellow');
      PastaButton.style('color', 'black');
      PastaButton.style('border', 'none');
      PastaButton.style('border-radius', '5px');

      KyllingButton = createButton('Kylling');
      KyllingButton.position(25, 195);
      KyllingButton.size(290, 40);
      KyllingButton.mousePressed();
      KyllingButton.style('background-color', 'yellow');
      KyllingButton.style('color', 'black');
      KyllingButton.style('border', 'none');
      KyllingButton.style('border-radius', '5px');

      ToastButton = createButton('Toast');
      ToastButton.position(25, 245);
      ToastButton.size(290, 40);
      ToastButton.mousePressed();
      ToastButton.style('background-color', 'green');
      ToastButton.style('color', 'black');
      ToastButton.style('border', 'none');
      ToastButton.style('border-radius', '5px');

      AndetButton = createButton('Opskrifter');
      AndetButton.position(25, 295);
      AndetButton.size(290, 40);
      AndetButton.style('background-color', 'pink');
      AndetButton.style('color', 'black');
      AndetButton.style('border', 'none');
      AndetButton.style('border-radius', '5px');
      AndetButton.mousePressed(function () {
        mgr.showScene(OpskrifterUI)
        HideButtons();
      })

      CancelButton = createButton('Tilbage');
      CancelButton.position(15, 395);
      CancelButton.size(150, 40);
      CancelButton.style('background-color', 'red');
      CancelButton.style('color', 'black');
      CancelButton.style('border', 'none');
      CancelButton.style('border-radius', '5px');
      CancelButton.mousePressed(function () {
        mgr.showScene(Dashboard)
        HideButtons();
      })

      TilføjButton = createButton('Tilføj');
      TilføjButton.position(180, 395);
      TilføjButton.size(150, 40);
      TilføjButton.mousePressed();
      TilføjButton.style('background-color', 'green');
      TilføjButton.style('color', 'black');
      TilføjButton.style('border', 'none');
      TilføjButton.style('border-radius', '5px');

      resultText = createElement('textarea', "Antal kcal:");
      resultText.position(30, 450);
      resultText.size(290, 80);
      resultText.attribute('readonly', 'true');
      resultText.style('font-size', '18px');
      resultText.style('background-color', '#ffffff');
      resultText.style('border', 'none');
      resultText.style('border-radius', '5px');
      resultText.style('resize', 'none');

    } else {
      RisButton.show();
      PastaButton.show();
      KyllingButton.show();
      ToastButton.show();
      AndetButton.show();
      CancelButton.show();
      TilføjButton.show();
      resultText.show();
    }
  }
  function HideButtons() {
    console.log("test")
    RisButton.hide();
    PastaButton.hide();
    KyllingButton.hide();
    ToastButton.hide();
    AndetButton.hide();
    CancelButton.hide();
    TilføjButton.hide();
    resultText.hide();
  }
}

function AftensmadUI() {
  let KartoflerButton, resultText, CancelButton, BroccoliButton, KyllingButton, KRBButton, AndetButton, TilføjButton
  this.enter = function () {
    createCanvas(350, 550);
    background('#f0f0f0');

    textSize(26);
    textAlign(CENTER);
    fill('#333');
    text("Aftensmad", width / 2, 50);

    if (KartoflerButton == null) {

      KartoflerButton = createButton('Kartofler');
      KartoflerButton.position(25, 95);
      KartoflerButton.size(290, 40);
      KartoflerButton.mousePressed();
      KartoflerButton.style('background-color', 'yellow');
      KartoflerButton.style('color', 'black');
      KartoflerButton.style('border', 'none');
      KartoflerButton.style('border-radius', '5px');
      KartoflerButton.mousePressed();


      BroccoliButton = createButton('Broccoli');
      BroccoliButton.position(25, 145);
      BroccoliButton.size(290, 40);
      BroccoliButton.mousePressed();
      BroccoliButton.style('background-color', 'yellow');
      BroccoliButton.style('color', 'black');
      BroccoliButton.style('border', 'none');
      BroccoliButton.style('border-radius', '5px');


      KyllingButton = createButton('Kylling');
      KyllingButton.position(25, 195);
      KyllingButton.size(290, 40);
      KyllingButton.mousePressed();
      KyllingButton.style('background-color', 'yellow');
      KyllingButton.style('color', 'black');
      KyllingButton.style('border', 'none');
      KyllingButton.style('border-radius', '5px');

      KRBButton = createButton('Kylling, Ris og Broccoli');
      KRBButton.position(25, 245);
      KRBButton.size(290, 40);
      KRBButton.mousePressed();
      KRBButton.style('background-color', 'green');
      KRBButton.style('color', 'black');
      KRBButton.style('border', 'none');
      KRBButton.style('border-radius', '5px');

      AndetButton = createButton('Andet');
      AndetButton.position(25, 295);
      AndetButton.size(290, 40);
      AndetButton.style('background-color', 'pink');
      AndetButton.style('color', 'black');
      AndetButton.style('border', 'none');
      AndetButton.style('border-radius', '5px');
      AndetButton.mousePressed(function () {
        mgr.showScene(OpskrifterUI)
        HideButtons();
      })

      CancelButton = createButton('Tilbage');
      CancelButton.position(15, 395);
      CancelButton.size(150, 40);
      CancelButton.style('background-color', 'red');
      CancelButton.style('color', 'black');
      CancelButton.style('border', 'none');
      CancelButton.style('border-radius', '5px');
      CancelButton.mousePressed(function () {
        mgr.showScene(Dashboard)
        HideButtons();
      })

      TilføjButton = createButton('Tilføj');
      TilføjButton.position(180, 395);
      TilføjButton.size(150, 40);
      TilføjButton.mousePressed();
      TilføjButton.style('background-color', 'green');
      TilføjButton.style('color', 'black');
      TilføjButton.style('border', 'none');
      TilføjButton.style('border-radius', '5px');

      resultText = createElement('textarea', "Antal kcal:");
      resultText.position(30, 450);
      resultText.size(290, 80);
      resultText.attribute('readonly', 'true');
      resultText.style('font-size', '18px');
      resultText.style('background-color', '#ffffff');
      resultText.style('border', 'none');
      resultText.style('border-radius', '5px');
      resultText.style('resize', 'none');

    } else {
      resultText.show();
      KartoflerButton.show();
      BroccoliButton.show();
      KRBButton.show();
      AndetButton.show();
      KyllingButton.show();
      TilføjButton.show();
      CancelButton.show();
    }
  }

  function HideButtons() {
    resultText.hide();
    KartoflerButton.hide();
    BroccoliButton.hide();
    KRBButton.hide();
    AndetButton.hide();
    KyllingButton.hide();
    TilføjButton.hide();
    CancelButton.hide();
  }
}

function SnackUI() {
  let KaffeButton, RiskiksButton, SkyrButton, PBButton, AndetButton, CancelButton, TilføjButton, resultText

  this.enter = function () {
    createCanvas(350, 550);
    background('#f0f0f0');

    textSize(26);
    textAlign(CENTER);
    fill('#333');
    text("Snacks", width / 2, 50);

    if (KaffeButton == null) {

      KaffeButton = createButton('Kaffe');
      KaffeButton.position(25, 95);
      KaffeButton.size(290, 40);
      KaffeButton.mousePressed();
      KaffeButton.style('background-color', 'yellow');
      KaffeButton.style('color', 'black');
      KaffeButton.style('border', 'none');
      KaffeButton.style('border-radius', '5px');

      RiskiksButton = createButton('Riskiks');
      RiskiksButton.position(25, 145);
      RiskiksButton.size(290, 40);
      RiskiksButton.mousePressed();
      RiskiksButton.style('background-color', 'yellow');
      RiskiksButton.style('color', 'black');
      RiskiksButton.style('border', 'none');
      RiskiksButton.style('border-radius', '5px');

      SkyrButton = createButton('Skyr');
      SkyrButton.position(25, 195);
      SkyrButton.size(290, 40);
      SkyrButton.mousePressed();
      SkyrButton.style('background-color', 'yellow');
      SkyrButton.style('color', 'black');
      SkyrButton.style('border', 'none');
      SkyrButton.style('border-radius', '5px');

      PBButton = createButton('Protein bar');
      PBButton.position(25, 245);
      PBButton.size(290, 40);
      PBButton.mousePressed();
      PBButton.style('background-color', 'green');
      PBButton.style('color', 'black');
      PBButton.style('border', 'none');
      PBButton.style('border-radius', '5px');

      AndetButton = createButton('Opskrifter');
      AndetButton.position(25, 295);
      AndetButton.size(290, 40);
      AndetButton.style('background-color', 'pink');
      AndetButton.style('color', 'black');
      AndetButton.style('border', 'none');
      AndetButton.style('border-radius', '5px');
      AndetButton.mousePressed(function () {
        mgr.showScene(OpskrifterUI)
        HideButtons();
      })

      CancelButton = createButton('Tilbage');
      CancelButton.position(15, 395);
      CancelButton.size(150, 40);
      CancelButton.style('background-color', 'red');
      CancelButton.style('color', 'black');
      CancelButton.style('border', 'none');
      CancelButton.style('border-radius', '5px');
      CancelButton.mousePressed(function () {
        mgr.showScene(Dashboard)
        HideButtons();
      })

      TilføjButton = createButton('Tilføj');
      TilføjButton.position(180, 395);
      TilføjButton.size(150, 40);
      TilføjButton.mousePressed();
      TilføjButton.style('background-color', 'green');
      TilføjButton.style('color', 'black');
      TilføjButton.style('border', 'none');
      TilføjButton.style('border-radius', '5px');

      resultText = createElement('textarea', "Antal kcal:");
      resultText.position(30, 450);
      resultText.size(290, 80);
      resultText.attribute('readonly', 'true');
      resultText.style('font-size', '18px');
      resultText.style('background-color', '#ffffff');
      resultText.style('border', 'none');
      resultText.style('border-radius', '5px');
      resultText.style('resize', 'none');

    } else {
      resultText.show();
      PBButton.show();
      KaffeButton.show();
      RiskiksButton.show();
      AndetButton.show();
      SkyrButton.show();
      TilføjButton.show();
      CancelButton.show();
    }
  }

  function HideButtons() {
    resultText.hide();
    PBButton.hide();
    KaffeButton.hide();
    RiskiksButton.hide();
    AndetButton.hide();
    SkyrButton.hide();
    TilføjButton.hide();
    CancelButton.hide();
  }
}
