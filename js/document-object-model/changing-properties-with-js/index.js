var cardElements = document.querySelectorAll(".card-body, .card");

cardElements.forEach(function (element) {
  element.style.backgroundColor = "#1f1f1f";
});

const newPageTitle = "Sample Page Title Changed";
document.firstElementChild.firstElementChild.querySelector("title").textContent = newPageTitle;
document.body.style.backgroundColor = "#181818";
document.getElementById("card-title-1").innerHTML = "Title changed";
document.querySelector("p").style.color = "#FFFFFF";
document.getElementById("btn-1").classList.remove("btn-primary");
document.getElementById("btn-1").classList.add("btn-info");
document.querySelector("h5").classList.add("text-info", "fw-bold");
document.querySelector(".card-body").classList.add("rounded-bottom-2");
document.querySelector(".card").classList.add("border-secondary");
