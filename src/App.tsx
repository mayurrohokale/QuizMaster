// src/App.tsx
import './App.css';
import AppRoutes from './AppRoutes';
import Layout from './components/Layout';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
function App() {
  return (
    
      <TonConnectUIProvider manifestUrl='/tconnect-manifest.json'>
        <Layout>
          <AppRoutes />
          {/* <Header/>
        <Quiz/> */}
        </Layout>
      </TonConnectUIProvider>
    
  );
}

export default App;
