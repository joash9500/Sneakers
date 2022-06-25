-- users dummy data

-- password123
INSERT INTO users (name, email, password_hash, username, photo_path, location, ideal_size, instagram) 
VALUES (
    'Brock Example', 
    'bob@example.com', 
    '$2b$12$H4kyXALZeuxc11pF.9I7S.waEmGTdtFJfffiX4K7pOKeXTAbay3/.',
    'Brock_shoes',
    'https://images.pexels.com/photos/6898854/pexels-photo-6898854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'Melbourne',
    10,
    'https://www.instagram.com/'
);

-- password456
INSERT INTO users (name, email, password_hash, username, photo_path, location, ideal_size, instagram) 
VALUES (
    'Tolga Example', 
    'tolga@example.com', 
    '$2b$12$/oygWGX8k6K8iplJnR4Gh.OdPEYK8LllH6zabMklQaJNIOsV9nEUe',
    'Tolga_sneakers',
    'https://images.pexels.com/photos/6923731/pexels-photo-6923731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'Sydney',
    11,
    'https://www.instagram.com/'
);

-- password000
INSERT INTO users (name, email, password_hash, username, photo_path, location, ideal_size, instagram) 
VALUES (
    'Joash Example', 
    'joash@example.com', 
    '$2b$12$UlH7q.ty83TzSoTj1v64zeTUqmmAIjzBcdeztHxuC3daZwbHghNRW',
    'joash123',
    'https://images.pexels.com/photos/333523/pexels-photo-333523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'Adelaide',
    10,
    'https://www.instagram.com/'
);

-- sneakers dummy data
INSERT INTO sneakers (name, description, brand, purchase_place, size, type, image_path, condition, users_id)
VALUES (
    'Nike Air Max 95 OG Neon',
    'Cool nikes with great traction',
    'Nike',
    'Nike Melbourne',
    11,
    'display',
    'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1631629853-screenshot-2021-09-14-at-15-29-15-1631629801.png?crop=0.684xw:0.842xh;0.131xw,0.0651xh&resize=768:*',
    'Excellent',
    2
);

INSERT INTO sneakers (name, description, brand, purchase_place, size, type, image_path, condition, users_id)
VALUES (
    'Adidas Yeezy 350 Version 1 Turtle Doves',
    'addidas with turtles',
    'Adidas',
    'https://www.adidas.com.au/',
    10,
    'for sale',
    'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F03%2Fadidas-yeezy-boost-350-turtle-dove-2022-re-release-info-aq4832-001.jpg?q=90&w=1400&cbr=1&fit=max',
    'Great',
    1
);

INSERT INTO sneakers (name, description, brand, purchase_place, size, type, image_path, condition, users_id)
VALUES (
    'Nike Waffle x Sacai',
    'Cool nikes with striking colours',
    'Nike',
    'ebay.co.uk',
    10,
    'display',
    'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1631627063-ldwaffle-bv0073-400-blue-1-1000x1000-1631627029.jpg?crop=1xw:1xh;center,top&resize=768:*',
    'Excellent',
    2
);


INSERT INTO sneakers (name, description, brand, purchase_place, size, type, image_path, condition, users_id)
VALUES (
    'New Balance 574',
    'Sleak design with a plethora of vibrant colours',
    'New Balance',
    'Gumtree',
    8,
    'display',
    'https://cdn.pixabay.com/photo/2016/11/18/22/29/footwear-1837170_960_720.jpg',
    'Excellent',
    3
);


INSERT INTO sneakers (name, description, brand, purchase_place, size, type, image_path, condition, users_id)
VALUES (
    'Puma Classic (red)',
    'Modern twist on an old classic',
    'Puma',
    'puma.com.au',
    8.5,
    'display',
    'https://cdn.pixabay.com/photo/2016/11/19/11/24/puma-1838735_960_720.jpg',
    'Good',
    1
);


INSERT INTO sneakers (name, description, brand, purchase_place, size, type, image_path, condition, users_id)
VALUES (
    'Nike SB 2016',
    'Perfect mix of comfort and style',
    'Nike',
    'footlocker.com.au',
    9.5,
    'for sale',
    'https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_960_720.jpg',
    'Fair',
    2
);

INSERT INTO sneakers (name, description, brand, purchase_place, size, type, image_path, condition, users_id)
VALUES (
    'Air Jordan 1 Retro High OG Stage Haze',
    'The Air Jordan 1 Retro High OG ‘Stage Haze’ features neutral tones on the foundational sneaker that started it all.',
    'Nike',
    'goat.com',
    7,
    'display',
    'https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/072/682/080/original/895937_01.jpg.jpeg?action=crop&width=950',
    'Like New',
    3
);


INSERT INTO sneakers (name, description, brand, purchase_place, size, type, image_path, condition, users_id)
VALUES (
    'Air Force 1 07 Triple White',
    'Modern twist on an old classic',
    'Nike',
    'Nike.com.au',
    9.5,
    'display',
    'https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/048/340/059/original/712867_01.jpg.jpeg?action=crop&width=950',
    'Excellent',
    1
);


INSERT INTO sneakers (name, description, brand, purchase_place, size, type, image_path, condition, users_id)
VALUES (
    'J. Cole x RS-Dreamer E-Line',
    'Nodding to the rapper’s extensive ties to New York City, the J. Cole x PUMA RS-Dreamer ‘E-Line’ gets its name from the subway service that runs from Jamaica, Queens, to Lower Manhattan.',
    'Puma',
    'footlocker.com.au',
    11.5,
    'for sale',
    'https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/065/467/197/original/818061_01.jpg.jpeg?action=crop&width=950',
    'Fair',
    2
);

