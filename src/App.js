import { RouterProvider } from 'react-router-dom';
import { router } from './Router/Routes/Routes';
import { Toaster } from 'react-hot-toast';
import './App.css';

function App() {

  return (
    <div className="App text-white max-w-[1440] mx-auto">
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
