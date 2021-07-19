/* Replace with your SQL commands */
CREATE OR REPLACE FUNCTION state.vehicle_logs_insert_update_notifcation()
    RETURNS TRIGGER
    AS $$
BEGIN
    perform pg_notify(
        'postgraphile:sql_vehicle_logs',
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

CREATE TRIGGER vehicle_logs_insert_update
    AFTER INSERT OR UPDATE ON state.vehicle_logs FOR EACH ROW
    EXECUTE PROCEDURE state.vehicle_logs_insert_update_notifcation();


