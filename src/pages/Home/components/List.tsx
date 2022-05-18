import Item from './Item'

interface List {
  note: string;
  date: string;
  time: string;
}

const List = ({listData}: {listData: List[]}) => {
  return (
    <div className="list">
    {
      listData.map(item => {
        const {note,date,time} = item
        return <Item note={note} date={date} time={time} />
      })
    }
  </div>
  )
}

export default List