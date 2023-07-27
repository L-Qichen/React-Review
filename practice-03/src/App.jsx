import { UseEffectBasic } from './UseEffectBasic'
import { UseEffectMulti } from './UseEffectMulti'
import { UseEffectFetch } from './UseEffectFetch'

function App() {
  return (
    <>
      <div className='container'>
        <h1>Practice-03</h1>
        <UseEffectBasic />
        <UseEffectMulti />
        <UseEffectFetch />
      </div>
    </>
  )
}

export default App
