-- 08) Write a query to find the name (first_name, last_name) of the employees who have a manager and worked in a USA based department. [2.5 marks]

select first_name and last_name from employee;
where departemt == USA

-- 09) Consider above schemas and Write a query to find the name (first_name, last_name), 
-- and salary of the employees who earns more than the average salary and works in any of the IT departments. [2.5 marks]
select first_name and last_name from employess ;
where salary > average salary


-- 11) From the following tables, write a SQL query to find all salespeople and customers located in the city of London. [2.5 marks]
join Salesman and Customer
where city == London

-- 12) Design schema for products' order database [5 marks]

Products
-product_id
-product_name
-discripation
-price
-sold_by

Orders
-order_id
-product_id
-number_of_produts
-tax
-shipping_charges
-total_price
-shipping address
-billing_address
-pincode
-phone