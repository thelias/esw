var Sidebarlink = React.createClass({
    displayName: 'Sidebarlink',

    // getInitialState: function () {
    //     return {
    //         selected: ''
    //     }
    // },
    select: function (value) {
        //    this.setState({selected: this.props.name});
        this.props.onChangedSelect(value);
    },
    isActive: function (value) {
        return 'sidebar-item-container ' + (value === this.props.selected ? 'selected' : '');
    },
    render: function () {
        return React.createElement(
            'div',
            { className: this.isActive(this.props.name) },
            React.createElement(
                'div',
                { onClick: this.select.bind(this, this.props.name), className: 'sidebar-item' },
                React.createElement(
                    'a',
                    null,
                    React.createElement(
                        'div',
                        null,
                        this.props.name
                    )
                )
            )
        );
    }
});