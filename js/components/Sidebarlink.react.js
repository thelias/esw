var Sidebarlink = React.createClass({
    // getInitialState: function () {
    //     return {
    //         selected: ''
    //     }
    // },
    select: function (value) {
        //    this.setState({selected: this.props.name});
        this.props.onChangedSelect(value)
    },
    isActive: function (value) {
        return 'sidebar-item-container ' + ((value === this.props.selected) ? 'selected' : '');
    },
    render: function () {
        return (
            <div className={this.isActive(this.props.name)}>
                <div onClick={this.select.bind(this, this.props.name) }   className='sidebar-item'>
                    <a >
                        <div>{this.props.name}</div>
                    </a>
                </div>
            </div>
        );
    }
});
