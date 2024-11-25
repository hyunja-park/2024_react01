import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import Header from './components/step01/Header';
import Main from './components/step01/Main';
import Footer from './components/step01/Footer';
import Library from './components/step01/Library';
import Profile from './components/step02/Profile';
import Avatar from './components/step02/Avatar';

import CommentList from './components/step03/CommentList';
import Comment from './components/step03/Comment';
import Welcome from './components/step03/Welcome';

import CourseItem from './components/step04/Courseitem';
import CourseListCard from './components/step04/CourseListCard';
import Item from './components/step05/Item';
import PackingList from './components/step05/PackingList';

import TextList from './components/step06/TextList';
import TextList2 from './components/step06/TextList2';
import TextList3 from './components/step06/TextList3';
import Event01 from './components/step07/Event01';
import Event02 from './components/step07/Event02';


import Count from './components/step08/Count';
import CourseItem08 from './components/step08/CourseItem08';
import CourseListCard08 from './components/step08/CourseListCard08';

// import reportWebVitals from './reportWebVitals';




const root = ReactDOM.createRoot(document.getElementById('root'));
// const items = [
//   {
//     title: '입문자를 위한, HTML&CSS 웹 개발 입문',
//     description: '웹 개발에 필요한 기본 지식을 배웁니다.',
//     image: './img/tree-1.jpg',
//     isFavorite: true
//   },
//   {
//     title: '입문자를 위한, ES6+ 최신 자바스크립트 입문',
//     description: '쉽고! 알찬! 내용을 준비했습니다.',
//     image: './img/tree-2.jpg',
//     isFavorite: false
//   },
//   {
//     title: '포트폴리오 사이트 만들고 배포까지!',
//     description: '포트폴리오 사이트를 만들고 배포해 보세요.',
//     image: './img/tree-3.jpg',
//     isFavorite: true
//   }
// ]
root.render(
  <React.StrictMode>
    {/* <App /> */}

 
    {/* step01    
    <Header />
    <Main />
    <Footer /> */}
    {/* <Library /> */}

    {/* step02 */}
    {/* <Avatar /> */}
    {/* <Profile /> */}
   

    {/* step03 */}
    {/* <Comment /> */}
    {/* <CommentList /> */}
    {/* <Welcome /> */}

    {/* step04 */}
    {/* <CourseItem /> */}
    {/* <CourseListCard /> */}


    {/* step05 */}
    {/* <Item /> */}
    {/* <PackingList /> */}


    {/* step06 */}
    {/* <TextList /> */}
    {/* <TextList2 /> */}
    {/* <TextList3 /> */}
   

    {/* step07 */}
    {/* <Event01 /> */}
    {/* <Event02 /> */}

    {/* step08 */}
    {/* <Count /> */}
    {/* <CourseItem08 /> */}
    {/* <CourseListCard08 /> */}



  </React.StrictMode>
);
reportWebVitals();
