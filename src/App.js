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
    // 원래배열에서 해당 id의 일기 삭제 후 data에 재할당
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <DiaryEditor addItem={addItem} />
      <hr width="80%" />
      <DiaryList diaryList={data} removeItem={removeItem} />
    </div>
  );
}

export default App;
