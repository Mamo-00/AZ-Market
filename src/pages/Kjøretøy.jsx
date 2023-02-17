/* > Cars
- Mercedes
- Audi
- Peugeot
- Ford
- Bugatti
- Mclaren

> RV
- Adria
- Bürstner
- Carthago
- Challenger
- Hymer
- Rapido

> Camping wagon
- Adria
- KABE
- Bürstner
- Dethleffs
 */

import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";
import {
  MDBContainer,
  MDBRow
} from "mdb-react-ui-kit";

import { fetchFromAPI } from "../utils/fetchFromAPI";

const Kjøretøy = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetchFromAPI('products/list')
      .then((data) => setProduct(data.info.products))
  }, []);

  return (
    <div>
      <header>
        <Navbar />
      </header>

      <div className="d-flex">
        <Sidebar className="float-start" />
        <MDBContainer fluid className="my-5" >
          <MDBRow >  
            {product?.map((item, index) => (
                <Card 
                  key={index}
                  img={item?.goods_img}
                  title={item?.goods_name}
                  priceBefore={item?.retailPrice.amount}
                  priceAfter={item?.salePrice.amount}
                  stock={item?.stock}
                />
            ))}
          </MDBRow>
        </MDBContainer >
      </div>
    </div>
  );
};

export default Kjøretøy;