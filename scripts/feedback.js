
function validate()  {
  var a = document.forms["feedback_form"]["name"].value;
  var b = document.forms["feedback_form"]["email"].value;
  var c = document.forms["feedback_form"]["subject"].value;
  var d = document.forms["feedback_form"]["message"].value;
  if(a == "" || b == "" || c == "" || d == "") {
    alert("All text boxes cannot be empty. ");
    return false;
  }
  else {
    location.assign("/pages/thank-you.html")
    return true;
  }
}
