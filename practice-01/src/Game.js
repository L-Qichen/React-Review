export const Game = (props) => {
  const { img, title, platform, price } = props.game;
  return (
    <div className='game'>
      <img src={img} alt={title} />
      <h1>{title}</h1>
      <p>{platform}</p>
      <p>{price}</p>
    </div>
  )
}