import Link from 'next/link';
import { getAllPostsMeta } from '../../lib/mdx';
import Navbar from '../components/navbar';

const Page = async () => {
  const posts = await getAllPostsMeta();

  return (
    <>
      <Navbar />
      <div 
      style={{
        height: '87px',
        backgroundColor: '#14213D',
      }}>
          <p
           className='py-3'
          style={{  
            
            fontFamily: 'Inter',
            fontSize: '38px',
            fontWeight: 500,
            textAlign: 'left',
            width: '364px',
            height: '46px',
            marginLeft: '184px',
            color: 'white',
           
          }}>Explore Blogs here!</p>
      </div>
      <section className='py-4'>
        <div className=' mx-auto max-w-screen-xl flex flex-col'>
          
          <div className='flex flex-wrap gap-6 align-item-center'>
            {posts?.map(post => (
              <Link
                href={`posts/${post.slug}`}
                key={post?.title}
                className='w-full h-65 sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4'
              >
                <div className='rounded-md shadow-md'>
                  <img
                    src={post.thumbnail}
                    alt={post.title}
                    className='w-full h-45 object-cover rounded-md mb-4'
                  />
                  <h3 className='text-xl font-semibold'>{post.title}</h3>
                  <div className='flex items-center mt-2 px-2'>
  <p className='text-sm text-gray-400'>By {post.author}</p>
  <span className='mx-1 text-gray-400'>•</span>
  <time className='text-[12px] text-gray-400'>Published {post.publishDate}</time>
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
