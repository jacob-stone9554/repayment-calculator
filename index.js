//calculator script
document.addEventListener('DOMContentLoaded', () => {

    //get the elements from the document
    const submitButton = document.getElementById('submit'); // the button
    const amountIn = document.getElementById('mortgage-amount'); // the mortgage amount input field
    const termIn = document.getElementById('mortgage-term'); // the mortgage term input field
    const rateIn = document.getElementById('interest-rate'); // the interest rate field
    const mortgateTypes = document.querySelectorAll('input[name="mortgage-type"]'); // the radio button div

    // add a listener watching for a click event on the submit button
    submitButton.addEventListener('click', (event) => {
        event.preventDefault(); // prevent the form from fully submitting (refreshes the page, you lose the entered data)

        let amount = parseFloat(amountIn.value); // get the value entered representing the amount of the mortgage
        let term = parseFloat(termIn.value); // get the value entered representing the term of the mortgage (in years)
        let rate = parseFloat(rateIn.value); // get the value entered representing the interest rate of the mortgage
        let type;

        //get the selected value from the radio buttons
        mortgateTypes.forEach((input) => {
            if(input.checked) {
                type =input.value;
            }
        });
        
        console.log(amount);
        console.log(term);
        console.log(rate);
        console.log(type);

        // see math.md for a breakdown of how the calculation works

        let r = rate / 100 / 12;
        let n = term * 12;

        //find M first 
        // let monthlyPayment = amount * ((r * (1 + r) ** n)/((1 + r) ** n -1));
        let monthlyPayment = amount * ((r * (1 + r) ** n) / ((1 + r) ** n - 1));
        console.log(monthlyPayment);

    });
});