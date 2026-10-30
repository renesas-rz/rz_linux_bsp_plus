## How to boot from eMMC

In this section, the steps to boot from eMMC are described.

### Writing Bootloader for eMMC Boot

For the boot operation, `#!bash EXT_CSD` register of eMMC need to be modified and two boot loader files need to be written to the target board. Modifying register address and value information are described in the following table.

After booting the Flash Programmer,Then, `#!bash EMMCW` command of Flash Programmer is used to write boot loader binary files. This command receives binary data from the serial port and writes the data to a specified address of the eMMC with information where the data should be loaded on the address of the main memory.

=== "RZ/T2H"

    Then, set the SW2-1 and SW2-2 to ON to enable eMMC.

    !!! content-wrapper no-indent table-no-sort table-no-hover ""

        |      SW2-1     |      SW2-2     |
        |:--------------:|:--------------:|
        | ON {: .green } | ON {: .green } |

    And change CN78 on the module as follow.

    !!! content-wrapper no-indent table-no-sort table-no-hover ""

        ![](./../getting_started/images/evk-rzt2h/CN78_eMMC.png){ align=left .switch-icon }

        {% include "./../_tables/cn78-emmc.html" %}

    For example, this part describes how to modify `#!bash EXT_CSD` register and write boot loader files:

    ``` console
    USB Download mode (Normal USB boot)
    -- Load Program to RAM ---------------
    -- Start Boot Program on RAM ---------
    Flash Programmer V1.04 (RZT2H)(CR52)
    > EMMCWECSD 0xb3 0x9
    EXT_CSD[179] = 0x9
    ```

    Write the bootloader file by using `#!bash EMMCW` command.

    ``` console
    > EMMCW 0x1 0x0
    send file
    ```

    Send the data of `#!bash bl2_bp_emmc-rzt2h-dev.srec` from terminal software after the message **send file** is shown.

    After successfully downloading the binary, messages like below are shown on the terminal.

    ``` console
    EMMCW Complete!
    ```

    Next, write another bootloader file by using `#!bash EMMCW` command again.

    ``` console
    > EMMCW 0x300 0x0
    send file
    ```

    Send the data of `#!bash fip-rzt2h-dev.srec` from terminal software after the message **send file** is shown.

    After successfully downloading the binary, messages like below are shown on the terminal.

    ``` console
    EMMCW Complete!
    ```

    Then modify EXT_CSD register by running `#!bash EMMCWECSD` and `#!bash EMMCW` commands.

    ``` console
    > EMMCWECSD 0xb3 0x8
    EXT_CSD[179] = 0x8
    > EMMCWECSD 0xb1 0x2
    EXT_CSD[177] = 0x2
    ```    

    After writing two loader files normally, turn off the power switch of the board.

    !!! note
        - Address of `#!bash EXT_CSD` register of eMMC for eMMC boot

            !!! content-wrapper no-indent table-no-sort table-no-hover ""

                |    Address     | Value to write|
                |:--------------:|:-------------:|
                | `#!bash 0xB1`  | `#!bash 0x02` |
                | `#!bash 0xB3`  | `#!bash 0x08` |

