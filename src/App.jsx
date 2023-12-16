import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import Search from './Components/Search/Search'
import Support from './Components/Support/Support'
import Info from './Components/Info/Info'
import Lounge from './Components/Lounge/Lounge'
import Subscribers from './Components/Subscribers/Subscribers'
import Travelers from './Components/Travelers/Travelers'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Search />
      <Support />
      <Info />
      <Lounge/>
      <Travelers/>
      <Subscribers />
      <Footer />
    </div>
  )
}

export default App
 