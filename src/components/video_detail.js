import React from 'react';

const VideoDetail = ({video}) =>
{
    console.log("video detail",video);
    if(video==null)
    {
        return (<div> loading ....</div>);
    }

    const videoId = video.id.videoId;
    const url = `https:/youtube.com/embed/${videoId}`;
    return (
        <div className = "outer">
<div className = "video-detail col-md-8"> 
<div className = "embed-responsive embed-responsive-16by9">
<iframe className = "embed-responsive-item" src={url}> </iframe>
</div>
<div className="details">
<div> {video.snippet.title}</div>
<div > {video.snippet.description}</div>
</div>
</div>
</div>
    );
};

export default VideoDetail;