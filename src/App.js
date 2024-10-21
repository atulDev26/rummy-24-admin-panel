import { Toaster } from 'sonner';
import './App.css';
import './index.css'
import { Route, Routes } from 'react-router-dom';
import Login from './view/Login';
function App() {
  return (
    <>
      <Toaster duration={3000} richColors position={'top-right'} visibleToasts={4} />

      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
