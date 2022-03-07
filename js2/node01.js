// 2-masala string berilgan uning oxirgi va boshidagi qiymatlarni olib tashlang
// remove("Hello") => ell
// remove('abs') => b
// remove('va') => ''
// 3-masala string(str) va number(n) berilgan  agar n toq son bolsa str ning oxirgi n tasini n marta qaytaruvchi agar n juft bolsa boshidagi n ta elementni n marta qaytaruvchi funksiya yozing agar n,  str uzunligidan katta bolsa n/str.length ga bolgandagi qoldiq olinsin
// repeatStr('webbrain',3) =>ainainain
// repeatStr('webbrain',2) => wewe
// repeatstr('code',10) => coco         {code.length=4   10/4 ning qoldigi 2)

function getLetter(string) {
  var result = string.slice(1, -1);
  console.log(result);
}
getLetter("Hello");
