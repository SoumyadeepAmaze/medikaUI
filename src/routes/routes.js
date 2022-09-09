import React, { Component } from 'react'
import {
  Route,
  Routes,
  BrowserRouter as Router
} from 'react-router-dom'
import ProductDetail1 from '../components/ProductDetail1'
import ProductDetail2 from '../components/ProductDetail2'
import ProductDetail3 from '../components/ProductDetail3'
import Index from '../components/Index'

class AppRouter extends Component {
  render () {
    return (
            <Router>
                <Routes>
                    <Route exact path='/' element={<Index />} />
                    <Route exact path='/p1' element={<ProductDetail1 />} />
                    <Route exact path='/p2' element={<ProductDetail2 />} />
                    <Route exact path='/p3' element={<ProductDetail3 />} />
                </Routes>
            </Router>
    )
  }
}
export { AppRouter }
