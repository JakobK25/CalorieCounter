function setup() {
  createCanvas(350, 550);
  background(220);


    // SceneManager configuration
    mgr.addScene(dashboard)
    mgr.addScene(opskrifter)
    mgr.addScene(bmi)
    mgr.addScene(morgenmad)
    mgr.addScene(frokost)
    mgr.addScene(aftensmad)
    mgr.addScene(snack)
}

function Dashboard(){
  function setup() {
    createCanvas(350, 550);
    background(200);
    
  MorgenmadKnap = createButton("Morgenmad");
  MorgenmadKnap.position(125,150);
  MorgenmadKnap.size(100, 30);
  MorgenmadKnap.style('background-color', '#ECC61A');  
  
  FrokostKnap = createButton("Frokost")
  FrokostKnap.position(125, 200);
  FrokostKnap.size(100, 30);
  FrokostKnap.style('background-color', '#ECC61A');

  AftensmadKnap = createButton("Aftensmad")
  AftensmadKnap.position(125, 250);
  AftensmadKnap.size(100, 30);
  AftensmadKnap.style('background-color', '#ECC61A');

  SnackKnap = createButton("Snack")
  SnackKnap.position(125, 300);
  SnackKnap.size(100, 30);
  SnackKnap.style('background-color', '#ECC61A');

  BMIKnap = createButton("BMI")
  BMIKnap.position(230, 500);
  BMIKnap.size(100, 30);
  BMIKnap.style('background-color', '#FFFFFF');

  OpskrifterKnap = createButton("Opskrifter")
  OpskrifterKnap.position(20, 500);
  OpskrifterKnap.size(100, 30);
  OpskrifterKnap.style('background-color', '#FFFFFF');
  }
}

function opskrifter(){

}

