import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { client, urlFor } from "../lib/client";

const Home = () => {
  const [banner, setBannner] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "product"]`)
      .then((data) => setProducts(data))
      .catch(console.error);
  }, []);

  useEffect(() => {
    client
      .fetch(`*[_type == "banner"]`)
      .then((data) => setBannner(data))
      .catch(console.error);
  }, []);

  console.log(banner);

  return (
    <div>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-6">
              <div className="main-banner position-relative p-4">
                <img
                  src={banner[0] && urlFor(banner[0]?.image)}
                  className="img-fluid rounded-3"
                  alt={banner[0]?.product}
                />
                <div className="main-banner-content position-absolute">
                  <h4>{banner[0]?.desc}</h4>
                  <h5>{banner[0]?.product}</h5>
                  <p>{banner[0]?.price} ლარი</p>
                  <Link className="button">ყიდვა</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-10  justify-content-between h-100">
                <div className="small-banner position-relative ">
                  <img
                    src={banner[1] && urlFor(banner[1]?.image)}
                    className="img-fluid rounded-3"
                    alt={banner[1]?.product}
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>{banner[1]?.desc}</h4>
                    <h5>{banner[1]?.product}</h5>
                    <p>{banner[1]?.price} ლარი</p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src={banner[2] && urlFor(banner[2]?.image)}
                    className="img-fluid rounded-3"
                    alt={banner[2]?.product}
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>{banner[2]?.desc}</h4>
                    <h5>{banner[2]?.product}</h5>
                    <p>{banner[2]?.price} ლარი</p>
                  </div>
                </div>
                <div className="small-banner position-relative ">
                  <img
                    src={banner[3] && urlFor(banner[3]?.image)}
                    className="img-fluid rounded-3"
                    alt={banner[3]?.product}
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>{banner[3]?.desc}</h4>
                    <h5>{banner[3]?.product}</h5>
                    <p>{banner[3]?.price} ლარი</p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src={banner[4] && urlFor(banner[4]?.image)}
                    className="img-fluid rounded-3"
                    alt={banner[4]?.product}
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>{banner[4]?.desc}</h4>
                    <h5>{banner[4]?.product}</h5>
                    <p>{banner[4]?.price} ლარი</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
