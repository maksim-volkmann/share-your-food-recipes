import GoogleMapReact from "google-map-react";
import "./contactMap.scss";
import env from "react-dotenv";

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const ContactMap = () => {
  const defaultProps = {
    center: {
      lat: 32.299507,
      lng: -64.790337,
    },
    zoom: 10,
  };
  return (
    <div className="mapWrapper">
      <GoogleMapReact
        bootstrapURLKeys={{ key: env.MAP_API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
};

export default ContactMap;
