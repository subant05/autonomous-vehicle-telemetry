/* Replace with your SQL commands */
CREATE TABLE IF NOT EXISTS detection.object_message_header(
    id BIGSERIAL,
    headerId BIGINT NOT NULL,
    seq INT NOT NULL,
    node VARCHAR(255) NOT NULL,
    readingAt TIMESTAMPTZ NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    PRIMARY KEY(id)
);

CREATE INDEX idx_detection_object_message_header_id ON detection.object_message_header(id);
CREATE INDEX idx_detection_object_message_header_headerId ON detection.object_message_header(headerId);

COMMENT ON TABLE detection.object_message_header IS '@omit delete
The header table for an object message';
COMMENT ON COLUMN detection.object_message_header.id IS '@omit create,update
The id of the row that is autoincremented';
COMMENT ON COLUMN detection.object_message_header.headerId IS '@omit create,update
The header id of message header which is provided by the vehicle';
COMMENT ON COLUMN detection.object_message_header.seq IS '@omit create,update
The seq information in the message header';
COMMENT ON COLUMN detection.object_message_header.node IS '@omit create,update
The node associated with the readings';
COMMENT ON COLUMN detection.object_message_header.readingAt IS '@omit create,update
The readingAt is the timestamp provided by the vehicle';

CREATE TABLE IF NOT EXISTS detection.object_message_detection_header(
    id BIGSERIAL,
    headerId BIGINT NOT NULL,
    readingAt TIMESTAMPTZ NOT NULL,
    seq INT NOT NULL,
    node VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
);

CREATE INDEX idx_detection_object_message_detection_header_id ON detection.object_message_detection_header(id);
CREATE INDEX idx_detection_object_message_detection_header_headerId ON detection.object_message_detection_header(headerId);

COMMENT ON TABLE detection.object_message_detection_header IS '@omit delete
The header table for the object message detection section';
COMMENT ON COLUMN detection.object_message_detection_header.id IS '@omit create,update
The id of the row that is autoincremented';
COMMENT ON COLUMN detection.object_message_detection_header.headerId IS '@omit create,update
The header id for the object message detection section which is provided by the vehicle';
COMMENT ON COLUMN detection.object_message_detection_header.seq IS '@omit create,update
The seq information in the object message detection section';
COMMENT ON COLUMN detection.object_message_detection_header.node IS '@omit create,update
The node associated with the readings';
COMMENT ON COLUMN detection.object_message_detection_header.readingAt IS '@omit create,update
The readingAt is the timestamp provided by the vehicle';

CREATE TABLE IF NOT EXISTS detection.object_message_detection_cuboid_centroid(
    id BIGSERIAL,
    x_m DECIMAL,
    y_m DECIMAL,
    z_m DECIMAL,
    PRIMARY KEY(id)
);

CREATE INDEX idx_detection_object_message_detection_cuboid_centroid_id ON detection.object_message_detection_cuboid_centroid(id);

COMMENT ON TABLE detection.object_message_detection_cuboid_centroid IS '@omit delete
The object message detection cuboid centroid table for the object message section';
COMMENT ON COLUMN detection.object_message_detection_cuboid_centroid.id IS '@omit create,update
The id of the row that is autoincremented';
COMMENT ON COLUMN detection.object_message_detection_cuboid_centroid.x_m IS '@omit create,update
The x object location measurement in meters';
COMMENT ON COLUMN detection.object_message_detection_cuboid_centroid.y_m IS '@omit create,update
The y object location measurement in meters';
COMMENT ON COLUMN detection.object_message_detection_cuboid_centroid.z_m IS '@omit create,update
The z object location measurement in meters';


CREATE TABLE IF NOT EXISTS detection.object_message_detection_cuboid_dimension(
    id BIGSERIAL,
    width_m DECIMAL,
    depth_m DECIMAL,
    height_m DECIMAL,
    PRIMARY KEY(id)
);

CREATE INDEX idx_detection_object_message_detection_cuboid_dimension_id ON detection.object_message_detection_cuboid_dimension(id);

