import React, { createContext, useState, useEffect } from "react";
import db from '../firebase/firebaseConfig';
import { collection, query, getDocs } from "firebase/firestore";

export const ShopContext = createContext();


export const ShopProvider = ({ children }) => {
  const [registered, setRegistered] = useState(false);
  const [Hombres, setHombres] = useState([]);
  const [Running, setRunning] = useState([]);
  const [Niños, setNiños] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [carrito, setCarrito] = useState([]);
  const [carritoLength, setCarritoLength] = useState(0);


  useEffect(() => {
    const getProducts = async () => {
      
      /*HOMBRES*/
      const qHombres = query(collection(db, "Hombre"));

      const querySnapshotHombres = await getDocs(qHombres);

      const HombresData = querySnapshotHombres.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

      setHombres(HombresData);
      /*HOMBRES*/

      
      /*NIÑOS*/
      const qNiños = query(collection(db, "Niños"));

      const querySnapshotNiños = await getDocs(qNiños);

      const NiñosData = querySnapshotNiños.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      
      setNiños(NiñosData);
      /*NIÑOS*/

       /*RUNNING*/
       const qRunning = query(collection(db, "Running"));

      const querySnapshotRunning = await getDocs(qRunning);

      const RunningData = querySnapshotRunning.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      
      setRunning(RunningData);
       /*RUNNING*/

      setCarrito([])
    };
    getProducts();
  }, []);

  return (
    <ShopContext.Provider value={{ registered, setRegistered, Running, setRunning, setCarritoLength, carritoLength, setCarrito, carrito, Niños, setNiños, Hombres, setHombres, selectedProduct, setSelectedProduct }}>
      {children}
    </ShopContext.Provider>
  );
};
