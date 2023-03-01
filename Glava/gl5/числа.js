function readNumber() {
    let num;
  
    do {
      num = 7;
    } while ( !isFinite(num) );
    if (num === null || num === '') return null;
  
    return +num;
  }
  console.log(readNumber())


  
  function random (min, max){
    return min + Math.random() * (max - min);
  }
  console.log(random(1, 5))




function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
  console.log( randomInteger(1, 3) );
  console.log( randomInteger(1, 3) );
  
  
