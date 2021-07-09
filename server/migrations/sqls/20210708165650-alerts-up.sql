/* Replace with your SQL commands */
CREATE TABLE IF NOT EXISTS notifications.alert_codes(
    id BIGSERIAL,
    code INT NOT NULL,
	PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS notifications.alert_types(
    id BIGSERIAL,
    name VARCHAR(50) NOT NULL,
    description text,
    code_id BIGINT NOT NULL,
    PRIMARY KEY(id),
    CONSTRAINT fk_alert_code
        FOREIGN KEY  (code_id)
        REFERENCES notifications.alert_codes(id)
);

CREATE TABLE IF NOT EXISTS notifications.alerts(
    id BIGSERIAL,
    message VARCHAR(255) NOT NULL,
    stack_trace text,
    alert_type_id BIGINT NOT NULL,
    vehicle_id BIGINT NOT NULL,
    read BOOLEAN NOT NULL DEFAULT FALSE,
    dismissed BOOLEAN NOT NULL DEFAULT FALSE,
    PRIMARY KEY(id),
    CONSTRAINT fk_alert_type
        FOREIGN KEY  (alert_type_id)
        REFERENCES notifications.alert_types(id),
    CONSTRAINT fk_vehicle
        FOREIGN KEY  (vehicle_id)
        REFERENCES vehicles.vehicles(id)
);