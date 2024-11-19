import Routing from './components/Routing/Routing'
import './App.css'
import CoinContextProvider from './context/CoinContextProvider'


function App() {


  return (
   <>
    <CoinContextProvider>
      <Routing />
    </CoinContextProvider>
   </>
  )
}

export default App
