import { Link } from "react-router-dom";
import Card from "../components/ui/Card";

const HomePage = () => {
  return (
    <section className="flex items-center justify-center px-10 m-auto bg-millennium-falcon bg-center bg-cover min-h-[30rem]">
      <div className="m-auto md:w-2/3">
        <Card>
          <h1 className="text-4xl text-center uppercase my-4 text-neutral-300">
            Welcome to the Starships Explorer
          </h1>
          <p className="text-xl text-center my-3 text-neutral-300">
            {" "}
            Dive into the world of Star Wars and discover legendary starships
            from across the galaxy.
          </p>
          <p className="text-neutral-300 text-md text-center my-10">
            Whether you're a fan of the classic X-Wing, the intimidating Star
            Destroyer, or the iconic Millennium Falcon, we've got it all. Simply
            click below to begin your journey and explore detailed information
            about these incredible ships.
          </p>
          <Link
            to="/starships"
            className="m-auto flex items-center justify-center w-40 uppercase bg-yellow-400 py-4 rounded-full text-black font-semibold"
          >
            Start now
          </Link>
        </Card>
      </div>
    </section>
  );
};

export default HomePage;
