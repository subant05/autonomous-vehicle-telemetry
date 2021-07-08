/* Replace with your SQL commands */
CREATE TABLE IF NOT EXISTS alert_codes(
    id BIGSERIAL,
    code INT NOT NULL
);

CREATE TABLE IF NOT EXISTS alert_types(
    id BIGSERIAL,
    name VARCHAR(50) NOT NULL,
    description text,
    code_id BIGINT NOT NULL,
    PRIMARY KEY(id),
    CONSTRAINT fk_alert_code
        REFERENCES code_id
        ON alert_codes(id)
);

CREATE TABLE IF NOT EXISTS alerts(
    id BIGSERIAL,
    message VARCHAR(255) NOT NULL,
    stack_trace text,
    alert_type_id BIGINT NOT NULL,
    vehicle_id BIGINT NOT NULL,
    read BOOLEAN NOT NULL DEFAULT FALSE,
    dismissed BOOLEAN NOT NULL DEFAULT FALSE,
    PRIMARY KEY(id)
    CONSTRAINT fk_alert_type
        REFERENCES alert_type_id
        ON alert_types(id),
    CONSTRAINT fk_vehicle
        REFERENCES vehicle_id
        ON vehicles.vehicle(id)
);