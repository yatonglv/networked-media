window.onload = () => {
    console.log('page has loaded');
}
window.addEventListener("load", () => {
    let walk = document.getElementsByClassName("walk")[0];
    let scene = document.getElementsByClassName("photo")[0];
    let photom = document.getElementsByClassName("photom")[0];
    let photob = document.getElementsByClassName("photob")[0];
    let w = -200;
    let photomX = 0
    let photobX =  -(photob.clientWidth / 2);
    let photomWidth = photom.clientWidth / 2;
    let photobWidth = photob.clientWidth / 2;
    walk.style.left = w + "px";
    setInterval(Movewalk,30);
    setInterval(Movephoto,30);

    function Movewalk() {
    w = w + 2;

    if (w > scene.clientWidth) {
      w = -200;
    }
    walk.style.left = w + "px";
}
    // /for the background/ 

    function Movephoto(){
        photomX = photomX - 0.7;
        photobX = photobX + 0.7;
        if (photomX <= - photomWidth){
            photomX = 0;
        }
        if (photobX >= 0){
            photobX = -photobWidth;
        }
        photom.style.left = photomX + "px";
        photob.style.left = photobX + "px";
}

}
)