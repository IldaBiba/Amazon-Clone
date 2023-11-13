import React, { useEffect, useState } from "react";

import axios from "axios";
function Row(props) {
  const [storeItems, UpdateStoreItems] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(props.fetchUrl);
      UpdateStoreItems(request.data);
      console.log(request.data);
      return request;
    }
    fetchData();
  }, [props.fetchUrl]);
  function displayItem(item) {
    return <img src={item.image} alt="" key={item.id} />;
  }
  return (
    <div>
      <h2 className="heading">{props.heading}</h2>
      <div className="row flex">{storeItems.map(displayItem)}</div>
    </div>
  );
}

export default Row;
