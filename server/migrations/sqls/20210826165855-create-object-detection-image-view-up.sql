CREATE VIEW detection.Object_Detection_Images AS
SELECT  
	obj.id as object_id,
	obj_mh.headerid as obj_header_id,
	cam_mh.header_id as header_id, 
	cam.vehicle_id as vehicle_id,
	img.id as image_id,
	img.width as width,
	img.height as height,
	img.encoding as encoding,
	veh.name as vehicle_name,
	obj_mh.readingat as readingat,
	cam_meta.camera_name as camera_name,
	cam_meta.left_exposure as left_exposure,
	cam_meta.right_exposure as right_exposure,
	cam_meta.left_gain as left_gain,
	cam_meta.left_gain as right_gain
FROM detection.objects as obj
INNER JOIN detection.object_message as obj_m ON obj_m.id = obj.message_id
INNER JOIN detection.object_message_header as obj_mh ON obj_mh.id = obj_m.header_id
INNER JOIN images.camera as cam ON cam.vehicle_id = obj.vehicle_id
INNER JOIN images.camera_message as cam_m ON cam_m.id = cam.msg_id
INNER JOIN images.camera_message_header as cam_mh ON cam_mh.id = cam_m.header_id
INNER JOIN images.camera_meta as cam_meta ON cam_meta.id = cam_m.camera_meta_id
INNER JOIN images.images as img ON img.id = cam_m.image_id
INNER JOIN vehicles.vehicles as veh ON veh.id = obj.vehicle_id
WHERE obj_mh.headerid = cam_mh.header_id
AND  obj.vehicle_id = cam.vehicle_id;