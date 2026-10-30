document.getElementById("btnTransfer").addEventListener("click", function(){
    let sec = document.getElementById("secSelect").value;;
    setTimeout(transfereTxt, sec);
})

function transfereTxt(){
    document.getElementById("txt02").value = document.getElementById("txt01").value;
    document.getElementById("txt01").value = "";
}