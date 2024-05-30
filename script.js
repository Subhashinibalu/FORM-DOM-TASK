var form = document.getElementById("survey-form");
var button = document.getElementById("submit");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let checkboxes = document.getElementsByName("food");

  let food = "";
  let num = 0;
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      num = num + 1;
      food += checkboxes[i].value + " ";
    }
  }
  if (num >= 2) {
    document.getElementById("table-food").innerHTML = food;
    const first = document.getElementById("first-name");
    document.getElementById("table-first").innerHTML = first.value;
    const last = document.getElementById("last-name");
    document.getElementById("table-last").innerHTML = last.value;
    const address = document.getElementById("address");
    document.getElementById("table-address").innerHTML = address.value;
    const pincode = document.getElementById("pincode");
    document.getElementById("table-pincode").innerHTML = pincode.value;
    const gender = document.querySelector("input[name=gender]:checked").value;
    document.getElementById("table-gender").innerHTML = gender;
    const state = document.getElementById("state-name");
    document.getElementById("table-state").innerHTML = state.value;
    const country = document.getElementById("country-name");
    document.getElementById("table-country").innerHTML = country.value;
  } else {
    confirm("select atleast two food items");
  }

  form.reset();
});
