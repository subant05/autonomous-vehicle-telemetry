ALTER TABLE images.image_header 
DROP CONSTRAINT fk_image_header_stamp,
ADD CONSTRAINT fk_image_header_stamp
	    FOREIGN KEY (stamp_id)
	    REFERENCES images.image_header_stamp (id)
        ON DELETE CASCADE;
-- 
ALTER TABLE images.images 
DROP CONSTRAINT fk_image_header,
DROP CONSTRAINT fk_image_data,
ADD CONSTRAINT fk_image_header
        FOREIGN KEY(header_id)
        REFERENCES images.image_header (id)
        ON DELETE CASCADE,
ADD CONSTRAINT fk_image_data
        FOREIGN KEY(data_id)
        REFERENCES images.image_data(id)
        ON DELETE CASCADE;
-- 
ALTER TABLE images.side_intrinsics 
DROP CONSTRAINT fk_side_intrinsics_k,
DROP CONSTRAINT fk_side_intrinsics_d,
ADD CONSTRAINT fk_side_intrinsics_k
        FOREIGN KEY(k_id)
        REFERENCES images.side_intrinsics_k(id)
        ON DELETE CASCADE,
ADD CONSTRAINT fk_side_intrinsics_d
        FOREIGN KEY(d_id)
        REFERENCES images.side_intrinsics_d(id)
        ON DELETE CASCADE;
-- 
ALTER TABLE images.stereo_extrinsics 
DROP CONSTRAINT fk_stereo_extrinsics_t,
DROP CONSTRAINT fk_stereo_extrinsics_r,
DROP CONSTRAINT fk_stereo_extrinsics_r_rodrigues,
ADD CONSTRAINT fk_stereo_extrinsics_t
        FOREIGN KEY(t_id)
        REFERENCES images.stereo_extrinsics_t(id)
        ON DELETE CASCADE,
ADD CONSTRAINT fk_stereo_extrinsics_r
        FOREIGN KEY(r_id)
        REFERENCES images.stereo_extrinsics_r(id)
        ON DELETE CASCADE,
ADD CONSTRAINT fk_stereo_extrinsics_r_rodrigues
        FOREIGN KEY(r_rodrigues_id)
        REFERENCES images.stereo_extrinsics_r_rodrigues(id)
        ON DELETE CASCADE;

-- 

ALTER TABLE images.tractor_extrinsics
DROP CONSTRAINT fk_tractor_extrinsics_t,
DROP CONSTRAINT fk_tractor_extrinsics_r,
DROP CONSTRAINT fk_tractor_extrinsics_r_rodrigues,
ADD CONSTRAINT fk_tractor_extrinsics_t
        FOREIGN KEY(t_id)
        REFERENCES images.tractor_extrinsics_t(id)
        ON DELETE CASCADE,
ADD CONSTRAINT fk_tractor_extrinsics_r
        FOREIGN KEY(r_id)
        REFERENCES images.tractor_extrinsics_r(id)
        ON DELETE CASCADE,
ADD CONSTRAINT fk_tractor_extrinsics_r_rodrigues
        FOREIGN KEY(r_rodrigues_id)
        REFERENCES images.tractor_extrinsics_r_rodrigues(id)
        ON DELETE CASCADE;
-- 

ALTER TABLE images.camera_histogram
DROP CONSTRAINT fk_full_hisogram,
DROP CONSTRAINT fk_small_hisogram,
ADD CONSTRAINT fk_full_hisogram
        FOREIGN KEY(full_histogram_id)
        REFERENCES images.full_histogram(id)
        ON DELETE CASCADE,
ADD CONSTRAINT fk_small_hisogram
        FOREIGN KEY(small_histogram_id)
        REFERENCES images.small_histogram(id)
        ON DELETE CASCADE;

-- 

