



// import { PI,Circumference } from "./root.js";
// console.log(PI);
//  console.log(Circumference(2))



// let URL="https:api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key";
// let factPara =document.querySelector("#fact")
// let btn=document.querySelector("#btn");

// let getFacts=async()=>{
//     let response= await fetch(URL);
//     // console.log(response.status)
//     // console.log(response)
//      let data= await response.json()
//     // console.log(data)
//     // console.log(data[1])
//      console.log(data[1].url)
//     factPara.innerHTML=data[1].url
// }
// btn.addEventListener("click",getFacts)
// getFacts()



// let URL="https://jsonplaceholder.typicode.com/users"
// let pe=document.getElementById("p")

// let getFacts=async()=>{
//     try{  
//         let response= await fetch(URL);
//  if(!response.ok){
//     throw Error("response not ok")
//  }
//  console.log(response)
//  let data= await response.text()
//  console.log(data)
// pe.innerText=data
// }
// catch(error){
//      console.log(error)
// }
// }
// getFacts()









// let URL="https://reqres.in/api/users"
// // let pe=document.getElementById("p")
// let getFacts=async(e)=>{
//         // e.preventDefault()
 
//     let name=document.getElementById("name").value
//     let job=document.getElementById("job").value
// try{
//           let myInit={
//             method:'POST',
//             headers: {
//                 'Content-Type':'application/json'
//             },
//             body: JSON.stringify({name:name,job:job})
//           }

//     let response= await fetch(URL,myInit);
//     if(!response.ok){
//         throw Error(response.stautsText)
//     }
//      // console.log(response)
//       let data= await response.json()
//      console.log(data)
// //pe.innerHTML=data
// }
// catch(error){
//     console.log("error",error)
// }

// }
//  getFacts()

//  document.getElementById("btn").addEventListener("click",getFacts)








// let URL="root.js"

// let getFacts=async()=>{
//     let response= await fetch(URL);
//      console.log(response)
//        let data= await response.text()
//      console.log(data)
// }
// getFacts()


// let day=2;
// switch(day){
//     case 1:
//         console.log("Its Monday");
//         break;
//         case 2:
//             console.log("Is Tuesday");
//             break;
//             case 3:
//             console.log("Is Thursday");
//             break;
//             case 4:
//             console.log("Is Wednesday");
//             break;
//             default:
//                 console.log(`${day} is not a day`)
// }


// let testSore=33;
// let letterGrade;

// switch(true){
//     case testSore>=90:
//          letterGrade="A";
//          break;
//          case testSore>=80:
//             letterGrade="B";
//             break;
//             case testSore>=70:
//                 letterGrade="C";
//                 break;
//                 case testSore>=60:
//                     letterGrade="D";
//                     break;
//                     default:
//                     letterGrade="F";
// }
// console.log(letterGrade)



// //         SPREAD AND REST
// let number=[1,2,3,4,5];
// let maximum= Math.max(...number);
// let minimum= Math.min(...number);

// console.log(maximum)
// console.log(minimum)


// let usename="Bro Code"
// let letters=[...usename];

// console.log(letters)



// let foods=["pizza1","pizza2","pizza3"];

// function getFood(food1,food2,food3){
// console.log(food1,food2,food3)
// }
// getFood(...foods)



// let food1="Pizza";
// let food2="pizza2";
// let food3="pizza3";

// function getFood(...foods){
//     return foods
// }

// let foods= getFood(food1,food2,food3)
// console.log(foods)





// const hello= ()=>{
//     console.log("hello")
// }
// hello()


// const person1 ={
//     firstName:"Ali",
//     age:30,
//     inEmploye:true,
// }
// console.log(person1)




// function Car(make, model, year, color){
//     this.make=make,
//     this.model= model,
//     this.year=year,
//     this.color=color
// }
// const car1=new Car("Ford","Mustang",2024,"red")
// console.log(car1.make)


// class Animal{
//     constructor(age,name){
//       this.age=age;
//       this.name=name;
//     }
//     eat(){
//         console.log(`This ${this.name} is eating`);
//     }
//     sleep(){
//         console.log(`This ${this.name} is sleeping`)
//     }

// }
// class Rabbit extends Animal{
//     constructor(age,name,runspeed){
//         super(age,name);
//         this.runspeed=runspeed;
//     }
// }
// class Fish extends Animal{
//     constructor(age,name,swimspeed){
//         super(age,name);
//         this.swimspeed=swimspeed;
//     }
// }

// const rabbit=new Rabbit(23,"rabbit",45);
// const fish=new  Fish(12,"fish",46)
// console.log(rabbit)
// console.log(fish)
// rabbit.eat()




// class Rectangle{
//      constructor(width,height){
//         this.width=width;
//         this.height=height;
//      }

//      set width(newWidth){
//         if(newWidth> 0){
//             this._width=newWidth;
//         }
//         else{console.log("width must be a positive number")}
//      }

//      set height(newHeight){
//       if(newHeight> 0){
//             this._height=newHeight;
//         }
//         else{console.log("Height must be a positive number")}
//      }
//      get width(){
//         return this._width
//      }
//      get height(){
//         return this._height;
//      }
//      get area(){
//         return this._width*this._height
//      }

//     }
// const rectangle= new Rectangle(3,4);
// console.log(rectangle.width)
// console.log(rectangle.height)
// console.log(rectangle.area)



// const cards = [ 'a', 2,3,4,5,6,7,8,9,10,'j','h','i']

// shuffle(cards);
// console.log(cards);

// function shuffle(array){
//     for(let i=array.length-1; i>0; i--){
//         const random=Math.floor(Math.random()*(i+1));

//         [array[i],array[random]] = [array[random],array[i]]
//     }
// }




// function func1(callback){
// console.log("function 1")
// callback()
// }

// function func2(callback){
//     console.log("function 2")
//     callback()
//     }
    
// function func3(callback){
//     console.log("function 3")
//     callback()
//     }

//     func1(()=>{
//         func3(()=>{
//             func2(()=>{

//             })
//         })
//     })



// function func1(){
//     return new Promise((res,rej)=>{
//         res("function 1")
//     })
// }

// function func2(){
//     return new Promise((res,rej)=>{
//         res("function 2")
//     })
//     }
    
// function func3(){
//     return new Promise((res,rej)=>{
//         res("function 3")
//     })
//     }
//     func1()
//     .then ((res)=>{
//         console.log(res)
//         return func3()
//     })
//     .then((res)=>{
//         console.log(res)
//         return func2()
//     })
//     .then((res)=>{
//         console.log(res)
//     })




// function func1(){
//     return new Promise((res,rej)=>{
//         res("function 1")
//         console.log("function 1")
//     })
// }

// function func2(){
//     return new Promise((res,rej)=>{
//         res("function 2")
//         console.log("function 2")
//     })
//     }
    
