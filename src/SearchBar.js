/**
 * SearchBar Component for tingle
 * @author caoke.ck
 *
 * Copyright 2014-2015, Tingle Team, Alinw.
 * All rights reserved.
 */
var Context = require('tingle-context');
var classnames = require('classnames');
var Icon = require('tingle-icon');

class SearchBar extends React.Component {

    constructor(props) {
        super(props);

        var t = this;
        t.state = {
            focus: t.props.autoFocus,
            empty: !t.props.value
        };
    }

    componentDidMount() {
        var t = this;
        t.textfield = React.findDOMNode(t.refs.textfield);
        if (t.props.autoFocus) {
            t.handleFocus(true);
        }
    }

    handleFocus(focus) {
        var t = this;
        if (focus) {
            if (!t._lock) {
                t._lock = true;
                setTimeout(function() {
                    delete t._lock;
                }, 20);
                clearTimeout(t._timeout);
                t.setState({
                    focus: focus
                });
                t.textfield.focus();
            }
        } else {
            t._timeout = setTimeout(function() {
                t.setState({
                    focus: focus
                });
            }, 200);
        }
    }

    handleChange(e) {
        var t = this;
        var value = e.target.value;
        t.setState({
            empty: !value
        });
        t.props.onChange(value);
    }

    handleKeyDown(e){
        var t = this;
        var value = e.target.value;
        t.setState({
            empty: !value
        });
        t.props.onKeyDown(e.keyCode, value);
    }

    handleDelete() {
        var t = this;
        t.handleChange({
            target: {
                value: t.textfield.value = ''
            }
        });
        t.handleFocus(true);
    }

    render() {
        var t = this;
        return (
            <div ref="root" className={classnames('tSearchBar tFBH tBCc tPR', {
                [t.props.className]: !!t.props.className
            })}>
                <input ref="textfield" type="search" className="tSearchBarTextfield tDB tFB1 tR5 tBCf tFS14" value={t.props.value}
                       onFocus={t.handleFocus.bind(t, true)}
                       onBlur={t.handleFocus.bind(t, false)}
                       onChange={t.handleChange.bind(t)}
                       onKeyDown={t.handleKeyDown.bind(t)}
                    />
                <span ref="label" className={classnames('tSearchBarLabel tPA', {
                    'active': t.state.focus || !t.state.empty,
                    'tFBH tFBAC tFBJC': !t.state.focus && t.state.empty
                })} onClick={t.handleFocus.bind(t, true)}>
                    <Icon id="tingle-search-bar-search" className="tSearchBarQueryIcon tDIB tMR6"/>
                    <span className={classnames('tFC9', {
                        'tDN': t.state.focus || !t.state.empty
                    })}>{t.props.placeholder}</span>
                </span>
                <span ref="delBtn" className={classnames('tSearchBarDelBtn tPA tP10', {
                    'tDIB active': !t.state.empty,
                    'tDN': t.state.empty
                })} onClick={t.handleDelete.bind(t)}>
                    <Icon id="tingle-search-bar-clear" className="tSearchBarDelIcon tDIB"/>
                </span>
            </div>
        );
    }
}

SearchBar.defaultProps = {
    placeholder: '搜索',
    value: '',
    autoFocus: false,
    onChange: Context.noop,
    onKeyDown: Context.noop
}

// http://facebook.github.io/react/docs/reusable-components.html
SearchBar.propTypes = {
    className: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    value: React.PropTypes.string,
    autoFocus: React.PropTypes.bool,
    onChange: React.PropTypes.func,
    onKeyDown: React.PropTypes.func
}

SearchBar.displayName = 'SearchBar';

module.exports = SearchBar;
