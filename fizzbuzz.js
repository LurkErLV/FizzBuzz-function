const fizzBuzz = (begin, end) => {
    let i;
    for(i = begin; i <= end; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else if (i % 3 === 0) {
            console.log('Fizz');
        } else {
            console.log(i);
        }
    }
}

console.log(fizzBuzz(11, 20));