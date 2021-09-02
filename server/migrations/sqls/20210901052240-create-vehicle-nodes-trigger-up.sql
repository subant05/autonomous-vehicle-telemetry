/* Replace with your SQL commands */
CREATE OR REPLACE FUNCTION  logging.vehicle_log_nodes_insert()
    RETURNS TRIGGER
    AS $$
BEGIN
        INSERT INTO vehicles.vehicle_nodes (vehicle_id, node)
        SELECT 
            NEW.vehicle_id as vehicle_id,
            name as node
        FROM logging.vehicle_log_messages
        WHERE id = NEW.message_id;
		
  	RETURN NEW;

EXCEPTION
	   WHEN SQLSTATE '23000' THEN
		  	RETURN NEW;
		WHEN others THEN
			RETURN NEW;
END
$$
LANGUAGE plpgsql;

CREATE TRIGGER vehicle_nodes_trigger
    AFTER INSERT ON  logging.vehicle_logs FOR EACH ROW
    EXECUTE PROCEDURE  logging.vehicle_log_nodes_insert();