// function func3(){
//     return new Promise((res,rej)=>{
//         res("function 3")
//         console.log("function 3")
//     })
//     }

// async function getData() {
//    let y= await func1();
//    console.log(y)
//     await func3();
//     await func2();
// }
// getData()




// //   CLOSURE
// function outer(){
//     let message="hello"
//     function inner(){
//         console.log(message)
//     }
//     inner()
// }
// outer()



// //    CHECK ARRAY OR NOT
// function checkArray(elem){
// console.log(Array.isArray(elem))
// }
// checkArray([]);
// checkArray({});



// //   EMPTY  AN ARRAY
// let a=[1,2,,3,4,5];
// a.length=0;
// console.log(a)



// //  CHECK NUMBER IS INTEGER
// let a=11.2;
// if(a%1 === 0){
//     console.log("interger");
// }else{
//     console.log("not integer")
// }



// //   DUPLICATE THE ARRAY
// function duplicate(arr){
//       return arr.concat(arr)
// }
// x=[1,2,3,4,5]
// console.log(duplicate(x))


//   REVERSE STRING
// let ret="hello";
// let x= ret.split("").reverse().join("")
// console.log(x)

// let str= "hello   brother";
// let y=str.split(" ").map(function(word){
//    return  word.split("").reverse().join("")
// })
// console.log(y.join(" "))




// //  REVERSE THE NUMBER
// let a=12;
// let y=a.toString().split("").reverse().join("")
// console.log(y)


// function reverse(num){
//     let rev=0;
//     while(num>0){
//         let rem =num%10;
//          rev=rev*10+rem;
//         num = Math.floor(num/10)
//     }
//     return rev
// }
// console.log(reverse(1234))




// //    CHECK PALINDRONE
// let x="lool";
// let reverse=x.split("").reverse().join("")
// if(x === reverse){
//     console.log("yes")
// }else{
//     console.log("no")
// }



// //    ALPHABATICAL ORDER
//   function alpha(str){
//     return str.split("").sort().join("");
//   }
//   console.log(alpha("apple"))


// //   FIRST WORD CAPITAL
// let x= "ali has no num"
// function capital(str){
// let allwords = str.split(" ").map(function (word){
// return  word.charAt(0).toUpperCase()+ word.substring(1);
// });
// return allwords.join(" ")
// };
// console.log(capital(x))


// //   CHAR OCCUERNCE
// let str = 'GeeksforGeeks'
// let result = {}
// for(let i = 0;i< str.length;i++){
//   let ch = str.charAt(i)
//   if(!result[ch]){
//     result[ch] =1;
//   }
//   else{
//     result[ch]+=1
//   }
// }
// console.log( result )



// //   CHAR OCCUERNCE
// function occ(str){
//     let occurence = {};
//     str.split("").forEach(function(elem){
//     if(occurence.hasOwnProperty(elem) === false){
//         occurence[elem]=1;
//     }else{
//         occurence[elem]++;
//     }
//     })
//     return occurence;
// }
// console.log(occ("apple"))



// //   LOOP AN ARRAY
let a=[]
let arr=[1,2,3,4,5];
let sum=0;
for(let i=0;i<arr.length;i++){
    sum+=arr[i]
    a.push(sum)
}
console.log(a)


// let arr=[1,2,3,4,"fvg",5];
// let sum=0;
// for(let i=0;i<arr.length;i++){
//     if(typeof arr[i]==='number'){
//     sum+=arr[i]}
// }
// console.log(sum)



// // for each ko break nhi kr skty
//    let arr=[
//     {name: "ali", gender:"male"},
//     {name:"haider", gender:"male"},
//     {name:"noor", gender:"female"},
//     {name:"fatima",gender:"female"}
//    ];
//    let count=0;
//    arr.forEach(function (elem){
//     if(elem.gender !== "male") {
//         count++}
//   })
//   for(let i=1; i<=count; i++){
//     for(let j=0;  j<arr.length; j++){
//        if(arr[j].gender !== "male"){
//         arr.splice(j,1)
//        }
//     }
// }
// console.log(arr)




//    let person=[
//     {name: "ali", gender:"male"},
//     {name:"haider", gender:"male"},
//     {name:"noor", gender:"female"},
//     {name:"fatima",gender:"female"}
//    ];

//    for(let i=0;i<person.length;i++){
//     for(let x in person[i]){ 
//         console.log(x,"->",person[i][x]  )    
//     }
//    }

  

// //   CLONE
//   function clone(arr){
//        return[...arr]
//   }
//  let a=[1,2,3,4,5]
//  console.log(clone(a))


// function clone(arr){
//     return arr.map(function(e){
//         return e;
//     })
// }
// let a=[1,2,3,4,5]
// console.log(clone(a))





//  //MOST FREQUENT ITEM
// function  freq(arr){
//     let fre={};
//     arr.forEach(function(elem){
//         if(fre.hasOwnProperty(elem)){
//             fre[elem]++;
//         }else{
//             fre[elem]=1;
//         }
//            })
//          //  console.log(fre)
//        let ans=Object.keys(fre).reduce(function (acc,num){
//           return fre[acc]>fre[num] ? acc :num;
//        });
//        console.log(ans)
//     }
// let a=[1,2,3,4,3,3,3,5,6];
// freq(a)



// //         MIN VALUe   
// function myArrayMin(arr) {
//     let len = arr.length;
//     let min = Infinity;
//     while (len--) {
//       if (arr[len] < min) {
//         min = arr[len];
//       }
//     }
//     return min;
// }  
// let a = [1,2,4,5,6];
// console.log(myArrayMin(a))


// let a=[1,2,3,67,0,-9,45];
// let b=a[0]
// for(let i=0; i<a.length; i++){
//     if(a[i]<b){
//         b=a[i]
//     }
// }
// console.log(b)




// //         MAX VALUE
// function myArrayMax(arr) {
//     let len = arr.length;
//     let max = -Infinity;
//     while (len--) {
//       if (arr[len] > max) {
//         max = arr[len];
//       }
//     }
//     return max;
// }
//  let a = [1,2,4,5,6];
//  console.log(myArrayMax(a))


// let a=[1,2,3,67,45];
// let b=a[0]
// for(let i=0; i<a.length; i++){
//     if(a[i]>b){
//         b=a[i]
//     }
// }
// console.log(b)



// //       SECOND LARGEST NUMBER
// function findSecondLargest(arr) {
//     let largest = arr[0];
//     let secondLargest = -Infinity;
//   for (let i = 1; i < arr.length; i++) {
//       if (arr[i] > largest) {
//         secondLargest = largest;
//         largest = arr[i];
//       } else if (arr[i] < largest && arr[i] > secondLargest) {
//         secondLargest = arr[i];
//       }
//     }
//     return secondLargest;
//   }
//   const array = [5, 2, 10, 8,10,9,9,10, 3];
//   console.log(findSecondLargest(array));


