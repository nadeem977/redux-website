import React from "react";
import { useSelector,useDispatch } from "react-redux";
import {Card} from 'react-bootstrap';
import {remove} from '../states/cardSlice'
import {Button} from '@mui/material'
const Cards = () => {
  const Despatvh = useDispatch()
  const products = useSelector((state) => state.card);

  const removeCard=(id) =>{
    Despatvh(remove(id))
  }
  return (
    <>

    <h1 className="text-center mt-5 pt-5"> Here You Can Add You Items {products.length}</h1>
      <div
        className="container mt-5 mb-5 d-flex flex-wrap "
        style={{ gap: 20 ,minHeight:'90vh'}}
      >
        {products.map((items) => (
          <Card
            key={items.id}
            style={{ width: "18rem", height: "fit-content" }}
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
                <p>Price {items.price}</p>
                <p>
                  categorys:{" "}
                  <span style={{ color: "red" }}>{items.category}</span>
                </p>
              </div>
              <Button color="error" variant="contained"  onClick={()=>removeCard(items.id)}>
               Remove items
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
      
    </>
  );
};

export default Cards;
