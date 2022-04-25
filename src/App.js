import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdmitionsDetails from './Components/Admitions/AdmitionDetails/AdmitionsDetails';
import AdmitionAll from './Components/Admitions/AmitionsAll/AdmitionAll';
import AuthProvider from './Components/Context/AuthProvider';
import AddAdmition from './Components/DeashBoard/AddAdmition/AddAdmition';
import AddResult from './Components/DeashBoard/AddResult/AddResult';
import AdminRoute from './Components/DeashBoard/AdminRoute/AdminRoute';
import DashboardHome from './Components/DeashBoard/DashboardHome/DashboardHome';
import DeashBoard from './Components/DeashBoard/DeashBoard';
import MakeAdmin from './Components/DeashBoard/MakeAdmin/MakeAdmin';
import ServicesAdd from './Components/DeashBoard/ServicesAdd/ServicesAdd';
import StudentAdd from './Components/DeashBoard/StudentAdd/StudentAdd';
import TeacherAdd from './Components/DeashBoard/TeacherAdd/TeacherAdd';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register/Register';
import AllOrder from './Components/OrderPay/Allorder/AllOrder';
import OrderPyment from './Components/OrderPay/OrderPlace/Orderpyment';
import PaymentSSL from './Components/OrderPay/OrderPlace/Payment/PaymentSSL';
import PaymentStripe from './Components/OrderPay/OrderPlace/Payment/PaymentStripe';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import ResultDetails from './Components/Publish/PublishResult/ResultDetails/ResultDetails';
import PublishResultAll from './Components/Publish/PublishResultAll/PublishResultAll';
import ServiceDetail from './Components/Services/ServiceDetail/ServiceDetail';
import ServicesAll from './Components/Services/ServicesAll/ServicesAll';
import AllStudents from './Components/Student/AllStudents/AllStudents';
import AllTeacher from './Components/TeacherShow/AllTeacher/AllTeacher';
import TeacherDetais from './Components/TeacherShow/TeacherDetails/TeacherDetais';
import TeacherShow from './Components/TeacherShow/TeacherShow';






function App() {
  return (
    <div className="">
    <AuthProvider>

<Router>


<Routes>

<Route path="/home" element={<Home/>}></Route>
<Route path="/" element={<Home/>}></Route>

<Route path="/services" element={<ServicesAll></ServicesAll>}></Route>
<Route path="/resultAll" element={<PublishResultAll></PublishResultAll>}></Route>


{/* DEASH-BORD ROUTE */}
<Route path="/DeashBoard" element={ <PrivateRoute> <DeashBoard /></PrivateRoute>}>
  
  
  
<Route path={`/DeashBoard/teacherADD`} element={<TeacherAdd></TeacherAdd>}></Route>

<Route path={`/DeashBoard/AddAdmin`} element={ 
  <AdminRoute> <MakeAdmin></MakeAdmin></AdminRoute>
 }></Route>


<Route path={`/DeashBoard/AddAdmition`} element={<AddAdmition></AddAdmition>}></Route>
<Route path={`/DeashBoard/AddResult`} element={<AddResult></AddResult>}></Route>

<Route path={`/DeashBoard/StudentAdd`} element={<StudentAdd></StudentAdd>}></Route>
<Route path={`/DeashBoard/servicesAdd`} element={<ServicesAdd></ServicesAdd>}></Route>

 </Route>


{/* PAYMENT GETWAY */}
<Route path='/payment-getway' element={<OrderPyment></OrderPyment>}>

<Route path='stripe' element={<PaymentStripe></PaymentStripe>}></Route>
<Route path='ssl' element={<PaymentSSL></PaymentSSL>}></Route>
</Route>


<Route exact path="/DeashBoard" element={<DashboardHome></DashboardHome>}></Route>

<Route path={`/services/:ID`} element={  <PrivateRoute><ServiceDetail></ServiceDetail></PrivateRoute> }></Route>



<Route path={`/admition/:booking`} element={<PrivateRoute><AdmitionsDetails></AdmitionsDetails></PrivateRoute>}>
</Route>

<Route path={`/result/:ID`} element={<PrivateRoute><ResultDetails></ResultDetails></PrivateRoute>}></Route>

<Route path={`/about/:about`} element={<PrivateRoute><TeacherDetais></TeacherDetais></PrivateRoute>}></Route>





<Route path="/teacher" element={<TeacherShow></TeacherShow>}></Route>

<Route path="/ALLteacher" element={ <PrivateRoute><AllTeacher></AllTeacher></PrivateRoute> }></Route>



<Route path="/allOrder"  element={<PrivateRoute><AllOrder></AllOrder> </PrivateRoute>}></Route>

{/* <Route path="/orderPlace" element={<OrderPlace></OrderPlace>}></Route> */}
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
