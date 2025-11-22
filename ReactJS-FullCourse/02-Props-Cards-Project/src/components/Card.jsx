const Card = (props) => {
  return (
    <div className="card">
      <img src={props.img} alt="" />
      <h1>{props.user}, {props.age}</h1>
      <p>{props.bio}</p>
      <button>Follow</button>
    </div>
  )
}

export default Card