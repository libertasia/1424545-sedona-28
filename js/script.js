var searchButton = document.querySelector(".search-button");
var searchForm = document.querySelector(".search-form");
var adultCount = searchForm.querySelector("#adults");
var childrenCount = searchForm.querySelector("#children");

var isStorageSupported = true;
var storage = "";

try {
  adultCountStored = localStorage.getItem("adultCount");
  childrenCountStored = localStorage.getItem("childrenCount");
  if (adultCountStored) {
    adultCount.value = adultCountStored;
  }
  if (childrenCountStored) {
      childrenCount.value = childrenCountStored;
  }
} catch (err) {
  isStorageSupported = false;
}

searchButton.addEventListener("click", function (evt) {
  if (searchForm.classList.contains("modal-show")) {
    // hide form
    searchForm.classList.remove("modal-show");
    searchForm.classList.add("modal-close");
  } else {
    // show form
    if (adultCountStored) {
        adultCount.value = adultCountStored;
    }
    if (childrenCountStored) {
        childrenCount.value = childrenCountStored;
    }
    searchForm.classList.remove("modal-close");
    searchForm.classList.add("modal-show");
  }
});

searchForm.addEventListener("submit", function (evt) {
    if (!adultCount.value || !childrenCount.value) {
      evt.preventDefault();
      if (!childrenCount.value) {
        childrenCount.focus()
      }
      if (!adultCount.value) {
          adultCount.focus()
      }
    } else {
        if (isStorageSupported) {
          localStorage.setItem("adultCount", adultCount.value);
          localStorage.setItem("childrenCount", childrenCount.value);
        }
      }
  });