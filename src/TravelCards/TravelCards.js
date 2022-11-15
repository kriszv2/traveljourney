import "./TravelCards.css";
export default function TravelCards(props) {
  return (
    <div className="travel--card">
      <img src={props.data.imageUrl} alt="" className="travel--images" />
      <div className="travel--stats">
        <div className="travel-loc">
          <img
            className="travel--card-icon"
            src="https://ih1.redbubble.net/image.972205817.8999/st,small,507x507-pad,600x600,f8f8f8.jpg"
            alt="google maps sticker icon"
          />
          <span className="travel--card-location">{props.data.location}</span>
          <a href={props.data.googleMapsLink}>
            <span>View on google maps</span>
          </a>
        </div>
        <div>
          <h1>{props.data.title}</h1>
          <h3>
            {props.data.startDate} - {props.data.endDate}
          </h3>
          <p>{props.data.description}</p>
        </div>
      </div>
    </div>
  );
}
