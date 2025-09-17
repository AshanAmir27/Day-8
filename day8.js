// ---- Functions ----

// keep first findMax, rename second one
function findMaxValue(arr) {
  let max = arr[0];
  for (let i = 1; i < getLength(arr); i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// keep first mergeArrays, rename second one
function mergeArraysAlt(arr1, arr2) {
  let newArr = [];
  for (let i = 0; i < getLength(arr1); i++) {
    newArr[newArr.length] = arr1[i];
  }
  for (let j = 0; j < getLength(arr2); j++) {
    newArr[newArr.length] = arr2[j];
  }
  return newArr;
}

// ---- Buttons ----

// renamed duplicates (btn11, btn12, etc.)
const btn11a = document.createElement("button");
btn11a.innerText = "Remote Element At End without Pop";
btn11a.onclick = () => showResult([arr], removeDuplicatesWP([arr]), "Removed element at the end without pop");
buttonsContainer.appendChild(btn11a);

const btn12a = document.createElement("button");
btn12a.innerText = "Add Number without Push";
btn12a.onclick = () => showResult([arr], removewithoutpush([arr]), "Add Number to array without push");
buttonsContainer.appendChild(btn12a);

const btn11b = document.createElement("button");
btn11b.innerText = "Find Maximum Value";
btn11b.onclick = () => showResult(numbers, findMaxValue(numbers), "Found the maximum value in the array");
buttonsContainer.appendChild(btn11b);

const btn12b = document.createElement("button");
btn12b.innerText = "Count Occurrences of 5";
btn12b.onclick = () => showResult(numbers, countOccurrences(numbers, 5), "Counted occurrences of 5 in the array");
buttonsContainer.appendChild(btn12b);

const btn13 = document.createElement("button");
btn13.innerText = "Check if Sorted";
btn13.onclick = () => showResult(numbers, isSorted(numbers), "Checked if the array is sorted in ascending order");
buttonsContainer.appendChild(btn13);

const btn14 = document.createElement("button");
btn14.innerText = "Merge Arrays (Alt)";
btn14.onclick = () => showResult([1, 2, 3], mergeArraysAlt([1, 2, 3], [4, 5, 6]), "Merged two arrays (alt version)");
buttonsContainer.appendChild(btn14);

const btn15 = document.createElement("button");
btn15.innerText = "Rotate Array by 3";
btn15.onclick = () => showResult(numbers, rotateArray(numbers, 3), "Rotated array elements by 3 positions");
buttonsContainer.appendChild(btn15);

const btn16 = document.createElement("button");
btn16.innerText = "Find maximum";
btn16.onclick = () => showResult(numbers, findMaxValue(numbers), "Found maximum value");
buttonsContainer.appendChild(btn16);

const btn17 = document.createElement("button");
btn17.innerText = "Find minimum";
btn17.onclick = () => showResult(numbers, findMin(numbers), "Found minimum value");
buttonsContainer.appendChild(btn17);

const btn18 = document.createElement("button");
btn18.innerText = "Sort array";
btn18.onclick = () => showResult(numbers, sortArray(numbers), "Sorted array in ascending order");
buttonsContainer.appendChild(btn18);

const btn19 = document.createElement("button");
btn19.innerText = "Check if includes 7";
btn19.onclick = () => showResult(numbers, includesValue(numbers, 7), "Checked if array includes 7");
buttonsContainer.appendChild(btn19);

const btn20 = document.createElement("button");
btn20.innerText = "Merge with [10,11,12]";
btn20.onclick = () => showResult(numbers, mergeArraysAlt(numbers, [10, 11, 12]), "Merged two arrays (alt version)");
buttonsContainer.appendChild(btn20);
