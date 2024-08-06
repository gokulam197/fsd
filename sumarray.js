function sumOfSquares(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] * arr[i];
    }
    return sum;
}

// Example usage:
const myArray = [1, 2, 3, 4, 5];
const result = sumOfSquares(myArray);
console.log("The sum of squares of the aray elements is:",+result);
