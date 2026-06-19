function showLove() {

alert(
"❤️ నాన్నా... మీరు నా జీవితంలో అత్యంత విలువైన వ్యక్తి. Happy Father's Day ❤️"
);

}

window.onload = () => {

const cards = document.querySelectorAll(".photo-card");

cards.forEach((card,index)=>{

card.style.opacity="0";

setTimeout(()=>{

card.style.transition="1s";
card.style.opacity="1";

},index*400);

});

};
