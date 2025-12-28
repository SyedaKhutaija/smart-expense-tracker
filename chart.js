// 📌 Initialize empty data
let expenseData = {};

// 📌 Create chart context
const ctx = document.getElementById("expenseChart").getContext("2d");

let expenseChart = new Chart(ctx, {
    type: "pie",
    data: {
        labels: [],
        datasets: [{
            label: "Expenses by Category",
            data: [],
            backgroundColor: ["#5a4dfc","#fc4d76","#fcbf4d","#4dfc94","#4d9efc","#fc924d"],
        }],
    },
});

// 📌 Function to update chart
function updateChart(category, amount) {
    if (!expenseData[category]) {
        expenseData[category] = 0;
    }
    expenseData[category] += Number(amount);

    expenseChart.data.labels = Object.keys(expenseData);
    expenseChart.data.datasets[0].data = Object.values(expenseData);
    expenseChart.update();
}
