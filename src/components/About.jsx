import { aboutImages } from "../utils/data";

export default function About() {
  return (
    <section className="about-section">
      <img src={aboutImages[1]} alt="" />
      <div className="container">
        <div className="about" id="about">
          <h2> About our furniture</h2>
          <p>
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles or anything in between. Product specialists are available to
            help you create your dream space.
          </p>
        </div>
      </div>
      <img src={aboutImages[0]} alt="" />
    </section>
  );
}
