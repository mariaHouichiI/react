import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';

function App() {
  const [factures, setFactures] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/facture')
      .then(response => response.json())
      .then(data => setFactures(data))
      .catch(error => console.error('Error fetching factures:', error));
  }, []);

  const handleEdit = (facture) => {
    // Mettez en œuvre la logique pour gérer l'édition de la facture ici
    console.log('Edition de la facture:', facture);
  };

  const handleDelete = (factureId) => {
    // Mettez en œuvre la logique pour gérer la suppression de la facture ici
    console.log('Suppression de la facture avec ID:', factureId);
  };

  return (
    <div className="App">
      <h1>Liste des Factures</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>N°</th>
            <th>Prestataire/Fournisseur</th>
            <th>Facteur N°</th>
            <th>Date Facteur</th>
            {/* Ajoutez ici les autres colonnes du tableau */}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {factures.map(facture => (
            <tr key={facture._id}>
              <td>{facture.N}</td>
              <td>{facture.prestataire}</td>
              <td>{facture.facteurNo}</td>
              <td>{facture.dateFacteur}</td>
              {/* Ajoutez ici les autres colonnes du tableau */}
              <td>
                <Button variant="primary" onClick={() => handleEdit(facture)}>Edit</Button>
                <Button variant="danger" onClick={() => handleDelete(facture._id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
