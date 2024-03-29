const inquirer   = require('inquirer');

module.exports = {

  // type, name, message, choices[, default] properties
  // list1 = ['Express Server', new inquirer.Separator(), 'API-Server']

  cfQuickStartQuestions: () => {
    const questions = [
      {
        type: 'list',
        name: 'build',
        message: 'What Would You Like To Build?',
        choices: ['Express Server', 'API-Server']
      },
      {
        type: 'input',
        name: 'name',
        message: 'Name Your Project',
        validate: function( value ) {
          if (value.length) {
            return true;
          } else {
            return 'Please Enter A Name For Your Project';
          }
        }
      },
      {
        type: 'list',
        name: 'license',
        message: 'Which License Would You Like To Use?',
        choices: ['MIT', 'ISC', 'Apache License 2.0']
      }
    ];
    return inquirer.prompt(questions);
  },
}