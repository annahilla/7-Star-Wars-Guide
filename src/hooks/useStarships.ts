import { useState, useEffect } from 'react';

export interface Starship {
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
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchStarships = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch("https://swapi.dev/api/starships");
                if (!response.ok) {
                    throw new Error("Error fetching starships");
                }

                const result: Response = await response.json();
                setData(result);
            } catch (error) {
                setError((error as Error).message);
            } finally {
                setLoading(false);
            }
        }

        fetchStarships();
    }, [])

    return { data, loading, error };
}

export default useStarships;