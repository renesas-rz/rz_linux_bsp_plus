## How to boot from eSD

In this section, the steps to boot from eSD are described.

### Prepare micro SD card

=== "RZ/G2L"
    Prepare the micro SD card using the `#!bash wic` image file.

    Two files (`#!bash bl2_bp_esd-smarc-rzg2l_pmic.bin` and `#!bash fip-smarc-rzg2l_pmic.bin`) are used for boot from eSD.

    - File and directory in the micro SD card

        !!! content-wrapper no-indent table-no-sort table-no-hover ""

            +-------------+------------+-----------------------------------------------------------------+
            | Type/Number | Filesystem | Contents                                                        |
            +=============+============+=================================================================+
            | Primary #1  | FAT32      | * `#!bash Flash_Writer_SCIF_RZG2L_SMARC_PMIC_DDR4_2GB_1PCS.mot` |
            |             |            | * `#!bash bl2_bp_mmc-smarc-rzg2l_pmic.srec`                     |
            |             |            | * `#!bash bl2_bp_spi-smarc-rzg2l_pmic.srec`                     |
            |             |            | * `#!bash bl2_bp_esd-smarc-rzg2l_pmic.bin`                      |
            |             |            | * `#!bash fip-smarc-rzg2l_pmic.srec`                            |
            |             |            | * `#!bash fip-smarc-rzg2l_pmic.bin`                             |
            +-------------+------------+-----------------------------------------------------------------+
            | Primary #2  | Ext4       |     ./                                                          |
            |             |            |     ├── bin                                                     |
            |             |            |     ├── boot                                                    |
            |             |            |     　  ├─ Image                                                |
            |             |            |     　  ├─ Image-6.12.34-cip3-yocto-standard-gfd6f2e323a18      |
            |             |            |       　└─ r9a07g044l2-smarc.dtb                                |
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
            +-------------+------------+-----------------------------------------------------------------+

=== "RZ/G2LC"
    Prepare the micro SD card using the `#!bash wic` image file.

    Two files (`#!bash bl2_bp_esd-smarc-rzg2lc.bin` and `#!bash fip-smarc-rzg2lc.bin`) are used for boot from eSD.
    
    - File and directory in the micro SD card

        !!! content-wrapper no-indent table-no-sort table-no-hover ""

            +-------------+------------+-----------------------------------------------------------------+
            | Type/Number | Filesystem | Contents                                                        |
            +=============+============+=================================================================+
            | Primary #1  | FAT32      | * `#!bash Flash_Writer_SCIF_RZG2LC_SMARC_DDR4_1GB_1PCS.mot`     |
            |             |            | * `#!bash bl2_bp_mmc-smarc-rzg2lc.srec`                         |
            |             |            | * `#!bash bl2_bp_spi-smarc-rzg2lc.srec`                         |
            |             |            | * `#!bash bl2_bp_esd-smarc-rzg2lc.bin`                          |
            |             |            | * `#!bash fip-smarc-rzg2lc.srec`                                |
            |             |            | * `#!bash fip-smarc-rzg2lc.bin`                                 |
            +-------------+------------+-----------------------------------------------------------------+
            | Primary #2  | Ext4       |     ./                                                          |
            |             |            |     ├── bin                                                     |
            |             |            |     ├── boot                                                    |
            |             |            |     　  ├─ Image                                                |
            |             |            |     　  ├─ Image-6.12.34-cip3-yocto-standard-gb105f79b143c      |
            |             |            |       　└─ r9a07g044c2-smarc.dtb                                |
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
            +-------------+------------+-----------------------------------------------------------------+

