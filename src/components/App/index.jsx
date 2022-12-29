import React from 'react';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from '../../store';

import AppContent from '../AppContent';

const App = () => {
	return (
		<StrictMode>
			<BrowserRouter>
				<Provider store={store}>
					<AppContent />
				</Provider>
			</BrowserRouter>
		</StrictMode>
	);
};

export default App;
