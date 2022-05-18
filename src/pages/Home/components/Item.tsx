const Item = ({note,date,time}:{note:string,date:string,time:string})=>{
  return  <div className="item">
    <div>
    <p>{note}</p>
      <p>{`${date} ${time}`}</p>
    </div>
    <button className="remove">刪除</button>  
  </div>
}
export default Item
