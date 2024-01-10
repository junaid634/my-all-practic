
let h1 = document.querySelector("h1");
let body = document.querySelector("body");
function chng(color, delay){
 return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("color is changed");
        h1.style.color=color;
    }, delay);
 })
}
chng("red",1000)
.then((res)=>{
    console.log(res);
    return chng("green",1000);
})
.then((res)=>{
    console.log(res);
    return chng("gray",1000);
})
.then((res)=>{
    console.log(res);
    return chng("brown",1000);
})
.then((res)=>{
    console.log(res);
    return chng("blue",1000);
})
.then((res)=>{
    console.log(res);
    return chng("pink",1000);
})
.catch(()=>{
    console.log("color can't be change");
});
/*
change("red",1000, ()=>{
    change("green",2000, ()=>{
        change("purple",3000,()=>{
            change("gray",4000,pri);//to avoid error we use error
        });
    });
});
function change(color,delay,next ){
        setInterval(()=>{
            //body.style.backgroundColor= color;
            h1.innerText= color;

        },delay);
        next();
}
*/
//calling the functions
// function pri(){
// console.log("end");
//}
/*
function saveDb(data, success, fail){
    let net = Math.floor(Math.random()*10)+1;
    if(net>4){
       success();
    } else{
        fail();
    }

}
saveDb("junaid", ()=>{
    console.log("data is saved ");
    saveDb("khan",()=>{                     //if 1st success thencall this
        console.log("data2 is saves");
        saveDb("baloch", ()=>{              //if 2nd successs then call this
            console.log("data3 success");
        }, ()=> {                            //this is called function hell
            console.log("fail data3 ");     //if 3rd fail then diretly this is called
        });
    }, ()=>{
        console.log("data2 fail");           //if 2nd fail directly this is called
    });
}, ()=> {                                   //if first fail then directly this is called
    console.log("week connection : data do not save!");
});
*/
/*
function saveDb(data){
    return new Promise((resolve, reject)=>{
        let net = Math.floor(Math.random()*10)+1;
        if(net>4){
          resolve("success");
        } else{
            reject("fail");
        }
    });
    
}
saveDb("junaid")
.then((x)=>{
        console.log("data1 success");
        console.log(x);
        return saveDb("khan");
    })
    .then((x)=>{
        console.log("data2 is saved");
        console.log(x);
    })
.catch((e)=>{
    console.log("data faile ");
    console.log(e);
});
*/

