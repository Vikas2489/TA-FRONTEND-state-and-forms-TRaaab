function Card(props) {
  let size = props.size;
  let font = props.font;
  console.log(props);
  return (
    <div
      className="basis-1/3 mx-3 my-3 px-3 py-3 rounded"
      style={{ border: '1px solid black' }}
    >
      <h1 style={{ fontFamily: font }} className="my-4">
        {props.font}
      </h1>
      <p style={{ fontFamily: font, fontSize: size }}>{props.text}</p>
    </div>
  );
}

export default Card;
