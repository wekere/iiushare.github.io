function confirm()  {
  alert("Thank you for your feedback!")
}

function validate()  {
  var x = document.forms["name"]["email"]["subject"]["message"].value;
  if(x == "") {
    alert("All text boxes cannot be empty. ");
    return false;
  }
  else {
    confirm();
  }
}
