var myVar = 5;

var myFunction = (number) => {
    myVar += number;
    console.log(myVar);
    return myVar;
};

myFunction(4);