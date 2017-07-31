create database bamazon;
use bamazon;
create table products (
item_id integer(11) auto_increment not null,
product_name varchar(30) not null,
department_name varchar(30) not null,
price decimal(10,2) not null,
stock_quantity int(11) not null,
primary key(item_id)
);
insert into bamazon.products (product_name, department_name, price, stock_quantity)
values ("Nier: Automata", "Video Games", 59.99, 150);
insert into bamazon.products (product_name, department_name, price, stock_quantity)
values ("Bounty", "Kitchen Supplies", 8.99, 300);
insert into bamazon.products (product_name, department_name, price, stock_quantity)
values ("Charmin", "Bathroom Supplies", 15.99, 200);
insert into bamazon.products (product_name, department_name, price, stock_quantity)
values ("Sony 50in 4k Smart TV", "Electronics", 1799.99, 30);
insert into bamazon.products (product_name, department_name, price, stock_quantity)
values ("Watermelon", "Produce", 4.99, 100);
insert into bamazon.products (product_name, department_name, price, stock_quantity)
values ("Jansport Backpack", "School Supplies", 19.99, 175);
insert into bamazon.products (product_name, department_name, price, stock_quantity)
values ("Calvin Klein White Dress Shirt", "Clothing", 25.99, 125);
insert into bamazon.products (product_name, department_name, price, stock_quantity)
values ("Sony Playstation 4", "Electronics", 399.99, 200);
insert into bamazon.products (product_name, department_name, price, stock_quantity)
values ("Destiny 2", "Video Games", 59.99, 175);
insert into bamazon.products (product_name, department_name, price, stock_quantity)
values ("Chocolate Pocky", "Produce", 2.00, 500);