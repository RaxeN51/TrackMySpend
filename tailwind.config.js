JavaScript (app.js)
javascript


const expenseNameInput = document.getElementById("expense-name");
const expenseAmountInput = document.getElementById("expense-amount");
const addExpenseButton = document.getElementById("add-expense");
const expensesList = document.getElementById("expenses");
const totalAmountElement = document.getElementById("total-amount");


let expenses = [];


function updateUI() {
    
    expensesList.innerHTML = "";

    
    expenses.forEach((expense, index) => {
        const li = document.createElement("li");
        li.classList.add("flex", "justify-between", "items-center", "p-4", "bg-gray-50", "border", "border-gray-200", "rounded-lg");
        li.innerHTML = `${expense.name}: ${expense.amount} ₽`;

        
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Удалить";
        deleteButton.classList.add("text-red-500", "hover:text-red-700", "font-semibold");
        deleteButton.onclick = () => removeExpense(index);
        li.appendChild(deleteButton);

        expensesList.appendChild(li);
    });

    
    const totalAmount = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    totalAmountElement.textContent = totalAmount + " ₽";
}


function addExpense() {
    const name = expenseNameInput.value.trim();
    const amount = parseFloat(expenseAmountInput.value.trim());

    if (name && !isNaN(amount) && amount > 0) {
        
        expenses.push({ name, amount });

        
        expenseNameInput.value = "";
        expenseAmountInput.value = "";

        
        updateUI();
    } else {
        alert("Пожалуйста, введите корректные данные.");
    }
}


function removeExpense(index) {
    expenses.splice(index, 1);
    updateUI();
}


addExpenseButton.addEventListener("click", addExpense);


expenseAmountInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        addExpense();
    }
});