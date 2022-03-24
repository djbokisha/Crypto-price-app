import React from "react";

function Coin({
  name,
  rank,
  icon,
  price,
  symbol,
  websiteUrl,
  contractAddress,
}) {
  return (
    <div className="coin">
      <h1>Name: {name} </h1>
      <h1>#{rank}</h1>
      <img src={icon} />

      <h3>Price: {price}</h3>
      <h3>Symbol: {symbol} </h3>
      <h3>Website: {websiteUrl}</h3>
      <p>Contract Addres : {contractAddress}</p>
    </div>
  );
}

export default Coin;
