import React,  {useEffect} from 'react'


import paris from '../../assets/image1.jpg'
import Dubai from '../../assets/image4.jpg'
import NewYork from '../../assets/image5.jpg'
import London from '../../assets/image8.jpg'


import traveler1 from '../../assets/image3.jpg'
import traveler2 from '../../assets/image6.jpg'
import traveler3 from '../../assets/image7.jpg'
import traveler4 from '../../assets/image9.jpg'


import Aos from 'aos'
import 'aos/dist/aos.css'


const travelers = [
  {
    id: 1,
    destinationImage: paris,
    travelerImage: traveler1,
    travelerName: 'Jacob',
    socialLink: '@jaffer9'
  },

  {
    id: 2,
    destinationImage: Dubai,
    travelerImage: traveler2,
    travelerName: 'Daniel',
    socialLink: '@danniyy8'
  },

  {
    id: 3,
    destinationImage: NewYork,
    travelerImage: traveler3,
    travelerName: 'Sam',
    socialLink: '@samcruce4'
  },

  {
    id: 4,
    destinationImage: London,
    travelerImage: traveler4,
    travelerName: 'Lisa',
    socialLink: '@Lisamon7'
  },

]


const Travelers = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <div className='travelers container section'>
      <div className="sectionContainer">
        <h2 data-aos="fade-down" data-aos-duration="2500">Top travelers of this month!</h2>

        <div className="travelersContainer grid">

          {
            travelers.map(({id, destinationImage, travelerImage, travelerName, socialLink }) => {
              return (
                <div data-aos="fade-up" data-aos-duration="2500" key={id} className="singleTraveler">

                  <img src={destinationImage} className='destinationImage' />

                  <div className="travelerDetails">
                    <div className="travelerPicture">
                      <img src={travelerImage} className='travelerImage' />
                    </div>
                    <div className="travelerName">
                      <span>{travelerName}</span>
                      <p>{socialLink}</p>
                    </div>
                  </div>

                </div>
              )
            })
          }

        </div>
      </div>

    </div>
  )
}

export default Travelers