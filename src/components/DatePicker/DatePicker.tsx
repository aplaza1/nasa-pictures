import React from "react";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TextField } from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers';

type DatePickerProps = {
    setDate: (date: Date) => void
    date: Date
}

const DatePicker = (props: DatePickerProps) =>  {
    const { setDate, date } = props;
    

    return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          label="For desktop"
          value={date}
          maxDate={new Date()}
          minDate={new Date('1995-06-17')}
          onChange={(newValue) => {
            if(newValue){
                setDate(newValue);
            }
          }}
          renderInput={(params) => <TextField {...params} />}
        />
    </LocalizationProvider>
    )
}

export default DatePicker