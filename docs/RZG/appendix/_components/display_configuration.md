## Display Configuration

This function is only available for RZ/G3L Group.

RZ/G3L supports 3 types of display interfaces, MIPI-DSI, Digital Parallel Interface and Low-Voltage Differential Signaling (LVDS).
But due to hardware, only 1 type of display interface can be enabled at the same time.
By default, MIPI-DSI is enabled on RZ/G3L.

To switch/enable/disable these, please modify in device tree `r9a08g046l48-smarc.dts` and EVK SW based on below tables.

!!! content-wrapper no-indent table-no-sort md-supportlist ""

    {{ read_csv('docs/RZG/appendix/_tables/g3l_sw_display.csv') }}

!!! content-wrapper no-indent table-no-sort md-supportlist ""

    {{ read_csv('docs/RZG/appendix/_tables/g3l_macro_display.csv') }}

!!! note
    The RZ/G3L-EVKit requires the appropriate display connector sub-board to support the desired display interface.

    For more details, please see the "Display Interfaces" section described in [RZ/G3L SMARC Module Board Manual](https://www.renesas.com/document/mat/rzg3l-smarc-module-board-evaluation-board-manual){: target=_blank }.
