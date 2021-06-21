/* Replace with your SQL commands */
CREATE TABLE IF NOT EXISTS  geolocation.starfire_header(
    id BIGSERIAL,
    header_id BIGINT NOT NULL,
    readingAt TIMESTAMPTZ NOT NULL,
    seq DECIMAL NOT NULL,
    node VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
);


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
    PRIMARY KEY(id),
    CONSTRAINT fk_starfire_header
        FOREIGN KEY(header_id)
        REFERENCES geolocation.starfire_header(id)
);

CREATE TABLE IF NOT EXISTS  geolocation.starfire (
    id BIGSERIAL,
    readingAt TIMESTAMPTZ NOT NULL,
    topic_id BIGINT NOT NULL,
    msg_id BIGINT NOT NULL,
    vehicle_id BIGINT NOT NULL,
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