import './style.scss';
import * as bootstrap from 'bootstrap';

let head = document.querySelector(".more-head");

head.addEventListener("click",function(e){
    console.dir(e.target)
    // e.target.parentNode.classList.remove("show");
})

const dropdownElementList = document.querySelectorAll('.dropdown-self')
const dropdownList = [...dropdownElementList].map(dropdownToggleEl => new bootstrap.Dropdown(dropdownToggleEl));

dropdownList.map(function(e){
    console.dir(e)
})