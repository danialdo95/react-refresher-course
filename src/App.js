import { Route, Switch } from 'react-router-dom';

import AllMeetups from './pages/Allmeetups';
import FavoritesPage from './pages/Favorites';
import NewMeetups from './pages/NewMeetup';

import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <AllMeetups />
        </Route>
        <Route path='/new-meetup'>
          <NewMeetups />
        </Route>
        <Route path='/favorites'>
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
