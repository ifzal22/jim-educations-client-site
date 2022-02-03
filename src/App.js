import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthProvider from './Components/Context/AuthProvider';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register/Register';
import PublishResultAll from './Components/Publish/PublishResultAll/PublishResultAll';
import ServiceDetail from './Components/Services/ServiceDetail/ServiceDetail';
import ServicesAll from './Components/Services/ServicesAll/ServicesAll';
import TeacherShow from './Components/TeacherShow/TeacherShow';


function App() {
  return (
    <div className="">
    <AuthProvider>

<Router>


<Routes>
<Route path="/home" element={<Home/>}>

</Route>
<Route path="/" element={<Home/>}></Route>

<Route path="/services" element={<ServicesAll></ServicesAll>}></Route>
<Route path="resultAll" element={<PublishResultAll></PublishResultAll>}></Route>

<Route path={`/services/:ID`} element={<ServiceDetail></ServiceDetail>}></Route>



<Route path="/teacher" element={<TeacherShow></TeacherShow>}></Route>

<Route path="/login" element={<Login/>}></Route>
<Route path="/register" element={<Register/>}></Route>
</Routes>




  
</Router>




    </AuthProvider>
    </div>
  );
}

export default App;
