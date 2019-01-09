var button = document.querySelector(".hotels-search-form-button");
var searchForm = document.querySelector(".hotels-search-form");
var checkinDate = searchForm.querySelector("[name=checkin-date]");
var checkoutDate = searchForm.querySelector("[name=checkout-date]");
var adultsQty = searchForm.querySelector("[name=adults-qty]");
var childrenQty = searchForm.querySelector("[name=children-qty]");

if (searchForm) {
	searchForm.classList.add("hotels-search-form-close");
}

button.addEventListener("click", function (evt) {
	evt.preventDefault();
	searchForm.classList.remove("hotels-search-form-error");
	searchForm.classList.toggle("hotels-search-form-close");
	searchForm.classList.toggle("hotels-search-form-show");
	checkinDate.focus();
});

searchForm.addEventListener("submit", function (evt) {
	if (!checkinDate.value || !checkoutDate.value || !adultsQty.value || !childrenQty.value) {
		evt.preventDefault();
		searchForm.classList.remove("hotels-search-form-show");
		searchForm.classList.remove("hotels-search-form-error");
		searchForm.offsetWidth = searchForm.offsetWidth;
		searchForm.classList.add("hotels-search-form-error");
	}
});