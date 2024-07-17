import websiteImg1 from '../assets/E-Commerce011.png'
import websiteImg2 from '../assets/images.png'
import websiteImg3 from '../assets/website-blog.jpg'

export default function Project() {
    const projects = [
        {
            image: websiteImg1,
            description: 'Ecommerce website like Swiggy.',
            link: ''
        },
        {
            image: websiteImg2,
            description: 'Blog website. Built with node JS and MongoDB',
            link: ''
        },
        {
            image: websiteImg3,
            description: 'weather app.',
            link: ''
        }
    ]

    return (
        <section id='project' className="px-5 py-20 justify-center bg-secondary text-white">
            <div className="w-1/2">
                <div className="flex justify-center">
                    <h1 className='text-4xl text-white border-b-4 border-primary mb-5 w-[130px] font-bold'>Project</h1>
                </div>
            </div>
            <div className="w-full">
                <div className='flex px-10 gap-5 flex-col md:flex-row'>
                    {projects.map((project) => (
                        
                            <div className='relative'>
                                <img className='h-[200px] w-[500px]' src={project.image} />
                                <div className='px-5 py-5 absolute left-0 right-0 bottom-0 top-0 bg-primary opacity-0 duration-500 hover:opacity-100'>
                                    <p className='text-center px-5 py-5'>{project.description}</p>
                                    <div className='flex justify-center'>
                                <a className='btn' target='_blank' href={project.link}>view project</a></div>
                            </div>
                                </div>
                                
                                
                    ))}
                </div>
            </div>
        </section>
    )
}
