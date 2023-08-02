import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {fetchFactures } from './facture';
import  { useEffect, useState } from 'react';

function FacturesTable() {
  const [factures, setFactures] = useState([]);

  useEffect(() => {
    // Utiliser la fonction fetchFactures pour récupérer tous les documents de la collection "facture"
    fetchFactures()
      .then((data) => {
        // Stocker les données récupérées dans l'état local "factures"
        setFactures(data);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des factures:', error.message);
      });
  }, []);

  return (
    <div>
      <h1>Factures</h1>
      <table>
        <thead>
          <tr>
            <th>Montant</th>
          </tr>
        </thead>
        <tbody>
          {factures.map((facture) => (
         
              <td>{facture.montant}</td>
       
          ))}
        </tbody>
      </table>
    </div>
  );
}







   
  const Home = () => {
    return (
        <><h1>Home page </h1>
            <FacturesTable /></>
    );
  };
  
  export default Home;

