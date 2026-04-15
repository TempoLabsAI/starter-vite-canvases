import type { TempoPage, TempoStoryboard, TempoRouteStoryboard } from 'tempo-sdk';
import { OrangeButton } from '@/components/OrangeButton';

const page: TempoPage = {
  name: "Orange Button",
};

export default page;

export const OrangeButtonStoryboard: TempoStoryboard = {
  render: () => <OrangeButton />,
  name: "Orange Button",
  layout: { x: 0, y: 0, width: 230, height: 184 },
};
