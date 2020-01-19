// Lesson-25 Promise

const fakeAsync = (data, time = 1000) =>
  new Promise(resolve => setTimeout(() => resolve(data), Math.random() * time));
​
const getWater = () =>
  fakeAsync(
    Array(Math.ceil(Math.random() * 100))
      .fill(1)
      .map(() => "🌊")
  );
​
const firstStep = () => fakeAsync(arr.map(() => "❄️"));
const secondStep = arr => fakeAsync(arr.map(() => "💦"));
const thirdStep = arr => fakeAsync(arr.map(() => "💧"));
​
const tap = cb => value => {
  cb(value);
  return value;
};
​
getWater()
  .then(firstStep)
  .then(tap(console.log))
  .then(secondStep)
  .then(tap(console.log))
  .then(thirdStep)
  .then(tap(console.log));