import { useParams } from "react-router-dom";
import useStarships from "../hooks/useStarships";
import { useEffect, useState } from "react";
import { Starship } from "../hooks/useStarships";
import TextMessage from "./ui/TextMessage";

const StarshipDetails = () => {
  const { name } = useParams<{ name: string }>();
  const { data, loading, error } = useStarships();
  const [starship, setStarship] = useState<Starship>();

  useEffect(() => {
    if (data?.results) {
      const selectedStarship = data.results.find(
        (starship) => starship.name === name
      );
      setStarship(selectedStarship);
    }

    console.log(starship);
  }, [data, name]);

  if (loading) return <TextMessage>Loading...</TextMessage>;
  if (error) return <TextMessage>Error: {error}</TextMessage>;
  if (!starship) return <TextMessage>Starship not found.</TextMessage>;

  return (
    <section className="bg-space bg-contain bg-right bg-no-repeat h-screen">
      <div className="text-neutral-300 text-xl border-y border-neutral-800 py-4 m-auto mt-10 md:w-2/3">
        <h3 className="uppercase mx-10 text-center md:text-left">Starships</h3>
      </div>
    </section>
  );
};

export default StarshipDetails;
