// 1) Calculate Difference
function calculateDifference(a, b) {
    return a - b;
}

function showDifference() {
    const num1 = parseFloat(document.getElementById('diffNum1').value);
    const num2 = parseFloat(document.getElementById('diffNum2').value);
    const result = calculateDifference(num1, num2);
    document.getElementById('diffResult').textContent = `Difference: ${result}`;
}

// 2) Is Odd
function isOdd(num) {
    return num % 2 !== 0;
}

function showIsOdd() {
    const num = parseFloat(document.getElementById('oddNum').value);
    const result = isOdd(num) ? "Odd" : "Even";
    document.getElementById('oddResult').textContent = result;
}

// 3) Find Minimum
function findMin(arr) {
    return Math.min(...arr);
}

function showMin() {
    const arr = document.getElementById('minArray').value.split(',').map(Number);
    const result = findMin(arr);
    document.getElementById('minResult').textContent = `Minimum: ${result}`;
}

// 4) Filter Even Numbers
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

function showEvenNumbers() {
    const arr = document.getElementById('evenArray').value.split(',').map(Number);
    const result = filterEvenNumbers(arr);
    document.getElementById('evenResult').textContent = `Even Numbers: ${result.join(', ')}`;
}

// 5) Sort Array Descending
function sortArrayDescending(arr) {
    return arr.sort((a, b) => b - a);
}

function showSortedDescending() {
    const arr = document.getElementById('sortArray').value.split(',').map(Number);
    const result = sortArrayDescending(arr);
    document.getElementById('sortResult').textContent = `Sorted: ${result.join(', ')}`;
}

// 6) Lowercase First Letter
function lowercaseFirstLetter(str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
}

function showLowercaseFirstLetter() {
    const str = document.getElementById('lowercaseStr').value;
    const result = lowercaseFirstLetter(str);
    document.getElementById('lowercaseResult').textContent = `Lowercased: ${result}`;
}

// 7) Count Vowels
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    return [...str].filter(char => vowels.includes(char)).length;
}

function showVowelCount() {
    const str = document.getElementById('vowelStr').value;
    const result = countVowels(str);
    document.getElementById('vowelResult').textContent = `Vowel Count: ${result}`;
}

// 8) Find Average
function findAverage(arr) {
    const sum = arr.reduce((acc, num) => acc + num, 0);
    return sum / arr.length;
}

function showAverage() {
    const arr = document.getElementById('avgArray').value.split(',').map(Number);
    const result = findAverage(arr);
    document.getElementById('avgResult').textContent = `Average: ${result}`;
}
