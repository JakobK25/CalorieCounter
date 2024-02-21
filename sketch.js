
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

function BMI(){

}

function moltid(){
  
}