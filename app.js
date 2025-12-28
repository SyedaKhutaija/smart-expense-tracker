function addExpense() {
    const amount = document.getElementById("amount").value;
    const category = document.getElementById("category").value;
    const note = document.getElementById("note").value;

    if (amount === "" || category === "") {
        alert("Enter amount & category");
        return;
    }

    total += Number(amount);
    document.getElementById("total").innerText = total;

    let li = document.createElement("li");
    li.textContent = `${category}: ₹${amount} - ${note}`;
    document.getElementById("expense-list").appendChild(li);

    // 📌 Update chart here
    updateChart(category, amount);

    document.getElementById("amount").value = "";
    document.getElementById("category").value = "";
    document.getElementById("note").value = "";
}
