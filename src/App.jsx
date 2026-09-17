import NavBar from './components/common/NavBar'
import TotalGoodsSold from './components/TotalGoodsSold'
import ReceivedVsPurchase from './components/ReceivedVsPurchase'
import GoodsSoldList from './components/GoodsSoldList'
import TotalInventory from './components/TotalInventory'

const App = () => {
  return (
    <div className='flex flex-col h-screen'>
      <div>
        <NavBar/>
      </div>
      <div className='bg-slate-50 flex-1'>
        <div className='max-w-[1280px] mx-auto px-7 py-6'>
          <div className='flex flex-row gap-5'>
            <TotalInventory/>
            <TotalGoodsSold/>
          </div>
          <main className='grid grid-cols-2 items-start gap-6 '>
            <ReceivedVsPurchase/>
            <GoodsSoldList/>
          </main>
        </div>
        
      </div>
    </div>
  )
}
export default App