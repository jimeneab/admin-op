import './styles/app.css'
import './styles/components.css'
import AppRouter from './routers/AppRouter';
import AuthProvider from './Auth/AuthProvider';

function App() {
  return (
    <div className="App">
      <section className='main-content'>
        <AuthProvider>
          <AppRouter/>
        </AuthProvider>
      </section>
    </div>
  );
}

export default App;