COMMENT ON TABLE detection.object_message_detection_cuboid_dimension IS '@omit delete
The object message detection cuboid dimension table for the object message section';
COMMENT ON COLUMN detection.object_message_detection_cuboid_dimension.id IS '@omit create,update
The id of the row that is autoincremented';
COMMENT ON COLUMN detection.object_message_detection_cuboid_dimension.width_m IS '@omit create,update
The width object in meters';
COMMENT ON COLUMN detection.object_message_detection_cuboid_dimension.depth_m IS '@omit create,update
The depth object in meters';
COMMENT ON COLUMN detection.object_message_detection_cuboid_dimension.height_m IS '@omit create,update
The height object in meters';


CREATE TABLE IF NOT EXISTS detection.object_message_detection_cuboid_orientation(
    id BIGSERIAL,
    roll_deg DECIMAL,
    pitch_deg DECIMAL,
    yaw_deg DECIMAL,
    PRIMARY KEY(id)
);

CREATE INDEX idx_detection_object_message_detection_cuboid_orientation_id ON detection.object_message_detection_cuboid_orientation(id);

COMMENT ON TABLE detection.object_message_detection_cuboid_orientation IS '@omit delete
The object message detection cuboid orientation table for the object message section';
COMMENT ON COLUMN detection.object_message_detection_cuboid_orientation.id IS '@omit create,update
The id of the row that is autoincremented';
COMMENT ON COLUMN detection.object_message_detection_cuboid_orientation.roll_deg IS '@omit create,update
The roll degrees of the object detection';
COMMENT ON COLUMN detection.object_message_detection_cuboid_orientation.pitch_deg IS '@omit create,update
The pitch degrees of the object detection';
COMMENT ON COLUMN detection.object_message_detection_cuboid_orientation.yaw_deg IS '@omit create,update
The yaw degrees of the object detection';


CREATE TABLE IF NOT EXISTS detection.object_message_detection_cuboid(
    id BIGSERIAL,
    centroid_id BIGINT NOT NULL,
    dimension_id BIGINT NOT NULL,
    orientation_id BIGINT NOT NULL,
    PRIMARY KEY(id),
    CONSTRAINT fk_cuboid_centroid
        FOREIGN KEY(centroid_id)
        REFERENCES detection.object_message_detection_cuboid_centroid(id),
    CONSTRAINT fk_cuboid_dimension
        FOREIGN KEY(dimension_id)
        REFERENCES detection.object_message_detection_cuboid_dimension(id),
    CONSTRAINT fk_cuboid_orienetation
        FOREIGN KEY (orientation_id)
        REFERENCES  detection.object_message_detection_cuboid_orientation(id)
);

CREATE INDEX idx_detection_object_message_detection_cuboid_id ON detection.object_message_detection_cuboid(id);
CREATE INDEX idx_detection_object_message_detection_cuboid_centroid ON detection.object_message_detection_cuboid(centroid_id);
CREATE INDEX idx_detection_object_message_detection_cuboid_dimension ON detection.object_message_detection_cuboid(dimension_id);
CREATE INDEX idx_detection_object_message_detection_cuboid_orientationn_id ON detection.object_message_detection_cuboid(orientation_id);

COMMENT ON TABLE detection.object_message_detection_cuboid IS '@omit delete
The object message detection cuboid table for the object message section';
COMMENT ON COLUMN detection.object_message_detection_cuboid.id IS '@omit create,update
The id of the row that is autoincremented';
COMMENT ON COLUMN detection.object_message_detection_cuboid.centroid_id IS '@omit create,update
The id of the centroid row';
COMMENT ON COLUMN detection.object_message_detection_cuboid.dimension_id IS '@omit create,update
The id of the dimension row';
COMMENT ON COLUMN detection.object_message_detection_cuboid.orientation_id IS '@omit create,update
The id of the orientation row';


CREATE TABLE IF NOT EXISTS detection.object_message_detection_roi (
    id BIGSERIAL,
    x DECIMAL,
    y DECIMAL,
    width DECIMAL,
    height DECIMAL,
    theta_deg DECIMAL,
    PRIMARY KEY(id)
);

CREATE INDEX idx_detection_object_message_detection_roi_id ON detection.object_message_detection_roi(id);

