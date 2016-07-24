import { render } from 'react-dom';
import React from 'react';
import Router from './router';

const containerEl = document.getElementById('container');

render(
  Router,
  containerEl
);
