
// function validate()  {
//   var a = document.forms["feedback_form"]["name"].value;
//   var b = document.forms["feedback_form"]["email"].value;
//   var c = document.forms["feedback_form"]["subject"].value;
//   var d = document.forms["feedback_form"]["message"].value;
//   // do {
//   //   location.assign("thank_you.html");
//   // } while (a == "" || b == "" || c == "" || d == "");
//   if(a == "" || b == "" || c == "" || d == "") {
//     alert("Every text box must be filled. ");
//     return false;
//   }
//   else {
//     location.href("thank_you.html");
//   }
// }

function validate() {
  if (window.confirm('Click "OK" to continue. ')) {
    alert("Feedback submitted. ")
    window.location = "thank_you.html"
  }
  else {
    return;
  }
}
