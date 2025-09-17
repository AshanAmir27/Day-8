const numbers = [1, 2, 3, 4, 5, 4, 5, 6, 7, 8, 9, 0, 5];
const words = ["Hi", "it's", "me", "Umar"];
let arr = [1, 2, 3];

const outputDiv = document.getElementById("output");
const explanationDiv = document.getElementById("explanation");
const buttonsContainer = document.getElementById("buttons-container");

// ---- Helper Functions ----
function addNumber(arr, num) {
  let newArr = [];
  for (let i = 0; i < getLength(arr); i++) {
    newArr[i] = arr[i];
  }
  newArr[getLength(arr)] = num; // manual push
  return newArr;
}

function removeLast(arr) {
  let newArr = [];
  let len = getLength(arr);
  for (let i = 0; i < len - 1; i++) {
    newArr[i] = arr[i]; // manual pop
  }
  return newArr;
}

function getFirst(arr) {
  return arr[0];
}

function getIndex(arr, value) {
  for (let i = 0; i < getLength(arr); i++) {
    if (arr[i] === value) return i;
  }
  return -1;
}

function getLength(arr) {
  let count = 0;
  for (let i in arr) count++;
  return count;
}

function reverseArray(arr) {
  let len = getLength(arr);
  let newArr = [];
  for (let i = 0; i < len; i++) {
    newArr[i] = arr[len - 1 - i];
  }
  return newArr;
}

function getEvens(arr) {
  let newArr = [];
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) newArr[j++] = arr[i];
  }
  return newArr;
}

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < getLength(arr); i++) {
    sum += arr[i];
  }
  return sum;
}

function joinWords(arr) {
  let sentence = "";
  for (let i = 0; i < getLength(arr); i++) {
    sentence += arr[i];
    if (i < getLength(arr) - 1) sentence += " ";
  }
  return sentence;
}

function removeDuplicates(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let found = false;
    for (let j = 0; j < newArr.length; j++) {
      if (arr[i] === newArr[j]) {
        found = true;
        break;
      }
    }
    if (!found) newArr[newArr.length] = arr[i];
  }
  return newArr;
}

function findMaxValue(arr) {
  let max = arr[0];
  for (let i = 1; i < getLength(arr); i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}

function findMin(arr) {
  let min = arr[0];
  for (let i = 1; i < getLength(arr); i++) {
    if (arr[i] < min) min = arr[i];
  }
  return min;
}

function sortArray(arr) {
  let newArr = [...arr];
  let len = getLength(newArr);
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (newArr[j] > newArr[j + 1]) {
        let temp = newArr[j];
        newArr[j] = newArr[j + 1];
        newArr[j + 1] = temp;
      }
    }
  }
  return newArr;
}

function includesValue(arr, value) {
  for (let i = 0; i < getLength(arr); i++) {
    if (arr[i] === value) return true;
  }
  return false;
}

function mergeArrays(arr1, arr2) {
  let newArr = [];
  let i = 0;
  for (let j = 0; j < getLength(arr1); j++) newArr[i++] = arr1[j];
  for (let j = 0; j < getLength(arr2); j++) newArr[i++] = arr2[j];
  return newArr;
}

function mergeArraysAlt(arr1, arr2) {
  let newArr = [];
  for (let i = 0; i < getLength(arr1); i++) newArr[newArr.length] = arr1[i];
  for (let j = 0; j < getLength(arr2); j++) newArr[newArr.length] = arr2[j];
  return newArr;
}

function countOccurrences(arr, value) {
  let count = 0;
  for (let i = 0; i < getLength(arr); i++) {
    if (arr[i] === value) count++;
  }
  return count;
}

function isSorted(arr) {
  for (let i = 1; i < getLength(arr); i++) {
    if (arr[i] < arr[i - 1]) return false;
  }
  return true;
}

function rotateArray(arr, positions) {
  let len = getLength(arr);
  let newArr = [];
  for (let i = 0; i < len; i++) newArr[(i + positions) % len] = arr[i];
  return newArr;
}

function addWithoutPush(arr) {
  arr[arr.length] = 4;
  return arr;
}

function removeWithoutPop(arr) {
  arr.length = arr.length - 1;
  return arr;
}

// ---- Display Helper ----
function showResult(input, result, explanation) {
  outputDiv.innerHTML = `<strong>Input:</strong> ${JSON.stringify(input)}<br><strong>Result:</strong> ${JSON.stringify(result)}`;
  explanationDiv.innerHTML = `<strong>Explanation:</strong> ${explanation}`;
}

// ---- Buttons ----
function addButton(label, func) {
  const btn = document.createElement("button");
  btn.innerText = label;
  btn.onclick = func;
  buttonsContainer.appendChild(btn);
}

// Base buttons
addButton("Add number to array", () => showResult(numbers, addNumber(numbers, 6), "Added number to end of array"));
addButton("Remove last element", () => showResult(numbers, removeLast(numbers), "Removed last element"));
addButton("Get first element", () => showResult(numbers, getFirst(numbers), "Got first element"));
addButton("Get index of value 5", () => showResult(numbers, getIndex(numbers, 5), "Got index of 5"));
addButton("Get array length (no .length)", () => showResult(numbers, getLength(numbers), "Counted elements without .length"));
addButton("Reverse array", () => showResult(numbers, reverseArray(numbers), "Reversed the array"));
addButton("Get even numbers", () => showResult(numbers, getEvens(numbers), "Filtered even numbers"));
addButton("Sum of array", () => showResult(numbers, sumArray(numbers), "Summed all numbers"));
addButton("Join words", () => showResult(words, joinWords(words), "Joined words into a sentence"));
addButton("Remove duplicates", () => showResult([1,2,2,3,3,4,4,5], removeDuplicates([1,2,2,3,3,4,4,5]), "Removed duplicates"));

// Extra buttons
addButton("Find Maximum Value", () => showResult(numbers, findMaxValue(numbers), "Found maximum value"));
addButton("Find Minimum", () => showResult(numbers, findMin(numbers), "Found minimum value"));
addButton("Sort Array", () => showResult(numbers, sortArray(numbers), "Sorted array"));
addButton("Check if includes 7", () => showResult(numbers, includesValue(numbers, 7), "Checked if includes 7"));
addButton("Count Occurrences of 5", () => showResult(numbers, countOccurrences(numbers, 5), "Counted occurrences of 5"));
addButton("Check if Sorted", () => showResult(numbers, isSorted(numbers), "Checked if array is sorted"));
addButton("Rotate Array by 3", () => showResult(numbers, rotateArray(numbers, 3), "Rotated array by 3"));
addButton("Merge Arrays", () => showResult([1,2,3], mergeArrays([1,2,3],[4,5,6]), "Merged arrays"));
addButton("Merge Arrays (Alt)", () => showResult([1,2,3], mergeArraysAlt([1,2,3],[4,5,6]), "Merged arrays (alternative method)"));
addButton("Add Number without Push", () => showResult(arr, addWithoutPush([...arr]), "Added number without push"));
addButton("Remove Element without Pop", () => showResult(arr, removeWithoutPop([...arr]), "Removed element without pop"));
