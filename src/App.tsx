// src/App.tsx
import './App.css';
import AppRoutes from './AppRoutes';
import Layout from './components/Layout';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
function App() {
  return (
    
      <TonConnectUIProvider manifestUrl='https://tan-occupational-rook-922.mypinata.cloud/ipfs/QmSVy6aYSip9A7bgSMvbijw7b1Ytw5gdyzaZgKGiis47bf'>
        <Layout>
          <AppRoutes />
          {/* <Header/>
        <Quiz/> */}
        </Layout>
      </TonConnectUIProvider>
    
  );
}

export default App;