// let a=[1,2,3,4,4,5,5,3,2,6,6]

// let y=a.sort((a,b)=>{
//     if(a>b)return 1;
//      if(a<b)return -1;
//    return 0;
// })
// for(let i=a.length-1; ; i--){
//     if(a[i]!=a[i-1]){
//         console.log( a[i-1])
//     break;
// }
// }


// var arr = ['20','120','111','215','54','78'];

// arr.sort((a,b)=>{
//     return b-a;
// });
// console.log(arr[1]);



// function longest(str){ 
 
//     str = str.split(" ") 
//     return str.sort((a, b) => b.length - a.length)[0] 
// } 
// console.log(longest("Hello guys this is geeksforgeeks"))




// let a="adr ghgyu kknjil"
// let b=a.split(" ")
// let y=""
// for(let i=0; i<b.length; i++){
//     if(b[i].length>y.length){
//         y=b[i]
//     }
// }
// console.log(y)




// let string="kaahai  b"

// function log(str){
// let start=0;
// let end=0;
// let maxlength=0;
// let subStr=new Set();

//     while(end<str.length){
//         if(!subStr.has(str[end])){
//             subStr.add(str[end]);
//             maxlength=Math.max(maxlength,subStr.size);
//             //console.log(subStr.values())
//             end++;
//         }else{
//             subStr.delete(str[start])
//             start++;
//         }
//     }
//     return maxlength;
// }
// console.log(log(string))








// let n=5;
// let pattern="";

// for(let i=1; i<=n; i++){
//     for(let j=1; j<=i;j++){
//         pattern+="*"
//     }
//     pattern+="\n"
// }
// console.log(pattern)



// // NUMBER TRIANGLE
// let n=5;
// let pattern="";

// for(let i=1; i<=n; i++){
//     for(let j=1; j<=i;j++){
//         pattern+=j
//     }
//     pattern+="\n"
// }
// console.log(pattern)



// // NUMBER TRIANGLE 2
// let n=5;
// let pattern="";

// for(let i=1; i<=n; i++){
//     for(let j=1; j<=i;j++){
//         pattern+=i
//     }
//     pattern+="\n"
// }
// console.log(pattern)


// // NUMBER TRIANGLE 3
// let n=4;
// let pattern="";
// let num=1;
// for(let i=1; i<=n; i++){
//     for(let j=1; j<=i;j++){
//         pattern+=num
//         num++
//     }
//     pattern+="\n"
// }
// console.log(pattern)



// //REVERSE TRIANGLE
// let n=5;
// let pattern="";

// for(let i=1; i<=n; i++){
//     for(let j=1; j<=n-i+1;j++){
//         pattern+=j
//     }
//     pattern+="\n"
// }
// console.log(pattern)   



// //   REVERSE NUMBER TRIANGLE
// let n=5;
// let pattern="";

// for(let i=1; i<=n; i++){
//     for(let j=n; j>=i;j--){
//         pattern+=j
//     }
//     pattern+="\n"
// }
// console.log(pattern)





// //    DIAMOND PATTERN
// let n=5;
// let pattern="";

// for(let i=1; i<=n; i++){
//     for(let k=1; k<=n-i; k++){
//       pattern+=" "
//     }
//     for(let j=1; j<=2*i-1;j++){
//         pattern+="*"
//     }
//     pattern+="\n"
// }
// for(let i=n-1; i>0; i--){
//     for(let k=1; k<=n-i; k++){
//       pattern+=" "
//     }
//     for(let j=1; j<=2*i-1;j++){
//         pattern+="*"
//     }
//     pattern+="\n"
// }

// console.log(pattern)




// //   NUMBER PYRAMID
// let n=5;
// let pattern="";

// for(let i=1; i<=n; i++){
//     for(let k=1; k<=n-i; k++){
//       pattern+=" "
//     }
//     for(let j=1; j<=2*i-1;j++){
//         pattern+=j
//     }
//     pattern+="\n"
// }
// console.log(pattern)




// //   NUMBER PYRAMID 2
// let n=3;
// let pattern="";
// let num=1;

// for(let i=1; i<=n; i++){
//     for(let k=1; k<=n-i; k++){
//       pattern+=" "
//     }
//     for(let j=1; j<=2*i-1;j++){
//         pattern+=num
//         num++
//     }
//     pattern+="\n"
// }
// console.log(pattern)



// //   HOLLOW SQUARE 
// let n=5;
// let pattern="";

// for(let i=1; i<=n; i++){
//     for(let j=1; j<=n;j++){
//       if(i==1 || i==n  || j==1  || j==n){
//         pattern+="*"
//     }else{
//       pattern+=" "
//     }
//   }
//     pattern+="\n"
// }
// console.log(pattern)




// //  HOLLOW TRIANGLE
// let n=5;
// let pattern="";

// for(let i=1; i<=n; i++){
//     for(let j=1; j<=i;j++){
//       if( i==n  || j==1  || j==i){
//         pattern+="*"
//     }else{
//       pattern+=" "
//     }
//   }
//     pattern+="\n"
// }
// console.log(pattern)



// //   PASCAL PATTERN
//    let resutl=[[1]];
//    let n=5;
//    for(let i=1; i<n ; i++){

//     let prevRow= resutl[resutl.length-1];
//     let newRow =[1];
//     for(let j=0; j<prevRow.length-1;j++){
//       newRow.push(prevRow[j]+prevRow[j+1])
//     }
//     newRow.push(1)
//     resutl.push(newRow);
//    };
//    console.log(resutl)



// //   PASCAL PATTERN
// let pattern=""
// let factorial=1;
// let n=5;
//      function fact(n){
//          for(let i=1; i<=n; i++){
//           factorial*=i;
//          }
//          return factorial;
//      }
//      for(let i=0;i<n; i++){
//       for(let j=0; j<=i; j++){
//     pattern+=(fact(i)/(fact(j)*fact(i-j)))
//       }
//       pattern+="\n"
//      }
// console.log(pattern)




// // PALINDROME
// let n=5;
// let pattern = ""

// for(let i=1; i<=n; i++){
//   for(let k=1; k<=n-i; k++){
//     pattern+=" "
//   }
//   for(let l=i; l>=2;l--){
//     pattern+=l
//   }
//   for(let j=1; j<=i; j++){
//     pattern+=j
//   }
  
//   pattern+="\n"
// }
// console.log(pattern)




// //  ZIG-ZAG PATTERN
// let n=9;
// let pattern="";

// for(let i=1 ; i<=3;i++){
//   for(let j=1; j<=n;j++){
//    // console.log(j)
//     if(((i+j)%4==0)|| (i==2 && j%4==0)){
//        pattern+="*"
//     }else{
//       pattern+=" "
//     }
//   }
//   pattern+="\n"
// }
// console.log(pattern)


