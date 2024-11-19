import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Starship } from "../types/types";
import useStarships from "../hooks/useStarships";
import TextMessage from "../components/ui/TextMessage";

const StarshipDetailsPage = () => {
  const { starships, loading, error } = useStarships();
  const [starship, setStarship] = useState<Starship>()
  const { name } = useParams<{ name: string }>();


  useEffect(() => {
    if (starships) {
      const selectedStarship = starships.find(
        (starship) => starship.name === name
      );
      setStarship(selectedStarship);
    }

    console.log(starship);
  }, [starships, name]);

  const starshipId = starship?.url.split("/").slice(-2, -1)[0];
  const imageUrl = `https://starwars-visualguide.com/assets/img/starships/${starshipId}.jpg`;

  if (loading) return <TextMessage>Loading...</TextMessage>;
  if (error) return <TextMessage>Error: {error}</TextMessage>;

  return (
    <section className="bg-space bg-contain bg-right bg-no-repeat m-auto w-4/5 md:w-2/3">
      <div className="text-neutral-300 text-xl border-y border-neutral-800 py-4 mt-10">
        <h3 className="uppercase mx-10 text-center md:text-left">Starships</h3>
      </div>

      <div className="my-4 flex flex-col items-stretch justify-center gap-4 lg:flex-row">
        <img
          className="object-cover lg:w-2/5 lg:flex-1"
          src={imageUrl}
          alt={starship?.name}
        />
        <div className="bg-neutral-800 py-8 px-5 text-neutral-400 border-l border-l-2 border-red-800 rounded-r-lg text-sm">
          <h5 className="uppercase text-2xl">{starship?.name}</h5>
          <p className="my-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti,
            explicabo?
          </p>
          <div className="flex flex-col items-start justify-between md:flex-row md:items-center">
            <div className="flex flex-col gap-3">
              <p>Model: {starship?.model}</p>
              <p>Cost in credits: {starship?.cost_in_credits}</p>
              <p>Atmospheric speed: {starship?.max_atmosphering_speed}</p>
            </div>
            <div className="flex flex-col gap-3">
              <p>Manufacturer: {starship?.manufacturer}</p>
              <p>Length: {starship?.length}</p>
              <p>Crew: {starship?.crew}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StarshipDetailsPage;
