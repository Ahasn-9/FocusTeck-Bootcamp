const prompt = require('prompt-sync')();

let toDoList = [];
let choice;

do {
    console.log("\n=== TO-DO LIST MENU ===");
    console.log("1. Add Task");
    console.log("2. View Tasks");
    console.log("3. Delete Task");
    console.log("4. Exit");

    choice = prompt("Enter your choice (1-4): ");

    if (choice === "1") {
        let task = prompt("Enter your task: ");
        toDoList.push(task);
        console.log(" Task added.");
    } 
    else if (choice === "2") {
        if (toDoList.length === 0) {
            console.log("Your to-do list is empty.");
        } else {
            console.log("\n Your Tasks:");
            for (let i = 0; i < toDoList.length; i++) {
                console.log(`${i + 1}. ${toDoList[i]}`);
            }
        }
    } 
    else if (choice === "3") {
        let delIndex = parseInt(prompt("Enter task number to delete: ")) - 1;
        if (delIndex >= 0 && delIndex < toDoList.length) {
            let removed = toDoList.splice(delIndex, 1);
            console.log(` Task "${removed}" deleted.`);
        } else {
            console.log(" Invalid task number.");
        }
    } 
    else if (choice === "4") {
        console.log(" Exiting the To-Do List. Goodbye!");
    } 
    else {
        console.log(" Invalid choice. Please enter 1 to 4.");
    }

} while (choice !== "4");
