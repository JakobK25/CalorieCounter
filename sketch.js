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
    
    MorgenmadKnap = createInput();
    MorgenmadKnap.position(50,50);
    MorgenmadKnap.size(50)
    

    FrokostKnap = createButton(Frokost)
    FrokostKnap.position()

    AftensmadKnap = createButton(Aftensmad)
    AftensmadKnap.position()

    SnackKnap = createButton(Snack)
    SnackKnap.position()

    BMIKnap = createButton(BMI)
    BMIKnap.position()

    OpskrifterKnap = createButton(Opskrifter)
    OpskrifterKnap.position()
  }
}

function opskrifter(){

}

function bmi(){
  
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