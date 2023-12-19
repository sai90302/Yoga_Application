// validate age in submit event
document
  .getElementById("admission-form")
  .addEventListener("submit", function (event) {
    const age = document.getElementById("age").value;
    if (age < 18 || age > 65) {
      event.preventDefault();
      alert("Age must be between 18 and 65.");
    }
  });

// display a confirmation message before submitting
document
  .getElementById("admission-form")
  .addEventListener("submit", function (event) {
    if (
      confirm(
        "Please confirm you want to submit the form and pay the monthly fee of Rs. 500."
      )
    ) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  });
