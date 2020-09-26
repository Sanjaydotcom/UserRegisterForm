import * as Yup from 'yup';
import checkoutFormModel from './checkoutFormModel';
const {
  formField: {
    fullName,
    countrySelect,
    mobile,
    state,
    companyName,
    email,
    jobTitile,
    yearsOfExperience,
    selectGender,
    otp
  }
} = checkoutFormModel;

const emailValidate = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/;

export default [
  Yup.object().shape({
    [fullName.name]: Yup.string().required(`${fullName.requiredErrorMsg}`),
    [selectGender.name]: Yup.string().required(`${selectGender.requiredErrorMsg}`),
    [countrySelect.name]: Yup.string().required(`${countrySelect.requiredErrorMsg}`),
    [state.name]: Yup.string().required(`${state.requiredErrorMsg}`),
    [mobile.name]: Yup.string()
      .required(`${mobile.requiredErrorMsg}`)
      .test(
        'len',
        `${mobile.invalidErrorMsg}`,
        val => val && val.length >= 10,
      ),
    }),
  Yup.object().shape({
    [companyName.name]: Yup.string().required(`${companyName.requiredErrorMsg}`),
    [email.name]: Yup.string()
    .email(`${email.invalidErrorMsg}`)
    .required(`${email.requiredErrorMsg}`),
       [jobTitile.name]: Yup.string().required(`${jobTitile.requiredErrorMsg}`),

      [yearsOfExperience.name]: Yup.string()
      .required(`${yearsOfExperience.requiredErrorMsg}`)
      .test('len', `${yearsOfExperience.invalidErrorMsg}`, val => val && val.length >= 1)
  }),
  Yup.object().shape({
    [otp.name]: Yup.string().required(`${otp.requiredErrorMsg}`),
  })
];
