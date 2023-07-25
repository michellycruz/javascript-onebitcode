const App = require("./App")

App.createUser("mich@email.com", "Michelly Cruz")
App.createUser("uniqua@email.com", "Uniqua Beckyardigans")
App.createUser("mariajose@email.com", "Maria José")

App.deposit("mich@email.com", 3000)
App.transfer("mich@email.com", "uniqua@email.com", 10)

App.changeLoanFee(10)
App.takeLoan("mariajose@email.com", 2000, 12)

console.table(App.findUser("mich@email.com"))
console.table(App.findUser("mich@email.com").account)
console.table(App.findUser("uniqua@email.com"))
console.table(App.findUser("uniqua@email.com").account)
console.table(App.findUser("mariajose@email.com"))
console.table(App.findUser("mariajose@email.com").account)