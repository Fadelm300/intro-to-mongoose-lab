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
    
      await app() ;
  }
  
  connect()

    

//Starting the Application:

  const displayMessage = async () => {

    console.log("Welcome to the CRM     ");
    console.log("What would you like to do?");
    console.log("  1. Create a customer ");
    console.log("  2. View all customers");
    console.log("  3. Update a customer ");
    console.log("  4. Delete a customer ");
    console.log("  5. Quit              ");

    const choice = prompt(" choice Number : ");
    
    return choice;
        };

        // prompt
        //window.prompt() instructs the browser to display a dialog with an optional message prompting the user to input some text, and to wait until the user either submits the text or cancels the dialog.
        //=============
        //parseInt
        //The parseInt() function parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).


const app = async () => {
   
         let choice;
        choice = await displayMessage();
        
        if (choice === '1') {

            await Create_C();

        } else if (choice === '2') {

            await find_C();

        } else if (choice === '3') {

            await update_C();

        } else if (choice === '4') {

            await delete_C();

        } else if (choice === '5') {

            console.log('logged out');
        } else {

            console.log('try again ');
        }
        
    
};

        // 1. Create a customer

        const Create_C = async()=>{
            const Name =prompt("Enter customer Name ");

            const age = prompt('Enter customer age: '); 

            const C_Data = { Name, age };

            const  CRM = await crm.create(C_Data);

            console.log("New customer ",  CRM ) ;
        }


        const find_C = async () => {
            const CRM = await   crm.find({});
            console.log("All customers:", CRM);
        };
  

