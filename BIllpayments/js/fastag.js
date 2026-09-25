document.getElementById("payButton").addEventListener("click", function(event) {

    let carNumber = document.getElementById("consumerId").value.trim();
    let customerName = document.getElementById("customerName").value.trim();
    let amount = document.getElementById("amount").value.trim();

    // Check if any field is empty
    if (carNumber === "" || customerName === "" || amount === "") {

        event.preventDefault();

        alert("Please enter all details before making payment.");

        return;
    }

    // Check if amount is valid
    if (Number(amount) <= 0) {

        event.preventDefault();

        alert("Please enter a valid amount.");

        return;
    }

})
