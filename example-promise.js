// Callback example
//function getTempCallback (location, callback) {
////  callback(undefined, 78);
//  callback('City not found');
//}

//getTempCallback('Philadelphia', function (err, temp) {
//  if (err) {
//    console.log('error',err);
//  } else {
//    console.log('success', temp);
//  }
//});

// Promise
//function getTempPromise (location) {
//  return new Promise(function (resolve, reject) {
//    setTimeout(function () {
//      resolve(79);
//      reject('City not found');
//    }, 1000);
//  });
//}

//getTempPromise('Philadelphia').then(function (temp) {
//  console.log('promise success', temp);
//}, function (err) {
//  console.log('Promise error', err);
//})

function addPromise (a, b) {
  return new Promise(function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      var c = a + b;
      resolve(c);
    } else {
      reject('No es un numero');
    }
  });
}

addPromise(5, 'z').then(function (temp) {
  console.log('El resultado es: ', temp);
}, function (err) {
  console.log('Ha ocurrido un error: ', err);
})
