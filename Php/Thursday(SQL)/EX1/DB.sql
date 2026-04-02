create DATABASE ADVANCEDSQL;
use ADVANCEDSQL;

-- Création de la table des utilisateurs
CREATE TABLE utilisateurs (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    type ENUM('client', 'livreur') NOT NULL
);

-- Création de la table des restaurants
CREATE TABLE restaurants (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(100) NOT NULL,
    ville VARCHAR(100),
    note_moy DECIMAL(3, 2) DEFAULT 0.00
);

-- Création de la table des plats
CREATE TABLE plats (
    id INT PRIMARY KEY AUTO_INCREMENT,
    restaurant_id INT,
    nom VARCHAR(100) NOT NULL,
    prix DECIMAL(10, 2) NOT NULL,
    categorie VARCHAR(50),
    FOREIGN KEY (restaurant_id) REFERENCES restaurants(id) ON DELETE CASCADE
);

-- Création de la table des commandes
CREATE TABLE commandes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    client_id INT,
    livreur_id INT,
    restaurant_id INT,
    statut VARCHAR(50) DEFAULT 'en_attente',
    total DECIMAL(10, 2) DEFAULT 0.00,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (client_id) REFERENCES utilisateurs(id),
    FOREIGN KEY (livreur_id) REFERENCES utilisateurs(id),
    FOREIGN KEY (restaurant_id) REFERENCES restaurants(id)
);

-- Création de la table des lignes de commande (détails)
CREATE TABLE lignes_commande (
    id INT PRIMARY KEY AUTO_INCREMENT,
    commande_id INT,
    plat_id INT,
    quantite INT NOT NULL,
    prix_unit DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (commande_id) REFERENCES commandes(id) ON DELETE CASCADE,
    FOREIGN KEY (plat_id) REFERENCES plats(id)
);

-- Création de la table des notations
CREATE TABLE notations (
    id INT PRIMARY KEY AUTO_INCREMENT,
    commande_id INT , 
    note INT CHECK (note BETWEEN 1 AND 5), 
    commentaire TEXT,
    FOREIGN KEY (commande_id) REFERENCES commandes(id) ON DELETE CASCADE
);



INSERT INTO utilisateurs (nom, email, type) VALUES
('Omar El Fassi', 'omar.fassi@email.com', 'client'),
('Sara Mansouri', 'sara.m@email.com', 'client'),
('Mehdi Benjelloun', 'mehdi.ben@email.com', 'client'),
('Anas Alaoui', 'anas.a@email.com', 'client'),
('Sofia Drissi', 'sofia.d@email.com', 'client'),
('Yassine Kassimi', 'yassine.k@email.com', 'client'),
('Leila Amrani', 'leila.a@email.com', 'client'),
('Karim Tazi', 'karim.tazi@email.com', 'livreur'),
('Hicham Lahlou', 'hicham.l@email.com', 'livreur'),
('Amine Rouani', 'amine.r@email.com', 'livreur'),
('Zineb Bennis', 'zineb.b@email.com', 'livreur');
insert into utilisateurs (nom , email, `type`) VALUES ('rahmani amine', 'amine@gmail.com', 'livreur');

INSERT INTO restaurants (nom, ville, note_moy) VALUES
('Le Petit Marrakech', 'Marrakech', 4.5),
('Sushi Zen', 'Casablanca', 4.8),
('Pasta & Basta', 'Rabat', 4.2),
('Burger House', 'Marrakech', 3.9),
('O’Tacos City', 'Agadir', 4.0),
('La Trattoria', 'Marrakech', 4.7);

INSERT into restaurants (nom , ville , note_moy )values  ('La Tjjjrattoria', 'Marjjjrakech', 3.7);


INSERT INTO plats (restaurant_id, nom, prix, categorie) VALUES
(1, 'Tagine de Poulet', 85.00, 'Plat Principal'),
(1, 'Couscous Royal', 110.00, 'Plat Principal'),
(2, 'California Roll 8pc', 65.00, 'Sushi'),
(2, 'Miso Soup', 25.00, 'Entrée'),
(2, 'Plateau Mixte 24pc', 180.00, 'Sushi'),
(3, 'Lasagnes Maison', 75.00, 'Pâtes'),
(3, 'Pâtes Carbonara', 70.00, 'Pâtes'),
(4, 'Classic Cheeseburger', 55.00, 'Burger'),
(4, 'BBQ Bacon Burger', 65.00, 'Burger'),
(4, 'Frites Large', 15.00, 'Accompagnement'),
(5, 'Tacos L', 45.00, 'Fast Food'),
(5, 'Tacos XL', 60.00, 'Fast Food'),
(6, 'Pizza Margherita', 60.00, 'Pizza'),
(6, 'Pizza 4 Saisons', 85.00, 'Pizza');


INSERT INTO commandes (client_id, livreur_id, restaurant_id, statut, total, created_at) VALUES
(1, 8, 1, 'livré', 195.00, '2026-03-28 12:30:00'),
(2, 9, 2, 'livré', 90.00, '2026-03-28 13:15:00'),
(3, 10, 4, 'livré', 135.00, '2026-03-28 20:00:00'),
(4, 8, 3, 'livré', 145.00, '2026-03-29 19:45:00'),
(1, 11, 2, 'livré', 180.00, '2026-03-29 21:10:00'),
(5, 9, 5, 'livré', 105.00, '2026-03-30 12:00:00'),
(6, 10, 6, 'livré', 170.00, '2026-03-30 20:30:00'),
(2, 8, 1, 'livré', 85.00, '2026-03-31 13:00:00'),
(7, 11, 4, 'livré', 70.00, '2026-03-31 19:00:00'),
(3, 9, 1, 'en_attente', 110.00, '2026-04-01 11:30:00'),
(1, 10, 3, 'livré', 70.00, '2026-04-01 12:45:00'),
(4, 8, 6, 'annulé', 60.00, '2026-04-01 14:00:00'),
(5, 11, 2, 'livré', 245.00, '2026-04-02 09:00:00');


INSERT INTO lignes_commande (commande_id, plat_id, quantite, prix_unit) VALUES
(1, 1, 1, 85.00), (1, 2, 1, 110.00), -- Commande 1
(2, 3, 1, 65.00), (2, 4, 1, 25.00), -- Commande 2
(3, 8, 2, 55.00), (3, 10, 1, 15.00), (3, 9, 1, 65.00), -- Commande 3
(4, 6, 1, 75.00), (4, 7, 1, 70.00), -- Commande 4
(5, 5, 1, 180.00), -- Commande 5
(6, 11, 1, 45.00), (6, 12, 1, 60.00), -- Commande 6
(7, 13, 1, 60.00), (7, 14, 1, 85.00), -- Commande 7
(11, 7, 1, 70.00), -- Commande 11
(13, 3, 1, 65.00), (13, 5, 1, 180.00); -- Commande 13


INSERT INTO notations (commande_id, note, commentaire) VALUES
(1, 5, 'Excellent tajine, encore chaud !'),
(2, 4, 'Sushi très frais mais un peu long à arriver.'),
(3, 3, 'Burger correct, mais les frites étaient froides.'),
(4, 5, 'Meilleures lasagnes de la ville.'),
(5, 5, 'Top !'),
(7, 4, 'La pizza était très bonne.'),
(11, 2, 'Erreur dans la commande, déçu.'),
(13, 5, 'Rapport qualité prix imbattable.');



