import type { TempoPage, TempoStoryboard } from "tempo-sdk";
import { OrangeButton } from "@/components/OrangeButton";

export const OrangeButtonStoryboard: TempoStoryboard = {
  render: () => <OrangeButton />,
  name: "Orange Button",
  layout: { x: 0, y: 0, width: 230, height: 184 },
};

const page: TempoPage = { name: "Buttons" };
export default page;
