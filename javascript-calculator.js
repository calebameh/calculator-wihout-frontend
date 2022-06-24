function calculator(){
    // user inputs first number
    number_1 = parseInt(prompt("Enter the first number: "))

    // user chooses operator
    operation = prompt("What math operation would you like to complete:\r\n 'a' for addition \r\n 'b' for subtraction \r\n 'c' for multiplication \r\n 'd' for division")

    // user inputs second number
    number_2 = parseInt(prompt("Enter the second number: "))

    // output of either Addition, Subtraction, Multiplication, or Division operation. 
    if (operation == 'a') {
        alert(number_1 + number_2);
    } else if (operation == 'b') {
        alert(number_1 - number_2);
    } else if (operation == 'c') {
        alert(number_1 * number_2);
    } else if (operation == 'd') {
        alert(number_1 / number_2);
    } else {
        alert('Invalid Operator. Please try again.');
    }

}






    