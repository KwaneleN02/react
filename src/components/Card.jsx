import React from 'react'
import growTogether from './images/illustration-grow-together.svg'
import conversations from './images/illustration-flowing-conversation.svg'
import users from './images/illustration-your-users.svg'
import AttentionBtn from './AttentionBtn'

const Card = () => {
  return (
    <div className='section-card'>
        <div className="card-grow z-depth-3">
            <div className="card-text">
                <h2>Grow Together</h2>
                <p>Generate meaningful discussions your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.</p>
            </div>
            <div className="card-img">
                <img src={growTogether} alt="" />
            </div>
        </div>

        <div className="conversations z-depth-3">

            <div className="card-img">
                <img src={conversations} alt="" />
            </div>

            <div className="card-text">
                <h2>Flowing Conversations</h2>
                <p>You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow</p>
            </div> 
        </div>

        <div className="users z-depth-3">
            <div className="card-text">
                <h2>Your Users</h2>
                <p>It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately. </p>
            </div>
            <div className="card-img">
                <img src={users} alt="" />
            </div>
        </div>

        <div className="attention z-depth-3">
            <div className="card-text build">
                <h4>Ready To Build You Community?</h4>
            </div>
            <div className="card-btn">
                <AttentionBtn />
            </div>

        </div>

    </div>
  )
}

export default Card