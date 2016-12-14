var App = React.createClass({
    getInitialState: function () {
        return {
            selectable: [
                {
                    name: 'IDENTITY',
                    url: '/identity'
                },
                {
                    name: 'PROMOTIONAL',
                    url: '/Promotional'
                },
                {
                    name: 'TYPOGRAPHY + ILLUSTRATION',
                    url: '/typography'
                },
                {
                    name: '3D + PACKAGING',
                    url: '/3D'
                }
            ]


        }
    },
    render: function () {
        return (
                <HeaderTitle selectable={this.state.selectable}/>
        );
    }
});