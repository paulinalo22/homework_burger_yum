INSERT INTO burgers (burger_name) VALUES ("The Human Polenta-pede Burger");
INSERT INTO burgers (burger_name) VALUES ("Chile Relleno-You-Didn’t Burger");
INSERT INTO burgers (burger_name) VALUES ("We’re Here, We’re Gruyere, Get Used to It Burger");
INSERT INTO burgers (burger_name, devoured) VALUES ("Blondes Have More Fun-gus Burger (comes with mushrooms)", true);
INSERT INTO burgers (burger_name, devoured) VALUES ("Foot Feta-ish Burger (comes with feta cheese, previously Never Been Feta)", true);
INSERT INTO burgers (burger_name, devoured) VALUES ("Poblano Picasso Burger", true);

SELECT * FROM burgers;

UPDATE burgers SET devoured = 1 WHERE id = 1;