INSERT INTO sneakers (name, description, brand, purchase_place, size, type, image_path, condition, users_id)
VALUES (
    'MB.01 Lo UFO',
    'Unique and awesome design influenced by Roswell',
    'Puma',
    'goat.com',
    13.5,
    'display',
    'https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/074/024/645/original/954578_08.jpg.jpeg?action=crop&width=1250',
    'Fair',
    2
);

INSERT INTO sneakers (name, description, brand, purchase_place, size, type, image_path, condition, users_id)
VALUES (
    'Yeezy Foam Runner ',
    'The adidas Yeezy Foam Runner ‘Desert Sand’ showcases a tonal beige finish throughout the molded one-piece build, crafted from a unique blend of lightweight EVA and harvested algae. ',
    'Adidas',
    'https://www.adidas.com.au/',
    10,
    'for sale',
    'https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/073/719/899/original/955441_01.jpg.jpeg?action=crop&width=950',
    'Great',
    1
);

INSERT INTO sneakers (name, description, brand, purchase_place, size, type, image_path, condition, users_id)
VALUES (
    'Adidas Forum Low',
    'White Royal Blue ',
    'Adidas',
    'https://www.adidas.com.au/',
    10,
    'for sale',
    'https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/055/890/481/original/742912_01.jpg.jpeg?action=crop&width=950',
    'Like New',
    1
);

INSERT INTO sneakers (name, description, brand, purchase_place, size, type, image_path, condition, users_id)
VALUES (
    'Balenciaga Logo Printed Speed Sneakers',
    'State of the art design ',
    'Balenciaga',
    'JD sports',
    8.5,
    'display',
    'https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/055/890/481/original/742912_01.jpg.jpeg?action=crop&width=950',
    'Fair',
    3
);

INSERT INTO sneakers (name, description, brand, purchase_place, size, type, image_path, condition, users_id)
VALUES (
    'Air Jordan Retro XV 2015',
    'Retro Air Jordans',
    'Nike',
    'JD sports',
    10,
    'for sale',
    'https://www.jordanwinery.com/wp-content/uploads/2019/03/2019-3-26-Air-Jordan-Jordan-Cabernet-Wine-Sneakers-Dropping-April-1-Photos-WEB-SIZE-2613-1.jpg',
    'Good',
    3
);

INSERT INTO sneakers (name, description, brand, purchase_place, size, type, image_path, condition, users_id)
VALUES (
    'Porsche 912 Limited Edition Sneakers',
    'Porsche limited editions',
    'Porsche',
    'Private Seller',
    10,
    'for sale',
    'https://newsroom.porsche.com/.imaging/mte/porsche-templating-theme/image_1080x624/dam/pnr/2020/products/Porsche-Design-X-Sonra/gallery/b-SONRA_PORSCHEDESIGN_On_Feet_Jeans1_Foto_Kane_Holz-scaled.jpg/jcr:content/b-SONRA_PORSCHEDESIGN_On_Feet_Jeans1_Foto_Kane_Holz-scaled.jpg',
    'Like New',
    3
);

INSERT INTO sneakers (name, description, brand, purchase_place, size, type, image_path, condition, users_id)
VALUES (
    'Nike Air Max 1 SP',
    'Limited edition Nikes',
    'Nike',
    'Private Seller',
    12,
    'display',
    'https://ybiu43xnnr-flywheel.netdna-ssl.com/wp-content/uploads/2013/07/616169-300-r1.jpg',
    'Like New',
    1
);

INSERT INTO listings (sneaker_id, users_id, listing_date, location, selling_price) 
VALUES (
    1,
    2,
    '2022-06-14',
    'Melbourne',
    1300
);

INSERT INTO listings (sneaker_id, users_id, listing_date, location, selling_price) 
VALUES (
    2,
    1,
    '2022-06-14',
    'Sydney',
    1100
);

INSERT INTO listings (sneaker_id, users_id, listing_date, location, selling_price) 
VALUES (
    3,
    3,
    '2022-06-14',
    'Sydney',
    1000
);

INSERT INTO listings (sneaker_id, users_id, listing_date, location, selling_price) 
VALUES (
    4,
    3,
    '2022-06-22',
    'Sydney',
    80
);


INSERT INTO listings (sneaker_id, users_id, listing_date, location, selling_price) 
VALUES (
    5,
    1,
    '2022-06-23',
    'Melbourne',
    130
);


INSERT INTO listings (sneaker_id, users_id, listing_date, location, selling_price) 
VALUES (
    6,
    2,
    '2022-06-24',
    'Perth',
    200
);

INSERT INTO listings (sneaker_id, users_id, listing_date, location, selling_price) 
VALUES (
    7,
    3,
    '2022-06-25',
    'Perth',
    2000
);

INSERT INTO listings (sneaker_id, users_id, listing_date, location, selling_price) 
VALUES (
    8,
    2,
    '2022-03-25',
    'Adelaide',
    1200
);

INSERT INTO listings (sneaker_id, users_id, listing_date, location, selling_price) 
VALUES (
    9,
    1,
    '2022-02-25',
    'Sydney',
    500
);