=== "RZ/G2UL"
    Prepare the micro SD card using the `#!bash wic` image file.

    Two files (`#!bash bl2_bp_esd-smarc-rzg2ul.bin` and `#!bash fip-smarc-rzg2ul.bin`) are used for boot from eSD.
    
    - File and directory in the micro SD card

        !!! content-wrapper no-indent table-no-sort table-no-hover ""

            +-------------+------------+-----------------------------------------------------------------+
            | Type/Number | Filesystem | Contents                                                        |
            +=============+============+=================================================================+
            | Primary #1  | FAT32      | * `#!bash Flash_Writer_SCIF_RZG2UL_SMARC_DDR4_1GB_1PCS.mot`     |
            |             |            | * `#!bash bl2_bp_mmc-smarc-rzg2ul.srec`                         |
            |             |            | * `#!bash bl2_bp_spi-smarc-rzg2ul.srec`                         |
            |             |            | * `#!bash bl2_bp_esd-smarc-rzg2ul.bin`                          |
            |             |            | * `#!bash fip-smarc-rzg2ul.srec`                                |
            |             |            | * `#!bash fip-smarc-rzg2ul.bin`                                 |
            +-------------+------------+-----------------------------------------------------------------+
            | Primary #2  | Ext4       |     ./                                                          |
            |             |            |     ├── bin                                                     |
            |             |            |     ├── boot                                                    |
            |             |            |     　  ├─ Image                                                |
            |             |            |     　  ├─ Image-6.12.34-cip3-yocto-standard-gfd5929f36c66      |
            |             |            |       　└─ r9a07g043u11-smarc.dtb                               |
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
            +-------------+------------+-----------------------------------------------------------------+

=== "RZ/G3S"
    Prepare the micro SD card using the `#!bash wic` image file.

    Two files (`#!bash bl2_bp_esd-smarc-rzg3s.bin` and `#!bash fip-smarc-rzg3s.bin`) are used for boot from eSD.
    
    - File and directory in the micro SD card

        !!! content-wrapper no-indent table-no-sort table-no-hover ""

            +-------------+------------+-----------------------------------------------------------------+
            | Type/Number | Filesystem | Contents                                                        |
            +=============+============+=================================================================+
            | Primary #1  | FAT32      | * `#!bash FlashWriter-smarc-rzg3s.mot`                          |
            |             |            | * `#!bash bl2_bp_mmc-smarc-rzg3s.srec`                          |
            |             |            | * `#!bash bl2_bp_spi-smarc-rzg3s.srec`                          |
            |             |            | * `#!bash bl2_bp_esd-smarc-rzg3s.bin`                           |
            |             |            | * `#!bash fip-smarc-rzg3s.srec`                                 |
            |             |            | * `#!bash fip-smarc-rzg3s.bin`                                  |
            +-------------+------------+-----------------------------------------------------------------+
            | Primary #2  | Ext4       |     ./                                                          |
            |             |            |     ├── bin                                                     |
            |             |            |     ├── boot                                                    |
            |             |            |     　  ├─ Image                                                |
            |             |            |     　  ├─ Image-6.12.34-cip3-yocto-standard-gfd5929f36c66      |
            |             |            |       　└─ r9a08g045s33-smarc.dtb                               |
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
            +-------------+------------+-----------------------------------------------------------------+

### Set SMARC EVK board for eSD boot

=== "RZ/G2L"

    To set the board to eSD Boot mode, set the SW11 as below:

    !!! content-wrapper no-indent table-no-sort table-no-hover ""

        ![](images/smarc-carrier-board-SW11.png){ align=left .switch-icon }

        |     SW11-1     |     SW11-2     |     SW11-3     |     SW11-4     |
        |:--------------:|:--------------:|:--------------:|:--------------:|
        | ON {: .green } | ON {: .green } |  OFF {: .red}  | ON {: .green } |

    Then, change SW1 on the module to select micro SD card slot instead of eMMC.

    !!! content-wrapper no-indent table-no-sort table-no-hover ""

        ![](images/smarc-rzg2l-board-SW1.png){ align=left .switch-icon }

        |      SW1-1     |      SW1-2     |
        |:--------------:|:--------------:|
        | ON {: .green } | ON {: .green } |

    Please insert the micro SD card into the SOM module slot.

    ![](./images/Insert-microSD-SMARC-EVK-for-eSD.svg)

