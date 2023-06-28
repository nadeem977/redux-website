import React,{useState,useEffect} from "react";
import { useSelector } from "react-redux";
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

const Gallery = () => {

  const data = useSelector((state) => state.data);
  const [val, setVal] = useState([]);
  
  useEffect(() => {
    const mergedData = data.reduce((acc, item) => {
      if (item.id) {
        acc.push({ id: item.id, name: item.name, age: item.age, text: item.text });
      } else if (item.image) {
        const obj = acc[acc.length - 1];
        if (obj && !obj.image) {
          obj.image = item.image;
        } else {
          acc.push({ image: item.image });
        }
      }
      return acc;
    }, []);
  
    setVal(mergedData);
  }, [data]);
  
  console.log(val);
  
  
  
  return (
    <div className="container mt-5 pt-5 d-flex mb-3 " style={{minHeight:"50vh",justifyContent:'center',alignItems:'center',flexWrap:'wrap',gap:'30px'}}>
     {val.length === 0 ?<img src="https://cdn.mos.cms.futurecdn.net/PuXipAW3AXUzUJ4uYyxPKC-1200-80.jpg" alt="" style={{width:'100%',borderRadius:'10px'}} /> : val?.map((item, index) => (
         <Card  key={index} sx={{ maxWidth: 345 }}>
         <CardActionArea>
           <CardMedia
             component="img"
             height="140"
             image={item.image}
             alt="green iguana"/>
           <CardContent>
             <Typography gutterBottom variant="h6" component="div">
              <Typography variant="caption">name:</Typography>  {item.name}
              <br />
              <Typography variant="caption">age:</Typography>  {item.age}
             </Typography>
             <Typography variant="body2" color="text.secondary">
             {item.text}
             </Typography>
           </CardContent>
         </CardActionArea>
       </Card>
      ))}
    </div>
  );
};

export default Gallery;
