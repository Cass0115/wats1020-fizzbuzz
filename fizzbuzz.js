// Place your FizzBuzz code here.

// Count through 1-20 and firgure out each on is divisible by 3, 5, or both.
for (i=1; 1<=20; i++){
  // For each number to the following check:

  // Divisible by 3
  if(i % 3 === 0){
    // if so, also see if divisble by 5
    if(i % 5 === 0){
      // if divisible by 3 and 5; Print Fizzbuzz
      console.log('FizzBuzz');
    } else {
      // if only divisible by 3; Print Fizz
      console.log('Fizz');
   }
  } else if (1 % 5 === 0){
    // Divisible by 5
    // if so Print Buzz
    console.log('Buzz');
  } else{
    // Not divisible 3 or 5
    // if not Print Number
    console.log(i);
  }
}
