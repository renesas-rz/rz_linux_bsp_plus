## Step 6: Run RZ Linux BSP Plus

### 1. Setup EVK's DIP switch to Normal Boot

In this case use **xSPI boot** and SD card.

=== "RZ/T2H"

    Set up jumper and DIP switch SW14 as follows.

    * CN77

        !!! content-wrapper no-indent table-no-sort table-no-hover ""

            ![](images/evk-rzt2h/CN77_SD.png){ align=left .switch-icon }

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

            ![](images/evk-rzn2h/JP23_eMMC.png){ align=left .switch-icon }

    * DSW3

        !!! content-wrapper no-indent table-no-sort table-no-hover ""

            |     DSW3-1     |     DSW3-2     |     DSW3-3     |     DSW3-4     |     DSW3-5     |     DSW3-6     |     DSW3-7     |     DSW3-8     |
            |:--------------:|:--------------:|:--------------:|:--------------:|:--------------:|:--------------:|:--------------:|:--------------:|
            | ON {: .green } | ON {: .green } | ON {: .green } |  OFF {: .red}  |  OFF {: .red}  |  OFF {: .red}  | ON {: .green } |  OFF {: .red}  |

    !!! note

        For eMMC and/or eSD Boot, please refer to [Appendix](../appendix/index.md).

=== "RZ/T2N"

    Set up jumper and DIP switch as follows.

    * microSD Card (JP25)

        !!! content-wrapper no-indent table-no-sort table-no-hover ""

            ![](images/evk-rzt2n/J25_microSD.png){ align=left .switch-icon }  

            |      J25 1-2      |      J25 3-4      |
            |:-----------------:|:-----------------:|
            |   OPEN {: .red}   |  SHORT {: .green} |

    * SW7

        !!! content-wrapper no-indent table-no-sort table-no-hover ""

            |      SW7-1     |
            |:--------------:|
            | ON {: .green}  |


    * MODE(BOOT) SW8

        !!! content-wrapper no-indent table-no-sort table-no-hover ""

            |      SW8-1     |      SW8-2     |      SW8-3     |      SW8-4     |
            |:--------------:|:--------------:|:--------------:|:--------------:|
            | ON {: .green } | ON {: .green } | ON {: .green } |  OFF {: .red}  | 

    !!! note

        For eMMC and/or eSD Boot, please refer to [Appendix](../appendix/index.md).


### 2. Turn on EVK and start Linux BSP Plus

=== "RZ/T2H"

    1.  Insert the bootable SD card created at [Step 4](#step-4-deploy-renesas-rz-linux-bsp-plus) into the microSD card slot on board as illustrated in the figure at ["1. Setup EVK's peripheral"](#1-setup-evks-peripheral).
    2.  Connect a USB cable to the connector for power supply.
    3.  Power on the board and Linux will boot.

=== "RZ/N2H"

    1.  Insert the bootable SD card created at [Step 4](#step-4-deploy-renesas-rz-linux-bsp-plus) into the microSD card slot on board as illustrated in the figure at ["1. Setup EVK's peripheral"](#1-setup-evks-peripheral).
    2.  Connect a USB cable to the connector for power supply.
    3.  Power on the board and Linux will boot.

=== "RZ/T2N"

    1.  Insert the bootable SD card created at [Step 4](#step-4-deploy-renesas-rz-linux-bsp-plus) into the microSD card slot on board as illustrated in the figure at ["1. Setup EVK's peripheral"](#1-setup-evks-peripheral).
    2.  Connect a USB cable to the connector for power supply.
    3.  Power on the board and Linux will boot.

        !!! note
            RZ Linux BSP Plus provides the following documentation. Please refer to the documents below for details.

            * **[BSP Manual Set](https://www.renesas.com/document/swo/bsp-manual-set-rzt2h-rzn2h-and-rzt2n-group){: target=_blank }**

                BSP Manual Set is a software manual that describes the function and interface specifications of driver module. Please refer to it when controlling hardware in each product.
