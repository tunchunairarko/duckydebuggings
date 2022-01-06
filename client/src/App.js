import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect, Fragment } from 'react'
import Axios from "axios";
import UserContext from "./context/UserContext";
import Home from "./frontendsite/layouts/Home";
import MemberBoard from "./frontendsite/layouts/MemberBoard";
import 'bootstrap/dist/css/bootstrap.min.css';
import IndividualMember from "./frontendsite/layouts/IndividualMember";
import Dashboard from "./adminpanel/layouts/Dashboard/Dashboard";
import CaseStudy from "./frontendsite/layouts/CaseStudy";
import BlogPost from "./frontendsite/layouts/BlogPost";


export default function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  return (
    <Fragment>
      
      <BrowserRouter>
        <UserContext.Provider value={{ userData, setUserData }}>
          <Routes>
            {/*THE FRONT END WEBSITE SECTION*/}
            {/* <Route path="/" element={<PublicRoute restricted={true} component={Home} path="/" exact />} /> */}
            <Route path="/a" element={<Home/>} />
            <Route path="/our-members" element={<MemberBoard/>} />
            <Route path="/members/12345" element={<IndividualMember/>} />
            <Route path="/" element={<BlogPost />} />
            <Route path="/dashboard" element={<Dashboard />} />
            {/* <PublicRoute restricted={true} component={ComponentTest} path="/" exact /> */}
            {/* <PublicRoute restricted={true} component={Home} path="/" exact />
            <PublicRoute restricted={true} component={About} path="/about-us" exact />
            <PublicRoute restricted={true} component={Contact} path="/contact-us" exact />
            <PublicRoute restricted={true} component={MemberBoard} path="/members" exact />
            <PublicRoute restricted={true} component={MemberProfile} path="/members/profile/:profileId" exact /> */}

            {/*THE ADMIN PANEL SECTION*/}
            {/* <PrivateRoute component={Admin} path="/admin/dashboard" exact /> */}

          </Routes>
        </UserContext.Provider>

      </BrowserRouter>
    </Fragment>

    // DEFAULT CODE
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}
