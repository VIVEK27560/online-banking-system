document.getElementById("payButton").addEventListener("click", function(event) {

    let connectionId = document.getElementById("consumerId").value.trim();
    let providerName = document.getElementById("customerName").value.trim();
    let amount = document.getElementById("amount").value.trim();

    // Check if any field is empty
    if (connectionId === "" || providerName === "" || amount === "") {

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