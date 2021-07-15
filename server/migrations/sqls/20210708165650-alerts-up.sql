/* Replace with your SQL commands */
CREATE TABLE IF NOT EXISTS notifications.alert_types(
    id BIGSERIAL,
    name VARCHAR(50) NOT NULL,
    PRIMARY KEY(id)
);

CREATE INDEX idx_alert_type_id
    ON notifications.alert_types(id);
CREATE INDEX idx_alert_types_name
    ON notifications.alert_types(name);

COMMENT ON TABLE notifications.alert_types IS 'Table is used to define alert types';
COMMENT ON COLUMN notifications.alert_types.id IS '@omit create,update
Id for the alert type assigned by database';
COMMENT ON COLUMN notifications.alert_types.name IS 'The label for the alert type';


CREATE TABLE IF NOT EXISTS notifications.alerts(
    id BIGSERIAL,
    message VARCHAR(255) NOT NULL,
    alert_type_id BIGINT NOT NULL,
    vehicle_status_id BIGINT NOT NULL,
    read BOOLEAN NOT NULL DEFAULT FALSE,
    dismissed BOOLEAN NOT NULL DEFAULT FALSE,
    PRIMARY KEY(id),
    CONSTRAINT fk_alert_type
        FOREIGN KEY  (alert_type_id)
        REFERENCES notifications.alert_types(id),
    CONSTRAINT fk_vehicle
        FOREIGN KEY  (vehicle_status_id)
        REFERENCES state.vehicle_status(id)
);

CREATE INDEX idx_alert_id 
    ON notifications.alerts(id);
CREATE INDEX idx_alerts_alert_type_id 
    ON notifications.alerts(alert_type_id);
CREATE INDEX idx_vehicle_status_id
    ON notifications.alerts(vehicle_status_id);

COMMENT ON TABLE notifications.alerts IS 'Table is used to store alerts when certain events are passed from vehicles';
COMMENT ON COLUMN notifications.alerts.id IS '@omit create,update
Id for the alert assigned by database';
COMMENT ON COLUMN notifications.alerts.message IS 'Stores any and all messages from the event';
COMMENT ON COLUMN notifications.alerts.alert_type_id IS 'Is the alert type';
COMMENT ON COLUMN notifications.alerts.vehicle_status_id IS 'IS the status this alert is linked to';
COMMENT ON COLUMN notifications.alerts.read IS 'Indicates if the alert has been ackowledged by a user';
COMMENT ON COLUMN notifications.alerts.dismissed IS 'Indicates if the alert has been dismissed by a user';