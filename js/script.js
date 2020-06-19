var searchButton = document.querySelector(".search-button");
var searchForm = document.querySelector(".search-form");

searchButton.addEventListener("click", function (evt) {
  // evt.preventDefault();
  if (searchForm.classList.contains("modal-show")) {
    searchForm.classList.remove("modal-show");
    searchForm.classList.add("modal-close");
  } else {
    searchForm.classList.remove("modal-close");
    searchForm.classList.add("modal-show");
  }
});