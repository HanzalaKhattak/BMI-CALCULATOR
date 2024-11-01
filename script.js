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
    bmi = (bmi.toFixed(2));
    var result = document.getElementById('result')
    result.innerHTML = bmi
}
