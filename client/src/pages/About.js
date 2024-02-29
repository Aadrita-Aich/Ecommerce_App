import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={'About Us'}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img 
            src="/images/contactus.jpeg"
            alt="aboutus"
            style={{ width: "75%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            text
            |
            |
            |
            |
            |
            text
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;