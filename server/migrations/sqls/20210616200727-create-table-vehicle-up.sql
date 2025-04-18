/* Replace with your SQL commands */

CREATE TABLE IF NOT EXISTS  vehicles.vehicle_types (
    id BIGSERIAL,
    type varchar(255) UNIQUE NOT NULL,
    description text NULL,
    PRIMARY KEY(id)
);

CREATE INDEX idx_vehicle_types
    ON vehicles.vehicle_types(id);

COMMENT ON TABLE vehicles.vehicle_types IS '@omit delete
This is the vehicle type table, which is related to the type of vehicles that is sending data';
COMMENT ON COLUMN vehicles.vehicle_types.id IS '@omit create,update
The ID of vehicle type assigned by the database';
COMMENT ON COLUMN vehicles.vehicle_types.type IS 'The name of vehicle type';
COMMENT ON COLUMN vehicles.vehicle_types.description IS 'The description of vehicle type';

CREATE TABLE IF NOT EXISTS  vehicles.vehicles (
    id BIGSERIAL,
    device_id: VARCHAR(255) UNIQUE NOT NULL,
    name varchar(255) UNIQUE NOT NULL,
    type_id BIGINT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    ip VARCHAR(20) NOT NULL,
    decommissioned BOOLEAN NOT NULL DEFAULT false,
    PRIMARY KEY(id),
    CONSTRAINT fk_vehicles_type
      FOREIGN KEY(type_id) 
	  REFERENCES vehicles.vehicle_types(id)
);


CREATE INDEX idx_vehicles_vehicles_id
    ON vehicles.vehicles(id);

COMMENT ON TABLE vehicles.vehicles IS '@omit delete
This is the vehicles table, which is related vehicles that are registered and in use';
COMMENT ON COLUMN vehicles.vehicles.id IS '@omit create,update
The ID of vehicle assigned by the database';
COMMENT ON COLUMN vehicles.vehicles.device_id IS 'The ID of vehicle provided by the vehicle';
COMMENT ON COLUMN vehicles.vehicles.name IS 'The name of the vehicle provided by the vehicle';
COMMENT ON COLUMN vehicles.vehicles.type_id IS 'The type of the vehicle';
COMMENT ON COLUMN vehicles.vehicles.created_at IS '@omit create,update
The date of vehicle was added to the db';
COMMENT ON COLUMN vehicles.vehicles.created_at IS 'The date of vehicle was updated to the db';

CREATE TABLE IF NOT EXISTS  vehicles.vehicles_online (
    id BIGSERIAL,
    vehicle_id BIGINT UNIQUE NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    PRIMARY KEY(id),
    CONSTRAINT fk_vehicles_online
        FOREIGN KEY(vehicle_id)
        REFERENCES vehicles.vehicles(id)
);

CREATE INDEX idx_vehicles_online_id
    ON vehicles.vehicles_online(id);

CREATE INDEX idx_vehicles_online_vehicleid
    ON vehicles.vehicles_online(vehicle_id);

COMMENT ON TABLE vehicles.vehicles_online IS 'This is the vehicles online table, which is related to vehicles that are currently online';
COMMENT ON COLUMN vehicles.vehicles_online.id IS '@omit create,update
The ID of vehicles online assigned by the database';
COMMENT ON COLUMN vehicles.vehicles_online.vehicle_id IS 'The vehicle id of vehicle online';
COMMENT ON COLUMN vehicles.vehicles_online.created_at IS '@omit create,update
The timestamp vehicle came on line';
COMMENT ON COLUMN vehicles.vehicles_online.updated_at IS 'The timestamp vehicle was last on line';

CREATE TABLE IF NOT EXISTS  vehicles.vehicle_states (
    id BIGSERIAL,
    name VARCHAR(255) UNIQUE NOT NULL,
    code INT UNIQUE NOT NULL,
    description text NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    PRIMARY KEY(id)
);

COMMENT ON TABLE vehicles.vehicle_states IS '@omit delete
This is the vehicle states table, which is related to the various states a vehicles can have';
COMMENT ON COLUMN vehicles.vehicle_states.id IS '@omit create,update
The ID of vehicle state type assigned by the database';
COMMENT ON COLUMN vehicles.vehicle_states.name IS 'The name of vehicle state type';
COMMENT ON COLUMN vehicles.vehicle_states.description IS 'The description of vehicle state type';
COMMENT ON COLUMN vehicles.vehicle_states.created_at IS '@omit create,update
The date of vehicle state type was added to database';
COMMENT ON COLUMN vehicles.vehicle_states.updated_at IS 'The date of vehicle state type was updated in database';

---- INSERT ENUMS ----
INSERT INTO vehicles.vehicle_states 
(name, code)
VALUES
('UNINITIALIZED', 0),
('MOVING', 1),
('STOPPED', 2);

CREATE TABLE IF NOT EXISTS vehicles.vehicle_state_reason(
    id BIGSERIAL,
    code BIGINT NOT NULL,
    name VARCHAR(50) NOT NULL,
    PRIMARY KEY(id)
);

