import Link from 'next/link';
import { getAllProjectsMeta } from '../../lib/project_mdx';
import Navbar from '../components/navbar';

const Page = async () => {
  const projects = await getAllProjectsMeta();

  return (
    <>
      <Navbar />
      <div className='py-7'>
         <h1 className='text-3xl font-bold mx-8 mb-6'>Projects</h1>
      </div>
      <section className='py-4'>
        <div className=' mx-auto max-w-screen-xl flex flex-col'>
         
          <div className='flex flex-wrap gap-6 align-item-center'>
            {projects?.map(project => (
              <Link
                href={`projects/${project.slug}`}
                key={project?.title}
                className='w-full h-65 sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4'
              >
                <div className='rounded-md shadow-md'>
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className='w-full h-45 object-cover rounded-md mb-4'
                  />
                  <h3 className='text-xl font-semibold'>{project.title}</h3>
                  <div className='flex items-center mt-2 px-2'>
  <p className='text-sm text-gray-400'>By {project.author}</p>
  <span className='mx-1 text-gray-400'>•</span>
  <time className='text-[12px] text-gray-400'>Published {project.publishDate}</time>
</div>

                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
