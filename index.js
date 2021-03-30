const arr = [0,1,2,3,4,1,2,3,8,2,3,3,3]

const k = arr.reduce((a,b) => Math.max(a,b)) //Biggest value in arr
const n = arr.length

//Make array to store count with index 0 to 6 (total = 7 / k + 1)
let count = Array(k + 1).fill(0)

//Count by value, how many 0 comes out, how many 3 comes out, 
for (let i = 0; i < n; i++) {
    ++count[arr[i]]
}

//Counting (start from index 1), current value + before value
for (let i = 1; i <= k; i++) {
    count[i] = count[i] + count[i - 1] 
}

//Make array to store result with index 0 to 6 (total = 7 / k + 1)
let results = []

let newIndex = null;
let countZero = count[0];
for (let i = n - 1; i > 0; i--) { //Decrease the arr variable
    //Get value in count, with value from arr and decrement by 1
    newIndex = count[arr[i]] - 1

    //Store to results
    if (arr[i] == 0 && countZero > 0) { //Only store 0 if count more than 0
        results[newIndex] = arr[i]
    }else{
        results[newIndex] = arr[i]
    }

    //Update count value
    count[arr[i]] = newIndex
}

//Fix first index of result
if (countZero > 0) {
    results[0] = 0
}else{
    results.shift()
}

//Print the results
console.log(results);