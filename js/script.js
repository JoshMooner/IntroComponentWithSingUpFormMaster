/* Form */
const form = document.getElementById('myForm');


/* Inputs */
const inputs = document.querySelectorAll('#myForm input');

const firstNameInput = document.querySelector(".firstname__input");
const lastNameInput = document.querySelector(".lastname__input");
const emailInput = document.querySelector(".email__input");
const passwordInput = document.querySelector(".password__input");


/* Regular Expresions */
const regularExpresions = {
    firstName: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    lastName: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}


/* Data Array */
const data = {
    firstName: false,
    lastName: false,
    password: false,
    email: false
}


/* Validation Form */
const validateForm = (e) => {
    switch (e.target.name) {
        case "firstname":
            if (regularExpresions.firstName.test(e.target.value)) { //First Name Input Valid
                document.getElementById("firstname__icon").classList.remove("errorIcon");
                firstNameInput.style.border = "1px solid var(--Green)";
                document.querySelector(".first_name_warning_message_empty p").textContent = ""
                data['firstName'] = true;
            } else if (e.target.value == "") {                      //First Name Input Empty
                firstNameInput.style.border = "1px solid var(--Red)";
                document.getElementById("firstname__icon").classList.add("errorIcon");
                document.querySelector(".first_name_warning_message_empty p").textContent = "First Name cannot be empty";
                data['firstName'] = false;
            } else {                                                //First Name Input Invalid
                firstNameInput.style.border = "1px solid var(--Red)";
                document.getElementById("firstname__icon").classList.add("errorIcon");
                document.querySelector(".first_name_warning_message_empty p").textContent = "First Name only can admit letters";
                data['firstName'] = false;
            }
            break;

        case "lastname":
            if (regularExpresions.lastName.test(e.target.value)) {  //Last Name Input Valid
                document.getElementById("lastname__icon").classList.remove("errorIcon");
                lastNameInput.style.border = "1px solid var(--Green)";
                document.querySelector(".last_name_warning_message_empty p").textContent = ""
                data['lastName'] = true;
            } else if (e.target.value == "") {                      //Last Name Input Empty
                lastNameInput.style.border = "1px solid var(--Red)";
                document.getElementById("lastname__icon").classList.add("errorIcon");
                document.querySelector(".last_name_warning_message_empty p").textContent = "Last Name cannot be empty";
                data['lastName'] = false;
            } else {                                                //Last Name Invalid
                lastNameInput.style.border = "1px solid var(--Red)";
                document.getElementById("lastname__icon").classList.add("errorIcon");
                document.querySelector(".last_name_warning_message_empty p").textContent = "Last Name only can admit letters";
                data['lastName'] = false;
            }
            break;

        case "email":
            if (regularExpresions.email.test(e.target.value)) {     //Email Input Valid
                document.getElementById("email__icon").classList.remove("errorIcon");
                emailInput.style.border = "1px solid var(--Green)";
                document.querySelector(".email_warning_message_empty p").textContent = ""
                data['email'] = true;
            } else if (e.target.value == "") {                      //Email Input Empty
                emailInput.style.border = "1px solid var(--Red)";
                document.getElementById("email__icon").classList.add("errorIcon");
                document.querySelector(".email_warning_message_empty p").textContent = "Email Address cannot be empty";
                data['email'] = false;
            } else {                                                //Email Input Invalid
                emailInput.style.border = "1px solid var(--Red)";
                document.getElementById("email__icon").classList.add("errorIcon");
                document.querySelector(".email_warning_message_empty p").textContent = "Looks like this is not an email";
                data['email'] = false;
            }
            break;

        case "password":
            if (e.target.value == "") {                             //Password Input Empty
                passwordInput.style.border = "1px solid var(--Red)";
                document.getElementById("password__icon").classList.add("errorIcon");
                document.querySelector(".password_warning_message_empty p").textContent = "Password cannot be empty";
                data['password'] = false;
            } else {                                                //Password Input Valid
                document.getElementById("password__icon").classList.remove("errorIcon");
                passwordInput.style.border = "1px solid var(--Green)";
                document.querySelector(".password_warning_message_empty p").textContent = ""
                data['password'] = true;
            }
            break;
    }
}


/* Inputs Events Listeners Form */
inputs.forEach((input) => {
    input.addEventListener('keyup', validateForm);
    input.addEventListener('blur', validateForm);
});


/* Submit Evenet Listener */
form.addEventListener('submit', (e) => {
    e.preventDefault(); //Stop refreshing

    /*Validate if all data is true*/
    if (data.firstName && data.lastName && data.email && data.password) {
        //Reset borders style
        firstNameInput.style.border = "1px solid var(--Grayish_Blue)";
        lastNameInput.style.border = "1px solid var(--Grayish_Blue)";
        emailInput.style.border = "1px solid var(--Grayish_Blue)";
        passwordInput.style.border = "1px solid var(--Grayish_Blue)";

        form.reset();   //Reset form
        location.reload();  //Refreseh page
    }

    /*Validate if some input is empty*/

    //Validate if first name input is empty
    if (!data.firstName) {  
        if (document.forms["form1"]["firstname"].value == "") {
            firstNameInput.style.border = "1px solid var(--Red)";
            document.getElementById("firstname__icon").classList.add("errorIcon");
            document.querySelector(".first_name_warning_message_empty p").textContent = "First Name cannot be empty";
            data['firstName'] = false;
        } else {
            firstNameInput.style.border = "1px solid var(--Red)";
            document.getElementById("firstname__icon").classList.add("errorIcon");
            document.querySelector(".first_name_warning_message_empty p").textContent = "First Name only can admit letters";
            data['firstName'] = false;
        }
    }

    //Validate if last name input is empty
    if (!data.lastName) {
        if (document.forms["form1"]["lastname"].value == "") {
            lastNameInput.style.border = "1px solid var(--Red)";
            document.getElementById("lastname__icon").classList.add("errorIcon");
            document.querySelector(".last_name_warning_message_empty p").textContent = "Last Name cannot be empty";
            data['lastName'] = false;
        } else {
            lastNameInput.style.border = "1px solid var(--Red)";
            document.getElementById("lastname__icon").classList.add("errorIcon");
            document.querySelector(".last_name_warning_message_empty p").textContent = "Last Name only can admit letters";
            data['lastName'] = false;
        }
    }

    //Validate if email input is empty
    if (!data.email) {
        if (document.forms["form1"]["email"].value == "") {
            emailInput.style.border = "1px solid var(--Red)";
            document.getElementById("email__icon").classList.add("errorIcon");
            document.querySelector(".email_warning_message_empty p").textContent = "Email Address cannot be empty";
            data['email'] = false;
        } else {
            emailInput.style.border = "1px solid var(--Red)";
            document.getElementById("email__icon").classList.add("errorIcon");
            document.querySelector(".email_warning_message_empty p").textContent = "Looks like this is not an email";
            data['email'] = false;
        }
    }

    //Validate if password input is empty
    if (!data.password) {
        if (document.forms["form1"]["password"].value == "") {
            passwordInput.style.border = "1px solid var(--Red)";
            document.getElementById("password__icon").classList.add("errorIcon");
            document.querySelector(".password_warning_message_empty p").textContent = "Password cannot be empty";
            data['password'] = false;
        } else {
            document.getElementById("password__icon").classList.remove("errorIcon");
            passwordInput.style.border = "1px solid var(--Green)";
            document.querySelector(".password_warning_message_empty p").textContent = ""
            data['password'] = true;
        }

    }

});