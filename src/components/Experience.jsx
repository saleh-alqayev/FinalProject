import React from 'react'

function Experience() {
  return (
    <div className='experience'>
            <div className='d-flex justify-content-center my-5'>
                <h2>Experience</h2>
            </div>
            <div className='container experience-wrapper'>

                <div className='timeline-block timeline-block-right'>
                    <div className='marker'></div>
                    <div className='timeline-content'>
                        <h3>2008-2019</h3>
                        <p>I studied at Technical and Humanitar School</p>
                    </div>
                </div>

                {/* --experience */}

                  
                <div className='timeline-block timeline-block-left'>
                    <div className='marker'></div>
                    <div className='timeline-content'>
                        <h3>2019-2023</h3>
                        <p>I was student at Azerbaijan Oil and Industry University </p>
                    </div>
                </div>


                  
                <div className='timeline-block timeline-block-right'>
                    <div className='marker'></div>
                    <div className='timeline-content'>
                        <h3>2022</h3>
                        <p>I am Front-end Developer now and I want to be Full-stack Developer</p>
                    </div>
                </div>

                  
                <div className='timeline-block timeline-block-left'>
                    <div className='marker'></div>
                    <div className='timeline-content'>
                        <h3>2023</h3>
                        <p>I will be Full-stack Developer and I will find job Goodwish</p>
                    </div>
                </div>

            </div>
        </div>
  )
}

export default Experience