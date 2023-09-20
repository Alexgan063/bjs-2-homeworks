function compareArrays(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((n, i) => n === arr2[i]);
}

function getUsersNamesInAgeRange(users, gender) {
    if (isNaN(users.length) || users.length === 0 ) {
        return 0;
    }
    
    let result = users.filter((user) => user.gender === gender).map((user) => user.age);
    
    if (isNaN (result.length) || result.length === 0) {
        return 0;
    }
    
    return result.reduce((acc, age) => acc + age, 0) / result.length;
  }
  
  