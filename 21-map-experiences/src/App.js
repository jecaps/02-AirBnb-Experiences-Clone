import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

export default function App() {
  const cards = data.map((el) => (
    <Card
      img={el.coverImg}
      rating={el.stats.rating}
      reviewCount={el.stats.reviewCount}
      title={el.title}
      price={el.price}
      location={el.location}
    />
  ));

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">{cards}</div>
    </div>
  );
}