ALTER TABLE images.camera_meta 
DROP CONSTRAINT fk_left_intrinsics,
DROP CONSTRAINT fk_right_intrinsics,
DROP CONSTRAINT fk_stereo_extrinsics,
DROP CONSTRAINT fk_tractor_extrinsics,
DROP CONSTRAINT fk_e,
DROP CONSTRAINT fk_f,
DROP CONSTRAINT fk_r1,
DROP CONSTRAINT fk_r2,
DROP CONSTRAINT fk_p1,
DROP CONSTRAINT fk_p2,
DROP CONSTRAINT fk_q,
DROP CONSTRAINT fk_left_roi,
DROP CONSTRAINT fk_right_roi,
DROP CONSTRAINT fk_left_historgram,
DROP CONSTRAINT fk_right_historgram,
ADD CONSTRAINT fk_left_intrinsics
    FOREIGN KEY(left_intrinsics_id)
    REFERENCES images.side_intrinsics(id)
    ON DELETE CASCADE,
ADD CONSTRAINT fk_right_intrinsics
    FOREIGN KEY(right_intrinsics_id)
    REFERENCES images.side_intrinsics(id)
    ON DELETE CASCADE,
ADD CONSTRAINT fk_stereo_extrinsics
    FOREIGN KEY(stereo_extrinsics_id)
    REFERENCES images.stereo_extrinsics(id)
    ON DELETE CASCADE,
ADD CONSTRAINT fk_tractor_extrinsics
    FOREIGN KEY(tractor_extrinsics_id)
    REFERENCES images.tractor_extrinsics(id)
    ON DELETE CASCADE,
ADD CONSTRAINT fk_e
    FOREIGN KEY(e_id)
    REFERENCES images.camera_meta_e(id)
    ON DELETE CASCADE,
ADD CONSTRAINT fk_f
    FOREIGN KEY(f_id)
    REFERENCES images.camera_meta_f(id)
    ON DELETE CASCADE,
ADD CONSTRAINT fk_r1
    FOREIGN KEY(r1_id)
    REFERENCES images.camera_meta_r1(id)
    ON DELETE CASCADE,
ADD CONSTRAINT fk_r2
    FOREIGN KEY(r2_id)
    REFERENCES images.camera_meta_r2(id)
    ON DELETE CASCADE,
ADD CONSTRAINT fk_p1
    FOREIGN KEY(p1_id)
    REFERENCES images.camera_meta_p1(id)
    ON DELETE CASCADE,
ADD CONSTRAINT fk_p2
    FOREIGN KEY(p2_id)
    REFERENCES images.camera_meta_p2(id)
    ON DELETE CASCADE,
ADD CONSTRAINT fk_q
    FOREIGN KEY(q_id)
    REFERENCES images.camera_meta_q(id)
    ON DELETE CASCADE,
ADD CONSTRAINT fk_left_roi
    FOREIGN KEY(left_roi_id)
    REFERENCES images.camera_roi(id)
    ON DELETE CASCADE,
ADD CONSTRAINT fk_right_roi
    FOREIGN KEY(right_roi_id)
    REFERENCES images.camera_roi(id)
    ON DELETE CASCADE,
ADD CONSTRAINT fk_left_historgram
    FOREIGN KEY(left_histogram_id)
    REFERENCES images.camera_histogram(id)
    ON DELETE CASCADE,
ADD CONSTRAINT fk_right_historgram
    FOREIGN KEY(right_histogram_id)
    REFERENCES images.camera_histogram(id)
    ON DELETE CASCADE;

-- 

ALTER TABLE images.camera_pair_message 
DROP CONSTRAINT fk_camera_pair_message_header,
DROP CONSTRAINT fk_camera_pair_left_image ,
DROP CONSTRAINT fk_camera_pair_right_image ,
DROP CONSTRAINT fk_camera_meta,
ADD CONSTRAINT fk_camera_pair_message_header
        FOREIGN KEY(header_id)
        REFERENCES images.camera_message_header(id)
        ON DELETE CASCADE,
ADD CONSTRAINT fk_camera_pair_left_image
        FOREIGN KEY(left_image_id)
        REFERENCES images.images(id)
        ON DELETE CASCADE,
