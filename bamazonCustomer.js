var inquirer = require("inquirer");

var mysql = require("mysql");

var Table = require("cli-table");

var colors = require("colors");

var input, quantity, stockQuantity, newQuantity;

var connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "1083633",
	database: "bamazon"
});

connection.connect(function(error) {
	if(error) throw err;
	connection.query(
		"SELECT * FROM products", function(err, result) {
			if (err) throw err;
			for (i = 0; i < result.length; i++) {
		var table = new Table ({
			head: ["item_id", "product_name", "department_name", "price"],
			column: [50, 200, 150, 100]
			});
		table.push(
			[result[i].item_id,result[i].product_name,result[i].department_name,
			result[i].price]
			);
		console.log(table.toString());		
		}

		start();
	})		
	
});

function start() {

	inquirer.prompt(
		{
			type: "input",
			name: "item",
			message: "What is the ID of the product you want to buy?",
			validate: function(value) {
						if (isNaN(value) === false) {
							return true;							
						}
						return false;
					}
		}
		).then(function(user) {
			input = user.item;
			purchase();
	});
}

function purchase()	{	

	connection.query(
	"SELECT * FROM products", function(err, result) {
			if (err) throw err;
			for (i = 0; i < result.length; i++) {
			if (parseInt(input) === parseInt(result[i].item_id)) {
				inquirer.prompt(
					{
						type: "input",
						name: "buy",
						message: "How many do you want to buy?",
						validate: function(value) {
							if (isNaN(value) === false) {
							return true;							
					}
							return false;
					}
							}).then(function(user) {
								quantity = user.buy;
								stock();
					})
				}
			}
		})
	}

function stock() {
	connection.query(
	"SELECT * FROM products", function(err, result) {
		if (err) throw err;

		for (i = 0; i < result.length; i++) {
			stockQuantity = result[i].stocky_quantity;
			newQuantity = parseInt(stockQuantity - quantity);
		if (parseInt(quantity) > parseInt(result[i].stock_quantity)) {

			return console.log("Sorry, Insufficient Quantity.");
			}
		}
	});

		connection.query(
			"UPDATE products SET ? WHERE ?"
			[
				{
					stocky_quantity: newQuantity
				},
				{
					item_id: input
				}
			],
			function(err, result) {
				console.log("You bought item");
		}
	);								
								
		
	
}