/**
 * SearchBar Component Demo for tingle
 * @author caoke.ck
 *
 * Copyright 2014-2015, Tingle Team, Alinw.
 * All rights reserved.
 */
require('tingle-context');
window.FastClick && FastClick.attach(document.body);
var Demo = require('./SearchBarDemo');
React.render(<Demo/>, document.getElementById('TingleDemo'));