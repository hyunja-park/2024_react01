import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Courseitem from './components/Courseitem';
import CourseListCard from './components/course/CourseListCard';

/* function Header() {
  return(
    <header>
      <h2>Header</h2>
    </header>
  );
}
function Footer() {
  return(
    <Footer>
      <h2>Footer</h2>
    </Footer>
  );
}

function Main() {
  return(
    <main>
      <Counter />
    </main>
  );
}
*/

// 파스칼 케이스 사용해야 된다.(첫글자 대문자 단어 첫글자 대문자)
function Counter() {
  return (
    <button>Counter</button>
  );
}


// 리엑트에서는 class예약어이기 때문에 사용 못하고,
// class대신 className 이라고 사용한다.

/*
1단계
<main>
		<div class="card">
			<div class="card__header">강의 목록</div>
			<div class="card__body">
				<div class="courses">
					<article class="course">
						<img class="course__img" src="./img/coffee-blue.jpg" alt="" />
						<div class="course__body">
							<div class="course__title">입문자를 위한, HTML&CSS 웹 개발 입문</div>
							<div class="course__description">웹 개발에 필요한 기본 지식을 배웁니다. </div>
						</div>
					</article>
					<article class="course">
						<img class="course__img" src="./img/coffee-blue.jpg" alt="" />
						<div class="course__body">
							<div class="course__title">입문자를 위한, HTML&CSS 웹 개발 입문</div>
							<div class="course__description">웹 개발에 필요한 기본 지식을 배웁니다. </div>
						</div>
					</article>
					<article class="course">
						<img class="course__img" src="./img/coffee-blue.jpg" alt="" />
						<div class="course__body">
							<div class="course__title">입문자를 위한, HTML&CSS 웹 개발 입문</div>
							<div class="course__description">웹 개발에 필요한 기본 지식을 배웁니다. </div>
						</div>
					</article>
				</div>
			</div>
		</div>
	</main>
  */

  // 2단계
  
    <main>
  
		  {/* <div className="card">
			  <div className="card__header">강의 목록</div>
			  <div className="card__body">
				  <div className="courses">
            <Courseitem />
            <Courseitem />
            <Courseitem />
         </div>
        </div>
      </div> */}
      
      <CourseListCard />
    </main>
    
  );
}

export default App;
