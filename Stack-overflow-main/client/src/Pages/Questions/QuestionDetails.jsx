import React from 'react'
import { Link, useParams } from 'react-router-dom'
import upVote from '../../assets/sort-up.svg'
import downVote from '../../assets/sort-down.svg'
import './Questions.css'
// import { Link } from 'react-router-dom'
import Avatar from '../../components/Avatar/Avatar'
import DisplayAnswer from './DisplayAnswer'

const QuestionDetails = () => {
  const { id } = useParams()

  var questionList = [{
    _id:'1',
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
    _id:'2',
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
    _id:'3',
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


  return (
    <div className='question-details-page'>
      {
        questionList === null ?
        <h1>Loading...</h1> :
        <>
          {
            questionList.filter(question => question._id === id).map(question =>(
              <div key={question._id}>
                <section className='question-deatails-container'>
                    <h1>{question.questionTitle}</h1>
                    <div className='question-deatails-container-2'>
                        <div className="question-votes">
                          <img className='votes-icon' src={upVote} alt="upVote" width='18' />
                          <p>{question.upVotes - question.downVotes}</p>
                          <img className='votes-icon' src={downVote} alt="" width='19' />
                        </div>

                        <div style={{width:"100%"}}>
                          <p className='question-body'>{question.questionBody}</p>
                          <div className="question-details-tags">
                            {
                              question.questionTags.map((tag)=>(
                                <Link to='/Tags' className='tags' key={tag}> {tag} </Link>
                              ))
                            }
                          </div>

                          <div className="question-actions-user">
                            <div>
                              <button>Share</button>
                              <button>Delete</button>
                            </div>
                            <div>
                              <p>Asked on {question.askedOn}</p>
                              <Link to={`/user/${question.userId}`} className='user-link' style={{color:'#0086d8'}}>
                                <Avatar backgroundColor="orange" px="8px" py="8px" >{question.userPosted.charAt(0).toUpperCase()}</Avatar>

                                <div>
                                  {question.userPosted}
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                    </div>
                </section>

                {
                  question.noOfAnswers !== 0 && (
                    <section>
                      <h3>{question.noOfAnswers} answers</h3>
                      <DisplayAnswer key={question._id} question={question}></DisplayAnswer>
                    </section>
                  )
                }
                <section className='post-ans-container'>
                    <h3>Your answers</h3>
                    <form>
                      <textarea name="" id="" cols="30" rows="10"></textarea> <br />

                      <input type="submit" className='post-ans-btn' value='post your answer' />

                    </form>
                    <p>
                      Browse other question tagged
                      {
                        question.questionTags.map((tag) =>(
                          <Link to='/Tags' className='ans-tags' key={tag}> {tag} </Link>
                        ))
                      } or
                      <Link to='/AskQuestion' style={{textDecoration: 'none', color: '#009dff'}}> Ask your own question</Link>                    </p>
                </section>
              </div>
            ))
          }
        </>
      }
    </div>
  )
}

export default QuestionDetails