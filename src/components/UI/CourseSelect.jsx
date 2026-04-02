import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function CourseAndYear() {
  const [Qualification, setQualification] = React.useState('');

  const handleChange = (event) => {
    setQualification(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Qualification</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={Qualification}
          label="Qualification"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>Qualification</em>
          </MenuItem>
          <MenuItem value={10}>SSC</MenuItem>
          <MenuItem value={20}>HSC</MenuItem>
          <MenuItem value={30}>BSC</MenuItem>
          <MenuItem value={30}>BCA</MenuItem>
          <MenuItem value={30}>MSC</MenuItem>
          <MenuItem value={30}>MCA</MenuItem>
          <MenuItem value={30}>B.Com</MenuItem>
          <MenuItem value={30}>M.Com</MenuItem>
          <MenuItem value={30}>BBA</MenuItem>
          <MenuItem value={30}>MBA</MenuItem>
        </Select>
        
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={Qualification}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>Passing Year</em>
          </MenuItem>
          <MenuItem value={10}>2021-24</MenuItem>
          <MenuItem value={20}>2022-25</MenuItem>
          <MenuItem value={30}>2023-26</MenuItem>
        </Select>
        
      </FormControl>
    </div>
  );
}
