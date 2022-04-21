export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img
        className="card--photo"
        src={require(`../images/${props.coverImg}`)}
        alt="Swimmer"
      />
      <p>
        <span className="star">★ </span>
        {props.stats.rating}{" "}
        <span>
          ({props.stats.reviewCount}) • {props.location}
        </span>
      </p>
      <p>{props.title}</p>
      <p>
        <strong>From ${props.price}</strong> / person
      </p>
    </div>
  );
}
