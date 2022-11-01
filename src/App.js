import { Card } from './Card.js';

const App = () => {
  return (
    <div className="grid">
      {Array(100).fill(true).map((_, i) => <Card count={i} key={i} />)}
    </div>
  );
}

export default App;
