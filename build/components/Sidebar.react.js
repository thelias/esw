var Sidebar = React.createClass({
    displayName: "Sidebar",

    getInitialState: function () {
        return {
            filter: ''
        };
    },
    changeFilter: function (filter) {
        this.setState({
            filter: filter
        });
    },
    render: function () {
        var allItems = this.props.selectable;
        var items = [];
        for (var key in allItems) {
            items.push(React.createElement(Sidebarlink, { onChangedSelect: this.changeFilter, selected: this.state.filter, url: allItems[key].url, name: allItems[key].name }));
        }
        console.log(this.props.selectable);
        return React.createElement(
            "div",
            { className: "sidebar" },
            items
        );
    }
});