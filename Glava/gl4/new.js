
function Calculator() {

    this.read = function() {
      this.a = 5;
      this.b = 2;
    };
    this.sum = function() {
      return this.a + this.b;
    };
    this.mul = function() {
      return this.a * this.b;
    };
  }
  let calculator1 = new Calculator();
  calculator1.read();
  console.log( "Sum=" + calculator1.sum() );
  console.log( "Mul=" + calculator1.mul() );

  
   
function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
      this.value += 12;
    };
  }
  let accumulator = new Accumulator(1);
  accumulator.read();
  accumulator.read();
  console.log(accumulator.value);