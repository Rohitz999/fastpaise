// FastPaise Loan Calculator (Production Ready)

function calculateEMI() {
    const amount = document.getElementById("amount").value;
    const days = document.getElementById("days").value;
    const interest = document.getElementById("interest").value;
    const result = document.getElementById("result");

    // Validation
    if (amount === "" || days === "" || interest === "") {
        result.style.color = "red";
        result.innerText = "Please fill all fields";
        return;
    }

    if (amount <= 0 || days <= 0 || interest <= 0) {
        result.style.color = "red";
        result.innerText = "Values must be greater than zero";
        return;
    }

    // Simple interest calculation
    const interestAmount = (amount * interest * days) / (100 * 30);
    const totalPayable = parseFloat(amount) + interestAmount;

    result.style.color = "green";
    result.innerHTML = `
        Interest: ₹${interestAmount.toFixed(2)} <br>
        Total Payable: ₹${totalPayable.toFixed(2)}
    `;
}

// Optional: smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
    });
});
