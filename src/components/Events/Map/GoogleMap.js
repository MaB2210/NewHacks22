import React, { useEffect, useRef, useState } from "react";
import {
  GoogleMapProvider,
  useGoogleMap,
} from "@ubilabs/google-maps-react-hooks";

 if ("geolocation" in navigator) {
   navigator.geolocation.getCurrentPosition(
     function (position) {
    //    setUserLocation({
    //      lat: position.coords.latitude,
    //      long: position.coords.longitude,
    //    });
       localStorage.setItem(
         "location",
         JSON.stringify({
           lat: position.coords.latitude,
           long: position.coords.longitude,
         })
       );
     },
     function (error) {
       console.error("Error Code = " + error.code + " - " + error.message);
     }
   );
 } else {
   alert("Please refresh the page and allow the location");
 }

const GoogleMap = () => {
  const [userLocation, setUserLocation] = useState({
    lat: parseInt(localStorage.getItem("location").lat) || 0,
    long: parseInt(localStorage.getItem("location").long) || 0,
  });
    const {map} = useGoogleMap();
  const markerRef = useRef()
        useEffect(() => {
        if (!map || markerRef.current) return;
        markerRef.current = new window.google.maps.Marker({ map });
        }, [map]);
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          setUserLocation({
            lat: position.coords.latitude,
            long: position.coords.longitude,
          });
          localStorage.setItem(
            "location",
            JSON.stringify({
              lat: position.coords.latitude,
              long: position.coords.longitude,
            })
          );
        },
        function (error) {
          console.error("Error Code = " + error.code + " - " + error.message);
        }
      );
    } else {
      alert("Please refresh the page and allow the location");
    }
  }, []);
     useEffect(() => {
       if (!markerRef.current) return;
       if (isNaN(userLocation.lat) || isNaN(userLocation.long)) return;
       markerRef.current.setPosition({
         lat: parseInt(userLocation.lat),
         lng: parseInt(userLocation.long),
       });
       map.panTo({ lat: parseInt(userLocation.lat), lng:parseInt( userLocation.long) });
     }, [userLocation.lat, userLocation.long, map]);
  const mapOptions = {
    zoom: 12,
    center: {
      lat: parseInt(localStorage.getItem("location").lat) || userLocation?.lat,
      lng:
        parseInt(localStorage.getItem("location").long) || userLocation?.long,
    },
  };
  const ref = useRef(null);
  const [mapContainer, setMapContainer] = useState(null);
  //   const [mapVIew, setMapView] = React.useState();

  //   React.useEffect(() => {
  //     if (ref.current && !map) {
  //       setMapView(new window.google.maps.Map(ref.current));
  //     }
  //   }, [ref, map]);

  return (
    <>
      {mapOptions.center.lat && mapOptions.center.lng && (
        <GoogleMapProvider
          googleMapsAPIKey={process.env.NEXT_PUBLIC_MAP_API_KEY}
          options={mapOptions}
          mapContainer={mapContainer}
        >
          <div
            ref={(node) => setMapContainer(node)}
            style={{ height: "100%" }}
          />
        </GoogleMapProvider>
      )}
    </>
  );
};

export default GoogleMap;
