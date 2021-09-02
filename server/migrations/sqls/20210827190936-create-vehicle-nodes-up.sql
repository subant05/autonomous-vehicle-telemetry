/* Replace with your SQL commands */
CREATE TABLE IF NOT EXISTS vehicles.vehicle_nodes (
    id BIGSERIAL,
    vehicle_id BIGINT NOT NULL,
    node VARCHAR(255) NOT NULL,
    PRIMARY KEY(id),
    CONSTRAINT fk_vehicle_id
        FOREIGN KEY(vehicle_id)
        REFERENCES vehicles.vehicles(id),
    CONSTRAINT uq_vehicle_node_and_vehicle_id 
        UNIQUE (vehicle_id, node)
);

CREATE INDEX idx_vehicle_nodes_id ON vehicles.vehicle_nodes(id);
CREATE INDEX idx_vehicle_nodes_node ON vehicles.vehicle_nodes(node);
CREATE INDEX idx_vehicle_nodes_vehicle_id ON vehicles.vehicle_nodes(vehicle_id);

COMMENT ON TABLE vehicles.vehicle_nodes IS '@omit delete
Table contains the nodes that are on a vehilce';
COMMENT ON COLUMN vehicles.vehicle_nodes.id IS '@omit create,update
The autoincremented id for the vehicle_nodes table';
COMMENT ON COLUMN vehicles.vehicle_nodes.vehicle_id IS '@omit create,update
The vehicle id for the associated with the vehicles table';
COMMENT ON COLUMN vehicles.vehicle_nodes.node IS '@omit create,update
The node name of the vehicle';