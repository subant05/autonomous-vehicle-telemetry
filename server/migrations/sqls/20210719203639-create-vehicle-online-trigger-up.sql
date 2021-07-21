/* Replace with your SQL commands */
CREATE OR REPLACE FUNCTION vehicles.vehicles_online_insert_update_delete()
    RETURNS TRIGGER
    AS $$
    DECLARE
    row RECORD;
BEGIN
    IF (TG_OP = 'DELETE') THEN
      row = OLD;
    ELSE
      row = NEW;
    END IF;

    perform pg_notify(
        'postgraphile:sql_vehicles_online',
        json_build_object(
          'event', TG_OP,
          'row',row_to_json(row),
          '__node__', json_build_array(
            NEW.ID
          )
        )::text
      );
	RETURN NEW;
END
$$
LANGUAGE plpgsql;

CREATE TRIGGER vehicles_online_insert_update_delete
    AFTER INSERT OR UPDATE OR DELETE ON vehicles.vehicles_online FOR EACH ROW
    EXECUTE PROCEDURE vehicles.vehicles_online_insert_update_delete();
