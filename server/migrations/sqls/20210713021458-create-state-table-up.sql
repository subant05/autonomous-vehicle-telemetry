/* Replace with your SQL commands */

CREATE TABLE IF NOT EXISTS  state.vehicle_states (
    id BIGSERIAL,
    name VARCHAR(255) UNIQUE NOT NULL,
    code INT UNIQUE NOT NULL,
    description text NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    PRIMARY KEY(id)
);

CREATE INDEX idx_state_vehicle_state_id
    ON state.vehicle_states (id);
CREATE INDEX idx_state_vehicle_state_code
    ON state.vehicle_states (code);

COMMENT ON TABLE state.vehicle_states IS '@omit delete
This is the vehicle states table, which is related to the various states a vehicles can have';
COMMENT ON COLUMN state.vehicle_states.id IS '@omit create,update
The ID of vehicle state type assigned by the database';
COMMENT ON COLUMN state.vehicle_states.name IS 'The name of vehicle state type';
COMMENT ON COLUMN state.vehicle_states.description IS 'The description of vehicle state type';
COMMENT ON COLUMN state.vehicle_states.created_at IS '@omit create,update
The date of vehicle state type was added to database';
COMMENT ON COLUMN state.vehicle_states.updated_at IS 'The date of vehicle state type was updated in database';

---- INSERT ENUMS ----
INSERT INTO state.vehicle_states 
(name, code)
VALUES
('UNINITIALIZED', 0),
('MOVING', 1),
('STOPPED', 2);

CREATE TABLE IF NOT EXISTS state.vehicle_state_reason(
    id BIGSERIAL,
    code BIGINT NOT NULL,
    name VARCHAR(50) NOT NULL,
    PRIMARY KEY(id)
);


CREATE INDEX idx_vehicle_state_reason_id
    ON state.vehicle_state_reason (id);
CREATE INDEX idx_vehicle_state_reason_code
    ON state.vehicle_state_reason (code);

COMMENT ON TABLE state.vehicle_state_reason IS 'This is table is used to store the enum state reasons';
COMMENT ON COLUMN state.vehicle_state_reason.id IS '@omit create,update
The ID of the state reasone assigned by the database';
COMMENT ON COLUMN state.vehicle_state_reason.code IS '@omit create,update
The enum value for the reason';
COMMENT ON COLUMN state.vehicle_state_reason.name IS 'The name for the reason';

---- INSERT ENUMS ----
INSERT INTO state.vehicle_state_reason 
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

CREATE TABLE IF NOT EXISTS state.status_message_header(
    id BIGSERIAL,
    headerId BIGINT NOT NULL,
    readingAt TIMESTAMPTZ NOT NULL,
    seq INT NOT NULL,
    node VARCHAR(100) NOT NULL,
    PRIMARY KEY(id)
);


CREATE INDEX idx_status_message_header_id
    ON state.status_message_header (id);

COMMENT ON TABLE state.status_message_header IS '@omit create,update
Table is used to store the message header for a status that was recieved from vehicle';
COMMENT ON COLUMN state.status_message_header.id IS '@omit create,update
Column is auto incremented by databased';
COMMENT ON COLUMN state.status_message_header.headerId IS '@omit create,update
The header id passed from the vehicle in its message header';
COMMENT ON COLUMN state.status_message_header.readingAt IS '@omit create,update
Is the timestamp of when the telemetry was recorded on the vehicle';
COMMENT ON COLUMN state.status_message_header.seq IS '@omit create,update
';
COMMENT ON COLUMN state.status_message_header.node IS '@omit create,update
IS the node responsible for the recording of telemetry';


CREATE TABLE IF NOT EXISTS state.status_message (
    id BIGSERIAL,
    header_id BIGINT NOT NULL,
    PRIMARY KEY(id),
    CONSTRAINT fk_status_message_header
        FOREIGN KEY (header_id)
        REFERENCES state.status_message_header(id)
);


CREATE INDEX idx_status_message_id
    ON state.status_message (id);

