import React, { useEffect, useState } from "react";
import cards from "../data/cards";

export default function BusinessCard(props) {
  console.log(props);
  const { company, team, name, phoneNumber, email } = props.info;
  return (
    <div>
      <div>회사:{company}</div>
      <div>회사:{team}</div>
      <div>회사:{name}</div>
      <div>회사:{phoneNumber}</div>
      <div>회사:{email}</div>
    </div>
  );
}
