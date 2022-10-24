import React from "react";
import WhatsApp from "../components/misc/WhatsApp";



export default function Layout(props) {
  return (
    <>
      {props.children}
      <WhatsApp />
    </>
  );
};
