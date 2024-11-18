import Card from "./ui/Card";
import useStarships from "../hooks/useStarships";

const StarshipsList = () => {
    const {data} = useStarships();

    return (
        <>
            <section className="flex flex-col gap-4 mt-10 px-10 m-auto md:w-2/3 lg:w-1/2">
            {
                data?.results.map(starship => (
                    <Card key={starship.url}>
                        <h3 className="text-neutral-400 uppercase text-lg">{starship.name}</h3>
                        <p className="text-md">{starship.model}</p>
                    </Card>
                ))
            }
            </section>
        </>
    )
}

export default StarshipsList;