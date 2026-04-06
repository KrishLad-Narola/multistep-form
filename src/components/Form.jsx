import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Grid,
  FormHelperText,
  Button,
  Paper,
  Typography
} from '@mui/material';

import PersonalInfo from '../components/Form/PersonalInfo';
import EducationInfo from '../components/Form/EducationInfo';
import AccountDetails from '../components/Form/AccountDetails';
import Security from '../components/Form/Security';
import ReviewInfo from '../components/Form/ReviewInfo';

const steps = [
  'Personal Info',
  'Education Info',
  'Account Details',
  'Security',
  'Review & Submit'
];

const validationSchemas = [
  Yup.object({
    firstName: Yup.string()
      .required('First name is required')
      .matches(/^[A-Za-z]+$/, 'Only letters allowed'),
    lastName: Yup.string()
      .required('Last name is required')
      .matches(/^[A-Za-z]+$/, 'Only letters allowed'),
    email: Yup.string()
      .required('Email is required')
      .email('Invalid email'),
    phone: Yup.string().required('Phone is required'),
    addressInfo: Yup.string().required('Address is required'),
  }),
  Yup.object({
    enrollmentNo: Yup.string().required('Enrollment No is required'),
    instituteName: Yup.string().required('Institute Name is required'),
    degreeName: Yup.string().required('Degree is required'),
  }),
  Yup.object({
    accountholderName: Yup.string().required('Enter Account Holder Name'),
    brachName: Yup.string().required('Enter Branch Name'),
    accountNumber: Yup.string().required('Enter Account Number'),
    ifscCode: Yup.string().required('Enter IFSC Code'),
    brachAddress: Yup.string().required('Enter Branch Address')
  }),
  Yup.object({
    passWord: Yup.string()
      .min(8, 'Minimum 8 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('passWord')], 'Passwords do not match')
      .required('Confirm Password is required'),
  }),
];

const Form = () => {
  const [activeStep, setActiveStep] = useState(0);

  const formik = useFormik({
    initialValues: {
      email: '',
      passWord: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      phone: '',
      addressInfo: '',
      enrollmentNo: '',
      instituteName: '',
      degreeName: '',
      ifscCode: '',
      accountNumber: '',
      brachAddress: '',
      accountholderName: '',
      brachName: '',
    },
    validationSchema: validationSchemas[activeStep] || Yup.object({}),
    onSubmit: (values) => {
      console.log('Final Form Data:', values);
      alert('Registration Successful!');
      window.location.reload();
    }
  });

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const handleNextStep = async () => {
    const errors = await formik.validateForm();

    if (Object.keys(errors).length === 0) {
      if (activeStep === steps.length - 1) {
        formik.handleSubmit();
      } else {
        setActiveStep((prev) => prev + 1);
      }
    } else {
      const touched = {};
      Object.keys(errors).forEach((key) => (touched[key] = true));
      formik.setTouched(touched);
    }
  };

  const formContent = (step) => {
    switch (step) {
      case 0:
        return <PersonalInfo formik={formik} />;
      case 1:
        return <EducationInfo formik={formik} />;
      case 2:
        return <AccountDetails formik={formik} />;
      case 3:
        return <Security formik={formik} />;
      case 4:
        return <ReviewInfo formik={formik} />;
      default:
        return null;
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        p: 2
      }}
    >
      <Paper
        elevation={4}
        sx={{
          maxWidth: 900,
          width: '100%',
          borderRadius: 3,
          p: 4
        }}
      >
        <Typography variant="h4" align="center" mb={3}>
          Multi-Step Registration Form
        </Typography>

        <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 4 }}>
          {steps.map((label, index) => (
            <Step key={index}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            
            <Grid item xs={12}>
              {formContent(activeStep)}
            </Grid>

            {formik.errors.submit && (
              <Grid item xs={12}>
                <FormHelperText error>
                  {formik.errors.submit}
                </FormHelperText>
              </Grid>
            )}

            <Grid item xs={12} sx={{ mt: 4 }}>
              <Box sx={{ display: 'flex', gap: 2 }}>

                <Button
                  variant="outlined"
                  fullWidth
                  onClick={handleBack}
                  disabled={activeStep === 0}
                  sx={{
                    py: 1.5,
                    fontWeight: 'bold',
                    textTransform: 'uppercase'
                  }}
                >
                  Back
                </Button>

                <Button
                  variant="contained"
                  fullWidth
                  onClick={handleNextStep}
                  sx={{
                    py: 1.5,
                    fontWeight: 'bold',
                    textTransform: 'uppercase'
                  }}
                >
                  {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                </Button>

              </Box>
            </Grid>

          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default Form;