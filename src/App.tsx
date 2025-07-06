import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {Layout} from '@/components/layout/Layout'
import {Home} from '@/pages/Home'
import {About} from '@/pages/About'
import {Programs} from '@/pages/Programs'
import {Donate} from '@/pages/Donate'
// import GetInvolved from '@/pages/GetInvolved'
// import News from '@/pages/News'
import {Contact} from '@/pages/Contact'
import NotFound from '@/pages/NotFound'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App