import { Link } from "react-router-dom";
import { Starship } from "../types/types";
import Card from "../components/ui/Card";
import useStarships from "../hooks/useStarships";
import TextMessage from "../components/ui/TextMessage";
import { PropagateLoader } from "react-spinners";
import { useEffect } from "react";

const StarshipsPage = () => {
  const { starships, loadMoreStarships, loading, error } = useStarships();

  useEffect(() => {
    loadMoreStarships();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 100
      ) {
        loadMoreStarships();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loadMoreStarships]);

  return (
    <>
      {error && <TextMessage>Error: {error}</TextMessage>}
      <section className="bg-stars bg-contain px-10 min-h-96">
        <div className="flex flex-col m-auto gap-4 py-8 md:w-2/3 lg:w-1/2">
          {starships.map((starship: Starship) => {
            const starshipId = crypto.randomUUID();
            return (
              <div key={starshipId}>
                <Link to={`${starship.name}`}>
                  <Card>
                    <h3 className="text-neutral-300 font-semibold uppercase text-lg">
                      {starship.name}
                    </h3>
                    <p className="text-neutral-400 text-md">{starship.model}</p>
                  </Card>
                </Link>
              </div>
            );
          })}
          {loading && (
            <div className="m-auto">
              <PropagateLoader size={6} color="#bababa" />
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default StarshipsPage;