COMMENT ON TABLE detection.object_message_detection_roi IS '@omit delete
The object message detection roi table for the object message section';
COMMENT ON COLUMN detection.object_message_detection_roi.id IS '@omit create,update
The id of the row that is autoincremented';
COMMENT ON COLUMN detection.object_message_detection_roi.x IS '@omit create,update
The x location of roi';
COMMENT ON COLUMN detection.object_message_detection_roi.y IS '@omit create,update
The y location of roi';
COMMENT ON COLUMN detection.object_message_detection_roi.width IS '@omit create,update
The width of roi';
COMMENT ON COLUMN detection.object_message_detection_roi.height IS '@omit create,update
The height of roi';
COMMENT ON COLUMN detection.object_message_detection_roi.theta_deg IS '@omit create,update
The theta degrees location of roi';


CREATE TABLE IF NOT EXISTS detection.object_message_detection(
    id BIGSERIAL,
    header_id BIGINT NOT NULL,
    cuboid_id BIGINT NOT NULL,
    roi_id BIGINT NOT NULL,
    label DECIMAL,
    confidence DECIMAL,
    PRIMARY KEY(id),
    CONSTRAINT fk_object_message_detection_header
        FOREIGN KEY(header_id)
        REFERENCES detection.object_message_detection_header(id),
    CONSTRAINT fk_object_message_detection_cuboid
        FOREIGN KEY(cuboid_id)
        REFERENCES detection.object_message_detection_cuboid(id),
    CONSTRAINT fk_object_message_detection_roi
        FOREIGN KEY(roi_id)
        REFERENCES detection.object_message_detection_roi(id)
);

CREATE INDEX idx_detection_object_message_detection_id ON detection.object_message_detection(id);
CREATE INDEX idx_detection_object_message_detection_header ON detection.object_message_detection(header_id);
CREATE INDEX idx_detection_object_message_detection_cuboid ON detection.object_message_detection(cuboid_id);
CREATE INDEX idx_detection_object_message_detection_roi ON detection.object_message_detection(roi_id);

COMMENT ON TABLE detection.object_message_detection IS '@omit delete
The object message detection table for the object message section';
COMMENT ON COLUMN detection.object_message_detection.id IS '@omit create,update
The id of the row that is autoincremented';
COMMENT ON COLUMN detection.object_message_detection.header_id IS '@omit create,update
The header_id of the object message detection';
COMMENT ON COLUMN detection.object_message_detection.cuboid_id IS '@omit create,update
The cuboid id of the object message detection';
COMMENT ON COLUMN detection.object_message_detection.roi_id IS '@omit create,update
The roi id of the object message detection';
COMMENT ON COLUMN detection.object_message_detection.label IS '@omit create,update
The label of the object message detection';
COMMENT ON COLUMN detection.object_message_detection.confidence IS '@omit create,update
The confidence of the object message detection';


CREATE TABLE IF NOT EXISTS detection.object_message_centroid_rpy(
    id BIGSERIAL,
    roll_deg DECIMAL,
    pitch_deg DECIMAL,
    yaw_deg DECIMAL,
    PRIMARY KEY(id)
);

CREATE INDEX idx_detection_object_message_centroid_rpy_id ON detection.object_message_centroid_rpy(id);

COMMENT ON TABLE detection.object_message_centroid_rpy IS '@omit delete
The object message detection centroid rpy table for the object message section';
COMMENT ON COLUMN detection.object_message_centroid_rpy.id IS '@omit create,update
The id of the row that is autoincremented';
COMMENT ON COLUMN detection.object_message_centroid_rpy.roll_deg IS '@omit create,update
The degrees of the centroid rpy';
COMMENT ON COLUMN detection.object_message_centroid_rpy.pitch_deg IS '@omit create,update
The pitch degrees of the centroid rpy';
COMMENT ON COLUMN detection.object_message_centroid_rpy.yaw_deg IS '@omit create,update
The yaw degrees of the centroid rpy';


CREATE TABLE IF NOT EXISTS detection.object_message_xyz_camera(
    id BIGSERIAL,
    x_m DECIMAL,
    y_m DECIMAL,
    z_m DECIMAL,
    PRIMARY KEY(id)
);

CREATE INDEX idx_detection_object_message_xyz_camera_id ON detection.object_message_xyz_camera(id);

