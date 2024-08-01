// src/components/Context/pdfContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const PdfContext = createContext();

const PdfProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4001/pdfapi/get')
      .then(res => {
        const initialData = res.data.payload;
        setData(initialData);
      })
      .catch(error => {
        console.error('Error fetching initial data:', error);
      });
  }, []);

  return (
    <PdfContext.Provider value={{ data, setData }}>
      {children}
    </PdfContext.Provider>
  );
};

export { PdfProvider, PdfContext };
