## How to boot from eSD

This section explains how to boot Linux from eSD mode.

### Create a microSD card to boot Linux for eSD boot

=== "RZ/T2H"
    Prepare the micro SD card using the `#!bash wic` image file.

    Please create a microSD card (see [Step 4: Deploy Renesas RZ Linux BSP Plus](../getting_started/index.md#step-4-deploy-renesas-rz-linux-bsp-plus)).

    - File and directory in the micro SD card

        !!! content-wrapper no-indent table-no-sort table-no-hover ""

            +-------------+------------+-----------------------------------------------------------------+
            | Type/Number | Filesystem | Contents                                                        |
            +=============+============+=================================================================+
            | Primary #1  | FAT32      | * `#!bash bl2_bp_emmc-rzt2h-dev.bin`                            |
            |             |            | * `#!bash bl2_bp_emmc-rzt2h-dev.srec`                           |
            |             |            | * `#!bash bl2_bp_esd-rzt2h-dev.bin`                             |
            |             |            | * `#!bash bl2_bp_esd-rzt2h-dev.srec`                            |
            |             |            | * `#!bash bl2_bp_xspi0-rzt2h-dev.bin`                           |
            |             |            | * `#!bash bl2_bp_xspi0-rzt2h-dev.srec`                          |
            |             |            | * `#!bash bl2_bp_xspi1-rzt2h-dev.bin`                           |
            |             |            | * `#!bash bl2_bp_xspi1-rzt2h-dev.srec`                          |
            |             |            | * `#!bash fip-rzt2h-dev.bin`                                    |
            |             |            | * `#!bash fip-rzt2h-dev.srec`                                   |
            +-------------+------------+-----------------------------------------------------------------+
            |             |            | &nbsp;                                                          |
            |             |            |                                                                 |
            | Primary #2  | Ext4       |     ./                                                          |
            |             |            |     ├── bin                                                     |
            |             |            |     ├── boot                                                    |
            |             |            |     │   ├── Image                                               |
            |             |            |     │   ├── Image-6.12.43-cip7-yocto-standard-ga91d362c6626     |
            |             |            |     │   └── r9a09g077m44-dev.dtb                                |
            |             |            |     ├── dev                                                     |
            |             |            |     ├── etc                                                     |
            |             |            |     ├── home                                                    |
            |             |            |     ├── lib                                                     |
            |             |            |     ├── media                                                   |
            |             |            |     ├── mnt                                                     |
            |             |            |     ├── proc                                                    |
            |             |            |     ├── root                                                    |
            |             |            |     ├── run                                                     |
            |             |            |     ├── sbin                                                    |
            |             |            |     ├── srv                                                     |
            |             |            |     ├── sys                                                     |
            |             |            |     ├── tmp                                                     |
            |             |            |     ├── usr                                                     |
            |             |            |     └── var                                                     |
            |             |            |                                                                 |
            |             |            | &nbsp;                                                          |
            +-------------+------------+-----------------------------------------------------------------+

=== "RZ/N2H"
    Prepare the micro SD card using the `#!bash wic` image file.

    Please create a microSD card (see [Step 4: Deploy Renesas RZ Linux BSP Plus](../getting_started/index.md#step-4-deploy-renesas-rz-linux-bsp-plus)).

    - File and directory in the micro SD card

        !!! content-wrapper no-indent table-no-sort table-no-hover ""

            +-------------+------------+-----------------------------------------------------------------+
            | Type/Number | Filesystem | Contents                                                        |
            +=============+============+=================================================================+
            | Primary #1  | FAT32      | * `#!bash bl2_bp_emmc-rzn2h-dev.bin`                            |
            |             |            | * `#!bash bl2_bp_emmc-rzn2h-dev.srec`                           |
            |             |            | * `#!bash bl2_bp_esd-rzn2h-dev.bin`                             |
            |             |            | * `#!bash bl2_bp_esd-rzn2h-dev.srec`                            |
            |             |            | * `#!bash bl2_bp_xspi0-rzn2h-dev.bin`                           |
            |             |            | * `#!bash bl2_bp_xspi0-rzn2h-dev.srec`                          |
            |             |            | * `#!bash bl2_bp_xspi1-rzn2h-dev.bin`                           |
            |             |            | * `#!bash bl2_bp_xspi1-rzn2h-dev.srec`                          |
            |             |            | * `#!bash fip-rzn2h-dev.bin`                                    |
            |             |            | * `#!bash fip-rzn2h-dev.srec`                                   |
            +-------------+------------+-----------------------------------------------------------------+
            |             |            | &nbsp;                                                          |
            |             |            |                                                                 |
            | Primary #2  | Ext4       |     ./                                                          |
            |             |            |     ├── bin                                                     |
            |             |            |     ├── boot                                                    |
            |             |            |     │   ├── Image                                               |
            |             |            |     │   ├── Image-6.12.43-cip7-yocto-standard-ga91d362c6626     |
            |             |            |     │   └── r9a09g087m44-dev.dtb                                |
            |             |            |     ├── dev                                                     |
            |             |            |     ├── etc                                                     |
            |             |            |     ├── home                                                    |
            |             |            |     ├── lib                                                     |
            |             |            |     ├── media                                                   |
            |             |            |     ├── mnt                                                     |
            |             |            |     ├── proc                                                    |
            |             |            |     ├── root                                                    |
            |             |            |     ├── run                                                     |
            |             |            |     ├── sbin                                                    |
            |             |            |     ├── srv                                                     |
            |             |            |     ├── sys                                                     |
            |             |            |     ├── tmp                                                     |
            |             |            |     ├── usr                                                     |
            |             |            |     └── var                                                     |
            |             |            |                                                                 |
            |             |            | &nbsp;                                                          |
            +-------------+------------+-----------------------------------------------------------------+

=== "RZ/T2N"
    Prepare the micro SD card using the `#!bash wic` image file.

    Please create a microSD card (see [Step 4: Deploy Renesas RZ Linux BSP Plus](../getting_started/index.md#step-4-deploy-renesas-rz-linux-bsp-plus)).

    - File and directory in the micro SD card

        !!! content-wrapper no-indent table-no-sort table-no-hover ""

            +-------------+------------+-----------------------------------------------------------------+
            | Type/Number | Filesystem | Contents                                                        |
            +=============+============+=================================================================+
            | Primary #1  | FAT32      | * `#!bash bl2_bp_emmc-rzt2n-dev.bin`                            |
            |             |            | * `#!bash bl2_bp_emmc-rzt2n-dev.srec`                           |
            |             |            | * `#!bash bl2_bp_esd-rzt2n-dev.bin`                             |
            |             |            | * `#!bash bl2_bp_esd-rzt2n-dev.srec`                            |
            |             |            | * `#!bash bl2_bp_xspi0-rzt2n-dev.bin`                           |
            |             |            | * `#!bash bl2_bp_xspi0-rzt2n-dev.srec`                          |
            |             |            | * `#!bash bl2_bp_xspi1-rzt2n-dev.bin`                           |
            |             |            | * `#!bash bl2_bp_xspi1-rzt2n-dev.srec`                          |
            |             |            | * `#!bash fip-rzt2n-dev.bin`                                    |
            |             |            | * `#!bash fip-rzt2n-dev.srec`                                   |
            +-------------+------------+-----------------------------------------------------------------+
            |             |            | &nbsp;                                                          |
            |             |            |                                                                 |
            | Primary #2  | Ext4       |     ./                                                          |
            |             |            |     ├── bin                                                     |
            |             |            |     ├── boot                                                    |
            |             |            |     │   ├── Image                                               |
            |             |            |     │   ├── Image-6.12.63-cip15-yocto-standard-gc5ec1a096276    |
            |             |            |     │   └── r9a07g076m48-dev.dtb                                |
            |             |            |     ├── dev                                                     |
            |             |            |     ├── etc                                                     |
            |             |            |     ├── home                                                    |
            |             |            |     ├── lib                                                     |
            |             |            |     ├── media                                                   |
            |             |            |     ├── mnt                                                     |
            |             |            |     ├── proc                                                    |
            |             |            |     ├── root                                                    |
            |             |            |     ├── run                                                     |
            |             |            |     ├── sbin                                                    |
            |             |            |     ├── srv                                                     |
            |             |            |     ├── sys                                                     |
            |             |            |     ├── tmp                                                     |
            |             |            |     ├── usr                                                     |
            |             |            |     └── var                                                     |
            |             |            |                                                                 |
            |             |            | &nbsp;                                                          |
            +-------------+------------+-----------------------------------------------------------------+


### Set eSD boot mode

=== "RZ/T2H"

    To set the board to eSD Boot mode, set the SW14 as below:

    !!! content-wrapper no-indent table-no-sort table-no-hover ""

        |     SW14-1     |     SW14-2     |     SW14-3     |     SW14-4     |     SW14-5     |     SW14-6     |     SW14-7     |     SW14-8     |
        |:--------------:|:--------------:|:--------------:|:--------------:|:--------------:|:--------------:|:--------------:|:--------------:|
        |  OFF {: .red}  |  OFF {: .red}  | ON {: .green } |  OFF {: .red}  |  OFF {: .red}  |  OFF {: .red}  | ON {: .green } |  OFF {: .red}  |

    Please insert the micro SD card into the slot.

    ![](./images/Insert-microSD-EVK-for-eSD_T2H.png)

=== "RZ/N2H"

    To set the board to eSD Boot mode, set the DSW3 as below:

    !!! content-wrapper no-indent table-no-sort table-no-hover ""

        |     DSW3-1     |     DSW3-2     |     DSW3-3     |     DSW3-4     |     DSW3-5     |     DSW3-6     |     DSW3-7     |     DSW3-8     |
        |:--------------:|:--------------:|:--------------:|:--------------:|:--------------:|:--------------:|:--------------:|:--------------:|
        |  OFF {: .red}  |  OFF {: .red}  | ON {: .green } |  OFF {: .red}  |  OFF {: .red}  |  OFF {: .red}  | ON {: .green } |  OFF {: .red}  |

    Please insert the micro SD card into the slot.

    ![](./images/Insert-microSD-EVK-for-eSD_T2H.png)

=== "RZ/T2N"

    To set the board to eSD Boot mode, set the SW8 as below:

    !!! content-wrapper no-indent table-no-sort table-no-hover ""


        |      SW8-1     |      SW8-2     |      SW8-3     |      SW8-4     |
        |:--------------:|:--------------:|:--------------:|:--------------:|
        |  OFF {: .red}  |  OFF {: .red}  | ON {: .green } |  OFF {: .red}  |

    Please insert the micro SD card into the slot.

    ![](./images/Insert-microSD-EVK-for-eSD_T2N.png)

### Power on and boot

Then, power on the board, and Linux will boot from eSD.
