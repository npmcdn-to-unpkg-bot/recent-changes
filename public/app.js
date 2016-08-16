var data = [{ "when": "2 minutes ago",
	      "who": "Jill Dupre",
	      "description": "Created new account"
	    },
	    {
		"when": "1 hour ago",
		"who": "Lose White",
		"description": "Added fist chapter"
	    },
	    {
		"when": "2 hours ago",
		"who": "Jordan Whash",
		"description": "Created new account"
	    }];

var rows = data.map(function(row, i){
    return <tr key={i}>
	<td>{row.when}</td>
	<td>{row.who}</td>
	<td>{row.description}</td>
	</tr>
})

var App = React.createClass({
    render: function() {
	return(
		<div>
		<h1>{this.props.title}</h1>
		<table>
		<thead>
		<tr>
		<th>When</th>
		<th>Who</th>
		<th>Description</th>
		</tr>
		</thead>
		<tbody>
		{rows}
	        </tbody>
		</table>
		</div>
	)
    }
});

ReactDOM.render(<App title="Recent Changes"/>, document.getElementById('content'));
