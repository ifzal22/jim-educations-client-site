import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthProvider from './Components/Context/AuthProvider';
import Home from './Components/Home/Home';


function App() {
  return (
    <div className="">
    <AuthProvider>

<Router>


<Routes>
<Route path="/home" element={<Home/>}>

</Route>
<Route path="/" element={<Home/>}>

</Route>
</Routes>

  
</Router>




    </AuthProvider>
    </div>
  );
}

export default App;
