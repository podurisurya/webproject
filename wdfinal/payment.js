document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let cardNumber = document.getElementById('cardNumber').value;
    let cvv = document.getElementById('cvv').value;
    let expiryDate = document.getElementById('expiryDate').value;
    
    if (validateForm(name, email, cardNumber, cvv, expiryDate)) {
        alert('Payment successful!');
       
    }
});

function validateForm(name, email, cardNumber, cvv, expiryDate) {
    if (name === '' || email === '' || cardNumber === '' || cvv === '' || expiryDate === '') {
        alert('Please fill in all fields.');
        return false;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    if (!validateCardNumber(cardNumber)) {
        alert('Please enter a valid card number.');
        return false;
    }

    if (!validateCVV(cvv)) {
        alert('Please enter a valid CVV.');
        return false;
    }

    if (!validateExpiryDate(expiryDate)) {
        alert('Please enter a valid expiry date.');
        return false;
    }

    return true;
}

function validateEmail(email) {
   
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validateCardNumber(cardNumber) {
    
    let re = /^\d{16}$/;
    return re.test(cardNumber);
}

function validateCVV(cvv) {
   
    let re = /^\d{3}$/;
    return re.test(cvv);
}

function validateExpiryDate(expiryDate) {
    
    let re = /^(0[1-9]|1[0-2])\/\d{2}$/;
    return re.test(expiryDate);
}