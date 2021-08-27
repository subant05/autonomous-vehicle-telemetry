CREATE VIEW vehicles.vehicles_offline AS
SELECT * FROM vehicles.vehicles
WHERE id NOT IN (select vehicle_id from vehicles.vehicles_online)
