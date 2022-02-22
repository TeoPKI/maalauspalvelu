function numOnly(evt) {
    return /[0-9\+]/i.test(evt.key);
}

function validateForm() {
    alert('Viesti lähetetty!');
    return true;
}