
import './App.css'
import AppRoutes from './AppRoutes'

import Layout from './components/Layout'



function App({children}:{ children: React.ReactNode }) {
 

  return (
    <>
        <div className=''>
          <AppRoutes></AppRoutes>
          <Layout children={children}>
        
          {/* <Header/>
          <Quiz/> */}
          </Layout>
        </div>
    </>
  )
  
}

export default App
