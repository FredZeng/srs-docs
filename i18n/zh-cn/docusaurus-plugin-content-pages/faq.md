# FAQ

关于Q&A，请按下面的流程：

* 在[Wiki](/docs/v4/doc/introduction)中有的内容，请花时间看文档，不要提Issue。
* 重复的Issue会被删除，请先在[Issues](https://github.com/ossrs/srs/issues)中搜索你的问题，确认没有后再提Issue。
* 我如何才能够？How do I? -- [Stack Overflow](https://stackoverflow.com/questions/tagged/simple-realtime-server)
* 我碰到一个错误，为何？I got this error, why? -- [Stack Overflow](https://stackoverflow.com/questions/tagged/simple-realtime-server)
* 我碰到个错误，确定是Bug，请按Issue模版提[Bug](https://github.com/ossrs/srs/issues/new) or [PR](./how-to-file-pr)，不提供**完整**信息的Issue会被直接删除。
* 咨询和讨论请来[视频号直播间交流](./contact)。也可以[加微信群](./contact)，在群里交流。

## FAQ

下面是常见的问题，请先在本Issue中搜索：

<a name='video-guides'></a>

### [Video Guides](#video-guides)

下面是答疑的视频资料，详细讲解了某个话题，如果你的问题类似请直接看视频哈：

* [FAQ：SRS有哪些文档和资料](https://www.bilibili.com/video/BV1QA4y1S7iU/) SRS有哪些文档资料？先看Usage，在看FAQ，接着是Wiki，还有Issues。如果GitHub访问慢怎么办呢？可以把资料Clone到本地，或者访问Gitee镜像。
* [FAQ：SRS是否支持STUN和WebRTC的P2P](https://www.bilibili.com/video/BV13t4y1x7QV/) SRS是否支持STUN协议？如何支持WebRTC P2P打洞？SFU和P2P的区别？
* [FAQ：SRS导致WebRTC丢帧如何排查](https://www.bilibili.com/video/BV1LS4y187xU/) RTMP推流到SRS使用WebRTC播放是常见的用法，RTMP是30帧，WebRTC只有10帧，看起来就会卡顿不流畅，这个视频分享了如何排查这类问题。
* [FAQ：SRS如何实现服务的高可靠和热备](https://www.bilibili.com/video/BV1U34y1776t/) SRS如果挂了，怎么能保障服务不受到影响？如何实现音视频服务的高可靠？如何做流的热备和恢复？
* [FAQ：SRS有哪些Docker镜像](https://www.bilibili.com/video/BV1BZ4y1a7Fg/) Docker是非常好用的技术，SRS提供了完善的Docker镜像，也可以自己打SRS的Docker镜像。
* [FAQ：SRS如何提交Issue](https://www.bilibili.com/video/BV13v4y1A74N/) 如果碰到问题，怎么判断是否是Issue？怎么排查Issue？如何提交新的Issue？为何提交的Issue被删除？
* [FAQ：SRS为何不支持WebRTC的FEC等复杂算法](https://www.bilibili.com/video/BV1CA4y1f7JW/) 什么是WebRTC的拥塞控制算法？FEC和NACK有何不同、如何选择？为何SRS没有支持复杂的算法？为何说复杂牛逼的算法一般没什么鸟用？
* [FAQ：CDN支持WebRTC的完善度](https://www.bilibili.com/video/BV14r4y1b7cH/) CDN或云厂商是否都支持WebRTC了？为何说是差不多支持了？目前还有哪些问题或坑？都有哪些CDN的直播是支持WebRTC协议的？
* [FAQ：如何实现直播混流或WebRTC的MCU](https://www.bilibili.com/video/BV1L34y1E7D5/) 如何给直播添加LOGO？如何实现直播画中画？如何实现WebRTC转直播？如何实现WebRTC的MCU功能？为何RTC架构大多是SFU而不是MCU？什么时候必须用MCU？
* [FAQ：开源SFU如何选？Janus有哪些问题，何解？](https://www.bilibili.com/video/BV1bR4y1w7X1/) Janus是WebRTC领域使用最广泛也是最好的SFU之一，当然和所有SFU一样它也有一堆的问题，选择开源选的不仅是代码和架构，选择的更是活跃的社区和对方向的判断。
* [FAQ：如何更低码率达到同等画质](https://www.bilibili.com/video/BV1qB4y197ov/) 在保证画质的前提下，如何降低码率？我们可以使用动态码率，还可以使用相对空闲的客户端CPU交换码率，还可以在业务上优化，特别多平台推流时需要避免上行码率过高。

<a name='rtsp'></a>

### [RTSP](#rtsp)
* `RTSP`：RTSP推流，RTSP服务器，RTSP播放等
  > 1. SRS支持用Ingest拉RTSP，不支持推RTSP流到SRS，这不是正确的用法，详细原因请参考 [#2304](https://github.com/ossrs/srs/issues/2304) 。
  > 1. 当然RTSP服务器，RTSP播放，更加不会支持，参考 [#476](https://github.com/ossrs/srs/issues/476)
  > 1. 如果你需要非常多比如1万路摄像头接入，那么用FFmpeg可能会比较费劲，这么大规模的业务，比较推荐的方案是自己用ST+SRS的代码，实现一个拉RTSP转发的服务器。

<a name='http-api'></a>

### [HTTP API](#http-api)
* `HTTP RAW API`: 关于RAW API，动态录制DVR等
  > 1. 由于RAW API有各种问题，会导致过度使用，4.0已经将该功能删除，详细原因请看 [#2653](https://github.com/ossrs/srs/issues/2653)
  > 1. 再次强调不要用HTTP RAW API实现业务，这是你的业务系统该做的，用Go或Nodejs搞下就可以。

* `Secure HTTP API`: 关于API鉴权，API安全等 <a name='api-security' href='#api-security'>#api-security</a>
  > 1. 关于HTTP API鉴权，如何防止所有人访问，目前建议用Nginx代理解决，后续会增强，详细请看 [#1657](https://github.com/ossrs/srs/issues/1657)
  > 1. 还可以使用HTTP Callback来实现鉴权，在推流或播放时，调用你的业务系统的API，实现hook。

* `Dynamic DVR`: 关于动态录制，正则表达式匹配需要录制的流等。
  > 1. 可以用`on_publish`，回调业务系统，由业务系统实现负责的规则。
  > 1. 具体录制文件用`on_hls`，将切片拷贝到录制目录，或者云存储。
  > 1. 可以参考[srs-cloud](https://github.com/ossrs/srs-cloud/tree/main/hooks)中DVR的实现。
  > 1. SRS不会支持动态DVR，但给出了一些方案，也可以参考 [#1577](https://github.com/ossrs/srs/issues/1577)

<a name='api-security'></a>

### [HTTPS](#https)
* `HTTPS`: 关于HTTPS服务、API、Callback、Streaming、WebRTC等
  > 1. [HTTPS API](/docs/v4/doc/http-api#https-api)提供传输层安全的API，WebRTC推流要求是HTTPS页面自然也只能访问HTTPS API。
  > 1. [HTTPS Callback](/docs/v4/doc/http-callback#https-callback)回调HTTPS服务，如果你的服务器是HTTPS协议，一般业务系统为了安全性都是HTTPS协议。
  > 1. [HTTPS Live Streaming](/docs/v4/doc/delivery-http-flv#https-flv-live-stream)提供传输层安全的Stream流，主要是HTTPS的网页只能访问HTTPS的资源。
  > 1. 单域名自动从`letsencrypt`自动申请SSL证书，方便中小企业部署SRS，也避免HTTPS代理因为流媒体业务代理的开销太大了，参考 [#2864](https://github.com/ossrs/srs/issues/2864)
  > 1. 使用Nginx或Caddy等反向代理，HTTP/HTTPS Proxy，提供统一的HTTP/HTTPS服务，参考 [#2881](https://github.com/ossrs/srs/issues/2881)

<a name='source-cleanup'></a>

### [Source Cleanup](#source-cleanup)
* `Source Cleanup`: 关于超多路流的内存增长等
  > 1. 推流的Source对象没有清理，推流路数增多内存会增长，暂时可以使用[Gracefully Quit](https://github.com/ossrs/srs/issues/413#issuecomment-917771521)绕开，会在未来解决，参考 [#413](https://github.com/ossrs/srs/issues/413)
  > 1. 再次强调，可以用[Gracefully Quit](https://github.com/ossrs/srs/issues/413#issuecomment-917771521)绕开，就算未来解决了这个问题，这个方案也是最靠谱和最优的，重启大法好。

<a name='edge-hls-dvr-rtc'></a>

### [Edge HLS/DVR/RTC](#edge-hls-dvr-rtc)
* `Edge HLS/DVR/RTC`: 关于边缘(Edge)支持HLS/DVR/RTC等
  > 1. 边缘(Edge)是直播的集群，只支持直播流协议比如RTMP和FLV，只有源站才能支持HLS/DVR/RTC，参考 [#1066](https://github.com/ossrs/srs/issues/1066)
  > 1. 目前并没有在Edge禁用HLS/DVR/RTC等能力，但未来会禁用，所以请不要这么用，也用不起来。

<a name='ffmpeg'></a>

### [FFmpeg](#ffmpeg)
* `FFmpeg`: 关于FFmpeg相关的问题
  > 1. 找不到FFmpeg，出现`terminate, please restart it`，编译失败`No FFmpeg found`，FFmpeg不支持h.265或其他Codec，这是需要自己编译或者下载FFmpeg，并放到指定的路径后SRS就会检测到，参考 [#1523](https://github.com/ossrs/srs/issues/1523)
  > 1. 如果是FFmpeg的使用问题，请一律不要在SRS提Issue，请移步到FFmpeg的社区提交。在SRS提FFmpeg的问题，会被直接删除，不要偷懒。

<a name='webrtc-live'></a>

### [WebRTC Live](#webrtc-live)
* `WebRTC+Live`: 关于WebRTC和直播的相关问题
  > 1. WebRTC和RTMP的互相转换，比如RTMP2RTC（RTMP推流RTC播放）， 或者RTC2RTMP（RTC推流RTMP播放），必须要指定转换配置，默认不会开启音频转码，避免较大的性能损失，参考 [#2728](https://github.com/ossrs/srs/issues/2728)
  > 1. SRS 4.0.174之前可以，更新到之后就不工作了，是因为`rtc.conf`不默认开启RTMP转RTC，需要使用`rtmp2rtc.conf`或者`rtc2rtmp.conf`，参考 71ed6e5dc51df06eaa90637992731a7e75eabcd7
  > 1. 未来也不会自动开启RTC和RTMP的转换，因为SRS必须要考虑到独立的RTMP和独立的RTC场景，转换的场景只是其中一个，但是由于转换的场景导致严重的性能问题，所以不能默认开启，会导致独立的场景出现大问题。

<a name='webrtc'></a>

### [WebRTC](#webrtc)
* `WebRTC`: 关于WebRTC推拉流或会议的问题
  > 1. WebRTC比直播复杂多了，很多WebRTC的问题，就不要在SRS里面提Issue，要自己先Google查询下什么问题。如果没有这个能力，就不要用WebRTC，这不是给小白用的功能，坑非常非常的多，没有爬坑能力就别往坑里跳。
  > 1. 比较常见的是Candidate设置不对，导致无法推拉流，这个详细看WebRTC的使用说明：[#307](https://github.com/ossrs/srs/issues/307)
  > 1. 还有UDP端口无法访问的问题，可能是防火墙设置问题，也可能是网络问题，请用工具测试，参考 [#2843](https://github.com/ossrs/srs/issues/2843)
  > 1. 另外比较常见的是RTMP和WebRTC互相转换，请看上面 <a name='webrtc-live' href='#webrtc-live'>#webrtc-live</a> 的说明。
  > 1. 接着就是WebRTC权限问题，比如本机能推流部署到公网不能推流，这是Chrome的安全设置问题，参考 [#2762](https://github.com/ossrs/srs/issues/2762)
  > 1. 还有不太常见，用官网的播放器，是不能播放非HTTPS的SRS的流，这也是Chrome的安全策略问题，参考 [#2787](https://github.com/ossrs/srs/issues/2787)
  > 1. 在docker映射端口时，若改变了端口需要改配置文件，或者通过eip指定，参考 [#2907](https://github.com/ossrs/srs/issues/2907)

<a name='gb28181'></a>

### [GB28181](#gb28181)
* `GB28181`: 关于GB的状态和路线图
  > 1. GB已经放到独立的仓库 [srs-gb28181](https://github.com/ossrs/srs-gb28181)， 请参考 [#2845](https://github.com/ossrs/srs/issues/2845)
  > 1. GB的使用请参考 [#1500](https://github.com/ossrs/srs/issues/1500) ，目前GB还是在[feature/gb28181](https://github.com/ossrs/srs-gb28181/tree/feature/gb28181)分支，稳定后才会合并到develop然后release，预计在SRS 5.0发布。
  > 1. SRS支持GB不会支持全，只会作为接入协议。关注度比较高的[对讲](https://github.com/ossrs/srs-gb28181/issues/1898)有计划支持。

<a name='cdn'></a> <a name='vod'></a>

### [CDN](#cdn)
* 关于RTMP/HTTP-FLV/WebRTC等直播？
  > 1. SRS只支持流协议，比如直播或WebRTC，详细请参考WiKi中关于集群的部分。
* 关于HLS/DASH等切片直播，或者点播/录制/VoD/DVR？
  > 1. SRS可以录制为点播文件。参考 [DVR](/docs/v4/doc/dvr)
  > 1. SRS可以生成HLS或DASH。参考 [HLS](/docs/v4/doc/delivery-hls)
* 关于HLS/DASH/VoD/DVR的分发集群？
  > 1. 这些都是HTTP文件，HTTP文件分发集群建议使用NGINX，参考 [HLS Cluster](/docs/v4/doc/sample-hls-cluster)
  > 1. 可以用NGINX结合SRS Edge分发HTTP-FLV，实现所有HTTP协议的分发，参考 [Nginx For HLS](/docs/v4/doc/nginx-for-hls#work-with-srs-edge-server)

<a name='cors'></a>

### [CORS](#cors)
* `CORS`: 关于HTTP API或流的跨域
  > 1. SRS 3.0支持了跨域(CORS)，不需要额外的HTTP代理，已经内置支持了，默认就是打开的，参考 [#717](https://github.com/ossrs/srs/issues/717) [#798](https://github.com/ossrs/srs/issues/798) [#1002](https://github.com/ossrs/srs/issues/1002)
  > 1. 当然使用Nginx代理服务器，也可以解决跨域问题，这样就不需要在SRS设置了。注意只需要代理API，不要代理流媒体，因为流的带宽消耗太高了，会把代理打挂，也没有必要。
  > 1. 使用Nginx或Caddy代理，提供统一的HTTP/HTTPS服务，参考 [#2881](https://github.com/ossrs/srs/issues/2881)

<a name='latency'></a>

### [Latency](#latency)
* `Latency`: 关于如何降低延迟，如何做低延迟直播，WebRTC延迟多少。
  > 1. 直播延迟一般1到3秒，WebRTC延迟在100ms左右，为何自己搭出来的延迟很大？
  > 1. 最常见的延迟大的原因，是用VLC播放器，这个播放器的延迟就是几十秒，请换成SRS的H5播放器。
  > 1. 延迟是和每个环节都相关，不仅仅是SRS降低延迟就可以，还有推流工具(FFmpeg/OBS)和播放器都相关，具体请参考 [Realtime](/docs/v4/doc/sample-realtime) 一步步操作，别上来就自己弄些骚操作操作，先按文档搭出来低延迟的环境。
  > 1. 如果一步步操作还是发现延迟高，怎么排查呢？可以参考 [#2742](https://github.com/ossrs/srs/issues/2742)

<a name='performance'></a> <a name='memory'></a>

### [Performance](#performance) and [Memory](#memory)
* `Performance`: 关于性能优化，并发，压测，内存泄漏，野指针
  > 1. 性能是一个综合话题，是项目的质量、支持的容量和并发、如何优化性能等比较笼统的叫法，甚至也包含内存问题，比如内存泄漏（导致性能降低）、越界和野指针问题。
  > 1. 如果是需要了解SRS的并发，必须分为直播和WebRTC单独的并发，直播可以用[srs-bench](https://github.com/ossrs/srs-bench)，WebRTC可以用[feature/rtc](https://github.com/ossrs/srs-bench/tree/feature/rtc)分支压测，获取特定码率和延迟以及业务特点下，你的硬件和软件环境所能支持的并发数。
  > 1. SRS也提供了官方的并发数据，具体可以参考 [Performance](https://github.com/ossrs/srs/blob/4.0release/trunk/doc/PERFORMANCE.md#performance) ，还给出了如何测量这些并发，以及什么条件下的数据，还有具体的优化代码。
  > 1. 如果是需要查性能问题，或者内存泄漏，或者野指针问题，必须使用系统的相关工具，比如perf、valgrind或者gperftools等工具，具体请参考 [SRS性能(CPU)、内存优化工具用法](https://www.jianshu.com/p/6d4a89359352) 或者 [Perf](/docs/v4/doc/perf) 。
  > 1. 特别强调，valgrid从SRS 3.0(含)开始已经支持，ST的patch已经打上了。

<a name='features'></a>

### [Features](#features)
* 关于支持的功能，过时的功能，以及计划？
  > 1. 每个版本支持的功能不一样，在Github首页会给出来支持的功能，比如[develop/5.0](https://github.com/ossrs/srs/blob/develop/trunk/doc/Features.md#features), [release/4.0](https://github.com/ossrs/srs/blob/4.0release/trunk/doc/Features.md#features), [release/3.0](https://github.com/ossrs/srs/tree/3.0release#features)。
  > 1. 每个版本的变更也不相同，在Github首页也会给出来具体的变更，比如[develop/5.0](https://github.com/ossrs/srs/blob/develop/trunk/doc/CHANGELOG.md#changelog), [release/4.0](https://github.com/ossrs/srs/blob/4.0release/trunk/doc/CHANGELOG.md#changelog), [release/3.0](https://github.com/ossrs/srs/tree/3.0release#v3-changes)。
  > 1. 除了新增功能，SRS还会删除不合适的功能，比如RTSP推流，比如srs-librtmp，比如GB的SIP信令等等，这些功能有可能是没有用，有可能是因为不合适，也有可能是以更加合适的方式提供，参考 [#1535](https://github.com/ossrs/srs/issues/1535)

<a name='help'></a>

### [Help](#help)
* 微信群问问题没人回答？社区提问的艺术？
  > 1. 一般如果是不看文档随便问的小白问题，肯定没人回答。如果是自己倒腾了几天还弄不出来，那一般会有人回答的。
  > 1. **为什么大家不回答小白问题？这就好比是四肢健全的青年人，头脑看起来也正常，穿戴整齐，在公共场所讨钱**，你们会给么？这就是为什么在群里问小白问题没人回的原因吧。而且SRS还有直播答疑，欢迎青年们来直播间问，不设门槛，有问必答，集中给钱，不香么？

## Deleting

如果不符合要求的Issue，一般会打标为Deleting，会在一两周后删除，并回复：

```
这个问题在[Wiki](https://ossrs.net/lts/zh-cn/docs/v4/doc/introduction)中有，请看文档。该Issue会被删除，请先阅读FAQ：#2716
```

```
咨询和讨论请来[视频号直播间](https://ossrs.net/lts/zh-cn/docs/v4/doc/contact)交流。也可以[加微信群](https://ossrs.net/lts/zh-cn/docs/v4/doc/contact)，在群里交流。
该Issue会被删除，请先阅读FAQ：#2716
```

```
你的问题不符合Issue的要求，请按Issue模版提Bug，不提供**完整**信息的Issue会被直接删除。
该Issue会被删除，请先阅读FAQ：#2716
```

```
你的问题已经在FAQ中存在，该Issue会被删除，请在FAQ中搜索。#2716
```

```
你的问题已经在Issues中存在，属于重复的问题，该Issue会被删除，请在Issues中搜索。#2716
```

```
这个问题不是SRS问题，是FFmpeg、WebRTC、客户端、OBS、反向代理Nginx、流的内容、编译工具问题，该Issue会被删除。#2716
```

```
GB已经放到独立的仓库 [srs-gb28181](https://github.com/ossrs/srs-gb28181)， 请参考 #2845
问题请提交到GB的仓库[bug](https://github.com/ossrs/srs-gb28181/issues)，或者[pr](https://github.com/ossrs/srs-gb28181/pulls)

由于265主要在GB中使用，所以265分支也迁移到了 [srs-gb28181](https://github.com/ossrs/srs-gb28181/tree/feature/h265)

云SRS的问题，请提交到[srs-cloud](https://github.com/ossrs/srs-cloud)

该Issue会被删除，请先阅读FAQ：#2716
```

