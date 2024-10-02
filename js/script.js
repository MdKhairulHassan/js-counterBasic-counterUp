// .....................................................................................................
// let counter = document.querySelector(".counter")
// // console.log(counter.dataset.number)

// let endValue = counter.dataset.number
// let count = 0;
// function counterUp() {
//   count++;
//   counter.innerHTML = count;
//   if (count == endValue) {
//     clearInterval(stop);
//   }
// }
// let stop = setInterval(function () {
//   counterUp();
// }, 1000);
// .....................................................................................................
let counterUp = document.querySelectorAll(".counterUp");
let arr = Array.from(counterUp)
// console.log(arr)

arr.map((item) => {

  // console.log(item)

  let counter = 0

  console.log(item.dataset.number);

  function count(){
    counter++
    item.innerHTML = counter;
    if (counter == item.dataset.number) {
      clearInterval(stop);
    }
  }

  let stop = setInterval(function () {
    count();

  }, 1000 / item.dataset.number);

});
