import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import BiddingPage from './pages/BiddingPage.jsx';
import DebuggingPage from './pages/DebuggingPage.jsx';
import QuestionPage from './pages/QuestionPage.jsx';
import ChoosePhasePage from './pages/ChoosePhasePage.jsx';
import OwnedCodesPage from './pages/OwnedCodesPage.jsx';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path="/register" element={<RegisterPage/>} />
                <Route path='/choosephase' element={<ChoosePhasePage/>}/>
                <Route path="/bidding" element={<BiddingPage/>} />
                <Route path='/ownedcodes' element={<OwnedCodesPage/>} />
                <Route path="/debugging" element={<DebuggingPage/>} />
               {/* <Route path="/question" element={<QuestionPage/>}*/}
             </Routes>
        </Router>
    );
};

export default AppRouter;
