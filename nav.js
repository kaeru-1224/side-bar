//navbar 만들기
//classList이용해서 하는거라는 생각은 드닉아 이번에는 최대한
//문서 찾아가면서 진행해보기 

/*이와같이 진행되는경우 한번만 누를수있고, 함수를 새로 추가해주어야한다는 문제가 발생
const navList = document.querySelector(".nav-links");
const navbtn=document.querySelector(".nav-button")

function showNav(){
    navList.classList.remove("hidden")}

navbtn.addEventListener('click',showNav)*/


const navbtn=document.querySelector(".nav-button");
const closebtn =document.querySelector(".side-btn")
const side = document.querySelector(".side-main")

function showSide(){
    /*
    let result= side.classList.contains("hidden")
       if(result){
        side.classList.add("slide-right")
           side.classList.remove("hidden")
       
       }else{ side.classList.add("hidden")
    side.classList.remove("slide-right")}*/
side.classList.toggle("hidden")
side.classList.toggle("slide-right")}


navbtn.addEventListener('mouseenter',showSide)
closebtn.addEventListener('click',showSide)

