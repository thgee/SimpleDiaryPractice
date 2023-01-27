import { useState, useRef } from "react";

const DiaryEditor = ({ addItem }) => {
  const authorInput = useRef();
  const contentInput = useRef();

  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: "😄",
  });

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value, // 객체의 괄호표기법 이용
    });
  };

  const handleSubmit = () => {
    if (state.author.length <= 0) {
      authorInput.current.focus();
      return;
    }

    if (state.content.length <= 0) {
      contentInput.current.focus();
      return;
    }

    addItem(state.author, state.content, state.emotion);
    setState({ author: "", content: "", emotion: "😄" });
  };

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          ref={authorInput}
          name="author"
          value={state.author}
          onChange={handleChangeState}
          placeholder="작성자"
        />
      </div>
      <div>
        <textarea
          ref={contentInput}
          name="content"
          value={state.content}
          onChange={handleChangeState}
          placeholder="일기"
        ></textarea>
      </div>
      <div>
        <span>오늘의 기분 </span>
        <select
          name="emotion"
          value={state.emotion}
          onChange={handleChangeState}
        >
          <option value={"😄"}>😄</option>
          <option value={"😢"}>😢</option>
          <option value={"😡"}>😡</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>일기 저장하기</button>
      </div>
    </div>
  );
};
export default DiaryEditor;
