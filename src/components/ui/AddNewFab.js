import React from "react";
import { useDispatch } from "react-redux";
import { uiOpenModal } from "../../actions/actions";

export const AddNewFab = () => {
  const dispatch = useDispatch();
  const handleClickBtn = () => {
    dispatch(uiOpenModal());
  };

  return (
    <button className="btn btn-primary fab" onClick={handleClickBtn}>
      <i className="fas fa-plus"></i>
    </button>
  );
};
