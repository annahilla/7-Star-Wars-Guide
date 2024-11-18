import Card from "./ui/Card";
import useStarships from "../hooks/useStarships";

const StarshipsList = () => {
    const {data} = useStarships();

    return (
        <>
            <section className="flex flex-col gap-4 w-1/2 mt-10 m-auto">
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