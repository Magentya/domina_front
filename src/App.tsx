import { Route, Routes } from 'react-router-dom';

// Pages
import { Home } from './pages/Home';
import { CreateTask } from './pages/CreateTask';
import { UpdateTask } from './pages/UpdateTask';
import { Auth } from './pages/Auth';
import { Signup } from './pages/Signup';

import { Layout } from './components/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateTask />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/update" element={<UpdateTask />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<h1>Not Found</h1>} />

      </Routes>
    </Layout>
  )
}

export default App
