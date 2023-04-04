import RootLayout from './pages/RootLayout';
import LandingPage from './components/LandingPage/LandingPage';
import CharactersContainer from './components/CharactersContainer/CharactersContainer';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="/characters" element={<CharactersContainer />} />
      </Route>
    )
  )

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}


export default App;
