use ADVANCEDSQL;

-- first request (LEFT JOIN — Tous les restaurants avec leur nombre de commandes (y compris ceux à 0 commande)
select r.* , count(c.id) as NumberOfOrders
from restaurants r 
left join commandes c 
on r.id = c.restaurant_id
group by r.id 


-- second request : (LEFT JOIN + GROUP BY — Pour chaque livreur, afficher son nom et le nombre de livraisons effectuées (statut = 'livré'), même s'il n'en a aucune))
select u.* , count(c.id)
from utilisateurs u 
left join commandes c 
on u.id = c.livreur_id
where u.`type` = 'livreur'
group by u.id 


-- third request : (Sous-requête IN — Afficher les clients qui ont passé au moins une commande dont le total dépasse 30€)
select u.* 
from utilisateurs u 
where u.id IN (
    select c.client_id from commandes c 
    where c.total > 30
);


-- fourth request : Sous-requête NOT IN — Afficher les restaurants qui n'ont reçu AUCUNE commande
select r.* 
from restaurants r 
where r.id NOT IN (
    select c.restaurant_id  from commandes c
)


-- fifth request : GROUP BY + HAVING — Restaurants ayant reçu plus de 3 commandes ET un chiffre d'affaires total > 80€
-- frist way : 
select r.* 
from restaurants r 
inner join commandes c
on c.restaurant_id = r.id
GROUP BY r.id
having count(c.id) > 3 and sum(c.total) > 80;

-- second way : 
select r.* 
from restaurants r
where r.id in (
    select c.restaurant_id from commandes c
    group by c.restaurant_id
    having count(c.id) > 3 and sum(c.total) > 80
);


-- sixth request : JOIN 3 tables + GROUP BY — Pour chaque client, son nom et la somme totale dépensée, triée du plus gros au plus petit 
select u.nom , sum(l.prix_unit) as totalDEpenses
from utilisateurs u 
inner join commandes c on c.client_id = u.id 
inner join lignes_commande l on c.id = l.commande_id
GROUP BY u.id
ORDER BY totalDEpenses desc;


-- seventh : Sous-requête EXISTS — Livreurs ayant au moins une notation > 4 (via la table notations et commandes)
select u.id , u.nom
from utilisateurs u 
where EXISTS (
    SELECT 1 from commandes c
    inner join notations n 
    on n.commande_id = c.id
    where u.id = c.livreur_id and n.note > 4 
);


-- Eighth request : EXPLAIN — Lancez EXPLAIN sur la requête n°6 et identifiez si un index manque. Créez-le si nécessaire.

EXPLAIN select u.nom , sum(l.prix_unit) as totalDEpenses
from utilisateurs u 
inner join commandes c on c.client_id = u.id 
inner join lignes_commande l on c.id = l.commande_id
GROUP BY u.id
ORDER BY totalDEpenses desc;

CREATE INDEX idx_lign_commande_id ON lignes_commande(commande_id);
CREATE INDEX idx_lign_id ON lignes_commande(id);




