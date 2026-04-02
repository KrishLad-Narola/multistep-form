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
          name="PassWord"
          label="PassWord"
          variant="outlined"
          size='small'
          fullWidth
          value={formik.values.PassWord}
          onChange={formik.handleChange}
          error={formik.touched.PassWord && Boolean(formik.errors.PassWord)}
          helperText={formik.touched.PassWord && formik.errors.PassWord}
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
          name="ConfirmPassWord"
          label="Confirm PassWord"
          variant="outlined"
          size='small'
          fullWidth
          value={formik.values.ConfirmPassWord}
          onChange={formik.handleChange}
          error={formik.touched.ConfirmPassWord && Boolean(formik.errors.ConfirmPassWord)}
          helperText={formik.touched.ConfirmPassWord && formik.errors.ConfirmPassWord}
        />


      </Grid>

   <TwoFactorVerification />

      </Grid>
  )

}


export default Security;