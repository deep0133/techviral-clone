import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Join from "./components/Join";
import News from "./components/News";
import NewsDetail from "./components/NewsDetail";
import Footer from "./components/Footer";
import NoPage from "./components/NoPage";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
function App() {
  const [newsData, setNewsData] = useState([]);

useEffect(()=>{
  console.log( newsData);
},[newsData])

  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home newsData = {newsData} setNewsData = {setNewsData} category="general" />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/workwithus"    element={<Join />} />
        <Route exact path="/general"       element={   <News key ="general"    newsData = {newsData} setNewsData = {setNewsData} category="general" breadcrumb="General" />}      />
        <Route exact path="/technology"    element={   <News key ="technology" newsData = {newsData} setNewsData = {setNewsData} category="technology" breadcrumb="Technology" />}   />
        <Route exact path="/science"       element={   <News key ="science"    newsData = {newsData} setNewsData = {setNewsData} category="science" breadcrumb="Science" />}   />
        <Route exact path="/health"        element={   <News key ="health"     newsData = {newsData} setNewsData = {setNewsData} category="health" breadcrumb="Health" />}   />
        <Route exact path="/business"      element={   <News key ="business"   newsData = {newsData} setNewsData = {setNewsData} category="business" breadcrumb="Business" />} />
        <Route exact path="/sport"         element={   <News key ="sport"    newsData = {newsData} setNewsData = {setNewsData} category="sport" breadcrumb="Sport" />}    />
        <Route exact path="/entertainment" element={   <News key ="entertainment"    newsData = {newsData} setNewsData = {setNewsData} category="entertainment" breadcrumb="Entertainment" />}    />
        <Route exact path="/detail" element={<NewsDetail />}/>
        <Route exact path="*" element={<NoPage/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
