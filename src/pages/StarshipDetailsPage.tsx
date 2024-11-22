import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Starship } from "../types/types";
import TextMessage from "../components/ui/TextMessage";
import { PropagateLoader } from "react-spinners";
import Title from "../components/ui/Title";
import Section from "../components/ui/Section";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { fetchFilms, fetchPilots } from "../redux/starshipsSlice";
import { useTypedSelector } from "./StarshipsPage";
import PhotoCard from "../components/ui/PhotoCard";
import { getIdFromUrl } from "../utils/getIdFromUrl";
import unavailableImage from "../assets/image-unavailable.png";

const StarshipDetailsPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { starships, pilots, films, loading, error } = useTypedSelector(
    (state) => state.starships
  );
  const [starship, setStarship] = useState<Starship>();
  const { name } = useParams<{ name: string }>();
  const [starshipId, setStarshipId] = useState<string>();
  const [isValidImage, setIsValidImage] = useState<boolean>(true);

  useEffect(() => {
    if (starships) {
      const selectedStarship = starships.find(
        (starship) => starship.name === name
      );
      setStarship(selectedStarship);
    }
  }, [starships, name]);

  useEffect(() => {
    if (starship) {
      if (starship.pilots.length > 0) {
        dispatch(fetchPilots(starship.pilots));
      }
      if (starship.films.length > 0) {
        dispatch(fetchFilms(starship.films));
      }
    }
  }, [dispatch, starship]);

  useEffect(() => {
    if (starship) {
      const id = getIdFromUrl(starship.url);
      setStarshipId(id);
    }
  }, [starship]);

  const imageUrl = `https://starwars-visualguide.com/assets/img/starships/${starshipId}.jpg`;

  useEffect(() => {
    const checkImage = async () => {
      try {
        const response = await fetch(imageUrl);
        setIsValidImage(response.ok);
      } catch {
        setIsValidImage(false);
      }
    };

    checkImage();
  }, [imageUrl]);

  return (
    <div className="flex flex-col items-center gap-10">
      {loading && <PropagateLoader color="white" />}
      {error && <TextMessage>Error: {error}</TextMessage>}
      <Section>
        <Title label="Starships" />
        <div className="my-4 flex flex-col items-stretch justify-center gap-4 lg:flex-row">
          <img
            className="object-cover lg:w-2/5 lg:flex-1"
            src={isValidImage ? imageUrl : unavailableImage}
            alt={starship?.name}
          />
          <div className="bg-neutral-800 py-8 px-5 text-neutral-400 border-l border-l-2 border-red-800 rounded-r-lg text-sm">
            <h5 className="uppercase text-2xl">{starship?.name}</h5>
            <p className="my-8">
              The {starship?.name} is a formidable starship known for its
              exceptional design and purpose in the Star Wars universe.
              Manufactured by {starship?.manufacturer}, this vessel boasts a
              unique combination of durability, speed, and versatility. With a
              length of {starship?.length} meters, it is equipped to handle{" "}
              {starship?.crew} crew members and reach speeds of up to{" "}
              {starship?.max_atmosphering_speed} km/h in atmospheric flight.
              Whether engaging in battles or navigating through the galaxy, the{" "}
              {starship?.name} stands as a symbol of strength and innovation.
            </p>
            <div className="flex flex-col items-start justify-between md:flex-row md:items-center">
              <div className="flex flex-col gap-3 md:w-1/2">
                <p>Model: {starship?.model}</p>
                <p>
                  Cost in credits: $
                  {Number(starship?.cost_in_credits).toLocaleString()}
                </p>
                <p>Atmospheric speed: {starship?.max_atmosphering_speed}</p>
              </div>
              <div className="flex flex-col gap-3 md:w-1/2">
                <p>Manufacturer: {starship?.manufacturer}</p>
                <p>Length: {starship?.length}</p>
                <p>Crew: {starship?.crew}</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <Title label="Pilots" />
        <div className="flex flex-col gap-4 my-5 md:flex-row">
          {pilots.length > 0 ? (
            pilots.map((pilot) => {
              const pilotId = getIdFromUrl(pilot.url);
              return (
                <PhotoCard
                  text={pilot.name}
                  imgUrl={`https://starwars-visualguide.com/assets/img/characters/${pilotId}.jpg`}
                />
              );
            })
          ) : (
            <TextMessage>
              We couldn't find any pilots for this ship.
            </TextMessage>
          )}
        </div>
      </Section>

      <Section>
        <Title label="Films" />
        <div className="flex flex-col gap-4 my-5 md:flex-row">
          {films.length > 0 ? (
            films.map((film) => {
              const filmId = getIdFromUrl(film.url);
              return (
                <PhotoCard
                  text={film.title}
                  imgUrl={`https://starwars-visualguide.com/assets/img/films/${filmId}.jpg`}
                />
              );
            })
          ) : (
            <TextMessage>We couldn't find any films for this ship.</TextMessage>
          )}
        </div>
      </Section>
    </div>
  );
};

export default StarshipDetailsPage;
