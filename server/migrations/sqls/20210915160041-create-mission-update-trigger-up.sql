/* Replace with your SQL commands */
/* Replace with your SQL commands */
CREATE OR REPLACE FUNCTION production.missions_insert()
    RETURNS TRIGGER
    AS $$
BEGIN
        UPDATE production.missions
        SET 
            duration_autonomy_stopped = NEW.duration_autonomy_stopped, 
            duration_autonomy_driving = NEW.duration_autonomy_driving,
            duration_no_autonomy =NEW.duration_no_autonomy,
            duration_teleop = NEW.duration_teleop,
            autonomy_distance_travelled_m = NEW.autonomy_distance_travelled_m,
            autonomy_area_travelled_sqm = NEW.autonomy_area_travelled_sqm,
            num_stops = NEW.num_stops,
            num_state_demotion = NEW.num_state_demotion,
            num_true_positives = NEW.num_true_positives,
            num_false_positives = NEW.num_false_positives,
            num_teleop_queries = NEW.num_teleop_queries
        WHERE
            mission_start_time = NEW.mission_start_time
			AND vehicle_id = (SELECT 
                vehicle_id
            FROM state.vehicle_status
            INNER JOIN state.status_message On state.status_message.id = state.vehicle_status.status_message_id
            INNER JOIN state.status_message_mission_stats ON state.status_message_mission_stats.id = state.status_message.mission_stats_id
            WHERE state.status_message_mission_stats.id  = NEW.id);
    IF NOT FOUND THEN 
            INSERT INTO production.missions (
                vehicle_id, 
                duration_autonomy_stopped, 
                duration_autonomy_driving,
                duration_no_autonomy,
                duration_teleop,
                autonomy_distance_travelled_m,
                autonomy_area_travelled_sqm,
                num_stops,
                num_state_demotion,
                num_true_positives,
                num_false_positives,
                num_teleop_queries,
                mission_start_time)
        SELECT 
                vehicle_id,
                NEW.duration_autonomy_stopped, 
                NEW.duration_autonomy_driving,
                NEW.duration_no_autonomy,
                NEW.duration_teleop,
                NEW.autonomy_distance_travelled_m,
                NEW.autonomy_area_travelled_sqm,
                NEW.num_stops,
                NEW.num_state_demotion,
                NEW.num_true_positives,
                NEW.num_false_positives,
                NEW.num_teleop_queries,
                NEW.mission_start_time
            FROM state.vehicle_status
            INNER JOIN state.status_message On state.status_message.id = state.vehicle_status.status_message_id
            INNER JOIN state.status_message_mission_stats ON state.status_message_mission_stats.id = state.status_message.mission_stats_id
            WHERE state.status_message_mission_stats.id  = NEW.id 
            AND NOT EXISTS (
                    SELECT 1 FROM production.missions  
                    WHERE vehicle_id=NEW.id 
                    AND mission_start_time = NEW.mission_start_time
                    );
    END IF;
            
  	RETURN NEW;

EXCEPTION
	   WHEN SQLSTATE '23000' THEN
		  	RETURN NEW;
		WHEN others THEN
			RETURN NEW;
END
$$
LANGUAGE plpgsql;

CREATE TRIGGER mission_update_trigger
    AFTER INSERT ON  state.status_message_mission_stats FOR EACH ROW
    EXECUTE PROCEDURE production.missions_insert();


/* Replace with your SQL commands */
CREATE OR REPLACE FUNCTION  production.missions_insert_update_notification()
    RETURNS TRIGGER
    AS $$
BEGIN
        perform pg_notify(
            'postgraphile:sql_mission',
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

CREATE TRIGGER mission_insert_update_trigger
    AFTER INSERT OR UPDATE ON  production.missions FOR EACH ROW
    EXECUTE PROCEDURE  production.missions_insert_update_notification()
