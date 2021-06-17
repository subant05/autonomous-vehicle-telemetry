/* Replace with your SQL commands */
CREATE TABLE IF NOT EXISTS  topics.topic_types(
    id BIGSERIAL,
    module VARCHAR(255) NOT NULL,
    class VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS  topics.topics (
    id BIGSERIAL,
    name text NOT NULL,
    description text NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(), 
    type_id BIGINT NOT NULL,
    PRIMARY KEY(id),
    CONSTRAINT fk_topics_type
        FOREIGN KEY(type_id)
        REFERENCES topics.topic_types(id)
);

CREATE INDEX idx_topics_typse_id
    ON topics.topic_types(id);
CREATE INDEX idx_topics_types_module
    ON topics.topic_types(module);
CREATE INDEX idx_topics_types_class
    ON topics.topic_types(class);
CREATE INDEX idx_topics_topics_id
    ON topics.topics(id);
CREATE INDEX idx_topics_topics_typeid
    ON topics.topics(type_id);

