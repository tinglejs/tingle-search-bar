# tingle-search-bar [![npm version](https://badge.fury.io/js/tingle-search-bar.svg)](http://badge.fury.io/js/tingle-search-bar)

The `SearchBar Component` for tinglejs

## TL;DR

SearchBar 是搜索查询用的输入框。

<img src="https://img.alicdn.com/tps/TB1p.j3JpXXXXXkXVXXXXXXXXXX-750-1254.png" width="375"/>

## Install

```
npm install tingle-search-bar --save
```

## Simple Usage

```
constructor(props) {
    super(props);
    this.state = {
        value: ''
    };
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
        <div>
            <SearchBar placeholder="搜索" value={t.state.value} autoFocus={false} onChange={t.handleChange.bind(t)}/>
            {t.state.value}
        </div>
    );
}
```

## Options 可用配置

| 配置项 | 必填 | 默认值 | 功能/备注 |
|---|----|---|----|
|className|optional|-|自定义样式类|
|placeholder|optional|搜索|输入框提示占位符|
|value|optional|-|输入框的输入字符|
|autoFocus|optional|false|是否自动获取焦点|
|onChange|optional|-|输入变化后触发的事件，需要在这里变更 value 的值|

## Links 相关链接

- [Fire a bug/Issues 提Bug](https://github.com/tinglejs/tingle-search-bar/issues)
- [Tingle项目](https://github.com/tinglejs/generator-tingle)