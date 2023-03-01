
function st(){
    steles = ["Джаз", "Блюз"];
    steles.push("Рок-н-ролл");
    steles[Math.floor(steles.length / 2)] = "Классика";
    console.log(steles.shift());
    steles.unshift("Рэп", "Регги")
    console.log(steles)
  }
  st()
  
  
  function sumInput() {
    let numbers = [];
    let value = 6;
  
    for (let i = 1; i <= value; i++) {
      numbers.push(+i);
    }
  
    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }
    
    return sum;
  }
  
  console.log( sumInput() );