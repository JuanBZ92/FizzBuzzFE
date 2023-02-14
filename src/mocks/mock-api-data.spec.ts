import { FizzBuzz } from "src/entities/FizzBuzz";
import { FizzBuzzRequest } from "src/entities/FizzBuzzRequest";


export const mockSet1 = {
  fizzBuzz: new FizzBuzz({
    firstNumber: 1,
    limit: 10,
    fizzBuzzList: ['1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'FizzBuzz'],
    dateTimeSignature: Date()
  }),
  fizzBuzzRequest: new FizzBuzzRequest({
    firstNumber: 1,
    limit: 10,
  }),
};
