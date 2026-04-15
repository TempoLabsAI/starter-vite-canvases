import type { TempoPage, TempoStoryboard, TempoRouteStoryboard } from 'tempo-sdk';
import { OrangeButton } from '@/components/OrangeButton';
import { YellowButton } from '@/components/YellowButton';

const page: TempoPage = {
  name: "Buttons",
};

export default page;

export const OrangeButtonStoryboard: TempoStoryboard = {
  render: () => <OrangeButton />,
  name: "Orange Button",
  layout: { x: 0, y: 0, width: 230, height: 184 },
};

export const YellowButtonStoryboard: TempoStoryboard = {
  render: () => <YellowButton />,
  name: "Yellow Button",
  layout: { x: 280, y: 0, width: 230, height: 184 },
};
