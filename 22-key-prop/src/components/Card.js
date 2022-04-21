export default function Card(props) {
  return (
    <div className="card">
      <p className="card--status">SOLD OUT</p>
      <img
        className="card--photo"
        src={require(`../images/${props.img}`)}
        alt="Swimmer"
      />
      <p>
        <span className="star">★ </span>
        {props.rating}{" "}
        <span>
          ({props.reviewCount}) • {props.location}
        </span>
      </p>
      <p>{props.title}</p>
      <p>
        <strong>From ${props.price}</strong> / person
      </p>
    </div>
  );
}
