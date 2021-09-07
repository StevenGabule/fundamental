import { render } from 'react-dom';
import UserSearch from './refs/UserSearch';

const App = () => {
  return (
    <div>
      <UserSearch />
    </div>
  );
};

render(<App />, document.getElementById('root'));
