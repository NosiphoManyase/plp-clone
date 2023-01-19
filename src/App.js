import './App.css';
import Footer from './Components/Footer/Footer';
import Navigation from './Components/Navigation/Navigation';
import Products from './Components/Products/Products';
import Sidebar from './Components/Sidebar/Sidebar'
import delivery from './assets/delivery.png'
import './main_styles.scss'

function App() {
  return (
    <div className="App">
      <div className='check-delivery'>
        <img src={delivery} alt=''/>
        <p>Latest delivery info. Track your order.</p>
      </div>
      <Navigation />
      <div className='main-content'>
        <Sidebar/>
        <Products />
      </div>
      <Footer />
    </div>
  );
}

export default App;
