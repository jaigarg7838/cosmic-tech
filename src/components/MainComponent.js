import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./HomeComponent";
import { Routes, Route } from "react-router-dom";
import Services from "./ServicesComponent";
import Portfolio1 from "./PortfolioDetails/Portfolio1";
import Portfolio2 from "./PortfolioDetails/Portfolio2";
import Portfolio3 from "./PortfolioDetails/Portfolio3";
import Portfolio4 from "./PortfolioDetails/Portfolio4";
import Portfolio5 from "./PortfolioDetails/Portfolio5";
import Portfolio6 from "./PortfolioDetails/Portfolio6";
import Portfolio7 from "./PortfolioDetails/Portfolio7";
import Blogs from "./BlogsComponent";
import Blog1 from "./BlogsDetail/blog1";
import Blog2 from "./BlogsDetail/blog2";
import Blog3 from "./BlogsDetail/blog3";
import Blog4 from "./BlogsDetail/blog4";
import Blog5 from "./BlogsDetail/blog5";
import Blog6 from "./BlogsDetail/blog6";
import Careers from "./CareersComponent";
import Career1 from "./careerDetails/career1";
import ApplyJob from "./ApplyJobForm";

function Menu() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/career" element={<Careers />}/>
        <Route path="/Portfolio1" element={<Portfolio1 />} />
        <Route path="/Portfolio2" element={<Portfolio2 />} />
        <Route path="/Portfolio3" element={<Portfolio3 />} />
        <Route path="/Portfolio4" element={<Portfolio4 />} />
        <Route path="/Portfolio5" element={<Portfolio5 />} />
        <Route path="/Portfolio6" element={<Portfolio6 />} />
        <Route path="/Portfolio7" element={<Portfolio7 />} />
        <Route path="/Blog1" element={<Blog1 />} />
        <Route path="/Blog2" element={<Blog2 />} />
        <Route path="/Blog3" element={<Blog3 />} />
        <Route path="/Blog4" element={<Blog4 />} />
        <Route path="/Blog5" element={<Blog5 />} />
        <Route path="/Blog6" element={<Blog6 />} />
        <Route path="/Career1/" element={<Career1/>}/>
        <Route path="/ApplyJobForm" element={<ApplyJob/>}/>
      </Routes>
      <Footer />
    </>
  )
}

export default Menu;