export const Person = (props) => {
  [name, img, nickName] = props;
  return (
    <div>
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <h6>Nickname:{nickName}</h6>
    </div>
  )
}