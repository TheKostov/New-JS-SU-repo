function divide(num1, num2){

    while(num2) {
        var t = num2;
        num2 = num1 % num2;
        num1 = t;
      }
      console.log(num1);
}
    
divide(2154, 458);