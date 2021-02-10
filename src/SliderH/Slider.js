import React,{useState,useEffect} from 'react'
import SliderData from './SliderData';
import RemoveIcon from '@material-ui/icons/Remove';
import {motion} from "framer-motion"

function Slider({slides}) {
const [current, setCurrent] = useState(0);
 const length = slides.length


 useEffect(() => {
    const interval = setInterval(() => {
        setCurrent(current === length -1 ? 0 : current + 1);
        
        
    }, 6000);
    return () => clearInterval(interval);
  }, []);


const firstSlide = () => {
    setCurrent(0)
}

const secondSlide = () => {
    setCurrent(1)
}

const thirdSlide = () => {
    setCurrent(2)
}


if(!Array.isArray(slides) || slides.length <= 0) {
    return null
}


    return (
        <div className="flex justify-center bg-header ">
          
           {SliderData.map((item,index)=>{

               const isItemSelected = current === item.image
               return(
                <div  className={index === current ? 'slide active' : 'slide'} key={index}> 
                {index === current && (<motion.img initial={{opacity:0,}}
                animate={{opacity:1, }}
                transition={{delay:.5,duration:.5}}  src={item.image} className="w-full h" /> )}
                {index === current && (
                <motion.h1  initial={{opacity:0,x:-100}}
                animate={{opacity:1,x:0  }}
                transition={{delay:1.5,duration:1.5}}   className="  absolute top-36 left-32 text-3xl font-semibold text-gray-200">{item.heading}</motion.h1>  )}
                {index === current && (
                <motion.h1 initial={{opacity:0,x:-100}}
                animate={{opacity:1,x:0  }}
                transition={{delay:1.5,duration:1.5}}  className="absolute top-44 left-32 text-8xl w-56 font-bold text-gray-50">{item.para}</motion.h1>  )}
                  <motion.div initial={{opacity:0,}}
        animate={{opacity:1, }}
        transition={{delay:1.5,duration:1.5}}  className="flex">
            <RemoveIcon onClick={firstSlide} className="removeIcon text-yellow-700" style={{fontSize:'70'}}/>
            <RemoveIcon onClick={secondSlide} className="removeIcon2 text-yellow-700" style={{fontSize:'70'}}/>
            <RemoveIcon onClick={thirdSlide} className="removeIcon3 text-yellow-700 " style={{fontSize:'70'}}/>
            </motion.div>
                    
                </div>

               )
           })}
            
        </div>
    )
}

export default Slider
