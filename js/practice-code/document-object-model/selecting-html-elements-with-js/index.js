document.querySelector("h1").style.color = "green";

const listTag = document.createElement("li");
const linkTag = document.createElement("a");

//setting attributes for linkTag
linkTag.textContent = "Bing";
linkTag.href = "https://www.bing.com/";

const linkTag2 = document.createElement("a");
listTag.appendChild(linkTag);

//setting attributes for linkTag
linkTag2.textContent = "Google before the checkbox";
linkTag2.href = "https://www.google.com/";

//inserting before input element
const elementToAddBeforeTheCheckbox = document.querySelector("input").parentElement;
elementToAddBeforeTheCheckbox.insertBefore(linkTag2, elementToAddBeforeTheCheckbox.children[1]);

//inserting after the first item
const elementToAddLastToTheList = document.querySelector("li.item");
elementToAddLastToTheList.appendChild(listTag);

//changing an attribute (Google to Bing)
const changingGoogleToBing = document.querySelectorAll("a");
changingGoogleToBing.forEach(function (element) {
  element.setAttribute("href", linkTag);
});
