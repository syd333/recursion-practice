function sumRange(num) {
    if (num === 1) return 1;
    return num + sumRange(num - 1)
}

// sumRange(3)
// return 3 + sumRange(2) // (3-1) = 2
                // calls function 
                //return 2  + sumRange(1) // (2-1) = 1
                                // calls function 
                                // sumRange(1)
                                // return 1 // bc if(num === 1)

            // 3 + 2 + 1
            // = 6