COMMENT ON TABLE detection.object_message_xyz_camera IS '@omit delete
The object message message xyz camera table for the object message section';
COMMENT ON COLUMN detection.object_message_xyz_camera.id IS '@omit create,update
The id of the row that is autoincremented';
COMMENT ON COLUMN detection.object_message_xyz_camera.x_m IS '@omit create,update
The x_m for centroid rpy';
COMMENT ON COLUMN detection.object_message_xyz_camera.y_m IS '@omit create,update
The y_m for centroid rpy';
COMMENT ON COLUMN detection.object_message_xyz_camera.z_m IS '@omit create,update
The z_m for centroid rpy';




CREATE TABLE IF NOT EXISTS detection.object_message_xyz_starfire(
    id BIGSERIAL,
    x_m DECIMAL,
    y_m DECIMAL,
    z_m DECIMAL,
    PRIMARY KEY(id)
);

CREATE INDEX idx_detection_object_message_xyz_starfire_id ON detection.object_message_xyz_starfire(id);

COMMENT ON TABLE detection.object_message_xyz_starfire IS '@omit delete
The object message xyz starfire table for the object message section';
COMMENT ON COLUMN detection.object_message_xyz_starfire.id IS '@omit create,update
The id of the row that is autoincremented';
COMMENT ON COLUMN detection.object_message_xyz_starfire.x_m IS '@omit create,update
The x location measured in meters for object message xyz starfire ';
COMMENT ON COLUMN detection.object_message_xyz_starfire.y_m IS '@omit create,update
The y location measured in meters for object message xyz starfire ';
COMMENT ON COLUMN detection.object_message_xyz_starfire.z_m IS '@omit create,update
The z location measured in meters for object message xyz starfire ';



CREATE TABLE IF NOT EXISTS detection.object_message_lla(
    id BIGSERIAL,
    latitude_deg DECIMAL,
    longitude_deg DECIMAL,
    altitude_m DECIMAL,
    PRIMARY KEY(id)
);

CREATE INDEX idx_detection_object_message_lla_id ON detection.object_message_lla(id);

COMMENT ON TABLE detection.object_message_lla IS '@omit delete
The object message lla table for the object message section';
COMMENT ON COLUMN detection.object_message_lla.id IS '@omit create,update
The id of the row that is autoincremented';
COMMENT ON COLUMN detection.object_message_lla.latitude_deg IS '@omit create,update
The latitude in degrees';
COMMENT ON COLUMN detection.object_message_lla.longitude_deg IS '@omit create,update
The longitude in degrees';
COMMENT ON COLUMN detection.object_message_lla.altitude_m IS '@omit create,update
The altitude in meters';

CREATE TABLE IF NOT EXISTS detection.object_message_enu(
    id BIGSERIAL,
    east_m DECIMAL,
    north_m DECIMAL,
    up_m DECIMAL,
    PRIMARY KEY(id)
);

CREATE INDEX idx_detection_object_message_enu_id ON detection.object_message_enu(id);

COMMENT ON TABLE detection.object_message_enu IS '@omit delete
The object message enu table for the object message section';
COMMENT ON COLUMN detection.object_message_enu.id IS '@omit create,update
The id of the row that is autoincremented';
COMMENT ON COLUMN detection.object_message_enu.east_m IS '@omit create,update
The east direction in meeters';
COMMENT ON COLUMN detection.object_message_enu.north_m IS '@omit create,update
The north direction in meeters';
COMMENT ON COLUMN detection.object_message_enu.up_m IS '@omit create,update
The up direction in meeters';


CREATE TABLE IF NOT EXISTS detection.object_message_ecef(
    id BIGSERIAL,
    x_m DECIMAL,
    y_m DECIMAL,
    z_m DECIMAL,
    PRIMARY KEY(id)
);

CREATE INDEX idx_detection_object_message_ecef_id ON detection.object_message_ecef(id);

COMMENT ON TABLE detection.object_message_ecef IS '@omit delete
The object message enu table for the object message section';
COMMENT ON COLUMN detection.object_message_ecef.id IS '@omit create,update
The id of the row that is autoincremented';
COMMENT ON COLUMN detection.object_message_ecef.x_m IS '@omit create,update
The x location measured in meters for object message xecef';
COMMENT ON COLUMN detection.object_message_ecef.y_m IS '@omit create,update
The y location measured in meters for object message xecef';
COMMENT ON COLUMN detection.object_message_ecef.z_m IS '@omit create,update
The z location measured in meters for object message xecef';


