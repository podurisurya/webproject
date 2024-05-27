//js for login
document.addEventListener('DOMContentLoaded', (event) => {
    const nameField = document.getElementById("name");
    const passwordField = document.getElementById("password");
    const optionField = document.getElementById("option");
    const form = document.forms["myform"];

    function SUBMIT(event) {
        const name = nameField.value;
        const password = passwordField.value;
        const option = optionField.value;

        if (name === null || name === "") {
            alert("Name can't be blank");
            event.preventDefault();
            return false;
        } else if (password.length < 8) {
            alert("Password must be at least 8 characters long.");
            event.preventDefault();
            return false;
        } else if (option === null || option === "") {
            alert("Applicant must be selected");
            event.preventDefault();
            return false;
        }

        // If all validations pass, form will be submitted and redirected to "front.html"
        return true;
    }

    form.addEventListener("submit", SUBMIT);
});
