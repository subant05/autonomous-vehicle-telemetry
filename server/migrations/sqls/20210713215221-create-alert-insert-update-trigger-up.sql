/* Replace with your SQL commands */
CREATE OR REPLACE FUNCTION  notifications.alerts_insert_update_notifcation()
    RETURNS TRIGGER
    AS $$
BEGIN
        perform pg_notify(
            'postgraphile:sql_alerts',
            json_build_object(
            'event', TG_ALERT,
            '__node__', json_build_array(
                NEW.ID
            )
            )::text
        );
	RETURN NEW;
END
$$
LANGUAGE plpgsql;

CREATE TRIGGER alerts_insert_update
    AFTER INSERT OR UPDATE ON  notifications.alerts FOR EACH ROW
    EXECUTE PROCEDURE  notifications.alerts_insert_update_notifcation();
