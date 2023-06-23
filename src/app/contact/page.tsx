'use client'
import Image from 'next/image'
import contact from '../../../public/contact3.png'
import ContactForm from '../../components/form/form'
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import TileLayer from 'ol/layer/Tile.js';
import { useEffect } from 'react';
import XYZ from 'ol/source/XYZ';

export default function  Contact() {
    useEffect(() => {
        const olMap =  new Map({
            view: new View({
              center: [0, 0],
              zoom: 4,

            }),
            layers: [
              new TileLayer({
                source: new XYZ({
                    url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
                  })
              }),
            ],
            target: 'map',
          });
    })
    return(
        <div style={{display:'flex',height:'100%',overflow:'hidden'}}>
            <div style={{width:'50%',height:'100%',position:'relative'}}>
            <ContactForm/>
            </div>
            <div style={{width:'50%',height:'100%'}}>
            <Image 
            style={{position:'relative',zIndex:'5',top:'50%',transform:'translateY(-50%)'}}
            src={contact} 
            alt=""
            width={900}
            height={900}
            />    
            
            </div>
        </div>
    )
}