import React from 'react';
import ReactDOM from 'react-dom';
import {Made} from "@exabyte-io/made.js";

import "./stylesheets/main.scss";

import {ThreeDEditor} from './components/ThreeDEditor';

const domElement = document.getElementById('root');
const material = new Made.Material(Made.defaultMaterialConfig);
window.threeDEditor = ReactDOM.render(<ThreeDEditor editable={true} material={material}/>, domElement);
