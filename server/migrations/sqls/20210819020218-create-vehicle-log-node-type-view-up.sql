CREATE VIEW logging.vehicle_log_node_types AS
SELECT  
    DISTINCT logging.vehicle_log_messages.name as node_type, 
    vehicles.vehicles.id as vehicle_id,
    vehicles.vehicles.name as vehicle_name
FROM logging.vehicle_log_messages
INNER JOIN logging.vehicle_logs ON logging.vehicle_logs.message_id = logging.vehicle_log_messages.id
INNER JOIN vehicles.vehicles ON vehicles.vehicles.id = logging.vehicle_logs.vehicle_id;