// let a=9;
// let patteern="";

// for(let i=1 ; i<=3;i++){
//   for(let j=1; j<=a;j++){
//    // console.log(j)
//    patteern+="*"
//   }

//   patteern+="\n"
// }
// console.log(patteern)



// //  FIBONACCI SEQUENCE
// let n=7;
// let x1=0;
// let x2=1;

// let next;
// console.log(x1)
// console.log(x2)
// for(let i=0; i<=n; i++){

//   next=x1+x2;
//   console.log(next)
//   x1=x2;
//   x2=next
// }




// //   PATHAGOREN CHECK
// function patha(a,b,c){
//     return a*a+b*b==c*c
// }
// console.log(patha(3,4,5))




// // BINARY TO DECIMAL
// let binNum="1001"
// let dec= parseInt(binNum,2)
// console.log(dec)



// //   HEX TO DECIMAL
// let hexNum="b"
// let dec= parseInt(hexNum,16)
// console.log(dec)



// //   OCT TO DECIMAL
// let octNum="44"
// let dec= parseInt(octNum,8)
// console.log(dec)









//                    DSA

// //ARRAY TRAVERSING
// let a=[1,2,3,4,5,6];

// function getElement(){
//     let ele=document.getElementById("element").value;
//     if(ele<a.length && typeof parseInt(ele)==="number"){
//         alert(a[ele])
//     }else{
//         alert("please enter the write num")
//     }
// }



// //   INSERT ELEMENT IN ARRAY
// let a=[1,2,3,4,5];
// let positon=1;
// let num=23;

// for(let i=a.length-1; i>=0; i--){
//     if(i>=positon){
//         a[i+1]=a[i]
//         a[i]=num;
//     }
// }
// console.log(a)




// // DELET ELEMENT IN ARRAY
// let x=[1,2,3,4,5];
// let size= x.length;
// let positon=2;
// for(let i=positon; i<x.length;i++){

//         x[i]=x[i+1]
//     }
//     x.length=x.length-1
    
// console.log(x)




// //    SEARCH ELEMENT 
// let x=[1,2,3,34,4,5,27]
// let num=27;
// let index=null;

// for(let i=0;  i<x.length; i++){
//     if(x[i]===num){
//         index=i;
//         break;
//     }
// }
// console.log(index)




// //   MERG TOW ARRAY
// let x=[1,2,3,4,5];
// let y=[6,7,8,9,10]
// let z=[]
// for(let i=0; i<x.length;i++){
//     z[i]=x[i]
//     }
//     for(let j=0;j<y.length; j++){
//        z[x.length+j]=y[j]
//     }

// console.log(z)





// //MERG TWO ARRAY WHILE LOOP
// let data1=[1,12,3,34,5];
// let data2=[8,19,10,5,44];
// let data3=[];
// let d1=0;
// let d2=0;
// let d3=0;
// while(d1<data1.length && d2<data2.length){
//     if(data1[d1]<data2[d2]){
//         data3[d3]=data1[d1];
//         d1++;
//        // console.log(data3[d3])
//     }else{
//         data3[d3]=data2[d2];
//         d2++;
//        // console.log(data3[d3])
//     }
//     d3++;
// }
// while(d1<data1.length){
//     data3[d3]=data1[d1];
//     d1++;
//     d3++
// }
// while(d2<data2.length){
//     data3[d3]=data2[d2];
//     d2++;
//     d3++
// }
// console.log(data3)





// // ARRAY SORTING
// let x=[40,30,12,25];

// for(let i=0; i<x.length; i++){
//     for(let j=0; j<x.length; j++){
//         if(x[j]>x[j+1]){
//             let temp= x[j];
//             x[j]=x[j+1];
//             x[j+1]=temp;
//         }
//     }
// }
// console.log(x)





// //    RECURSION BASIC
// function apple(x){
//     console.log(x)
//     if(x<10){
//         apple(x+1)
//     }
// }
// let data=0;
//apple(data)




// //INDIRECT RECURSION
// let money=100;
// let totalApple=0;

// function buyApple(x){
//     if(x>0){
//         console.log("I have", x, "Rs",totalApple)
//         buyMore(x)
//     }else{
//         console.log("I don't have more money but",totalApple, "apples");
//     }
// }
// function buyMore(x){
//     totalApple++;
//     buyApple(x-20)
// }
// buyApple(money)


// // REVERSE ARRAY WITH RECURSION
// let data = [5,12,65,89,0];
// let temp;

// function reverse(data,start,end){
//     console.log(data)
//     if(start<=end){
//         temp=data[start];
//         data[start]=data[end];
//         data[end]=temp;
//         reverse(data,start+1,end-1)
//     }
 
// }
// reverse(data,0,data.length-1)






// //  STACK PUSH AND POP
// let data=[];                      //is ma last sy del ho ga
// let currenSize=data.length;
// let max=5;
// function push(newVal){
//     if(currenSize>=max){
//         alert("Stack is full you can not add"+newVal)
//     }else{
//         data[currenSize]=newVal;
//         currenSize+=1;
//     }
// }
// function pop(){
//     if(currenSize>0){
//         currenSize -=1;
//         data.length=currenSize
//     }else{
//         alert("Stack is already empty")
//     }
// }
// push(20);
// push(12);
// push(9);
// pop()
// console.log(data)






// // REVERSE STRING WITH STACK
//  // cal by refernce work for array and object
// let data=[];                             
// let currenSize=data.length;
// let max=5;
// function push(newVal){
//         data[currenSize]=newVal;
//         currenSize+=1;
//     }
// function pop(){
//        lastRemovedItem=data[currenSize-1]
//         currenSize -=1;
//         data.length=currenSize
//         return lastRemovedItem
// }

// function reverseStr(item){
//     for(let i=0; i<item.length;i++){
//         push(item[i])
//     }
//     for(let i=0; i<item.length;i++){
//        item[i]=pop();
//     }
// }

// let str="anil";
// str=str.split("");
// reverseStr(str)
// console.log(str.join(""))



// //STACK WITH CLASS
// class Stack{
//     stack=[];
//     maxSize;
//     constructor(size){
//         this.maxSize =size;
//         this.currentSize = this.stack.length;
//     }
//     push(newVal){
//         if(this.currentSize>=this.maxSize){
//             alert("stack is full")
//         }else{
//             this.stack[this.currentSize]=newVal
//             this.currentSize++;
//         }
//     }

// pop(){
//    if(this.currentSize>0){
//        this.currentSize--;
//        this.stack.length=this.currentSize;
//    }else{
//     alert("stack is already empty")
//    }
// }
// display(){
//     console.log(this.stack)
// }
// }

