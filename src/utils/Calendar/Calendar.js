import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
// import Stack from '@mui/material/Stack';

const Calendar = () => {
  const [value, setValue] = useState(new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      {/* <Stack spacing={3}> */}
      <DatePicker
        views={['year', 'month', 'day']}
        value={value}
        onChange={newValue => {
          setValue(newValue);
        }}
        renderInput={params => <TextField {...params} helperText={null} />}
      />
      {/* </Stack> */}
    </LocalizationProvider>
  );
};

export default Calendar;
