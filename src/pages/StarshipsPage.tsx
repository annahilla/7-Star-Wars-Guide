import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from '../redux/store';
import { Starship } from "../types/types";
import Card from "../components/ui/Card";

const StarshipsPage = () => {
  const starships = useSelector((state: RootState) => state.starships);

  return (
    <>
      <section className="flex flex-col gap-4 mt-10 px-10 m-auto md:w-2/3 lg:w-1/2">
        {starships.map((starship: Starship) => {
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

export default StarshipsPage;