async function fetchFactures() {
    try {
      const response = await fetch('http://localhost:3000/api/factures');
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des factures');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erreur:', error.message);
      throw error;
    }
  }