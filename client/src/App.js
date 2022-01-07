import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect, Fragment } from 'react'
import Axios from "axios";
import UserContext from "./context/UserContext";
import ComponentTest from './ComponentTest';
import PublicRoute from './router/PublicRoute'
import Home from "./frontendsite/layouts/Home";
import MemberBoard from "./frontendsite/layouts/MemberBoard";
import 'bootstrap/dist/css/bootstrap.min.css';
import IndividualMember from "./frontendsite/layouts/IndividualMember";
import Dashboard from "./adminpanel/layouts/Dashboard/Dashboard";
import ManageMember from "./adminpanel/layouts/Manage/ManageRoles";
import CreateMember from "./adminpanel/layouts/Members/CreateMember";
import ManagePosts from "./adminpanel/layouts/Post/ManagePosts";
import CreateNewPost from "./adminpanel/layouts/Post/CreateNewPost";
import Categories from "./adminpanel/layouts/Post/Categories";
import ChangeAvailability from "./adminpanel/layouts/Profile/ChangeAvailability";
import CaseStudy from './frontendsite/layouts/CaseStudy'
import About from "./frontendsite/layouts/About";



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
            <Route path="/a" element={<CaseStudy/>} />
            <Route path="/about-us" element={<About/>} />
            <Route path="/our-members" element={<MemberBoard/>} />
            <Route path="/members/12345" element={<IndividualMember/>} />
            <Route path="/" element={<Home />} />
            <Route path="/admin/members/" element={<ManageMember />} />
            <Route path="/admin/members/new" element={<CreateMember />} />
            <Route path="/admin/posts/" element={<ManagePosts />} />
            <Route path="/admin/posts/new" element={<CreateNewPost />} />
            <Route path="/admin/categories/" element={<Categories />} />
            <Route path="/admin/categories/" element={<Categories />} />
            <Route path="/admin/availability/" element={<ChangeAvailability />} />
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
