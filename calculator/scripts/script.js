/*Function to display numbers*/
function displayNumber(num){
    var displayField = document.getElementById('display');
    displayField.value += num;
}

/*Function to clear display*/
function clearDisplay(){
    var displayField = document.getElementById('display');
    displayField.value = '';
}

/*Function to calculate and display result*/
function calculateResult(){
    var displayField = document.getElementById('display');
    try {
        if (/\/0/.test(displayField.value)) {
            throw new Error("Division by zero");
        }
        displayField.value = eval(displayField.value);
    } catch (e) {
        if (e.message === "Division by zero") {
            displayField.value = 'Cannot divide by zero';
        } else {
            displayField.value = 'Error';
        }
    }
}
