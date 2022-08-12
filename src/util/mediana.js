import mergeSort from "./mergeSort";

export default function findMedian(inputArray) {
  let sortedArr = mergeSort(inputArray);
  let arrLength = sortedArr.length;
  let middleIndex = Math.floor(arrLength / 2);
  let oddLength = arrLength % 2 != 0;
  let median;
  if (oddLength) {
    median = sortedArr[middleIndex];
  } else {
    median = (sortedArr[middleIndex] + sortedArr[middleIndex - 1]) / 2;
  }
  return median;
}
