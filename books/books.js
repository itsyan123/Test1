// book.js
function confirmBooking() {
    var confirmBooking = confirm("Confirm booking?");
     if (confirmBooking) {
       document.getElementById("confirm-booking").submit();
     }
 }