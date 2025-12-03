## GStreamer

In BSP Plus for Renesas RZ Family MPUs,
we support GStreamer in the same way as in Renesas VLP and/or SDK.

Here, we also support Renesas' own elements, such as `vspmfilter`.

### Supported (Verified) OSS and Renesas Elements

| Plugin Category | Element Name | Package | Description |
| --------------- | ------------ | ------- | ----------- |
| Video Decode | `omxh264dec` | `gst-omx` | OpenMAX H.264 Video Decoder |
| Video Conversion | `vspmfilter` | `gst-plugin-vspmfilter` | This is a GStreamer plugin that can use the color conversion and scaling with the hardware acceleration on Renesas RZ Family MPUs |
| Video Sink | `waylandsink` | `gst-plugins-bad` | The waylandsink is creating its own window and renders the decoded video frames to that |
| Demux | `qtdemux` | `gst-plugins-good` | Demuxes a .mov/mp4 file into raw or compressed audio and/or video streams |

### Example Pipeline

!!! note "Note"

    All videos used here are open and accessible from the [Renesas media repository](https://github.com/renesas-rz/media){: target=_blank }.

#### Video Playback

In this example, we play the [sintel_trailer-720p.mp4](https://download.blender.org/durian/trailer/sintel_trailer-720p.mp4){: target=_blank } (H.264 MP4 video) and display (video portion only) using `waylandsink`.

To play H.264 MP4 files, it is necessary to demux the file with `qtdemux` and decode the decoded video stream with `omxh264dec`.

``` bash
gst-launch-1.0 filesrc location=sintel_trailer-720p.mp4 ! qtdemux ! h264parse ! omxh264dec ! waylandsink
```
{: .hash }

#### Video Playback with Color Conversion and Resizing

Using `vspmfilter` to perform color conversion and resizing with Video Signal Processor (VSP; Renesas HW accelerator).

!!! note "Note"

    Due to HW specification, `vspmfilter` for RZ/G2L only support downscaling (decreasing).

``` bash
gst-launch-1.0 filesrc location=sintel_trailer-720p.mp4 ! qtdemux ! h264parse ! omxh264dec ! vspmfilter dmabuf-use=true ! video/x-raw, format=BGRA, width=640, height=480 ! waylandsink
```
{: .hash .wrap }

### Further Reading

For more information, please refer to GStreamer User's Manual mentioned in the table below.

{% include "./../_tables/gstreamer_table.html" %}

Please confirm using the same GStreamer Version as supported in the Renesas VLP and/or SDK target.

!!! note "Note"

    If you cannot find the same GStreamer Version,
    please refer to the nearest older revision of supported GStreamer.
