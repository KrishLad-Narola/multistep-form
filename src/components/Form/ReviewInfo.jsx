
import {
  Typography,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Paper,

} from '@mui/material';

const ReviewInfo = ({ formik }) => {
  const { values } = formik;

  const rows = [
    { label: 'First Name', value: values.firstName, section: 'Personal Information' },
    { label: 'Last Name', value: values.lastName, section: 'Personal Information' },
    { label: 'Email', value: values.email, section: 'Personal Information' },
    { label: 'Phone Number', value: values.phone, section: 'Personal Information' },
    { label: 'addressInfo', value: values.addressInfo, section: 'Personal Information' },
    { label: 'enrollmentNo', value: values.enrollmentNo, section: 'Education Information' },
    { label: 'instituteName', value: values.instituteName, section: 'Education Information' },
    { label: 'degreeName', value: values.degreeName, section: 'Education Information' },
    { label: 'accountholderName', value: values.accountholderName, section: 'Account Details' },
    { label: 'brachName', value: values.brachName, section: 'Account Details' },
    { label: 'accountNumber', value: values.accountNumber, section: 'Account Details' },
    { label: 'ifscCode', value: values.ifscCode, section: 'Account Details' },
    { label: 'brachAddress', value: values.brachAddress, section: 'Account Details' },
    { label: 'passWord', value: values.passWord, section: 'Security' },
    { label: 'confirmPassword', value: values.confirmPassword, section: 'Security' },

  ];

  return (
    <>
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <Typography variant="h4">Review Information</Typography>

        <TableContainer component={Paper}>
          <Table className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
            <TableBody className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
              {rows.map((row, index) => (
                <TableRow key={index}>
                  <TableCell><strong>{row.label}</strong></TableCell>
                  <TableCell>{row.value || '-'}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        
      </div>
    </>
  );
};

export default ReviewInfo;