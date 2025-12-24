## How to boot from eMMC

In this section, the steps to boot from eMMC are described.

### Writing Bootloader for eMMC Boot

For the boot operation, `#!bash EXT_CSD` register of eMMC need to be modified and two boot loader files need to be written to the target board. Modifying register address and value information are described in the following table. 

After booting the Flash Programmer,Then, `#!bash EMMCW` command of Flash Programmer is used to write boot loader binary files. This command receives binary data from the serial port and writes the data to a specified address of the eMMC with information where the data should be loaded on the address of the main memory.

=== "RZ/T2H"

    For example, this part describes how to modify `#!bash EXT_CSD` register and write boot loader files:

    ``` console
    USB Download mode (Normal USB boot)
    -- Load Program to RAM ---------------
    -- Start Boot Program on RAM ---------
    Flash Programmer V1.06 (RZT2N)(CR52)
    > EMMCWECSD 0xb3 0x9
    EXT_CSD[179] = 0x9
    > EMMCW 0x1 0x0
    send file
    ```

    Send the data of `#!bash bl2_bp_emmc-rzt2h-dev.srec` from terminal software after the message **send file** is shown.

    After successfully downloading the binary, messages like below are shown on the terminal.

    ``` console
    EMMCW Complete!
    ```

    Next, write another loader file by using `#!bash EMMCW` command again.

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
    >
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

    For example, this part describes how to modify `#!bash EXT_CSD` register and write boot loader files:

    ``` console
    USB Download mode (Normal USB boot)
    -- Load Program to RAM ---------------
    -- Start Boot Program on RAM ---------
    Flash Programmer V1.06 (RZT2N)(CR52)
    > EMMCWECSD 0xb3 0x9
    EXT_CSD[179] = 0x9
    > EMMCW 0x1 0x0
    send file
    ```

    Send the data of `#!bash bl2_bp_emmc-rzn2h-dev.srec` from terminal software after the message **send file** is shown.

    After successfully downloading the binary, messages like below are shown on the terminal.

    ``` console
    EMMCW Complete!
    ```

    Next, write another loader file by using `#!bash EMMCW` command again.

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
    >
    ```    

    After writing two loader files normally, turn off the power switch of the board.

    !!! note
        - Address of `#!bash EXT_CSD` register of eMMC for eMMC boot

            !!! content-wrapper no-indent table-no-sort table-no-hover ""

                |    Address     | Value to write|
                |:--------------:|:-------------:|
                | `#!bash 0xB1`  | `#!bash 0x02` |
                | `#!bash 0xB3`  | `#!bash 0x08` |  

### Create a microSD card to boot Linux for eMMC boot
Please create a microSD card (see [Step 4: Deploy Renesas RZ Linux BSP Plus](../getting_started/index.md#step-4-deploy-renesas-rz-linux-bsp-plus)).

### Set eMMC Boot mode

=== "RZ/T2H"

    Set the CN78 to eMMC mode.

    !!! content-wrapper no-indent table-no-sort table-no-hover ""

        ![](images/rzt2h-board-CN78_eMMC.png){ align=left .switch-icon }

    To set the board to eMMC Boot mode, set the SW14 as below:

    !!! content-wrapper no-indent table-no-sort table-no-hover ""


        |     SW14-1     |     SW14-2     |     SW14-3     |     SW14-4     |     SW14-5     |     SW14-6     |     SW14-7     |     SW14-8     |
        |:--------------:|:--------------:|:--------------:|:--------------:|:--------------:|:--------------:|:--------------:|:--------------:|
        | ON {: .green } | ON {: .green } |  OFF {: .red}  |  OFF {: .red}  |  OFF {: .red}  | ON {: .green } | ON {: .green } |  OFF {: .red}  |

    Reset the board and interrupt the boot process by pressing the Enter key.

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

    Set the JP23 to eMMC mode.

    !!! content-wrapper no-indent table-no-sort table-no-hover ""

        ![](images/rzn2h-board-JP23_eMMC.png){ align=left .switch-icon }

    To set the board to eMMC Boot mode, set the DSW3 as below:

    !!! content-wrapper no-indent table-no-sort table-no-hover ""


        |     DSW3-1     |     DSW3-2     |     DSW3-3     |     DSW3-4     |     DSW3-5     |     DSW3-6     |     DSW3-7     |     DSW3-8     |
        |:--------------:|:--------------:|:--------------:|:--------------:|:--------------:|:--------------:|:--------------:|:--------------:|
        | ON {: .green } | ON {: .green } |  OFF {: .red}  |  OFF {: .red}  |  OFF {: .red}  | ON {: .green } | ON {: .green } |  OFF {: .red}  |

    Reset the board and interrupt the boot process by pressing the Enter key.

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
