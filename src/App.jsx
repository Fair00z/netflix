import './App.css'
import NavBar from './Components/NavBar/NavBar'
import RowPost from './Components/RowPost/RowPost'
import Banner from './Components/banner/Banner'

export default function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Banner/>
      <RowPost/>
    </div>
  )
}
