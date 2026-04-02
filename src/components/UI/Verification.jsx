import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function TwoFactorVerification() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={handleChange}
        //   inputProps={{ 'aria-label': 'Two Factor Verification Checkbox' }}
        />
      }
      label="Two Factor Verification"
    />
  );
}