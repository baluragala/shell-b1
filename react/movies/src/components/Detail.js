import React, { Component } from "react";

function Detail(props) {
  function back() {
    props.history.goBack();
  }

  return (
    <div>
      <h1>Detail {props.match.params.id}</h1>
      <button onClick={() => props.history.push("/movies")}>movies</button>
      <button onClick={back}>go back</button>
    </div>
  );
}

export default Detail;
