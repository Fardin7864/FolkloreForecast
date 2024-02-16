import { Map, Marker } from "pigeon-maps";

const MapToDisplay = () => {
  return (
    <Map height={300} defaultCenter={[23.8283, 90.3607]} defaultZoom={18}>
      <Marker width={50} anchor={[23.8283, 90.3607]} />
    </Map>
  );
};

export default MapToDisplay;
