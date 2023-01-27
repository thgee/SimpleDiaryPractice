import { useState } from "react";

const DiaryItem = ({
  removeItem,
  author,
  content,
  created_date,
  emotion,
  id,
}) => {
  const [isModify, setIsModify] = useState(false);
  const [modifiedContent, setModifiedContent] = useState(content);

  const handleRemove = () => {
    if (window.confirm(`일기를 삭제할까요?`)) removeItem(id);
  };

  console.log(modifiedContent);
  return (
    <div className="DiaryItem">
      <div className="info">
        <div className="authorAndEmotion">
          작성자 : {author} | 오늘의 기분 {emotion}
        </div>
        <div className="date">{created_date.toLocaleString()}</div>
      </div>
      <div className="content">
        {isModify ? (
          <textarea
            className="modifyBox"
            value={modifiedContent}
            onChange={(e) => setModifiedContent(e.target.value)}
          />
        ) : (
          content
        )}
      </div>

      <div className="buttons">
        {isModify ? (
          <div className="modify_confirm_cancle_button">
            <button
              className="modifyCancle"
              onClick={() => setIsModify(!isModify)}
            >
              취소
            </button>

            <button
              className="modifyConfirm"
              onClick={() => setIsModify(!isModify)}
            >
              완료
            </button>
          </div>
        ) : (
          <div className="remove_modify_button">
            <button className="remove" onClick={handleRemove}>
              삭제
            </button>

            <button className="modify" onClick={() => setIsModify(!isModify)}>
              수정
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DiaryItem;
