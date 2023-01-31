import React, { useState } from "react";
import "./review.css";
import { useRef, useTransition, useEffect } from "react";

export const Review = () => {
  let transition = useTransition();
  let isAdding =
    transition.state === "submitting" &&
    transition.submission.formData.get("_action") === "create";

  const inputRef = useRef();
  const [comments, setComments] = useState('');

  let name;

  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
  };

  const handleClick = () => {
    const added = inputRef.current.value;
    setComments(added);
    console.log(comments);
  };
  return (
    <>
      <div className="comment">
        <form onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            type="text"
            placeholder="Comment"
            className="commentBar"
          ></input>
          <button
            className="btn btn-danger btn-block"
            onClick={()=> setComments(inputRef.current.value)}
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="submit-btn"></div>
      <div>{comments}</div>
    </>
  );
};
