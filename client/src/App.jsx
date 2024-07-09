import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Navbar from "./components/nav/Navbar";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Singup";
import About from "./components/about/About";
import Profile from "./components/profile/Profile";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
import CreateResume from "./components/resume/CreateResume";
import PersonalInfo from "./components/resume/PersonalInfo";
import Education from "./components/resume/Education";
import Experience from "./components/resume/Experience";
import Projects from "./components/resume/Projects";
import Skills from "./components/resume/Skills";
import Review from "./components/resume/Review";
import Layout from "./components/resume/Layout";

import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />

          <Route
            path="/create-resume"
            element={
              <Layout>
                <CreateResume />
              </Layout>
            }
          />
          <Route
            path="/create-resume/personal-info"
            element={
              <Layout>
                <PersonalInfo />
              </Layout>
            }
          />
          <Route
            path="/create-resume/education"
            element={
              <Layout>
                <Education />
              </Layout>
            }
          />
          <Route
            path="/create-resume/experience"
            element={
              <Layout>
                <Experience />
              </Layout>
            }
          />
          <Route
            path="/create-resume/projects"
            element={
              <Layout>
                <Projects />
              </Layout>
            }
          />
          <Route
            path="/create-resume/skills"
            element={
              <Layout>
                <Skills />
              </Layout>
            }
          />

          <Route path="/review" element={<Review />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <ToastContainer
          position="bottom-right"
          autoClose={1500}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
        <Footer />
      </Router>
    </>
  );
}

export default App;