=== "RZ/N2H"

    Then, set the DSW5-1 and DSW5-2 to ON to enable eMMC.

    !!! content-wrapper no-indent table-no-sort table-no-hover ""

        |     DSW5-1     |     DSW5-2     |
        |:--------------:|:--------------:|
        | ON {: .green } | ON {: .green } |

    And change JP23 on the module as follow.

    !!! content-wrapper no-indent table-no-sort table-no-hover ""

        ![](./../getting_started/images/evk-rzn2h/JP23_eMMC.png){ align=left .switch-icon }

        {% include "./../_tables/jp23-emmc.html" %}

    For example, this part describes how to modify `#!bash EXT_CSD` register and write boot loader files:

    ``` console
    USB Download mode (Normal USB boot)
    -- Load Program to RAM ---------------
    -- Start Boot Program on RAM ---------
    Flash Programmer V1.04 (RZT2H)(CR52)
    > EMMCWECSD 0xb3 0x9
    EXT_CSD[179] = 0x9
    ```

    Write the bootloader file by using `#!bash EMMCW` command.

    ``` console
    > EMMCW 0x1 0x0
    send file
    ```

    Send the data of `#!bash bl2_bp_emmc-rzn2h-dev.srec` from terminal software after the message **send file** is shown.

    After successfully downloading the binary, messages like below are shown on the terminal.

    ``` console
    EMMCW Complete!
    ```

    Next, write another bootloader file by using `#!bash EMMCW` command again.

    ``` console
    > EMMCW 0x300 0x0
    send file
    ```

    Send the data of `#!bash fip-rzn2h-dev.srec` from terminal software after the message **send file** is shown.

    After successfully downloading the binary, messages like below are shown on the terminal.

    ``` console
    EMMCW Complete!
    ```

    Then modify EXT_CSD register by running `#!bash EMMCWECSD` and `#!bash EMMCW` commands.

    ``` console
    > EMMCWECSD 0xb3 0x8
    EXT_CSD[179] = 0x8
    > EMMCWECSD 0xb1 0x2
    EXT_CSD[177] = 0x2
    ```    

    After writing two loader files normally, turn off the power switch of the board.

    !!! note
        - Address of `#!bash EXT_CSD` register of eMMC for eMMC boot

            !!! content-wrapper no-indent table-no-sort table-no-hover ""

                |    Address     | Value to write|
                |:--------------:|:-------------:|
                | `#!bash 0xB1`  | `#!bash 0x02` |
                | `#!bash 0xB3`  | `#!bash 0x08` |  

=== "RZ/T2N"

    Then, set the SW7-7 and SW7-8 to ON to enable eMMC.

    !!! content-wrapper no-indent table-no-sort table-no-hover ""

        |      SW7-7     |      SW7-8     |
        |:--------------:|:--------------:|
        | ON {: .green } | ON {: .green } |

    And change J39 on the module as follow.

    !!! content-wrapper no-indent table-no-sort table-no-hover ""

        ![](./../getting_started/images/evk-rzt2n/J39_eMMC.png){ align=left .switch-icon }

        |       J39-3       |       J39-2       |        J39-1       |
        |:-----------------:|:-----------------:|:------------------:|
        |   OPEN {: .red}   | CLOSED {: .green} | CLOSED {: .green } |

    For example, this part describes how to modify `#!bash EXT_CSD` register and write boot loader files:

    ``` console
    USB Download mode (Normal USB boot)
    -- Load Program to RAM ---------------
    -- Start Boot Program on RAM ---------
    Flash Programmer V1.20 (RZT2N)(CR52)
    
    > EMMCWECSD 0xb3 0x9
    EXT_CSD[179] = 0x9
    ```

    Write the bootloader file by using `#!bash EMMCW` command.

    ``` console
    > EMMCW 0x1 0x0
    send file
    ```

    Send the data of `#!bash bl2_bp_emmc-rzt2n-dev.srec` from terminal software after the message **send file** is shown.

    After successfully downloading the binary, messages like below are shown on the terminal.

    ``` console
    EMMCW Complete!
    ```

    Next, write another bootloader file by using `#!bash EMMCW` command again.

    ``` console
    > EMMCW 0x300 0x0
    send file
    ```

    Send the data of `#!bash fip-rzt2n-dev.srec` from terminal software after the message **send file** is shown.

    After successfully downloading the binary, messages like below are shown on the terminal.

    ``` console
    EMMCW Complete!
    ```

    Then modify EXT_CSD register by running `#!bash EMMCWECSD` and `#!bash EMMCW` commands.

    ``` console
    > EMMCWECSD 0xb3 0x8
    EXT_CSD[179] = 0x8
    > EMMCWECSD 0xb1 0x2
    EXT_CSD[177] = 0x2
    ```    

    After writing two loader files normally, turn off the power switch of the board.

    !!! note
        - Address of `#!bash EXT_CSD` register of eMMC for eMMC boot

            !!! content-wrapper no-indent table-no-sort table-no-hover ""

                |    Address     | Value to write|
                |:--------------:|:-------------:|
                | `#!bash 0xB1`  | `#!bash 0x02` |
                | `#!bash 0xB3`  | `#!bash 0x08` |

