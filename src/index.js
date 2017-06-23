import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

const obj1 = {
  number: 1,
  text: 'Listings arriving in Berlin soon. Scroll down to learn more',
  name: 'Berlin',
  picURL: 'imgs/mural1.jpg'

}

const obj2 = {
  number: 2,
  text: 'Listings arriving in Tokyo soon. Scroll down to learn more',
  name: 'Tokyo',
  picURL: 'imgs/gallery1.jpg'

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
  picURL: 'imgs/mural1.jpg'

}

const obj5 = {
  number: 5,
  text: 'Listings arriving in NYC soon. Scroll down to learn more',
  name: 'NYC',
  picURL: 'imgs/gallery1.jpg'
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
  picURL: 'imgs/mural1.jpg'
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

const LandingImage = ({currentObj}) => {
  return (
    <div className='landing'>
      <img src={currentObj.picURL} alt='homepage image' />
      <button className='learnmore'>Learn More</button>
    </div>
  )
}

const ContainerOne = () => {
  return (
    <div className='container'>
      <LandingImage currentObj={this.state.currentObj} />

      <Cities currentObj={this.state.currentObj} cityArray={this.state.cityArray} changeCity={this.changeCity} />
    </div>
  )
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
    const myCityArray = this.state.cityArray
    this.setState((prevState) => ({
      ...prevState,
      currentObj: this.state.cityArray[index]
    }))
  }

  render () {
    return (
      <div className='container'>
        <LandingImage currentObj={this.state.currentObj} />

        <Cities currentObj={this.state.currentObj} cityArray={this.state.cityArray} changeCity={this.changeCity} />
      </div>

    )
  }
}

ReactDOM.render(<Homepage />, document.getElementById('root'))
registerServiceWorker()

