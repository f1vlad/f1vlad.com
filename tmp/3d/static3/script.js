
var FilterContainer = React.createClass({
    getInitialState: function () {
      return {
        advancedFilterVisible: false,
        filterDropdownVisible: false
      };
    },
    onClick: function (e) {
        if(e==="filter drop down") {
            this.setState({filterDropdownVisible: true});
        }
        if(e==="create new filter") {
            this.setState({advancedFilterVisible: true});
            this.setState({filterDropdownVisible: false});
        }
    },
    onChange: function(e) {
        //console.log(e);
    },
    render: function() {
        return(
            <div className="search-filter">
                {this.state.filterDropdownVisible===true && <FilterDropDown onClick={this.onClick} />}
                <div className="control-group">
                    <div className="filter controls controls-two btn-group-fit">
                        <div className="filter-view search">
                            <FilterControls onClick={this.onClick} />
                            <SearchBar />
                        </div>
                        <ToggleActions />
                    </div>
                </div>
                {this.state.advancedFilterVisible===true && <FilterControlsAdvanced />}
                {this.state.advancedFilterVisible===true && <FilterControlsHeader onChange={this.onChange} value="" />}
            </div>
        );
    }
});

var FilterDropDown = React.createClass({
    allOpp: function () {
        console.log('here');
    },
    render: function() {
        return(
            <ul className="filter-dropdown">
                <li>New Filter</li>
                <li onClick={this.props.onClick.bind(null, "create new filter")}>All Opportunities</li>
                <li>My Favorites</li>
                <li>My Opportunities</li>
                <li>Recently Created</li>
                <li>Recently Viewed</li>
            </ul>
        );
    }
});

var FilterControls = React.createClass({
    getInitialState: function () {
        return { showDropDown: false };
    },
    newFilter: function() {
        //this.setState({showDropDown: (this.state.showDropDown) ? null : <FilterDropDown/> }) // Toggle filter dropdown
    },
    render: function() {
        return (
            <span className="table-cell">
                <div className="select2-container select2 search-filter">
                    <a href="javascript:void(0)" className="select2-choice" >
                        <span className="select2-chosen">
                            <span className="select2-choice-type" onClick={this.props.onClick.bind(null, "filter drop down") }>Filter<i className="fa fa-caret-down"></i></span>
                        </span>
                    </a>
                </div>
                <div className="choice-filter choice-filter-clickable">
                    <span className="choice-filter-label" onClick={this.newFilter}>New filter</span>
                    <span className="choice-filter-close" style={{display: 'none'}}><i className="fa fa-times-circle"></i></span>
                </div>
                { this.state.showDropDown ? <FilterDropDown /> : null }
            </span>
        );
    }
});

var SearchBar = React.createClass({
    render: function() {
        return (
            <div className="table-cell full-width">
                <input type="text" className="search-name" placeholder="Search..." />
            </div>
        );
    }
});

var FilterControlsAdvanced = React.createClass({
    render: function() {
        return (
            <div className="filter-options extend">
                <div className="row-fluid">
                    <div className="span12" >
                        <div className="filter-definition-container">
                            <FilterControlsAdvancedRowLabels />
                            <FilterControlsAdvancedRow />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
})

var FilterControlsHeader = React.createClass({
    getInitialState: function () {
      return {
        value: '',
      };
    },
    onKeyUp: function(e) {
        //console.log(this.refs.newFilterName.getDOMNode().value)
        //this.refs.newFilterName.getDOMNode().value=e;
        console.log(e);
    },
    render: function() {
        return (
            <div className="filter-options extend">
                <div className="filter-header">
                    <div className="row-fluid">
                        <div className="controls span6">
                            <label>Filter name</label>
                            <input ref="newFilterName" type="text" className="inherit-width" placeholder="Enter new filter name…"
                             value={this.props.value}
                             onChange={this.props.onChange.bind(null, this.props.value)} 
                             onKeyUp={this.onKeyUp.bind(null, this.props.value)}
                             />
                        </div>
                        <div className="actions span6">
                            <div className="pull-right">
                                <a className="btn btn-link btn-invisible reset_button hide" >Reset</a>
                                <a className="btn btn-link btn-invisible filter-close" >Advanced</a>
                                <a className="btn btn-link btn-invisible filter-close" >Clear value</a>
                                <a className="btn btn-link btn-invisible filter-close" >Cancel</a>
                                <a className="btn btn-link btn-invisible delete_button hide" >Delete</a>
                                <a className="btn btn-primary disabled save_button" >Save</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

var FilterControlsAdvancedRowLabels = React.createClass({
    render: function() {
        return (
            <div className="filter-body labels" >
                <div className="row-fluid">
                    <div className="row-fluid">
                        <div className="controls span3">
                            <span className="detail">
                                <label>Select field</label>
                            </span>
                        </div>
                        <div className="controls span3">
                            <span className="detail">
                                <label>Select operator</label>
                            </span>
                        </div>
                        <div className="controls span6">
                            <span className="detail">
                                <label>Select value</label>
                            </span>
                            <span className="pull-right">
                                <a href="">Clear values</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

var FilterControlsAdvancedRow = React.createClass({
    render: function() {
        return (
            <div className="filter-body fields" >
                <div className="row-fluid">
                    <div className="row-fluid">
                        <div className="controls span3">
                            <span className="detail">
                                <input className="" />
                            </span>
                        </div>
                        <div className="controls span3">
                            <span className="detail">
                                <input className="" />
                            </span>
                        </div>
                        <div className="controls span6">
                            <span className="detail">
                                <input className="" />
                            </span>
                        </div>
                        <div className="hide controls span4"></div>
                        <div className="hide controls span4"></div>
                        <div className="filter-actions btn-group">
                            <button className="btn btn-invisible btn-dark"><i className="fa fa-minus"></i></button>
                            <button className="btn btn-invisible btn-dark"><i className="fa fa-plus"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});





















var ToggleActions = React.createClass({
    render: function() {
        return (
            <div className="toggle-actions actions">
                <div className="btn-group">
                    <a type="button" className="btn active"><i className="fa fa-table"></i></a>
                    <a type="button" className="btn "><i className="fa fa-clock-o"></i></a>
                </div>
            </div>
        );
    }
});

React.render(<FilterContainer />, document.getElementById('newcontent'));
