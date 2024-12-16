import React from 'react'

const Home = () => {
  return (
    <div className='home journalLayout'>
      <h2>기억 창고에 오신 것을 환영합니다</h2>
      <p>
        소중한 기억과 이야기를 담아두는 공간입니다.
      </p>
      <h2>저희 서비스는?</h2>
      <p>
        기억창고는 당신의 소중한 순간들을 기록하고, 언제든지 꺼내 볼 수 있는 공간을 제공합니다. 감동적인 이야기를 담고, 나만의 기록을 남길 수 있 는 특별한 플랫폼입니다.
      </p>
      <ul>
      <li>📝다양한 기록 작성 기능</li>
      <li>📂손쉽게 관리할 수 있는 편리한 시스템</li>
      <li>🔒안전하고 개인적인 공간</li>
      </ul>
      <h2>지금 바로 시작하세요!</h2>
      <p>
        기억창고에 가입하여 나만의 이야기를 담아보세요.
      </p>
      <button className='join'>가입하기</button>
    </div>
  )
}

export default Home