import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStarships } from "../redux/starshipsSlice";
import { RootState } from "../redux/store";

const useStarships = () => {
    const starships = useSelector((state: RootState) => state.starships);
    const dispatch = useDispatch();
    const observer = useRef<IntersectionObserver | null>(null);
    const lastStarshipRef = useRef<HTMLDivElement | null>(null);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [url, setUrl] = useState("https://swapi.dev/api/starships");

    const fetchStarships = async (url: string) => {
        setLoading(true);
        setError(null);
          try {
            const response = await fetch(url);
            const data = await response.json();
            dispatch(getStarships(data.results));
            data.next === null ? setUrl("") : setUrl(data.next);
          } catch (error) {
            console.error("Error fetching starships:", error);
            setError((error as Error).message)
          } finally {
            setLoading(false);
          }
    };

    useEffect(() => {
        const handleObserver = (entries: IntersectionObserverEntry[]) => {
            const entry = entries[0];
            if (entry.isIntersecting && url) {
              fetchStarships(url);
            }
        };

        observer.current = new IntersectionObserver(handleObserver, { threshold: 1.0 });

        if (lastStarshipRef.current) {
            observer.current.observe(lastStarshipRef.current);
        }

        return () => {
            if (observer.current && lastStarshipRef.current) {
              observer.current.unobserve(lastStarshipRef.current);
            }
        };
    }, [dispatch, url])


      return { starships, loading, error, lastStarshipRef  }
}

export default useStarships;