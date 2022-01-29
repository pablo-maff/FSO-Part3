const mongoose = require('mongoose')
/*
// print process.argv
process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});
*/
if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>');
  process.exit(1)
}
const password = process.argv[2]
const name = process.argv[3]
const number = process.argv[4]

const url = 
  `mongodb+srv://pab:${password}@phonebook.nrtc8.mongodb.net/phonebook?retryWrites=true&w=majority`

mongoose.connect(url)

const personSchema = new mongoose.Schema({
  name: String,
  number: String
})


const Person = mongoose.model('Person', personSchema)

const person = new Person({
  name: name,
  number: number
})


if (process.argv.length === 5) {
  person.save().then(result => {
    console.log(`added ${name} number ${number} to phonebook`);
    mongoose.connection.close()
  })
}

else {
  Person.find({}).then(result => {
    console.log('phonebook:');
    result.forEach(person => {
      console.log(`${person.name} ${person.number}`);
    })
    mongoose.connection.close()
  })
}


