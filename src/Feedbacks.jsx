import React, { useState } from 'react'
import '@splidejs/react-splide/css';
import {Splide , SplideSlide} from '@splidejs/react-splide'
import ali from './images/avatar-ali.png'
import anisha from './images/avatar-anisha.png'
import richard from './images/avatar-richard.png'
import shanai from './images/avatar-shanai.png'
import Button from './Button';

function Feedbacks() {
    const [isPhone , setIsPhone] = useState(false)
    function isMobile(){
        return window.innerWidth <= 600  ? setIsPhone(true) : setIsPhone(false)
    }
    window.addEventListener('load' , isMobile)
    window.addEventListener('resize' , isMobile)
  return (
    <div className='feedbacks' >
        <Splide aria-label="My Favorite Images" options={{perPage : isPhone ? 1 : 3 , drag : 'free' , pagination: isPhone ? true : false , arrows : false , gap :' 1em' , snap:true }}  >
            <SplideSlide>
            <div className="text-center  feedback ">
                        <img src={anisha} alt="" width="90px" />
                    <div className="feedback-content  p">
                        <h6 className='fw700 my-4' >Anisha li</h6>
                        <p>"Manage has supercharged our teams's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated. "</p>
                    </div>
                </div>
            </SplideSlide>
            <SplideSlide>
                <div className="text-center  feedback ">
                        <img src={ali} alt="" width="90px" />
                    <div className="feedback-content  p">
                        <h6 className='fw700 my-4' >Ali Bravo</h6>
                        <p>"we have been able tp cancel so many other subscriptions since using manage. There is no more cross-channel confusion and everyone is much more focused. "</p>
                    </div>
                </div>
            </SplideSlide>
            <SplideSlide>
            <div className="text-center  feedback ">
                        <img src={richard} alt="" width="90px" />
                    <div className="feedback-content  p">
                        <h6 className='fw700 my-4' >Richard Watts</h6>
                        <p>"Manage allows us to provide structure and ^process. It keeps us organized and focused. I can't stop recommending them to everyone I talk to. "</p>
                    </div>
                </div>
            </SplideSlide>
            <SplideSlide>
            <div className="text-center  feedback ">
                        <img src={shanai} alt="" width="90px" />
                    <div className="feedback-content  p">
                        <h6 className='fw700 my-4' >Shanai Gough</h6>
                        <p>"Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team insync without being intrusive. "</p>
                    </div>
                </div>
            </SplideSlide>
        </Splide>

        <div className="text-center my-2 feed-btn "><Button /></div>
    </div>
  )
}

export default Feedbacks