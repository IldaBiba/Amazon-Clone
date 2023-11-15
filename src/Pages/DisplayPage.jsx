import { Link, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { useStateValue } from "../StateProvider";
import Layout from "../Layout/Layout";

function DisplayPage() {
  const [{ basket }, dispatch] = useStateValue();
  const [item, updateItem] = useState([]);
  const [recommends, updateRecommends] = useState([]);
  const itemId = useParams();
  const id = itemId.id;
  const category = itemId.category;

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        `https://fakestoreapi.com/products/category/${category}`
      );
      console.log(request.data);
      updateRecommends(request.data);
      request.data.map((item) => {
        item.id === parseInt(id) && updateItem(item);
      });
      return request;
    }
    fetchData();
  }, [id]);

  //FUNKSIONI PER REKOMANDIMET

  function displayItem(item) {
    return <img src={item.image} alt=" " key={item.id} />;
  }

  return (
    <Layout isHeader={true}>
      <div className="DisplayPage">
        <div className="back_to_amazon">
          <Link to="/">Go Back</Link>
        </div>
        <div className="category"></div>
        <div className="title"></div>
        <div className="flex box">
          <div className="image">
            <img src={item.image} alt=" "></img>
          </div>
          <div className="detail">
            {item.description}
            <div className="price"> Price: {item.price}</div>
            <div>
              <Button className="btn">BUY NOW</Button>
              <Button
                className="btn"
                onClick={() => {
                  console.log(item);
                  dispatch({
                    type: "Add_To_Cart",
                    item: {
                      id: item.id,
                      title: item.title,
                      image: item.image,
                      price: item.price,
                      detail: item.description,
                    },
                  });
                }}
              >
                ADD TO CART
              </Button>
            </div>
          </div>
        </div>
        <br />
        <h3>People also look for</h3>
        {<div className="row flex">{recommends.map(displayItem)}</div>}
      </div>
    </Layout>
  );
}

export default DisplayPage;
