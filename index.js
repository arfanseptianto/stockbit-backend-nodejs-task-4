function groupAnagrams(arrayOfWords = []) { 
    if (!arrayOfWords.length) 
        return []; 

    var groupOfAnagrams = {}; 
    arrayOfWords.forEach(word => { 
        var letters = word.split("").sort().join(""); 
        if (groupOfAnagrams[letters]) { 
            groupOfAnagrams[letters].push(word); 
        } else { 
            groupOfAnagrams[letters] = [word]; 
        } 
    });

    return Object.values(groupOfAnagrams); 
}

var arr = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua']; 
console.log(groupAnagrams(arr));