CREATE TABLE IF NOT EXISTS detection.object_message_field_origin(
    id BIGSERIAL,
    latitude_deg DECIMAL,
    longitude_deg DECIMAL,
    altitude_m DECIMAL,
    PRIMARY KEY(id)
);

CREATE INDEX idx_detection_object_message_field_origin_id ON detection.object_message_field_origin(id);

COMMENT ON TABLE detection.object_message_field_origin IS '@omit delete
The object message enu table for the object message section';
COMMENT ON COLUMN detection.object_message_field_origin.id IS '@omit create,update
The id of the row that is autoincremented';
COMMENT ON COLUMN detection.object_message_field_origin.longitude_deg IS '@omit create,update
The latitude in degrees';
COMMENT ON COLUMN detection.object_message_field_origin.longitude_deg IS '@omit create,update
The longitude in degrees';
COMMENT ON COLUMN detection.object_message_field_origin.altitude_m IS '@omit create,update
The altitude in degrees';


CREATE TABLE IF NOT EXISTS detection.object_message_centroid_location(
    id BIGSERIAL,
    xyz_camera_id BIGINT NOT NULL,
    xyz_starfire_id BIGINT NOT NULL,
    lla_id BIGINT NOT NULL,
    enu_id BIGINT NOT NULL,
    field_origin_id BIGINT NOT NULL,
    ecef_id BIGINT NOT NULL,
    PRIMARY KEY(id),
    CONSTRAINT fk_object_message_xyz_camera
        FOREIGN KEY(xyz_camera_id)
        REFERENCES detection.object_message_xyz_camera(id),
    CONSTRAINT fk_object_message_xyz_starfire
        FOREIGN KEY(xyz_starfire_id)
        REFERENCES detection.object_message_xyz_starfire(id),
    CONSTRAINT fk_object_message_lla
        FOREIGN KEY(lla_id)
        REFERENCES detection.object_message_lla(id),
    CONSTRAINT fk_object_message_enu
        FOREIGN KEY(enu_id)
        REFERENCES detection.object_message_enu(id),
    CONSTRAINT fk_object_message_field_origin
        FOREIGN KEY(field_origin_id)
        REFERENCES detection.object_message_field_origin(id),
    CONSTRAINT fK_object_message_ecef
        FOREIGN KEY(ecef_id)
        REFERENCES detection.object_message_ecef(id)
);

CREATE INDEX idx_detection_object_message_centroid_location_id ON detection.object_message_centroid_location(id);
CREATE INDEX idx_detection_object_message_centroid_location_xyz_camera_id ON detection.object_message_centroid_location(xyz_camera_id);
CREATE INDEX idx_detection_object_message_centroid_location_xyz_starfire_id ON detection.object_message_centroid_location(xyz_starfire_id);
CREATE INDEX idx_detection_object_message_centroid_location_lla_id ON detection.object_message_centroid_location(lla_id);
CREATE INDEX idx_detection_object_message_centroid_location_enu_id ON detection.object_message_centroid_location(enu_id);
CREATE INDEX idx_detection_object_message_centroid_location_field_origin_id ON detection.object_message_centroid_location(field_origin_id);
CREATE INDEX idx_detection_object_message_centroid_location_ecef_id ON detection.object_message_centroid_location(ecef_id);

COMMENT ON TABLE detection.object_message_centroid_location IS '@omit delete
The object message enu table for the object message section';
COMMENT ON COLUMN detection.object_message_centroid_location.id IS '@omit create,update
The id of the row that is autoincremented';
COMMENT ON COLUMN detection.object_message_centroid_location.xyz_camera_id IS '@omit create,update
The xyz camera id foreign key';
COMMENT ON COLUMN detection.object_message_centroid_location.xyz_starfire_id IS '@omit create,update
The xyz starfire id foreign key';
COMMENT ON COLUMN detection.object_message_centroid_location.lla_id IS '@omit create,update
The lla id foreign key';
COMMENT ON COLUMN detection.object_message_centroid_location.enu_id IS '@omit create,update
The enu id foreign key';
COMMENT ON COLUMN detection.object_message_centroid_location.field_origin_id IS '@omit create,update
The field origin id foreign key';
COMMENT ON COLUMN detection.object_message_centroid_location.ecef_id IS '@omit create,update
The ecef id of the row that is autoincremented';


