// src/App.tsx
import './App.css';
import AppRoutes from './AppRoutes';
import Layout from './components/Layout';

function App() {
  return (
    <div>
      <Layout>
        <AppRoutes />
        {/* <Header/>
        <Quiz/> */}
      </Layout>
    </div>
  );
}

export default App;
