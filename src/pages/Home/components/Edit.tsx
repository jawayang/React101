import { useState } from "react";
import { v4 } from "uuid";

const Edit = ({ add }: { add: (v: any) => void }) => {
  const [date, setDate] = useState("");
  const dateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  const [time, setTime] = useState("");
  const timeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTime(e.target.value);
  };

  const [note, setNote] = useState("");
  const noteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNote(e.target.value);
  };

  const addItem = () => {
    add((prev: any) => {
      return [{ id: v4(), note, date, time },...prev];
    });
  };

  return (
    <div>
      <h1>備忘錄</h1>
      <p>記事</p>
      <input type="text" value={note} onChange={noteChange} />
      <p>日期</p>
      <input type="date" value={date} onChange={dateChange} />
      <p>時間</p>
      <input type="time" value={time} onChange={timeChange} />
      <button onClick={addItem} className="add">
        新增
      </button>
    </div>
  );
};
export default Edit;
