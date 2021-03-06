// 1) From years in array check for leap years [1974, 1900, 1985, 2000] 
let years = [1974, 1900, 1985, 2000];
let year;
for (let i = 0; i < years.length; i++) {
    year = years[i];
    //if ((year % 100 === 0 || year % 4 === 0) && year % 400 !== 0) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 == 0) {
        console.log("1) Lata przestępne: " + year);
    }
}

// 2) Calculate factorial of 7. 
let n = 7;
let summary = 1
while (n > 0) {
    summary *= n--;
}
console.log("2) 7 silnia = " + summary);

// 3) Calculate the sum of the odd items [1,6,23,8,4,98,3,7,3,98,4,98] 
let valueArray = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
let sumodd = 0;
for (let i = 0; i < valueArray.length; i++) {
    if (valueArray[i] % 2 != 0) sumodd = sumodd + valueArray[i];
}
console.log("3) Suma liczb nieparzystych to: " + sumodd);


// 4) Choose highest and lowest values from the given array. [1,6,23,8,4,98,3,7,3,98,4,98]. One loop run. 
let valueArray4 = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
let highval = valueArray4[0];
let lowval = valueArray4[0];
for (let i = 1; i < valueArray4.length; i++) {
    if (valueArray4[i] > highval) highval = valueArray4[i];
    if (valueArray4[i] < lowval) lowval = valueArray4[i];
}
console.log("4) Największa liczba to: " + highval);
console.log("   Najmniejsza liczba to: " + lowval);

// 5) Choose longest string from the array. [‘Karol’, ‘Adam’,’Rogowski’,’Politechnika’,’Super’,’Weekend’].
let valueArray5 = ['Karol', 'Adam', 'Rogowski', 'Politechnika', 'Super', 'Weekend'];
let longestindex = 0;
let maxlenght = 0;
for (let i = 0; i < valueArray5.length; i++) {
    if (valueArray5[i].length > maxlenght) {
        longestindex = i;
        maxlenght = valueArray5[i].length
    }
}
console.log("5) Najdłuższy napis to: " + valueArray5[longestindex]);

// 6) Choose all the indexes on the highest value from the given array. [1,6,23,8,4,98,3,7,3,98,4,98].
let valueArray6 = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
let highval6 = valueArray6[0];
for (let i = 1; i < valueArray6.length; i++) {
    if (valueArray6[i] > highval6) highval6 = valueArray6[i];
}
console.log("6) Indexy najwyższej wartości: ");
for (let i = 1; i < valueArray6.length; i++) {
    if (valueArray6[i] == highval6) console.log(i);
}

// 7) Calculate average value from the given array for even numbers [1,6,23,8,4,98,3,7,3,98,4,98]
let valueArray7 = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
let sum7 = 0;
let avg7 = 0;
let amount7 = 0;
for (let i = 0; i < valueArray7.length; i++) {
    if (valueArray7[i] % 2 == 0) {
        sum7 += valueArray7[i];
        amount7++;
    }
}
avg7 = sum7 / amount7;
console.log("7) Średnia parzystych to: " + avg7);

// 8) Calculate average value of items at even indexes. Zero is not considered to be even number. [1,6,23,8,4,98,3,7,3,98,4,98]
let valueArray8 = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
let sum8 = 0;
let avg8 = 0;
let amount = 0;
for (let i = 1; i < valueArray8.length; i++) {
    if (i % 2 == 0) {
        sum8 += valueArray8[i];
        amount++;
    }
}
avg8 = sum8 / amount;
console.log("8) Średnia liczb parzystych indexów to: " + avg8);

// 9) With a given start value of 0. Iterate the array and add even items and subtract odd ones. [1,6,23,8,4,98,3,7,3,98,4,98]
let valueArray9 = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
let sum9 = 0;
for (let i = 0; i < valueArray9.length; i++) {
    if (valueArray9[i] % 2 == 0) {
        sum9 += valueArray9[i];
    }
    else {
        sum9 -= valueArray9[i];
    }

}
console.log("9) Suma parzystych po odjęciu nieparzystych to: " + sum9);