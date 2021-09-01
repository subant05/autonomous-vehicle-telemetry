/* Replace with your SQL commands */
CREATE OR REPLACE FUNCTION  vehicles.vehicle_nodes_de_duplicate()
    RETURNS TRIGGER
    AS $$
BEGIN
        DELETE FROM
            vehicles.vehicle_nodes a
                USING vehicles.vehicle_nodes b
        WHERE
            a.id < b.id
            AND a.vehicle_id = b.vehicle_id
            AND a.node = b.node;
	RETURN NEW;
END
$$
LANGUAGE plpgsql;

CREATE TRIGGER vehicle_nodes_trigger
    AFTER INSERT ON  vehicles.vehicle_nodes FOR EACH ROW
    EXECUTE PROCEDURE  vehicles.vehicle_nodes_de_duplicate();
