import PropTypes from "prop-types";
import Avatar from "./Avatar";
import Button from "../VoteButton/Button";
import Detail from "./Detail";

function Cards(props) {
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

Cards.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  img: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
  buttonText: PropTypes.string,
  buttonURL: PropTypes.string,
};

export default Cards;
