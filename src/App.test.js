import React from 'react';
import ReactDOM from 'react-dom';
import Categories from './Views/CategoryViews/Categories';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Categories />, div);
  ReactDOM.unmountComponentAtNode(div);
});
