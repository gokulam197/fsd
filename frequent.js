function findMostFrequentItem(arr) {
    if (arr.length === 0) {
        console.log("Array is empty.");
        return;
    }

    const frequencyMap = {};

    for (const item of arr) {
        frequencyMap[item] = (frequencyMap[item] || 0) + 1;
    }

    let maxFrequency = 0;
    let mostFrequentItem;


    for (const item in frequencyMap) {
        if (frequencyMap[item] > maxFrequency) {
            maxFrequency = frequencyMap[item];
            mostFrequentItem = item;
        }
    }

    console.log("The most frequent item is:",+mostFrequentItem,"("+maxFrequency,"times.)");
}


const myArray = [1, 2, 3, 1, 4, 2, 6, 2, 6, 2, 7];
findMostFrequentItem(myArray);
