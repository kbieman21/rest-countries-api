
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CountryDetailPage from './pages/CountryDetailPage'


import SearchPage from './pages/SearchPage'
import NavBar from './components/NavBar'
import RegionFilter from './components/RegionFilter'




function App() {
 
//This was only for testing
//  useEffect(() =>{
    // getAllCountries().then(res => console.log('Kibreab Testing', res.data.Country))
    
  //  getCountryDetail('Eritrea').then(res => console.log('Kibreab Testing', res.data))

  //  getBorderCountry('DJI').then(res => console.log('Kibreab Testing', res.data))

   //filterByRegion('europe').then(res => console.log('Kibreab Testing', res.data))
 // }, [])
  
  return (
    <>
    {/* <RegionFilter/> */}
   
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/detail/:name' element={<CountryDetailPage/>}/> 
      <Route path="/search/:query" element={<SearchPage />} />
      
    </Routes>
      
    </>
  )
}

export default App
