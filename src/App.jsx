import './App.css'
import NavBar from './Components/NavBar/NavBar'
import RowPost from './Components/RowPost/RowPost'
import Banner from './Components/banner/Banner'
// import {orginals,action} from 'src/Constants/urls.jsx'
import { orginals,action,romance,comedy,horror,trending } from './Constants/urls'
export default function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Banner/>
      <RowPost url={orginals} title={'Netflix Originals'} class={'poster'}/>
      <RowPost url={trending} title={'Trendings'} class={'poster-small'}/>
      <RowPost url={action} title={'Action'} class={'poster-small'}/>
      <RowPost url={comedy} title={'Comedy'} class={'poster-small'}/>
      <RowPost url={romance} title={'Romance'} class={'poster-small'}/>
      <RowPost url={horror} title={'Horror'} class={'poster-small'}/>
    </div>
  )
}
