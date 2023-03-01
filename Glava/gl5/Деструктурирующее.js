


let user5 = {
    name: "John",
    years: 30
  };
  
  let {name, years: age, isAdmin = false} = user5;
  console.log( name );  
  console.log( age );  
  console.log( isAdmin );  
  
  
  
  
  function topSalary(salaries) {
    let max = 0;
    let maxName = null;
    for(const [name, salary] of Object.entries(salaries)) {
      if (max < salary) {
        max = salary;
        maxName = name;
      }
    }
  
    return maxName;
  }
  let salaries3 = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  console.log(topSalary(salaries3))