ADD CONSTRAINT fk_camera_pair_right_image
        FOREIGN KEY(right_image_id)
        REFERENCES images.images(id)
        ON DELETE CASCADE,
ADD CONSTRAINT fk_camera_meta
        FOREIGN KEY(camera_meta_id)
        REFERENCES images.camera_meta(id)
        ON DELETE CASCADE;

-- 

ALTER TABLE images.camera_pair
DROP CONSTRAINT fk_camera_pair_topic ,
DROP CONSTRAINT fk_camera_pair_msg  ,
DROP CONSTRAINT fk_topics_type ,
DROP CONSTRAINT fk_vehicle_id,
ADD CONSTRAINT fk_camera_pair_topic
        FOREIGN KEY(topic_id)
        REFERENCES topics.topics(id)
        ON DELETE CASCADE,
ADD CONSTRAINT fk_camera_pair_msg 
        FOREIGN KEY(msg_id)
        REFERENCES images.camera_pair_message(id)
        ON DELETE CASCADE,
ADD CONSTRAINT fk_topics_type
        FOREIGN KEY(topic_type_id)
        REFERENCES topics.topic_types(id)
        ON DELETE CASCADE,
ADD CONSTRAINT fk_vehicle_id
        FOREIGN KEY(vehicle_id)
        REFERENCES vehicles.vehicles(id)
        ON DELETE CASCADE;

-- 

ALTER TABLE images.camera_message
DROP CONSTRAINT fk_camera_message_header,
DROP CONSTRAINT fk_camera_image,
DROP CONSTRAINT fk_camera_meta,
ADD CONSTRAINT fk_camera_message_header
        FOREIGN KEY(header_id)
        REFERENCES images.camera_message_header(id)
        ON DELETE CASCADE,
ADD CONSTRAINT fk_camera_image
        FOREIGN KEY(image_id)
        REFERENCES images.images(id)
        ON DELETE CASCADE,
ADD CONSTRAINT fk_camera_meta
        FOREIGN KEY(camera_meta_id)
        REFERENCES images.camera_meta(id)
        ON DELETE CASCADE;

-- 

ALTER TABLE images.camera
DROP CONSTRAINT fk_camera_topic,
DROP CONSTRAINT fk_camera_msg,
DROP CONSTRAINT fk_vehicle_id,
DROP CONSTRAINT fk_camera_json,
ADD CONSTRAINT fk_camera_topic
        FOREIGN KEY(topic_id)
        REFERENCES topics.topics(id)
        ON DELETE CASCADE,
ADD CONSTRAINT fk_camera_msg 
        FOREIGN KEY(msg_id)
        REFERENCES images.camera_message(id)
        ON DELETE CASCADE,
ADD CONSTRAINT fk_vehicle_id
        FOREIGN KEY(vehicle_id)
        REFERENCES vehicles.vehicles(id)
        ON DELETE CASCADE,
ADD CONSTRAINT fk_camera_json
        FOREIGN KEY(camera_json_id)
        REFERENCES images.camera_json(id)
        ON DELETE CASCADE;

-- 

ALTER TABLE images.segmentation_map
DROP CONSTRAINT fk_camera_msg,
DROP CONSTRAINT fk_camera_topic,
DROP CONSTRAINT fk_vehicle_id,
DROP CONSTRAINT fk_camera_json,
ADD CONSTRAINT fk_camera_msg 
        FOREIGN KEY (msg_id)
        REFERENCES images.camera_message (id)
        ON DELETE CASCADE,
ADD CONSTRAINT fk_camera_topic 
        FOREIGN KEY (topic_id)
        REFERENCES topics.topics (id) 
        ON DELETE CASCADE,
ADD CONSTRAINT fk_vehicle_id 
        FOREIGN KEY (vehicle_id)
        REFERENCES vehicles.vehicles (id)
        ON DELETE CASCADE,
ADD CONSTRAINT fk_camera_json
        FOREIGN KEY(camera_json_id)
        REFERENCES images.camera_json(id)
        ON DELETE CASCADE;