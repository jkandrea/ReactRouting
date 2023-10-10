import { Helmet } from 'react-helmet';
import './App.css';
import TestRouter from './components/TestRouter';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>블로그 도구</title>
      </Helmet>
      Test 헬멧
      <div>
        <a href="/test/a">테스트 A</a><br />
        <a href="/test/b">테스트 B</a><br />
      </div>
      <TestRouter />
    </div>
  );
}

export default App;
