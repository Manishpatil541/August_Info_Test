// 03)Second Highest number in an array
arr = [ 1, 3, 4, 5,7, 6]
arr1 = arr.sort()
console.log(arr1[arr1.length -2])



// 06)Union of two arrays

a = [1, 2, 3]
b = [4, 5, 6, 7]

c = a + b
console.log(c)

// 4) Given an integer array numbers and return all the triplets [nums[i], nums[j], nums[k]] 
// such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0. [5 marks]


let arr2= [-1,0,1,2,-1,-4]
let arr3 =[]

for(let i in arr2){
    for(let j in arr2){
        for(let k in arr2){
            if ((arr2[i] != arr2[j] != arr2[k]) && ((arr2[i] + arr2[j] + arr2[k]) == 0)){
                arr3.push([arr2[i], arr2[j], arr2[k]])
            }
        }
    }
}

console.log(arr3)

// 10) Write a program or algorithm for Two Elements whose sum is closest to zero.

let arr4 = [-23, 12, -35, 45, 20, 36]
let sum = 0
for (let i in arr4){
    for (let j in arr4){
        sum = arr4[i] + arr4[j]
        if (sum == 1){
            console.log(arr4[i], "and" ,arr4[j])
        }
    }
}