import { useState, useEffect } from 'react';

interface Starship {
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    crew: string;
    passengers: string;
    starship_class: string;
    url: string;
}

interface Response {
    count: number;
    next: string | null;
    previous: string | null;
    results: Starship[];
  }

const useStarships = () => {
    const [data, setData] = useState<Response>();

    useEffect(() => {
        const fetchStarships = async () => {
            try {
                const response = await fetch("https://swapi.dev/api/starships");
                const result: Response = await response.json();
                setData(result);
            } catch (error) {
                console.log(error);
            } 
        }

        fetchStarships();
    }, [])

    return { data };
}

export default useStarships;