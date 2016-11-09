function change1(){
    document.getElementById("demo").setAttribute("src","img/asus/1.png");
}
function change2(){
    document.getElementById("demo").setAttribute("src","img/dell/1.png");
}
function change3(){
    document.getElementById("demo").setAttribute("src","img/mac/1.png");
}
window.onscroll = function(){
    myfuntion();
};
function myfuntion(){
    if(window.scrollY >120 && document.getElementById("menu").className!="white"){
        document.getElementById("menu").className="white";
    }
    else if(window.scrollY < 120 && document.getElementById("menu").className!="white-menu"){
        document.getElementById("menu").className="white-menu";
    }
}