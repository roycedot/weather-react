import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Weather App" },
    { name: "description", content: "Take-home Assignment" },
  ];
}

export default function Home() {
  return <Welcome />;
}
