function sumSalaries(salaries) {
    let sum = 0;
    for (let salary of Object.values(salaries)) {
      sum += salary;
    }
  
    return sum; 
  }
  
  let salaries1 = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  
  console.log( sumSalaries(salaries1) ); 


  function count(obj) {
    return Object.keys(obj).length;
  }
  let user4 = {
    name: 'John',
    age: 30
  };
  console.log( count(user4) );
  
  