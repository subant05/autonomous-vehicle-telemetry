/* Replace with your SQL commands */
CREATE TABLE IF NOT EXISTS logging.vehicle_log_message_stamps(
    id BIGSERIAL,
    sec BIGINT NOT NULL,
    nanosec BIGINT NOT NULL,
    PRIMARY KEY(id)
);

COMMENT ON TABLE logging.vehicle_log_message_stamps IS 'Vehicle logs messages stamps table';
COMMENT ON COLUMN logging.vehicle_log_message_stamps.id IS '@omit create,update
This is the id of the log and its autoincremented';
COMMENT ON COLUMN logging.vehicle_log_message_stamps.sec IS '@omit create,update
This is the sec of the log stamp';
COMMENT ON COLUMN logging.vehicle_log_message_stamps.nanosec IS '@omit create,update
This is the snanosecec of the log stamp';


CREATE TABLE IF NOT EXISTS logging.vehicle_log_messages(
    id BIGSERIAL,
    level BIGINT NOT NULL,
    name VARCHAR(255) NOT NULL,
    msg text,
    file text NOT NULL,
    function VARCHAR(255) NOT NULL,
    line INT NOT NULL,
    stamp_id BIGINT NOT NULL,
    PRIMARY KEY(id),
        CONSTRAINT fk_vehicle_log_message_stamp_id
        FOREIGN KEY (stamp_id)
        REFERENCES logging.vehicle_log_message_stamps(id)
);

COMMENT ON TABLE logging.vehicle_log_messages IS 'Vehicle logs messages table';
COMMENT ON COLUMN logging.vehicle_log_messages.id IS '@omit create,update
This is the id of the log and its autoincremented';
COMMENT ON COLUMN logging.vehicle_log_messages.level IS '@omit create,update
This is the level or severity of log';
COMMENT ON COLUMN logging.vehicle_log_messages.name IS '@omit create,update
This is the name of log';
COMMENT ON COLUMN logging.vehicle_log_messages.msg IS '@omit create,update
This is the description of the log';
COMMENT ON COLUMN logging.vehicle_log_messages.file IS '@omit create,update
This is the file from which the log was generated from';
COMMENT ON COLUMN logging.vehicle_log_messages.function IS '@omit create,update
This is the function from which the log was generated from';
COMMENT ON COLUMN logging.vehicle_log_messages.line IS '@omit create,update
This is the line from which the log was generated from';
COMMENT ON COLUMN logging.vehicle_log_messages.stamp_id IS '@omit create,update
This stamp associated wih the logging message of the log';

CREATE INDEX idx_vehicle_log_messages_id ON logging.vehicle_log_messages(id);
CREATE INDEX idx_vehicle_log_messages_stamp_id ON logging.vehicle_log_messages(stamp_id);
CREATE INDEX idx_vehicle_log_messages_name ON logging.vehicle_log_messages(name);


CREATE TABLE IF NOT EXISTS logging.vehicle_logs(
    id BIGSERIAL,
    message_id BIGINT NOT NULL,
    vehicle_id BIGINT NOT NULL,
    topic_id BIGINT NOT NULL,
    readingAt TIMESTAMPTZ NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    PRIMARY KEY(id),
    CONSTRAINT fk_vehicle_log_message_id
        FOREIGN KEY (message_id)
        REFERENCES logging.vehicle_log_messages(id),
    CONSTRAINT fk_vehicle_id
        FOREIGN KEY (vehicle_id)
        REFERENCES vehicles.vehicles(id),
    CONSTRAINT fk_topic_id
        FOREIGN KEY (topic_id)
        REFERENCES topics.topics(id)
);

COMMENT ON TABLE logging.vehicle_logs IS 'Vehicle logs table contains the logs the are streamed from the vehicle';
COMMENT ON COLUMN logging.vehicle_logs.id IS '@omit create,update
This is the id of the log and its autoincremented';
COMMENT ON COLUMN logging.vehicle_logs.message_id IS '@omit create,update
This is the log message id assocated with the  log';
COMMENT ON COLUMN logging.vehicle_logs.vehicle_id IS '@omit create,update
This is the vehicle id the log is associated with';
COMMENT ON COLUMN logging.vehicle_logs.topic_id IS '@omit create,update
The topic associated with the log';
COMMENT ON COLUMN logging.vehicle_logs.readingAt IS '@omit create,update
The timestamp the log was created on the vehicle';
COMMENT ON COLUMN logging.vehicle_logs.created_at IS '@omit create,update
The timestamp the log inserted into database';

CREATE INDEX idx_vehicle_logs_id ON logging.vehicle_logs(id);
CREATE INDEX idx_vehicle_logs_vehicle_id ON logging.vehicle_logs(vehicle_id);
CREATE INDEX idx_vehicle_logs_topic_id ON logging.vehicle_logs(topic_id);
CREATE INDEX idx_vehicle_logs_vehicle_log_message_id ON logging.vehicle_logs(message_id);
CREATE INDEX idx_vehicle_logs_readingat ON logging.vehicle_logs(readingat);



