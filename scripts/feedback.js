
function validate()  {
  var x = document.forms["feedback_form"]["name"]["email"]["subject"]["message"].value;
  if(x == "") {
    alert("All text boxes cannot be empty. ");
    return false;
  }
}
