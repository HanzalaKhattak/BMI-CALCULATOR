function calculateBMI(){
    var weight = parseFloat(document.getElementById('weight').value)
    var height = parseFloat(document.getElementById('height').value)
    var bmi = weight / (height * height)
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
            break;}
    if(weight === 0 || weight > 635){
        alert("Input a valid Weight!");
        return false;}
    if(height === 0 || height >= 2.72){
        alert("Input a Valid Height!");
        return false;}
    bmi = (bmi.toFixed(2));
    var result = document.getElementById('result')
    result.innerHTML = (`Your BMI is ${bmi} which falls in the catagory "${catagory}".`)
}
