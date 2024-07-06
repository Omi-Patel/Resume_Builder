import React from "react";
import { NavLink } from "react-router-dom";

class Layout extends React.Component {
  render() {
    return (
      <div className="flex">
        <div className="bg-yellow-200 w-[15vw] min-h-screen">
          <div>
            <h1>SIDE BAR</h1>
            <div className="flex flex-col gap-4">
              <NavLink to={"/create-resume/personal-info"}>
                Personal Info
              </NavLink>
              <NavLink to={"/create-resume/education"}>Education</NavLink>
              <NavLink to={"/create-resume/experience"}>Experience</NavLink>
              <NavLink to={"/create-resume/projects"}>Projects</NavLink>
              <NavLink to={"/create-resume/skills"}>Skills</NavLink>
            </div>
          </div>
        </div>
        <main>{this.props.children}</main>
      </div>
    );
  }
}

export default Layout;
