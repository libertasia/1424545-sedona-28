var searchButton=document.querySelector(".search-button"),searchForm=document.querySelector(".search-form"),adultCount=searchForm.querySelector("#adults"),childrenCount=searchForm.querySelector("#children"),checkInDate=searchForm.querySelector("#check-in-date"),checkOutDate=searchForm.querySelector("#check-out-date"),isStorageSupported=!0,storage="";searchForm.classList.remove("modal-show"),searchForm.classList.add("modal-close"),searchForm.classList.remove("modal-error");try{adultCountStored=localStorage.getItem("adultCount"),childrenCountStored=localStorage.getItem("childrenCount"),adultCountStored&&(adultCount.value=adultCountStored),childrenCountStored&&(childrenCount.value=childrenCountStored)}catch(e){isStorageSupported=!1}searchButton.addEventListener("click",function(e){searchForm.classList.contains("modal-show")?(searchForm.classList.remove("modal-show"),searchForm.classList.add("modal-close"),searchForm.classList.remove("modal-error")):(adultCountStored&&(adultCount.value=adultCountStored),childrenCountStored&&(childrenCount.value=childrenCountStored),searchForm.classList.remove("modal-close"),searchForm.classList.add("modal-show"))}),searchForm.addEventListener("submit",function(e){adultCount.value&&childrenCount.value&&checkInDate.value&&checkOutDate.value?isStorageSupported&&(localStorage.setItem("adultCount",adultCount.value),localStorage.setItem("childrenCount",childrenCount.value)):(e.preventDefault(),searchForm.classList.remove("modal-error"),searchForm.offsetWidth,searchForm.classList.add("modal-error"),checkInDate.value?checkOutDate.value?adultCount.value?childrenCount.value||childrenCount.focus():adultCount.focus():checkOutDate.focus():checkInDate.focus())}),window.addEventListener("keydown",function(e){27===e.keyCode&&searchForm.classList.contains("modal-show")&&(e.preventDefault(),searchForm.classList.remove("modal-show"),searchForm.classList.remove("modal-error"),searchForm.classList.add("modal-close"))});