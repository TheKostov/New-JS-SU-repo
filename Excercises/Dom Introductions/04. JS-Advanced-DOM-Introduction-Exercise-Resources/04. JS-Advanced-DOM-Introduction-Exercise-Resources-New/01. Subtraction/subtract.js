function subtract() {
    const num1 = document.getElementById('firstNumber').value;
    const num2 = document.getElementById('secondNumber').value;
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = Number(num1) - Number(num2);
}