// st1=new Stack(5);
// st1.push(20)
// st1.push(23);
// st1.push(30);
// st1.push(40);
// st1.pop()
// st1.display()
// // question?= class k sath string reverse kro






// //    BASIC QUEUE
// let queue=[];
// let currenSize=queue.length;
// let maxSize=5;

// function enqueue(newVal){
//     if(currenSize>=maxSize){
//         alert("queue is alreadmy full")
//     }else{
//    queue[currenSize]=newVal;
//    currenSize++;
//     }
// }
// function dequeue(){
//     if(currenSize>0){
//     for(let i=0; i<queue.length; i++){
//         queue[i]=queue[i+1];
//     }
//     currenSize-=1
//     queue.length=currenSize;
// }else{
//     alert("queue is empty")
// }
// }
// function display(){
//     console.log(queue)
// }

// enqueue(10);
// enqueue(20);
// enqueue(30);
// enqueue(40);
// enqueue(50);
// dequeue();
// dequeue();
// display()




// // FRONT REAR ISEMPTY
// let queue=[];
// let currenSize=queue.length;
// let maxSize=5;

// function enqueue(newVal){
//     if(currenSize>=maxSize){
//         alert("queue is already full")
//     }else{
//    queue[currenSize]=newVal;
//    currenSize++;
//     }
// }
// function dequeue(){
//     if(!isEmpty()){
//     for(let i=0; i<queue.length; i++){
//         queue[i]=queue[i+1];
//     }
//     currenSize-=1
//     queue.length=currenSize;
// }else{
//     alert("queue is empty")
// }
// }
// function front(){
//     if(!isEmpty()){
//      console.log(queue[0])
//     }else{
//         alert("queue is already empty")
//     }
// }
// function rear(){
//     if(!isEmpty()){
//      console.log(queue[currenSize-1])
//     }else{
//         alert("queue is already empty")
//     }
// }
// function isEmpty(){
//     if(currenSize<=0){
//         return true;
//     }else{
//         return false;
//     }
// }

// enqueue(10);
// enqueue(20);
//  enqueue(30);
//  enqueue(40);
//  enqueue(50);
//  dequeue();
//  dequeue();
// front()
// rear()
// console.log(queue)



// //  CIRCULAR QUEUE
// class  QUEUE{
//     constructor(size){
//         this.max=size;
//         this.items=new Array(size);
//         this.currentSize=0;
//         this.rear=-1;
//         this.front=-1;
//     }
//     enqueue(val){
//       if(this.currentSize!=this.max){
//         if(this.rear==this.max-1){
//             this.rear=0;
//         }else{
//             this.rear++;
//         }
//         this.items[this.rear]=val;
//         this.currentSize++;
//         if(this.front==-1){
//             this.front=this.rear;
//         }

//       }
//     }
//       dequeue(){
//         if(this.currentSize!=0){
//           this.items[this.front]=null;
//             if(this.front == this.max-1){
//                 this.front=0;
//             }else{
//                 this.front++;
//             }
//             this.currentSize--;
//         }else{
//             this.front=-1;
//             this.rear=-1;
//             alert(" queue is empty")
//         }
//       }
// }

// let queue= new QUEUE(5)
// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// queue.enqueue(50);
// queue.dequeue()

// console.log(queue)





// //LINER SEARCH
// let x=[2,4,5,6,7,8];
// let find=5;
// let position=null;

// for(let i=0; i<x.length; i++){
//     if(x[i]==find){
//         position=i;
//     }
// }
// console.log(position)



// //  BINARY SEARCH
// let x=[5,9,15,20];
// let find=20;
// let start=0;
// let end = x.length-1;
// let position= null;
// while(start<=end){
//     let mid = Math.floor((start + end)/2);
//     if(x[mid] === find){
//         position = mid;
//         break;
//     }else if(x[mid]<find){
//         start = mid+1;
//     }else{
//         end = mid-1;
//     }
// }
// console.log(position)



// // BINARY SEARCH RECURSIVE
// let data=[12,34,56,78,90];
// let start=0;
// let end=data.length-1;
// let find= 90;
// let position=null;

// function recursiveBinary(data,start,end){
//    mid=Math.floor((start+end)/2);
//    if(data[mid]==find){
//     position=mid
//     return true;
//    }else if(data[mid]<find){
//     recursiveBinary(data,mid+1,end)
//    }else{
//     recursiveBinary(data,start,mid-1)
//    }
// }

// recursiveBinary(data,start,end)
//  console.log(position)






// //SECLECTION SORT
// let x=[20,12,53,6];

// function slectionSort(data){
//     let minId;
//     //console.log(data)
//     for(let i=0; i<data.length;i++){
//         minId=i;
//         for(let j=i+1; j<data.length;j++){
//              console.log(j)
//             if(data[j]<data[i]){
//                 minId=j;
//             }
//         }
//         let temp=data[minId];
//         data[minId]=data[i];
//         data[i]=temp
//     }
// }
// slectionSort(x)
// console.log(x)





// //DESCENDING ORDER SLECTION SORTING
// let x=[10,23,45,78,69,19];
// let minId;
// function slectionSort(data){
//     for(let i=data.length-1; i>=0; i--){
//        // console.log(i)
//         minId=i;
//         // for(let j=i-1; j>=0;j--){
//          for(let j=i+1; j<data.length;j++){
//             if(data[j]>data[minId]){
//                 minId=j;
//             }
//         }
//         let temp =data[minId];
//         data[minId]=data[i];
//         data[i]=temp;
//     }
// }

// slectionSort(x)
// console.log(x)




//  //    INSERTION SORT
  
// let arr=[12,11,13,5,6];
// function insertionSort(data){
//     let i,current, j;
//     for(i=1 ;i<data.length; i++){
//         current =data[i];
//         j=i-1;
//         while(j>=0 && data[j]>current){
//             data[j+1]=data[j];
//             j--;
//         }
//         data[j+1]=current;
//     }
//     return arr
// }
 
// console.log(insertionSort(arr))




// //  QUICK SORT
 
// function quikSort(arr){
//     if(arr.length <=1){
//         return arr;
//     }

// const pivot =arr[0];
// console.log(pivot)
// const left =[];
// const right=[];

// for(i=1; i<arr.length; i++){
//     if(arr[i]<pivot){
     
//         left.push(arr[i])
//         console.log("left",left)
//     }else{
//         right.push(arr[i])
//         console.log("right",right)
//     }
// }
// return [...quikSort(left),pivot,...quikSort(right)]
// }
// let arr=[5,4,1,2,3,7,6]
// console.log(quikSort(arr))


