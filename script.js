const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

// Hamburger
toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

// Copy Email

$(document).ready(function () {
  // Add class to mailto link
  // Needed to separate the disabling of the default action AND copy email to clipboard
  $("a[href^=mailto]").addClass("mailto-link");

  const mailto = $(".mailto-link");
  const messageCopy = "Click to Copy";
  const messageSuccess = "Copied!";

  mailto.append('<span class="mailto-message"></span>');
  $(".mailto-message").append(messageCopy);

  // Disable opening your email client. yuk.
  $("a[href^=mailto]").click(function () {
    return false;
  });

  // On click, get href and remove 'mailto:' from value
  // Store email address in a variable.
  mailto.click(function () {
    const href = $(this).attr("href");
    const email = href.replace("mailto:", "");
    copyToClipboard("Sam1Falconi@gmail.com");
    $(".mailto-message").empty().append(messageSuccess);
    setTimeout(function () {
      $(".mailto-message").empty().append(messageCopy);
    }, 2000);
  });
});

// Grabbed this from Stack Overflow.
// Copies the email variable to clipboard
function copyToClipboard(text) {
  const dummy = document.createElement("input");
  document.body.appendChild(dummy);
  dummy.setAttribute("value", text);
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
}
