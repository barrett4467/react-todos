import React from "react";
import ReactDOM from 'react-dom/client';

const element = <h1>Hello from the other side</h1>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);