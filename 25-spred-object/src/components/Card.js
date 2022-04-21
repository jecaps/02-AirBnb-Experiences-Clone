export default function Card(props) {
  let badgeText;
  if (props.el.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.el.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img
        className="card--photo"
        src={require(`../images/${props.el.coverImg}`)}
        alt="Swimmer"
      />
      <p>
        <span className="star">★ </span>
        {props.el.stats.rating}{" "}
        <span>
          ({props.el.stats.reviewCount}) • {props.el.location}
        </span>
      </p>
      <p>{props.el.title}</p>
      <p>
        <strong>From ${props.el.price}</strong> / person
      </p>
    </div>
  );
}
