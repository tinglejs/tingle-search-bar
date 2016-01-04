/**
 * SearchBar Component Demo for tingle
 * @author caoke.ck
 *
 * Copyright 2014-2015, Tingle Team, Alinw.
 * All rights reserved.
 */

var classnames = require('classnames');

var SearchBar = require('../src');

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            keyCode: ''
        }
    }

    handleChange(value) {
        var t = this;
        t.setState({
            value: value
        });
    }

    handleKeyDown(keyCode, value){
        var t = this;
        t.setState({
            value: value,
            keyCode: keyCode
        });
    }

    render() {
        var t = this;
        return (
            <div className="tSearchBarDemoFixTop">
                <SearchBar placeholder="搜索" value={t.state.value} autoFocus={false} onChange={t.handleChange.bind(t)} onKeyDown={t.handleKeyDown.bind(t)} />
                <h3>onChange:</h3>
                <div>{t.state.value}</div>
                <h3>onKeyDown:</h3>
                <div>{t.state.keyCode} {t.state.value}</div>
            </div>
        );
    }
};

module.exports = Demo;
