
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CountryDetailPage from './pages/CountryDetailPage'
import { useEffect } from 'react'
import CountryCard from './components/CoutryCard'




function App() {
 
//This was only for testing
  useEffect(() =>{
    // getAllCountries().then(res => console.log('Kibreab Testing', res.data.Country))
    
  //  getCountryDetail('Eritrea').then(res => console.log('Kibreab Testing', res.data))

  //  getBorderCountry('DJI').then(res => console.log('Kibreab Testing', res.data))

   //filterByRegion('europe').then(res => console.log('Kibreab Testing', res.data))
  }, [])
  
  return (
    <>
   
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/detail' element={<CountryDetailPage/>}/>      

      {/* <Route path="/search/:query" element={<SearchPage />} /> */}
    </Routes>
      
    </>
  )
}

export default App
