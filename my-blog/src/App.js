import { Routes, Route } from 'react-router-dom';
import appRoutes from "./routes/routes";
import Layout from './Layout/Layout';


import "./App.css"


function App() {
  return (
    <div className="App">
        <Layout>
          <Routes>
            {appRoutes?.map(({path, element}) => (
              <Route key={path} path={path} element={element}/>
            ))}
          </Routes>
        </Layout>
    </div>
  );
}

export default App;