CREATE TABLE IF NOT EXISTS detection.object_message_circle_center(
    id BIGSERIAL,
    xyz_camera_id BIGINT NOT NULL,
    xyz_starfire_id BIGINT NOT NULL,
    lla_id BIGINT NOT NULL,
    enu_id BIGINT NOT NULL,
    field_origin_id BIGINT NOT NULL,
    ecef_id BIGINT NOT NULL,
    PRIMARY KEY(id),
    CONSTRAINT fk_object_message_xyz_camera
        FOREIGN KEY(xyz_camera_id)
        REFERENCES detection.object_message_xyz_camera(id),
    CONSTRAINT fk_object_message_xyz_starfire
        FOREIGN KEY(xyz_starfire_id)
        REFERENCES detection.object_message_xyz_starfire(id),
    CONSTRAINT fk_object_message_lla
        FOREIGN KEY(lla_id)
        REFERENCES detection.object_message_lla(id),
    CONSTRAINT fk_object_message_enu
        FOREIGN KEY(enu_id)
        REFERENCES detection.object_message_enu(id),
    CONSTRAINT fk_object_message_field_origin
        FOREIGN KEY(field_origin_id)
        REFERENCES detection.object_message_field_origin(id),
    CONSTRAINT fK_object_message_ecef
        FOREIGN KEY(ecef_id)
        REFERENCES detection.object_message_ecef(id)
);

CREATE INDEX idx_detection_object_message_circle_center_id ON detection.object_message_circle_center(id);
CREATE INDEX idx_detection_object_message_circle_center_xyz_camera_id ON detection.object_message_circle_center(xyz_camera_id);
CREATE INDEX idx_detection_object_message_circle_center_xyz_starfire_id ON detection.object_message_circle_center(xyz_starfire_id);
CREATE INDEX idx_detection_object_message_circle_center_lla_id ON detection.object_message_circle_center(lla_id);
CREATE INDEX idx_detection_object_message_circle_center_enu_id ON detection.object_message_circle_center(enu_id);
CREATE INDEX idx_detection_object_message_circle_center_field_origin_id ON detection.object_message_circle_center(field_origin_id);
CREATE INDEX idx_detection_object_message_circle_center_ecef_id ON detection.object_message_circle_center(ecef_id);

COMMENT ON TABLE detection.object_message_circle_center IS '@omit delete
The object message enu table for the object message section';
COMMENT ON COLUMN detection.object_message_circle_center.id IS '@omit create,update
The id of the row that is autoincremented';
COMMENT ON COLUMN detection.object_message_circle_center.xyz_camera_id IS '@omit create,update
The xyz camera id foreign key';
COMMENT ON COLUMN detection.object_message_circle_center.xyz_starfire_id IS '@omit create,update
The xyz starfire id foreign key';
COMMENT ON COLUMN detection.object_message_circle_center.lla_id IS '@omit create,update
The lla id foreign key';
COMMENT ON COLUMN detection.object_message_circle_center.enu_id IS '@omit create,update
The enu id foreign key';
COMMENT ON COLUMN detection.object_message_circle_center.field_origin_id IS '@omit create,update
The field origin id foreign key';
COMMENT ON COLUMN detection.object_message_circle_center.ecef_id IS '@omit create,update
The ecef id of the row that is autoincremented';


