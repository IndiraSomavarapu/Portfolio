const nameRegex = /^[a-zA-Z]+$/; /* alpha characters only */

/* Phone regex adapted from https://stackoverflow.com/questions/4338267/validate-phone-number-with-javascript */
/* vaild formats: (123) 456-7890, (123)456-7890, (123)-456-7890, 123-456-7890, 123.456.7890, 1234567890, +31636363634, 075-63546725 */
const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

/* name@domain.com or my.name123@domain.edu */
const emailRegex = /[\w.-]+@\w+\.[\w.]{2,}/i;

const minimum_comment_length = 10;
const minimum_name_length = 2;
const minimum_value_length = 0;

// validate first/Last name - alpha characters allowed
function nameValidate(name) {

  var field = document.getElementById(name.id);
  /* alpha characters only */
  if (nameRegex.test(field.value)) {
    // if (/^[A-Za-z]+$/.test(field.value)) {
    // clear border and backgroundcolor      
    field.style.bordercolor = "";
    field.style.border = "";
    field.style.backgroundColor = "";
  } else {
    // border sets to red if user clicks out of box when input is incorrect
    field.style.bordercolor = "#ba0000";
    field.style.backgroundColor = "#f5caca";
  }
}
// validate phone Number if entered
function phoneValidate() {

  // let phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

  var field = document.getElementById("phone");
  if (field.value.length > minimum_value_length) {
    if (!phone.value.match(phoneRegex)) {
      field.style.bordercolor = "#ba0000";
      field.style.backgroundColor = "#f5caca";
    } else {
      field.style.bordercolor = "";
      field.style.border = "";
      field.style.backgroundColor = "";
    }
  } else {
    field.style.bordercolor = "";
    field.style.border = "";
    field.style.backgroundColor = "";
  }

}

// validate email address input value
function emailValidate() {

  var field = document.getElementById("email");
  /* name@domain.com or my.name123@domain.edu */
  // if (!/[\w.-]+@\w+\.[\w.]{2,}/i.test(field.value)) {
  if (!emailRegex.test(field.value)) {
    field.style.bordercolor = "#ba0000";
    field.style.backgroundColor = "#f5caca";
  } else {
    field.style.bordercolor = "";
    field.style.backgroundColor = "";
    field.style.border = "";
  }
}

// validate comments - should be more than 10 characters
function commentlengthvalidate() {

  var field = document.getElementById("textarea");
  if (field.value.length < minimum_comment_length) {
    field.style.backgroundColor = "#f5caca";
    field.style.borderColor = "#ba0000";
  } else {
    field.style.backgroundColor = "";
    field.style.borderColor = "";
    field.style.border = "";
  }
}

//Validate form upon submit and show errors on screen
function validateForm() {

  let returnValue = true;
  let fname = document.getElementById("firstName");
  let lname = document.getElementById("lastName");
  let email = document.getElementById("email");
  let phone = document.getElementById("phone");
  let textarea = document.getElementById("textarea");

  let errorContainer = document.getElementById("error_message");
  let errors = document.getElementById("error_list");
  let success = document.getElementById("success_message");

  // let nameRegex = /^[a-zA-Z]+$/; /* alpha characters only */

  // /* Phone regex adapted from https://stackoverflow.com/questions/4338267/validate-phone-number-with-javascript */
  // /* vaild formats: (123) 456-7890, (123)456-7890, (123)-456-7890, 123-456-7890, 123.456.7890, 1234567890, +31636363634, 075-63546725 */
  // let phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

  // /* name@domain.com or my.name123@domain.edu */
  // let emailRegex = /[\w.-]+@\w+\.[\w.]{2,}/i;

  /* resets form styles and empties error message if resubmitted */
  errorContainer.style.display = "none";
  errors.innerHTML = "<p>Error! Please fix the following issues:</p>";
  fname.style.backgroundColor = "#ffffff";
  fname.style.borderColor = "#257cd1";
  lname.style.backgroundColor = "#ffffff";
  lname.style.borderColor = "#257cd1";
  email.style.backgroundColor = "#ffffff";
  email.style.borderColor = "#257cd1";
  phone.style.backgroundColor = "#ffffff";
  phone.style.borderColor = "#257cd1";
  textarea.style.backgroundColor = "#ffffff";
  textarea.style.borderColor = "#257cd1";

  /* form returns false if first name length is less than 2, 
  prints styled error message to DOM  */
  if (fname.value.length < minimum_name_length || !fname.value.match(nameRegex)) {
    errorContainer.style.display = "block";
    if (fname.value.length < minimum_name_length) {
      errors.innerHTML += `<li>First name must have at least 2 characters.</li>`;
    } if (!fname.value.match(nameRegex)) {
      errors.innerHTML += `<li>First name must contain alphabetical characters only.</li>`;
    }
    fname.style.backgroundColor = "#f5caca";
    fname.style.borderColor = "#ba0000";
    returnValue = false;
  }
  /* form returns false if last name length is less than 2
   or non-alphabetical characters are used, prints styled error message to DOM  */
  if (lname.value.length < minimum_name_length || !lname.value.match(nameRegex)) {
    errorContainer.style.display = "block";
    if (lname.value.length < minimum_name_length) {
      errors.innerHTML += `<li>Last name must have at least 2 characters.</li>`;
    } if (!lname.value.match(nameRegex)) {
      errors.innerHTML += `<li>Last name must contain alphabetical characters only.</li>`;
    }
    lname.style.backgroundColor = "#f5caca";
    lname.style.borderColor = "#ba0000";
    returnValue = false;
  }

  /* form returns false if email address is not valid */
  if (!emailRegex.test(email.value)) {
    errorContainer.style.display = "block";
    if (lname.value.length > minimum_value_length) {
      errors.innerHTML += `
        <li>Email address entered is not valid.</li>
        <ul><li>Enter a valid email such as name@domain.com or my.name123@domain.edu</li></ul>
        `;
    } else {
      errors.innerHTML += `
        <li>Enter a valid email such as name@domain.com or my.name123@domain.edu</li>`;
    }

    email.style.backgroundColor = "#f5caca";
    email.style.borderColor = "#ba0000";
    returnValue = false;
  }

  /* if the user typed in something for phone number, validate it */
  if (phone.value.length > minimum_value_length) {
    /* form returns false if phone number entered does not match regex */
    if (!phone.value.match(phoneRegex)) {
      errorContainer.style.display = "block";
      errors.innerHTML += `
        <li>Phone number entered is not valid.</li>
        <ul><li>Enter a valid number such as (123)-456-7890 or 1234567890 or +11234567890</li></ul>
        `;
      phone.style.backgroundColor = "#f5caca";
      phone.style.borderColor = "#ba0000";
      returnValue = false;
    }
  }

  /* form returns false if message length is less than 10 characters,
   prints styled error message to DOM  */
  if (textarea.value.length < minimum_comment_length) {
    errorContainer.style.display = "block";
    errors.innerHTML += `<li>Message must contain at least 10 characters.</li>`;
    textarea.style.backgroundColor = "#f5caca";
    textarea.style.borderColor = "#ba0000";
    returnValue = false;
  }
  /* if no errors, show success message */
  if (returnValue === true) {
    success.innerHTML = "<p>Success! The form was submitted.</p>";
  }
}
function resetForm() {
  document.getElementById("myForm").reset();
  let smsg = document.getElementById("success_message");
  smsg.innerText = '';
  smsg.innerHTML = '';
}
