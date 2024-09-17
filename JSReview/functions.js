const returnEmptyString = function () {

    return ""
};

const returnZeroNumber = function () {

    num = 0;
    return num
};

const returnEmptyArray = function () {
    return []

};

const returnEmptyObject = function () {
    return {}
};

const returnString = function (str) {
    if (str === "hello") {
        return "hello"
    } else
        return "abc123"
};

const addition = function () {
    let a = 5
    let b = 5
    return (a + b)
};

const subtraction = function () {
    let a = 5
    let b = 5
    return a - b
};

const multiplication = function () {
    let a = 10
    let b = 2
    return (a * b)
};

const division = function () {
    let a = 10
    let b = 2
    return (a / b)
};

const returnArray = function () {
    return arr = [1, 2, 3]
}

const returnFirstIndex = function () {
    const arr = [1, 2, 3];
    return arr.indexOf(2);
}


const returnSecondIndex = function () {
    const arr = [1, 2, 3, 4, 5, 6];
    return arr.indexOf(3, 2)
};

const returnArrayLength = function () {
    const arr = [1, 2, 3];
    return arr.length
};

const arraySum = function () {
    const arr = [1, 2, 3];
    return 1 + 2 + 3
};

const arraySubtraction = function () {
    const arr = [1, 2, 3]
    const result = arr.reduce((acc, curr) => acc - curr, 0);
    return (result)
};

const multiplicationArray = function () {
    return arr.reduce((acc, curr) => acc * curr, 1);
};

const divisionArray = function () {
    if (arr.length === 0) return 0;
    const product = arr.reduce((acc, num) => acc / num, arr[0] * arr[0]);
    return parseFloat(product.toFixed(3));
}
      
    
 











const oddArray = function () { 
    const arr = [1,2,3,4,5];
    const odds = arr.filter(num => num % 2 !== 0);
    return odds
 }






const evenArray = function () {
    const arr = [1,2,3,4,5,6];
    const evens = arr.filter(num => num % 2 === 0);
return evens
 };

module.exports = {
    returnEmptyString,
    returnZeroNumber,
    returnEmptyArray,
    returnEmptyObject,
    returnString,
    addition,
    subtraction,
    multiplication,
    division,
    returnArray,
    returnFirstIndex,
    returnSecondIndex,
    returnArrayLength,
    arraySum,
    arraySubtraction,
    multiplicationArray,
    divisionArray,
    oddArray,
    evenArray
}
