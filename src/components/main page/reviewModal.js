import React from "react";
import "./modal.css";
import { useRef, useState } from "react";

export const ReviewModal = ({ handleClose, show, children }) => {
  const showHideClassname = show ? "modal display-block" : "modal display-none";

  const inputRef = useRef(null);
  const [comments, setComments] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
  };

  const handleClick = () => {
    const added = inputRef.current.value;
    var newArr = comments.slice();
    newArr.push(added);
    setComments({ comments: newArr });
    console.log(comments);
  };

  return (
    <>
      <div className={showHideClassname}>
        <section className="modal-main">
          <div className="modal-title">
            <h4>
              LEAVE FEEDBACK{" "}
              <button
                className="btn btn-outline-secondary btn-sm border-0"
                onClick={handleClose}
              >
                <i className="fa fa-remove"></i>
              </button>
            </h4>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <input
                ref={inputRef}
                type="text"
                placeholder="Comment"
                className="modal-comment"
              ></input>
              <button
                className="btn btn-danger btn-block"
                onClick={() => handleClick()}
                type="submit"
              >
                Submit
              </button>
              {/* {comments} */}
            </form>
          </div>
        </section>
      </div>
    </>
  );
};
