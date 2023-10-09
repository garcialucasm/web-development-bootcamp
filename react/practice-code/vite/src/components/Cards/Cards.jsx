import Avatar from "./Avatar";
import Button from "../Button";
import Detail from "./Detail";

function cards(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar imgAvatar={props.img} />
      </div>
      <div className="bottom">
        <div>ID: {props.id}</div>
        <Detail detailInfo={props.phone} />
        <Detail detailInfo={props.email} />
        <Button buttonText={props.buttonText} buttonURL={props.buttonURL} />
      </div>
    </div>
  );
}

export default cards;
