import { Link } from "react-router-dom";
import { Starship } from "../types/types";
import Card from "../components/ui/Card";
import useStarships from "../hooks/useStarships";
import TextMessage from "../components/ui/TextMessage";
import { PropagateLoader } from "react-spinners";

const StarshipsPage = () => {
  const { starships, loading, error, lastStarshipRef } = useStarships();

  return (
    <>
      {error && <TextMessage>Error: {error}</TextMessage>}
      <section className="flex flex-col gap-4 mb-8 px-10 m-auto md:w-2/3 lg:w-1/2">
        {starships.map((starship: Starship) => {
          return (
            <Link key={starship.name} to={`${starship.name}`}>
              <Card>
                <h3 className="text-neutral-300 font-semibold uppercase text-lg">
                  {starship.name}
                </h3>
                <p className="text-neutral-400 text-md">{starship.model}</p>
              </Card>
            </Link>
          );
        })}
        <div ref={lastStarshipRef} />
        {loading && (
          <div className="m-auto">
            <PropagateLoader size={6} color="#bababa" />
          </div>
        )}
      </section>
    </>
  );
};

export default StarshipsPage;
