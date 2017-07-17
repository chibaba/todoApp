function getOddLengthWordsAtProperty(obj, key) {
  // your code here
arr = [];
  if (typeof(obj[key])=='object') {
    for (var a in obj[key]) {
      if (obj[key][a].length % 2 !==0) {
        arr.push(obj[key][a]);
      }
   }
  }
  return arr;
}

return Math.min(word1.length, word2.length, word3.length);
  
}

