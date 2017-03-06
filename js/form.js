$(document).ready(function() {

  // $('form[name="contact"]').submit(function() {
  //   validate();
  // });

});

function validate() {
  var email = $('input[type="email"]').val();
  if (email.indexOf('@') == -1 || email.indexOf('.') == -1) {
    alert('Put in a legit email dude!');
    return false;
  } else {
    return true;
  };
}

function adjust_textarea(h) {
  h.style.height = "20px";
  h.style.height = (h.scrollHeight)+"px";
}
