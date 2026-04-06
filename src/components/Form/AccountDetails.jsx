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
          name="accountholderName"
          label="Account Holder Name"
          variant="outlined"
          size='small'
          type="name"
          fullWidth
          error={Boolean(formik.touched.accountholderName && formik.errors.accountholderName)}
          onChange={formik.handleChange}
          value={formik.values.accountholderName}
          helperText={formik.touched.accountholderName && formik.errors.accountholderName}
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
          name="brachName"
          label="Brach Name"
          variant="outlined"
          size="small"
          type="Text"
          fullWidth
          error={Boolean(formik.touched.brachName && formik.errors.brachName)}
          onChange={formik.handleChange}
          value={formik.values.brachName}
          helperText={formik.touched.brachName && formik.errors.brachName}
          
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
          name="accountNumber"
          label="accountNumber"
          variant="outlined"
          size="small"
          fullWidth
          type="accountNumber"
          error={Boolean(formik.touched.accountNumber && formik.errors.accountNumber)}
          onChange={formik.handleChange}
          value={formik.values.accountNumber}
          helperText={formik.touched.accountNumber && formik.errors.accountNumber}
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
          name="ifscCode"
          label="ifscCode"
          variant="outlined"
          size="small"
          fullWidth
          type="Code"
          error={Boolean(formik.touched.ifscCode && formik.errors.ifscCode)}
          onChange={formik.handleChange}
          value={formik.values.ifscCode}
          helperText={formik.touched.ifscCode && formik.errors.ifscCode}
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
          name="brachAddress"
          label="Brach Address"
          variant="outlined"
          size="small"
          fullWidth
          type="text"
          error={Boolean(formik.touched.brachAddress && formik.errors.brachAddress)}
          onChange={formik.handleChange}
          value={formik.values.brachAddress}
          helperText={formik.touched.brachAddress && formik.errors.brachAddress}
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