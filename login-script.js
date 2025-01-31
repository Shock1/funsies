$(document).on("click", ".hero-btn", function () {
  var _0x2d02d0 = $('#name').val().trim().toLowerCase();
  var _0x56e939 = ["lovlove you", "lovloveyou"];
  if (_0x56e939.some(_0x332b22 => _0x2d02d0.includes(_0x332b22))) {
    if (!$(this).parent().hasClass("active")) {
      $(this).parent().stop().addClass("active");
      setTimeout(() => {
        $(".hero-btn").parent().removeClass("active");
      }, 0x7d0);
    }
  }
});
$(".hero-btn .btn").click(function () {
  var _0x357d0c = $("#name").val().trim().toLowerCase();
  var _0x4618eb = ["lovlove you", "lovloveyou"];
  if (_0x4618eb.some(_0xc6c5d8 => _0x357d0c.includes(_0xc6c5d8))) {
    sessionStorage.setItem("authenticated", "true");
    fadeOutContentAndRedirect("valentine/index.html", '#050505');
  } else {
    alert("Please enter the correct word.");
  }
});
$(".question-mark, .tracker-mark, .constitution-mark").click(function () {
  var _0x2b81da = $(this).hasClass("question-mark") ? '#FFE3EC' : $(this).hasClass("tracker-mark") ? "#8a003f4f" : '#272824';
  var _0x176057 = $(this).hasClass("question-mark") ? 'mail/mail.html' : $(this).hasClass("tracker-mark") ? "tracker/index.html" : "constitution/index.html";
  fadeOutContentAndRedirect(_0x176057, _0x2b81da);
});
function fadeOutContentAndRedirect(_0x5a8fcb, _0x3202d3) {
  $("#first-page-content").fadeOut(0x3e8, function () {
    setTimeout(function () {
      $('body').css("background-color", _0x3202d3);
      setTimeout(function () {
        window.location.href = _0x5a8fcb;
      }, 0x3e8);
    }, 0x1f4);
  });
}