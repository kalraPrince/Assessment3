import Dashboard from "./Movies/Dashboard";
import {BrowserRouter as Router, Link, 
  Routes, Route} from 'react-router-dom'
import Login from "./Movies/LogIn";
import Customer from "./Movies/Customer";
import Admin from './Movies/Admin';
function App() {
  return (<div>
    <Router>
   <Routes>
   <Route path="/" element={<Login></Login>} />
   <Route path="/Admin" element={<Admin></Admin>} />
   <Route path="/Customer" element={<Customer></Customer>} />
    </Routes>
   </Router>
  </div>
  );
}

export default App;
