console.log('My first code');
// var
var a=5;
console.log (a);
let b=56;
{

    var a=37;
    console.log(a);
    let b=34;
}

var g;
var a=67;
var firstName='Gokul';
console.log(typeof(firstName));
console.log(typeof(b));
console.log(typeof(g));
var arr1=['apple','orange','mango',10];
console.log(arr1);
arr1.push('jelly');
console.log(arr1);
arr1.pop();
console.log(arr1);

let person=new Object();
person.fname='maya';
person.age=22;
console.log(person);
// array of objects

// function

function display(fname){
    console.log('welcome'+fname+ 'function');
}
display('Gokul');

function add(a,b){
    var sum=a+b;
    console.log('sum='+sum);
}
add(4,8);

function add1(a,b){
    var sum=a+b;
    return sum;
}
var result=add1(4,10);
console.log('sum='+result);

// multiplication

function mul(a,b){
    var multi=a*b;
    return multi;
}
var result=mul(4,10);
console.log('multiplication result='+result);

var r=++result;
console.log('increment='+r);

// conditional

var exp=-122;
if (exp>0) {
    console.log('positive number');
} else {
    console.log('negative  ');
}