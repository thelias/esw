var HeaderTitle = React.createClass({
    displayName: "HeaderTitle",

    render: function () {
        return React.createElement(
            "div",
            { className: "header" },
            React.createElement(
                "div",
                { className: "header-name" },
                "ELISE",
                React.createElement("br", null),
                "STONER"
            ),
            React.createElement(
                "div",
                { className: "header-title" },
                " GRAPHIC DESIGN "
            ),
            React.createElement(Sidebar, { selectable: this.props.selectable })
        );
    }
});