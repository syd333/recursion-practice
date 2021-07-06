function countDown(num){
    if (num <= 0) {
        console.log('all done')
        return;
    }
    console.log(num)
    num--;
    countDown(num)
}

// is num less than or equal to 0? no!
// print 3
// 3 - 1 = 2
// calls function with 2
// goes back to line 2 