// // CHECKS STRINGS ARE ANAGRAN
// function checkAnagram(str1,str2){
//     let objStr1={};
//    if(str1.length != str2.length){
//     return false;
//    }
//      for(let ch of str1){
//        // console.log(ch)
//         objStr1[ch]  = (objStr1[ch] || 0)+1    // [ch] sy value ki key bn jay gi
//        // console.log(objStr1)                
//      }
//      for(let ch of str2)
//     // console.log(objStr1[ch])
//     if(!objStr1[ch]){
//         return false;
//     }else{
//         objStr1[ch]--;
//     }
//    return true
// }
// console.log(checkAnagram("hello","ehllo"))




// // CHECK STRING IS PALINDROME
// function palindrom(data){
//    let start=0;
//    let end= data.length-1;
//    let result=true;

//    while(end>start){
//     if(data[start] != data[end]){
//         result=false;
//     }
//     start++;
//     end--;
//    }
//    return result;
// }
// let str="level"
// console.log(palindrom(str))



// //MAXIMUM OCCRRING CHARACTER IN STRING
// let str="hello";
// let strObj={};
// let maxKey='';
// for(let  i=0; i<str.length; i++){
//    // console.log(str[i])
//     let key=str[i];
//     if(!strObj[key]){
//         strObj[key]=0;
//     }
//     strObj[key]++;
//    // console.log(strObj)
//    if(maxKey == '' || strObj[key]>strObj[maxKey]){
    
//     maxKey=key
//    }
// }
// console.log(maxKey)




// //LINKED LIST
// class List{
//     constructor(data){
//         this.head={
//             value:data,
//             next:null,
//         };
//         this.tail=this.head;
//            this.size=1;
//     }
//     appendNode(nodeData){
//      let newNode={
//         value:nodeData,
//         next:null   
//      };
//      this.tail.next=newNode;
//      this.tail=newNode
//      this.size+=1;
//     }
// }
// let list= new List(200);
// list.appendNode(300);
// list.appendNode(400)
// console.log(list)




// // TRAVERSING LINKED LIST
// class List{
//     constructor(data){
//         this.head={
//             value:data,
//             next:null,
//         };
//         this.tail=this.head;
//            this.size=1;
//     }
//     appendNode(nodeData){
//      let newNode={
//         value:nodeData,
//         next:null   
//      };
//      this.tail.next=newNode;
//      this.tail=newNode
//      this.size+=1;
//     }
//     traversing(){
//         let counter=0;
//         let currentNode=this.head;
//         while(counter<this.size){
//            // console.log(counter)
//             console.log(currentNode)
//             currentNode=currentNode.next
//             counter++;
//         }
//     }
// }
// let list= new List(200);
// list.appendNode(300);
// list.appendNode(400);
// list.appendNode(500);
// list.traversing()
// console.log(list)



// //DELETE NODE LINKED LIST
// class List{
//     constructor(data){
//         this.head={
//             value:data,
//             next:null,
//         };
//         this.tail=this.head;
//            this.size=1;
//     }
//     appendNode(nodeData){
//      let newNode={
//         value:nodeData,
//         next:null   
//      };
//      this.tail.next=newNode;
//      this.tail=newNode
//      this.size+=1;
//     }
//     traversing(){
//         let counter=0;
//         let currentNode=this.head;
//         while(counter<this.size){
//            // console.log(counter)
//             console.log(currentNode)
//             currentNode=currentNode.next
//             counter++;       
//         }
//     }
//     deleteNode(index){
//        let counter=1;
//        let lead= this.head;
//         if(index===1){
//             this.head=this.head.next;
//         }else{
//             while(counter<index-1){
//                 lead =lead.next;
//                 counter++
//             }
//             let nextNode=lead.next.next;
//             lead.next=nextNode;
//             //console.log(lead)
//         }
//     }
// }
// let list= new List(200);
// list.appendNode(300);
// list.appendNode(400);
// list.appendNode(500);
//  list.traversing();
// list.deleteNode(2);

// console.log(list)




// //INSERT NODE IN LINKED LIST
// class List{
//     constructor(data){
//         this.head={
//             value:data,
//             next:null,
//         };
//         this.tail=this.head;
//            this.size=1;
//     }
//     appendNode(nodeData){
//      let newNode={
//         value:nodeData,
//         next:null   
//      };
//      this.tail.next=newNode;
//      this.tail=newNode
//      this.size+=1;
//     }
//     insertNode(index,value){
//       let counter=1;
//       let currentNode=this.head;
//      // while(counter>index)            // jb tk counter index sy chota rhy ga
//       while(counter<index-1){
//         counter++;
//       currentNode= currentNode.next;
//       }
//       let nextNode =currentNode.next;
//       currentNode.next={
//         value:value,
//         next:nextNode
//       }
//     }
// }
// let list= new List(200);
// list.appendNode(300);
// list.appendNode(400);
// list.appendNode(500);
// list.insertNode(4,6000)
// console.log(list)




// //SEARCH NODE LINKED LIST
// class List{
//     constructor(data){
//         this.head={
//             value:data,
//             next:null,
//         };
//         this.tail=this.head;
//            this.size=1;
//     }
//     appendNode(nodeData){
//      let newNode={
//         value:nodeData,
//         next:null   
//      };
//      this.tail.next=newNode;
//      this.tail=newNode
//      this.size+=1;
//     }
    
//     searchNode(data){
//       let result =null;
//       let lead=this.head; 
//       let loop=true;
//       while(loop){           //jb data mil jay loop rk jay ga
//         lead=lead.next;
//         //console.log(lead)
//         loop=!!lead;          // magr undefine hai to false kr dy ga wrna true
//         if(loop && lead.value === data){
//             loop=false;
//             result = lead;
//         }
//       }
//       console.log(result)
//     }
// }
// let list= new List(200);
// list.appendNode(300);
// list.appendNode(400);
// list.appendNode(500);

// list.searchNode(400)




// //BINARY SEARCH  TREE AND NODE CLASS
// class Node{
//     constructor(val){
//         this.value=val;
//         this.left=null;
//         this.right=null;
//     }
// }
// class BSTree{
//     constructor(){
//    this.root=null;
//     }
//     isTreeEmpty(){
//         return this.root === null;

//     }
// }
// let bst=new BSTree()
// console.log(bst.isTreeEmpty())





// //INSERT NODE BINARY SEARCH TREE
// class Node{
//     constructor(val){
//         this.value=val;
//         this.left=null;
//         this.right=null;
//     }
// }
// class BSTree{
//     constructor(){
//    this.root=null;
//     }
//     isTreeEmpty(){
//         return this.root === null;

//     }
//     makeTree(val){
//         let newNode= new Node(val)
//         if(this.root===null){
//            this.root=newNode;
//         }else{
//             this.insertNode(this.root,newNode)
//         }
//     }
//     insertNode(root,newNode){
//         if(root.value>newNode.value){
//             if(root.left===null){
//                 root.left=newNode
//             }else{
//                 this.insertNode(root.left,newNode)
//             }
            
