/* Replace with your SQL commands */
CREATE OR REPLACE FUNCTION  detection.objects_insert_update_notification()
    RETURNS TRIGGER
    AS $$
BEGIN
        perform pg_notify(
            'postgraphile:sql_detection_objects',
            json_build_object(
            'event', TG_OP,
            '__node__', json_build_array(
                NEW.ID
            )
            )::text
        );
	RETURN NEW;
END
$$
LANGUAGE plpgsql;

CREATE TRIGGER detection_objects_insert_update
    AFTER INSERT OR UPDATE ON  detection.objects FOR EACH ROW
    EXECUTE PROCEDURE  detection.objects_insert_update_notification();
