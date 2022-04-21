import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

export default function App() {
  const cards = data.map((el) => <Card key={el.id} {...el} />);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">{cards}</div>
    </div>
  );
}
