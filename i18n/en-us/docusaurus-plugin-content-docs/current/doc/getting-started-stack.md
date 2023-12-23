---
title: SRS Stack
sidebar_label: SRS Stack
hide_title: false
hide_table_of_contents: false
---

# SRS Stack

SRS Stack is a video cloud solution that is lightweight, open-source, and based on Go,
Reactjs, SRS, FFmpeg, WebRTC, etc.

## Introduction

SRS Stack, an open-source out-of-the-box audio and video solution, is built entirely based on various scenarios. 
Common examples include push-pull streaming scenarios that support different protocols and can be embedded into 
websites like WordPress. 

In recording scenarios, it supports merging multiple streams, setting filters, and recording specific streams only. 
For forwarding and virtual live streaming, files and other streams can be sent to different platforms or to SRS Stack 
itself. With AI automatic subtitles, OpenAI's capabilities can be utilized to automatically recognize and embed 
subtitles into the video stream. One-click automatic HTTPS makes it easy to enable HTTPS capabilities. 

More diverse scenarios will be available in the future.

## FAQ

If you encounter issues while using SRS Stack, please read the [FAQ](/faq-srs-stack) first.

## Docker

Strongly recommend running SRS Stack with docker:

```bash
docker run --restart always -d -it --name srs-stack -v $HOME/data:/data \
  -p 2022:2022 -p 2443:2443 -p 1935:1935 -p 8000:8000/udp -p 10080:10080/udp \
  ossrs/srs-stack:5
```

Then you can open [http://localhost:2022](http://localhost:2022) to use SRS Stack.

For more details, please refer to [SRS Stack Docker](https://github.com/ossrs/srs-stack#usage).

## HELM

Strongly recommend running SRS Stack with HELM:

```bash
helm repo add srs http://helm.ossrs.io/stable
helm install srs srs/srs-stack --set persistence.path=$HOME/data \
  --set service.http=2022 --set service.https=2443 --set service.rtmp=1935 \
  --set service.rtc=8000 --set service.srt=10080
```

Then you can open [http://localhost:2022](http://localhost:2022) to use SRS Stack.

## Script

For Ubuntu 20+, you can download the [linux-srs_stack-en.tar.gz](https://github.com/ossrs/srs-stack/releases/latest/download/linux-srs_stack-en.tar.gz)
and install it.

## AWS Lightsail

SRS Stack supports AWS Lightsail, which is a virtual private server (VPS) service offered by AWS. Please 
follow [How to Establish a Video Streaming Service with a Single Click](/blog/SRS-Stack-Tutorial).

## DigitalOcean Droplet

Easily set up an SRS Stack with just one click. For more information, check out
[How to Establish a Video Streaming Service with a Single Click](/blog/SRS-Stack-Tutorial).

## aaPanel

SRS Stack offers a BaoTa plugin, for usage instructions refer to the [SRS Stack aaPanel Plugin](/blog/BT-aaPanel).

## Compare to SRS

Comparing SRS Stack and SRS, both offer media streaming capabilities at a similar level.
However, SRS Stack provides a more powerful and feature-rich experience for end users,
eliminating the need to write any code. Users can directly utilize SRS Stack for your
media services needs.

| Comparison     | SRS Stack | SRS               | Notes                                                              |
|----------------|-----------|-------------------|--------------------------------------------------------------------|
| License        | MIT       | AGPL-3.0-or-later | SRS is licenced under MIT, SRS Stack is AGPL-3.0-or-later.         |
| Live Streaming | Yes       | Yes               | Both support RTMP, HLS, and HTTP-FLV protocols.                    |
| WebRTC         | Yes       | Yes               | WebRTC is supported by both.                                       |
| Console        | Enhanced  | HTTP API          | SRS Stack offers a more powerful console.                          |
| Authentication | Yes       | HTTP Callback     | SRS Stack has built-in authentication, while SRS uses callbacks.   |
| DVR            | Enhanced  | File-based        | SRS Stack supports DVR to file and cloud storage.                  |
| Forwarding     | Enhanced  | Basic             | SRS Stack can forward to multiple platforms via various protocols. |
| Virtual Live   | Yes       | No                | SRS Stack provides advanced virtual live streaming capabilities.   |
| WordPress      | Yes       | No                | SRS Stack offers a WordPress plugin and step-by-step guidelines.   |
| Transcoding    | Yes       | No                | SRS Stack supports live stream transcoding.                        |

Special Note:

* Please choose the Ubuntu 20 system, as other systems may encounter some strange issues.

## Blogs

* [SRS Stack - How to Setup a Video Streaming Service by 1-Click](/blog/SRS-Stack-Tutorial)
* [SRS Stack - How to Secure SRS with Let's Encrypt by 1-Click](/blog/SRS-Stack-HTTPS)
* [SRS Stack - How to Publish Your SRS Livestream Through WordPress](/blog/WordPress-Plugin)
* [SRS Stack - How to Setup a Video Streaming Service with aaPanel](/blog/BT-aaPanel)
* [SRS Stack - Ensuring Authentication in Live Streaming Publishing](/blog/Ensuring-Authentication-in-Live-Streaming-Publishing)

![](https://ossrs.io/gif/v1/sls.gif?site=ossrs.io&path=/lts/doc/en/v6/getting-started-stack)


