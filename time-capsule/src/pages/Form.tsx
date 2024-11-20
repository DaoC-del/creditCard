// src/pages/Form.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField, Typography } from '@mui/material';
import axios from 'axios';

const Form: React.FC = () => {
  const [comment, setComment] = useState('');
  const [date, setDate] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 假实现保存数据的逻辑，假设保存到后端
    axios.post('/api/comments', { comment, date }).then(() => {
      navigate('/');
    }).catch((error) => {
      console.error('Error saving comment:', error);
    });
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Add a Comment
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ width: '300px' }}>
        <TextField
          label="Comment"
          variant="outlined"
          fullWidth
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Date"
          type="date"
          variant="outlined"
          fullWidth
          value={date}
          onChange={(e) => setDate(e.target.value)}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
          Submit
        </Button>
        <Button variant="outlined" fullWidth sx={{ mt: 1 }} onClick={handleBack}>
          Back
        </Button>
      </Box>
    </Box>
  );
};

export default Form;