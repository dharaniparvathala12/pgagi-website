const LatestNews = [
    {
        title: 'Advancements in Natural Language Processing',
        author: 'John Smith',
        link: 'https://example.com/nlp-advancements',
      },
      {
        title: 'Breakthroughs in Computer Vision Technology',
        author: 'Jane Doe',
        link: 'https://example.com/computer-vision-breakthroughs',
      },
      {
        title: 'Ethical Considerations in AI Development',
        author: 'Alex Johnson',
        link: 'https://example.com/ethical-ai-considerations',
      },
      {
        title: 'Applications of AI in Healthcare',
        author: 'Emily Brown',
        link: 'https://example.com/ai-in-healthcare-applications',
      },
      {
        title: 'Impact of AI on Cybersecurity',
        author: 'Michael Davis',
        link: 'https://example.com/ai-cybersecurity-impact',
      },
      {
        title: 'Future of AI and Robotics Integration',
        author: 'Sophia White',
        link: 'https://example.com/ai-robotics-future',
      },
      {
        title: 'AI-driven Innovations in Education',
        author: 'David Miller',
        link: 'https://example.com/ai-innovations-education',
      },
      {
        title: 'Challenges in Quantum Computing with AI',
        author: 'Emma Green',
        link: 'https://example.com/quantum-computing-ai-challenges',
      },
      {
        title: 'AI for Sustainable Development Goals',
        author: 'Daniel Taylor',
        link: 'https://example.com/ai-sustainable-development-goals',
      },
      {
        title: 'Latest Trends in AI Startups',
        author: 'Sophie Anderson',
        link: 'https://example.com/ai-startups-trends',
      },
];

export default LatestNews;

// import React from 'react';
// import Link from 'next/link';
// import { getAllPostsMeta } from '../../lib/news_mdx';

// const LatestNews = ({ numberOfPosts }) => {
//   const posts = getAllPostsMeta();

//   return (
//     <div className="latest-news-container">
//       <h2>Latest News</h2>
//       {posts.slice(-numberOfPosts).map(post => (
//         <div key={post.title}>
//           <Link href={`/news/${post.slug}`}>
           
//               <h3>{post.title}</h3>
            
//           </Link>
//           <p>By {post.author}</p>
         
//         </div>
//       ))}
//     </div>
//   );
// };

// export default LatestNews;