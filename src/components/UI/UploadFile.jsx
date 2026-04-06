import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Box, Typography } from '@mui/material';
import { useState } from 'react';

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

export default function InputFileUpload({ label }) {
  const [fileName, setFileName] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <Box sx={{ border: 1, padding: 2, borderColor: 'silver', borderRadius: 1, width: '100%' }}>
      <Button
        component="label"
        variant="contained"
        startIcon={<CloudUploadIcon />}
      >
        {label}
        <VisuallyHiddenInput
          type="file"
          onChange={handleFileChange}
        />
      </Button>

      {fileName && (
        <Typography variant="body2" sx={{ mt: 1 }}>
          Uploaded File: {fileName}
        </Typography>
      )}
    </Box>
  );
}