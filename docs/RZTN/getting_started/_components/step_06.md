## Step 6: Run RZ Linux BSP Plus

### 1. Setup EVK's DIP switch to Normal Boot

In this case use **xSPI boot** and SD card.

=== "RZ/T2H"

    Set up jumper and DIP switch SW14 as follows.

    * CN77

        !!! content-wrapper no-indent table-no-sort table-no-hover ""

            ![](images/rzt2h-board-CN77_SD.png){ align=left .switch-icon }

    * SW14

        !!! content-wrapper no-indent table-no-sort table-no-hover ""


            |     SW14-1     |     SW14-2     |     SW14-3     |     SW14-4     |     SW14-5     |     SW14-6     |     SW14-7     |     SW14-8     |
            |:--------------:|:--------------:|:--------------:|:--------------:|:--------------:|:--------------:|:--------------:|:--------------:|
            | ON {: .green } | ON {: .green } | ON {: .green } |  OFF {: .red}  |  OFF {: .red}  |  OFF {: .red}  | ON {: .green } |  OFF {: .red}  |

    !!! note

        For eMMC and/or eSD Boot, please refer to [Appendix](../appendix/index.md).

=== "RZ/N2H"

    Set up jumper and DIP switch SW14 as follows.

    * JP23

        !!! content-wrapper no-indent table-no-sort table-no-hover ""

            ![](images/rzn2h-board-JP23_eMMC.png){ align=left .switch-icon }

    * DSW3

        !!! content-wrapper no-indent table-no-sort table-no-hover ""


            |     DSW3-1     |     DSW3-2     |     DSW3-3     |     DSW3-4     |     DSW3-5     |     DSW3-6     |     DSW3-7     |     DSW3-8     |
            |:--------------:|:--------------:|:--------------:|:--------------:|:--------------:|:--------------:|:--------------:|:--------------:|
            | ON {: .green } | ON {: .green } | ON {: .green } |  OFF {: .red}  |  OFF {: .red}  |  OFF {: .red}  | ON {: .green } |  OFF {: .red}  |

    !!! note

        For eMMC and/or eSD Boot, please refer to [Appendix](../appendix/index.md).

### 2. Turn on EVK and start Linux BSP Plus

=== "RZ/T2H"

    1.  Insert the bootable SD card created at [Step 4](#step-4-build-renesas-rz-linux-bsp-plus-source-code) into the microSD card slot on board as illustrated in the figure at ["1. Setup EVK's peripheral"](#1-setup-evks-peripheral).
    2.  Connect a USB cable to the connector for power supply.
    3.  Press and hold power button for 1 second to turn on the EVK.

        !!! note
            Press and hold the button for 2 seconds when you turn off the EVK.

=== "RZ/N2H"

    1.  Insert the bootable SD card created at [Step 4](#step-4-build-renesas-rz-linux-bsp-plus-source-code) into the microSD card slot on board as illustrated in the figure at ["1. Setup EVK's peripheral"](#1-setup-evks-peripheral).
    2.  Connect a USB cable to the connector for power supply.
    3.  Press and hold power button for 1 second to turn on the EVK.

        !!! note
            Press and hold the button for 2 seconds when you turn off the EVK.
