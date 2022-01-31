function calculateEMI() {
    // grab elements along with values
    var loanAmount = getElement('txt_loan_amount').value;
    var intRate = getElement('txt_int_rate').value;
    var tenure = getElement('txt_tenure').value


    // validate values

    var isValidForm = validateForm(loanAmount, intRate, tenure)

    if (isValidForm === true) {
        // calculate EMI

        var tofixedVal = emiCalculate(loanAmount, tenure, intRate)

        //display the EMI on UI screen

        displayEMI(tofixedVal)
    }

}



function displayEMI(emiValue) {
    var target = document.getElementById('emi_value_container')
    target.innerHTML = 'Your EMI is :' + emiValue + '/- per month'
}


function validateForm(loanAmount, intRate, tenure) {
    if (isNaN(loanAmount)) {
        alert('Enter Valid Loan Amount')
        return false
    }

    if (isNaN(intRate)) {
        alert('Enter Valid Loan Int Rate')
        return false
    }

    if (isNaN(tenure)) {
        alert('Enter Valid Loan Tenure')
        return false
    }

    return true

}

function emiCalculate(amount, tenure, intRate) {

    var EMI = ((amount / tenure) + intRate);

    return Number(EMI).toFixed(2)

}

function getElement(id) {
   return document.getElementById(id)
}

function getByClass(params) {
    
}

function getByTag(params) {
    
}


function name(params) {
    var resp = http.post('https"//api.xyz.com/users', {name:'mani'})
}

