import React from "react";
import Makecard from "../Components/MakeCard";
import Store from "../Util/fakeStore";
import Row from "../Components/Row";
import BigCard from "../Components/BigCard";
import Banner from "../Components/Banner";
import Layout from "../Layout/Layout";
function MainBody() {
  return (
    <Layout>
      <div>
        <Banner />
        <div className="main flex">
          <Makecard fetchUrl={Store.mensclothing} />
          <Makecard fetchUrl={Store.jewelery} />
          <BigCard image="./banner4.jpg" />

          <Row fetchUrl={Store.womensclothing} heading="Women's Clothing"></Row>
          <Row fetchUrl={Store.mensclothing} heading="Men's Clothing"></Row>
          <Row fetchUrl={Store.electronics} heading="Electronics" />
          <BigCard image="./banner3.jpg" />
          <Makecard fetchUrl={Store.electronics} />
          <Makecard fetchUrl={Store.mensclothing} />
          <Makecard fetchUrl={Store.womensclothing} />
          <BigCard image="./banner5.jpg" />

          <Row fetchUrl={Store.jewelery} heading="Jewelery"></Row>
          <Row fetchUrl={Store.mensclothing} heading="Men Fashion"></Row>
          <BigCard image="./banner6.jpg" />

          <Row fetchUrl={Store.electronics} heading="Computing" />
          <Row fetchUrl={Store.womensclothing} heading="Fashion"></Row>
          <BigCard image="./banner2.jpg" />
        </div>
      </div>
    </Layout>
  );
}

export default MainBody;
