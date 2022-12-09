
import React, { useState } from 'react'
import heart from "../components/imgs/hert.png"

function Card(props) {

  let favorites=useState("add to cart")
   
  let activeClass=useState("")
   


  let [btnTextState, setbtnTextState]=favorites   //1st stste

  let [classState,setClassState]=activeClass       //second state
   
    




   //change modify state
        function addtofavorite(){
       setbtnTextState((prevState)=>{
        if(prevState==="add to cart"){
          return "adeded to cart"
        }else{
          return "add to cart"
        }
       })

       setClassState((prevState)=>{
        if(prevState == ""){
          return "active"
        }else {
          return ""
        }
       })
     }


  return (

    <div className={`Card ${classState}`}>
      <img src={heart} className="icon" alt="" />
      <img src={props.imgSrc} alt="" />
      <h1>{props.name}</h1>
      <p>{props.price}</p>
      <p>{props.comment}</p>
      <button onClick={addtofavorite} >{btnTextState}</button>
        
      

    </div>
 


  )


}

export default Card
