let x = 5;
let y = 2;
let z = x + y;
console.log(z);//7

function showX(x)
{
    return x;
}
console.log(showX(28));//28

console.log(" "+ 1 + 0);//'10'

console.log(" " - 1 + 0);//-1

console.log( true + false);//1

console.log(6/"3");//2

console.log(4 + 5 +"px");//"9px"

console.log('$' + 4 +5);//"$45"

console.log("4" - 2);//2

console.log("4px" - 2);//NaN

console.log(7/0);//Infinity

console.log("-9" + 5);//"-95"

console.log("-9" -5);//-14

console.log(null + 1);//1

console.log(undefined + 1);//NaN

console.log("\t\n" - 2);//-2

x=5;
x=2;
console.log(x);//2

x = 5;
x-= 2;//x = x-2
console.log(x);//3

x ="5";
x = parseInt(x);
console.log(typeof(x));//number

x ="5";
x =+x;
console.log(typeof(x));//number


