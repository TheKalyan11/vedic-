'use client';

import React, { createContext, useContext, useState } from 'react';
import { APP_CONFIG } from '../config/constants';

type LocationContextType = {
  selectedLocation: string;
  setSelectedLocation: (location: string) => void;
};

const LocationContext = createContext<LocationContextType | undefined>(undefined);

export const LocationProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedLocation, setSelectedLocation] = useState(
    APP_CONFIG.navigation.topBar.defaultLocation || 'Hyderabad'
  );

  return (
    <LocationContext.Provider value={{ selectedLocation, setSelectedLocation }}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => {
  const context = useContext(LocationContext);
  if (context === undefined) {
    throw new Error('useLocation must be used within a LocationProvider');
  }
  return context;
};