//         }else{
//                 if(root.right===null){
//                     root.right=newNode
//                 }else{
//                     this.insertNode(root.right,newNode)
//                 }
//     }
// }
// }
// let bst=new BSTree()
// bst.makeTree(20);
// bst.makeTree(10);
// bst.makeTree(5);
// bst.makeTree(25);
// bst.makeTree(35);

// console.log(bst)



// //SEARCH NODES BINARY SEARCH
// class Node{
//     constructor(val){
//         this.value=val;
//         this.left=null;
//         this.right=null;
//     }
// }
// class BSTree{
//     constructor(){
//    this.root=null;
//     }
//     isTreeEmpty(){
//         return this.root === null;

//     }
//     makeTree(val){
//         let newNode= new Node(val)
//         if(this.root===null){
//            this.root=newNode;
//         }else{
//             this.insertNode(this.root,newNode)
//         }
//     }
//     insertNode(root,newNode){
//         if(root.value>newNode.value){
//             if(root.left===null){
//                 root.left=newNode
//             }else{
//                 this.insertNode(root.left,newNode)
//             }
            
//         }else{
//                 if(root.right===null){
//                     root.right=newNode
//                 }else{
//                     this.insertNode(root.right,newNode)
//                 }
//     }
// }
// search(root,val){
//     if(root===null){
//         return false;
//     }else if(root.value===val){
//         return true;
//     }
//     else if(root.value>val){
//         return this.search(root.left,val)
//     }else{
//         return this.search(root.right,val)
//     }
// }
// }
// let bst=new BSTree()
// bst.makeTree(20);
// bst.makeTree(10);
// bst.makeTree(5);
// bst.makeTree(25);
// bst.makeTree(35);
// console.log(bst.search(bst.root,295))




// // DEPTH FIRST SEARCH IN TREE
// class Node{
//     constructor(val){
//         this.value=val;
//         this.left=null;
//         this.right=null;
//     }
// }
// class BSTree{
//     constructor(){
//    this.root=null;
//     }
//     isTreeEmpty(){
//         return this.root === null;

//     }
//     makeTree(val){
//         let newNode= new Node(val)
//         if(this.root===null){
//            this.root=newNode;
//         }else{
//             this.insertNode(this.root,newNode)
//         }
//     }
//     insertNode(root,newNode){
//         if(root.value>newNode.value){
//             if(root.left===null){
//                 root.left=newNode
//             }else{
//                 this.insertNode(root.left,newNode)
//             }
            
//         }else{
//         if(root.right===null){
//         root.right=newNode
//          }else{
//         this.insertNode(root.right,newNode)
//        }
//      }
//    }
//    prOrder(root){
//     if(root){
//         console.log(root.value)
//         this.prOrder(root.left);
//         this.prOrder(root.right);
//     }
//    }
//    inOder(root){
//     if(root){
//         this.inOder(root.left);
//         console.log(root.value)
//         this.inOder(root.right);
//     }
//    }
//    postOder(root){
//     if(root){
//         this.postOder(root.left);
//         this.postOder(root.right);
//         console.log(root.value)
//     }
//    }
// }

// let bst=new BSTree()
// bst.makeTree(20);
// bst.makeTree(10);
// bst.makeTree(5);
// bst.makeTree(11)
// bst.makeTree(25);
// bst.makeTree(23);
// bst.makeTree(40);

// console.log("Pre order")
// bst.prOrder(bst.root)

// console.log("IN order")
// bst.inOder(bst.root)

// console.log("Post order")
// bst.postOder(bst.root)

// console.log(bst)




// //BREADTH FIRST SEEARCH
// class Node{
//     constructor(val){
//         this.value=val;
//         this.left=null;
//         this.right=null;
//     }
// }
// class BSTree{
//     constructor(){
//    this.root=null;
//     }
//     isTreeEmpty(){
//         return this.root === null;

//     }
//     makeTree(val){
//         let newNode= new Node(val)
//         if(this.root===null){
//            this.root=newNode;
//         }else{
//             this.insertNode(this.root,newNode)
//         }
//     }
//     insertNode(root,newNode){
//         if(root.value>newNode.value){
//             if(root.left===null){
//                 root.left=newNode
//             }else{
//                 this.insertNode(root.left,newNode)
//             }
            
//         }else{
//         if(root.right===null){
//         root.right=newNode
//          }else{
//         this.insertNode(root.right,newNode)
//        }
//      }
//    }

//    bfsTraversing(root){
//     let  queue=[];
//     queue.push(this.root);
//     while(queue.length){
//         let current=queue.shift();
//         if(current.left){
//             queue.push(current.left)
//         }
//         if(current.right){
//             queue.push(current.right)
//         }
//         console.log(current.value)
//     }
//    }
// }

// let bst=new BSTree()
// bst.makeTree(20);
// bst.makeTree(10);
// bst.makeTree(5);
// bst.makeTree(11)
// bst.makeTree(25);
// bst.makeTree(23);
// bst.makeTree(40);

// bst.bfsTraversing(bst.root)

// console.log(bst)





// //MIN AND MAX VALUE IN TREE
// class Node{
//     constructor(val){
//         this.value=val;
//         this.left=null;
//         this.right=null;
//     }
// }
// class BSTree{
//     constructor(){
//    this.root=null;
//     }
//     isTreeEmpty(){
//         return this.root === null;

//     }
//     makeTree(val){
//         let newNode= new Node(val)
//         if(this.root===null){
//            this.root=newNode;
//         }else{
//             this.insertNode(this.root,newNode)
//         }
//     }
//     insertNode(root,newNode){
//         if(root.value>newNode.value){
//             if(root.left===null){
//                 root.left=newNode
//             }else{
//                 this.insertNode(root.left,newNode)
//             }
            
//         }else{
//         if(root.right===null){
//         root.right=newNode
//          }else{
//         this.insertNode(root.right,newNode)
//        }
//      }
//    }

//    minValue(root){
//      if(!root.left){
//         return root.value
//      }else{
//         return this.minValue(root.left)
//      }
//    }
//    maxValue(root){
//      if(!root.right){
//         return root.value
//      }else{
//         return this.maxValue(root.right)
//      }
//    }
// }

// let bst=new BSTree()
// bst.makeTree(20);
// bst.makeTree(10);
// bst.makeTree(5);
// bst.makeTree(11)
// bst.makeTree(25);
// bst.makeTree(23);
// bst.makeTree(40);

// console.log(bst.minValue(bst.root));
// console.log(bst.maxValue(bst.root));





// //DELELTE NODE IN BINARY SEARCH TREE
// class Node{
//     constructor(val){
//         this.value=val;
//         this.left=null;
//         this.right=null;
//     }
// }
// class BSTree{
//     constructor(){
//    this.root=null;
//     }
//     isTreeEmpty(){
//         return this.root === null;

