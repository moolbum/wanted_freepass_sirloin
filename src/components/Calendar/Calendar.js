import React from 'react';
import TextField from '@mui/material/TextField';
import DateRangePicker from '@mui/lab/DateRangePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Box from '@mui/material/Box';

export default function Calendar({ value, checkedDate }) {
  const CalendarStyle = {
    margin: '20px 0',
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateRangePicker
        value={value}
        onChange={checkedDate}
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

export function CalendarBasic({ value, CheckedDateBasic }) {
  const CalendarStyle = {
    margin: '20px 0',
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        value={value}
        onChange={CheckedDateBasic}
        renderInput={params => <TextField {...params} sx={CalendarStyle} />}
      />
    </LocalizationProvider>
  );
}
