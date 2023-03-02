import { MenuItem, TextField } from '@mui/material';
import { useField, useFormikContext } from 'formik'
import React from 'react'

function SelectWrapper({ name, options, ...otherProps }) {

    const [field, meta] = useField(name);
    const { setFieldValue } = useFormikContext();

    const handleChange = (event) => {
        setFieldValue(name, event.target.value);
    }

    const configSelect = {
        ...field,
        ...otherProps,
        select: true,
        variant: "outlined",
        fullWidth: true,
        onChange: handleChange
    };

    if (meta && meta.touched && meta.error) {
        configSelect.error = true;
        configSelect.helperText = meta.error;
    }

    return (
        <TextField {...configSelect}>
            {Object.keys(options).map((item, pos) => {
                return (
                    <MenuItem key={pos} value={item}>
                        {options[item]}
                    </MenuItem>
                )
            })}
        </TextField>
    )
}

export default SelectWrapper