const container = document.querySelector(".container"),
  pwShowHide = document.querySelectorAll(".showHidePw"),
  pwFields = document.querySelectorAll(".password"),
  signUp = document.querySelector(".signup-link"),
  login = document.querySelector(".login-link");

//   js code to show/hide password and change icon
pwShowHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    pwFields.forEach((pwField) => {
      if (pwField.type === "password") {
        pwField.type = "text";
        pwShowHide.forEach((icon) => {
          icon.classList.replace("uil-eye-slash", "uil-eye");
        });
      } else {
        pwField.type = "password";
        pwShowHide.forEach((icon) => {
          icon.classList.replace("uil-eye", "uil-eye-slash");
        });
      }
    });
  });
});

// js code to appear signup and login form
signUp.addEventListener("click", () => {
  container.classList.add("active");
});
login.addEventListener("click", () => {
  container.classList.remove("active");
});

var expanded = false;

function showCheckboxes() {
  var checkboxes = document.getElementById("checkboxes");
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
}
$("input:checkbox").on("click", function () {
  var $box = $(this);
  if ($box.is(":checked")) {
    var group = "input:checkbox[name='" + $box.attr("name") + "']";

    $(group).prop("checked", false);
    $box.prop("checked", true);
  } else {
    $box.prop("checked", false);
  }
});
function setErrormsg(el, errorMessage) {
  el.nextElementSibling.textContent = errorMessage;
  el.className = "errorborder";
}
function setSuccessMsg(el) {
  el.nextElementSibling.textContent = "";
  el.className = "errorborder";
}
const form = document.getElementById("formm");
const email = document.getElementById("emi");
const phone = document.getElementById("phn");
console.log(form);
// const phone = document.getElementById("phn");
// const isEmail = (email) => {
//   var atSymbol = email.indexOf("@");
//   if (atSymbol < 1) return false;
//   var dot = email.lastindexOf(".");
//   if (dot <= atSymbol + 2) return false;
//   if (dot === email.length - 1) return false;
//   return true;
// };
const validateEmail = (email) => {
  var mailformat =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return String(email).toLowerCase().match(mailformat);
};
const validate = () => {
  var validemail = email.value.trim();
  const validphone = phone.value.trim();

  if (validemail === "") {
    setErrormsg(email, "email cannot be blank");
  } else if (!validateEmail(validemail)) {
    setErrormsg(email, "invalid email");
  } else if (validphone.length < 10 || validphone.length > 10) {
    setErrormsg(phone, "invalid phone number");
  } else {
    setSuccessMsg(email);
    setErrormsg(phone);
  }
};

form.addEventListener("submit", (event) => {
  console.log("ANKUR rec");
  event.preventDefault();
  validate();
});
