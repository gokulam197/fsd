function isPrime(number) {
  if (number <= 1) {
      return false;
  }
  for (let i = 2; i * i <= number; i++) {
    if (number % i === 0) {
          return false;
      }
  }
  return true;
}

function checkFirstElement(arr) {
  if (arr.length === 0) {
      console.log("Array is empty.");
      return;
  }
  const firstElement = arr[0];
  if (isPrime(firstElement)) {
    console.log(firstElement, "is a prime number.");
  } else {
      console.log(firstElement, "is not a prime number.");
  }
}

const myArray = [10, 12, 3, 5, 9];
checkFirstElement(myArray);