CREATE TABLE IF NOT EXISTS logging.vehicle_logs_partitioned(
    id BIGSERIAL,
    message_id BIGINT NOT NULL,
    vehicle_id BIGINT NOT NULL,
    topic_id BIGINT NOT NULL,
    readingAt TIMESTAMPTZ NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT fk_vehicle_log_message_id
        FOREIGN KEY (message_id)
        REFERENCES logging.vehicle_log_messages(id),
    CONSTRAINT fk_vehicle_id
        FOREIGN KEY (vehicle_id)
        REFERENCES vehicles.vehicles(id),
    CONSTRAINT fk_topic_id
        FOREIGN KEY (topic_id)
        REFERENCES topics.topics(id)
)
PARTITION BY RANGE(readingAt);


COMMENT ON TABLE logging.vehicle_logs_partitioned IS 'Vehicle logs table contains the logs the are streamed from the vehicle';
COMMENT ON COLUMN logging.vehicle_logs_partitioned.id IS '@omit create,update
This is the id of the log and its autoincremented';
COMMENT ON COLUMN logging.vehicle_logs_partitioned.message_id IS '@omit create,update
This is the log message id assocated with the  log';
COMMENT ON COLUMN logging.vehicle_logs_partitioned.vehicle_id IS '@omit create,update
This is the vehicle id the log is associated with';
COMMENT ON COLUMN logging.vehicle_logs_partitioned.topic_id IS '@omit create,update
The topic associated with the log';
COMMENT ON COLUMN logging.vehicle_logs_partitioned.readingAt IS '@omit create,update
The timestamp the log was created on the vehicle';
COMMENT ON COLUMN logging.vehicle_logs_partitioned.created_at IS '@omit create,update
The timestamp the log inserted into database';

CREATE INDEX idx_vehicle_logs_partitioned_id ON logging.vehicle_logs_partitioned(id);
CREATE INDEX idx_vehicle_logs_partitioned_vehicle_id ON logging.vehicle_logs_partitioned(vehicle_id);
CREATE INDEX idx_vehicle_logs_partitioned_topic_id ON logging.vehicle_logs_partitioned(topic_id);
CREATE INDEX idx_vehicle_logs_partitioned_vehicle_log_message_id ON logging.vehicle_logs_partitioned(message_id);
CREATE INDEX idx_vehicle_logs_partitioned_readingat ON logging.vehicle_logs_partitioned(readingat);

DELETE from logging.vehicle_logs where readingat > NOW();
insert into logging.vehicle_logs_partitioned (id, message_id, topic_id, vehicle_id, readingat, created_at)
select id, message_id, topic_id, vehicle_id, readingat, created_at from logging.vehicle_logs;


COMMENT ON TABLE logging.vehicle_logs IS NULL;
COMMENT ON COLUMN logging.vehicle_logs.id IS  NULL;
COMMENT ON COLUMN logging.vehicle_logs.message_id IS  NULL;
COMMENT ON COLUMN logging.vehicle_logs.vehicle_id IS  NULL;
COMMENT ON COLUMN logging.vehicle_logs.topic_id IS  NULL;
COMMENT ON COLUMN logging.vehicle_logs.readingAt IS  NULL;
COMMENT ON COLUMN logging.vehicle_logs.created_at IS  NULL;

COMMENT ON TABLE logging.vehicle_logs IS 'Vehicle logs table contains the logs the are streamed from the vehicle';
COMMENT ON COLUMN logging.vehicle_logs.id IS '@omit create,update
This is the id of the log and its autoincremented';
COMMENT ON COLUMN logging.vehicle_logs.message_id IS '@omit create,update
This is the log message id assocated with the  log';
COMMENT ON COLUMN logging.vehicle_logs.vehicle_id IS '@omit create,update
This is the vehicle id the log is associated with';
COMMENT ON COLUMN logging.vehicle_logs.topic_id IS '@omit create,update
The topic associated with the log';
COMMENT ON COLUMN logging.vehicle_logs.readingAt IS '@omit create,update
The timestamp the log was created on the vehicle';
COMMENT ON COLUMN logging.vehicle_logs.created_at IS '@omit create,update
The timestamp the log inserted into database';


CREATE INDEX idx_vehicle_logs_id ON logging.vehicle_logs(id);
CREATE INDEX idx_vehicle_logs_vehicle_id ON logging.vehicle_logs(vehicle_id);
CREATE INDEX idx_vehicle_logs_topic_id ON logging.vehicle_logs(topic_id);
CREATE INDEX idx_vehicle_logs_vehicle_log_message_id ON logging.vehicle_logs(message_id);
CREATE INDEX idx_vehicle_logs_readingat ON logging.vehicle_logs(readingat);
