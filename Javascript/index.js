// var x=5;
// y=59;
// console.log((x>y)||(x<y));
// console.log(typeof (x+y));
// console.log((x+=10)+y+x);


// var marks = 36;
// console.log((marks >= 35)? "congrates you are passed":"sorry you are fail");
// var x=5;
// y="5";
// z=x++;
// // console.log("this is " + (x==y));
// console.log(z);


/*
var a=5;
b=10;
c=15;
d=20;
if (a>b) {
    console.log("statement 1 is true"); 
}
else if (b>c) {
    console.log("statement 2 is true"); 
}
else if (c<d) {
    console.log("statement 3 is true"); 
}
else{
    console.log("all statements are false"); 
}
*/



// var ch="age";
// ch="add"
// n1=18;

// switch (ch) {

//     case "add":
//         var res=n1>18;;
//         console.log("you can vote");
//         break;

//     case "sub":
//         var res1=n1<18;
//         console.log("you can't vote");
//         break;

//     default:
// console.log("not matches any case");
// }

// ------------------templat estrings-----------

// var x=20;
// y=30;
// multi = x*y;
// add=x+y;
// sub=x-y;
// console.log(`addition is: ${add} , subtraction is: ${sub} , multiplication is: ${multi}`);

// for (var x = 1; x <=10; x++) {
//     y=12;
//     console.log(`${y} * ${x} = ${x*y}`); 
// }
// console.log(`${y} * ${x} = ${x*y}`); 



// let name="akib";{
//     console.log(`hi this is ${name}`);

// }
// console.log(`${name} ali`);


// let password = 8;
// console.log((password > 7) ? "You have strong password" : "please make your password strong");


// for (x = 1; x <= 5; x++) {
//     for (a = 1; a <= x; a++)
//      { console.log("*"); }
//      console.log(" ");
// }

/*
// ----------arrays--------
let tasks = ['HTML', 'CSS' ,'Javascript', 'JQuery' , 'Bootstrap'];
delete tasks[4];
for(a=0;a<5;a++){
    console.log(tasks[a]);
}

for (let value of tasks) {
    console.log(value)
}

tasks.forEach(function (value) {
    console.log(value);
});

*/


// let alpha = [
//     ['a','b','c','d','e','f','g'],
//     ['ab', 'bc', 'cd', 'de', 'ef', 'fg'],
//     ['abc','bcd','cde','def','efg'],
//     ['abcd','bcde','cdef','defg']
// ]



// for (let a = 0; a < alpha.length; a++) {
//     for (let b = 0; b < alpha.length; b++) {  
//         console.log(alpha[a][b]);      
//     }
    
// }

// for (const index in alpha) {
//     if (Object.hasOwnProperty.call(alpha, index)) {
//         const element = alpha[index];
//         console.log(element);
        
//     }
// }
// console.log(alpha[3]);


// var num = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];

//     for(a=0;a<3;a++){
//         for(b=0;b<3;b++){
     
//         console.log(num[a][b]);
//     }
// }



/*
const Months = ['Jan', 'Feb', 'march','june', 'July'];

// const newMonth = Months.push('Dec');                adds element in last
// const newMonth1 = Months.unshift ('no month');      adds element in starting
// const newMonth2 = Months.pop();                     removes last element
// const newMonth3 = Months.shift();                   removes first Element 
// console.log(newMonth1);
// console.log(newMonth2);
// console.log(newMonth);
// console.log(Months.length);

const newMonth = Months.splice(5,0,"Nov");
const newMonth1 = Months.splice(2,2,"March","June");
// const name = Months.splice(0,1,"January");
console.log(Months);
// console.log(newMonth1);                             returns deleted data   

*/




// console.log(Math.pow(16,1/4));                      works as 16^1/4 (is to the power) 



// let car = {Name:"Volvo", Model:"xs60", Color:"white", YearOfManufacture:2018};
// console.log(car.Model);


// const obj = {
//      Name:'akib ali',
//      lName:'ali',
//     fullName: function(){
//         let  Name='aaquib'
//         return Name
//        return this.fName
//     }

// }
// console.log(obj.fullName());

// function fullname(fname, lname){
//     let a = fname + " " + lname;
//     return a
// }
// let fn = fullname("aaquib", "ali");
// console.log(fn);


// function sum(maths, english, science, ssc, hindi){
//     let total = maths + english + science + ssc + hindi;
//     return total/5
// }
// let percentage = sum(59, 70, 80, 78, 98);
// console.log(percentage);





//--------interview question

// let a = {age1:'1',
//     age2:'5',
//     age3:'12',
//     age4:'3',
//     age5:'6'};
// let b = {age7:'1',
//     age8:'5',
//     age9:'12',
//     age10:'3',
//     age1:'6'};
// let c = {age1:'1',
//     age2:'5',
//     age3:'12',
//     age4:'3',
//     age5:'6'};

// d = {...a, ...b, ...c}  // spread operator in object
// console.log(d);

// how to print 1-10 or highier sequence from a randomly arranged array

// let a = [1, 5,12, 3, 6];
// let b= [2,13, 4, 8];
// let c= [10,11, 7, 9];
// d = [a, b, c]
// d = [...a, ...b, ...c] // spread operator in array

// console.log(d.sort());
// console.log(d.sort((a,b)=>{
//     return a-b
// }));
// let e= d.sort((a,b)=> a-b)                   // ---- SOLUTION 1
// console.log(e);

// let e = new Uint8Array(d);                // ---- SOLUTION 2
//console.log(e.sort());

// const sum = (name, ...args)=>{
//     addisn = 0;
//     for(let i in args){
//         addisn += args[i]
//     }
//    return console.log(name, addisn);
// }
// console.log(sum("suresh",10,40,2,50,80,70,100,786,182,288));


//   object literal
// let Name="Akib";
// let myLove= "Being_Coder";

// let Me={
//     [Name+"_ali"]:"is my name",
//     [myLove]: "is my aim",
    
// }
// console.log(Me);


// let x="Akib ali"
// let y="React JS"

// function details(Name,Course) {
//     return {Name, Course}
    
// }

// console.log(details(x, y));

///// array destructuring

// let x=["akib ali", 24, "Web Designer"];
//  [name, age, Speciality] = x

// function user(name, age, Speciality){
//     return ["akib ali", 24, "web Designer"]


// }
// console.log(user());


//  ------ oop Object Oriented Programming

// class hello{
//     constructor(name, age){
//         this.myname=name;
//         this.myage=age
//         console.log("constructor works")
//             }
//     sorry(){
//         console.log(`hello ${this.myname}, is your age is ${this.myage}?`)
//        }
// }
// let a = new hello("akib ali", 24)
// a.sorry()

// class student{
//     constuctor(){
//         let name;
//         console.log("constructor works")
//     }

//     // hello(){
//     //     console.log(`hello ${name}`)
//     // }
// }
// let a = new student();
// a.name= "akib ali" 
let x = [ ];
console.log(x.isarray());