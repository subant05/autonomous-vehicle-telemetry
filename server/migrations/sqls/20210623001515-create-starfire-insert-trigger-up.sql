/* Replace with your SQL commands */
CREATE OR REPLACE FUNCTION geolocation.starfire_insert_notifcation()
    RETURNS TRIGGER
    AS $$
BEGIN
    perform pg_notify(
        'postgraphile:starfire_added',
        json_build_object(
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
    AFTER INSERT ON geolocation.starfire FOR EACH ROW
    EXECUTE PROCEDURE geolocation.starfire_insert_notifcation();


