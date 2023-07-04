'use client'
import Image from "next/image"
import cyberjobs from "public/cyberjobs.png"
import {useEffect,useState,useRef } from "react"
import { myFont } from "@/shared/font"
import arrow from "../../../public/download.svg"
export default function Realisation(){
const [mousePos,setMousePos] = useState({x:0,y:0})
const [rotation , setRotation] = useState({x:0,y:0})
const [percentage, setPercentage] = useState({x:0,y:0})
const containerRef= useRef<HTMLDivElement>(null)
const handleMouse = (event:MouseEvent) => {
    if(containerRef && containerRef.current){
        const {left,top} = containerRef.current.getBoundingClientRect()
        setMousePos({x: event.pageX  - left, y:event.pageY - top})
    }
}
const handleLeave = (event:MouseEvent) => {
    setRotation({x:0,y:0})
}
useEffect(()=>{
    if(containerRef && containerRef.current){
        containerRef.current.addEventListener('mousemove',handleMouse)    
        containerRef.current.addEventListener('mouseleave',handleLeave)
    }
    return () => { 
        if(containerRef && containerRef.current){
            containerRef.current.removeEventListener('mousemove',handleMouse)
            containerRef.current.removeEventListener('mouseleave',handleLeave)
        }
    }
},[])
useEffect(() => {
    if(containerRef && containerRef.current){
        setPercentage({x:mousePos.x / containerRef.current.getBoundingClientRect().width  * 100,y:mousePos.y / containerRef.current.getBoundingClientRect().height * 100})
    }
},[mousePos])
useEffect(() => {
    setRotation({x: -4 + (8 * (percentage.x / 100)) , y:(-5 + (10 * (percentage.y / 100))) * -1})
},[percentage])
    
return(
        <div style={{display:'flex',flexDirection:'column',width:'100%',height:'100%',justifyContent:'center',alignItems:'center',}}>
            <div ref={containerRef} style={{width:'100%',height:'60%',position:'relative',display:'flex' }}>
            <div style={{height:"100%",width:'15%'}}>
                <Image src={arrow} alt=""  style={{position:'relative',top:'50%',left:'50%',transform:'translate(-50%,-50%) rotate3d(0,1,0,180deg)', width:'50px',height:'50px'}}/>
            </div>
            <div style={{width:'70%',height:'100%', position:'relative',perspective:'2000px',transformStyle:'preserve-3d',transition:'transform 0.2s linear'}}>
                <Image style={{boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',transform:`rotateY(${rotation.x}deg) rotateX(${rotation.y}deg)`,transition:'transform 0.2s linear'}} src={cyberjobs} alt="" fill={true}></Image>
            </div>
            <div style={{height:"100%",width:'15%'}}>
                <Image src={arrow} alt="" style={{position:'relative',top:'50%',left:'50%',transform:"translate(-50%,-50%)",width:'50px',height:'50px'}}/>
            </div>
            </div>
            <div style={{width:'50%',marginTop:'2em'}}>
                    <h1 style={{textAlign:'center', fontSize:'1.5rem'}} className={myFont.className}>Cyberjobs</h1>
                    <p style={{textAlign:'center', marginTop:'2em',lineHeight:"22px",color:'grey',fontSize:'1.2rem'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultricies tellus quam, at mollis dui lobortis a. Sed sed sodales risus, vel interdum nulla. Vestibulum mattis turpis sit amet sem convallis imperdiet. Praesent non purus eu justo fermentum sollicitudin. Pellentesque hendrerit sem non consectetur ornare.
                    </p>
                </div>
        </div>
    )
}  