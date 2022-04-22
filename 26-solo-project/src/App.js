import Navbar from "./components/Navbar";
import Article from "./components/Article";
import data from "./data";

export default function App() {
  const articles = data.map((el) => <Article key={el.title} el={el} />);
  console.log(articles);

  return (
    <div>
      <Navbar />
      <div className="container">{articles}</div>
    </div>
  );
}