=== "RZ/G2LC"

    To set the board to eSD Boot mode, set the SW11 as below:

    !!! content-wrapper no-indent table-no-sort table-no-hover ""

        ![](images/smarc-carrier-board-SW11.png){ align=left .switch-icon }

        |     SW11-1     |     SW11-2     |     SW11-3     |     SW11-4     |
        |:--------------:|:--------------:|:--------------:|:--------------:|
        | ON {: .green } | ON {: .green } |  OFF {: .red}  | ON {: .green } |

    Then, change SW1 on the module to select micro SD card slot instead of eMMC.

    !!! content-wrapper no-indent table-no-sort table-no-hover ""

        ![](images/smarc-rzg2lc-board-SW1.png){ align=left .switch-icon }

        |      SW1-1     |      SW1-2     |
        |:--------------:|:--------------:|
        | ON {: .green } | ON {: .green } |

    Please insert the micro SD card into the SOM module slot.

    ![](./images/Insert-microSD-SMARC-EVK-for-eSD.svg)

=== "RZ/G2UL"

    To set the board to eSD Boot mode, set the SW11 as below:

    !!! content-wrapper no-indent table-no-sort table-no-hover ""

        ![](images/smarc-carrier-board-SW11.png){ align=left .switch-icon }

        |     SW11-1     |     SW11-2     |     SW11-3     |     SW11-4     |
        |:--------------:|:--------------:|:--------------:|:--------------:|
        | ON {: .green } | ON {: .green } |  OFF {: .red}  | ON {: .green } |

    Then, change SW1 on the module to select micro SD card slot instead of eMMC.

    !!! content-wrapper no-indent table-no-sort table-no-hover ""

        ![](images/smarc-rzg2ul-board-SW1.png){ align=left .switch-icon }

        |      SW1-1     |      SW1-2     |
        |:--------------:|:--------------:|
        | ON {: .green } | ON {: .green } |

    Please insert the micro SD card into the SOM module slot.

    ![](./images/Insert-microSD-SMARC-EVK-for-eSD.svg)

=== "RZ/G3S"

    To set the board to eSD Boot mode, set the SW_MODE as below:

    !!! content-wrapper no-indent table-no-sort table-no-hover ""

        ![](images/smarc-rzg3s-board-SWMODE_eSD.JPG){ align=left .switch-icon }

        |   SW_MODE[1]   |   SW_MODE[2]   |   SW_MODE[3]   |   SW_MODE[4]   |
        |:--------------:|:--------------:|:--------------:|:--------------:|
        | ON {: .green } | ON {: .green } |  OFF {: .red}  | ON {: .green } |

    Then, change SW_CONFIG on the module to enable micro SD card slot.

    !!! content-wrapper no-indent table-no-sort table-no-hover ""

        ![](images/smarc-rzg3s-board-SWCONFIG_uSD0.JPG){ align=left .switch-icon }

        |  SW_CONFIG[1]  |  SW_CONFIG[2]  |  SW_CONFIG[3]  |  SW_CONFIG[4]  |  SW_CONFIG[5]  |  SW_CONFIG[6]  |
        |:--------------:|:--------------:|:--------------:|:--------------:|:--------------:|:--------------:|
        |  OFF {: .red}  | ON {: .green } | ON {: .green } |  OFF {: .red}  |  OFF {: .red}  |  OFF {: .red}  |

    Please insert the micro SD card into the SOM module slot.

    ![](./images/Insert-microSD-SMARC-EVK-for-eSD_G3S.png)

### Power on and boot

