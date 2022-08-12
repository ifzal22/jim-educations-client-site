import React from "react";
import Admition from "../Admitions/Admition";
import Blog1 from "../Blogs/Blog1";
import Branch from "../Branch/Branch";
import Contach from "../Contach/Contach";
import Footer from "../Footer/Footer";
import PublishResult from "../Publish/PublishResult/PublishResult";
import Services from "../Services/Services";
import Student from "../Student/Student";
import TeacherShow from "../TeacherShow/TeacherShow";
import Banner from "./Banner/Banner";
import Header from "./Header/Header";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Branch></Branch>
      <Admition></Admition>

      <TeacherShow></TeacherShow>
      <PublishResult></PublishResult>
      <Services></Services>
      <Student></Student>
      <Blog1></Blog1>
      <Contach></Contach>
      <Footer></Footer>
    </div>
  );
};

export default Home;
