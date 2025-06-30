## How to boot from eSD

In this section, the steps to boot from eSD are described.

### Prepare micro SD card

Prepare the micro SD card using the `#!bash wic` image file.

Two files (`#!bash bl2_bp_esd-smarc-<device>.bin` and `#!bash fip-smarc-<device>.bin`) are used for boot from eSD.

=== "RZ/G2L"

    - File and directory in the micro SD card

        !!! content-wrapper no-indent table-no-sort table-no-hover ""

            +-------------+------------+--------------------------------------------------------+
            | Type/Number | Filesystem | Contents                                               |
            +=============+============+========================================================+
            | Primary #1  | FAT32      | * `#!bash Flash_Writer_SCIF_<device, memory size>.mot` |
            |             |            | * `#!bash bl2_bp_mmc-smarc-rzg2l_pmic.srec`            |
            |             |            | * `#!bash bl2_bp_spi-smarc-rzg2l_pmic.srec`            |
            |             |            | * `#!bash bl2_bp_esd-smarc-rzg2l_pmic.bin`             |
            |             |            | * `#!bash fip-smarc-rzg2l_pmic.srec`                   |
            |             |            | * `#!bash fip-smarc-rzg2l_pmic.bin`                    |
            +-------------+------------+--------------------------------------------------------+
            | Primary #2  | Ext4       |  &nbsp;                                                |
            |             |            |                                                        |
            |             |            |     ./                                                 |
            |             |            |     ├── bin                                            |
            |             |            |     ├── boot                                           |
            |             |            |     　  ├─ Image                                        |
            |             |            |       　└─ r9a07g044l2-smarc.dtb                        |
            |             |            |     ├── dev                                            |
            |             |            |     ├── etc                                            |
            |             |            |     ├── home                                           |
            |             |            |     ├── lib                                            |
            |             |            |     ├── media                                          |
            |             |            |     ├── mnt                                            |
            |             |            |     ├── proc                                           |
            |             |            |     ├── run                                            |
            |             |            |     ├── sbin                                           |
            |             |            |     ├── srv                                            |
            |             |            |     ├── sys                                            |
            |             |            |     ├── tmp                                            |
            |             |            |     ├── usr                                            |
            |             |            |     └── var                                            |
            |             |            |                                                        |
            |             |            | &nbsp;                                                 |
            +-------------+------------+--------------------------------------------------------+

### Set SMARC EVK board for eSD boot

=== "RZ/G2L"

    To set the board to eSD Boot mode, set the SW11 as below:

    !!! content-wrapper no-indent table-no-sort table-no-hover ""

        ![](../getting_started/images/smarc-carrier-board-SW11.png){ align=left .switch-icon }

        |     SW11-1     |     SW11-2     |     SW11-3     |     SW11-4     |
        |:--------------:|:--------------:|:--------------:|:--------------:|
        | ON {: .green } | ON {: .green } |  OFF {: .red}  | ON {: .green } |

    Then, change SW1 on the module to select micro SD card slot instead of eMMC.

    !!! content-wrapper no-indent table-no-sort table-no-hover ""

        ![](../getting_started/images/smarc-rzg2l-board-SW1.png){ align=left .switch-icon }

        |      SW1-1     |      SW1-2     |
        |:--------------:|:--------------:|
        | ON {: .green } | ON {: .green } |

    Please insert the micro SD card into the SOM module slot.

    ![](./images/Insert-microSD-SMARC-EVK-for-eSD.svg)

### Power on and boot

=== "RZ/G2L"

    After pressing the POWER button (SW9) to turn on the power and RESET button (SW10), Linux will be booted from eSD.

    ``` console
    NOTICE:  BL2: v2.9(release):cc18695-dirty
    NOTICE:  BL2: Built : 04:12:39, Dec 14 2023
    NOTICE:  BL2: SD boot from partition 0
    NOTICE:  BL2: Load dst=0x1f840 src=(p:0)0x10000(128) len=0x10(1)
    NOTICE:  BL2: SD boot from partition 0
    NOTICE:  BL2: Load dst=0x1f9a0 src=(p:0)0x10010(128) len=0x28(1)
    NOTICE:  BL2: SD boot from partition 0
    NOTICE:  BL2: Load dst=0x44000000 src=(p:0)0x10090(128) len=0x6069(49)
    NOTICE:  BL2: SD boot from partition 0
    NOTICE:  BL2: Load dst=0x1f840 src=(p:0)0x10000(128) len=0x10(1)
    NOTICE:  BL2: SD boot from partition 0
    NOTICE:  BL2: Load dst=0x1f9a0 src=(p:0)0x10010(128) len=0x28(1)
    NOTICE:  BL2: Load dst=0x1f9a0 src=(p:0)0x10038(128) len=0x28(1)
    NOTICE:  BL2: SD boot from partition 0
    NOTICE:  BL2: Load dst=0x50000000 src=(p:0)0x16100(176) len=0xbae68(1496)
    NOTICE:  BL2: Booting BL31
    NOTICE:  BL31: v2.9(release):cc18695-dirty
    NOTICE:  BL31: Built : 04:12:39, Dec 14 2023


    U-Boot 2021.10 (Dec 15 2023 - 06:47:44 +0000)

    CPU:   Renesas Electronics CPU rev 1.0
    Model: smarc-rzg2l
    DRAM:  1.9 GiB
    WDT:   watchdog@0000000012800800
    WDT:   Started with servicing (60s timeout)
    MMC:   sd@11c00000: 0, sd@11c10000: 1
    Loading Environment from MMC... *** Warning - bad CRC, using default environment

    In:    serial@1004b800
    Out:   serial@1004b800
    Err:   serial@1004b800
    U-boot WDT started!
    Net:
    Error: ethernet@11c20000 address not set.
    No ethernet found.

    Hit any key to stop autoboot:  0
    ## Resetting to default environment
    Card did not respond to voltage select! : -110
    20070912 bytes read in 1655 ms (11.6 MiB/s)
    39353 bytes read in 6 ms (6.3 MiB/s)
    Error: Bad gzipped data
    Moving Image from 0x48080000 to 0x48200000, end=495a0000
    ## Flattened Device Tree blob at 48000000
       Booting using the fdt blob at 0x48000000
       Loading Device Tree to 0000000057ff3000, end 0000000057fff9b8 ... OK
    Starting kernel ...

    [    0.000000] Booting Linux on physical CPU 0x0000000000 [0x412fd050]
    [    0.000000] Linux version 6.10.184-cip36-yocto-standard (oe-user@oe-host) (aarc
    :
    :
    Poky (Yocto Project Reference Distro) 3.1.33 smarc-rzg2l ttySC0

    BSP: RZG2L/RZG2L-SMARC-EVK/4.0.0
    LSI: RZG2L
    Version: 4.0.0
    smarc-rzg2l login: root
    root@smarc-rzg2l:~#
    ```
