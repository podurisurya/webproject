// js for registration form
const nameField=document.getElementById("name");
const passwordField=document.getElementById("password");
const button=document.getElementById("button");
const confirmField=document.getElementById("confirm");
const emailField=document.getElementById("email");
const optionField=document.getElementById("option");
const form = document.forms["myform"];
function SUBMIT(event) {
    const name=nameField.value;
    const password=passwordField.value;
    const confirmpassword=confirmField.value;
    const option=optionField.value;
    const email=emailField.value;
        if (name == null || name == "") {
            alert("Name can't be blank");
            event.preventDefault();
            return false;
        } else if (password.length < 8) {
            alert("Password must be at least 8 characters long.");
            event.preventDefault();
            return false;
        } else if (password != confirmpassword) {
            alert("Passwords do not match.");
            event.preventDefault();
            return false;
        } else if (email == null || email == "") {
            alert("Email can't be blank");
            event.preventDefault();
            return false;
        }else if(option==null || option==""){
            alert("Applicant must be selected");
            event.preventDefault();
            return false;
        }
        return true;
}
form.addEventListener("submit",SUBMIT);