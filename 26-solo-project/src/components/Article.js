export default function Article() {
  return (
    <article className="article">
      <img
        className="article--img"
        src="https://images.pexels.com/photos/3358880/pexels-photo-3358880.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Castle"
      />
      <div className="article--details">
        <div className="article--map">
          <svg
            width="7"
            height="10"
            viewBox="0 0 7 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.57866 5.25002C2.65532 5.25002 1.90837 4.50221 1.90837 3.57965C1.90837 2.65757 2.65532 1.90911 3.57866 1.90911C4.50167 1.90911 5.24927 2.65757 5.24927 3.57965C5.24927 4.50221 4.50167 5.25002 3.57866 5.25002ZM3.48394 0C1.54227 0 0 1.63678 0 3.65569C0 6.40791 2.95078 9.25191 2.95078 9.25191C3.34777 9.62783 3.59437 9.65847 4.01646 9.25191C4.01646 9.25191 7 6.40791 7 3.65569C7 1.63678 5.42544 0 3.48394 0Z"
              fill="#F55A5A"
            />
          </svg>
          <p>GERMANY</p>
          <a href="https://www.google.de/maps/place/Schloss+Neuschwanstein/@47.5567472,10.7414188,17z/data=!4m9!1m2!2m1!1sneuschwanstein!3m5!1s0x479cf7cac44ea35d:0xc8a6866bd39dbba3!8m2!3d47.557574!4d10.7498004!15sCg5uZXVzY2h3YW5zdGVpbloQIg5uZXVzY2h3YW5zdGVpbpIBBmNhc3RsZZoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VONU5qUjZkalpSUlJBQg">
            View on Google Maps
          </a>
        </div>
        <h3 className="article--title">Neuschwanstein Castle</h3>
        <div>
          <p className="article--date">19 July 2019</p>
          <p className="article--description">
            Neuschwanstein Castle is a 19th-century historicist palace on a
            rugged hill above the village of Hohenschwangau near Füssen in
            southwest Bavaria, Germany. The palace was commissioned by King
            Ludwig II of Bavaria as a retreat and in honour of Richard Wagner.
          </p>
        </div>
      </div>
    </article>
  );
}
