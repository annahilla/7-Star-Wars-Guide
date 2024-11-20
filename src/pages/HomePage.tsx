import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

const HomePage = () => {
  return (
    <section className="flex items-center justify-center px-10 m-auto bg-millennium-falcon bg-center bg-cover min-h-[28.5rem] lg:h-[68vh]">
      <div className="mb-10 md:w-2/3">
        <Card>
          <h1 className="text-2xl text-center uppercase my-4 text-neutral-100 md:text-4xl">
            Welcome to the Starships Explorer
          </h1>
          <p className="text-lg text-center my-3 text-neutral-100 md:text-xl">
            {" "}
            Dive into the world of Star Wars and discover legendary starships
            from across the galaxy.
          </p>
          <p className="text-neutral-200 text-sm text-center my-10 md:text-md">
            Whether you're a fan of the classic X-Wing, the intimidating Star
            Destroyer, or the iconic Millennium Falcon, we've got it all. Simply
            click below to begin your journey and explore detailed information
            about these incredible ships.
          </p>
          <Button as="link" to="/starships">
            Start now
          </Button>
        </Card>
      </div>
    </section>
  );
};

export default HomePage;
