import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdmitionAll from './Components/Admitions/AmitionsAll/AdmitionAll';
import AuthProvider from './Components/Context/AuthProvider';
import DashboardHome from './Components/DeashBoard/DashboardHome/DashboardHome';
import DeashBoard from './Components/DeashBoard/DeashBoard';
import ServicesAdd from './Components/DeashBoard/ServicesAdd/ServicesAdd';
import StudentAdd from './Components/DeashBoard/StudentAdd/StudentAdd';
import TeacherAdd from './Components/DeashBoard/TeacherAdd/TeacherAdd';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register/Register';
import PublishResultAll from './Components/Publish/PublishResultAll/PublishResultAll';
import ServiceDetail from './Components/Services/ServiceDetail/ServiceDetail';
import ServicesAll from './Components/Services/ServicesAll/ServicesAll';
import AllStudents from './Components/Student/AllStudents/AllStudents';
import AllTeacher from './Components/TeacherShow/AllTeacher/AllTeacher';
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
<Route path="/resultAll" element={<PublishResultAll></PublishResultAll>}></Route>

<Route path="/DeashBoard" element={<DeashBoard></DeashBoard>}></Route>
<Route exact path="/DeashBoard" element={<DashboardHome></DashboardHome>}></Route>

<Route path={`/services/:ID`} element={<ServiceDetail></ServiceDetail>}></Route>



<Route path="/teacher" element={<TeacherShow></TeacherShow>}></Route>
<Route path="/ALLteacher" element={<AllTeacher></AllTeacher>}></Route>


<Route path={`/DeashBoard/teacherADD`} element={<TeacherAdd></TeacherAdd>}></Route>


<Route path={`/DeashBoard/StudentAdd`} element={<StudentAdd></StudentAdd>}></Route>
<Route path={`/DeashBoard/servicesAdd`} element={<ServicesAdd></ServicesAdd>}></Route>


<Route path="/admitionAll" element={<AdmitionAll></AdmitionAll>}></Route>
<Route path="/AllStudent" element={<AllStudents></AllStudents>}></Route>

<Route path="/login" element={<Login/>}></Route>
<Route path="/register" element={<Register/>}></Route>
</Routes>




  
</Router>




    </AuthProvider>
    </div>
  );
}

export default App;
