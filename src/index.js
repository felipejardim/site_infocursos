import React from "react";
import ReactDom from "react-dom";

import App from '../src/app.jsx';
import Resultados from '../src/resultado.jsx'

ReactDom.render(<App/>, document.getElementById('form'));
ReactDom.render(<Resultados/>, document.getElementById('planilhas'))