
let a1 = 'JavaScript';
if (a1 == 'ECMAScript') {
    console.log('Верно!');
} else {
    console.log('Не знаете? ECMAScript!');
}


let a2 = (2);

    if (a2 > 0) {
        console.log('1');
    } else if (a2 < 0 ){
        console.log("-1");
    } else {
        console.log("0");
    }


let a = 2
let b = 3   
result1 = (a + b < 4) ? 'Мало' : 'Много';
console.log(result1)


let login = 'Директор'
 let message = (login == 'Сотрудник') ? 'Привет' :
    (login == 'Директор') ? 'Здравствуйте' :
    (login == '') ? 'Нет логина' :
    '';

    
 //232412
let nam = ''
let pass = '1233'
if (nam === 'админ'){
    if (pass == 123){
        console.log("Добро опжаловать");
    } else if (pass === '' || pass === null){
        console.log("Отменено");
    } else{ console.log("не верный пороль");}
}else if(nam === '' || nam === null){
    console.log('Отменено')
}else ('Не верный пользователь ')


for(let i = 2; i <= 10; i++){
    if (i % 2 == 0){
        console.log(i)
    }
}


let i = 0;
while (i < 3) {
  console.log( `number ${i}!` );
  i++;
}


let num = 101
do {
  console.log(`число: ${num}`)
} while (num <= 100 && num);



let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { 
  for (let y = 2; y < i; y++) {
    if (i % y == 0) continue nextPrime; 
  }
  console.log(i);
}
browser = 'Edge'
if (browser == 'Edge') {
    console.log("You've got the Edge!");
  } else if (browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera') {
    console.log( 'Okay we support these browsers too' );
  } else {
    console.log( 'We hope that this page looks ok!' );
  }


  number = 3
  switch (number){
    case 0:
        console.log('Вы ввели число 0')
        break;
    case 1:
        console.log('Вы ввели число 1')
        break;
    case 2:
    case 3:
        console.log('Вы ввели число 2 или 3')
        break;
  }


function checkAge(age) {
  return (age > 18) ? true : confirm('Родители разрешили?');
}
function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');
  }

function min (a,b) {
    if (a > b ){
        return b;
    }else return a;
}console.log(min(4,-9))

function pow(x,n){
    if (x > 1 && n > 1){
        return console.log('число меньше 1')
    }else return x ** n 
}
console.log(pow(1.1,12))