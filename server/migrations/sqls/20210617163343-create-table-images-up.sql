/* Replace with your SQL commands */
-- CAMERA IMAGES
CREATE TABLE IF NOT EXISTS images.camera_pair_message_header (
    id BIGSERIAL,
    header_id BIGINT NOT NULL,
    readingAt TIMESTAMPTZ NOT NULL,
    seq DECIMAL NOT NULL,
    node VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS images.image_data (
    id BIGSERIAL,
    data text NOT NULL,
    PRIMARY KEY(id)
);
 
CREATE TABLE IF NOT EXISTS images.image_header (
    id BIGSERIAL,
    header_id BIGINT NOT NULL,
    readingAt TIMESTAMPTZ NOT NULL,
    seq DECIMAL NOT NULL,
    node VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS images.images (
    id BIGSERIAL,
    header_id BIGINT NOT NULL,
    height INT NOT NULL,
    width INT NOT NULL,
    encoding VARCHAR(255) NOT NULL,
    is_bigendian INT NOT NULL,
    step BIGINT NOT NULL,
    data_id BIGINT NOT NULL,
    PRIMARY KEY(id),
    CONSTRAINT fk_image_header
        FOREIGN KEY(header_id)
        REFERENCES images.image_header (id),
    CONSTRAINT fk_image_data
        FOREIGN KEY(data_id)
        REFERENCES images.image_data(id)
);

CREATE TABLE IF NOT EXISTS images.side_intrinsics_k (
    id BIGSERIAL,
    data text NOT NULL,
    PRIMARY KEY(id)
);


CREATE TABLE IF NOT EXISTS images.side_intrinsics_d (
    id BIGSERIAL,
    data text NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS images.side_intrinsics (
    id BIGSERIAL,
    height INT NOT NULL,
    width INT NOT NULL,
    k_id BIGINT NOT NULL,
    d_id BIGINT NOT NULL,
    PRIMARY KEY(id),
    CONSTRAINT fk_side_intrinsics_k
        FOREIGN KEY(k_id)
        REFERENCES images.side_intrinsics_k(id),
    CONSTRAINT fk_side_intrinsics_d
        FOREIGN KEY(d_id)
        REFERENCES images.side_intrinsics_d(id)
);

CREATE TABLE IF NOT EXISTS images.stereo_intrinsics_t(
    id BIGSERIAL,
    data text NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS images.stereo_intrinsics_r(
    id BIGSERIAL,
    data text NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS images.stereo_intrinsics_r_rodrigues(
    id BIGSERIAL,
    data text NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS images.stereo_intrinsics (
    id BIGSERIAL,
    t_id BIGINT NOT NULL,
    r_id BIGINT NOT NULL,
    r_rodrigues_id BIGINT NOT NULL,
    PRIMARY KEY(id),
    CONSTRAINT fk_stereo_intrinsics_t
        FOREIGN KEY(t_id)
        REFERENCES images.stereo_intrinsics_t(id),
    CONSTRAINT fk_stereo_intrinsics_r
        FOREIGN KEY(r_id)
        REFERENCES images.stereo_intrinsics_r(id),
    CONSTRAINT fk_stereo_intrinsics_r_rodrigues
        FOREIGN KEY(r_rodrigues_id)
        REFERENCES images.stereo_intrinsics_r_rodrigues(id)
);

CREATE TABLE IF NOT EXISTS images.camera_meta_e (
    id BIGSERIAL,
    data text NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS images.camera_meta_f (
    id BIGSERIAL,
    data text NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS images.camera_meta_r1 (
    id BIGSERIAL,
    data text NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS images.camera_meta_r2 (
    id BIGSERIAL,
    data text NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS images.camera_meta_p1 (
    id BIGSERIAL,
    data text NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS images.camera_meta_p2 (
    id BIGSERIAL,
    data text NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS images.camera_meta_q (
    id BIGSERIAL,
    data text NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS images.camera_roi (
    id BIGSERIAL,
    x_offset DECIMAL NOT NULL,
    y_offset DECIMAL NOT NULL,
    height INT NOT NULL,
    width INT NOT NULL,
    do_rectify BOOLEAN NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS images.full_histogram (
    id BIGSERIAL,
    data text NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS images.small_histogram (
    id BIGSERIAL,
    data text NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS images.camera_histogram (
    id BIGSERIAL,
    full_histogram_id BIGINT NOT NULL,
    small_histogram_id BIGINT NOT NULL,
    PRIMARY KEY(id),
    CONSTRAINT fk_full_hisogram
        FOREIGN KEY(full_histogram_id)
        REFERENCES images.full_histogram(id),
    CONSTRAINT fk_small_hisogram
        FOREIGN KEY(small_histogram_id)
        REFERENCES images.small_histogram(id)
);

CREATE TABLE IF NOT EXISTS images.camera_meta (
    id BIGSERIAL,
    serial_number VARCHAR(255) NOT NULL,
    camera_name text,
    left_intrinsics_id BIGINT NOT NULL,
    right_intrinsics_id BIGINT NOT NULL,
    stereo_extrinsics_id BIGINT NOT NULL,
    tractor_extrinsics_id BIGINT NOT NULL,
    e_id BIGINT NOT NULL,
    f_id BIGINT NOT NULL,
    r1_id BIGINT NOT NULL,
    r2_id BIGINT NOT NULL,
    p1_id BIGINT NOT NULL,
    p2_id BIGINT NOT NULL,
    q_id BIGINT NOT NULL,
    left_roi_id BIGINT,
    right_roi_id BIGINT,
    left_exposure DECIMAL,
    right_exposure DECIMAL,
    left_gain DECIMAL,
    right_gain DECIMAL,
    extra text,
    left_histogram_id BIGINT NOT NULL,
    right_histogram_id BIGINT NOT NULL,
    PRIMARY KEY(id),
    CONSTRAINT fk_left_intrinsics
        FOREIGN KEY(left_intrinsics_id)
        REFERENCES images.side_intrinsics(id),
    CONSTRAINT fk_right_intrinsics
        FOREIGN KEY(right_intrinsics_id)
        REFERENCES images.side_intrinsics(id),
    CONSTRAINT fk_stereo_extrinsics
        FOREIGN KEY(stereo_extrinsics_id)
        REFERENCES images.stereo_intrinsics(id),
    CONSTRAINT fk_tractor_extrinsics
        FOREIGN KEY(tractor_extrinsics_id)
        REFERENCES images.stereo_intrinsics(id),
    CONSTRAINT fk_e
        FOREIGN KEY(e_id)
        REFERENCES images.camera_meta_e(id),
    CONSTRAINT fk_f
        FOREIGN KEY(f_id)
        REFERENCES images.camera_meta_f(id),
    CONSTRAINT fk_r1
        FOREIGN KEY(r1_id)
        REFERENCES images.camera_meta_r1(id),
    CONSTRAINT fk_r2
        FOREIGN KEY(r2_id)
        REFERENCES images.camera_meta_r2(id),
    CONSTRAINT fk_p1
        FOREIGN KEY(p1_id)
        REFERENCES images.camera_meta_p1(id),
    CONSTRAINT fk_p2
        FOREIGN KEY(p2_id)
        REFERENCES images.camera_meta_p2(id),
    CONSTRAINT fk_q
        FOREIGN KEY(q_id)
        REFERENCES images.camera_meta_q(id),
    CONSTRAINT fk_left_roi
        FOREIGN KEY(left_roi_id)
        REFERENCES images.camera_roi(id),
    CONSTRAINT fk_right_roi
        FOREIGN KEY(right_roi_id)
        REFERENCES images.camera_roi(id),
    CONSTRAINT fk_left_historgram
        FOREIGN KEY(left_histogram_id)
        REFERENCES images.camera_histogram(id),
    CONSTRAINT fk_right_historgram
        FOREIGN KEY(right_histogram_id)
        REFERENCES images.camera_histogram(id)
);

CREATE TABLE IF NOT EXISTS images.camera_pair_message (
    id BIGSERIAL,
    header_id BIGINT NOT NULL,
    left_image_id BIGINT NOT NULL,
    right_image_id BIGINT NOT NULL,
    camera_meta_id BIGINT NOT NULL,
    PRIMARY KEY(id),
    CONSTRAINT fk_camera_pair_message_header
        FOREIGN KEY(header_id)
        REFERENCES images.camera_pair_message_header(id),
    CONSTRAINT fk_camera_pair_left_image
        FOREIGN KEY(left_image_id)
        REFERENCES images.images(id),
    CONSTRAINT fk_camera_pair_right_image
        FOREIGN KEY(right_image_id)
        REFERENCES images.images(id),
    CONSTRAINT fk_camera_meta
        FOREIGN KEY(camera_meta_id)
        REFERENCES images.camera_meta(id)
);

CREATE TABLE IF NOT EXISTS images.camera_pair (
    id BIGSERIAL,
    readingAt TIMESTAMPTZ NOT NULL,
    topic_id BIGINT NOT NULL,
    msg_id BIGINT NOT NULL,
    topic_type_id BIGINT NOT NULL,
    PRIMARY KEY(id),
    CONSTRAINT fk_camera_pair_topic
        FOREIGN KEY(topic_id)
        REFERENCES topics.topics(id),
    CONSTRAINT fk_camera_pair_msg 
        FOREIGN KEY(msg_id)
        REFERENCES images.camera_pair_message(id),
    CONSTRAINT fk_topics_type
        FOREIGN KEY(topic_type_id)
        REFERENCES topics.topic_types(id)
);

-- SEGMENTATION

CREATE TABLE IF NOT EXISTS images.segmentation_map_header_stamp(
    id BIGSERIAL,
    sec BIGINT NOT NULL,
    nanosec BIGINT NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS images.segmentation_map_image_header (
    id BIGSERIAL,
    stamp_id BIGINT NOT NULL,
    frame_id VARCHAR(255),
    PRIMARY KEY(id),
    CONSTRAINT fk_segmentation_map_header_stamp
        FOREIGN KEY(stamp_id)
        REFERENCES images.segmentation_map_header_stamp(id)
);

CREATE TABLE IF NOT EXISTS images.segmentation_map_descriptor (
    id BIGSERIAL,
    header_id BIGINT NOT NULL,
    readingAt TIMESTAMPTZ NOT NULL,
    seq DECIMAL NOT NULL,
    node VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS images.segmentation_map_image_data (
    id BIGSERIAL,
    data text NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS images.segmentation_map_image (
    id BIGSERIAL,
    header_id BIGINT NOT NULL,
    height INT NOT NULL,
    width INT NOT NULL,
    encoding VARCHAR(255) NOT NULL,
    is_bigendian INT NOT NULL,
    step INT NOT NULL,
    data_id BIGINT NOT NULL,
    PRIMARY KEY(id),
    CONSTRAINT fk_segmentation_map_image_header
        FOREIGN KEY(header_id)
        REFERENCES images.segmentation_map_image_header(id),
    CONSTRAINT fk_segmentation_map_image_data 
        FOREIGN KEY(data_id)
        REFERENCES images.segmentation_map_image_data(id)
);

CREATE TABLE IF NOT EXISTS images.segmentation_map_message (
    id BIGSERIAL,
    descriptor_id BIGINT NOT NULL,
    image_id BIGINT NOT NULL,
    camera_meta_id BIGINT NOT NULL,
    PRIMARY KEY(id),
    CONSTRAINT fk_segmentation_map_descriptor
        FOREIGN KEY(descriptor_id)
        REFERENCES images.segmentation_map_descriptor(id),
    CONSTRAINT fk_camera_meta
        FOREIGN KEY(camera_meta_id)
        REFERENCES images.camera_meta(id)
);

CREATE TABLE IF NOT EXISTS images.segmentation_map (
    id BIGSERIAL,
    readingAt TIMESTAMPTZ NOT NULL,
    topic_id BIGINT NOT NULL,
    topic_type_id BIGINT NOT NULL,
    msg_id BIGINT NOT NULL,
    PRIMARY KEY(id),
    CONSTRAINT fk_topic_id 
        FOREIGN KEY(topic_id)
        REFERENCES topics.topics(id),
    CONSTRAINT fk_topics_type
        FOREIGN KEY(topic_type_id)
        REFERENCES topics.topic_types(id),
    CONSTRAINT fk_segmentation_map_message
        FOREIGN KEY(msg_id)
        REFERENCES images.segmentation_map_message(id)
);