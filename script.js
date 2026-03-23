let count=0
document.getElementById("db").onclick=function(){
    count=count-1
    document.getElementById("cou").textContent=count
}
document.getElementById("ib").onclick=function(){
    count=count+1
    document.getElementById("cou").textContent=count
}
document.getElementById("rb").onclick=function(){
    count=0
    document.getElementById("cou").textContent=count
}