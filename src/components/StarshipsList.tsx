import Card from "./ui/Card";
import useStarships from "../hooks/useStarships";
import { Link } from "react-router-dom";
import TextMessage from "./ui/TextMessage";

const StarshipsList = () => {
  const { data, loading, error } = useStarships();

  if (loading) return <TextMessage>Loading...</TextMessage>;
  if (error) return <TextMessage>Error: {error}</TextMessage>;

  return (
    <>
      <section className="flex flex-col gap-4 mt-10 px-10 m-auto md:w-2/3 lg:w-1/2">
        {data?.results.map((starship) => {
          return (
            <Link key={starship.url} to={`${starship.name}`}>
              <Card>
                <h3 className="text-neutral-400 uppercase text-lg">
                  {starship.name}
                </h3>
                <p className="text-md">{starship.model}</p>
              </Card>
            </Link>
          );
        })}
      </section>
    </>
  );
};

export default StarshipsList;
