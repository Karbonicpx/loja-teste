import { Routes, Route } from "react-router"
import ProductPage from './pages/ProductPage';
import './index.css'
function App(){

    return (

       
        <Routes>
            <Route index element= {<HomePage/>}/>
            <Route path='/product/:id' element={<ProductPage/>}/>
        </Routes>

    )
}   

export default App;
