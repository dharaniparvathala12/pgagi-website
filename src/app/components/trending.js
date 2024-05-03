import styles from "./trending.module.scss";


export default function Trending() {
  const trendingList = [
    {
      title: "Case study",
      description: "Revolutionizing Talent Hiring Practices",
    },
    {
      title: "Blog",
      description: "Prompt Engineering vs Prompt Tuning: A Detailed Explanation",
    },
    {
      title: "AI News",
      description:
        "META Unveils Groundbreaking Enhancements to Its AI with Llama 3 Release",
    },
    {
      title: "Trends",
      description: "Prompt Engineering vs Prompt Tuning: A Detailed Explanation",
    },
  ];
  return (
    <section className={styles.trending}>
      <h3>{"Here's What's Trending!"}</h3>
      <div className={styles.trendingList}>
        {trendingList.map((trending, i) => (
          <div
            key={i}
            className={styles.trendingItem}
            style={{
              backgroundImage: encodeURI(
                `url(https://source.unsplash.com/random/?${trending.title})`
              ),
            }}
          >
            <h3>{trending.title}</h3>
            <p>{trending.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
