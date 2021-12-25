
/*search the html doc for the header id */
var clickables = document.querySelector("#header");

/*add an event listener for when the user clicks on the header*/
clickables.addEventListener("click", showAlertBox, false)


/*show alert when the user clicks on the header*/
function showAlertBox() {
    alert("Please click on the navigation buttons below instead of the header.");
}

