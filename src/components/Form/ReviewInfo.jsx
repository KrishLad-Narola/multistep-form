import { ClassNames } from '@emotion/react';
import {
  Typography,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Paper
} from '@mui/material';

const ReviewInfo = ({ formik }) => {
  const { values } = formik;

  const rows = [
    { label: 'Email', value: values.email, section: 'Account Details' },
    { label: 'First Name', value: values.firstName, section: 'Personal Information' },
    { label: 'Last Name', value: values.lastName, section: 'Personal Information' },
    { label: 'Phone Number', value: values.phone, section: 'Personal Information' },
    { label: 'Residence', value: values.residence, section: 'Personal Information' }
  ];

  return (
    <>
      <Typography variant="overline">Review Information</Typography>

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
    </>
  );
};

export default ReviewInfo;