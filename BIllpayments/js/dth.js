document.getElementById("payButton").addEventListener("click", function(event) {

    let consumerId = document.getElementById("consumerId").value.trim();
    let customerName = document.getElementById("customerName").value.trim();
    let amount = document.getElementById("amount").value.trim();

    if (consumerId === "" || customerName === "" || amount === "") {

        event.preventDefault();

        alert("Please enter all details before making payment.");

        return;
    }

    if (Number(amount) <= 0) {

        event.preventDefault();

        alert("Please enter a valid amount.");

        return;
    }

})
