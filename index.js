const datas = [
    {name:"vishal",position:"SDEII"},
    {name:"Deepak",position:".NET"}
    ]

function calldataj(){
    setTimeout(()=>{
        let output ="";
        datas.forEach((name,index)=>{
            output+=`<li>${name.name}</li>`
        })
        document.getElementById("data").innerHTML=output;
    },1000);
}

// calldataj();
// IMPLEMENTING THE CALLBACK AT THIS POINT OF TIME
function adddata(newdata,callback){
    setTimeout(()=>{
        datas.push(newdata);
        callback();
    },2000)
}
// here we use create function as a callback
adddata({name:"rahul",position:"Java"},calldataj)


// PROMISE

function adddata(newdata){
    setTimeout(()=>{
        datas.push(newdata);
        callback();
    },2000)
}

adddata({name:"rahul",position:"Java"})