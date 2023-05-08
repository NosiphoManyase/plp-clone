import Footer from './Components/Footer/Footer';
import Navigation from './Components/Navigation/Navigation';
import Products from './Components/Products/Products';
import Sidebar from './Components/Sidebar/Sidebar'
import delivery from './assets/delivery.png'

function App() {
  return (
    <div className="w-[1200px] mx-0 font-display">
      <div className={`w-100 h-[34px] font-semibold text-sm bg-gray-100
      flex justify-center items-center`}>
        <img src={delivery} alt=''/>
        <p className='ml-[6px]'>Latest delivery info. Track your order.</p>
      </div>
      <Navigation />
      <div className='flex mb-15px'>
        <Sidebar/>
        <Products />
      </div>
      <Footer />
    </div>
  );
}

export default App;
