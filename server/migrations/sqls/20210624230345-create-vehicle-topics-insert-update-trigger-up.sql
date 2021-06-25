/* Replace with your SQL commands */
CREATE OR REPLACE FUNCTION vehicles.vehicle_topics_prevent_duplicates()
    RETURNS TRIGGER
    AS $$
BEGIN
    IF EXISTS (SELECT 1 FROM vehicles.vehicle_topics
           		WHERE vehicle_id = NEW.vehicle_id 
				AND topic_id = NEW.topic_id
           		LIMIT 1) 
	THEN
        RETURN NULL;
    END IF;

    RETURN NEW;
END
$$
LANGUAGE plpgsql;

CREATE TRIGGER vehicle_topics_prevent_duplicates
    BEFORE INSERT OR UPDATE ON vehicles.vehicle_topics FOR EACH ROW 
    EXECUTE PROCEDURE vehicles.vehicle_topics_prevent_duplicates();