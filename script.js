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

$(function () {
  var row = $(".zlhomeAnimate");
  var $window = $(window);

  $window.on("scroll", function () {
    var pad = Math.max(0, $window.height() - 100);
    var scrollTop = $window.scrollTop();

    if (
      !row.hasClass("visible") &&
      $window.scrollTop() + pad > row.offset().top
    ) {
      row.addClass("visible");
      return;
    }

    // if (row.hasClass('visible') &&
    //     $window.scrollTop() + pad < row.offset().top) {
    //   row.removeClass('visible');
    //   return;
    // }
  });

  var row2 = $(".zlhomeAnimate2");
  var $window = $(window);

  $window.on("scroll", function () {
    var pad = Math.max(0, $window.height() - 100);
    var scrollTop = $window.scrollTop();

    if (
      !row2.hasClass("visible") &&
      $window.scrollTop() + pad > row2.offset().top
    ) {
      row2.addClass("visible");
      return;
    }

    // if (row2.hasClass('visible') &&
    //     $window.scrollTop() + pad < row2.offset().top) {
    //   row2.removeClass('visible');
    //   return;
    // }
  });
});

// Scroll Reveal
const options = {
  delay: 500,
  distance: "0px",
  duration: 1000,
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  interval: 0,
  opacity: 0,
  origin: "bottom",
  rotate: {
    x: 2,
    y: 0,
    z: 0,
  },
  scale: 1,
  cleanup: true,
  container: document.documentElement,
  desktop: true,
  mobile: true,
  reset: true,
  useDelay: "always",
  viewFactor: 0.0,
  viewOffset: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  afterReset: function (el) {},
  afterReveal: function (el) {},
  beforeReset: function (el) {},
  beforeReveal: function (el) {},
};

ScrollReveal().reveal(".headline", options);

// FitVitds Class

const heroVid = document.querySelector(".video-container-main");
console.log(heroVid);

let windowSize = document.documentElement.clientWidth;

if (windowSize < 800) {
  heroVid.classList.add("fitvidsignore");
}

// window.onresize = function () {
//   location.reload();
// };
