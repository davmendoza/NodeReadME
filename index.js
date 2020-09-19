const fs = require('fs');
const inquirer = require('inquirer');
const axios = require('axios');
const generate = require('./utils/generateMarkdown');



// array of questions for user

const questions = [
    {
        name: 'title',
        type: 'input',
        message: 'What is the title of your project?'

    },
    {
        name: 'description',
        type: 'input',
        message: 'Provide a description.'
    },
    {
        name: 'tableOfContents',
        type: 'input',
        message: 'Provide a Table of Contents. '
    },
    {
        name: 'installation',
        type: 'input',
        message: 'What are the installation requirments?'
    },
    {
        name: 'usage',
        type: 'input',
        message: 'What is your linkedin username?'
    },
    {
        name: 'license',
        type: 'list',
        message: 'What is the license?'
    },
    {
        name: 'contribution',
        type: 'input',
        message: 'Who will be contributing?'

    },
    {
        name: 'tests',
        type: 'input',
        message: 'What are the test requirements?'

    },
    {
        name: 'username',
        type: 'input',
        message: 'What is your GitHub Username?'

    },
    {
        name: 'email',
        type: 'input',
        message: 'What is your email?'

    },
    {

        type: 'input',
        name: 'repo',
        message: 'Input the link to the github repo'
    
    },


];

inquirer
    .prompt(questions)
    .then(function(data) {
        const queryUrl = `https://api.github.com/users/${data.username}`;

        axios
        .get(queryUrl)
        .then(function (res) {  
            const usersGithubInfo = {
                name: res.data.name
            };
        })

        //fs.writeFile( , )




    });


// function to write README file




//create prompts for user
//function that returns a string
// pass it over through fs.writefile
// video capture you interacting with it
