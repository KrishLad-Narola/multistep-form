import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Box } from '@mui/material';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default function InputFileUpload() {
  return (
    <Box sx={{border:1 ,padding:2 , borderColor:'silver' ,  borderRadius:1 , width:'100%'}}>
    <Button
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
    >
       Upload Prof 
      <VisuallyHiddenInput
        type="file"
        lable='UplodeFile'
        onChange={(event) => console.log(event.target.files)}
        multiple
      />
    </Button>
   </Box>

  );
}
