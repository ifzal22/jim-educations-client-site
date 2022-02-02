import React from 'react';
import Admition from '../Admitions/Admition';
import Branch from '../Branch/Branch';
import Contach from '../Contach/Contach';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';
import Student from '../Student/Student';
import TEacher from '../Teacher/TEacher';
import TeacherShow from '../TeacherShow/TeacherShow';
import Banner from './Banner/Banner';
import Header from './Header/Header';

const Home = () => {
    return (
        <div>
       <Header></Header>
<Banner></Banner>
<Branch></Branch>
<Admition></Admition>
<TEacher></TEacher>
<TeacherShow></TeacherShow>

<Services></Services>
<Student></Student>
<Contach></Contach>
<Footer></Footer>

        </div>
    );
};

export default Home;