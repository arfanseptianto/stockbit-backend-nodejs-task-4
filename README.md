# STOCKBIT BACKEND NODE.JS TASK - 4

Anagram adalah istilah dimana suatu string jika dibolak balik ordernya maka akan sama eg. 'aku' dan 'kua' adalah Anagram, 'aku' dan 'aka' bukan Anagram. 

Dibawah ini ada array berisi sederetan Strings. 
```js
['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua']
```
Silahkan kelompokkan/group kata-kata di dalamnya sesuai dengan kelompok Anagramnya, 
Catatan: tidak boleh menggunakan syntax es6 map, reduce, find, filter 

### Expected Outputs 
```js
[ 
    ["kita", "atik", "tika"], 
    ["aku", "kua"], 
    ["makan"], 
    ["kia"] 
]
```

### ANSWER
```js
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
```

### EXECUTE THE JS FILE
You can use Node.JS to run the js file to view the ouput from terminal by executing:
```bash
node index.js
```
