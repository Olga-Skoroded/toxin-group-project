import { memo } from 'react';
import { PieChart } from 'react-minimal-pie-chart';

import { ratingValues } from '../../RoomImpression.fixture';

type Props = {
  excellent: number;
  good: number;
  normal: number;
  bad: number;
};

const Chart = memo((numberOfRatings: Props) => (
  <PieChart
    data={[
      {
        title: ratingValues.excellent,
        value: numberOfRatings.excellent,
        color: 'url(#gradient1)',
      },
      {
        title: ratingValues.good,
        value: numberOfRatings.good,
        color: 'url(#gradient2)',
      },
      {
        title: ratingValues.normal,
        value: numberOfRatings.normal,
        color: 'url(#gradient3)',
      },
      {
        title: ratingValues.bad,
        value: numberOfRatings.bad,
        color: 'url(#gradient4)',
      },
    ]}
    startAngle={92}
    lineWidth={8}
    paddingAngle={2}
  >
    <defs>
      <linearGradient id="gradient1" x1="50%" y1="0%" x2="50%" y2="100%">
        <stop offset="0" stopColor="#ffe39c" />
        <stop offset="1" stopColor="#ffba9c" />
      </linearGradient>
      <linearGradient id="gradient2" x1="50%" y1="0%" x2="50%" y2="100%">
        <stop offset="0" stopColor="#bc9cff" />
        <stop offset="1" stopColor="#8ba4f9" />
      </linearGradient>
      <linearGradient id="gradient3" x1="50%" y1="0%" x2="50%" y2="100%">
        <stop offset="0" stopColor="#6fcf97" />
        <stop offset="1" stopColor="#66d2ea" />
      </linearGradient>
      <linearGradient id="gradient4" x1="50%" y1="0%" x2="50%" y2="100%">
        <stop offset="0" stopColor="#919191" />
        <stop offset="1" stopColor="#3d4975" />
      </linearGradient>
    </defs>
  </PieChart>
));

export { Chart };
