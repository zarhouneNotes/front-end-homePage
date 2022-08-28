import React from 'react'

import {ReactComponent as HeroBg} from './images/bg-tablet-pattern.svg'

function Bennefits() {
  return (
    <>
    <div className='sec-sec '  >
        <div className="question">
            <h1>What's different about Manage ? </h1>
            <p>Manage provides all the functionality your<br /> team needs. without the compkexity. Our <br />software is tailor-made for modern digital <br /> product teams.</p>
        </div>
        <div className=' center-left ' > <HeroBg />  </div>
        <div className="answers">
            <div className="answer">
                <div className="answer-head ">
                    <h6 className="num  rounded-pill my-auto ">01</h6>
                    <h6 className="fw700 bg-sccess my-auto ">Track company-wide progress</h6>
                </div>
                <div className="answer-content">
                <h6 className="num blanck">01</h6>
                    
                    <p>
                    See how your day-to-day tasks fit into the wider vision. <br />
                    Go from tracking progress at the milestone level all the <br />
                    way done to the smallest of details. Never lose sight of <br />
                    the bigger picture again.
                    </p>
                </div>
            </div>
            <div className="answer">
                <div className="answer-head">
                    <h6 className="num rounded-pill my-auto ">03</h6>
                    <h6 className="fw700 my-auto   ">Advanced buitt-in reports</h6>
                </div>
                <div className="answer-content">
                <h6 className="num blanck">02</h6>
                    
                    <p>
                    Set internal delivery estimates and track progress toward
                    company goals. Our customisable dashboard helps you
                    build out the reports you need to keep key stakeholders

                    informed.
                    </p>
                </div>
            </div>
            <div className="answer">
                <div className="answer-head">
                    <h6 className="num rounded-pill my-auto ">03</h6>
                    <h6 className="fw700 my-auto ">Everything you need in one place</h6>
                </div>
                <div className="answer-content">
                <h6 className="num blanck">01</h6>
                    
                    <p>
                    Stop jumping from one service to another to
                    communicate, store files, track tasks and share
                    documents. Manage offers an all-in-one team
                    productivity solution.
                    </p>
                </div>
            </div>
            
        </div>
    </div>
    <h1 className='bg-sucess bottom-quest text-center' >what they have said</h1>
    </>
  )
}

export default Bennefits