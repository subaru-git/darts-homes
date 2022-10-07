const inputValidator = (input) => input !== ''

module.exports = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the name of the new component?',
    validate: inputValidator,
  },
]
