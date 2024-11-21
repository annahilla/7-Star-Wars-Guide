import { Pilot } from "../types/types";
import { getIdFromUrl } from "../utils/getIdFromUrl";
import PhotoCard from "./ui/PhotoCard";
import Section from "./ui/Section";
import TextMessage from "./ui/TextMessage";
import Title from "./ui/Title";

const PilotsList = ({pilots}: {pilots: Pilot[]}) => {
    return (
        <Section>
        <Title label="Pilots" />
        <div className="flex flex-col gap-4 my-5 md:flex-row">
        {
       pilots.length > 0 
          ? pilots.map(pilot => {
            const pilotId = getIdFromUrl(pilot.url)
            return (
              <PhotoCard 
                text={pilot.name}
                imgUrl={`https://starwars-visualguide.com/assets/img/characters/${pilotId}.jpg`}
              />
            )
          })
          : <TextMessage>We couldn't find any pilots for this ship.</TextMessage>
        }
        </div>
      </Section>
    )
}

export default PilotsList;