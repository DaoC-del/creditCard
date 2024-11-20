// src/pages/Home.tsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import axios from 'axios';

interface Comment {
  id: number;
  comment: string;
  date: string;
}

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    // 假设有一个后端 API 返回评论数据
    axios.get('/api/comments').then((response) => {
      setComments(response.data);
    }).catch((error) => {
      console.error('Error fetching comments:', error);
    });
  }, []);

  const handleNavigate = () => {
    navigate('/form');
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
        Comment Record App
      </Typography>
      <Button variant="contained" onClick={handleNavigate}>
        Go to Form
      </Button>
      {/* 数据一览区，展示保存的评论 */}
      <Box mt={4}>
        <TableContainer component={Paper}>
          <Table aria-label="comments table">
            <TableHead>
              <TableRow>
                <TableCell>Comment</TableCell>
                <TableCell>Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {comments.map((comment) => (
                <TableRow key={comment.id}>
                  <TableCell>{comment.comment}</TableCell>
                  <TableCell>{comment.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Home;