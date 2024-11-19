import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Starship } from "../types/types";
import { getStarships } from "../redux/starshipsSlice";
import { RootState } from "../redux/store";

const useStarships = () => {
    const starships = useSelector((state: RootState) => state.starships);
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchAllStarships = async () => {
        setLoading(true);
        setError(null);
          let allStarships: Starship[] = [];
          let nextUrl = "https://swapi.dev/api/starships"; 
    
          try {
            while (nextUrl) {
              const response = await fetch(nextUrl);
              const data = await response.json();
              allStarships = [...allStarships, ...data.results]; 
              nextUrl = data.next;
            }
    
            dispatch(getStarships(allStarships));
          } catch (error) {
            console.error("Error fetching starships:", error);
            setError((error as Error).message)
          } finally {
            setLoading(false);
          }
        };
    
        fetchAllStarships();
      }, [dispatch]);

      return { starships, loading, error }
}

export default useStarships;