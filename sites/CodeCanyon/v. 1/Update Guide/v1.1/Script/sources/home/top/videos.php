<?php 	
$fetch_top_videos_data_array    = array(
    'table' => T_VIDEOS,
    'column' => 'id',
    'limit' => 1,
    'order' => array(
        'type' => 'desc',
        'column' => 'id'
    ),
    'where' => array(
        array(
            'column' => 'active',
            'value' => '1',
            'mark' => '='
        )
    ),
    'final_data' => array(
        array(
            'function_name' => 'FL_GetVideos',
            'column' => 'id',
            'name' => 'video'
        )
    )
);
$top_videos                    = $fl['top_videos'] = FL_FetchDataFromDB($fetch_top_videos_data_array);
$top_videos_html               = '';
foreach ($fl['top_videos'] as $key => $fl['top_video_data']) {
    $top_videos_html .= FL_Loadpage('home/lists/top-videos', array(
        'TOP_VIDEO_URL' => $fl['top_video_data']['video']['url'],
        'TOP_VIDEO_IMAGE' => FL_GetMedia($fl['top_video_data']['video']['image']),
        'TOP_VIDEO_TITLE' => $fl['top_video_data']['video']['title'],
        'TOP_VIDEO_DESC' => $fl['top_video_data']['video']['description'],
        'TOP_VIDEO_POSTED' => $fl['top_video_data']['video']['posted'],
        'TOP_VIDEO_PUBLISHER__NAME' => $fl['top_video_data']['video']['publisher']['name']
    ));
}
?>