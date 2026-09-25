const loanForm = document.getElementById("loanForm");
const successMessage = document.getElementById("successMessage");

loanForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const dob = document.getElementById("dob").value;

    const loanType = document.getElementById("loanType").value;
    const amount = document.getElementById("amount").value;
    const tenure = document.getElementById("tenure").value;

    const employment = document.getElementById("employment").value;
    const income = document.getElementById("income").value;
    const address = document.getElementById("address").value.trim();

    if (
        name === "" ||
        email === "" ||
        phone === "" ||
        dob === "" ||
        loanType === "" ||
        amount === "" ||
        tenure === "" ||
        employment === "" ||
        income === "" ||
        address === ""
    ) {
        alert("Please fill in all the fields.");
        return;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }

    if (Number(amount) <= 0) {
        alert("Loan amount must be greater than 0.");
        return;
    }

    if (Number(income) < 0) {
        alert("Monthly income cannot be negative.");
        return;
    }

    if (employment !== "Student" && Number(income) === 0) {
        alert("Monthly income must be greater than 0.");
        return;
    }

    const applicationId =
        "LOAN" + Math.floor(100000 + Math.random() * 900000);

    document.getElementById("applicationId").textContent =
        applicationId;

    loanForm.style.display = "none";
    successMessage.style.display = "block";
});

function newApplication() {
    loanForm.reset();
    loanForm.style.display = "block";
    successMessage.style.display = "none";
}

function goBack() {
    window.location.href = "billpayment.html";
}
