import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getText } from "../states/textSlice";
import { useNavigate } from "react-router-dom";


const About = () => {

let navgate =useNavigate()
const datas = useSelector((state) => state.data);
const [data , setData] = useState({
  id: datas.length + 1,
  name:'',
  age:'',
  text:'',
  img:''

})
let Dispatch = useDispatch()

  const textsend = (e)=>{
  let name
  name=e.target.name
  let val = e.target.value
  setData({...data,[name]:val})
  }

 const funhandel = ()=>{
  Dispatch(getText(data))
  navgate(`/Image/${datas.length + 1}`)
 }


  return (
    <div className="container mt-5 pt-5">
      <div className="d-flex" style={{display:'flex',justifyContent:'center',alignItems:'center',height:'90vh',flexDirection:'column',gap:'20px'}}>
         <h1>Pleace fill the all fealds</h1>
        <input type="text" name="name" placeholder="Enter your name" onChange={textsend}/>
        <input type="number" name="age" placeholder="Enter your age" onChange={textsend}/>
        <textarea  name="text"   placeholder="Enter you massage"  onChange={textsend} style={{maxWidth:'300px',width:'90%'}}></textarea>
        <button className="btn btn-primary" onClick={funhandel}>submit</button>
      </div>
    </div>
  );
};

export default About;
