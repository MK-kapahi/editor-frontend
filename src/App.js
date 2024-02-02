import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import PublicRoutes from './routes/publicRoutes';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (<div className="App">
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
    {/* Same as */}
    <ToastContainer />

    <BrowserRouter>

      <PublicRoutes></PublicRoutes>
    </BrowserRouter>
  </div>
  );
}

export default App;
