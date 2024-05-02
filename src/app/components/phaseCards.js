import Image from "next/image";
import styles from "./phaseCards.module.css";

function PhaseCards() {
  const data = [
    {
      phase: 1,
      title: "Discover & Feasibility",
      subtitle:
        "Assessing AI’s potential to innovate and validating the initial concept with a POC ",
    },
    {
      phase: 2,
      title: "Data preparation & research",
      subtitle:
        "Curating and refining data sets to lay the groundwork for tailored AI solutions ",
    },
    {
      phase: 3,
      title: "Modern development & strategy",
      subtitle:
        "Crafting and training bespoke AI models, strategising for integration and scalability.  ",
    },
    {
      phase: 4,
      title: "MVP creation",
      subtitle:
        "Building a functional minimum viable product that embodies the AI solution for user feedback.  ",
    },
    {
      phase: 5,
      title: "Quality assurance ",
      subtitle:
        "Testing and refining the AI MVP prioritising performance and user centric enhancements. ",
    },
    {
      phase: 6,
      title: "Deployment & Evaluation  ",
      subtitle:
        "Launching the AI product with ongoing evaluation and optimisation for peak performance. ",
    },
  ];
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          placeItems: "center",
        }}
      >
        <div
          style={{
            width: "90%",
            height: "30rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            backgroundColor: "#14213D",
            marginBottom: "4rem",
            position: "relative",
          }}
          className={styles.card}
        >
          <h2
            style={{
              backgroundImage: "linear-gradient(90deg, #878bf7, #fff)",
              WebkitBackgroundClip: "text", // For Safari
              color: "transparent",
              fontSize: "3rem",
              textAlign: "center",
              marginBottom: "1rem", // Add some margin to separate from the next element
              zIndex: 1,
            }}
          >
            Here’s How We Make Our <br />
            Products Grow
          </h2>
          <Image
                src="/images/bg-sphere.png"
                alt="bgimg"
                width="250"
                height="250"
                style={{
                  position: "absolute",
                  top: "30%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 0,
                  animation: `${styles.scrollRight} 5s linear infinite`,
                }}
              />
        </div>
        {data.map((item) => {
          return (
            <div
              key={item.phase}
              style={{
                width: "90%",
                height: "30rem",
                border: "1px solid #000",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                // justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#14213D",
                marginBottom: "4rem",
              }}
            >
              <div
                style={
                  Number(item.phase) % 2 == 0
                    ? {
                        display: "flex",
                        height: "40%",
                        width: "100%",
                        justifyContent: "flex-end",
                        marginTop: "3rem",
                        paddingRight: "2rem",
                        fontSize: "4rem",
                        textTransform: "uppercase",
                        backgroundImage:
                          "linear-gradient(90deg, #878bf7, #fff)",
                        WebkitBackgroundClip: "text", // For Safari
                        color: "transparent",
                      }
                    : {
                        display: "flex",
                        justifyContent: "flex-start",
                        paddingLeft: "2rem",
                        marginTop: "3rem",
                        // height: "40%",
                        width: "100%",
                        fontSize: "4rem",
                        textTransform: "uppercase",
                        backgroundImage:
                          "linear-gradient(90deg, #878bf7, #fff)",
                        WebkitBackgroundClip: "text", // For Safari
                        color: "transparent",
                      }
                }
              >
                <h1>Phase</h1>
                <h1
                  style={{
                    position: "relative",
                    fontSize: "6rem",
                    left: "-10px",
                    top: "-25px",
                    fontWeight: "bold",
                    // zIndex: 1,
                    color: "#273148",
                  }}
                >
                  {item.phase}
                </h1>
              </div>
              <h2 style={{ fontSize: "3rem", zIndex: 1 }}>{item.title}</h2>
              <p style={{ zIndex: 1 }}>{item.subtitle}</p>
              <Image
                src="/images/bg-sphere.png"
                alt="bgimg"
                width="250"
                height="250"
                style={{
                  position: "absolute",
                  top: "30%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 0,
                  animation: `${styles.scrollRight} 5s linear infinite`,
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PhaseCards;
