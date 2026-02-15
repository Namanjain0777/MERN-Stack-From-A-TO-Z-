let desc = document.getElementById("desc");
let amount = document.getElementById("amount");
let date = document.getElementById("date");
let type = document.getElementById("type");
let addBtn = document.getElementById("addBtn");
let list = document.getElementById("list");
let balance = document.getElementById("balance");
let filter = document.getElementById("filter");

let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

addBtn.addEventListener("click", addTransaction);
filter.addEventListener("change", render);

function addTransaction() {

    if (desc.value === "" || amount.value === "") {
        alert("Fill all fields");
        return;
    }

    let transaction = {
        id: Date.now(),
        desc: desc.value,
        amount: +amount.value,
        date: date.value,
        type: type.value
    };

    transactions.push(transaction);
    updateStorage();
    render();

    desc.value = "";
    amount.value = "";
    date.value = "";
}

function render() {

    list.innerHTML = "";

    let filtered = transactions.filter(t => {
        if (filter.value === "all") return true;
        return t.type === filter.value;
    });

    filtered.forEach(t => {

        let li = document.createElement("li");
        li.classList.add(t.type);

        li.innerHTML = `
            <span>${t.desc} (₹${t.amount})</span>
            <button onclick="deleteTransaction(${t.id})">X</button>
        `;

        list.appendChild(li);
    });

    calculateBalance();
    updateChart();
}

function deleteTransaction(id) {
    transactions = transactions.filter(t => t.id !== id);
    updateStorage();
    render();
}

function calculateBalance() {
    let total = 0;

    transactions.forEach(t => {
        if (t.type === "income") {
            total += t.amount;
        } else {
            total -= t.amount;
        }
    });

    balance.innerText = total;
}

function updateStorage() {
    localStorage.setItem("transactions", JSON.stringify(transactions));
}

let chart;

function updateChart() {

    let income = 0;
    let expense = 0;

    transactions.forEach(t => {
        if (t.type === "income") income += t.amount;
        else expense += t.amount;
    });

    if (chart) chart.destroy();

    let ctx = document.getElementById("chart");

    chart = new Chart(ctx, {
        type: "doughnut",
        data: {
            labels: ["Income", "Expense"],
            datasets: [{
                data: [income, expense],
                backgroundColor: ["green", "red"]
            }]
        }
    });
}

render();
