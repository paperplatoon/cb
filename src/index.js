// figure out scrolling down w animation https://stackoverflow.com/questions/21474678/scrolltop-animation-without-jquery

import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import './index.css'
require('smoothscroll-polyfill').polyfill()

const obj1 = {
  number: 1,
  text: 'Listings arriving in Berlin soon. Scroll down to learn more',
  name: 'Berlin',
  picURL: 'imgs/berlin.jpg'

}

const obj2 = {
  number: 2,
  text: 'Listings arriving in Tokyo soon. Scroll down to learn more',
  name: 'Tokyo',
  picURL: 'imgs/losang.jpg'

}

const obj3 = {
  number: 3,
  text: 'Listings arriving in Paris soon. Scroll down to learn more',
  name: 'Paris',
  picURL: 'imgs/rec2.jpg'

}

const obj4 = {
  number: 4,
  text: 'Listings arriving in London soon. Scroll down to learn more',
  name: 'London',
  picURL: 'imgs/berlin.jpg'

}

const obj5 = {
  number: 5,
  text: 'Listings arriving in NYC soon. Scroll down to learn more',
  name: 'NYC',
  picURL: 'imgs/losang.jpg'
}

const obj6 = {
  number: 6,
  text: 'Listings arriving in San Francisco soon. Scroll down to learn more',
  name: 'San Fran',
  picURL: 'imgs/rec2.jpg'
}

const obj7 = {
  number: 7,
  text: 'Listings arriving in Los Angeles soon. Scroll down to learn more',
  name: 'Los Angeles',
  picURL: 'imgs/berlin.jpg'
}

const pic1 = {
  number: 1,
  picURL: 'imgs/vid1.png'
}

const pic2 = {
  number: 2,
  picURL: 'imgs/vid2.png'
}

const pic3 = {
  number: 3,
  picURL: 'imgs/vid3.png'
}

const Cities = ({currentObj, cityArray, changeCity}) => (
  <div className='cities'>
    {cityArray.map((city, index) =>
      <City currentObj={currentObj} key={index} cityArray={cityArray} myIndex={index} changeCity={changeCity} />
  )}
  </div>
)

const City = ({currentObj, cityArray, myIndex, changeCity}) => {
  console.log('myIndex:' + myIndex)
  console.log('Current obj number:' + currentObj.number)
  if (currentObj.number - 1 === myIndex) {
    return (
      <div className='city selected-city'><p>{currentObj.name}</p></div>
    )
  } else {
    return (
      <div className='city' onClick={e => changeCity(myIndex)}><p>{cityArray[myIndex].name}</p></div>
    )
  }
}

const pageScroll = (element) => {
  document.querySelector(element).scrollIntoView({ behavior: 'smooth' })
}

const LandingImage = ({currentObj}) => {
  const divStyle = {
    backgroundImage: 'url(' + currentObj.picURL + ')'
  }
  return (
    <div className='landing' style={divStyle}>

      <div className='learnmore' onClick={e => pageScroll('.left-arrow')}><p>Learn More</p></div>
    </div>
  )
}

const ContainerOne = ({currentObj, cityArray, changeCity}) => {
  return (
    <div className='container'>
      <LandingImage currentObj={currentObj} />

      <Cities currentObj={currentObj} cityArray={cityArray} changeCity={changeCity} />
    </div>
  )
}

class SecondPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentPic: pic1,
      picArray: [pic1, pic2, pic3]
    }

    this.leftArrow = this.leftArrow.bind(this)
    this.rightArrow = this.rightArrow.bind(this)
  }

  leftArrow () {
    if (this.state.currentPic.number === 1) {
      var newPic = this.state.picArray[this.state.picArray.length - 1]
    } else {
      var newPic = this.state.picArray[this.state.currentPic.number - 2]
    }

    this.setState((prevState) => ({
      ...prevState,
      currentPic: newPic
    }))
  }

  rightArrow () {
    if (this.state.currentPic.number === this.state.picArray.length) {
      var newPic = this.state.picArray[0]
    } else {
      var newPic = this.state.picArray[this.state.currentPic.number]
    }

    this.setState((prevState) => ({
      ...prevState,
      currentPic: newPic
    }))
  }

  render () {
    const divStyle = {
      backgroundImage: 'url(' + this.state.currentPic.picURL + ')'
    }
    return (
      <div className='containertwo'>
        <div className='left-arrow centered' onClick={e => this.leftArrow()}><button>&lt;</button></div>
        <div className='phone-pic' style={divStyle} />
        <div className='right-arrow centered' onClick={e => this.rightArrow()}><button>&gt;</button></div>
      </div>
    )
  }
}

class Homepage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentObj: obj2,
      cityArray: [obj1, obj2, obj3, obj4, obj5, obj6, obj7]
    }

    this.changeCity = this.changeCity.bind(this)
  }

  changeCity (index) {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })

    this.setState((prevState) => ({
      ...prevState,
      currentObj: this.state.cityArray[index]
    }))
  }

  render () {
    return (
      <div>
        <ContainerOne currentObj={this.state.currentObj} cityArray={this.state.cityArray} changeCity={this.changeCity} />
        <SecondPage />
      </div>
    )
  }
}

ReactDOM.render(<Homepage />, document.getElementById('root'))
registerServiceWorker()

