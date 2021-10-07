import React from "react";

function FilterButton(props) {
  return (
    <>
      {props.button.map((status, i) => {
        return (
          <button key={i} type="button" onClick={() => props.filter(status)}>
            {status}
          </button>
        );
      })}
    </>
  );
}

export default FilterButton;
