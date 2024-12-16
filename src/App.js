import './styles/global.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CommentSection from './components/CommentSection';
import Home from './pages/Home';
import Posts from './pages/Posts';
import PostDetail from './pages/PostDetail';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';

function App() {
  /* 
  1. 홈페이지(HOME): 사이트 소개, 서비스 소개
  2. 게시글 목록(POSTS): 게시글 나열, 클릭하면 상세페이지로 이동, 게시글 좋아요 기능
  3. 게시글 상세(POSTDETAIL): 글쓴이 본문 날짜
  4. 404페이지(NOTFOUND): 사용자가 경로를 잘못 입력했을 때
  5. 댓글 기능(COMMENTSECTION): 상세페이지에서 댓글 추가할 수 있음
                추가되었을 때 목록에 나타나고 버튼은 토글된다
  */
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <div className='content'>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/posts" element={<Posts />}/>
          <Route path="/posts/:id" element={<PostDetail />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </div>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
