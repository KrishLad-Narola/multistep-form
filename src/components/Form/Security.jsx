import { TextField, Grid } from '@mui/material';
import TwoFactorVerification from '../UI/Verification';

const Security = (props) => {


const { formik } = props;
  return (
    <Grid
      container
      xs={12}
      spacing={4}
    >
      <Grid
        size={12}
        item
        xs={12}
      >
        <TextField
          required
          id="outlined-basic"
          name="passWord"
          label="passWord"
          variant="outlined"
          size='small'
          fullWidth
          value={formik.values.passWord}
          onChange={formik.handleChange}
          error={formik.touched.passWord && Boolean(formik.errors.passWord)}
          helperText={formik.touched.passWord && formik.errors.passWord}
        />


      </Grid>

            <Grid
        size={12}
        item
        xs={12}
      >
        <TextField
          required
          id="outlined-basic"
          name="confirmPassword"
          label="Confirm PassWord"
          variant="outlined"
          size='small'
          fullWidth
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
          helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
        />


      </Grid>

   <TwoFactorVerification />

      </Grid>
  )

}


export default Security;