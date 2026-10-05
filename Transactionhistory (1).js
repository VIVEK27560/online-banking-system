const transactions = [

    {
        date: "10-09-2026",
        id: "2500031060",
        description: "Salary Credit",
        type: "Credit",
        amount: 25000,
        status: "Success"
    },

    {
        date: "11-09-2026",
        id: "2500030363",
        description: "Online Shopping",
        type: "Debit",
        amount: 1500,
        status: "Success"
    },

    {
        date: "12-09-2026",
        id: "2500031699",
        description: "Mobile Recharge",
        type: "Debit",
        amount: 500,
        status: "Success"
    },

    {
        date: "13-09-2026",
        id: "2500030094",
        description: "Bank Transfer",
        type: "Credit",
        amount: 4000,
        status: "Success"
    }
];


function displayTransactions(data) {

    let table =
        document.getElementById("transactionTable");

    table.innerHTML = "";

    data.forEach(function(transaction) {

        let row = document.createElement("tr");

        let typeClass =
            transaction.type === "Credit"
            ? "credit"
            : "debit";

        row.innerHTML = `

            <td>${transaction.date}</td>

            <td>${transaction.id}</td>

            <td>${transaction.description}</td>

            <td class="${typeClass}">
                ${transaction.type}
            </td>

            <td>
                ₹${transaction.amount.toLocaleString("en-IN")}
            </td>

            <td class="success">
                ${transaction.status}
            </td>

        `;

        table.appendChild(row);
    });
}


function filterTransactions() {

    let search =
        document.getElementById("search")
        .value
        .toLowerCase();

    let selectedType =
        document.getElementById("typeFilter")
        .value;


    let filtered =
        transactions.filter(function(transaction) {

            let searchMatch =

                transaction.description
                .toLowerCase()
                .includes(search)

                ||

                transaction.id
                .toLowerCase()
                .includes(search);


            let typeMatch =

                selectedType === "All"

                ||

                transaction.type === selectedType;


            return searchMatch && typeMatch;
        });


    displayTransactions(filtered);
}


document
.getElementById("search")
.addEventListener(
    "keyup",
    filterTransactions
);


document
.getElementById("typeFilter")
.addEventListener(
    "change",
    filterTransactions
);


displayTransactions(transactions);