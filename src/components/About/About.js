import React from "react";
import { useParams } from "react-router-dom";

const About = () => {
  let params = useParams();
  return <p>{JSON.stringify({ params })}</p>;
};

export default About;