### Create a microSD card for writing Linux image to eMMC
Please create a microSD card (see [Step 4: Deploy Renesas RZ Linux BSP Plus](../getting_started/index.md#step-4-deploy-renesas-rz-linux-bsp-plus)).

After that, please return to the following instructions before unmounting the micro SD card.

Copy the kernel image, device tree file, and rootfs to the second partition of the microSD card.

=== "RZ/T2H"

    ```bash
    cd /media/user/rootfs/root/
    sudo cp ${WORK}/build/tmp/deploy/images/rzt2h-dev/core-image-minimal-rzt2h-dev.rootfs.wic.gz ./
    sudo cp ${WORK}/build/tmp/deploy/images/rzt2h-dev/core-image-minimal-rzt2h-dev.rootfs.wic.bmap ./
    cd ${WORK}
    sudo umount /media/user/rootfs
    ```
    {: .dollar }

=== "RZ/N2H"

    ```bash
    cd /media/user/rootfs/root/
    sudo cp ${WORK}/build/tmp/deploy/images/rzn2h-dev/core-image-minimal-rzn2h-dev.rootfs.wic.gz ./
    sudo cp ${WORK}/build/tmp/deploy/images/rzn2h-dev/core-image-minimal-rzn2h-dev.rootfs.wic.bmap ./
    cd ${WORK}
    sudo umount /media/user/rootfs
    ```
    {: .dollar }

=== "RZ/T2N"

    ```bash
    cd /media/user/rootfs/root/
    sudo cp ${WORK}/build/tmp/deploy/images/rzt2n-dev/core-image-minimal-rzt2n-dev.rootfs.wic.gz ./
    sudo cp ${WORK}/build/tmp/deploy/images/rzt2n-dev/core-image-minimal-rzt2n-dev.rootfs.wic.bmap ./
    cd ${WORK}
    sudo umount /media/user/rootfs
    ```
    {: .dollar }

### Writing rootfs to eMMC

=== "RZ/T2H"

    Insert the micro SD card and turn on the board. after linux boots, please log in as root and create partitions on the emmc by running the following commands.

    ``` console
    root@rzt2h-dev:~# bmaptool copy core-image-minimal-rzt2h-dev.rootfs.wic.gz /dev/mmcblk0
    ```

=== "RZ/N2H"

    Insert the micro SD card and turn on the board. after linux boots, please log in as root and create partitions on the emmc by running the following commands.

    ``` console
    root@rzn2h-dev:~# bmaptool copy core-image-minimal-rzn2h-dev.rootfs.wic.gz /dev/mmcblk0
    ```

=== "RZ/T2N"

    Insert the micro SD card and turn on the board. after linux boots, please log in as root and create partitions on the emmc by running the following commands.

    ``` console
    root@rzt2n-dev:~# bmaptool copy core-image-minimal-rzt2n-dev.rootfs.wic.gz /dev/mmcblk0
    ```

### Set eMMC Boot mode

=== "RZ/T2H"

    To set the board to eMMC Boot mode, set the SW14 as below:

    !!! content-wrapper no-indent table-no-sort table-no-hover ""

        |     SW14-1     |     SW14-2     |     SW14-3     |     SW14-4     |     SW14-5     |     SW14-6     |     SW14-7     |     SW14-8     |
        |:--------------:|:--------------:|:--------------:|:--------------:|:--------------:|:--------------:|:--------------:|:--------------:|
        | ON {: .green } | ON {: .green } |  OFF {: .red}  |  OFF {: .red}  |  OFF {: .red}  | ON {: .green } | ON {: .green } |  OFF {: .red}  |

    Reset the board and interrupt the boot process by pressing the ++enter++ key.

    ``` console
    U-Boot 2024.07 (Jul 01 2024 - 18:07:18 +0000)
    CPU: Renesas Electronics RZ/T2H
    Model: Renesas Development EVK based on r9a09g077
    DRAM: 960 MiB (effective 1.9 GiB)
    Core: 18 devices, 11 uclasses, devicetree: separate
    MMC: mmc@92080000: 0, mmc@92090000: 1
    Loading Environment from MMC... Reading from MMC(0)….OK
    *** Warning - No block device, using default environment
    In: serial@80005400
    Out: serial@80005400
    Err: serial@80005400
    Net: No ethernet found.
    Hit any key to stop autoboot: 0
    =>
    ```

=== "RZ/N2H"

    To set the board to eMMC Boot mode, set the DSW3 as below:

    !!! content-wrapper no-indent table-no-sort table-no-hover ""

        |     DSW3-1     |     DSW3-2     |     DSW3-3     |     DSW3-4     |     DSW3-5     |     DSW3-6     |     DSW3-7     |     DSW3-8     |
        |:--------------:|:--------------:|:--------------:|:--------------:|:--------------:|:--------------:|:--------------:|:--------------:|
        | ON {: .green } | ON {: .green } |  OFF {: .red}  |  OFF {: .red}  |  OFF {: .red}  | ON {: .green } | ON {: .green } |  OFF {: .red}  |

    Reset the board and interrupt the boot process by pressing the ++enter++ key.

    ``` console
    U-Boot 2024.07 (Jul 01 2024 - 18:07:18 +0000)
    CPU: Renesas Electronics RZ/N2H
    Model: Renesas Development EVK based on r9a09g077
    DRAM: 960 MiB (effective 1.9 GiB)
    Core: 18 devices, 11 uclasses, devicetree: separate
    MMC: mmc@92080000: 0, mmc@92090000: 1
    Loading Environment from MMC... Reading from MMC(0)….OK
    *** Warning - No block device, using default environment
    In: serial@80005400
    Out: serial@80005400
    Err: serial@80005400
    Net: No ethernet found.
    Hit any key to stop autoboot: 0
    =>
    ```

=== "RZ/T2N"

    To set the board to eMMC Boot mode, set the SW8 as below:

    !!! content-wrapper no-indent table-no-sort table-no-hover ""

        |      SW8-1     |      SW8-2     |      SW8-3     |      SW8-4     |
        |:--------------:|:--------------:|:--------------:|:--------------:|
        | ON {: .green}  | ON {: .green}  | OFF {: .red }  |  OFF {: .red}  |

    Reset the board and interrupt the boot process by pressing the ++enter++ key.

    ``` console
    U-Boot 2024.07 (Jul 28 2026 - 13:24:55 +0000)

    CPU: Renesas Electronics RZ/T2N R9A07G076M48GBG
    Model: Renesas Development EVK based on r9a07g076
    DRAM:  896 MiB (effective 1.6 GiB)
    Core:  58 devices, 20 uclasses, devicetree: separate
    MMC:   mmc@92080000: 0, mmc@92090000: 1
    Loading Environment from SPIFlash...
    OK
    In:    serial@80005400
    Out:   serial@80005400
    Err:   serial@80005400
    Net:
    Warning: ethernet@92000000 (eth0) using random MAC address - 26:dc:bc:f9:3c:64
    eth0: ethernet@92000000Get shared mii bus on ethernet@92010000

    Warning: ethernet@92010000 (eth1) using random MAC address - b6:97:aa:d2:ca:49
    , eth1: ethernet@92010000
    Hit any key to stop autoboot:  0
    =>
    ```

Please reset the board again for eMMC boot.
