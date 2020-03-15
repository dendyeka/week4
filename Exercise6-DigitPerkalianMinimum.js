function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  var hasil = 0;
  for (var i = 1; i <= angka; i++) {
    if (!hasil || hasil > (i +''+ angka / i).length) {
      hasil = (i +''+ angka / i).length;
    }
  }
  return hasil;
//  console.log(hasil)
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2