import { useState, useEffect } from 'react';

const useFetchTypeColor = (id) => {
    const [typeColor, setTypeColor] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchColor = async () => {
            const urlAPI = `https://pokeapi.co/api/v2/pokemon-color/${id}`;

            try {
                const response = await fetch(urlAPI);
                if (!response.ok) throw new Error('Failed to fetch Colors');
                
                const data = await response.json();

                // Verifique se a estrutura de dados é a esperada
                if (data && data.names) {
                    const colorName = data.names.find(name => name.language.name === 'en'); 
                    setTypeColor(colorName ? colorName.name : 'unknown'); // Armazena o nome da cor
                    
                } else {
                    throw new Error('Unexpected data structure');
                }

            } catch (err) {
                setError(err.message);
                console.error('Error fetching color:', err);
            }
        };

        if (id) fetchColor();
    }, [id]);

    return { typeColor, error };
};

export default useFetchTypeColor;