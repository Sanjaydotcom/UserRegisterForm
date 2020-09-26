import React from 'react';
import { Grid } from '@material-ui/core';
import { InputField, SelectField, CountrySelector, MobileField } from '../../FormFields';
import SelectGender from "../../FormFields/SelectGender"
const states = [
    {
    value: '1',
    label: 'Kerala'
  },
  {
    value: '2',
    label: 'Tamil Nadu'
  },
  {
    value: '3',
    label: 'Karnataka'
  }
];

export default function AddressForm(props) {
  const {
    formField: {
      fullName,
      countrySelect,
      mobile,
      state,
      selectGender
    }
  } = props;
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <InputField name={fullName.name} label={fullName.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={12}>
          <SelectGender name={selectGender.name} label={selectGender.label} />
        </Grid>
        <Grid item xs={12} sm={12}>
          <CountrySelector name={countrySelect.name} label={countrySelect.label} />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Grid item xs={12} sm={12}>
            <SelectField name={state.name} label={state.label} data={states} fullWidth
            />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12}>
          <MobileField name={mobile.name} label={mobile.label} value={mobile.value} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}