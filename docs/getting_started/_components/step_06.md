## Step 6: Run RZ Linux BSP Plus

### 1. Setup EVK's DIP switch to Normal Boot

In this case use **QSPI boot** and SD card.

=== "RZ/G2L"

    Set up DIP switch SW1 and SW11 as follows.

    * SW1

        !!! content-wrapper no-indent table-no-sort table-no-hover ""

            ![](images/smarc-rzg2l-board-SW1.png){ align=left .switch-icon }

            |      SW1-1     |      SW1-2     |
            |:--------------:|:--------------:|
            | ON {: .green } | ON {: .green } |

    * SW11

        !!! content-wrapper no-indent table-no-sort table-no-hover ""

            ![](){ align=left .switch-icon }

            |     SW11-1     |     SW11-2     |     SW11-3     |     SW11-4     |
            |:--------------:|:--------------:|:--------------:|:--------------:|
            |  OFF {: .red}  |  OFF {: .red}  |  OFF {: .red}  | ON {: .green } |

!!! note

    For eMMC and/or eSD Boot, please refer to [Appendix](../appendix/index.md).

### 2. Turn on EVK and start Linux BSP Plus

=== "RZ/G2L"

    1.  Insert the bootable SD card created at [Step 4](#step-4-build-renesas-rz-linux-bsp-plus-source-code) into the microSD card slot on SMARC module board as illustrated in the figure at ["1. Setup EVK's peripheral"](#1-setup-evks-peripheral).
    2.  Connect a USB cable to CN6 for power supply.
    3.  Press and hold power button (SW9) for 1 second to turn on the EVK.

        !!! note
            Press and hold the button for 2 seconds when you turn off the EVK.
