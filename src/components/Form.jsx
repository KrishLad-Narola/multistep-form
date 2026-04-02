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
  Button
} from '@mui/material';

import PersonalInfo from '../components/Form/PersonalInfo';
import EducationInfo from '../components/Form/EducationInfo';
import AccountDetails from '../components/Form/AccountDetails';
import Security from '../components/Form/Security';
import ReviewInfo from '../components/Form/ReviewInfo';


const steps = ['Personal Info' , 'EducationInfo', 'AccountDetails' , 'Security' , 'Review and Submit'];

const Form = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep  + 1);
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      phone: '',
      AddressInfo: '',
      EnrollmentNo:'',
      InstituteName:'',
      Degree:'',
    },

    validationSchema: Yup.object({
      email: Yup.string().required('Email is required').email('Invalid email'),

      password: Yup.string()
        .min(8, 'Password must be 8 characters'),

      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords do not match'),

      firstName: Yup.string().required('First Name is required'),

      lastName: Yup.string().required('Last Name is required'),
    }),

    onSubmit: (values) => {
      if (activeStep === steps.length - 1) {
        console.log("Form submitted", values);
      } else {
        setActiveStep((prev) => prev + 1);
      }
    }
  });

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
        return <div>404: Not Found</div>;
    }
  };

  return (
    
    <Box sx={{  border:'1px', maxWidth: '1000px', padding: 2 }}>

      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <form onSubmit={formik.handleSubmit}>

        <Grid container>

          <Grid item xs={12} sx={{ padding: '20px' }}>
            {formContent(activeStep)}
          </Grid>

          {formik.errors.submit && (
            <Grid item xs={12}>
              <FormHelperText error>
                {formik.errors.submit}
              </FormHelperText>
            </Grid>
          )}

          <Grid item xs={12}>

            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
            >
              Back
            </Button>

            {activeStep === steps.length - 1 ? (
              <Button type="submit" variant="contained">
                Submit
              </Button>
            ) : (
              <Button onClick={handleNext} type="submit" variant="contained" >
                Next
              </Button>
            )}

          </Grid>

        </Grid>

      </form>
    </Box>
  );
};

export default Form;