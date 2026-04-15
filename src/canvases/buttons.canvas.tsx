import type { TempoPage, TempoStoryboard } from "tempo-sdk";
import { GreenButton } from "@/components/GreenButton";

export const GreenButtonStoryboard: TempoStoryboard = {
  render: () => <GreenButton />,
  name: "Green Button",
  layout: { x: 0, y: 0, width: 230, height: 184 },
};

const page: TempoPage = { name: "Buttons" };
export default page;
