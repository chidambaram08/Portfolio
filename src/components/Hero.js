import { LuSubtitles } from 'react-icons/lu';
import HeroImg from '../assets/hero9.png'
import {FaTwitter,FaFacebook,FaLinkedin } from "react-icons/fa";

export default function Hero(){
    const config = {
      subtitle:'Im a Full stack Developer'
    }

   return <section id='hero' className='flex px-5 py-32 bg-secondary flex flex-col md:flex-row'>
   <div className='md:w-1/2 flex-col'>
    <h1 className= 'text-white text-6xl font-hero-font'>Hi,<br/> Im Ganapathi
   <p className='text-white text-2xl'>{config.subtitle}</p>
   </h1>
   <div className='flex py-5 '>
      <a href='#' className='pr-3 hover:text-white'><FaTwitter size={20}/></a>
      <a href='#' className='pr-3  hover:text-white'><FaFacebook size={20}/></a>
      <a href='#'  className='hover:text-white'><FaLinkedin size={20}/></a>
   </div>

</div>

     
   <img className='md:w-1/3  '  src={HeroImg} style={{borderRadius:'100%'}} />
   </section>
    
}