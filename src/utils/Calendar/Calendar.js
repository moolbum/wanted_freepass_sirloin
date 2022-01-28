import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import DateRangePicker from '@mui/lab/DateRangePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Box from '@mui/material/Box';

export default function Calendar() {
  const [value, setValue] = useState([null, null]);
  const CalendarStyle = {
    margin: '20px 0',
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateRangePicker
        value={value}
        onChange={newValue => {
          setValue(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <>
            <TextField {...startProps} sx={CalendarStyle} />
            <Box sx={{ mx: 2 }}> ~ </Box>
            <TextField {...endProps} sx={CalendarStyle} />
          </>
        )}
      />
    </LocalizationProvider>
  );
}

export function CalendarBasic() {
  const [value, setValue] = useState(null);
  const CalendarStyle = {
    margin: '20px 0',
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        value={value}
        onChange={newValue => {
          setValue(newValue);
        }}
        renderInput={params => <TextField {...params} sx={CalendarStyle} />}
      />
    </LocalizationProvider>
  );
}
