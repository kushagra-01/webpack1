
import { from } from "webpack-sources/lib/CompatSource"
import{aad,subs} from "./cal"

import React from "react"
import reactDom from "react-dom"

import "./index.css"
import react from "react"

const el = react.createElement(
    "h1",
    {className:"redlist",id:"myid",name:"nameplz"},
    "heloedfdooo"

)
reactDom.render(
    el,
    document.getElementById("root")
)


document.querySelector("#myform").addEventListener("submit" ,addItem)
function addItem(event){

   

    event.preventDefault();
    var name = document.querySelector("#name").value;
    var qty = document.querySelector("#qtyy").value;
    var priority = document.querySelector("#priority").value;
    
    var row = document.createElement("tr")


     var td1 = document.createElement("td");
     td1.textContent=name;

     var td2 = document.createElement("td");
     td2.innerText = qty;

     var td3 = document.createElement("td");
     td3.textContent=priority;
     if(priority=="high"){
         td3.style.backgroundColor="red";
     }

     var td4 = document.createElement("td");
     td4.textContent="delete";
     td4.addEventListener("click",deletetask);

   row.append(td1,td2,td3,td4);
   document.querySelector("tbody").append(row)

  

}
function deletetask(event){
    event.target.parentNode.remove();
}


