ALTER TABLE logging.vehicle_log_messages
DROP CONSTRAINT fk_vehicle_log_message_stamp_id,
ADD CONSTRAINT fk_vehicle_log_message_stamp_id
    FOREIGN KEY (stamp_id)
    REFERENCES logging.vehicle_log_message_stamps(id)
    ON DELETE CASCADE;

ALTER TABLE logging.vehicle_logs
DROP CONSTRAINT fk_vehicle_log_message_id,
DROP CONSTRAINT fk_vehicle_id,
DROP CONSTRAINT fk_topic_id,
ADD CONSTRAINT fk_vehicle_log_message_id
    FOREIGN KEY (message_id)
    REFERENCES logging.vehicle_log_messages(id)
    ON DELETE CASCADE,
ADD CONSTRAINT fk_vehicle_id
    FOREIGN KEY (vehicle_id)
    REFERENCES vehicles.vehicles(id)
    ON DELETE CASCADE,
ADD CONSTRAINT fk_topic_id
    FOREIGN KEY (topic_id)
    REFERENCES topics.topics(id)
    ON DELETE CASCADE;