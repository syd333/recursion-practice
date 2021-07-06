//factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

function factorial(num){
   if (num === 0) return 1; 
   return num * factorial(num - 1)
}

// write a function factorial which accepts a number 
// and returns the factorial of that number
// factorial is the product of an integer and all the integers below it
// factorial zero (0!) is always 1 