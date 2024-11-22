import Button from "../components/ui/Button";

const HomePage = () => {
  return (
    <section className="flex items-center justify-center m-auto bg-stars bg-center bg-cover min-h-[68vh]">
      <div className="px-10 md:w-2/3 md:px-0">
        <div className="p-5">
          <h1 className="font-starwars text-xl text-center my-4 text-white text-3xl md:text-4xl">
            Starships Explorer
          </h1>
          <p className="text-lg text-center my-3 text-neutral-100 md:text-xl">
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
        </div>
      </div>
    </section>
  );
};

export default HomePage;
