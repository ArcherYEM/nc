import React, { useState, useEffect } from 'react';
import logoImage from './images/logo.png';
import sec1_1Image from './images/main_sec1_1.jpg';
import sec1_2Image from './images/main_sec1_2.jpg';
import sec1_3Image from './images/main_sec1_3.jpg';
import sec1_4Image from './images/main_sec1_4.jpg';
import sec1_5Image from './images/main_sec1_5.jpg';
import sec2_1 from './images/sec2_1.jpg';
import sec2_2 from './images/sec2_2.jpg';
import sec2_3 from './images/sec2_3.png';
import sec2_4 from './images/sec2_4.png';
import sec2_5 from './images/sec2_5.png';
import './css/main.css';

const App = () => {
  const images = [sec1_1Image, sec1_2Image, sec1_3Image, sec1_4Image, sec1_5Image];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isInputFocused, setIsInputFocused] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [images]);

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

const imagesContext = require.context('./images', false, /\.(png|jpe?g|gif|svg)$/);

const imagePaths = imagesContext.keys().map(imagesContext);

  return (
    <div className='main-full-frame'>
      <div className="onBoard">
        <img src={logoImage} alt="logo Image" className='main-logo' />
        <a href="#"><span className='main-woman'>여성</span></a>
        <a href="#"><span className='main-man'>남성</span></a>
        <div className='main-right'>
          <a href="#"><span className='main-login'>로그인</span></a>
          <a href="#"><span className='main-join'>회원가입</span></a>
          <a href="#"><span className='main-cart'>장바구니</span></a>
          <input
          type='text'
          placeholder={isInputFocused ? '' : '검색어를 입력하세요'}
          className='search-input'
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
          <input type='button' value='검색' className='search-btn'></input>
        </div>
      </div>
      <div className='main-sec1'>
        <div className='main-sec1-images-container'>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`섹션 1 이미지${index + 1}`}
              className={`main-sec1-image`}
            />
          ))}
        </div>
      </div>
      <div className='main-sec2'>
        <div className='main-sec2-1 main-sec2-common'>
          <img src={sec2_1} alt=""></img>
          <span>봉 쉬아벨럼 패딩</span>
          <span>1,429,000원</span>
        </div>
        <div className='main-sec2-2 main-sec2-common'>
          <img src={sec2_2} alt=""></img>
          <span>올라뀌에노 팬츠</span>
          <span>622,000원</span>
        </div>
        <div className='main-sec2-3 main-sec2-common'>
          <img src={sec2_3} alt=""></img>
          <span>앱솔루트 루디 코드</span>
          <span>2,024,000원</span>
        </div>
        <div className='main-sec2-4 main-sec2-common'>
          <img src={sec2_4} alt=""></img>
          <span>롬 브랑살리 셔츠</span>
          <span>525,000원</span>
        </div>
        <div className='main-sec2-5 main-sec2-common'>
          <img src={sec2_5} alt=""></img>
          <span>바스카리타나 스커트</span>
          <span>820,000원</span>
        </div>
      </div>
      <div className='main-footer'>
        footer
      </div>
    </div>
  );
}

export default App;
