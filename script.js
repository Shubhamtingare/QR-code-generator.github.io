const api = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="

const userInput = document.getElementById("userInput")
const btn = document.getElementById("btn")
const qrImage = document.getElementById("qrImage")
const qrBox = document.getElementById("qr-box")

 function genQRcode(){
    if(!userInput.value){
        alert("Please write something")
    }
    else{
        qrImage.src =  api + userInput.value
        qrBox.classList.add("qrBox")
        qrBox.style.display = "block"
    }
}

btn.addEventListener("click",genQRcode)

