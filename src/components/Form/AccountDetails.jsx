import { Grid, TextField, FormHelperText } from "@mui/material";
import AccountType from "../UI/AccountType";

const AccountDetails = (props) => {
  const { formik } = props;
  return (
    <Grid container spacing={2}
    >

      <Grid
        size={12}
        item
        xs={12}
      >
        <TextField
          required
          id="outlined-basic"
          name="AccountHolderName"
          label="Account Holder Name"
          variant="outlined"
          size='small'
          type="name"
          fullWidth
          error={Boolean(formik.touched.AccountHolderName && formik.errors.AccountHolderName)}
          onChange={formik.handleChange}
          value={formik.values.AccountHolderName}
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
          name="BrachName"
          label="Brach Name"
          variant="outlined"
          size="small"
          type="Text"
          fullWidth
          error={Boolean(formik.touched.BrachName && formik.errors.BrachName)}
          onChange={formik.handleChange}
          value={formik.values.BrachName}
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
          name="AccountNumber"
          label="AccountNumber"
          variant="outlined"
          size="small"
          fullWidth
          type="AccountNumber"
          error={Boolean(formik.touched.AccountNumber && formik.errors.AccountNumber)}
          onChange={formik.handleChange}
          value={formik.values.AccountNumber}
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
          name="IFSCCode"
          label="IFSCCode"
          variant="outlined"
          size="small"
          fullWidth
          type="Code"
          error={Boolean(formik.touched.IFSCCode && formik.errors.IFSCCode)}
          onChange={formik.handleChange}
          value={formik.values.IFSCCode}
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
          name="BrachAddress"
          label="Brach Address"
          variant="outlined"
          size="small"
          fullWidth
          type="text"
          error={Boolean(formik.touched.BrachAddress && formik.errors.BrachAddress)}
          onChange={formik.handleChange}
          value={formik.values.BrachAddress}
        />

      </Grid>

      <AccountType />

      {formik.errors.submit && (
        <Grid
          item
          xs={12}
        >
          <FormHelperText error>
            {formik.errors.submit}
          </FormHelperText>
        </Grid>
      )}
    </Grid>
  )
}

export default AccountDetails