import React from 'react'

const Profile = () => {
  return (
    <div className='profile journalLayout'>
      <h1>프로필</h1>
      <div className="profileCard">
        <div className="profileHeader">
          <div className="profilePic">
            <img src="https://url.kr/yaz6x1" alt="" />
          </div>
          <div className="profileInfo">
            <h2>홍길동</h2>
            <h2>@abc</h2>
            <h2>hong@example.com</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile