import checkoutFormModel from './checkoutFormModel';
const {
  formField: {
    fullName,
    countrySelect,
    mobile,
    state,
    selectGender,
    companyName,
    email,
    termsAndConditions,
    jobTitile,
    yearsOfExperience,
    otp
  }
} = checkoutFormModel;

export default {
  [fullName.name]: '',
  [countrySelect.name]: '',
  [mobile.name]: '',
  [state.name]: '',
  [selectGender.name]: '',
  [companyName.name]: '',
  [email.name]: '',
  [termsAndConditions.name]: false,
  [jobTitile.name]: '',
  [yearsOfExperience.name]: '',
  [otp.name]: ''
};
