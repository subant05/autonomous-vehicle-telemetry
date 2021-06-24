/* Replace with your SQL commands */
CREATE OR REPLACE FUNCTION geolocation.starfire_insert_notifcation()
    RETURNS TRIGGER
    AS $$
BEGIN
    perform pg_notify(
        'postgraphile:sql_starfire',
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

CREATE TRIGGER starfire_insert
    AFTER INSERT OR UPDATE ON geolocation.starfire FOR EACH ROW
    EXECUTE PROCEDURE geolocation.starfire_insert_notifcation();


