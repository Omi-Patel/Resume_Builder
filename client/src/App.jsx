import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
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
          <Route
            path="/profile/:userId"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

          <Route
            path="/create-resume"
            element={
              <ProtectedRoute>
                <Layout>
                  <CreateResume />
                </Layout>
              </ProtectedRoute>
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
          <Route
            path="/signin"
            element={
              <ProtectedRouteForAuth>
                <Signin />
              </ProtectedRouteForAuth>
            }
          />
          <Route
            path="/signup"
            element={
              <ProtectedRouteForAuth>
                <Signup />
              </ProtectedRouteForAuth>
            }
          />
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
          theme="colored"
          transition={Bounce}
        />
        <Footer />
      </Router>
    </>
  );
}

export default App;

export const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  if (token) {
    return children;
  } else {
    return <Navigate to={"/signin"} />;
  }
};

export const ProtectedRouteForAuth = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return children;
  } else {
    return <Navigate to={"/"} />;
  }
};
