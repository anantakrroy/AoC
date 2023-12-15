const fs = require("fs");

const input = fs.readFileSync("input.txt", "utf-8");
const inputArr = input.split("\n").map((txt) => txt.replace("\r", ""));
let sum = 0;

const getFirstLastDigits = (line) => {
  // split line into characters and filter out the numbers
  const nums = line
    .split("")
    .map((e) => Number(e))
    .filter((e) => !Number.isNaN(e));
  return Number(String(nums[0]) + String(nums[nums.length - 1]));
};

const getSum = () => {
  for (let line of inputArr) {
    sum += getFirstLastDigits(line);
  }
  return sum;
};

getSum();
