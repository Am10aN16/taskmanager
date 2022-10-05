import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';


const Date =() => {
  const [value, setValue] = React.useState(dayjs(Date.now()));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack>
        <DatePicker
          disableFuture
          label="Responsive"
          openTo="date"
          views={['day', 'month', 'year',]}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
  );
}

export default Date;