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
    firstName: Yup.string().required('First name is required')
    .matches(/^[A-Za-z]+$/, 'Numbers and special characters are not allowed'),
    lastName: Yup.string().required('Last name is required')
    .matches(/^[A-Za-z]+$/, 'Numbers and special characters are not allowed'),
    phone: Yup.string().required('Phone is required'),
    addressInfo: Yup.string().required('Address is required'),
  }),
  Yup.object({
    enrollmentNo: Yup.string().required('Enrollment No is required'),
    instituteName: Yup.string().required('Institute Name is required'),
    degreeName: Yup.string().required('Degree is required'),
  }),
  Yup.object({
    email: Yup.string().required('Email is required')
      .email('Invalid email'),
    accountholderName: Yup.string().required('Enter The AccountHolderName'),
    brachName: Yup.string().required('Enter Your Branch Name'),
    accountNumber: Yup.string().required('Enter valid Account Number'),
    ifscCode: Yup.string().required('Enter your IFSCCode'),
    brachAddress: Yup.string().required('Enter your Branch Name')
  }),
  Yup.object({
    passWord: Yup.string().min(8, 'Min 8 characters')
      .required('Password is required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('passWord')], 'PassWord do not match')
      .required('Confirm Password is required'),
  }),
  Yup.object({})
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
      branchName: '',
    },

    validationSchema: validationSchemas[activeStep],
    onSubmit: (values) => {
      if (activeStep === steps.length - 1) {
        // console.log('Final Form Data:', values);
         console.log('Final Form Data:', values);
      alert("Registration Successful!");
      // formik.resetForm();
      // window.location.reload();
      }
    }
  });

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);

  const handleNextStep = async () => {
    const errors = await formik.validateForm();
    console.log("errors", errors)
    if (Object.keys(errors).length === 0) {
      handleNext();
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

            <Grid item xs={12} sx={{ mt: 4}}>
             
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

                {activeStep === steps.length - 1 ? (
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{
                      py: 1.5,
                      fontWeight: 'bold',
                      textTransform: 'uppercase'
                    }}
                  >
                    Submit
                  </Button>
                ) : (
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
                    Next
                  </Button>
                )}
              </Box>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default Form;