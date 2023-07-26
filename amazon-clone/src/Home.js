import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home_row">
      <Product
          id="1"
          title="PAPER PLANE DESIGN Birds Painting For Wall Set of 4 Brown Framed Art (BIRDS)"
          price={329}
          rating={4}
          image="https://m.media-amazon.com/images/I/71AR2MFv3IL._SL1500_.jpg"
        />
        <Product
          id="2"
          title="How to Win Friends and Influence People Paperback – 12 October 2020"
          price={99}
          rating={5}
          image="https://m.media-amazon.com/images/I/618XGVFYlwL.jpg"
        />
      </div>
      <div className="home_row">
      <Product
          id="3"
          title="Noise Twist Bluetooth Calling Smart Watch with 1.38 TFT Biggest Display, Up-to 7 Days Battery, 100+ Watch Faces, IP68, Heart Rate Monitor, Sleep Tracking (Jet Black)"
          price={1399}
          rating={4}
          image="https://m.media-amazon.com/images/I/61TapeOXotL._SL1500_.jpg"
        />
        <Product
          id="4"
          title="Dr. Smith | Color Grey - Two Seater- 5x6 Feet - Sofa Cum Bed Jute Fabric Washable Cover with 2 Cushion and 2 Pouffe/Foot Stools"
          price={8499}
          rating={5}
          image="https://m.media-amazon.com/images/I/81xE6A-ffWL._SL1500_.jpg"
        />
        <Product
          id="5"
          title="GM 3060 E-Book 4 + 1 Power Strip Red & White Color 240 Volts with Master Switch, Indicator, Safety Shutter & 4 International sockets, Extension Cord for Home Appliances, Cooler, Laptop,"
          price={449}
          rating={5}
          image="https://m.media-amazon.com/images/I/519RgXY+lRL._SL1500_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="6"
          title="Samsung 138 cm (55 inches) 4K Ultra HD Smart LED TV UA55CU8570ULXL (Titan Grey)"
          price={66990}
          rating={4}
          image="https://m.media-amazon.com/images/I/81pD9JuPrLL._SL1500_.jpg"
        />
        
      </div>
    </div>
  );
}

export default Home;
