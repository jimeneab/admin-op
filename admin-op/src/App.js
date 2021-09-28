import './styles/app.css'
import './styles/components.css'
import Login from './pages/Login';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import Singup from './pages/Singup';
import NewAccount from './pages/NewAccount';
import NewTeam from './pages/NewTeam';
import NewCustomer from './pages/NewCustomer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <section className='content'>
        <NewCustomer/>
      </section>
      <Footer/>
    </div>
  );
}

export default App;
