import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import './HomeMainBar.css'
import QuestionList from './QuestionList'
import { useNavigate } from 'react-router-dom'


const HomeMainBar = () => {

const location = useLocation()
const user = 12
const navigate  = useNavigate()

  var questionList = [{
    _id:1,
    upVotes: 13,
    downVotes: 4,
    noOfAnswers:2,
    questionTitle: "What is a function?",
    questionBody: "It meant to be called",
    questionTags: ["java", "node js", "ract js","mongo db"],
    userPosted: "mano",
    askedOn: "jan 1",
    userId: 1,
    answer: [{
      answerBody: "Answer is awsome",
      userAnswered: "Sandip",
      answeredOn: "jan 2",
      userId: 2,
    }]
  },
  {
    _id:2,
    upVotes: 7,
    downVotes: 4,
    noOfAnswers:2,
    questionTitle: "What is a function?",
    questionBody: "It meant to be called",
    questionTags: ["java", "node js ", "ract js","mongo db"],
    userPosted: "mano",
    askedOn: "jan 1",
    userId: 1,
    answer: [{
      answerBody: "Answer is awsome",
      userAnswered: "Sandip",
      answeredOn: "jan 2",
      userId: 2,
    }]
  },
  {
    _id:3,
    upVotes: 23,
    downVotes: 4,
    noOfAnswers:2,
    questionTitle: "What is a function?",
    questionBody: "It meant to be called",
    questionTags: ["java", "node js", "ract js","mongo db"],
    userPosted: "mano",
    askedOn: "jan 1",
    userId: 1,
    answer: [{
      answerBody: "Answer is awsome",
      userAnswered: "Sandip",
      answeredOn: "jan 2",
      userId: 2,
    }]
  }]



const checkAuth =  () => {
  if(user === null){
    alert("Please login or sign up") 
    navigate ('./Auth')
  }
  else{
    navigate ('./AskQuestion')
  }
}

  return (
    <div className='main-bar'>
        <div className='main-bar-header'>
          {
            location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
          }
          <button onClick={checkAuth} className='ask-btn'>Ask Question</button>
        </div>

        <div >
          {
            questionList === null ?
            <h1>Loading...</h1> :
            <>
              <p>{questionList.length } Questions</p>  
              <QuestionList questionList={questionList}></QuestionList>
            </>
          }
        </div>
    </div>
  )
}

export default HomeMainBar