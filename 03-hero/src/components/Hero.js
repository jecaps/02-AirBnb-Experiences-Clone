import photoGrid from "../images/photo-grid.png";

export default function Hero() {
  return (
    <section className="hero">
      <img src={photoGrid} alt="Grid of Pics" />
      <h1>Online Experiences</h1>
      <p>
        Join unique interactive activities led by one-of-a-king hosts—all
        without leaving home.
      </p>
    </section>
  );
}
