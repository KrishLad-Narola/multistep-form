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
                    name="EnrollmentNo"
                    label="Enrollment Number"
                    variant="outlined"
                    type="EnrollmentNo"
                    fullWidth
                    size="small"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    error={formik.touched.phone && Boolean(formik.errors.phone)}
                    helperText={formik.touched.phone && formik.errors.phone}
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
                    name="InstituteName"
                    label="Institute Name"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={formik.values.residence}
                    onChange={formik.handleChange}
                    error={formik.touched.residence && Boolean(formik.errors.residence)}
                    helperText={formik.touched.residence && formik.errors.residence}
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
                    name="DegreeName "
                    label="Degree Full Name or other CertificateName"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={formik.values.residence}
                    onChange={formik.handleChange}
                    error={formik.touched.residence && Boolean(formik.errors.residence)}
                    helperText={formik.touched.residence && formik.errors.residence}
                />

            </Grid>

            <InputFileUpload />
            
        </Grid>
    )
}

export default EducationInfo
