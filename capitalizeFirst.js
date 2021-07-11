function capitalizeFirst (arr) {
    if (arr.length === 1) {
        return [arr[0].toUpperCase()]
    }
    let res = capitalizeWords(array.slice(0, -1));
    res.push(array.slice(array.length-1)[0].toUpperCase());
    return res;

  }
  
  // capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

  // given an array of strings
  // capitalize the first letter of each string in the array
