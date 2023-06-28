import React, { useEffect } from "react";
import {Button} from "@mui/material";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../states/cardSlice";
import { gatProducts } from "../states/productSlice";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const Home = () => {

  const dispatch = useDispatch();

  const { data: product } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(gatProducts());
    if (product.length === 0) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [dispatch,product]);

  const ADDTOCARD = (items) => {
    dispatch(add(items));
  };
 
 
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
 


  return (
    <>
      <div className="mt-5">
      <h1 className="text-center m-5 pt-5" style={{textTransform:'uppercase'}}>Ths is our shope </h1>
      </div>
      <div
        className="container mt-5 mb-5 d-flex flex-wrap "
        style={{ gap: 20 ,minHeight:'90vh'}}>
   {
     product.length > 0 ? product.map((items) => (
      <Card
        key={items.id}
        style={{ width: "18rem", height: "fit-content",margin:'auto' }}
      >
        <Card.Img
          variant="top"
          src={items.image}
          style={{ height: "250px" }}
        />
        <Card.Body>
          <Card.Title>{items.title.slice(0, 40)}</Card.Title>
          <Card.Text>{items.description.slice(0, 50)}</Card.Text>
          <div className="display:flex;justifyContent:space-between">
            <p>Price {items.price}$</p>
            <p>
              categorys:{" "}
              <span style={{ color: "red" }}>{items.category}</span>
            </p>
          </div>
          <Button variant="contained" onClick={() => ADDTOCARD(items)}>
            ADD TO CARD
          </Button>
        </Card.Body>
      </Card>
    )) :<h1 className="text-center">Pleace wait...</h1>


   }
         
        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}>
        <CircularProgress color="inherit" />
      </Backdrop>
      </div>
    </>
  );
};

export default Home;
