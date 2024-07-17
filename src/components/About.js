import AboutImg from '../assets/about.png'

export default function About (){
     
    const config = {
        line1:'Hi, My name is Chidambaraganathi V. I am a full Stack Web Developer.I build website with React js and Tailwind CSS.',
        line2:'I am expert in frondend skills like React.js,Css,and many more.',
        line3:'In backend I know Node.js,Express.js and MongoDB.'
    }

    return <section className='flex flex-col md:flex-row bg-primary px-5 'id='about'>
        <div className='py-5 md:w-1/2'>
         <img src={AboutImg}/>    
         
        </div> 
        <div className=' md:w-1/2 flex justify-center'>
        <div className=' flex flex-col justify-center text-white '> 
            <h1 className='text-4xl text-white border-b-4 border-[#2b2d77] mb-5 w-[170px] font-bold'>About Me</h1>
            
             <p className='pb-5' >{config.line1}</p>
             <p className='pb-5'>{config.line2}</p>
             <p className='pb-5'>{config.line3}</p>
        </div>
            
        </div>

    </section>
}