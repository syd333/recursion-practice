function reverse(str){
    if (str.length === 0) return str;
    return reverse(str.slice(1)) + str[0];
    
  }
  
  // reverse('awesome') // 'emosewa'
  // reverse('rithmschool') // 'loohcsmhtir'

  //write a recursive function which accepts a string and returns a new string in reverse