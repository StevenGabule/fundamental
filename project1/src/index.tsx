import { render } from 'react-dom';
import UserSearch from './state/UserSearch';

const App = () => {
  return (
    <div>
      <UserSearch />
    </div>
  );
};

render(<App />, document.getElementById('root'));
