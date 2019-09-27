// const factorial = n => n === 0 ? 1 : n * factorial(n - 1);
const factorial = n => {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

const assertEqual = (act, exp) => {
  console.log(act === exp ? 'passed' : 'failed: ' + act + ', expected ' + exp);
};

// n                return
// factorial(5) === 5 * factorial(4)
// factorial(4) === 4 * factorial(3)
// factorial(3) === 3 * factorial(2)
// factorial(2) === 2 * factorial(1)
// factorial(1) === 1 * factorial(0)
// factorial(0) === 1
//              === 5 * 4 * 3 * 2 * 1 === 120;
console.log('Tests for factorial()...');
assertEqual(factorial(4), 24);
assertEqual(factorial(5), 120);


// Is a string a palindrome?
// * if the string is made of no letters or just one letter, then true
// * else, compare the first and last letters
// * if first !== last, then false
// * else, strip first and last letters, isPal(remaining str)
// * use this answer for smaller str as answer for orig str

// const isPalindrome = str => str.length < 2 ? true : str[0] !== str[-1] ? false : isPalindrome(str.slice(1, -1));
const isPalindrome = str => {
  if (str.length < 2) {
    return true;
  } else if (str[0] !== str[str.length - 1]) {
    return false;
  } else {
    str = str.slice(1, -1); // (gets smaller)
    return isPalindrome(str);
  }
};

// str = 'rotor'
// -> isPalindrome('oto') -> isPalindrome('t') === true
console.log('Tests for isPalindrome()...');
assertEqual(isPalindrome('rotor'), true);
assertEqual(isPalindrome('james'), false);



// Recursive algorithm for computing (x ** n) --
// - The base case is when n = 0, and x ** 0 = 1.
// - If n is positive and even, rescursively compute (y = x ** n/2), and then x ** n = y * y.   <- Notice that you can get away with making
// - If n is positive and odd, recursively compute (x ** n - 1), so that the exponent            just one recursive call in this case. Compute
// either is 0 or is positive and even. Then, x ** n = x ** n - 1 * x.                           x ** n/2 just once, then multiply the result
// - If n is negative, recursively compute x ** -n, so that the exponent becomes positive.       of this recursive call by itself.
// Then, x ** n = 1/x ** -n.
const power = (x, n) => {
  if (n < 0) {
    return 1 / power(x, -n);
  } else if (n === 0) {
    return 1;
  } else if (n % 2 === 1) {
    return x * power(x, n - 1);
  } else {
    var y = power(x, n/2);
    return y * y;
  }
}

console.log('Tests for power()...');
assertEqual(power(3, 0), 1);
assertEqual(power(3, 3), 27);
assertEqual(power(3, 4), 81);
assertEqual(power(3, -1), 1/3);
