import { useState, useRef } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

function App() {
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const addItem = (author, content, emotion) => {
    const created_date = new Date();

    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    setData([newItem, ...data]);

    dataId.current++;
  };

  const removeItem = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const modifyItem = (modifyId, modifiedContent) => {
    // data 배열의 각 객체중에 수정버튼을 누른 id와 같은 객체를 찾아서
    // content의 value를 modified로 변경 후 다시 data에 넣어줌
    setData(
      data.map((it) =>
        it.id === modifyId ? { ...it, content: modifiedContent } : it
      )
    );
  };

  return (
    <div className="App">
      <DiaryEditor addItem={addItem} />
      <hr width="80%" />
      <DiaryList
        diaryList={data}
        removeItem={removeItem}
        modifyItem={modifyItem}
      />
    </div>
  );
}

export default App;
