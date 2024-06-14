import React, { useEffect, useState } from 'react';
import Card from './Card'; // Importa el nuevo componente Card de React

const CertificationGrid = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jimcostdev-api-jimcostdev.koyeb.app/certification/jimcostdev');
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {data.map(({ id, company, certification, link }) => (
        <Card
          key={id} // Asegúrate de usar una key única si data contiene elementos con ids únicos
          id={id}
          company={company}
          certification={certification}
          link={link}
        />
      ))}
    </div>
  );
};

export default CertificationGrid;
