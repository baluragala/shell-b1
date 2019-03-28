// var p = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve({ message: 'completed' })
//     }, 5000)
// })

// p.then(function (data) {
//     console.log(data)
// }).catch(function (err) {
//     console.log(err)
// })

function task1() {
  console.log(1);
  console.log(2);
  console.log(3);
}
function task2() {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      console.log(4);
      console.log(5);
      reject('gone');
    }, 5000);
  });
}

function task3() {
  console.log(6);
  console.log(7);
}

function task4() {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      console.log(8);
      console.log(9);
      resolve();
    }, 2000);
  });
}

function doWork() {
  task1();
  task2()
    .then(function() {
      task3();
    })
    .catch(function(err){
        console.log('1')
        console.log(err)
    })
    .then(function() {
      task4();
    }).catch(function(err){
        console.log('2')
        console.log(err)
    })

}


doWork();
