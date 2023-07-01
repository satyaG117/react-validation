import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import RegistrationForm from './components/RegistrationForm';

function App() {
  return (
    <div className='container col-md-6 offset-md-3 border border-info p-3 mt-5'>
      <h1 className='mb-3'>Register</h1>
      <RegistrationForm />
    </div>
  );
}

export default App;
