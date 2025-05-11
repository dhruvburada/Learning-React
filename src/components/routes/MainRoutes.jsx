import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

import React from 'react'
import Home from "../learning-router/Home";
import Header from "../learning-router/Header";
import Contact from "../learning-router/Contact";
import About from "../learning-router/About";
import User from "../learning-router/User";
import Github from "../learning-router/Github";
import { githubInfoLoader } from "../learning-router/loaders/GithubInfoLoader";
import  Jokes  from "../learning-router/Jokes";
import Login from "../ContextAPIDemo/Login";
import Demo from "../ContextAPIDemo/Demo"

const MainRoutes = () => {
    let routes = createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<Header/>} >
            <Route index path="" element={<Home/>} /> 
            <Route path="contact" element={<Contact/>} />  
            <Route path="about" element={<About/>} />
            <Route path="users/:username" element={<User/>} />
            <Route path="github" loader={githubInfoLoader} element={<Github/>} />
            <Route path="jokes" element={<Jokes/>}/>
            <Route path="login" element={<Login/>} />
            <Route path="dashboard" element={<Demo/>} />
        </Route>
        
    ))
  return (
    <RouterProvider router={routes}/>
  )
}

export default MainRoutes;

