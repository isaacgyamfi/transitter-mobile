import React, {createContext, useMemo, useState} from 'react';

export const LocationContext = createContext();

const LocationContextProvider = props => {
  const [userLocation, setUserLocation] = useState({
    longitude: -0.1776037,
    latitude: 5.6562952,
    longitudeDelta: 0.1,
    latitudeDelta: 0.2,
  });
  const values = useMemo(
    () => ({
      userLocation,
      setUserLocation,
    }),
    [userLocation],
  );
  return (
    <LocationContext.Provider value={values}>
      {props.children}
    </LocationContext.Provider>
  );
};

export default LocationContextProvider;
