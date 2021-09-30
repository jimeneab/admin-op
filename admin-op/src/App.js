import './styles/app.css'
import './styles/components.css'
import AppRouter from './routers/AppRouter';

function App() {
  return (
    <div className="App">
      <section className='main-content'>
        <AppRouter/>
      </section>
    </div>
  );
}

export default App;
