import Posts from './Components/Posts/Posts';
import Layout from './Layout/Layout';

import "./App.css"

function App() {
  return (
    <div className="App">
      <Layout>
          <Posts />
      </Layout>
    </div>
  );
}

export default App;
