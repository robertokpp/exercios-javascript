const arrayPrimary = [1,7,9];

let num = arrayPrimary[0];
let arraySecondary = [];


function maior(array) {
  array.forEach((item) => {
    if (num < item) {
      num = item;
    }
  });
}

maior(arrayPrimary);

arraySecondary = arrayPrimary.filter((p) => p != num);
num = arraySecondary[0];
maior(arraySecondary);
console.log("Segundo Numero maior:", num);