=== "RZ/G2L"

    After pressing the POWER button to turn on the power and RESET button, Linux will be booted from eSD.

    ``` console
    NOTICE:  BL2: v2.10.5(release):2.10.5/rz_1.1.0-dirty
    NOTICE:  BL2: Built : 13:04:30, Sep 25 2025
    NOTICE:  BL2: RZ/G2L
    NOTICE:  BL2: SYS_LSI_MODE: 0x0
    NOTICE:  BL2: SYS_LSI_DEVID: 0x1841c447
    NOTICE:  BL2: SYS_LSI_PRR: 0x0
    NOTICE:  BL2: Booting BL31
    NOTICE:  BL31: v2.10.5(release):2.10.5/rz_1.1.0-dirty
    NOTICE:  BL31: Built : 13:04:30, Sep 25 2025


    U-Boot 2024.07 (Sep 12 2025 - 16:08:34 +0000)

    CPU:   Renesas Electronics CPU rev 1.0
    Model: smarc-rzg2l
    DRAM:  1.9 GiB
    SF: Detected mt25qu512a with page size 256 Bytes, erase size 4 KiB, total 64 MiB
    Core:  33 devices, 19 uclasses, devicetree: separate
    WDT:   watchdog@0000000012800800
    WDT:   Started watchdog@12800800 with servicing every 1000ms (60s timeout)
    MMC:   sd@11c00000: 0, sd@11c10000: 1
    Loading Environment from MMC... Reading from MMC(0)... *** Warning - bad CRC, using default environment

    In:    serial@1004b800
    Out:   serial@1004b800
    Err:   serial@1004b800
    WDT:   Started watchdog@12800800 with servicing every 1000ms (0s timeout)
    U-boot WDT started!
    Net:
    Warning: ethernet@11c20000 (eth0) using random MAC address - ca:85:51:ea:88:d2
    eth0: ethernet@11c20000
    Warning: ethernet@11c30000 (eth1) using random MAC address - 4a:64:b3:46:91:8f, eth1: ethernet@11c30000

    Hit any key to stop autoboot:  0
    ## Resetting to default environment
    Card did not respond to voltage select! : -110
    26690048 bytes read in 2086 ms (12.2 MiB/s)
    48482 bytes read in 5 ms (9.2 MiB/s)
    Moving Image from 0x48080000 to 0x48200000, end=49c30000
    ## Flattened Device Tree blob at 48000000
       Booting using the fdt blob at 0x48000000
    Working FDT set to 48000000
       Loading Device Tree to 0000000057ff1000, end 0000000057fffd61 ... OK
    Working FDT set to 57ff1000
    Changing the current FDT in 57ff1000.
       Config Node /soc/mmc@11c00000
          Set property vmmc-supply : <&/regulator-vcc-sdhi0>
       Config Node /soc/mmc@11c00000
          Set property vqmmc-supply : <&/regulator-vccq-sdhi0>

    Starting kernel ...

    [    0.000000] Booting Linux on physical CPU 0x0000000000 [0x412fd050]
    [    0.000000] Linux version 6.12.34-cip3-yocto-standard-gfd6f2e323a18 (oe-user@oe-host)
    :
    :
    Poky (Yocto Project Reference Distro) 5.0.11 smarc-rzg2l ttySC0

    smarc-rzg2l login: root
    root@smarc-rzg2l:~#
    ```

