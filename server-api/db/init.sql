BEGIN;

    DROP TABLE IF EXISTS customers;
    DROP TABLE IF EXISTS vendors;
    DROP TABLE IF EXISTS customer_location;
    DROP TABLE IF EXISTS vendor_location;
    DROP TABLE IF EXISTS vendor_routes;

    CREATE TABLE customers
    (
        id SERIAL PRIMARY KEY,
        email VARCHAR(100) NOT NULL,
        password VARCHAR(200) NOT NULL,
        username VARCHAR(50) NOT NULL,
        age VARCHAR(50) NOT NULL,
        gender VARCHAR(50) NOT NULL,
        icecream_flavour VARCHAR(50) NOT NULL
    );

    CREATE TABLE vendors
    (
        id SERIAL PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        email VARCHAR(100) NOT NULL,
        password VARCHAR(200) NOT NULL,
        mobile VARCHAR(15) NOT NULL,
        company_name VARCHAR(50) NOT NULL,
        alcohol BOOLEAN NOT NULL,
        vegan_option BOOLEAN NOT NULL
    );

    CREATE TABLE customer_location
    (
        id SERIAL PRIMARY KEY,
        customer_id INTEGER REFERENCES customers(id),
        latitude VARCHAR(20) NOT NULL,
        longitude VARCHAR(20) NOT NULL,
        temperature VARCHAR(20) NOT NULL,
        time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE vendor_location
    (
        id SERIAL PRIMARY KEY,
        vendor_id INTEGER REFERENCES vendors(id),
        latitude VARCHAR(20) NOT NULL,
        longitude VARCHAR(20) NOT NULL,
        time TIMESTAMP
    );

    CREATE TABLE vendor_routes
    (
        id SERIAL PRIMARY KEY,
        vendor_id INTEGER REFERENCES vendors(id),
        name VARCHAR(250),
        stop_number INTEGER,
        time_from TIME(0),
        time_to TIME(0),
        address VARCHAR(50)
    );

    INSERT INTO customers
    (email, password, username, age, gender, icecream_flavour) 
    VALUES 
    ('hettie@test.com', 'password', 'HettieMcC', 24, 'F', 'Caramel'),
    ('jack@test.com', 'password', 'JackAT', 20, 'M', 'Chocolate'),
    ('sarah@test.com', 'password', 'SarahJBB', 29, 'F', 'Strawberry'),
    ('bill@test.com', 'password', 'CrazyEastender', 27, 'm', 'Vanilla'),
    ('louise@test.com', 'password', 'Louise', 19, 'F', 'Vanilla');


    INSERT INTO customer_location 
    (customer_id, latitude, longitude, temperature)
    VALUES 
    (1, 51.392460, -0.113350, 31),
    (2, 51.5029429882, -0.08798631472, 26),
    (3, 51.500729, -0.124625, 28),
    (4, 51.565060, -0.097630, 27),
    (5, 51.551720, -0.085610, 26.5);

    COMMIT;
