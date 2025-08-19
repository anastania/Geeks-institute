-- 1. Compter combien d'acteurs il y a dans la table
SELECT COUNT(*) AS total_acteurs
FROM actors;

-- 2. Essayer d’ajouter un acteur avec des champs vides
-- (cas 1 : complètement vide)
INSERT INTO actors (first_name, last_name)
VALUES ('', '');

-- (cas 2 : un seul champ rempli)
INSERT INTO actors (first_name)
VALUES ('John');

-- - Si les colonnes sont définies avec NOT NULL → erreur.
-- - Si elles acceptent NULL ou vide → la ligne sera insérée,
--   mais avec des valeurs vides ou NULL.
