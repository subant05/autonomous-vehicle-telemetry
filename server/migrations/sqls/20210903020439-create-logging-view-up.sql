/* Replace with your SQL commands */
CREATE VIEW logging.vehicle_log_view AS
SELECT 
	vl.id
	, vl.readingat
	, vl_m.level
	, vl_m.name as node
	, vl_m.msg
	, vl_m.file
	, vl_m.function
	, vl_m.line
	, vl_stamp.sec
	, vl_stamp.nanosec
	, vh.name as vehicle_name
	, vh.ip
	, vh.id as vehicle_id
	, vh.device_id
	, vh.decommissioned
	, t.name as topic_name
	, t.id as topic_id
FROM logging.vehicle_logs as vl
INNER JOIN logging.vehicle_log_messages as vl_m On vl.message_id = vl_m.id
INNER JOIN logging.vehicle_log_message_stamps as vl_stamp On vl_stamp.id = vl_m.stamp_id
INNER JOIN vehicles.vehicles as vh ON vh.id = vl.vehicle_id
INNER JOIN topics.topics as t ON t.id = vl.topic_id