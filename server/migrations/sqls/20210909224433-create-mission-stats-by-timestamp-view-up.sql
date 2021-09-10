/* Replace with your SQL commands */
create view state.mission_stats_by_timestamp as 
select 
	state.status_message_mission_stats.id  as id
	, mission_start_time
	, duration_autonomy_stopped
	, duration_autonomy_driving
	, duration_no_autonomy
	, duration_teleop
	, autonomy_distance_travelled_m
	, autonomy_area_travelled_sqm
	, num_stops
	, num_state_demotion
	, num_true_positives
	, num_false_positives
	, num_teleop_queries
	, state.vehicle_status.vehicle_id as vehicle_id
	, vehicles.vehicles.name as vehicle_name
from state.status_message_mission_stats 
inner join  state.status_message on state.status_message.mission_stats_id = state.status_message_mission_stats.id
inner join state.vehicle_status on state.vehicle_status.status_message_id = state.status_message.id
inner join vehicles.vehicles on vehicles.vehicles.id = state.vehicle_status.vehicle_id 
Order By state.vehicle_status.id DESC
LIMIT 1;