const numbers = [1, 2, 3, 4, 5, 4, 5, 6, 7, 8, 9, 0, 5];
const words = ["Hi", "it's", "me", "Umar"];

const outputDiv = document.getElementById("output");
const explanationDiv = document.getElementById("explanation");
const buttonsContainer = document.getElementById("buttons-container");

// Existing helper functions...

function addNumber(arr, num) {
  let newArr = [];
  for (let i = 0; i < getLength(arr); i++) {
    newArr[i] = arr[i];
  }
  newArr[getLength(arr)] = num;
  return newArr;
}

function removeLast(arr) {
  let newArr = [];
  let len = getLength(arr);
  for (let i = 0; i < len - 1; i++) {
    newArr[i] = arr[i];
  }
  return newArr;
}

function getFirst(arr) {
  return arr[0];
}

function getIndex(arr, value) {
  for (let i = 0; i < getLength(arr); i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
}

function getLength(arr) {
  let count = 0;
  for (let i in arr) {
    count++;
  }
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
    if (arr[i] % 2 === 0) {
      newArr[j++] = arr[i];
    }
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
    if (i < getLength(arr) - 1) {
      sentence += " ";
    }
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
    if (!found) {
      newArr[newArr.length] = arr[i];
    }
  }
  return newArr;
}

// ===== NEW FUNCTIONS =====

// 11. Find Maximum Value
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < getLength(arr); i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// 12. Count Occurrences of a Value
function countOccurrences(arr, value) {
  let count = 0;
  for (let i = 0; i < getLength(arr); i++) {
    if (arr[i] === value) {
      count++;
    }
  }
  return count;
}

// 13. Check if Array is Sorted
function isSorted(arr) {
  for (let i = 1; i < getLength(arr); i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
}

// 14. Merge Two Arrays
function mergeArrays(arr1, arr2) {
  let newArr = [];
  for (let i = 0; i < getLength(arr1); i++) {
    newArr[newArr.length] = arr1[i];
  }
  for (let j = 0; j < getLength(arr2); j++) {
    newArr[newArr.length] = arr2[j];
  }
  return newArr;
}

// 15. Rotate Array Elements
function rotateArray(arr, positions) {
  let len = getLength(arr);
  let newArr = [];
  for (let i = 0; i < len; i++) {
    newArr[(i + positions) % len] = arr[i];
  }
  return newArr;
}

// ===== Display helper =====
function showResult(input, result, explanation) {
  outputDiv.innerHTML = `<strong>Input:</strong> ${JSON.stringify(input)}<br><strong>Result:</strong> ${JSON.stringify(result)}`;
  explanationDiv.innerHTML = `<strong>Explanation:</strong> ${explanation}`;
}

// ===== Buttons =====
// Existing buttons...
const btn1 = document.createElement("button");
btn1.innerText = "Add number to array";
btn1.onclick = () => showResult(numbers, addNumber(numbers, 6), "Added number to end of array");
buttonsContainer.appendChild(btn1);

const btn2 = document.createElement("button");
btn2.innerText = "Remove last element";
btn2.onclick = () => showResult(numbers, removeLast(numbers), "Removed last element");
buttonsContainer.appendChild(btn2);

const btn3 = document.createElement("button");
btn3.innerText = "Get first element";
btn3.onclick = () => showResult(numbers, getFirst(numbers), "Got first element");
buttonsContainer.appendChild(btn3);

const btn4 = document.createElement("button");
btn4.innerText = "Get index of value 5";
btn4.onclick = () => showResult(numbers, getIndex(numbers, 5), "Got index of 5");
buttonsContainer.appendChild(btn4);

const btn5 = document.createElement("button");
btn5.innerText = "Get array length (no .length)";
btn5.onclick = () => showResult(numbers, getLength(numbers), "Counted elements without .length");
buttonsContainer.appendChild(btn5);

const btn6 = document.createElement("button");
btn6.innerText = "Reverse array";
btn6.onclick = () => showResult(numbers, reverseArray(numbers), "Reversed the array");
buttonsContainer.appendChild(btn6);

const btn7 = document.createElement("button");
btn7.innerText = "Get even numbers";
btn7.onclick = () => showResult(numbers, getEvens(numbers), "Filtered even numbers");
buttonsContainer.appendChild(btn7);

const btn8 = document.createElement("button");
btn8.innerText = "Sum of array";
btn8.onclick = () => showResult(numbers, sumArray(numbers), "Summed all numbers");
buttonsContainer.appendChild(btn8);

const btn9 = document.createElement("button");
btn9.innerText = "Join words";
btn9.onclick = () => showResult(words, joinWords(words), "Joined words into a sentence");
buttonsContainer.appendChild(btn9);

const btn10 = document.createElement("button");
btn10.innerText = "Remove duplicates";
btn10.onclick = () =>
  showResult(
    [1, 2, 2, 3, 3, 4, 4, 4, 4, 3, 5, 6, 7, 8],
    removeDuplicates([1, 2, 2, 3, 3, 4, 4, 4, 4, 3, 5, 6, 7, 8]),
    "Removed duplicates"
  );
buttonsContainer.appendChild(btn10);

// ===== New Buttons for New Functions =====
const btn11 = document.createElement("button");
btn11.innerText = "Find Maximum Value";
btn11.onclick = () => showResult(numbers, findMax(numbers), "Found the maximum value in the array");
buttonsContainer.appendChild(btn11);

const btn12 = document.createElement("button");
btn12.innerText = "Count Occurrences of 5";
btn12.onclick = () => showResult(numbers, countOccurrences(numbers, 5), "Counted occurrences of 5 in the array");
buttonsContainer.appendChild(btn12);

const btn13 = document.createElement("button");
btn13.innerText = "Check if Sorted";
btn13.onclick = () => showResult(numbers, isSorted(numbers), "Checked if the array is sorted in ascending order");
buttonsContainer.appendChild(btn13);

const btn14 = document.createElement("button");
btn14.innerText = "Merge Arrays";
btn14.onclick = () => showResult([1, 2, 3], mergeArrays([1, 2, 3], [4, 5, 6]), "Merged two arrays");
buttonsContainer.appendChild(btn14);

const btn15 = document.createElement("button");
btn15.innerText = "Rotate Array by 3";
btn15.onclick = () => showResult(numbers, rotateArray(numbers, 3), "Rotated array elements by 3 positions");
buttonsContainer.appendChild(btn15);
