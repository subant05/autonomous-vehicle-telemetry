/* Replace with your SQL commands */
CREATE OR REPLACE FUNCTION  images.camera_insert_update_notifcation()
    RETURNS TRIGGER
    AS $$
BEGIN
        perform pg_notify(
            'postgraphile:sql_camera',
            json_build_object(
            'event', TG_OP,
            'id', NEW.ID,
            '__node__', json_build_array(
                NEW.ID
            )
            )::text
        );
	RETURN NEW;
END
$$
LANGUAGE plpgsql;

CREATE TRIGGER camera_insert
    AFTER INSERT ON  images.camera FOR EACH ROW
    EXECUTE PROCEDURE  images.camera_insert_update_notifcation();
