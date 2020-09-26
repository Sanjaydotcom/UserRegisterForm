import React from 'react';
import OtpInput from 'react-otp-input';
import { at } from 'lodash';
import { useField } from 'formik';
import {
  FormControl,
  FormHelperText
} from '@material-ui/core';
import useStyles from '../UserRegForm/styles';
export default function OtpInputFrom(props) {
  const classes = useStyles();
  const { errorText, ...rest } = props;
  const [field, meta, helper] = useField(props);
  const { setValue } = helper;

  function _renderHelperText() {
    //function for render error message
    const [touched, error] = at(meta, 'touched', 'error');
    if (touched && error) {
      return <FormHelperText> {error}</FormHelperText>;
    }
  }
  const handleChange = otp => {
    //function for set value to formik
    setValue(otp);
  }

  return (
    <>
      <p>{props.label}</p>
      <FormControl variant="outlined" {...rest} error={meta.touched && meta.error && true}>
        <OtpInput
          {...field}
          value={field.value}
          focusStyle={classes.otpFocusStyle}
          onChange={handleChange}
          numInputs={5}
          containerStyle={classes.OtpContainer}
          inputStyle={classes.OtpSingleBox}
         
          shouldAutoFocus={true}
        />
        {_renderHelperText()}
      </FormControl>
      <br />
    </>
  );
}
