import React from 'react'
import Logo from '../assets/quiz-logo.png'
const Header = () => {
  return (
    <header>
        <img src={Logo} alt="QuizApp" />
        <h1>Quiz</h1>
    </header>
  )
}

export default Header