import './App.css';
import { Container, Nav, Navbar, NavLink } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Routes, Route, BrowserRouter, Link } from "react-router-dom"
import SignIn from './components/Auth/SignIn/SignIn';
import SignUp from './components/Auth/SignUp/SignUp';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import TermsOfUse from './components/TermsOfUse/TermsOfUse';
import Contact from './components/Contact/Contact';
import SkillsList from './components/Skills/SkillsList/SkillsList';
import RemindPassword from './components/Auth/RemindPassword/RemindPassword';
import NewPassword from './components/Auth/NewPassword/NewPassword';
import ConfirmAccount from './components/Auth/ConfirmAccount/ConfirmAccount';
import RecruitmentList from './components/Recruitments/RecruitmentList/RecruitmentList';
import { useState } from 'react';
import RecruitmentDetails from './components/Recruitments/RecruitmentDetails/RecruitmentDetails';
import CreateRecruitment from './components/Recruitments/CreateRecruitment/CreateRecruitment';
import EditRecruitment from './components/Recruitments/EditRecruitment/EditRecruitment';
import CreateCandidate from './components/Candidates/CreateCandidate/CreateCandidate';
import CandidateList from './components/Candidates/CandidateList/CandidateList';
import InterviewList from './components/Interviews/InterviewList/InterviewList';

function App() {
  const [headerExpanded, setHeaderExpanded] = useState(false);
  const [footerExpanded, setFooterExpanded]= useState(false);

  return (
    <div style={{ marginTop: "70px", marginBottom: "70px" }}>
      <Navbar expanded={headerExpanded} expand="lg" bg='dark' variant='dark' fixed="top">
        <Container fluid>
          <Navbar.Brand>
            <Link to={"/"}>
              <img src={process.env.PUBLIC_URL + '/images/Logo.png'} alt='' height="36"></img>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={e => setHeaderExpanded(!headerExpanded)} />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <ul className='navbar-nav'>
              <li className="nav-item" onClick={e => setHeaderExpanded(false)}>
                <Link to={"/SignIn"} className="nav-link">Sign in</Link>
              </li>
              <li className="nav-item" onClick={e => setHeaderExpanded(false)}>
                <Link to={"/Skills"} className="nav-link">Skills</Link>
              </li>
              <li className="nav-item" onClick={e => setHeaderExpanded(false)}>
                <Link to={"/ResetPassword"} className="nav-link">Reset password</Link>
              </li>
              <li className="nav-item" onClick={e => setHeaderExpanded(false)}>
                <Link to={"/ConfirmAccount"} className="nav-link">Confirm account</Link>
              </li>
              <li className="nav-item" onClick={e => setHeaderExpanded(false)}>
                <Link to={"/Recruitments"} className="nav-link">Recruitments</Link>
              </li>
              <li className="nav-item" onClick={e => setHeaderExpanded(false)}>
                <Link to={"/Interviews"} className="nav-link">Interviews</Link>
              </li>
            </ul>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Navbar expanded={footerExpanded} expand="lg" bg='dark' variant='dark' fixed="bottom">
        <Container fluid>
          <Navbar.Toggle aria-controls="responsive-footer-nav" onClick={e=>setFooterExpanded(!footerExpanded)}/>
          <Navbar.Collapse id='responsive-footer-nav'>
            <ul className='navbar-nav'>
              <li className="nav-item" onClick={e => setFooterExpanded(false)}>
                <Link to={"/Terms"} className="nav-link">Terms</Link>
              </li>
              <li className="nav-item" onClick={e => setFooterExpanded(false)}>
                <Link to={"/Privacy"} className="nav-link">Privacy</Link>
              </li>
              <li className="nav-item" onClick={e => setFooterExpanded(false)}>
                <Link to={"/Contact"} className="nav-link">Contact</Link>
              </li>
            </ul>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <Routes>
          <Route exact path={"/SignIn"} element={<SignIn />} />
          <Route exact path={"/SignUp"} element={<SignUp />} />
          <Route exact path={"/RemindPassword"} element={<RemindPassword />} />
          <Route exact path={"/ResetPassword"} element={<NewPassword />} />
          <Route exact path={"/ConfirmAccount"} element={<ConfirmAccount />} />

          <Route exact path={"/Privacy"} element={<PrivacyPolicy />} />
          <Route exact path={"/Terms"} element={<TermsOfUse />} />
          <Route exact path={"/Contact"} element={<Contact />} />

          <Route exact path={"/Skills"} element={<SkillsList />} />

          <Route exact path={"/Recruitments"} element={<RecruitmentList/>}/>
          <Route exact path={"/RecruitmentDetails"} element={<RecruitmentDetails/>}/>
          <Route exact path={"/Recruitments/Create"} element={<CreateRecruitment/>}/>
          <Route exact path={"/Recruitments/Edit"} element={<EditRecruitment/>}/>

          <Route exact path={"/Candidate/Create"} element={<CreateCandidate/>}/>
          <Route exact path={"/Candidates"} element={<CandidateList/>}/>

          <Route exact path={"/Interviews"} element={<InterviewList/>}/>
        </Routes>
      </Container>
    </div>
  );
}

export default App;
