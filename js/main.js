//Task
let user = {}
user.name = "John"
user.surname = "Smith"
user.name = "Pete"
delete user.name

//Task
function isEmpty(obj) {
  for (let key in obj) {
    return false
  }
  return true
}

//Task
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let sum = 0;
for (let key in salaries) {
  sum += salaries[key]
}

alert(sum)

//Task
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == 'number') {
      obj[key] *= 2
    }
  }
}
