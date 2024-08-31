import React from 'react'
import "./NotFoundPage.style.css"
import { Button } from 'react-bootstrap'

const NotFoundPage = () => {
  return (
    <div className='notfound'>
      <h1 className='notfound-number'>404</h1>
      <h3>페이지를 찾을 수 없습니다.</h3>
      <p>죄송합니다. 더 이상 존재하지 않는 페이지입니다.</p>
      <Button variant="danger" style={{ backgroundColor: '#E50914' }}><a href="/">홈으로 이동</a></Button>
    </div>
  )
}

export default NotFoundPage
