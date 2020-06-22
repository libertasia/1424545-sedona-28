var searchButton = document.querySelector(".search-button");
var searchForm = document.querySelector(".search-form");
var adultCount = searchForm.querySelector("#adults");
var childrenCount = searchForm.querySelector("#children");
var checkInDate = searchForm.querySelector("#check-in-date");
var checkOutDate = searchForm.querySelector("#check-out-date");

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
    searchForm.classList.remove("modal-error");
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
    if (!adultCount.value || !childrenCount.value || !checkInDate.value || !checkOutDate.value) {
      evt.preventDefault();
      searchForm.classList.remove("modal-error");
      searchForm.offsetWidth = searchForm.offsetWidth;
      searchForm.classList.add("modal-error");
      if (!checkInDate.value) {
        checkInDate.focus()
      } else
      if (!checkOutDate.value) {
        checkOutDate.focus()
      } else
      if (!adultCount.value) {
        adultCount.focus()
      } else
      if (!childrenCount.value) {
        childrenCount.focus()
      }
    } else {
        if (isStorageSupported) {
          localStorage.setItem("adultCount", adultCount.value);
          localStorage.setItem("childrenCount", childrenCount.value);
        }
      }
  });

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (searchForm.classList.contains("modal-show")) {
      evt.preventDefault();
      searchForm.classList.remove("modal-show");
      searchForm.classList.remove("modal-error");
      searchForm.classList.add("modal-close");
    }
  }
});