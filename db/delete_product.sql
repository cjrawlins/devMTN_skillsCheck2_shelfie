DELETE FROM inventory
WHERE id = $1;

SELECT * FROM inventory
ORDER BY id;