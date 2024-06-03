

function sumNums(nums){
    let sum = 0
    for(let i = 2; i < nums.length; i++){

sum += Number(nums[i])
    }
    return sum
}

console.log(sumNums(process.argv))