COMMENT ON TABLE state.status_message IS '@omit create,update
Table is used to store the message for a status that was recieved from vehicle';
COMMENT ON COLUMN state.status_message.id IS '@omit create,update
Column is auto incremented by database';
COMMENT ON COLUMN state.status_message.header_id IS '@omit create,update
Message header for the a status';

CREATE TABLE IF NOT EXISTS  state.vehicle_status (
    id BIGSERIAL,
    status_message_id BIGINT NOT NULL,
    vehicle_id BIGINT NOT NULL,
    topic_id BIGINT NOT NULL,
    state_id BIGINT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    readingAt TIMESTAMPTZ NOT NULL,
    PRIMARY KEY(id),
    CONSTRAINT fk_status_message
        FOREIGN KEY(status_message_id)
        REFERENCES state.status_message(id)
    CONSTRAINT fk_vehicles_status_id
        FOREIGN KEY(vehicle_id)
        REFERENCES vehicles.vehicles(id),
    CONSTRAINT fk_vehicles_state
        FOREIGN KEY(state_id)
        REFERENCES state.vehicle_states(id)
    CONSTRAINT fk_topic
        FOREIGN KEY (topic_id)
        REFERENCES topics.topics(id)
);

CREATE INDEX idx_vehicles_status_id
    ON state.vehicle_status(id);

CREATE INDEX idx_vehicles_status_vehicleid
    ON state.vehicle_status(vehicle_id);

COMMENT ON TABLE state.vehicle_status IS '@omit delete
This is the vehicles status table, which is related to vehicles current state';
COMMENT ON COLUMN state.vehicle_status.id IS '@omit create,update
The ID of vehicles status assigned by the database';
COMMENT ON COLUMN state.vehicle_status.vehicle_id IS 'The vehicle id of vehicle status';
COMMENT ON COLUMN state.vehicle_status.state_id IS 'The current state of the vehicle';
COMMENT ON COLUMN state.vehicle_status.created_at IS '@omit create,update
The timestamp vehicle status was added to the db';
COMMENT ON COLUMN state.vehicle_status.updated_at IS 'The timestamp vehicle status was updated on the db';


CREATE TABLE IF NOT EXISTS state.vehicle_status_detail(
    id BIGSERIAL,
    vehicle_status_id BIGINT NOT NULL,
    vehicle_status_reason_id BIGINT NOT NULL,
    is_active BOOLEAN NOT NULL,
    is_recoverable BOOLEAN NOT NULL,
    description text,
    PRIMARY KEY (id),
    CONSTRAINT fk_vehicles_status
        FOREIGN KEY (vehicle_status_id)
        REFERENCES state.vehicle_status(id),
    CONSTRAINT fk_vehicle_status_reason
        FOREIGN KEY (vehicle_status_reason_id)
        REFERENCES state.vehicle_state_reason(id)
);

CREATE INDEX idx_vehicle_status_detail_id
    ON state.vehicle_status_detail (id);
CREATE INDEX idx_vehicle_status_detail_vehicle_status_id
    ON state.vehicle_status_detail (vehicle_status_id);
CREATE INDEX idx_vehicle_status_detail_vehicle_status_reason_id
    ON state.vehicle_status_detail (vehicle_status_id);
    
COMMENT ON TABLE state.vehicle_status_detail IS 'This table provides the reason as to why the status of the vehicle changed';
COMMENT ON COLUMN state.vehicle_status_detail.vehicle_status_id IS '@omit create,update
This is the id of the status this reason is related to';
COMMENT ON COLUMN state.vehicle_status_detail.vehicle_status_reason_id IS '@omit create,update
This is the id of the state reason that is associated with this status reason';
COMMENT ON COLUMN state.vehicle_status_detail.is_active IS '@omit create,update
This used to indicate if reason is active';
COMMENT ON COLUMN state.vehicle_status_detail.is_recoverable IS '@omit create,update
This used to indicate if issue is recoverable';
COMMENT ON COLUMN state.vehicle_status_detail.description IS '@omit create,update
This used to give a descriptiom of the issue';


