import { TextField, Grid } from '@mui/material';
import CourseAndYear from '../UI/CourseSelect';
import InputFileUpload from '../UI/UploadFile';




const EducationInfo = (props) => {


    const { formik } = props;

    return (
        <Grid
            container
            sx={12}
            spacing={4}
        >
            <Grid
                item
                size={12}
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
                item
                size={12}

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
                    error={formik.touched.lastName && Boolean(formik.errors.lastNamel)}
                    helperText={formik.touched.lastName && formik.errors.lastName}
                />



            </Grid>
            <Grid
                item
                size={12}

                xs={12}
            >
                <TextField
                    required
                    id="outlined-basic"
                    name="enrollmentNo"
                    label="Enrollment Number"
                    variant="outlined"
                    type="enrollmentNo"
                    fullWidth
                    size="small"                    
                    value={formik.values.enrollmentNo}
                    onChange={formik.handleChange}
                    error={formik.touched.enrollmentNo && Boolean(formik.errors.enrollmentNo)}
                    helperText={formik.touched.enrollmentNo && formik.errors.enrollmentNo}
                />



            </Grid>
            <Grid
                item
                size={12}

                xs={12}
            >
                <TextField
                    required
                    id="outlined-basic"
                    name="instituteName"
                    label="Institute Name"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={formik.values.instituteName}
                    onChange={formik.handleChange}
                    error={formik.touched.instituteName && Boolean(formik.errors.instituteName)}
                    helperText={formik.touched.instituteName && formik.errors.instituteName}
                />

            </Grid>

            <CourseAndYear />

            <Grid
                item
                size={12}

                xs={12}
            >
                <TextField
                    required
                    id="outlined-basic"
                    name="degreeName"
                    label="Degree Name"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={formik.values.degreeName}
                    onChange={formik.handleChange}
                    error={formik.touched.degreeName && Boolean(formik.errors.degreeName)}
                    helperText={formik.touched.degreeName && formik.errors.degreeName}
                />


            </Grid>

            <InputFileUpload  label="Profile Picture Upload" formField="PersonalInfo.profilePicture" accept="image/jpg, image/jpeg, image/png"/>
            
        </Grid>
    )
}

export default EducationInfo
