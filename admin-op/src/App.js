import './styles/app.css'
import './styles/components.css'
import Login from './pages/Login';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import Singup from './pages/Singup';
import NewAccount from './pages/NewAccount';
import NewTeam from './pages/NewTeam';
import NewCustomer from './pages/NewCustomer'
import Profile from './pages/Profile';
import Users from './pages/Users';
import Accounts from './pages/Accounts';
import Teams from './pages/Teams';

function App() {
  return (
    <div className="App">
      <Navbar />
      <section className='main-content'>
        <Teams/>
      </section>
      <Footer/>
    </div>
  );
}

export default App;
