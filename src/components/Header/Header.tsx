import React from 'react';
import './Header.css'

interface Header {
  playerScore: number
  questionDisplayed: boolean
  answerDisplayed: boolean
}

const Header = ({ playerScore, questionDisplayed, answerDisplayed } : Header) : JSX.Element => {
  return (
    <header className='game-header'>
      <h1 className='title'>THIS IS JEOPARDY!</h1>
      <div className='score'>{`YOUR BANK: ${playerScore}`}</div>
    </header>
  )
}

export default Header;
