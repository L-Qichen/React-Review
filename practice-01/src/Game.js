export const Game = (props) => {
  const { img, title, platform, price, id } = props.game;
  return (
    <div className='game'>
      <img src={img} alt={title} />
      <h1>{title}</h1>
      <p>{platform}</p>
      <p className="price">{price}</p>
      <div className="rank">
        <p>#{id + 1}</p>
      </div>
      <div className="triangle"></div>
    </div>
  )
}