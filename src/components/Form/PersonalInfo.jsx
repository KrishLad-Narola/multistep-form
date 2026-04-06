import { TextField, Grid } from '@mui/material';
import InputFileUpload from '../UI/UploadFile';
import BasicDatePicker from '../UI/DatePicker';
import RowRadioButtonsGroup from '../UI/GenderButton';


const PersonalInfo = (props) => {



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
          name="firstName"
          label="First Name"
          variant="outlined"
          size='small'
          fullWidth
          value={formik.values.firstName}
          onChange={formik.handleChange}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
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
          name="lastName"
          label="Last Name"
          variant="outlined"
          size="small"
          fullWidth
          value={formik.values.lastName}
          onChange={formik.handleChange}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
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
          name="phone"
          type="phone"
          label="Phone Number"
          variant="outlined"
          fullWidth
          size="small"
          value={formik.values.phone}
          onChange={formik.handleChange}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={formik.touched.phone && formik.errors.phone}
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
          name="addressInfo"
          label="Address Info"
          variant="outlined"
          type="addressInfo"
          fullWidth
          size="small"
          value={formik.values.addressInfo}
          onChange={formik.handleChange}
          error={formik.touched.addressInfo && Boolean(formik.errors.addressInfo)}
          helperText={formik.touched.addressInfo && formik.errors.addressInfo}
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
          name="email"
          label="Email"
          variant="outlined"
          type="email"
          fullWidth
          size="small"
          error={Boolean(formik.touched.email && formik.errors.email)}
          onChange={formik.handleChange}
          value={formik.values.email}
          helperText={formik.touched.email && formik.errors.email}
        />
      </Grid>

      <BasicDatePicker />
      <RowRadioButtonsGroup />
  

      <InputFileUpload  label="Profile Picture Upload" formField="PersonalInfo.profilePicture" accept="image/jpg, image/jpeg, image/png"/>

    </Grid>

  )
}

export default PersonalInfo
