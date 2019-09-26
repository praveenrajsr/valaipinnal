const root = document.getElementById("main-head");
let material = new Blotter.FliesMaterial();
var textvh = window.innerHeight * 0.2833;
let body = document.getElementsByTagName("HTML")[0];
var text = new Blotter.Text("Valai Pinnal", {
    family: "IndieFlower",
    size: 160,
    fill: "white",
}); 

material.uniforms.uPointCellWidth.value = 0.02;
material.uniforms.uPointRadius.value = 0.8;
material.uniforms.uSpeed.value = 1;

var blotter = new Blotter(material, {texts: text});

var scope = blotter.forText(text);

scope.appendTo(root)

// scroll

function destinationID(elementId){
    let length =  elementId.offsetTop;
    scrollTo(0, length);
}
let ham = document.getElementById('hamburger').addEventListener("click", function(){
    this.classList.toggle('is-active');
});

function toggleMenu(menu , mobul){
    menu.classList.toggle('show');
    if(mobul){
        mobul.classList.toggle('hide');
    }
    body.classList.toggle('noscroll');
}
function onlyclose(idname){
    idname.classList.remove('show');
    body.classList.toggle('noscroll');
}