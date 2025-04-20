const BALANCE = document.querySelector("#BALANCE");
const incomeCost = document.querySelector("#inc-c");
const expenseCost = document.querySelector("#exc-c");
const text = document.querySelector("#text");
const amount = document.querySelector("#amount");
const fBtn = document.querySelector("#btn");
const form = document.querySelector("#form");
const list = document.querySelector("#list");

const dummyTransactions = [
  { id: 1, text: "Flower", amount: 20, isLoss: true },
  { id: 2, text: "Salary", amount: 300, isLoss: false },
  { id: 3, text: "Book", amount: 30 ,isLoss: true},
  { id: 4, text: "Camera", amount: 150 , isLoss: false},
];

function addTransaction(transactions){
    transactions.forEach(element => {
        const  sign = element.isLoss ? "-":"+";
        const item = document.createElement("li")
    
        item.classList.add(element.isLoss ? "minus" : "plus");
    
        item.innerHTML = `${element.text}<span>${sign} ${element.amount}
        <button class = "del" onclick = "removeTransaction(${element.id})">X</button>`;
        list.appendChild(item)
    });
}

addTransaction(dummyTransactions)