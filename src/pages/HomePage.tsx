import Card from "../components/ui/Card";

const HomePage = () => {
    return (
        <section className="my-10 px-10 md:w-2/3 m-auto">
            <Card>
                <h1 className="text-4xl text-center uppercase my-2 text-neutral-400">Welcome to the Starships Explorer</h1>
                <p className="text-xl text-center my-3 text-neutral-400"> Dive into the world of Star Wars and discover legendary starships from across the galaxy.</p>
                <p className="text-md text-center my-10">Whether you're a fan of the classic X-Wing, the intimidating Star Destroyer, or the iconic Millennium Falcon, we've got it all.
                Simply click below to begin your journey and explore detailed information about these incredible ships.</p>
            </Card>
        </section>
    )
}

export default HomePage;