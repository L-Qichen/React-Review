import avatar from '/vite.svg';
export const Person = ({ name, nickName = 'Default', images }) => {
  const img = images?.[0].small?.url || avatar;
  return (
    <div>
      <img src={img} alt={name} style={{ width: '50px' }} />
      <h3>{name}</h3>
      <h6>Nickname:{nickName}</h6>
    </div>
  )
}