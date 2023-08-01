import { UseEffectBasic } from './UseEffectBasic'
import { UseEffectMulti } from './UseEffectMulti'
import { UseEffectFetch } from './UseEffectFetch'
import UseEffectConditionalRender from './UseEffectConditionalRender'

function App() {
  return (
    <>
      <div className='container'>
        <h1>Practice-03</h1>
        <UseEffectBasic />
        <UseEffectMulti />
        <UseEffectFetch />
        <UseEffectConditionalRender />
      </div>
    </>
  )
}

export default App
