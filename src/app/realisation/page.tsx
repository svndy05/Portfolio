'use client'
import Image from "next/image"
import cyberjobs from "public/cyberjobs.png"
import {useEffect,useState,useRef } from "react"
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
        <div style={{display:'flex',flexDirection:'column',width:'100%',height:'100%',justifyContent:'center',alignItems:'center',perspective:'2000px',transformStyle:'preserve-3d',transition:'transform 0.2s linear'}}>
            <div  ref={containerRef} style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',width:'60%',height:'60%',position:'relative',transform:`rotateY(${rotation.x}deg) rotateX(${rotation.y}deg)`,transition:'transform 0.2s linear'}}>
                <Image style={{boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}} src={cyberjobs} alt="" fill={true}></Image>
            </div>
            <div style={{width:'50%',marginTop:'1.5em'}}>
                    <h1 style={{textAlign:'center'}}>Cyberjobs</h1>
                    <p style={{textAlign:'center', marginTop:'1.5em',lineHeight:"22px"}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultricies tellus quam, at mollis dui lobortis a. Sed sed sodales risus, vel interdum nulla. Vestibulum mattis turpis sit amet sem convallis imperdiet. Praesent non purus eu justo fermentum sollicitudin. Pellentesque hendrerit sem non consectetur ornare.
                    </p>
                </div>
        </div>
    )
}  