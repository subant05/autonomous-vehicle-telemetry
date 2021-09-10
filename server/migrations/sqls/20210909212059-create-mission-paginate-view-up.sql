Create View state.mission_pagination_view as
select 
	mission_start_time
	, COUNT(mission_start_time) as total_count
	, COUNT(mission_start_time) as mission_reading_count
	, state.vehicle_status.vehicle_id as vehicle_id
	, vehicles.vehicles.name as vehicle_name
from state.status_message_mission_stats 
inner join  state.status_message on state.status_message.mission_stats_id = state.status_message_mission_stats.id
inner join state.vehicle_status on state.vehicle_status.status_message_id = state.status_message.id
inner join vehicles.vehicles on vehicles.vehicles.id = state.vehicle_status.vehicle_id 
Group By (mission_start_time, vehicle_id, vehicles.vehicles.id)
Order By mission_start_time DESC;