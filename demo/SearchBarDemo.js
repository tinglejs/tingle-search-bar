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
            value: ''
        }
    }

    handleChange(value) {
        var t = this;
        t.setState({
            value: value
        });
    }

    render() {
        var t = this;
        return (
            <div className="tSearchBarDemoFixTop">
                <SearchBar placeholder="搜索" value={t.state.value} autoFocus={false} onChange={t.handleChange.bind(t)}/>
                {t.state.value}
            </div>
        );
    }
};

module.exports = Demo;