//     }
//     makeTree(val){
//         let newNode= new Node(val)
//         if(this.root===null){
//            this.root=newNode;
//         }else{
//             this.insertNode(this.root,newNode)
//         }
//     }
//     insertNode(root,newNode){
//         if(root.value>newNode.value){
//             if(root.left===null){
//                 root.left=newNode
//             }else{
//                 this.insertNode(root.left,newNode)
//             }
            
//         }else{
//         if(root.right===null){
//         root.right=newNode
//          }else{
//         this.insertNode(root.right,newNode)
//        }
//      }
//    }

//    bfsTraversing(root){
//     let  queue=[];
//     queue.push(this.root);
//     while(queue.length){
//         let current=queue.shift();
//         if(current.left){
//             queue.push(current.left)
//         }
//         if(current.right){
//             queue.push(current.right)
//         }
//         console.log(current.value)
//     }
//    }
//    minValue(root){
//          if(!root.left){
//             return root.value
//          }else{
//             return this.minValue(root.left)
//          }
//        }
//    removeData(value){
//    this.root=this.deleteNode(this.root,value)
//    }
//    deleteNode(root,value){
//     if(root===null){
//         return null;
//     }
//     if(value<root.value){
//         root.left=this.deleteNode(root.left,value)
//     }else if(value>root.value){
//         root.right=this.deleteNode(root.right,value)
//     }else{
//         if(!root.left && !root.right){
//             return null;
//         }else if(!root.left){
//             return root.right;
//         }
//         else if(!root.right){
//             return root.left;
//         }
//         root.value=this.minValue(root.right);
//         root.right=this.deleteNode(root.right,root.value)
//     }
//     return root;
//    }
// }

// let bst=new BSTree()
// bst.makeTree(20);
// bst.makeTree(10);
// bst.makeTree(5);
// bst.makeTree(11)
// bst.makeTree(25);
// bst.makeTree(23);
// bst.makeTree(40);

// bst.removeData(40)
//  bst.bfsTraversing(bst.root)
//  console.log(bst.root)



// //  ADJACENCY MATRIX GRAPH
// let data=[
//     [0,1,1,0],
//     [1,0,1,1],
//     [1,1,0,0],
//     [0,1,0,0]
// ]
// console.log(data)



// //  ADJACENCY LIST GRAPH
// let adjList={
//     'a':['b','c'],
//     'b':['a','c','d'],
//     'c':['a','b'],
//     'd':['b']
// }
//console.log(adjList.a[0])



// //  ADD VERTEX IN GRAPH
// class Graph{
//     constructor(){
//         this.data={

//         }
//     }
//     addVertex(vertex){
//         this.data[vertex]=[];
//         if(!this.data[vertex]){
//             this.data[vertex]=[];
//         }
//     }
// }
// const graph1= new Graph();
// graph1.addVertex("A");
// graph1.addVertex("B");
// graph1.addVertex("C");
// graph1.addVertex("D");
// console.log(graph1)




// //   ADD VERTEX WITH EDGE IN GRPAH
// class Graph{
//     constructor(){
//         this.data={

//         }
//     }
//     addVertex(vertex){
//         this.data[vertex]=[];
//         if(!this.data[vertex]){
//             this.data[vertex]=[];
//         }
//     }
//     addEdge(v1,v2){
//        if(!this.data[v1]){
//         this.addEdge(v1)
//        }
//        if(!this.data[v2]){
//         this.addEdge(v2)
//        }
//        this.data[v1].push(v2)
//        this.data[v2].push(v1)
//     }
// }
// const graph1= new Graph();
// graph1.addVertex("A");
// graph1.addVertex("B");
// graph1.addVertex("C");
// graph1.addVertex("D");

// graph1.addEdge("A","C")
// graph1.addEdge("A","B")
// graph1.addEdge("C","B")
// graph1.addEdge("D","B")

// console.log(graph1)



//   REMOVE EDGE IN GRAPH
// class Graph{
//     constructor(){
//         this.data={

//         }
//     }
//     addVertex(vertex){
//         this.data[vertex]=[];
//         if(!this.data[vertex]){
//             this.data[vertex]=[];
//         }
//     }
//     addEdge(v1,v2){
//        if(!this.data[v1]){
//         this.addEdge(v1)
//        }
//        if(!this.data[v2]){
//         this.addEdge(v2)
//        }
//        this.data[v1].push(v2)
//        this.data[v2].push(v1)
//     }
//     removeEdge(v1,v2){
//       this.data[v1]=  this.data[v1].filter((elem)=>{
//            // console.log(elem)
//        return    elem!=v2;
//         }) ;

//         this.data[v2]=  this.data[v2].filter((elem)=>{
//         return    elem!=v1;
//          }) 
//     }
// }
// const graph1= new Graph();
// graph1.addVertex("A");
// graph1.addVertex("B");
// graph1.addVertex("C");
// graph1.addVertex("D");

// graph1.addEdge("A","C")
// graph1.addEdge("A","B")
// graph1.addEdge("C","B")
// graph1.addEdge("D","B")

// graph1.removeEdge("B","D")
// console.log(graph1)




// //   REMOVE VERTEX IN GRAPH
// class Graph{
//     constructor(){
//         this.data={

//         }
//     }
//     addVertex(vertex){
//         this.data[vertex]=[];
//         if(!this.data[vertex]){
//             this.data[vertex]=[];
//         }
//     }
//     addEdge(v1,v2){
//        if(!this.data[v1]){
//         this.addEdge(v1)
//        }
//        if(!this.data[v2]){

//         this.addEdge(v2)
//        }
//        this.data[v1].push(v2)
//        this.data[v2].push(v1)
//     }
//     removeEdge(v1,v2){
//       this.data[v1]=  this.data[v1].filter((elem)=>{
//            // console.log(elem)
//        return    elem!=v2;
//         }) ;

//         this.data[v2]=  this.data[v2].filter((elem)=>{
//         return    elem!=v1;
//          }) 
//     }
//     removeVertex(vertex){
//        if(!this.data[vertex]){
//         return;
//        }
//        for(let item of this.data[vertex]){
//        // console.log(item)
//        this.removeEdge(vertex,item)
//        }
//        delete this.data[vertex]
//     }
// }
// const graph1= new Graph();
// graph1.addVertex("A");
// graph1.addVertex("B");
// graph1.addVertex("C");
// graph1.addVertex("D");

// graph1.addEdge("A","C")
// graph1.addEdge("A","B")
// graph1.addEdge("C","B")
// graph1.addEdge("D","B")

// //graph1.removeEdge("B","D")

// graph1.removeVertex("A")

// console.log(graph1)




