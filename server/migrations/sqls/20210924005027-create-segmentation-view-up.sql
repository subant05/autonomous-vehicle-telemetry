/* Replace with your SQL commands */
CREATE OR REPLACE VIEW images.segmentation_view as 
select 
	 map.id as id
	, map.readingat
	, img.width
	, img.height
	, img.encoding
	, img.is_bigendian
	, img.step
	, cmh.header_id
    , img.id as image_id
from images.camera_message_header as cmh
inner join images.camera_message as cm on cm.header_id = cmh.id
inner join images.images as img on img.id = cm.image_id
inner join images.image_data as img_data on img_data.id = img.data_id
inner join images.segmentation_map as map on map.msg_id = cm.id
where img.encoding = 'mono8'
