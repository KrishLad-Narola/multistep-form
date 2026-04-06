import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Box } from '@mui/material';

export default function BasicDatePicker() {
  return (
    <Box sx={{border:1 , padding:2 ,borderColor:'silver' , borderRadius:1 , width:"100%"}}>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker  label="Date of Birth" />
      </DemoContainer>
    </LocalizationProvider>
     </Box>
  );
}
