import Item from "./Item";

interface List {
  note: string;
  date: string;
  time: string;
  id: number;
}

const List = ({
  listData,
  deleteData,
}: {
  listData: List[];
  deleteData: Function;
}) => {
  return (
    <div className="list">
      {listData.map((item) => {
        const { id, note, date, time } = item;
        return (
          <Item
            id={id}
            note={note}
            date={date}
            time={time}
            deleteData={deleteData}
          />
        );
      })}
    </div>
  );
};

export default List;
