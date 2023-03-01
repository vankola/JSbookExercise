
function camelize(str) {
    return str
      .split('-')
      .map( (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1) )
      .join('');
  }
  console.log(camelize("background-color") );
  console.log(camelize("list-style-image") );
  console.log(camelize("-webkit-transition") );
  
  
  
  function filterRange(arr, a, b) {
   
    return arr.filter(item => (a <= item && item <= b));
  }
  let arr = [5, 3, 8, 1];
  let filtered = filterRange(arr, 1, 4);
  console.log( filtered );  
  console.log( arr );  
  
  
  
  function filterRangeInPlace(arr1, a, b) {
  
    for (let i = 0; i < arr1.length; i++) {
      let val = arr1[i];
   
      if (val < a || val > b) {
        arr1.splice(i, 1);
        i--;
      }
    }
  }
  
  let arr1 = [5, 3, 8, 1];
  filterRangeInPlace(arr1, 1, 4);  
  console.log( arr1 );  
  
  
  
  
  
  let arr2 = [5, 2, 1, -10, 8];
  arr2.sort((az, bz) => bz - az);
  console.log( arr2 );
  
  
  
  
  function copySorted(arr3) {
    return arr3.slice().sort();
  }
  let arr3 = ["HTML", "JavaScript", "CSS"];
  let sorted = copySorted(arr3);
  
  console.log( sorted );
  console.log( arr3 );
  
  
  
  function Calculator2() {
  
    this.methods = {
      "-": (a, b) => a - b,
      "+": (a, b) => a + b
    };
  
    this.calculate = function(str) {
      let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2]
  
      if (!this.methods[op] || isNaN(a) || isNaN(b)) {
        return NaN;
      }
  
      return this.methods[op](a, b);
    }
    this.addMethod = function(name, func) {
      this.methods[name] = func;
    };
  }
  
  
  
  
  let vasya = { name: "Вася", age: 25 };
  let petya = { name: "Петя", age: 30 };
  let masha = { name: "Маша", age: 28 };
  let users = [ vasya, petya, masha ];
  let names = users.map(item => item.name);
  console.log( names );  
  
  
  
  
  let vasya1 = { name: "Вася", surname: "Пупкин", id: 1 };
  let petya1 = { name: "Петя", surname: "Иванов", id: 2 };
  let masha1 = { name: "Маша", surname: "Петрова", id: 3 };
  
  let users1 = [ vasya1, petya1, masha1 ];
  
  let usersMapped = users1.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
  }));
   
  console.log( usersMapped[0].id );  
  console.log( usersMapped[0].fullName );  
  
  
  
  
  function sortByAge(arr) {
    arr.sort((a, b) => a.age > b.age ? 1 : -1);
  }
  
  let vasya2 = { name: "Вася", age: 25 };
  let petya2 = { name: "Петя", age: 30 };
  let masha2 = { name: "Маша", age: 28 };
  
  let arr4 = [ vasya2, petya2, masha2 ];
  
  sortByAge(arr4);
   
  console.log(arr4[0].name);  
  console.log(arr4[1].name);  
  console.log(arr4[2].name);  
  
  
  
  
  
  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  
  let arr5 = [1, 2, 3];
  shuffle(arr5);
  console.log(arr5);
  
  
  
  
  function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
  }
  
  let vasya3 = { name: "Вася", age: 25 };
  let petya3 = { name: "Петя", age: 30 };
  let masha3 = { name: "Маша", age: 29 };
  
  let arr6 = [ vasya, petya, masha ];
  
  console.log( getAverageAge(arr6) ); 
  
  
  
  
  function unique(arr) {
    let result = [];
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
  
    return result;
  }
  let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
  ];
  console.log( unique(strings) );  
  
  
  
  
  function groupById(array) {
    return array.reduce((obj, value) => {
      obj[value.id] = value;
      return obj;
    }, {})
  }
  let users4 = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];
  
  let usersById = groupById(users4);
  console.log(usersById)
  