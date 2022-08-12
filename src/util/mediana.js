import mergeSort from "./mergeSort";

export default function findMedian(inputArray) {
  let sortedArr = mergeSort(inputArray);
  let arrLength = sortedArr.length;
  let middleIndex = Math.floor(arrLength / 2);
  let oddLength = arrLength % 2 != 0;
  let median;
  if (oddLength) {
    median = sortedArr[middleIndex].grade;
  } else {
    median = (sortedArr[middleIndex].grade + sortedArr[middleIndex - 1].grade) / 2;
  }
  const result = {
    gradeAverage: sortedArr,
    median: median
  }
  return result;
}
