import DiaryItem from "./DiaryItem";

const DiaryList = ({ diaryList, removeItem, modifyItem }) => {
  return (
    <div className="DiaryList">
      <h2>일기 리스트</h2>
      <h4>{diaryList.length}개의 일기가 있습니다</h4>
      <div>
        {
          diaryList.map((it) => {
            return (
              <DiaryItem
                removeItem={removeItem}
                modifyItem={modifyItem}
                key={it.id}
                {...it}
              />
            );
          }) // 객체의 스프레드를 이용하여 diaryList의 객체 전달
        }
      </div>
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [], // prop으로 빈 배열이 넘어올 경우 length함수를 사용할 수 없어 생기는 오류를 방지
};
export default DiaryList;
