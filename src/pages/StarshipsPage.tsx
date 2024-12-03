import { Link } from "react-router-dom";
import { Starship } from "../types/types";
import Card from "../components/ui/Card";
import TextMessage from "../components/ui/TextMessage";
import { PropagateLoader } from "react-spinners";
import { useEffect } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { fetchStarships } from "../redux/starshipsSlice";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

const StarshipsPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { starships, nextPage, loading, error } = useTypedSelector((state) => state.starships);

  const loadMoreStarships = () => {
    if (nextPage && !loading) {
      dispatch(fetchStarships(nextPage));
    }
  };

  useEffect(() => {
    if (!loading && nextPage) {
      loadMoreStarships();
    }
  }, [loading, nextPage]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 100
      ) {
        if (!loading && nextPage) {
          loadMoreStarships();
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, nextPage]);

  return (
    <>
      {error && <TextMessage>Error: {error}</TextMessage>}
      <section className="bg-stars bg-contain px-10 min-h-96">
        <div className="flex flex-col m-auto gap-4 py-8 md:w-2/3 lg:w-1/2">
          {starships.map((starship: Starship) => {
            return (
              <div key={starship.url}>
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
            <div role="progress-bar" className="m-auto">
              <PropagateLoader size={6} color="#bababa" />
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default StarshipsPage;
