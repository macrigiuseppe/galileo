import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import KeplerGl from 'kepler.gl';
import store from './Store';

function App() {
  return (
    <ReduxProvider store={store}>
      <div className="App">
        <KeplerGl
          id="foo"
          width={800}
          mapboxApiAccessToken="[MAPBOX_API_TOKEN]"
          height={800}
        />
      </div>
    </ReduxProvider>
  );
}

export default App;