CREATE TABLE IF NOT EXISTS detection.object_message(
    id BIGSERIAL,
    referenceId BIGINT NOT NULL,
    header_id BIGINT NOT NULL,
    detection_id BIGINT NOT NULL,
    centroid_rpy_id BIGINT NOT NULL,
    centroid_location_id BIGINT NOT NULL,
    circle_center_id BIGINT NOT NULL,
    circle_radius_m DECIMAL,
    on_path BOOLEAN NOT NULL,
    is_active_path_set BOOLEAN NOT NULL,
    camera_name VARCHAR(100) NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    PRIMARY KEY(id),
    CONSTRAINT fk_object_header
        FOREIGN KEY(header_id)
        REFERENCES detection.object_message_header(id),
    CONSTRAINT fk_object_detection
        FOREIGN KEY(detection_id)
        REFERENCES detection.object_message_detection(id),
    CONSTRAINT fk_object_message_centroid_rpy
        FOREIGN KEY (centroid_rpy_id)
        REFERENCES detection.object_message_centroid_rpy(id),
    CONSTRAINT fk_object_message_centroid_location
        FOREIGN KEY(centroid_location_id)
        REFERENCES detection.object_message_centroid_location(id),
    CONSTRAINT fk_object_message_circle_center
        FOREIGN KEY(circle_center_id)
        REFERENCES detection.object_message_circle_center(id)
);

CREATE INDEX idx_detection_object_message_id ON detection.object_message(id);
CREATE INDEX idx_detection_object_message_header ON detection.object_message(header_id);
CREATE INDEX idx_detection_object_message_detection ON detection.object_message(detection_id);
CREATE INDEX idx_detection_object_message_centroid_rpy ON detection.object_message(centroid_rpy_id);
CREATE INDEX idx_detection_object_message_centroid_location ON detection.object_message(centroid_location_id);

COMMENT ON TABLE detection.object_message IS '@omit delete
The object message enu table for the object message section';
COMMENT ON COLUMN detection.object_message.id IS '@omit create,update
The id of the row that is autoincremented';
COMMENT ON COLUMN detection.object_message.referenceId IS '@omit create,update
The id provided by vehicle';
COMMENT ON COLUMN detection.object_message.header_id IS '@omit create,update
The header id referencing the object message header row';
COMMENT ON COLUMN detection.object_message.detection_id IS '@omit create,update
The detection id referencing the object message header row';
COMMENT ON COLUMN detection.object_message.centroid_rpy_id IS '@omit create,update
The centroid rpy id referencing the object message header row';
COMMENT ON COLUMN detection.object_message.centroid_location_id IS '@omit create,update
The centroid location id referencing the object message header row';
COMMENT ON COLUMN detection.object_message.circle_center_id IS '@omit create,update
The circle center id referencing the object message header row';
COMMENT ON COLUMN detection.object_message.circle_radius_m IS '@omit create,update
The circle radius referencing the object message header row';
COMMENT ON COLUMN detection.object_message.on_path IS '@omit create,update
The on path boolean';
COMMENT ON COLUMN detection.object_message.is_active_path_set IS '@omit create,update
The is active path boolean';
COMMENT ON COLUMN detection.object_message.camera_name IS '@omit create,update
The name of the camera';
COMMENT ON COLUMN detection.object_message.created_at IS '@omit create,update
The timestamp record added to database';
COMMENT ON COLUMN detection.object_message.updated_at IS '@omit create,update
The timestamp record updated to database';

CREATE TABLE IF NOT EXISTS detection.object_message_vertices(
    id BIGSERIAL,
    object_message_id BIGINT NOT NULL,
    xyz_camera_id BIGINT NOT NULL,
    xyz_starfire_id BIGINT NOT NULL,
    lla_id BIGINT NOT NULL,
    enu_id BIGINT NOT NULL,
    field_origin_id BIGINT NOT NULL,
    ecef_id BIGINT NOT NULL,
    PRIMARY KEY(id),
    CONSTRAINT fk_object_message_id
        FOREIGN KEY (object_message_id)
        REFERENCES detection.object_message(id),
    CONSTRAINT fk_object_message_xyz_camera
        FOREIGN KEY(xyz_camera_id)
        REFERENCES detection.object_message_xyz_camera(id),
    CONSTRAINT fk_object_message_xyz_starfire
        FOREIGN KEY(xyz_starfire_id)
        REFERENCES detection.object_message_xyz_starfire(id),
    CONSTRAINT fk_object_message_lla
        FOREIGN KEY(lla_id)
        REFERENCES detection.object_message_lla(id),
    CONSTRAINT fk_object_message_enu
        FOREIGN KEY(enu_id)
        REFERENCES detection.object_message_enu(id),
    CONSTRAINT fk_object_message_field_origin
        FOREIGN KEY(field_origin_id)
        REFERENCES detection.object_message_field_origin(id),
    CONSTRAINT fK_object_message_ecef
        FOREIGN KEY(ecef_id)
        REFERENCES detection.object_message_ecef(id)
);

