

const students = [
    {name:"vishal",company:"intigate",start:"2022",end:"2024"},
    {name:"rahul",company:"koiki",start:"1994",end:"2562"},
    {name:"pushpa",company:"nikiopop",start:"2042",end:"6525"},
    {name:"neha",company:"alolo",start:"2020",end:"2026"},
    {name:"jyoti",company:"lolp",start:"1998",end:"2029"},
]

const age = [10,20,30,40,50,60,70,80,90]


// ForEach
students.forEach((student,index)=>{
    console.log(student.name)
})



// FILTER:
// let studentStartdate = students.filter((start)=>{
//     if(start.start>="2020"){
//         return true;
//     }
// })

let studentStartdate = students.filter(start=>start.start>"2020")
console.log("startdate",studentStartdate)







// Map














































































// Apply Call and Bind in javascript    


































































































// Clouser 
// Clouser example one 
// var sum = function(a){
//     console.log("heelo",a)
//     let c =5;
//     return function(b){
//         return a+b+c;
//     }


// }

// var store = sum(2);
// console.log(store(10))


// CLOUSER EXAMPLE TWO :

// var sum = function(a,b,c){

//     return{
//         getaddtion:function(){
//             return a+b;
//         },
//         getaddtionThree:function(){
//             return a+b+c;
//         }
//     }
// }

// var store = sum(5,6,8);
// console.log(store.getaddtion());
// console.log(store.getaddtionThree());




























































































// const datas = [
//     {name:"vishal",position:"SDEII"},
//     {name:"Deepak",position:".NET"}
//     ]

// function calldataj(){
//     setTimeout(()=>{
//         let output ="";
//         datas.forEach((name,index)=>{
//             output+=`<li>${name.name}</li>`
//         })
//         document.getElementById("data").innerHTML=output;
//     },1000);
// }

// calldataj();
// IMPLEMENTING THE CALLBACK AT THIS POINT OF TIME
// function adddata(newdata,callback){
//     setTimeout(()=>{
//         datas.push(newdata);
//         callback();
//     },2000)
// }
// here we use create function as a callback
// adddata({name:"rahul",position:"Java"},calldataj)


// PROMISE=========================

// function adddata(newdata){
//     return new Promise ((resolve,reject)=>{
//         setTimeout(()=>{
//             datas.push(newdata);
//             let error = false;
//             if(!error){
//                 resolve();
//             }else{
//                 reject("kuch nhi bro sad")
//             }
//         },2000)
//     })
    
// }

// adddata({name:"rahul",position:"Java"})
// .then(calldataj)
// .catch(err=>console.log(err))

// AYSC AND AWAIT ==================================================================





// async function start (){
//     await adddata({name:"rahul",position:"Java"});
//     calldataj();

// }

// start();
