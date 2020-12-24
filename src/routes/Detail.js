import React from "react";
import { connect } from "react-redux";

function Detail({ toDo }) {
  console.log({ toDo });
  return (
    <>
      <h1>{toDo.text}</h1>
      <h3>Created at : {toDo.id}</h3>
    </>
  );
}

function mapStateToProp(state, ownProps) {
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  return { toDo: state.find((toDo) => toDo.id === parseInt(id)) };
}
export default connect(mapStateToProp)(Detail);
