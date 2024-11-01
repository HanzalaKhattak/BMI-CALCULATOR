function calculateBMI(){
    var weight = parseFloat(document.getElementById('weight').value)
    var height = parseFloat(document.getElementById('height').value)
    var bmi = weight / (height * height)
    if(weight === 0 && weight <= 635){
        alert("Input a valid Weight!")
    }
    if(height === 0){
        alert("Input a Valid Height!");
    }
    let catagory;
    switch (true) {
        case (bmi < 18.5):
            catagory = "Underweight";
            break;
        case(bmi >= 18.5 && bmi < 25 ):
            catagory = "Normal Weight";
            break;
        case (bmi >= 25 && bmi < 30):
            catagory = "Overweight";
            break;
        case (bmi >= 30):
            catagory = "Obesity";
            break;
        default:
            catagory = "Invlaid BMI!";
            break;
    }
    
    bmi = (bmi.toFixed(2));
    var result = document.getElementById('result')
    result.innerHTML = (`Your BMI is ${bmi} which falls in the catagory ${catagory}.`)
}
