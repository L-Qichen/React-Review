import './FirstExample.css'
let count = 0;
export const FirstExample = () => {
  return (
    <>
      <h3 className='example'>This example shows why we need UseState hook:</h3>
      <div className='main'>
        <h3>{count}</h3>
        <button type='button' onClick={() => {
          count += 1;
          console.log({ count });
        }}>increase</button>
      </div>
    </>
  )
}