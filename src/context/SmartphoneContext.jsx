// src/context/SmartphoneContext.js

import React, { createContext, useContext, useEffect, useState } from 'react';

const SmartphoneContext = createContext();

export const useSmartphone = () => {
  return useContext(SmartphoneContext);
};

export const SmartphoneProvider = ({ children }) => {
  const [listSmartphones, setListSmartphones] = useState(() => {
    const savedSmartphones = JSON.parse(localStorage.getItem('items')) || [];
    return savedSmartphones;
  });

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(listSmartphones));
  }, [listSmartphones]);

  const addSmartphone = (smartphone) => {
    setListSmartphones((prev) => [...prev, { ...smartphone, id: Date.now() }]);
  };

  const editSmartphone = (updatedSmartphone) => {
    setListSmartphones((prev) =>
      prev.map((smartphone) => (smartphone.id === updatedSmartphone.id ? updatedSmartphone : smartphone))
    );
  };

  const deleteSmartphone = (id) => {
    setListSmartphones((prev) => prev.filter((smartphone) => smartphone.id !== id));
  };

  return (
    <SmartphoneContext.Provider value={{ listSmartphones, addSmartphone, editSmartphone, deleteSmartphone }}>
      {children}
    </SmartphoneContext.Provider>
  );
};
