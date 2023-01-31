import React, { useState } from "react";
import "./comments.css";
import {ReviewModal} from './reviewModal'

export const Comments = () => {
  const [show, setShow] = useState(false);

  
  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };
  return (
    <>
      <h1>Feedbacks</h1>
      <div className="feedback-table">
        <table className="table">
          <thead>
            <tr>
              <th>Rating</th>
              <th>
                <ReviewModal show={show} handleClose={hideModal}><p>Modal</p></ReviewModal>
                <button
                  className="btn btn-outline-secondary shadow-none leave-feedback-btn"
                  onClick={showModal}
                >
                  Leave feedback
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>company</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
