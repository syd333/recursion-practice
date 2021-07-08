// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str){
    // if str has length of 1 return true (not empty!)
    if(str.length === 1) return true;
    // if string has length of 2 return if first index equal to second index 
    if(str.length === 2) return str[0] === str[1];
    // start from index of zero and end 
    // if str at 0 index and string.sliced off the end are the same
    // return the function with slice starting at one and new end 
    if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
    // else return false 
    return false;
}

  // write a function which returns true if the string passed to it is a palindrome 
  // (reads the same forward and backward)
  // otherwise it returns false 