import React from 'react';
import { gridSize } from '@atlaskit/theme';
import { DatePicker, DateTimePicker, TimePicker } from '@atlaskit/datetime-picker';

export default () => {
  return (
    <div>
      <DatePicker
        innerProps={{ style: { width: gridSize() * 15 } }}
        onChange={console.log}
      />
    </div>
  );
};