function BMI(){
  


  let vægtInput, højdeInput, beregnButton, resultText;
  
  function setup() {
    createCanvas(350, 550);
    background('#f0f0f0');
    
    textSize(26);
    textAlign(CENTER);
    fill('#333');
    text("BMI Beregner", width / 2, 50);
    
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
    
    textAlign(LEFT);
    textSize(18);
    fill('#555');
    text("Højde (CM):", 60, 200);
    text("Vægt (KG):", 60, 130);
    
    beregnButton = createButton('Beregn');
    beregnButton.position(30, 290);
    beregnButton.size(290, 40);
    beregnButton.mousePressed(beregnBMI);
    beregnButton.style('background-color', '#4CAF50');
    beregnButton.style('color', 'white');
    beregnButton.style('border', 'none');
    beregnButton.style('border-radius', '5px');
    
    resultText = createElement('textarea', "Dit BMI er:");
    resultText.position(30, 360);
    resultText.size(290, 80);
    resultText.attribute('readonly', 'true');
    resultText.style('font-size', '18px');
    resultText.style('background-color', '#ffffff');
    resultText.style('border', 'none');
    resultText.style('border-radius', '5px');
    resultText.style('resize', 'none'); // Forhindrer ændring af størrelse
  }
  
  function beregnBMI() {
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

function moltid(){
  
}

function MorgenmadUI(){

  function setup() {
    createCanvas(350, 550);
    background('#f0f0f0');
    
    textSize(26);
    textAlign(CENTER);
    fill('#333');
    text("Morgenmad", width / 2, 50);
  
    
    skyrButton = createButton('Skyr');
    skyrButton.position(25, 95);
    skyrButton.size(290, 40);
    skyrButton.mousePressed();
    skyrButton.style('background-color', 'yellow');
    skyrButton.style('color', 'black');
    skyrButton.style('border', 'none');
    skyrButton.style('border-radius', '5px');
    
    BananButton = createButton('Banan');
    BananButton.position(25, 145);
    BananButton.size(290, 40);
    BananButton.mousePressed();
    BananButton.style('background-color', 'yellow');
    BananButton.style('color', 'black');
    BananButton.style('border', 'none');
    BananButton.style('border-radius', '5px');
    
    BollerButton = createButton('Boller');
    BollerButton.position(25, 195);
    BollerButton.size(290, 40);
    BollerButton.mousePressed();
    BollerButton.style('background-color', 'yellow');
    BollerButton.style('color', 'black');
    BollerButton.style('border', 'none');
    BollerButton.style('border-radius', '5px');
    
    SmoothieButton = createButton('Smoothie');
    SmoothieButton.position(25, 245);
    SmoothieButton.size(290, 40);
    SmoothieButton.mousePressed();
    SmoothieButton.style('background-color', 'green');
    SmoothieButton.style('color', 'black');
    SmoothieButton.style('border', 'none');
    SmoothieButton.style('border-radius', '5px');
    
    AndetButton = createButton('Andet');
    AndetButton.position(25, 295);
    AndetButton.size(290, 40);
    AndetButton.mousePressed();
    AndetButton.style('background-color', 'red');
    AndetButton.style('color', 'black');
    AndetButton.style('border', 'none');
    AndetButton.style('border-radius', '5px');
  
    AndetButton = createButton('Cancel');
    AndetButton.position(15, 395);
    AndetButton.size(150, 40);
    AndetButton.mousePressed();
    AndetButton.style('background-color', 'red');
    AndetButton.style('color', 'black');
    AndetButton.style('border', 'none');
    AndetButton.style('border-radius', '5px');
    
    AndetButton = createButton('Tilføj');
    AndetButton.position(180, 395);
    AndetButton.size(150, 40);
    AndetButton.mousePressed();
    AndetButton.style('background-color', 'green');
    AndetButton.style('color', 'black');
    AndetButton.style('border', 'none');
    AndetButton.style('border-radius', '5px');
  
    resultText = createElement('textarea', "Antal kcal:");
    resultText.position(30, 450);
    resultText.size(290, 80);
    resultText.attribute('readonly', 'true');
    resultText.style('font-size', '18px');
    resultText.style('background-color', '#ffffff');
    resultText.style('border', 'none');
    resultText.style('border-radius', '5px');
    resultText.style('resize', 'none');
    
  }
  }
  
  function frokostUI(){


    function setup() {
      createCanvas(350, 550);
      background('#f0f0f0');
      
      textSize(26);
      textAlign(CENTER);
      fill('#333');
      text("Frokost", width / 2, 50);
    
      
      skyrButton = createButton('Ris');
      skyrButton.position(25, 95);
      skyrButton.size(290, 40);
      skyrButton.mousePressed();
      skyrButton.style('background-color', 'yellow');
      skyrButton.style('color', 'black');
      skyrButton.style('border', 'none');
      skyrButton.style('border-radius', '5px');
      
      BananButton = createButton('Pasta');
      BananButton.position(25, 145);
      BananButton.size(290, 40);
      BananButton.mousePressed();
      BananButton.style('background-color', 'yellow');
      BananButton.style('color', 'black');
      BananButton.style('border', 'none');
      BananButton.style('border-radius', '5px');
      
      BollerButton = createButton('Kylling');
      BollerButton.position(25, 195);
      BollerButton.size(290, 40);
      BollerButton.mousePressed();
      BollerButton.style('background-color', 'yellow');
      BollerButton.style('color', 'black');
      BollerButton.style('border', 'none');
      BollerButton.style('border-radius', '5px');
      
      SmoothieButton = createButton('Toast');
      SmoothieButton.position(25, 245);
      SmoothieButton.size(290, 40);
      SmoothieButton.mousePressed();
      SmoothieButton.style('background-color', 'green');
      SmoothieButton.style('color', 'black');
      SmoothieButton.style('border', 'none');
      SmoothieButton.style('border-radius', '5px');
      
      AndetButton = createButton('Andet');
      AndetButton.position(25, 295);
      AndetButton.size(290, 40);
      AndetButton.mousePressed();
      AndetButton.style('background-color', 'red');
      AndetButton.style('color', 'black');
      AndetButton.style('border', 'none');
      AndetButton.style('border-radius', '5px');
    
      AndetButton = createButton('Cancel');
      AndetButton.position(15, 395);
      AndetButton.size(150, 40);
      AndetButton.mousePressed();
      AndetButton.style('background-color', 'red');
      AndetButton.style('color', 'black');
      AndetButton.style('border', 'none');
      AndetButton.style('border-radius', '5px');
      
      AndetButton = createButton('Tilføj');
      AndetButton.position(180, 395);
      AndetButton.size(150, 40);
      AndetButton.mousePressed();
      AndetButton.style('background-color', 'green');
      AndetButton.style('color', 'black');
      AndetButton.style('border', 'none');
      AndetButton.style('border-radius', '5px');
    
      resultText = createElement('textarea', "Antal kcal:");
      resultText.position(30, 450);
      resultText.size(290, 80);
      resultText.attribute('readonly', 'true');
      resultText.style('font-size', '18px');
      resultText.style('background-color', '#ffffff');
      resultText.style('border', 'none');
      resultText.style('border-radius', '5px');
      resultText.style('resize', 'none');
      
    }
    }

    function AftensmadUI(){

      function setup() {
        createCanvas(350, 550);
        background('#f0f0f0');
        
        textSize(26);
        textAlign(CENTER);
        fill('#333');
        text("Aftensmad", width / 2, 50);
      
        
        skyrButton = createButton('Kartofler');
        skyrButton.position(25, 95);
        skyrButton.size(290, 40);
        skyrButton.mousePressed();
        skyrButton.style('background-color', 'yellow');
        skyrButton.style('color', 'black');
        skyrButton.style('border', 'none');
        skyrButton.style('border-radius', '5px');
        
        BananButton = createButton('Broccoli');
        BananButton.position(25, 145);
        BananButton.size(290, 40);
        BananButton.mousePressed();
        BananButton.style('background-color', 'yellow');
        BananButton.style('color', 'black');
        BananButton.style('border', 'none');
        BananButton.style('border-radius', '5px');
        
        BollerButton = createButton('Kylling');
        BollerButton.position(25, 195);
        BollerButton.size(290, 40);
        BollerButton.mousePressed();
        BollerButton.style('background-color', 'yellow');
        BollerButton.style('color', 'black');
        BollerButton.style('border', 'none');
        BollerButton.style('border-radius', '5px');
        
        SmoothieButton = createButton('Kylling, Ris og Broccoli');
        SmoothieButton.position(25, 245);
        SmoothieButton.size(290, 40);
        SmoothieButton.mousePressed();
        SmoothieButton.style('background-color', 'green');
        SmoothieButton.style('color', 'black');
        SmoothieButton.style('border', 'none');
        SmoothieButton.style('border-radius', '5px');
        
        AndetButton = createButton('Andet');
        AndetButton.position(25, 295);
        AndetButton.size(290, 40);
        AndetButton.mousePressed();
        AndetButton.style('background-color', 'red');
        AndetButton.style('color', 'black');
        AndetButton.style('border', 'none');
        AndetButton.style('border-radius', '5px');
      
        AndetButton = createButton('Cancel');
        AndetButton.position(15, 395);
        AndetButton.size(150, 40);
        AndetButton.mousePressed();
        AndetButton.style('background-color', 'red');
        AndetButton.style('color', 'black');
        AndetButton.style('border', 'none');
        AndetButton.style('border-radius', '5px');
        
        AndetButton = createButton('Tilføj');
        AndetButton.position(180, 395);
        AndetButton.size(150, 40);
        AndetButton.mousePressed();
        AndetButton.style('background-color', 'green');
        AndetButton.style('color', 'black');
        AndetButton.style('border', 'none');
        AndetButton.style('border-radius', '5px');
      
        resultText = createElement('textarea', "Antal kcal:");
        resultText.position(30, 450);
        resultText.size(290, 80);
        resultText.attribute('readonly', 'true');
        resultText.style('font-size', '18px');
        resultText.style('background-color', '#ffffff');
        resultText.style('border', 'none');
        resultText.style('border-radius', '5px');
        resultText.style('resize', 'none');
        
      }
      }