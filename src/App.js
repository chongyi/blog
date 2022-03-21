import { Routes, Route } from 'react-router-dom';
import * as Pages from './page'
import './App.scss';
import MainLayout from './layout/MainLayout';

function App() {
  return (
    <div className='app'>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Pages.Home />} />
          <Route path="/content/:contentId" element={<Pages.Content />} />
          <Route path="/:contentId" element={<Pages.Content isPage={true} />} />
        </Routes>
      </MainLayout>
    </div>
  );
}

export default App;
