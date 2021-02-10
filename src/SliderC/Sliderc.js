import React, {useState} from 'react'
import SliderDatac from './SliderDatac';
import {motion} from "framer-motion"
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';






function Sliderc({slidesc}) {

    const [current,setCurrent] = useState(0);
    const length = slidesc.length



    

    const nextSlide = () => {
     setCurrent(current === length -1 ? 0 : current + 1);
    };


    const prevSlide = () => {
        setCurrent(current === 0 ? length -1 : current -1)
    }


    if(!Array.isArray(slidesc) || slidesc.length <= 0) {
        return null
    }

    return (
        <div className="slider bg-header bg-gradient-to-l from-gray-500" >
            <h1 className=" mb-96 ml-20 bg-gray-400 bg-opacity-30  rounded-full cursor-pointer hover:bg-gray-900 transition-all " onClick={prevSlide}><KeyboardArrowLeftIcon style={{fontSize:'50'}} className=" border rounded-full"/></h1>
            <h1 className=" mb-96 ml-5 bg-gray-400 bg-opacity-30  rounded-full cursor-pointer hover:bg-gray-900 transition-all" onClick={nextSlide}><KeyboardArrowRightIcon style={{fontSize:'50'}} className="border rounded-full"/></h1>
        <div className="flex">
        {SliderDatac.map(((slide,index) => {

            return (
                <div  className={index === current ? ' ' : ''} key={index}> 
                 {index === current && (<motion.img initial={{opacity:0,x:-100}}
                animate={{opacity:1,x:0 }}
                transition={{delay:.5,duration:.5}}  src={slide.image} className="slideactive rounded-tl-full shadow-2xl max-w-6xl " />)}
                 {index === current && (
                <motion.h1  initial={{opacity:0,x:-100}}
                animate={{opacity:1,x:0  }}
                transition={{delay:1.5,duration:1.5}}   className="  absolute top-36 left-32 text-7xl font-semibold text-gray-200">{slide.heading}</motion.h1>  )}

                 {index === current && (
                <motion.h1  initial={{opacity:0,x:-100}}
                animate={{opacity:1,x:0  }}
                transition={{delay:1.5,duration:1.5}}   className="  absolute top-56 left-32 text-3xl font-semibold text-gray-300">{slide.para}</motion.h1>  )}
                    
                </div>
               
            )

        }))}
        </div>


        </div>
    )
}
export default Sliderc
