import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
// import Katie from "./images/katie-zaferes.png";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card
        image="katie-zaferes.png"
        rating={(5.0).toFixed(1)}
        reviewCount={6}
        country="USA"
        title="Life Lesson with Katie Zaferes"
        price={136}
      />
    </div>
  );
}
