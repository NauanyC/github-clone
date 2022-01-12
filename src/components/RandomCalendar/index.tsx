import React from 'react';
import Heatmap from 'react-calendar-heatmap';
import { isBefore, subYears, isSameDay, addDays } from 'date-fns';

import { Container } from './styles';

type HeatmapValue = { date: Date; count: number };

const RandomCalendar: React.FC = () => {
  const endDate = new Date();
  const startDate = subYears(endDate, 1);

  const values: Array<HeatmapValue> = generateHeatmapValues(startDate, endDate);

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

const generateHeatmapValues = (
  startDate: Date,
  endDate: Date
): Array<HeatmapValue> => {
  const values: Array<HeatmapValue> = [];
  let currentDate = startDate;

  while (isBefore(currentDate, endDate) || isSameDay(currentDate, endDate)) {
    const count = Math.round(Math.random() * 4);
    values.push({ date: currentDate, count });
    currentDate = addDays(currentDate, 1);
  }

  return values;
};

export default RandomCalendar;
