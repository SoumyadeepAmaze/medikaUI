import React from "react";
import product1 from "../assets/Product1.jpg";
import product2 from "../assets/Product2.jpg";
import product3 from "../assets/Product3.jpg";
import arrowright from "../assets/arrowright.png";
import { useNavigate } from "react-router";
import { BsChevronDown } from "react-icons/bs";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useStyles } from './Products.styles';

function Products() {
  const navigate = useNavigate();

  const products = [
    {
      image: product1,
      name: "Ivoclar Vivadent",
      route: "/p1",
      price: "$599",
    },
    {
      image: product2,
      name: "Wallmount X-Ray",
      route: "/p2",
      price: "$999",
    },
    {
      image: product2,
      name: "Wallmount X-Ray",
      route: "/p2",
      price: "$999",
    },
    {
      image: product3,
      name: "Being Foshan Contra...",
      route: "/p3",
      price: "$899",
    },
  ];
  const classes = useStyles();
  return (
    <div className="products-container mx-3 py-3">
      <div className="container">
        <div className="title-container">
        <h2>Popular</h2>
        <h3 className="see-all">see all <img src={arrowright} alt="arrow-right" className="arrow-right"/></h3>
        </div>
        <div className="products">
          {products.map(({ image, name, price,route }, index) => {
            return (
              <Card className={classes.cardContainer}>
              <CardMedia
                component="img"
                height="149"
                image={image}
                alt={name}
                class="padding-image"
                onClick={() => navigate(route)}
              />
              <CardContent 
              class="card-content-align"
              >
                <Typography gutterBottom variant="h6" component="div" 
                class="name-align"
                   >
                  {name}
                </Typography>
                <Typography variant="body2"
                class="cost-align"
                >
                  {price}
                </Typography>
              </CardContent>
              
            </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Products;
