import type { TempoPage, TempoStoryboard, TempoRouteStoryboard } from 'tempo-sdk';
import { YellowButton } from '@/components/YellowButton';

const page: TempoPage = {
  name: "Buttons",
};

export default page;

export const YellowButtonStoryboard: TempoStoryboard = {
  render: () => <YellowButton />,
  name: "Yellow Button",
  layout: { x: 0, y: 0, width: 230, height: 184 },
};
