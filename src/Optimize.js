import React, { useState, useEffect } from "react";

const Textview = ({ text }) => {
  useEffect(() => {
    console.log("Textview 리렌더");
  });
  return <div>{text}</div>;
};

const Countview = ({ count }) => {
  useEffect(() => {
    console.log("Countview 리렌더");
  });

  return <div>{count}</div>;
};

const Optimize = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  return (
    <div style={{ padding: 50 }}>
      <div>
        <h2>Count</h2>
        <Countview count={count} />
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
      </div>
      <div>
        <h2>Text</h2>
        <Textview text={text} />
        <textarea
          onChange={(e) => {
            setText(e.target.value);
          }}
          value={text}
          style={{ height: 100, width: 300 }}
        ></textarea>
      </div>
    </div>
  );
};

export default Optimize;
