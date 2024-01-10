let urls = "https://cataas.com/cat/";
let url1 = "https://v2.jokeapi.dev/joke/Any?safe-mode";
async function getjok(){
    try{
        let res = await axios.get(url1);
        return res.data.joke;
    } catch(er){
        console.log("Error is : ",er);
    }
}
async function getimg(your_search){
    try{
    let res = await axios.get(urls+your_search);
    return res.config.url;
    } catch(error) {
        console.log("Error is : ",error);
        return "fail request";
    }
}
getimg("funny");
let inp = document.querySelector("input");
let but = document.querySelector("button");
let p = document.querySelector("#qu");
but.addEventListener("click", async ()=>{
    let n = inp.value;
    let im = await getimg(n);
    let img = document.querySelector("img");
    img.setAttribute("src", im);
    let j = getjok();
    console.log(j);
    // p.inner = j;
});