/* Replace with your SQL commands */
CREATE VIEW images.images_view AS
SELECT 
	meta.camera_name
	, meta.serial_number
	, header.readingat
	, header.node
	, header.header_id
	, img.id
	, img.width
	, img.height
	, img.step
	, img.is_bigendian
	, img.encoding
	, cam.camera_json_id as json_id
	, vehicle.id as vehicle_id
	, vehicle.name as vehicle_name
	, topic.id as topic_id
	, topic.name as topic_name
FROM images.camera_message_header as header
INNER JOIN images.camera_message as cam_message on cam_message.header_id = header.id
INNER JOIN images.camera as cam on cam.msg_id = cam_message.id
INNER JOIN images.camera_meta as meta on meta.id = cam_message.camera_meta_id
INNER JOIN images.images as img on img.id = cam_message.image_id
INNER JOIN vehicles.vehicles as vehicle on vehicle.id = cam.vehicle_id
INNER JOIN topics.topics as topic on topic.id = cam.topic_id;