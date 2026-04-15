import type { TempoPage, TempoStoryboard } from "tempo-sdk";
import { YellowButton } from "@/components/YellowButton";

export const YellowButtonStoryboard: TempoStoryboard = {
  render: () => <YellowButton />,
  name: "Yellow Button",
  layout: { x: 0, y: 0, width: 230, height: 184 },
};

const page: TempoPage = { name: "Buttons" };
export default page;
