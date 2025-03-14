import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Weather App" },
    { name: "description", content: "Take-home Assignment" },
  ];
}

export async function loader({ params }: Route.LoaderArgs) {
  // console.log("loader")
  // const res = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/" +
  //     "timeline/West%20New%20York%2C%20nj/2025-03-14/2025-04-04?unitGroup=us&elements=datetime%2CdatetimeEpoch%2Cname%2CresolvedAddress%2Ctemp%2Cprecipprob%2Cwindspeed%2Cwindspeedmean%2Cconditions%2Cicon&key=SU4XR55XXRG44QREHFJPVAWT8&contentType=json");
  // return await res.json()

  // annoyingly, this loader() is being called twice - seems to be something wrong with this
  // auto-generated template
  return {}
}

export default function Home({loaderData}) {
  const response = loaderData

  // console.log("response = ", response)
  return <Welcome initialApiResponse={response}/>;
}
