import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { at } from 'lodash';
import { useField } from 'formik';
import {
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  FormHelperText
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import useStyles from '../UserRegForm/styles';

function SelectField(props) {
  const classes = useStyles();
  const [focus, setFocus] = useState("unfocused")
  const { label, data, ...rest } = props;
  const [field, meta] = useField(props);
  const { value: selectedValue } = field;
  const [touched, error] = at(meta, 'touched', 'error');
  const isError = touched && error && true;
  function _renderHelperText() {
    //function for render error message
    if (isError) {
      return <FormHelperText>{error}</FormHelperText>;
    }
  }

  return (
    <>
      <p className={focus == "focused" ? classes.LabelColor : null}>{props.label}</p>
      <FormControl onFocus={() => { setFocus("focused") }}
        onBlur={() => { setFocus("unfocused") }} variant="outlined" {...rest} error={isError}>

        <Select
          IconComponent={ExpandMoreIcon}
          {...field}
          value={selectedValue ? selectedValue : ''}>
          {data.map((item, index) => (
            <MenuItem key={index} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
        {_renderHelperText()}
      </FormControl>
    </>
  );
}

SelectField.defaultProps = {
  data: []
};

SelectField.propTypes = {
  data: PropTypes.array.isRequired
};

export default SelectField;
