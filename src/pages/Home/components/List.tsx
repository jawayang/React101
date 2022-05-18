import Item from "./Item";

interface List {
  note: string;
  date: string;
  time: string;
}

const List = ({
  listData,
  deleteData,
}: {
  listData: List[];
  deleteData: List[];
}) => {
  return (
    <div className="list">
      {listData.map((item) => {
        const { note, date, time } = item;
        return (
          <Item note={note} date={date} time={time} deleteData={deleteData} />
        );
      })}
    </div>
  );
};

export default List;