COMMENT ON TABLE vehicles.vehicle_state_reason IS 'This is table is used to store the enum state reasons';
COMMENT ON COLUMN vehicles.vehicle_state_reason.id IS '@omit create,update
The ID of the state reasone assigned by the database';
COMMENT ON COLUMN vehicles.vehicle_state_reason.code IS '@omit create,update
The enum value for the reason';
COMMENT ON COLUMN vehicles.vehicle_state_reason.name IS 'The name for the reason';

---- INSERT ENUMS ----
INSERT INTO vehicles.vehicle_state_reason 
(name, code)
VALUES
( 'OBJECT_DETECTION' , 1),
(  'PERCEPTION_TIMEOUT' , 2),
(  'SYSTEM_DELAY' , 3),
(  'OUT_OF_PATH' , 4),
(  'END_OF_PATH' , 5),
(  'TELEOP_RESPONSE_FAULT' , 6 ),
(  'TELEOP_TIMEOUT' , 7),
(  'TELEOP_REQUEST_OVERFLOW' , 8);

CREATE TABLE IF NOT EXISTS  vehicles.vehicle_status (
    id BIGSERIAL,
    vehicle_id BIGINT NOT NULL,
    state_id BIGINT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    PRIMARY KEY(id),
    CONSTRAINT fk_vehicles_status_id
        FOREIGN KEY(vehicle_id)
        REFERENCES vehicles.vehicles(id),
    CONSTRAINT fk_vehicles_state
        FOREIGN KEY(state_id)
        REFERENCES vehicles.vehicle_states(id)
);

CREATE INDEX idx_vehicles_status_id
    ON vehicles.vehicle_status(id);

CREATE INDEX idx_vehicles_status_vehicleid
    ON vehicles.vehicle_status(vehicle_id);

COMMENT ON TABLE vehicles.vehicle_status IS '@omit delete
This is the vehicles status table, which is related to vehicles current state';
COMMENT ON COLUMN vehicles.vehicle_status.id IS '@omit create,update
The ID of vehicles status assigned by the database';
COMMENT ON COLUMN vehicles.vehicle_status.vehicle_id IS 'The vehicle id of vehicle status';
COMMENT ON COLUMN vehicles.vehicle_status.state_id IS 'The current state of the vehicle';
COMMENT ON COLUMN vehicles.vehicle_status.created_at IS '@omit create,update
The timestamp vehicle status was added to the db';
COMMENT ON COLUMN vehicles.vehicle_status.updated_at IS 'The timestamp vehicle status was updated on the db';


CREATE TABLE IF NOT EXISTS vehicles.vehicle_status_details(
    id BIGSERIAL,
    vehicle_status_id BIGINT NOT NULL,
    vehicle_status_reason_id BIGINT NOT NULL,
    is_active BOOLEAN NOT NULL,
    is_recoverable BOOLEAN NOT NULL,
    description text,
    PRIMARY KEY (id),
    CONSTRAINT fk_vehicles_status
        FOREIGN KEY (vehicle_status_id)
        REFERENCES vehicles.vehicle_status(id),
    CONSTRAINT fk_vehicle_status_reason
        FOREIGN KEY (vehicle_status_reason_id)
        REFERENCES vehicles.vehicle_state_reason(id)
);

COMMENT ON TABLE vehicles.vehicle_status_details IS 'This table provides the reason as to why the status of the vehicle changed';
COMMENT ON COLUMN vehicles.vehicle_status_details.vehicle_status_id IS '@omit create,update
This is the id of the status this reason is related to';
COMMENT ON COLUMN vehicles.vehicle_status_details.vehicle_status_reason_id IS '@omit create,update
This is the id of the state reason that is associated with this status reason';


CREATE TABLE IF NOT EXISTS vehicles.vehicle_topics (
    id BIGSERIAL,
    vehicle_id BIGINT NOT NULL,
    topic_id BIGINT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    PRIMARY KEY (id),
    CONSTRAINT fk_vehicle_id
        FOREIGN KEY (vehicle_id)
        REFERENCES vehicles.vehicles(id),
    CONSTRAINT fk_topic_id
        FOREIGN KEY (topic_id)
        REFERENCES topics.topics(id)
);

CREATE INDEX idx_vehicle_topic_id
    ON vehicles.vehicle_topics (id);
CREATE INDEX idx_vehicle_topic_topic_id
    ON vehicles.vehicle_topics (topic_id);
CREATE INDEX idx_vehicle_topic_vehicle_id
    ON vehicles.vehicle_topics (vehicle_id);

COMMENT ON TABLE vehicles.vehicle_topics IS '@omit delete
This is the vehicles topics table, which is related to vehicles topics if produces';
COMMENT ON COLUMN vehicles.vehicle_topics.id IS '@omit create,update
The ID of vehicles topics assigned by the database';
COMMENT ON COLUMN vehicles.vehicle_topics.vehicle_id IS '@omit create,update
The vehicle id of vehicle that sent topic';
COMMENT ON COLUMN vehicles.vehicle_topics.topic_id IS '@omit create,update
The topic id  of topic vehicle sent';
COMMENT ON COLUMN vehicles.vehicle_topics.created_at IS '@omit create,update
The timestamp of topic vehicle sent';


