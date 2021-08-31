/* Replace with your SQL commands */
CREATE TABLE IF NOT EXISTS topics.topic_sequence (
    id BIGSERIAL,
    topic_id BIGINT NOT NULL,
    vehicle_id BIGINT NOT NULL,
    seq BIGINT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    PRIMARY KEY(id),
    CONSTRAINT fk_topic_id
        FOREIGN KEY (topic_id)
        REFERENCES topics.topics (id),
    CONSTRAINT fk_vehicle_id
        FOREIGN KEY (vehicle_id)
        REFERENCES vehicles.vehicles(id)
);

CREATE INDEX idx_topic_sequence_id ON topics.topic_sequence(id);
CREATE INDEX idx_topic_sequence_topic_id ON topics.topic_sequence(topic_id);
CREATE INDEX idx_topic_sequence_vehicle_id ON topics.topic_sequence(vehicle_id);

COMMENT ON TABLE topics.topic_sequence IS '@omit delete
Table contains the sequence numbers of topics for a vehicle';
COMMENT ON COLUMN topics.topic_sequence.id IS '@omit create,update
The autoincremented id for the topic_sequence table';
COMMENT ON COLUMN topics.topic_sequence.topic_id IS '@omit create,update
The topic id that links to the topic  for the row in topic_sequence table';
COMMENT ON COLUMN topics.topic_sequence.vehicle_id IS '@omit create,update
The vehicle id that links to the vehicle  for the row in topic_sequence table';
COMMENT ON COLUMN topics.topic_sequence.seq IS '@omit create,update
The sequence for the row in topic_sequence table';