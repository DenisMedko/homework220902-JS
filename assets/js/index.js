//Common functions
const validateNumber = function(num) {

    return !isNaN(num);

}
const getNumber = function(num) {

    return +num;

}
//end of common functions

// Task 1: isAdult
console.log('=======================isAdult========================');
const isAdultBaseLevel = function(age) {

    if(age >= 18) {
        return true;
    } else {
        return false;
    }  

}

const isAdultAdvancedLevel = function(age) {

    age = validateNumber(age) ? getNumber(age) : null;
    if (age === null) return null;

    if(age >= 18) return true; 

    return false;
    
}

const isAdultStackOverFlowLevel = function(age) {

    return isNaN(age) ? null : +age >= 18;

}

const isAdult = function(age) {

    console.log('==Base level== age of : ' + age + ' is adult = ' + isAdultBaseLevel(age)); 

    console.log('==Advanced level== age of : ' + age + ' is adult = ' + isAdultAdvancedLevel(age));

    console.log('==Stack OverFlow level== age of : ' + age + ' is adult = ' + isAdultStackOverFlowLevel(age)); 

}

isAdult(20);
isAdult('4');
isAdult('hgfhgf');
//End of task 1

// Task 2: checkMultiplicity
console.log('=======================checkMultiplicity========================');

const checkMultiplicityBaseLevel = function(num1, num2) {

    if(num2 !== 0 && num1 % num2 === 0) {
        return true;
    } else {
        return false;
    }  

}

const checkMultiplicityAdvancedLevel = function(num1, num2) {

    num1 = validateNumber(num1) ? getNumber(num1) : null;
    num2 = validateNumber(num2) ? getNumber(num2) : null;

    //dividing by 0 check
    if (num2 === 0 || num1 === null || num2 === null) return null;

    if(num1 % num2 === 0) return true;

    return false;

}

const checkMultiplicityStackOverFlowLevel = function(num1, num2) {

    return +num2 === 0 || isNaN(num1) || isNaN(num2) ? null : +num1 % +num2 === 0;

}

const checkMultiplicity = function(num1, num2) {

    console.log('==Base level== Multiplicity of : ' + num1 + ' and ' + num2 + 
        ' is ' + checkMultiplicityBaseLevel(num1, num2)); 

    console.log('==Advanced level== Multiplicity of : ' + num1 + ' and ' + num2 + 
        ' is ' + checkMultiplicityAdvancedLevel(num1, num2)); 

    console.log('==Stack OverFlow level== Multiplicity of : ' + num1 + ' and ' + num2 + 
        ' is ' + checkMultiplicityStackOverFlowLevel(num1, num2)); 

}

checkMultiplicity(20, 3);
checkMultiplicity(4, '2');
checkMultiplicity(9, 'hgfhgf');
//End of task 2

// Task 3: isTriandgle
console.log('=======================isTriandgle========================');
const isTriangleBaseLevel = function(sideA, sideB, sideC) {

    if(sideA + sideB > sideC &&
        sideB + sideC > sideA &&
        sideA + sideC > sideB) {
        return true;
    } else {
        return false;
    }  

}
const isTriangleAdvancedLevel = function(sideA, sideB, sideC) {
    
    sideA = validateNumber(sideA) ? getNumber(sideA) : null;
    sideB = validateNumber(sideB) ? getNumber(sideB) : null;
    sideC = validateNumber(sideC) ? getNumber(sideC) : null;
    
    if (sideA === null || sideB === null || sideC === null) return null;

    if(sideA + sideB > sideC &&
        sideB + sideC > sideA &&
        sideA + sideC > sideB) {
        return true;
    } 

    return false; 

}

const isTriangleStackOverFlowLevel = function(sideA, sideB, sideC) {

    return isNaN(sideA) || isNaN(sideB) || isNaN(sideC) ? 
        null : 
        +sideA + +sideB > +sideC &&
        sideB + +sideC > +sideA &&
        sideA + +sideC > +sideB;

}

const isTriangle = function(sideA, sideB, sideC) {

    console.log('==Base level== isTriandgle of : ' + 
        sideA + ' and ' + sideB + ' and ' + sideC +
        ' is ' + isTriangleBaseLevel(sideA, sideB, sideC)); 

    console.log('==Advanced level== isTriandgle of : ' 
        + sideA + ' and ' + sideB + ' and ' + sideC + 
        ' is ' + isTriangleAdvancedLevel(sideA, sideB, sideC)); 

    console.log('==Stack OverFlow level== isTriandgle of : ' 
        + sideA + ' and ' + sideB + ' and ' + sideC + 
        ' is ' + isTriangleStackOverFlowLevel(sideA, sideB, sideC)); 

}
isTriangle(2, 3, 4);
isTriangle('2', 3, '4');
isTriangle(1, '2', 3);
isTriangle(1, 'hgfhgfhgf', 3);
//End of task 3

//Task 4: Sum of odd from 1 to n
console.log('=======================Sum of odd========================');
const sumOdd = function(num) {

    num = validateNumber(num) ? getNumber(num) : null;

    let sum = 0, i = 1;
    while(i <= num) {
        sum += i;
        i += 2;
    }

    return sum;
}

console.log('Sum of odd\'s 0 is : ' + sumOdd(0));
console.log('Sum of odd\'s 1 is : ' + sumOdd(1));
console.log('Sum of odd\'s 5 is : ' + sumOdd(5));
console.log('Sum of odd\'s 6 is : ' + sumOdd(6));
console.log('Sum of odd\'s \'7\' is : ' + sumOdd('7'));
//End of task 4

//Task 5: Simple number
console.log('=======================Simple number========================');
const isNumberSimple = function(num) {
   
    if(isNaN(num)) { 
        return false; 
    }

    num = +num;

    if (num < 2) {
        return false;
    }

    let i = 2;
    while (i < num) {
        if (num % i === 0) {
            return false;
        }
        i++;
    }

    return true;

}

let i = 1;
while (i <= 100) {
    if (isNumberSimple(i)) {
        console.log('Number ' + i + ' is simple ');
    }
    i++;
}
//End of task 5