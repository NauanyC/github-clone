import { subYears } from 'date-fns';
import React from 'react';
import Heatmap from 'react-calendar-heatmap';

import { Container } from './styles';

type HeatmapValue = { date: Date; count: number };

const RandomCalendar: React.FC = () => {
  const endDate = new Date();
  const startDate = subYears(endDate, 1);

  const values: Array<HeatmapValue> = [];

  values.push({ date: new Date(), count: 874 });

  return (
    <Container>
      <div className="wrapper">
        <Heatmap
          startDate={startDate}
          endDate={endDate}
          values={values}
          gutterSize={3.5}
          showWeekdayLabels
          classForValue={(item: HeatmapValue) => {
            let clampedCount = 0;
            if (item !== null) {
              clampedCount = Math.max(item.count, 0);
              clampedCount = Math.min(item.count, 4);
            }
            return `scale-${clampedCount}`;
          }}
        />
        <span>Random calendar (do not represent real data)</span>
      </div>
    </Container>
  );
};

export default RandomCalendar;
