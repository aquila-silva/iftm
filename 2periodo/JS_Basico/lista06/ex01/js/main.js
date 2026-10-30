document.getElementById("btnTransfer").addEventListener("click", function(){
    setTimeout(transfereTxt, 2000);
})

function transfereTxt(){
    document.getElementById("txt02").value = document.getElementById("txt01").value;
    document.getElementById("txt01").value = "";
}