/* Replace with your SQL commands */
CREATE TABLE IF NOT EXISTS  geolocation.starfire_header(
    id BIGSERIAL,
    header_id BIGINT NOT NULL,
    readingAt TIMESTAMPTZ NOT NULL,
    seq DECIMAL NOT NULL,
    node VARCHAR(255) NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    PRIMARY KEY(id)
);

CREATE INDEX idx_starfire_header_id
    ON geolocation.starfire_header(id);
CREATE INDEX idx_starfire_header_header_id
    ON geolocation.starfire_header(header_id);

COMMENT ON TABLE geolocation.starfire_header IS '@omit delete
This is the starfire header table, which is related to the header object on the topic message';
COMMENT ON COLUMN geolocation.starfire_header.id IS '@omit create,update
The ID of starfire header assigned by the database';
COMMENT ON COLUMN geolocation.starfire_header.header_id IS 'The header id  of starfire header from vehicle';
COMMENT ON COLUMN geolocation.starfire_header.readingAt IS 'The timestamp of starfire header from vehicle';
COMMENT ON COLUMN geolocation.starfire_header.seq IS 'The seq of starfire header from vehicle';
COMMENT ON COLUMN geolocation.starfire_header.node IS 'The node of starfire header from vehicle';
COMMENT ON COLUMN geolocation.starfire_header.created_at IS '@omit create,update
The timestamp of starfire header added to the database';
COMMENT ON COLUMN geolocation.starfire_header.updated_at IS 'The timestamp of starfire header was updated on the database';

CREATE TABLE IF NOT EXISTS  geolocation.starfire_message (
    id BIGSERIAL,
    header_id BIGINT NOT NULL,
    pgn_address DECIMAL,
    serial_number DECIMAL,
    type VARCHAR(255),
    latitude DECIMAL,
    longitude DECIMAL,
    altitude DECIMAL,
    bearing DECIMAL,
    speed DECIMAL,
    pitch DECIMAL,
    roll DECIMAL,
    yaw_rate DECIMAL,
    correction_mode DECIMAL,
    snr_db DECIMAL,
    is_gps_locked BOOLEAN,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    PRIMARY KEY(id),
    CONSTRAINT fk_starfire_header
        FOREIGN KEY(header_id)
        REFERENCES geolocation.starfire_header(id)
);

CREATE INDEX idx_starfire_message_id
    ON geolocation.starfire_message(id);
CREATE INDEX idx_starfire_message_header_id
    ON geolocation.starfire_message(header_id);
CREATE INDEX idx_starfire_message_serial_number
    ON geolocation.starfire_message(serial_number);

COMMENT ON TABLE geolocation.starfire_message IS '@omit delete
This is the starfire message table, which is related to the header object on the topic';
COMMENT ON COLUMN geolocation.starfire_message.id IS '@omit create,update
The ID of starfire message assigned by the database';
COMMENT ON COLUMN geolocation.starfire_message.header_id IS 'The header id  of starfire message from vehicle';
COMMENT ON COLUMN geolocation.starfire_message.pgn_address IS 'The pgn_address of starfire message from vehicle';
COMMENT ON COLUMN geolocation.starfire_message.serial_number IS 'The serial number of starfire message from vehicle';
COMMENT ON COLUMN geolocation.starfire_message.type IS 'The type of starfire message from vehicle';
COMMENT ON COLUMN geolocation.starfire_message.latitude IS 'The latitude of starfire message from vehicle';
COMMENT ON COLUMN geolocation.starfire_message.longitude IS 'The longitude of starfire message from vehicle';
COMMENT ON COLUMN geolocation.starfire_message.altitude IS 'The altitude of starfire message from vehicle';
COMMENT ON COLUMN geolocation.starfire_message.bearing IS 'The bearing of starfire message from vehicle';
COMMENT ON COLUMN geolocation.starfire_message.speed IS 'The speed of starfire message from vehicle';
COMMENT ON COLUMN geolocation.starfire_message.pitch IS 'The pitch of starfire message from vehicle';
COMMENT ON COLUMN geolocation.starfire_message.roll IS 'The roll of starfire message from vehicle';
COMMENT ON COLUMN geolocation.starfire_message.yaw_rate IS 'The yaw_rate of starfire message from vehicle';
COMMENT ON COLUMN geolocation.starfire_message.correction_mode IS 'The correction_mode of starfire message from vehicle';
COMMENT ON COLUMN geolocation.starfire_message.snr_db IS 'The snr_db of starfire message from vehicle';
COMMENT ON COLUMN geolocation.starfire_message.is_gps_locked IS 'The is_gps_locked of starfire message from vehicle';
COMMENT ON COLUMN geolocation.starfire_message.created_at IS '@omit create,update
The timestamp of starfire message added to the database';
COMMENT ON COLUMN geolocation.starfire_message.updated_at IS 'The timestamp of starfire message was updated on the database';

CREATE TABLE IF NOT EXISTS  geolocation.starfire (
    id BIGSERIAL,
    readingAt TIMESTAMPTZ NOT NULL,
    topic_id BIGINT NOT NULL,
    msg_id BIGINT NOT NULL,
    vehicle_id BIGINT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    PRIMARY KEY(id),
    CONSTRAINT fk_starfire_topic
        FOREIGN KEY(topic_id)
        REFERENCES topics.topics(id),
    CONSTRAINT fk_starfire_message
        FOREIGN KEY(msg_id)
        REFERENCES geolocation.starfire_message(id)
    CONSTRAINT fk_vehicle_id
        FOREIGN KEY(vehicle_id)
        REFERENCES vehicles.vehicles(id)
);

CREATE INDEX idx_starfire_id
    ON geolocation.starfire(id);
CREATE INDEX idx_starfire_topic_id
    ON geolocation.starfire(topic_id);
CREATE INDEX idx_starfire_msg_id
    ON geolocation.starfire(msg_id);
CREATE INDEX idx_starfire_vehicle_id
    ON geolocation.starfire(vehicle_id);

COMMENT ON TABLE geolocation.starfire IS '@omit delete
This is the starfire table, which is related to the header object on the topic';
COMMENT ON COLUMN geolocation.starfire.id IS '@omit create,update
The ID of starfire assigned by the database';
COMMENT ON COLUMN geolocation.starfire.readingAt IS 'The reading timestamp of starfire message from vehicle';
COMMENT ON COLUMN geolocation.starfire.topic_id IS 'The topic of starfire message from vehicle';
COMMENT ON COLUMN geolocation.starfire.msg_id IS 'The message information of starfire message from vehicle';
COMMENT ON COLUMN geolocation.starfire.vehicle_id IS 'The vehicle id information of starfire message';
COMMENT ON COLUMN geolocation.starfire.created_at IS '@omit create,update
The timestamp starfire was added to database';
COMMENT ON COLUMN geolocation.starfire.updated_at IS '@omit create,update
The timestamp starfire was updated on database';
