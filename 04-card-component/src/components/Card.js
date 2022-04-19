import Katie from "../images/katie-zaferes.png";
// import Star from "../images/star.png";

export default function Card() {
  return (
    <div className="card">
      <p className="card--status">SOLD OUT</p>
      <img className="card--photo" src={Katie} alt="Swimmer" />
      <p>
        <span className="star">★</span> 5.0 <span>(6) • USA</span>{" "}
      </p>
      <p>Life lessons with Katie Zaferes</p>
      <p>
        <strong>From $136</strong> / person
      </p>
    </div>
  );
}
