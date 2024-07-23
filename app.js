const prompt = require('prompt-sync')();
const dotenv = require("dotenv")
dotenv.config()
const mongoose = require("mongoose")
const crm = require('./CRM');
const CRM = require('./CRM');

//==================
const connect = async () => {
    await mongoose.connect(process.env.MONGODB_URL)
    console.log("Connected to MongoDB")
    await runQueries()
    await mongoose.disconnect()
    console.log("Disconnected from MongoDB")
    process.exit()
}

const runQueries = async () => {
    console.log("Queries running.")
    await app();
}

connect()

//Starting the Application:

const displayMessage = async () => {
    console.log("Welcome to the CRM");
    console.log("What would you like to do?");
    console.log("  1. Create a customer ");
    console.log("  2. View all customers");
    console.log("  3. Update a customer ");
    console.log("  4. Delete a customer ");
    console.log("  5. Quit");

    const choice = prompt(" choice Number : ");
    return choice;
};

// Application logic
const app = async () => {
    let choice = await displayMessage();

    switch (choice) {
        case '1':
            await Create_C();
            break;
        case '2':
            await find_C();
            break;
        case '3':
            await update_C();
            break;
        case '4':
            await delete_C();
            break;
        case '5':
            console.log('Quit');
            break;
        default:
            console.log('Invalid choice');
            break;
    }
};

// 1. Create a customer
const Create_C = async () => {
    const Name = prompt("Enter customer Name ");
    const age = prompt('Enter customer age: ');
    const C_Data = { Name, age };
    const newCRM = await crm.create(C_Data);
    console.log("New customer: ", newCRM);
}

// 2. View all customers
const find_C = async () => {
    const allCustomers = await crm.find({});
    console.log("All customers:", allCustomers);
};

// 3. Update a customer
const update_C = async () => {
    console.log('Below is a list of customers:');
    // Show the users from the data
    await find_C();

    const id = prompt('Enter Customer Id: ');
    const Name = prompt('New Name: ');
    const age = prompt('New age: ');
    
    // findByIdAndUpdate will find the element in the data using the id and will replace the name and age
    const updatedCustomer = await CRM.findByIdAndUpdate(id, { Name, age });
    console.log("Updated customer:", updatedCustomer);
}



// 4. Delete a customer
const delete_C = async () => {
    // Show the users from the data
    await find_C();

    const id = prompt('Enter customer Id: ');
    const deletedCustomer = await CRM.findByIdAndDelete(id);
    
    console.log('Removed customer:', deletedCustomer);
    console.log("Customer Removed");
};