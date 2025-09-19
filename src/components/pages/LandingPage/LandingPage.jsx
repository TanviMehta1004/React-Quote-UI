// import jsonData from '../../../data/AppData.json';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../../../store/useUserStore';

const LandingPage = () => {
  const navigate = useNavigate();

  const startQuote = () => {
    // Logic to start the quote process
    console.log("Quote process started");
    HandleLoginSuccess();
  }

const HandleLoginSuccess = async() => {
  const response = await fetch('../../data/AppData.json');
  const jsonData = await response.json();
  const setUserData = useUserStore((state) => state.setUserData);
  setUserData(jsonData);
  navigate('/property-type');
}

  return (
    <div>
      <label>Select LOB</label>
      <select>
        <option value="Auto">Auto</option>
        <option value="Home">Home</option>
        <option value="Renters">Renters</option>
        <option value="Condo">Condo</option>
        <option value="Life">Life</option>
        <option value="Business">Business</option>
        <option value="AutoHome">Auto & Home</option>
        <option value="AutoRenters">Auto & Renters</option>
        <option value="AutoCondo">Auto & Condo</option>
      </select>
      <label>Enter Zipcode</label>
      <input type="numeric" maxLength={5} placeholder="Zipcode" />
      <button onClick={startQuote}>Start Quote</button>
    </div>
  );
}

export default LandingPage;