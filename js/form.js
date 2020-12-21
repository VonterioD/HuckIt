//First/Last name regex
const nameRe = /^([a-zA-Z])+$/;
const emailRe = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const lastName = document.querySelector("#form-lname");
const firstName = document.querySelector("#form-fname");
const email = document.querySelector("#form-email");
const contactForm = document.getElementById("contact-form");
const formContainer = document.getElementById("form-container")

document.querySelector("#contact-form").addEventListener("submit", e => {

    e.preventDefault();
    let result;
    let complete = true;

    //Test first name input
    result = testRegex(nameRe, firstName.value);
    if (!result) {
       complete = false;
    }

    //Test the last name
    result = testRegex(nameRe, lastName.value);
    if (!result) {
        complete = false;
    }

    //Test the email
    result = testRegex(emailRe, email.value);
    if (!result) {
        complete = false;
    }

    if (complete) {
        //Create Div
        const div = document.createElement("div");

        //Add class name to div
        div.classList.add("success");

        //Add text to div
        div.textContent = "Awesome! We will contact you soon!"

        //Append div to container below header
        formContainer.insertBefore(div, contactForm);

        //Clear Fields
        firstName.value = "";
        lastName.value = "";
        email.value = "";

        setTimeout(() => {
            document.querySelector(".success").remove();
            return true;
        }, 2000);
    }

    else {
        //Create Div
        const div = document.createElement("div");

        //Add class name to div
        div.classList.add("failure");

        //Add text to div
        div.textContent = "One or more of the fields entered are not correct."

        //Append div to container below header
        formContainer.insertBefore(div, contactForm);

        setTimeout(() => {
            document.querySelector(".failure").remove();
        }, 2000);
        
    }

});

function testRegex(regex, value) {
    return regex.test(value);
}