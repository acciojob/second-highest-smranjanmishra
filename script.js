function secondHighest(arr) {
    if (arr.length < 2) {
        return -Infinity;
    }

    let highest = -Infinity;
    let secondHighest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > highest) {
            secondHighest = highest;
            highest = arr[i];
        } else if (arr[i] > secondHighest && arr[i] < highest) {
            secondHighest = arr[i];
        }
    }

    // Handle the case where all elements are the same
    return secondHighest === -Infinity ? -Infinity : secondHighest;
}