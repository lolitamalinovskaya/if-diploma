import React from "react";
import '../styles/components/PageItems.css';


export default function Sizes({sizes}) {
  const items = (sizes || []).flatMap((e) => e.split(',')).map((e) => <p className="page_size_item">{e.trim()}</p>)
  return (
      <div className="page_size_container">
        {items}
      </div>
  )
}