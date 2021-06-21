/* Replace with your SQL commands */

CREATE TABLE IF NOT EXISTS  vehicles.vehicle_types (
    id BIGSERIAL,
    type varchar(255) UNIQUE NOT NULL,
    description text NULL,
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS  vehicles.vehicle_states (
    id BIGSERIAL,
    name VARCHAR(255) UNIQUE NOT NULL,
    description text NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS  vehicles.vehicles (
    id BIGSERIAL,
    device_id: VARCHAR(255) UNIQUE NOT NULL,
    name varchar(255) UNIQUE NOT NULL,
    type_id BIGINT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    PRIMARY KEY(id),
    CONSTRAINT fk_vehicles_type
      FOREIGN KEY(type_id) 
	  REFERENCES vehicles.vehicle_types(id)
);

CREATE TABLE IF NOT EXISTS  vehicles.vehicles_online (
    id BIGSERIAL,
    vehicle_id BIGINT UNIQUE NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    PRIMARY KEY(id),
    CONSTRAINT fk_vehicles_online
        FOREIGN KEY(vehicle_id)
        REFERENCES vehicles.vehicles(id)
);

CREATE TABLE IF NOT EXISTS  vehicles.vehicle_status (
    id BIGSERIAL,
    vehicle_id BIGINT UNIQUE NOT NULL,
    state_id BIGINT UNIQUE NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    PRIMARY KEY(id),
    CONSTRAINT fk_vehicles_status_id
        FOREIGN KEY(vehicle_id)
        REFERENCES vehicles.vehicles(id),
    CONSTRAINT fk_vehicles_state
        FOREIGN KEY(state_id)
        REFERENCES vehicles.vehicle_states(id)
);


CREATE INDEX idx_vehicles_vehicles_id
    ON vehicles.vehicles(id);

CREATE INDEX idx_vehicles_online_id
    ON vehicles.vehicles_online(id);

CREATE INDEX idx_vehicles_online_vehicleid
    ON vehicles.vehicles_online(vehicle_id);

CREATE INDEX idx_vehicles_status_id
    ON vehicles.vehicle_status(id);

CREATE INDEX idx_vehicles_status_vehicleid
    ON vehicles.vehicle_status(vehicle_id);
