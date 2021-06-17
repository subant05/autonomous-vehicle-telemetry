/* Replace with your SQL commands */
CREATE TABLE IF NOT EXISTS  geolocation.starfire_header(
    id BIGSERIAL,
    header_id BIGINT NOT NULL,
    readingAt TIMESTAMPTZ NOT NULL,
    seq DECIMAL NOT NULL,
    node VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS  geolocation.starfire_message_data(
    id BIGSERIAL,
    data text NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS  geolocation.starfire_path_rectangle_states(
    id BIGSERIAL,
    data text NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS  geolocation.starfire_xy (
    id BIGSERIAL,
    x DECIMAL NOT NULL,
    y DECIMAL NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS  geolocation.starfire_message (
    id BIGSERIAL,
    header_id BIGINT NOT NULL,
    is_rtr BOOLEAN,
    is_extended BOOLEAN,
    is_error BOOLEAN,
    dlc DECIMAL,
    data_id BIGINT,
    sf_to_tractor_front_m DECIMAL,
    implement_width_m DECIMAL,
    on_path_buffer_m DECIMAL,
    starfire_xy_m_id BIGINT,
    path_rectangle_states_id BIGINT,
    pgn_address INT,
    serial_number DECIMAL,
    type VARCHAR(255),
    latitude DECIMAL,
    longitude DECIMAL,
    altitude DECIMAL,
    bearing INT,
    speed DECIMAL,
    pitch DECIMAL,
    roll INT,
    yaw_rate INT,
    correction_mode INT,
    snr_db INT,
    is_gps_locked BOOLEAN,
    PRIMARY KEY(id),
    CONSTRAINT fk_path_rectangle_states
        FOREIGN KEY(path_rectangle_states_id)
        REFERENCES geolocation.starfire_path_rectangle_states(id),
    CONSTRAINT fk_starfire_xy
        FOREIGN KEY(starfire_xy_m_id)
        REFERENCES geolocation.starfire_xy(id),
    CONSTRAINT fk_starfire__message_data
        FOREIGN KEY(data_id)
        REFERENCES geolocation.starfire_message_data(id),
    CONSTRAINT fk_starfire_header
        FOREIGN KEY(header_id)
        REFERENCES geolocation.starfire_header(id)
);

CREATE TABLE IF NOT EXISTS  geolocation.starfire (
    id BIGSERIAL,
    readingAt TIMESTAMPTZ NOT NULL,
    topic_id BIGINT NOT NULL,
    msg_id BIGINT NOT NULL,
    topic_type_id BIGINT NOT NULL,
    PRIMARY KEY(id),
    CONSTRAINT fk_starfire_topic
        FOREIGN KEY(topic_id)
        REFERENCES topics.topics(id),
    CONSTRAINT fk_starfire_topic_type_id
        FOREIGN KEY(topic_type_id)
        REFERENCES topics.topic_types(id),
    CONSTRAINT fk_starfire_message
        FOREIGN KEY(msg_id)
        REFERENCES geolocation.starfire_message(id)
);