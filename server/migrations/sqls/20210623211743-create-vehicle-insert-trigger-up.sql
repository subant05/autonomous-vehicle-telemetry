/* Replace with your SQL commands */
CREATE OR REPLACE FUNCTION vehicles.vehicle_insert_notifcation()
    RETURNS TRIGGER
    AS $$
BEGIN
    perform pg_notify(
        'postgraphile:sql_vehicle',
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

CREATE TRIGGER vehicle_insert
    AFTER INSERT OR UPDATE ON vehicles.vehicles FOR EACH ROW
    EXECUTE PROCEDURE vehicles.vehicle_insert_notifcation();
