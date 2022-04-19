const number = +prompt('Введите число между 0 и 3', '');
switch (number) {
   case 0:
      alert ('Ви ввели число 0');
      break;
   case 1:
      alert ('Ви ввели число 1');
      break;
   case 2:
   case 3:
      alert ('Ви ввели число 2, а может и 3');
      break;
}