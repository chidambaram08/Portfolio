import resumeImg from '../assets/resume (1).jpg'
export default function Resume() {
    return <section id='resume' className='flex flex-col md:flex-row bg-primary px-5'>
    <div className='py-5 md:w-1/2 flex justify-center md:justify-end'>
     <img  className='w-[300px]' src={resumeImg}/>    
     
    </div> 
    <div className=' md:w-1/2 flex justify-center'>
    <div className=' flex flex-col justify-center text-white '> 
        <h1 className='text-4xl text-white border-b-4 border-[#2b2d77] mb-5 w-[140px] font-bold'>Resume</h1>
        
         <p className='pb-5 ' >You can view my Resume <a className='btn' href='#'>Download</a> </p>
        
    </div>
        
    </div>

</section>
}