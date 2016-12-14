var HeaderTitle = React.createClass({
    render: function () {
        return (
            <div className="header">
                <div className="header-name">
                     ELISE<br/>STONER
                </div>
                <div className="header-title"> GRAPHIC DESIGN </div>
                <Sidebar selectable={this.props.selectable}/>
            </div>
        );
    }
});