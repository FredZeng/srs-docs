---
slug: Record-Live-Streaming
title: SRS Stack - How to Record Live Streaming to MP4 File
authors: []
tags: [live streaming, record, dvr, srs]
custom_edit_url: null
---

# How to Record Live Streaming to MP4 File with SRS Stack

## Introduction

With SRS Stack, you can easily record your live streaming and publish it on a web page for your audience 
to access. In this blog, we will guide you through the process of recording live streaming to an MP4 file 
using SRS Stack.

<!--truncate-->

Live streaming has become increasingly popular, and many content creators want to record their live streams 
for later use or to provide their audience with video-on-demand (VoD) content. While there are various 
methods to record live streams, such as using OBS, some embedded devices may not support recording or 
may be difficult to control. In such cases, server-side recording can be a more efficient solution. 

### Step 1: Create SRS Stack by one click

Creating an SRS Stack is simple and can be done with just one click if you use Digital Ocean droplet.
Please see [How to Setup a Video Streaming Service by 1-Click](./2022-04-09-SRS-Stack-Tutorial.md) for detail.

You can also use Docker to create an SRS Stack with a single command line:

```bash
docker run --rm -it -p 2022:2022 -p 2443:2443 -p 1935:1935 \
  -p 8080:8080 -p 8000:8000/udp -p 10080:10080/udp --name srs-stack \
  -v $HOME/data:/data ossrs/srs-stack:5
```

After creating the SRS Stack, you can access it through `http://your-server-ip/mgmt`.

### Step 2: Publish a live stream to SRS Stack

You can use OBS or FFmpeg to publish a live stream to SRS Stack. You can also set up HTTPS and publish via WebRTC.

![](/img/blog-2022-04-09-01.png)

Once the stream is published, you can preview it using an H5 player or VLC.
Please see [How to Setup a Video Streaming Service by 1-Click](./2022-04-09-SRS-Stack-Tutorial.md) for detail.

## Step 3: Record the Live Stream by SRS Stack

Once your live stream is published, you can start recording it using SRS Stack. To do this, open the 
`Scenarios > Record > Setup Record Rules` section and click the `Start Record` button. 

![](/img/blog-2023-09-10-01.png)

The recording process will begin, and you can monitor the progress of your recording tasks.

![](/img/blog-2023-09-10-02.png)

## Step 4: Stop and Download MP4 File

When you want to stop recording, click the `Stop Record` button in the `Setup Record Rules` section. Wait for
a few seconds for the recording to stop. If the live stream is no longer being published, SRS Stack will 
automatically stop the recording task after a few minutes (e.g., 5 minutes).

After the recording has stopped, SRS Stack will transmux the recorded file to MP4 format. You can then preview 
and download the MP4 file for further use or distribution.

![](/img/blog-2023-09-10-03.png)

## TRTC Cloud Service

We also recommend the TRTC cloud services, because it supports global network acceleration, improved congestion control
algorithms, better performance on weak networks, client SDKs for all platforms, and a monthly free quota. Click
[here](https://trtc.io/demo?utm_source=community&utm_medium=ossrs&utm_campaign=OBS-WHIP-TRTC&_channel_track_key=lfJKyOlF)
to view the online demo. If you have any questions, please join our [Discord](https://discord.gg/DCCH6HyhuT) channel
to contact us.

## Conclusion

Recording live streaming to an MP4 file is a valuable feature for content creators who want to provide 
their audience with video-on-demand content. With SRS Stack, the process of recording, stopping, and 
downloading your live streams is simplified, making it easy for you to manage and distribute your recorded 
content. By following the steps outlined in this blog, you can quickly and efficiently record your live 
streams and make them available for your audience to access whenever they want.

Welcome for more discussion at [discord](https://discord.gg/bQUPDRqy79).

![](https://ossrs.net/gif/v1/sls.gif?site=ossrs.io&path=/lts/blog-en/2023-09-10-Record-Live-Streaming)
