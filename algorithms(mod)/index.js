const inquirer = require('inquirer');
const colors = require('colors');

const { task86a, task87, task226, task559 } = require('./main.js');

const choices = [
    { name: 'Roman Pylypyak - task 86(bonus)', value: task86a },
    { name: 'Roman Pylypyak - task 87', value: task87 },
    { name: 'Roman Pylypyak - task task226', value: task226 },
    { name: 'Roman Pylypyak - task task559', value: task559 },
    { name: 'Exit', value: 'exit' }
];

const questions = [{
    type: 'list',
    name: 'task',
    message: 'Choose task from list please>',
    choices
}];

function ask() {
    inquirer.prompt(questions).then(answers => {
        if (answers.task !== 'exit') {
            answers.task(inquirer).then(res => {
                if (res === 'back') {
                    ask();
                }
            });
        }
    });
}

ask();