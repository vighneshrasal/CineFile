import './App.css';
import { AllRoutes } from './routes/AllRoutes';
import { Header, Footer} from './components';

function App() {
  return (
    <div className="App sticky top-0 z-50">
      <Header/>
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
