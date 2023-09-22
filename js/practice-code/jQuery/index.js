//selecting all h1 and changing the color
$("h1").css("color", "red");

//selecting all h1 and changing the the html content
$("h1").html("<a>Manipulating buttons</a>");

//selecting button and adding a click function to change the color of all h1 tags
$("#buttonChangeTextColor").click(function () {
  $("h1").css("color", "blue");
});

//selecting button and adding a click function to add new buttons: before / after / prepend / append
$("#buttonAddNewButtons").on("click", function () {
  $("h1").before("<button>Button before</button>");
  $("h1").after("<button>Button after</button>");
  $("h1").prepend("<button>Button prepended</button>");
  $("h1").append("<button>Button appended</button>");
});

//selecting button and adding a click function to toggle the the title
$("#buttonToggleTitle").on("click", function () {
  $("h1").fadeToggle();
});

//selecting button and adding a click function to slide toggle the the title
$("#buttonToggleSlide").on("click", function () {
  $("h1").slideToggle();
});

//selecting button and adding a mouseover function to change the color of all h1 tags
$("#buttonMouseOver").on("mouseover", function () {
  $("h1").css("color", "purple");
});

//selecting button and adding a mouseover function to change the padding of all h1 tags
$("#buttonIncreasePadding").on("click", function () {
  $(".titleBox").css("padding", "150px");
});

//selecting button and adding a click function to animate h1 tags
$("#buttonAnimateTitle").on("click", function () {
  $("h1").animate({opacity: 0.5}).animate({opacity: 1}).slideUp().slideDown().animate({opacity: 0.5}).animate({opacity: 1});
});

//selecting the document and adding a function to change the text of all h1 tags for the key that is pressed
$(document).on("keypress", function (event) {
  $("h1").text(event.key);
});
