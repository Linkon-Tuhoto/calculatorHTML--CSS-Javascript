function calculate(operation){
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultElement = document.getElementById('result');

    let result;

    switch(operation){
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0){
                result = "Cannot divide by zero !"
            }
            else{
                result = num1 / num2;
            }
            break;
        default:
            "Invalid Operation";
    }

         if (typeof result === 'number') {
                resultElement.innerText = result.toFixed(2);
            } 
        else {
                resultElement.innerText = result;
            }

         resultElement.style.transform = "scale(1.1)";
            setTimeout(() => {
        resultElement.style.transform = "scale(1)";
            }, 200);
}

document.getElementById('num1').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') calculate('add');
        });

        document.getElementById('num2').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') calculate('add');
        });
