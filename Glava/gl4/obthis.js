let calculator = {
    sum() {
      return this.a + this.b;
    },
    mul() {
      return this.a * this.b;
    },
    read() {
      this.a = 5;
      this.b = 2;
    }
  };
  calculator.read();
  console.log( calculator.sum() );
  console.log( calculator.mul() );