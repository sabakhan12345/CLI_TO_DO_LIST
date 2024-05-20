#! /usr/bin/env node

import inquirer from 'inquirer'
import promptSync from 'prompt-sync'
import chalk from 'chalk';
const prompt = promptSync()

console.log(chalk.bgBlueBright('=================== Welcome To the TO DO List App ======================'));
let myList: string[] = [];


while (true) {
    const answer = await inquirer.prompt([
            {
                type: "list",
                name: "query",
                message: "what do you want to in TO DO Application: ",
                choices: ['View list', 'Add item in list', 'Delete item', 'Quit']
            }
        ]
    )
    if (answer.query === 'View list') {
        console.log(chalk.yellowBright('==============  HERE IS THE LIST ==========='));

        for (let item of myList) {
            console.log(myList.indexOf(item) + ':' + item);
        }
        if (myList[0] === undefined) {
            console.log(chalk.bgRed(`xxxxxxxxxxxxxxxxx NO ENTERIES xxxxxxxxxxxxxxx`));
        }
        console.log('===========================================');

    } else if (answer.query === 'Add item in list') {
        let input = prompt('enter your TO DO in here:');
        myList.push(input);
        console.log(` ======= ${input} ", added in the list. ======`);

    } else if (answer.query === 'Delete item') {
        for (let item of myList) {
            console.log(myList.indexOf(item) + ':' + item);
        }
        let deleteIndex = Number(prompt('Enter Index Number of Item that you Want to Deleted:'));
        console.log(` ==============${myList[deleteIndex]}, is now deleted in the list. =========`);
        myList.splice(deleteIndex, 1);
     
    } else {
        console.log(' ===============  THANKS FOR USING APP  ========== ');
        console.log('==================================================');
        
         break;
    }
}