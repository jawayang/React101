const Item = ({
  id,
  note,
  date,
  time,
  deleteData,
}: {
  id: number;
  note: string;
  date: string;
  time: string;
  deleteData: Function;
}) => {
  const deleteItem = () => {
    deleteData((prev: any[]) => {
      return prev.filter((item) => item.id !== id);
    });
  };

  return (
    <div className="item">
      <div>
        <p>{note}</p>
        <p>{`${date} ${time}`}</p>
      </div>
      <button className="remove" onClick={deleteItem}>
        刪除
      </button>
    </div>
  );
};
export default Item;
