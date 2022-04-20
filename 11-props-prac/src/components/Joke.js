export default function Joke(props) {
  return (
    <div>
      {props.setup && <h3>Setup: {props.setup}</h3>}
      <p className="punchline">Punchline: {props.punchline}</p>
      <hr />
    </div>
  );
}
