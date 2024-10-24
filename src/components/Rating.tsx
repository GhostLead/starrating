import React from 'react'
import star from '../../images/icon-star.svg'
import thankYou from '../../images/illustration-thank-you.svg'


const rating = () => {
  return (
    

    <>
    <div className='container'>
        <div className='starContainer'>
            <img src={star} alt="star" />
            </div>
            
            <h1>How did we do?</h1>
            <p>Please let us know how we did with your support request. All feedback is appreciated to help uis impove out offering!</p>
            <div className='buttonContainer'>
                {[1,2,3,4,5].map(num=>(
                    <button type='button'>{num}</button>
                ))}
            </div>
            <button type='submit' className='submit'>submit</button>
    </div>

    <div className='container thankYou'>
        <img src={thankYou} alt="thanks dude"/>
        <div className='selectedRate'>
            <p>You selected 4 out of 5</p>
        </div>
        <h1>Thank You!</h1>
        <p>We appreciate you taking the time to give a taring. If you ever need more support, don't hesitate to get in touch!</p>
    </div>
    </>

  )
}

export default rating
