/* Replace with your SQL commands */
CREATE VIEW vehicles.online_vehicles AS 
SELECT DISTINCT
	 alert_type.name as alert_name,
	 alert_type.severity as alert_severity,
	 alert.message as alert_message,
	 online.id as id,
	 online.vehicle_id as vehicle_id,
	 vehicle.name as vehicle_name,
	 vehicle.ip as ip,
	 vehicle.device_id as device_id
FROM vehicles.vehicles_online as online
LEFT OUTER JOIN vehicles.vehicles as vehicle on vehicle.id = online.vehicle_id
LEFT OUTER JOIN (
	select * 
	from state.vehicle_status 
	order by id desc) as status on status.vehicle_id = online.vehicle_id
LEFT OUTER JOIN (
	select * 
	from notifications.alerts 
	order by id desc) as alert on alert.vehicle_status_id = status.id
LEFT OUTER JOIN  notifications.alert_types as alert_type on alert_type.id = alert.alert_type_id
ORDER BY online.id DESC