import React from "react";
import { useSelector } from "react-redux";
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

const Gallery = () => {
  const theme = useTheme();
  const data = useSelector((state) => state.data);
  console.log(data);

  return (
    <div className="container mt-5 pt-5 d-flex mb-3 " style={{minHeight:"50vh",justifyContent:'center',alignItems:'center',flexWrap:'wrap',gap:'30px'}}>
     {data.length ===0 ?<img src="https://cdn.mos.cms.futurecdn.net/PuXipAW3AXUzUJ4uYyxPKC-1200-80.jpg" alt="" width={1000} /> : data?.map((item, index) => (
        <Card key={index} sx={{ display: 'flex' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component="div" variant="body1">
                First Name: {item.name}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                Age: {item.age}
              </Typography>
              <Typography variant="body1">
                {item.text}
              </Typography>
            </CardContent>

            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
              <IconButton aria-label="previous">
                {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
              </IconButton>
              <IconButton aria-label="play/pause">
                <PlayArrowIcon sx={{ height: 38, width: 38 }} />
              </IconButton>
              <IconButton aria-label="next">
                {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
              </IconButton>
            </Box>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image={item.image}
            alt="Live from space album cover"
          />
        </Card>
      ))}
    </div>
  );
};

export default Gallery;
