function flatten(oldArr){
    // initialize new empty arr
    var newArr = []
    // loop through oldArr
        for(var i = 0; i < oldArr.length; i++){
            // if index of Array is array 
          if(Array.isArray(oldArr[i])){
              // assign newArr to newarr plus the function flatten at the index of old arr
                newArr = newArr.concat(flatten(oldArr[i]))
          } else {
              // otherwise push new index at old arr into new arr
                newArr.push(oldArr[i])
          }
    } 
    return newArr;
  }
  // flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
  // flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
  // flatten([[1],[2],[3]]) // [1,2,3]
  // flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]

  // write a function which accepts an array of arrays and returns a new array with all values flattened