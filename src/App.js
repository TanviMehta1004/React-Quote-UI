import logo from './logo.svg';
import './App.css';
import { useRoutes } from 'react-router-dom';
import router from './Routers';
import AppData from './data/AppData';

function App() {
  console.log("AppData:", AppData);
  const appRoutes = useRoutes(router);
  return appRoutes;
}

export default App;
