---
title: HLS Deploy
sidebar_label: HLS Deploy
hide_title: false
hide_table_of_contents: false
---

# HLS deploy example

We show how to delivery HLS by SRS.

**Suppose the server ip is 192.168.1.170**

## Step 1, get SRS

For detail, read [GIT](./git)

```bash
git clone https://github.com/ossrs/srs
cd srs/trunk
```

Or update the exists code:

```bash
git pull
```

## Step 2, build SRS

For detail, read [Build](./install)

```bash
./configure && make
```

## Step 3, config SRS

For detail, read [HLS](./delivery-hls)

Save bellow as config, or use `conf/hls.conf`:

```bash
# conf/hls.conf
listen              1935;
max_connections     1000;
http_server {
    enabled         on;
    listen          8080;
    dir             ./objs/nginx/html;
}
vhost __defaultVhost__ {
    hls {
        enabled         on;
        hls_path        ./objs/nginx/html;
        hls_fragment    10;
        hls_window      60;
    }
}
```

> Note: You can also use other web server, such as NGINX, to delivery files of HLS.

> Note: The hls_path must exists, srs never create it. For detail, read [HLS](./delivery-hls)

## Step 4, start SRS

For detail, read [HLS](./delivery-hls)

```bash
./objs/srs -c conf/hls.conf
```

## Step 5, start publisher

For detail, read [HLS](./delivery-hls)

Use FFMPEG to publish stream:

```bash
    for((;;)); do \
        ./objs/ffmpeg/bin/ffmpeg -re -i ./doc/source.flv \
        -c copy \
        -f flv rtmp://192.168.1.170/live/livestream; \
        sleep 1; \
    done
```

Or use FMLE(which support h.264+aac) to publish, read 
[Transcode2HLS](./sample-transcode-to-hls)：

```bash
FMS URL: rtmp://192.168.1.170/live
Stream: livestream
```

The stream in SRS:
* RTMP url：`rtmp://192.168.1.170/live/livestream`
* HLS url： `http://192.168.1.170:8080/live/livestream.m3u8`

## Step 6, play RTMP stream

For detail, read [HLS](./delivery-hls)

RTMP url is: `rtmp://192.168.1.170:1935/live/livestream`

User can use vlc to play the RTMP stream.

Or, use online SRS player: [srs-player][srs-player]

Note: Please replace all ip 192.168.1.170 to your server ip.

## Step 7, play HLS stream

For detail, read [HLS](./delivery-hls)

HLS url： `http://192.168.1.170:8080/live/livestream.m3u8`

User can use vlc to play the HLS stream.

Or, use online SRS player：[srs-player][jwplayer]

Note: Please replace all ip 192.168.1.170 to your server ip.

Note: VLC can not play the pure audio stream, while jwplayer can.

For detail about pure audio HLS, read [HLS audio only][HLS-Audio-Only]

Winlin 2014.11

![](https://ossrs.net/gif/v1/sls.gif?site=ossrs.io&path=/lts/doc-en-4/doc/sample-hls)


