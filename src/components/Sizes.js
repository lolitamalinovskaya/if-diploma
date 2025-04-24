import React from "react";
import '../styles/components/PageItems.css';
import {match} from "@reach/router/lib/utils";

export default function Sizes({sizes}) {
  const items = (sizes || []).flatMap((e) => e.split(',')).map((e, index) => <p key={index} className="page_size_item">{e.trim()}</p>)
  return (
      <div className="page_size_container">
        {items}
      </div>
  )
}
