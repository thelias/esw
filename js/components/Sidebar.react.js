var Sidebar = React.createClass({
   getInitialState: function () {
        return {
            filter: ''
        }
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
            items.push(<Sidebarlink  onChangedSelect={this.changeFilter} selected={this.state.filter} url={allItems[key].url} name={allItems[key].name} />)
        }
        console.log(this.props.selectable);
        return (
            <div  className="sidebar">
                {items}
            </div>
        );
    }
})
