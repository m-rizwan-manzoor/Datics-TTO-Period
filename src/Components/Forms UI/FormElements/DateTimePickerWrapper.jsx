import { FormLabel, TextField } from '@mui/material';
import { useField } from 'formik'
import React from 'react'

function DateTimePickerWrapper({name, ...otherProps}) {
    const [field, meta] = useField(name);

    const configDateTimePicker = {
        ...field,
        ...otherProps,
        type: 'date',
        variant: 'outlined',
        fullWidth: true,
        InputLabelProps: {
            shrink: true
        }
    };

    if (meta && meta.touched && meta.error) {
        configDateTimePicker.error = true;
        configDateTimePicker.helperText = meta.error;
    }
    return (
        <>
            <TextField {...configDateTimePicker}></TextField>
        </>
    )
}

export default DateTimePickerWrapper