/* Replace with your SQL commands */
CREATE TABLE IF NOT EXISTS production.missions(
    id BIGSERIAL,
    vehicle_id BIGINT NOT NULL,
    duration_autonomy_stopped bigint NOT NULL,
    duration_autonomy_driving bigint NOT NULL,
    duration_no_autonomy bigint NOT NULL,
    duration_teleop bigint NOT NULL,
    autonomy_distance_travelled_m numeric NOT NULL,
    autonomy_area_travelled_sqm numeric NOT NULL,
    num_stops bigint NOT NULL,
    num_state_demotion bigint NOT NULL,
    num_true_positives bigint NOT NULL,
    num_false_positives bigint NOT NULL,
    num_teleop_queries bigint NOT NULL,
    mission_start_time TIMESTAMPTZ NOT NULL,
    PRIMARY KEY(id),
    CONSTRAINT fk_vehicle_id
        FOREIGN KEY (vehicle_id)
        REFERENCES vehicles.vehicles(id),
    CONSTRAINT uq_vehicle_id_and_mission_start_time
        UNIQUE (vehicle_id, mission_start_time)
)

CREATE INDEX idx_mission_id ON production.missions(id);
CREATE INDEX idx_mission_vehicle_id ON production.missions(vehicle_id);
CREATE INDEX idx_mission_mission_start_time ON production.missions(mission_start_time);