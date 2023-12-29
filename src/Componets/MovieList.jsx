import React, { useEffect,useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import MovieCard from './MovieCard';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
function MovieList({genraId,index_}) {
const [MovieList,setMovieList] = useState([])
const elementRef = useRef(null);
    useEffect(()=>{
  getMovieBygenraId();
    },[])
    const getMovieBygenraId = ()=>{
        GlobalApi.getMovieByGenreId(genraId).then(resp =>{
            // console.log(resp.data.results)
            setMovieList(resp.data.results)
        })
    }
    const sliderRight = (element) => {
      element.scrollLeft += 500;
    };
  
    const sliderLeft = (element) => {
      element.scrollLeft -= 500;
    };
  return (
    <div className='relative'>
           <IoChevronBackOutline onClick={()=> sliderLeft(elementRef.current)} 
         className={`text-[50px] text-white
           p-2 z-10 cursor-pointer  ml-[-50px] mt-[120px]
            hidden md:block absolute `}/>
     
    <div ref={elementRef} className='flex overflow-x-auto scrollbar-hide border border-gray-700  p-5 rounded-md '>
        {MovieList.map((item,index)=>(
          <>
           <MovieCard movie = {item}/> 
           </>
        ))}
    </div>
    <IoChevronForwardOutline onClick={()=>sliderRight(elementRef.current)}
           className={`text-[50px] text-white hidden md:block
           p-2 cursor-pointer z-10 mt-[-200px] mr-[-70px]
            absolute right-0 `}/> 
    </div>
  )
}  

export default MovieList