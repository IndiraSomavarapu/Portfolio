function validateForm() {
  
    let returnValue = true;
    let fname = document.getElementById("firstName");
    let lname = document.getElementById("lastName");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let textarea = document.getElementById("textarea");
    // let submitBtn = document.getElementById("submit_button");
    let errorContainer = document.getElementById("error_message");
    let errors = document.getElementById("error_list");
    let success = document.getElementById("success_message");
  
    /* Phone regex adapted from https://stackoverflow.com/questions/4338267/validate-phone-number-with-javascript */
    /* vaild formats: (123) 456-7890, (123)456-7890, (123)-456-7890, 123-456-7890, 123.456.7890, 1234567890, +31636363634, 075-63546725 */
    let phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    let phoneRegex2 = /^[(][0-9]{3}[)][-][0-9]{3}[-][0-9]{4}$/; /* my regex */
    /* Email regex adapted from https://www.w3resource.com/javascript/form/email-validation.php */
    let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let nameRegex = /^[a-zA-Z]+$/; /* alpha characters only, + is for one or more letters */
  
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
    
    /* form returns false if first name length is less than 2, prints styled error message to DOM  */
    if (fname.value.length < 2 || !fname.value.match(nameRegex)) {
      errorContainer.style.display = "block";
      if (fname.value.length < 2) {
        errors.innerHTML += `<li>First name must have at least 2 characters.</li>`;
      } if (!fname.value.match(nameRegex)) {
        errors.innerHTML += `<li>First name must contain alphabetical characters only.</li>`;
      }
      fname.style.backgroundColor = "#f5caca";
      fname.style.borderColor = "#ba0000";
      returnValue = false;
    }
    /* form returns false if last name length is less than 2 or non-alphabetical characters are used, prints styled error message to DOM  */
    if (lname.value.length < 2 || !lname.value.match(nameRegex)) {
      errorContainer.style.display = "block";
      if (lname.value.length < 2) {
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
      errors.innerHTML += `
      <li>Email address entered is not valid.</li>
      <ul><li>Enter a valid email such as name@domain.com or my.name123@domain.edu</li></ul>
      `;
      email.style.backgroundColor = "#f5caca";
      email.style.borderColor = "#ba0000";
      returnValue = false;
    }
    /* if the user typed in something for phone number, validate it */
    if (phone.value.length > 0) {
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
    if (textarea.value.length < 10) {
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
  
  