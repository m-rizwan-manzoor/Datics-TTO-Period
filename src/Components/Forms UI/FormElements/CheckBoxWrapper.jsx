import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from '@mui/material';
import { useField, useFormikContext } from 'formik'
import React from 'react'

function CheckBoxWrapper({ name, label, legend, ...otherProps }) {
    const [field, meta] = useField(name);
    const { setFieldValue } = useFormikContext();

    const handleChange = evt => {
        const { checked } = evt.target;
        setFieldValue(name, checked);
    };

    const configCheckBox = {
        ...field,
        ...otherProps,
        onChange: handleChange
    }

    const configFormControl = {};

    if (meta && meta.touched && meta.error) {
        configFormControl.error = true;
    }

    return (
        <FormControl {...configFormControl}>
            <FormLabel component="legend">{legend}</FormLabel>
            <FormGroup>
                <FormControlLabel
                    control={<Checkbox {...configCheckBox} />}
                    label={label}
                />
            </FormGroup>
        </FormControl>
    )
}

export default CheckBoxWrapper