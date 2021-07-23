/* Replace with your SQL commands */
CREATE TABLE IF NOT EXISTS logging.vehicle_logs(
    id BIGSERIAL,
    description text NOT NULL,
    vehicle_id BIGINT NOT NULL,
    readingAt TIMESTAMPTZ NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    PRIMARY KEY(id),
    CONSTRAINT fk_vehicle_id
        FOREIGN KEY (vehicle_id)
        REFERENCES vehicles.vehicles(id)
);

COMMENT ON TABLE logging.vehicle_logs IS 'Vehicle logs table contains the logs the are streamed from the vehicle';
COMMENT ON COLUMN logging.vehicle_logs.id IS '@omit create,update
This is the id of the log and its autoincremented';
COMMENT ON COLUMN logging.vehicle_logs.description IS '@omit create,update
This is the description of the log';
COMMENT ON COLUMN logging.vehicle_logs.vehicle_id IS '@omit create,update
This is the vehicle id the log is associated with';
COMMENT ON COLUMN logging.vehicle_logs.vehicle_id IS '@omit create,update
The timestamp the log was created on the vehicle';
COMMENT ON COLUMN logging.vehicle_logs.vehicle_id IS '@omit create,update
The timestamp the log was entered into the database';

CREATE INDEX idx_vehicle_logs_id ON logging.vehicle_logs(id);
CREATE INDEX idx_vehicle_logs_vehicle_id ON logging.vehicle_logs(vehicle_id);