=== "RZ/G2LC"

    After pressing the POWER button to turn on the power and RESET button, Linux will be booted from eSD.

    ``` console
    NOTICE:  BL2: v2.10.5(release):2.10.5/rz_1.1.0-dirty
    NOTICE:  BL2: Built : 13:04:30, Sep 25 2025
    NOTICE:  BL2: RZ/G2LC
    NOTICE:  BL2: SYS_LSI_MODE: 0x0
    NOTICE:  BL2: SYS_LSI_DEVID: 0x1841c447
    NOTICE:  BL2: SYS_LSI_PRR: 0x0
    NOTICE:  BL2: Booting BL31
    NOTICE:  BL31: v2.10.5(release):2.10.5/rz_1.1.0-dirty
    NOTICE:  BL31: Built : 13:04:30, Sep 25 2025


    U-Boot 2024.07 (Sep 12 2025 - 16:08:34 +0000)

    CPU:   Renesas Electronics CPU rev 1.0
    Model: smarc-rzg2lc
    DRAM:  896 MiB
    SF: Detected mt25qu512a with page size 256 Bytes, erase size 4 KiB, total 64 MiB
    Core:  29 devices, 19 uclasses, devicetree: separate
    WDT:   watchdog@0000000012800800
    WDT:   Started watchdog@12800800 with servicing every 1000ms (60s timeout)
    MMC:   sd@11c00000: 0, sd@11c10000: 1
    Loading Environment from MMC... Reading from MMC(0)... *** Warning - bad CRC, using default environment

    In:    serial@1004b800
    Out:   serial@1004b800
    Err:   serial@1004b800
    WDT:   Started watchdog@12800800 with servicing every 1000ms (0s timeout)
    U-boot WDT started!
    Net:
    Warning: ethernet@11c20000 (eth0) using random MAC address - fa:f5:de:75:cf:36
    eth0: ethernet@11c20000

    Hit any key to stop autoboot:  0
    ## Resetting to default environment
    Card did not respond to voltage select! : -110
    26690048 bytes read in 2086 ms (12.2 MiB/s)
    43306 bytes read in 6 ms (6.9 MiB/s)
    Moving Image from 0x48080000 to 0x48200000, end=49c30000
    ## Flattened Device Tree blob at 48000000
       Booting using the fdt blob at 0x48000000
    Working FDT set to 48000000
       Loading Device Tree to 0000000057ff2000, end 0000000057fff929 ... OK
    Working FDT set to 57ff2000
    Changing the current FDT in 57ff2000.
       Config Node /soc/mmc@11c00000
          Set property vmmc-supply : <&/regulator-vcc-sdhi0>
       Config Node /soc/mmc@11c00000
          Set property vqmmc-supply : <&/regulator-vccq-sdhi0>

    Starting kernel ...

    [    0.000000] Booting Linux on physical CPU 0x0000000000 [0x412fd050]
    [    0.000000] Linux version 6.12.34-cip3-yocto-standard-gb105f79b143c (oe-user@oe-host)
    :
    :
    Poky (Yocto Project Reference Distro) 5.0.11 smarc-rzg2lc ttySC0

    smarc-rzg2lc login: root
    root@smarc-rzg2lc:~#
    ```

