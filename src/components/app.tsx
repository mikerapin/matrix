import { h } from 'preact';
import { Route, Router } from 'preact-router';

// Code-splitting is automated for `routes` directory
import Renderer from '../routes/renderer';
import AlternateRenderer from '../routes/alternate-renderer';
import Index from '../routes/index';

const App = () => (
  <div id="app">
    <main>
      <Router>
        <Route path="/" component={Index} />
        <Route path="/base" component={Renderer} />
        <Route path="/alt" component={AlternateRenderer} />
      </Router>
    </main>
  </div>
);

export default App;
