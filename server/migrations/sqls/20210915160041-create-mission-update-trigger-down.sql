/* Replace with your SQL commands */
DROP TRIGGER mission_update_trigger ON state.status_message_mission_stats;
DROP FUNCTION production.missions_insert();
/* Replace with your SQL commands */
DROP TRIGGER mission_insert_update_trigger ON production.missions;
DROP FUNCTION production.missions_insert_update_notification();