=== "RZ/G2UL"

    After pressing the POWER button to turn on the power and RESET button, Linux will be booted from eSD.

    ``` console
    NOTICE:  BL2: v2.10.5(release):2.10.5/rz_1.1.0-dirty
    NOTICE:  BL2: Built : 13:04:30, Sep 25 2025
    NOTICE:  BL2: RZ/G2UL Type 1
    NOTICE:  BL2: SYS_LSI_MODE: 0x0
    NOTICE:  BL2: SYS_LSI_DEVID: 0x8450447
    NOTICE:  BL2: SYS_LSI_PRR: 0x1101
    NOTICE:  BL2: Booting BL31
    NOTICE:  BL31: v2.10.5(release):2.10.5/rz_1.1.0-dirty
    NOTICE:  BL31: Built : 13:04:30, Sep 25 2025


    U-Boot 2024.07 (Sep 12 2025 - 16:08:34 +0000)

    CPU:   Renesas Electronics CPU rev 1.0
    Model: smarc-rzg2ul
    DRAM:  896 MiB
    SW_ET0_EN: ON
    Core:  30 devices, 20 uclasses, devicetree: separate
    WDT:   watchdog@0000000012800800
    WDT:   Started watchdog@12800800 with servicing every 1000ms (60s timeout)
    MMC:   sd@11c00000: 0, sd@11c10000: 1
    Loading Environment from MMC... Reading from MMC(0)... *** Warning - bad CRC, using default environment

    In:    serial@1004b800
    Out:   serial@1004b800
    Err:   serial@1004b800
    WDT:   Started watchdog@12800800 with servicing every 1000ms (0s timeout)
    U-boot WDT started!
    Net:
    Warning: ethernet@11c30000 (eth0) using random MAC address - fa:78:51:5a:23:8c
    eth0: ethernet@11c30000
    Hit any key to stop autoboot:  0
    ## Resetting to default environment
    Card did not respond to voltage select! : -110
    26690048 bytes read in 2091 ms (12.2 MiB/s)
    35707 bytes read in 5 ms (6.8 MiB/s)
    Moving Image from 0x48080000 to 0x48200000, end=49c30000
    ## Flattened Device Tree blob at 48000000
       Booting using the fdt blob at 0x48000000
    Working FDT set to 48000000
       Loading Device Tree to 0000000057ff4000, end 0000000057fffb7a ... OK
    Working FDT set to 57ff4000

    Starting kernel ...

    [    0.000000] Booting Linux on physical CPU 0x0000000000 [0x412fd050]
    [    0.000000] Linux version 6.12.34-cip3-yocto-standard-gfd5929f36c66 (oe-user@oe-host)
    :
    :
    Poky (Yocto Project Reference Distro) 5.0.11 smarc-rzg2ul ttySC0

    smarc-rzg2ul login: root
    root@smarc-rzg2ul:~#
    ```

=== "RZ/G3S"

    After pressing the POWER button to turn on the power and RESET button, Linux will be booted from eSD.

    ``` console
    NOTICE:  BL2: v2.10.5(release):2.10.5/rz_1.1.0-dirty
    NOTICE:  BL2: Built : 13:04:30, Sep 25 2025
    NOTICE:  BL2: SYS_LSI_MODE: 0x3251
    NOTICE:  BL2: SYS_LSI_DEVID: 0x85e0447
    NOTICE:  BL2: Booting BL31
    NOTICE:  BL31: v2.10.5(release):2.10.5/rz_1.1.0-dirty
    NOTICE:  BL31: Built : 13:04:30, Sep 25 2025


    U-Boot 2024.07 (Sep 12 2025 - 16:08:34 +0000)

    CPU:   Renesas Electronics CPU rev 1.0
    Model: smarc-rzg3s
    DRAM:  896 MiB
    Core:  31 devices, 15 uclasses, devicetree: separate
    MMC:   sd@11c00000: 0, sd@11c10000: 1, sd@11c20000: 2
    Loading Environment from MMC... Reading from MMC(0)... OK
    In:    serial@1004b800
    Out:   serial@1004b800
    Err:   serial@1004b800
    Net:
    Error: ethernet@11c30000 No valid MAC address found.
    No ethernet found.

    Hit any key to stop autoboot:  0
    ## Resetting to default environment
    Card did not respond to voltage select! : -110
    26690048 bytes read in 920 ms (27.7 MiB/s)
    45489 bytes read in 2 ms (21.7 MiB/s)
    Moving Image from 0x48080000 to 0x48200000, end=49c30000
    ## Flattened Device Tree blob at 48000000
       Booting using the fdt blob at 0x48000000
    Working FDT set to 48000000
       Loading Device Tree to 0000000057ff1000, end 0000000057fff1b0 ... OK
    Working FDT set to 57ff1000

    Starting kernel ...

    [    0.000000] Booting Linux on physical CPU 0x0000000000 [0x412fd050]
    [    0.000000] Linux version 6.12.34-cip3-yocto-standard-gfd5929f36c66 (oe-user@oe-host)
    :
    :
    Poky (Yocto Project Reference Distro) 5.0.11 smarc-rzg3s ttySC3

    smarc-rzg3s login: root
    root@smarc-rzg3s:~#
    ```