/* Replace with your SQL commands */
CREATE TABLE IF NOT EXISTS  topics.topic_types(
    id BIGSERIAL,
    module VARCHAR(255) NOT NULL,
    class VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
);

CREATE INDEX idx_topics_types_id
    ON topics.topic_types(id);
CREATE INDEX idx_topics_types_module
    ON topics.topic_types(module);
CREATE INDEX idx_topics_types_class
    ON topics.topic_types(class);

COMMENT ON TABLE topics.topic_types IS '@omit delete
This is the topics types table, which is related a topics type object passed from the vehicle';
COMMENT ON COLUMN topics.topic_types.id IS '@omit create,update
The ID of topic type assigned by the database';
COMMENT ON COLUMN topics.topic_types.module IS 'The module of topic type';
COMMENT ON COLUMN topics.topic_types.class IS 'The class of topic type';


CREATE TABLE IF NOT EXISTS  topics.topics (
    id BIGSERIAL,
    name text UNIQUE NOT NULL,
    description text NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(), 
    type_id BIGINT NOT NULL,
    PRIMARY KEY(id),
    CONSTRAINT fk_topics_type
        FOREIGN KEY(type_id)
        REFERENCES topics.topic_types(id)
);

COMMENT ON TABLE topics.topics IS '@omit delete
This is the topics table, which is related a topics passed from the vehicle';
COMMENT ON COLUMN topics.topics.id IS '@omit create,update
The ID of topic assigned by the database';
COMMENT ON COLUMN topics.topics.name IS 'The name of topic';
COMMENT ON COLUMN topics.topics.description IS 'The description of topic';
COMMENT ON COLUMN topics.topics.created_at IS '@omit create,update
The timestamp of topic added by the database';
COMMENT ON COLUMN topics.topics.updated_at IS 'The timestamp of topic updated on the database';
COMMENT ON COLUMN topics.topics.type_id IS 'The type of topic';

CREATE INDEX idx_topics_topics_id
    ON topics.topics(id);
CREATE INDEX idx_topics_topics_typeid
    ON topics.topics(type_id);

