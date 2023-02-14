export class FizzBuzzRequest {
    firstNumber?: number;
    limit?: number;
  
    constructor(obj?: any) {
      Object.assign(this, obj);
    }
  }
  