CREATE INDEX idx_detection_object_message_vertices_id ON detection.object_message_vertices(id);
CREATE INDEX idx_detection_object_message_vertices_object_message_id ON detection.object_message_vertices(object_message_id);
CREATE INDEX idx_detection_object_message_vertices_object_xyz_camera_id ON detection.object_message_vertices(xyz_camera_id);
CREATE INDEX idx_detection_object_message_vertices_object_xyz_starfire_id ON detection.object_message_vertices(xyz_starfire_id);
CREATE INDEX idx_detection_object_message_vertices_object_lla_id ON detection.object_message_vertices(lla_id);
CREATE INDEX idx_detection_object_message_vertices_object_enu_id ON detection.object_message_vertices(enu_id);
CREATE INDEX idx_detection_object_message_vertices_object_field_origin_id ON detection.object_message_vertices(field_origin_id);
CREATE INDEX idx_detection_object_message_vertices_object_ecef_id ON detection.object_message_vertices(ecef_id);

COMMENT ON TABLE detection.object_message_vertices IS '@omit delete
The object message enu table for the object message section';
COMMENT ON COLUMN detection.object_message_vertices.id IS '@omit create,update
The id of the row that is autoincremented';
COMMENT ON COLUMN detection.object_message_vertices.object_message_id IS '@omit create,update
The object message id linked to the object_message table';
COMMENT ON COLUMN detection.object_message_vertices.xyz_camera_id IS '@omit create,update
The xyz camera id foreign key';
COMMENT ON COLUMN detection.object_message_vertices.xyz_starfire_id IS '@omit create,update
The xyz starfire id foreign key';
COMMENT ON COLUMN detection.object_message_vertices.lla_id IS '@omit create,update
The lla id foreign key';
COMMENT ON COLUMN detection.object_message_vertices.enu_id IS '@omit create,update
The enu id foreign key';
COMMENT ON COLUMN detection.object_message_vertices.field_origin_id IS '@omit create,update
The field origin id foreign key';
COMMENT ON COLUMN detection.object_message_vertices.ecef_id IS '@omit create,update
The ecef id of the row that is autoincremented';

CREATE TABLE IF NOT EXISTS detection.objects (
    id BIGSERIAL,
    readingAt TIMESTAMPTZ NOT NULL,
    vehicle_id BIGINT NOT NULL,
    topic_id BIGINT NOT NULL,
    message_id BIGINT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    PRIMARY KEY(id),
    CONSTRAINT fk_object_vehicle_id
        FOREIGN KEY(vehicle_id)
        REFERENCES vehicles.vehicles(id),
    CONSTRAINT fk_object_header_id
        FOREIGN KEY(message_id)
        REFERENCES detection.object_message(id),
    CONSTRAINT fk_object_topic
        FOREIGN KEY(topic_id)
        REFERENCES topics.topics(id)
);

CREATE INDEX idx_detection_objects_id ON detection.objects(id);
CREATE INDEX idx_detection_objects_vehicle_id ON detection.objects(vehicle_id);
CREATE INDEX idx_detection_objects_topic_id ON detection.objects(topic_id);
CREATE INDEX idx_detection_objects_message_id ON detection.objects(message_id);

COMMENT ON TABLE detection.objects IS '@omit delete
The object message enu table for the object message section';
COMMENT ON COLUMN detection.objects.id IS '@omit create,update
The id of the row that is autoincremented';
COMMENT ON COLUMN detection.objects.vehicle_id IS '@omit create,update
The vehicle id pointing to vehicle on vehicles table';
COMMENT ON COLUMN detection.objects.topic_id IS '@omit create,update
The topic id pointing to topic on topics table';
COMMENT ON COLUMN detection.objects.message_id IS '@omit create,update
The message id pointing to message on object message table';
COMMENT ON COLUMN detection.objects.created_at IS '@omit create,update
The timestamp record was created';
COMMENT ON COLUMN detection.objects.updated_at IS '@omit create,update
The timestamp record was updated';