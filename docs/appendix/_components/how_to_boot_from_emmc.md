## How to boot from eMMC

In this section, the steps to boot from eMMC are described.

### Writing Bootloader for eMMC Boot

For the boot operation, `#!bash EXT_CSD` registers of eMMC need to be modified and two boot loader files need to be written to the target board.

After booting the `#!bash Flash Writer`, `#!bash EM_SECSD` command of Flash Writer is used to modify `#!bash EXT_CSD` register of eMMC to enable eMMC boot.

Then, `#!bash EM_W` command of Flash Writer is used to write boot loader binary files. This command receives binary data from the serial port and writes the data to a specified address of the eMMC with information where the data should be loaded on the address of the main memory.

=== "RZ/G2L"

    Then, set the SW1 on SOM module to eMMC mode.

    !!! content-wrapper no-indent table-no-sort table-no-hover ""

        ![](images/smarc-rzg2l-board-SW1_eMMC.png){ align=left .switch-icon }

        |      SW1-1     |      SW1-2     |
        |:--------------:|:--------------:|
        | ON {: .green } |  OFF {: .red}  |

    For example, this part describes how to modify `#!bash EXT_CSD` register and write boot loader files:

    ``` console
    >EM_SECSD
      Please Input EXT_CSD Index(H'00 - H'1FF) :b1
      EXT_CSD[B1] = 0x00
      Please Input Value(H'00 - H'FF) :2
      EXT_CSD[B1] = 0x02
    >EM_SECSD
      Please Input EXT_CSD Index(H'00 - H'1FF) :b3
      EXT_CSD[B3] = 0x00
      Please Input Value(H'00 - H'FF) :8
      EXT_CSD[B3] = 0x08
    ```

    ``` console
    >EM_W
    EM_W Start --------------
    ---------------------------------------------------------
    Please select,eMMC Partition Area.
     0:User Partition Area   : 62160896 KBytes
      eMMC Sector Cnt : H'0 - H'0768FFFF
     1:Boot Partition 1      : 32256 KBytes
      eMMC Sector Cnt : H'0 - H'0000FBFF
     2:Boot Partition 2      : 32256 KBytes
      eMMC Sector Cnt : H'0 - H'0000FBFF
    ---------------------------------------------------------
      Select area(0-2)>1
    -- Boot Partition 1 Program -----------------------------
    Please Input Start Address in sector :1
    Please Input Program Start Address : 11e00
    Work RAM(H'50000000-H'50FFFFFF) Clear....
    please send ! ('.' & CR stop load)
    ```

    Send the data of `#!bash bl2_bp_mmc-smarc-rzg2l_pmic.srec` from terminal software after the message **please send !** is shown.

    After successfully downloading the binary, messages like below are shown on the terminal.

    ``` console
    SAVE -FLASH.......
    EM_W Complete!
    ```

    Next, write another loader file by using `#!bash EM_W` command again.

    ``` console
    > EM_W
    EM_W Start --------------
    ---------------------------------------------------------
    Please select,eMMC Partition Area.
     0:User Partition Area   : 62160896 KBytes
      eMMC Sector Cnt : H'0 - H'0768FFFF
     1:Boot Partition 1      : 32256 KBytes
      eMMC Sector Cnt : H'0 - H'0000FBFF
     2:Boot Partition 2      : 32256 KBytes
      eMMC Sector Cnt : H'0 - H'0000FBFF
    ---------------------------------------------------------
      Select area(0-2)>1
    -- Boot Partition 1 Program -----------------------------
    Please Input Start Address in sector :100
    Please Input Program Start Address : 0
    Work RAM(H'50000000-H'50FFFFFF) Clear....
    please send ! ('.' & CR stop load)
    ```

    Send the data of `#!bash fip-smarc-rzg2l_pmic.srec` from terminal software after the message **please send !** is shown.

    After successfully downloading the binary, messages like below are shown on the terminal.

    ``` console
    SAVE -FLASH.......
    EM_W Complete!
    ```

    After writing two loader files normally, turn off the power of the board by changing the SW11.

    !!! note
        - Address of `#!bash EXT_CSD` register of eMMC for eMMC boot

            !!! content-wrapper no-indent table-no-sort table-no-hover ""

                |    Address     | Value to write|
                |:--------------:|:-------------:|
                | `#!bash 0xB1`  | `#!bash 0x02` |
                | `#!bash 0xB3`  | `#!bash 0x08` |

        - Address for sending each loader binary file for eMMC boot

            !!! content-wrapper no-indent table-no-sort table-no-hover ""

                |               File name                   | Partition to save to eMMC | Address to save to eMMC | Address to load to RAM |
                |:-----------------------------------------:|:-------------------------:|:-----------------------:|:----------------------:|
                | `#!bash bl2_bp_mmc-smarc-rzg2l_pmic.srec` | `#!bash 1`                |`#!bash 00000001`        |`#!bash 11E00`          |
                | `#!bash fip-smarc-rzg2l_pmic.srec`        | `#!bash 1`                |`#!bash 00000100`        |`#!bash 00000`          |

=== "RZ/G2LC"

    Then, set the SW1 on SOM module to eMMC mode.

    !!! content-wrapper no-indent table-no-sort table-no-hover ""

        ![](images/smarc-rzg2lc-board-SW1_eMMC.JPG){ align=left .switch-icon }

        |      SW1-1     |      SW1-2     |      SW1-3     |      SW1-4     |      SW1-5     |      SW1-6     |
        |:--------------:|:--------------:|:--------------:|:--------------:|:--------------:|:--------------:|
        | ON {: .green } |  OFF {: .red}  | ON {: .green } |  OFF {: .red}  | ON {: .green } | ON {: .green } |

    For example, this part describes how to modify `#!bash EXT_CSD` register and write boot loader files:

    ``` console
    >EM_SECSD
      Please Input EXT_CSD Index(H'00 - H'1FF) :b1
      EXT_CSD[B1] = 0x02
      Please Input Value(H'00 - H'FF) :2
      EXT_CSD[B1] = 0x02
    >EM_SECSD
      Please Input EXT_CSD Index(H'00 - H'1FF) :b3
      EXT_CSD[B3] = 0x08
      Please Input Value(H'00 - H'FF) :8
      EXT_CSD[B3] = 0x08
    ```

    ``` console
    >EM_W
    EM_W Start --------------
    ---------------------------------------------------------
    Please select,eMMC Partition Area.
     0:User Partition Area   : 62160896 KBytes
      eMMC Sector Cnt : H'0 - H'0768FFFF
     1:Boot Partition 1      : 32256 KBytes
      eMMC Sector Cnt : H'0 - H'0000FBFF
     2:Boot Partition 2      : 32256 KBytes
      eMMC Sector Cnt : H'0 - H'0000FBFF
    ---------------------------------------------------------
      Select area(0-2)>1
    -- Boot Partition 1 Program -----------------------------
    Please Input Start Address in sector :1
    Please Input Program Start Address : 11e00
    Work RAM(H'50000000-H'50FFFFFF) Clear....
    please send ! ('.' & CR stop load)
    ```

    Send the data of `#!bash bl2_bp_mmc-smarc-rzg2lc.srec` from terminal software after the message **please send !** is shown.

    After successfully downloading the binary, messages like below are shown on the terminal.

    ``` console
    SAVE -FLASH.......
    EM_W Complete!
    ```

    Next, write another loader file by using `#!bash EM_W` command again.

    ``` console
    > EM_W
    EM_W Start --------------
    ---------------------------------------------------------
    Please select,eMMC Partition Area.
     0:User Partition Area   : 62160896 KBytes
      eMMC Sector Cnt : H'0 - H'0768FFFF
     1:Boot Partition 1      : 32256 KBytes
      eMMC Sector Cnt : H'0 - H'0000FBFF
     2:Boot Partition 2      : 32256 KBytes
      eMMC Sector Cnt : H'0 - H'0000FBFF
    ---------------------------------------------------------
      Select area(0-2)>1
    -- Boot Partition 1 Program -----------------------------
    Please Input Start Address in sector :100
    Please Input Program Start Address : 0
    Work RAM(H'50000000-H'50FFFFFF) Clear....
    please send ! ('.' & CR stop load)
    ```

    Send the data of `#!bash fip-smarc-rzg2lc.srec` from terminal software after the message **please send !** is shown.

    After successfully downloading the binary, messages like below are shown on the terminal.

    ``` console
    SAVE -FLASH.......
    EM_W Complete!
    ```

    After writing two loader files normally, turn off the power of the board by changing the SW11.

    !!! note
        - Address of `#!bash EXT_CSD` register of eMMC for eMMC boot

            !!! content-wrapper no-indent table-no-sort table-no-hover ""

                |    Address     | Value to write|
                |:--------------:|:-------------:|
                | `#!bash 0xB1`  | `#!bash 0x02` |
                | `#!bash 0xB3`  | `#!bash 0x08` |

        - Address for sending each loader binary file for eMMC boot

            !!! content-wrapper no-indent table-no-sort table-no-hover ""

                |               File name                   | Partition to save to eMMC | Address to save to eMMC | Address to load to RAM |
                |:-----------------------------------------:|:-------------------------:|:-----------------------:|:----------------------:|
                | `#!bash bl2_bp_mmc-smarc-rzg2l_pmic.srec` | `#!bash 1`                |`#!bash 00000001`        |`#!bash 11E00`          |
                | `#!bash fip-smarc-rzg2l_pmic.srec`        | `#!bash 1`                |`#!bash 00000100`        |`#!bash 00000`          |

=== "RZ/G2UL"

    Then, set the SW1 on SOM module to eMMC mode.

    !!! content-wrapper no-indent table-no-sort table-no-hover ""

        ![](images/smarc-rzg2ul-board-SW1_eMMC.JPG){ align=left .switch-icon }

        |      SW1-1     |      SW1-2     |      SW1-3     |
        |:--------------:|:--------------:|:--------------:|
        | ON {: .green } |  OFF {: .red}  | ON {: .green } |

    For example, this part describes how to modify `#!bash EXT_CSD` register and write boot loader files:

    ``` console
    >EM_SECSD
      Please Input EXT_CSD Index(H'00 - H'1FF) :b1
      EXT_CSD[B1] = 0x00
      Please Input Value(H'00 - H'FF) :2
      EXT_CSD[B1] = 0x02
    >EM_SECSD
      Please Input EXT_CSD Index(H'00 - H'1FF) :b3
      EXT_CSD[B3] = 0x00
      Please Input Value(H'00 - H'FF) :8
      EXT_CSD[B3] = 0x08
    ```

    ``` console
    >EM_W
    EM_W Start --------------
    ---------------------------------------------------------
    Please select,eMMC Partition Area.
     0:User Partition Area   : 62160896 KBytes
      eMMC Sector Cnt : H'0 - H'0768FFFF
     1:Boot Partition 1      : 32256 KBytes
      eMMC Sector Cnt : H'0 - H'0000FBFF
     2:Boot Partition 2      : 32256 KBytes
      eMMC Sector Cnt : H'0 - H'0000FBFF
    ---------------------------------------------------------
      Select area(0-2)>1
    -- Boot Partition 1 Program -----------------------------
    Please Input Start Address in sector :1
    Please Input Program Start Address : 11e00
    Work RAM(H'50000000-H'50FFFFFF) Clear....
    please send ! ('.' & CR stop load)
    ```

    Send the data of `#!bash bl2_bp_mmc-smarc-rzg2ul.srec` from terminal software after the message **please send !** is shown.

    After successfully downloading the binary, messages like below are shown on the terminal.

    ``` console
    SAVE -FLASH.......
    EM_W Complete!
    ```

    Next, write another loader file by using `#!bash EM_W` command again.

    ``` console
    > EM_W
    EM_W Start --------------
    ---------------------------------------------------------
    Please select,eMMC Partition Area.
     0:User Partition Area   : 62160896 KBytes
      eMMC Sector Cnt : H'0 - H'0768FFFF
     1:Boot Partition 1      : 32256 KBytes
      eMMC Sector Cnt : H'0 - H'0000FBFF
     2:Boot Partition 2      : 32256 KBytes
      eMMC Sector Cnt : H'0 - H'0000FBFF
    ---------------------------------------------------------
      Select area(0-2)>1
    -- Boot Partition 1 Program -----------------------------
    Please Input Start Address in sector :100
    Please Input Program Start Address : 0
    Work RAM(H'50000000-H'50FFFFFF) Clear....
    please send ! ('.' & CR stop load)
    ```

    Send the data of `#!bash fip-smarc-rzg2ul.srec` from terminal software after the message **please send !** is shown.

    After successfully downloading the binary, messages like below are shown on the terminal.

    ``` console
    SAVE -FLASH.......
    EM_W Complete!
    ```

    After writing two loader files normally, turn off the power of the board by changing the SW11.

    !!! note
        - Address of `#!bash EXT_CSD` register of eMMC for eMMC boot

            !!! content-wrapper no-indent table-no-sort table-no-hover ""

                |    Address     | Value to write|
                |:--------------:|:-------------:|
                | `#!bash 0xB1`  | `#!bash 0x02` |
                | `#!bash 0xB3`  | `#!bash 0x08` |

        - Address for sending each loader binary file for eMMC boot

            !!! content-wrapper no-indent table-no-sort table-no-hover ""

                |               File name                   | Partition to save to eMMC | Address to save to eMMC | Address to load to RAM |
                |:-----------------------------------------:|:-------------------------:|:-----------------------:|:----------------------:|
                | `#!bash bl2_bp_mmc-smarc-rzg2l_pmic.srec` | `#!bash 1`                |`#!bash 00000001`        |`#!bash 11E00`          |
                | `#!bash fip-smarc-rzg2l_pmic.srec`        | `#!bash 1`                |`#!bash 00000100`        |`#!bash 00000`          |

=== "RZ/G3S"

    Then, set the SW_CONFIG on SOM module to eMMC mode.

    !!! content-wrapper no-indent table-no-sort table-no-hover ""

        ![](images/smarc-rzg3s-board-SWCONFIG_eMMC.JPG){ align=left .switch-icon }

        |  SW_CONFIG[1]  |  SW_CONFIG[2]  |  SW_CONFIG[3]  |  SW_CONFIG[4]  |  SW_CONFIG[5]  |  SW_CONFIG[6]  |
        |:--------------:|:--------------:|:--------------:|:--------------:|:--------------:|:--------------:|
        |  OFF {: .red}  |  OFF {: .red}  | ON {: .green } |  OFF {: .red}  |  OFF {: .red}  |  OFF {: .red}  |

    For example, this part describes how to modify `#!bash EXT_CSD` register and write boot loader files:

    ``` console
    >EM_SECSD
      Please Input EXT_CSD Index(H'00 - H'1FF) :b1
      EXT_CSD[B1] = 0x00
      Please Input Value(H'00 - H'FF) :2
      EXT_CSD[B1] = 0x02
    >EM_SECSD
      Please Input EXT_CSD Index(H'00 - H'1FF) :b3
      EXT_CSD[B3] = 0x00
      Please Input Value(H'00 - H'FF) :8
      EXT_CSD[B3] = 0x08
    ```

    ``` console
    >EM_W
    EM_W Start --------------
    ---------------------------------------------------------
    Please select,eMMC Partition Area.
     0:User Partition Area   : 62160896 KBytes
      eMMC Sector Cnt : H'0 - H'0768FFFF
     1:Boot Partition 1      : 32256 KBytes
      eMMC Sector Cnt : H'0 - H'0000FBFF
     2:Boot Partition 2      : 32256 KBytes
      eMMC Sector Cnt : H'0 - H'0000FBFF
    ---------------------------------------------------------
      Select area(0-2)>1
    -- Boot Partition 1 Program -----------------------------
    Please Input Start Address in sector :1
    Please Input Program Start Address : a1e00
    Work RAM(H'50000000-H'50FFFFFF) Clear....
    please send ! ('.' & CR stop load)
    ```

    Send the data of `#!bash bl2_bp_mmc-smarc-rzg3s.srec` from terminal software after the message **please send !** is shown.

    After successfully downloading the binary, messages like below are shown on the terminal.

    ``` console
    SAVE -FLASH.......
    EM_W Complete!
    ```

    Next, write another loader file by using `#!bash EM_W` command again.

    ``` console
    > EM_W
    EM_W Start --------------
    ---------------------------------------------------------
    Please select,eMMC Partition Area.
     0:User Partition Area   : 62160896 KBytes
      eMMC Sector Cnt : H'0 - H'0768FFFF
     1:Boot Partition 1      : 32256 KBytes
      eMMC Sector Cnt : H'0 - H'0000FBFF
     2:Boot Partition 2      : 32256 KBytes
      eMMC Sector Cnt : H'0 - H'0000FBFF
    ---------------------------------------------------------
      Select area(0-2)>1
    -- Boot Partition 1 Program -----------------------------
    Please Input Start Address in sector :300
    Please Input Program Start Address : 0
    Work RAM(H'50000000-H'50FFFFFF) Clear....
    please send ! ('.' & CR stop load)
    ```

    Send the data of `#!bash fip-smarc-rzg3s.srec` from terminal software after the message **please send !** is shown.

    After successfully downloading the binary, messages like below are shown on the terminal.

    ``` console
    SAVE -FLASH.......
    EM_W Complete!
    ```

    After writing two loader files normally, turn off the power of the board by changing the SW_MODE.

    !!! note
        - Address of `#!bash EXT_CSD` register of eMMC for eMMC boot

            !!! content-wrapper no-indent table-no-sort table-no-hover ""

                |    Address     | Value to write|
                |:--------------:|:-------------:|
                | `#!bash 0xB1`  | `#!bash 0x02` |
                | `#!bash 0xB3`  | `#!bash 0x08` |

        - Address for sending each loader binary file for eMMC boot

            !!! content-wrapper no-indent table-no-sort table-no-hover ""

                |               File name                   | Partition to save to eMMC | Address to save to eMMC | Address to load to RAM |
                |:-----------------------------------------:|:-------------------------:|:-----------------------:|:----------------------:|
                | `#!bash bl2_bp_mmc-smarc-rzg2l_pmic.srec` | `#!bash 1`                |`#!bash 00000001`        |`#!bash a1e00`          |
                | `#!bash fip-smarc-rzg2l_pmic.srec`        | `#!bash 1`                |`#!bash 00000300`        |`#!bash 00000`          |

### Create a microSD card to boot Linux for eMMC boot
=== "RZ/G2L"

    Please create a microSD card (see [Step 4: Deploy Renesas RZ Linux BSP Plus](../getting_started/index.md#step-4-deploy-renesas-rz-linux-bsp-plus)).

    After that, please return to the following instructions before unmounting the micro SD card.

    Copy the kernel image, device tree file, and rootfs to the second partition of the microSD card.

    !!! note
        Where `#!bash <image name>` is one of the following:

        * `#!bash core-image-minimal`
        * `#!bash core-image-weston`

    ```bash
    cd /media/user/rootfs/root/
    sudo cp ${WORK}/build/tmp/deploy/images/smarc-rzg2l/Image-smarc-rzg2l.bin ./
    sudo cp ${WORK}/build/tmp/deploy/images/smarc-rzg2l/r9a07g044l2-smarc.dtb ./
    sudo cp ${WORK}/build/tmp/deploy/images/smarc-rzg2l/<image name>-smarc-rzg2l.rootfs.tar.bz2 ./
    cd ${WORK}
    sudo umount /media/user/rootfs
    ```
    {: .dollar }

=== "RZ/G2LC"

    Please create a microSD card (see [Step 4: Deploy Renesas RZ Linux BSP Plus](../getting_started/index.md#step-4-deploy-renesas-rz-linux-bsp-plus)).

    After that, please return to the following instructions before unmounting the micro SD card.

    Copy the kernel image, device tree file, and rootfs to the second partition of the microSD card.

    !!! note
        Where `#!bash <image name>` is one of the following:

        * `#!bash core-image-minimal`
        * `#!bash core-image-weston`

    ```bash
    cd /media/user/rootfs/root/
    sudo cp ${WORK}/build/tmp/deploy/images/smarc-rzg2lc/Image-smarc-rzg2lc.bin ./
    sudo cp ${WORK}/build/tmp/deploy/images/smarc-rzg2lc/r9a07g044c2-smarc.dtb ./
    sudo cp ${WORK}/build/tmp/deploy/images/smarc-rzg2lc/<image name>-smarc-rzg2lc.rootfs.tar.bz2 ./
    cd ${WORK}
    sudo umount /media/user/rootfs
    ```
    {: .dollar }

=== "RZ/G2UL"

    Please create a microSD card (see [Step 4: Deploy Renesas RZ Linux BSP Plus](../getting_started/index.md#step-4-deploy-renesas-rz-linux-bsp-plus)).

    After that, please return to the following instructions before unmounting the micro SD card.

    Copy the kernel image, device tree file, and rootfs to the second partition of the microSD card.

    !!! note
        Where `#!bash <image name>` is one of the following:

        * `#!bash core-image-minimal`

    ```bash
    cd /media/user/rootfs/root/
    sudo cp ${WORK}/build/tmp/deploy/images/smarc-rzg2ul/Image-smarc-rzg2ul.bin ./
    sudo cp ${WORK}/build/tmp/deploy/images/smarc-rzg2ul/r9a07g043u11-smarc.dtb ./
    sudo cp ${WORK}/build/tmp/deploy/images/smarc-rzg2ul/<image name>-smarc-rzg2ul.rootfs.tar.bz2 ./
    cd ${WORK}
    sudo umount /media/user/rootfs
    ```
    {: .dollar }

=== "RZ/G3S"

    Please create a microSD card (see [Step 4: Deploy Renesas RZ Linux BSP Plus](../getting_started/index.md#step-4-deploy-renesas-rz-linux-bsp-plus)).

    After that, please return to the following instructions before unmounting the micro SD card.

    Copy the kernel image, device tree file, and rootfs to the second partition of the microSD card.

    !!! note
        Where `#!bash <image name>` is one of the following:

        * `#!bash core-image-minimal`

    ```bash
    cd /media/user/rootfs/root/
    sudo cp ${WORK}/build/tmp/deploy/images/smarc-rzg3s/<image name>-smarc-rzg3s.rootfs.tar.bz2 ./
    cd ${WORK}
    sudo umount /media/user/rootfs
    ```
    {: .dollar }

### Writing rootfs to eMMC

=== "RZ/G2L"

    To set the board to eMMC Boot mode, set the SW11 as below:

    !!! content-wrapper no-indent table-no-sort table-no-hover ""

        ![](images/smarc-carrier-board-SW11_eMMC.png){ align=left .switch-icon }

        |     SW11-1     |     SW11-2     |     SW11-3     |     SW11-4     |
        |:--------------:|:--------------:|:--------------:|:--------------:|
        | ON {: .green } |  OFF {: .red}  |  OFF {: .red}  | ON {: .green } |

    Turn on the board by pressing the reset button. After Linux boots, please log in as root and create partitions on the eMMC by running the following commands.

    ``` console
    root@smarc-rzg2l:~# fdisk /dev/mmcblk0

    Welcome to fdisk (util-linux 2.35.1).
    Changes will remain in memory only, until you decide to write them.
    Be careful before using the write command.

    Command (m for help): o
    Created a new DOS disklabel with disk identifier 0xf3d53104.

    Command (m for help): n
    Partition type
       p   primary partition (1-4)
       e   extended
    p

    Partition number (1-4): 1
    First sector (16-124321791, default 16): 16
    Last sector or +size{,K,M,G,T} (16-124321791, default 124321791): +500M

    Command (m for help): n
    Partition type
       p   primary partition (1-4)
       e   extended
    p

    Partition number (1-4): 2
    First sector (1024016-124321791, default 1024016): 1024016
    Last sector or +size{,K,M,G,T} (1024016-124321791, default 124321791): 124321791

    Command (m for help): p
    Disk /dev/mmcblk0: 59 GB, 63652757504 bytes, 124321792 sectors
    1942528 cylinders, 4 heads, 16 sectors/track
    Units: sectors of 1 * 512 = 512 bytes

    Device       Boot StartCHS    EndCHS        StartLBA     EndLBA    Sectors  Size Id Type
    /dev/mmcblk0p1    0,1,1       1023,3,16           16    1024015    1024000  500M 83 Linux
    /dev/mmcblk0p2    1023,3,16   1023,3,16      1024016  124321791  123297776 58.7G 83 Linux

    Command (m for help): w
    The partition table has been altered.
    Calling ioctl() to re-read partition table.

    root@smarc-rzg2l:~#
    ```

    Format eMMC.

    ```bash
    mkfs.ext4 /dev/mmcblk0p1
    mkfs.ext4 /dev/mmcblk0p2
    ```
    {: .hash }

    Format the eMMC and write the kernel, device tree, and rootfs.

    !!! note
        Where `#!bash <image name>` is one of the following:

        * `#!bash core-image-minimal`
        * `#!bash core-image-weston`

    ```bash
    mount /dev/mmcblk0p1 /mnt/
    cp Image-smarc-rzg2l.bin /mnt/
    cp r9a07g044l2-smarc.dtb /mnt/
    umount /dev/mmcblk0p1
    mount /dev/mmcblk0p2 /mnt/
    tar xf /root/<image name>-smarc-rzg2l.rootfs.tar.bz2 -C /mnt/
    umount /dev/mmcblk0p2
    ```
    {: .hash }

=== "RZ/G2LC"

    To set the board to eMMC Boot mode, set the SW11 as below:

    !!! content-wrapper no-indent table-no-sort table-no-hover ""

        ![](images/smarc-carrier-board-SW11_eMMC.png){ align=left .switch-icon }

        |     SW11-1     |     SW11-2     |     SW11-3     |     SW11-4     |
        |:--------------:|:--------------:|:--------------:|:--------------:|
        | ON {: .green } |  OFF {: .red}  |  OFF {: .red}  | ON {: .green } |

    Turn on the board by pressing the reset button. After Linux boots, please log in as root and create partitions on the eMMC by running the following commands.

    ``` console
    root@smarc-rzg2lc:~# fdisk /dev/mmcblk0

    Welcome to fdisk (util-linux 2.35.1).
    Changes will remain in memory only, until you decide to write them.
    Be careful before using the write command.

    Command (m for help): o
    Created a new DOS disklabel with disk identifier 0xf3d53104.

    Command (m for help): n
    Partition type
       p   primary partition (1-4)
       e   extended
    p

    Partition number (1-4): 1
    FFirst sector (32-124321791, default 32): 32
    Last sector or +size{,K,M,G,T} (32-124321791, default 124321791): +500M

    Command (m for help): n
    Partition type
       p   primary partition (1-4)
       e   extended
    p

    Partition number (1-4): 2
    First sector (1024032-124321791, default 1024032): 1024032
    Last sector or +size{,K,M,G,T} (1024032-124321791, default 124321791): 124321791

    Command (m for help): p
    Disk /dev/mmcblk0: 59 GB, 63652757504 bytes, 124321792 sectors
    971264 cylinders, 4 heads, 32 sectors/track
    Units: sectors of 1 * 512 = 512 bytes

    Device       Boot StartCHS    EndCHS        StartLBA     EndLBA    Sectors  Size Id Type
    /dev/mmcblk0p1    0,1,1       1023,3,32           32    1024031    1024000  500M 83 Linux
    /dev/mmcblk0p2    1023,3,32   1023,3,32      1024032  124321791  123297760 58.7G 83 Linux

    Command (m for help): w
    The partition table has been altered.
    Calling ioctl() to re-read partition table.

    root@smarc-rzg2lc:~#
    ```

    Format eMMC.

    ```bash
    mkfs.ext4 /dev/mmcblk0p1
    mkfs.ext4 /dev/mmcblk0p2
    ```
    {: .hash }

    Format the eMMC and write the kernel, device tree, and rootfs.

    !!! note
        Where `#!bash <image name>` is one of the following:

        * `#!bash core-image-minimal`
        * `#!bash core-image-weston`

    ```bash
    mount /dev/mmcblk0p1 /mnt/
    cp Image-smarc-rzg2lc.bin /mnt/
    cp r9a07g044c2-smarc.dtb /mnt/
    umount /dev/mmcblk0p1
    mount /dev/mmcblk0p2 /mnt/
    tar xf /root/<image name>-smarc-rzg2lc.rootfs.tar.bz2 -C /mnt/
    umount /dev/mmcblk0p2
    ```
    {: .hash }

=== "RZ/G2UL"

    To set the board to eMMC Boot mode, set the SW11 as below:

    !!! content-wrapper no-indent table-no-sort table-no-hover ""

        ![](images/smarc-carrier-board-SW11_eMMC.png){ align=left .switch-icon }

        |     SW11-1     |     SW11-2     |     SW11-3     |     SW11-4     |
        |:--------------:|:--------------:|:--------------:|:--------------:|
        | ON {: .green } |  OFF {: .red}  |  OFF {: .red}  | ON {: .green } |

    Turn on the board by pressing the reset button. After Linux boots, please log in as root and create partitions on the eMMC by running the following commands.

    ``` console
    root@smarc-rzg2ul:~# fdisk /dev/mmcblk0

    Welcome to fdisk (util-linux 2.35.1).
    Changes will remain in memory only, until you decide to write them.
    Be careful before using the write command.

    Command (m for help): o
    Created a new DOS disklabel with disk identifier 0xf3d53104.

    Command (m for help): n
    Partition type
       p   primary partition (1-4)
       e   extended
    p

    Partition number (1-4): 1
    FFirst sector (32-124321791, default 32): 32
    Last sector or +size{,K,M,G,T} (32-124321791, default 124321791): +500M

    Command (m for help): n
    Partition type
       p   primary partition (1-4)
       e   extended
    p

    Partition number (1-4): 2
    First sector (1024032-124321791, default 1024032): 1024032
    Last sector or +size{,K,M,G,T} (1024032-124321791, default 124321791): 124321791

    Command (m for help): p
    Disk /dev/mmcblk0: 59 GB, 63652757504 bytes, 124321792 sectors
    971264 cylinders, 4 heads, 32 sectors/track
    Units: sectors of 1 * 512 = 512 bytes

    Device       Boot StartCHS    EndCHS        StartLBA     EndLBA    Sectors  Size Id Type
    /dev/mmcblk0p1    0,1,1       1023,3,32           32    1024031    1024000  500M 83 Linux
    /dev/mmcblk0p2    1023,3,32   1023,3,32      1024032  124321791  123297760 58.7G 83 Linux

    Command (m for help): w
    The partition table has been altered.
    Calling ioctl() to re-read partition table.

    root@smarc-rzg2ul:~#
    ```

    Format eMMC.

    ```bash
    mkfs.ext4 /dev/mmcblk0p1
    mkfs.ext4 /dev/mmcblk0p2
    ```
    {: .hash }

    Format the eMMC and write the kernel, device tree, and rootfs.

    !!! note
        Where `#!bash <image name>` is one of the following:

        * `#!bash core-image-minimal`

    ```bash
    mount /dev/mmcblk0p1 /mnt/
    cp Image-smarc-rzg2ul.bin /mnt/
    cp r9a07g043u11-smarc.dtb /mnt/
    umount /dev/mmcblk0p1
    mount /dev/mmcblk0p2 /mnt/
    tar xf /root/<image name>-smarc-rzg2ul.rootfs.tar.bz2 -C /mnt/
    umount /dev/mmcblk0p2
    ```
    {: .hash }

=== "RZ/G3S"

    To set the board to eMMC Boot mode, set the SW_MODE as below:

    !!! content-wrapper no-indent table-no-sort table-no-hover ""

        ![](images/smarc-rzg3s-board-SWMODE_eMMC.JPG){ align=left .switch-icon }

        |   SW_MODE[1]   |   SW_MODE[2]   |   SW_MODE[3]   |   SW_MODE[4]   |
        |:--------------:|:--------------:|:--------------:|:--------------:|
        | ON {: .green } |  OFF {: .red}  |  OFF {: .red}  | ON {: .green } |



    Turn on the board by pressing the reset button. After Linux boots, please log in as root and create partitions on the eMMC by running the following commands.

    ``` console
    root@smarc-rzg3s:~# fdisk /dev/mmcblk0

    Welcome to fdisk (util-linux 2.35.1).
    Changes will remain in memory only, until you decide to write them.
    Be careful before using the write command.

    Command (m for help): o
    Created a new DOS disklabel with disk identifier 0xf3d53104.

    Command (m for help): n
    Partition type
       p   primary partition (1-4)
       e   extended
    p

    Partition number (1-4): 1
    First sector (16-124321791, default 16): 16
    Last sector or +size{,K,M,G,T} (16-124321791, default 124321791): +500M

    Command (m for help): n
    Partition type
       p   primary partition (1-4)
       e   extended
    p

    Partition number (1-4): 2
    First sector (1024016-124321791, default 1024016):1024016
    Last sector or +size{,K,M,G,T} (1024016-124321791, default 124321791): 124321791

    Command (m for help): p
    Disk /dev/mmcblk0: 59 GB, 63652757504 bytes, 124321792 sectors
    1942528 cylinders, 4 heads, 16 sectors/track
    Units: sectors of 1 * 512 = 512 bytes

    Device       Boot StartCHS    EndCHS        StartLBA     EndLBA    Sectors  Size Id Type
    /dev/mmcblk0p1    0,1,1       1023,3,16           16    1024015    1024000  500M 83 Linux
    /dev/mmcblk0p2    1023,3,16   1023,3,16      1024016  124321791  123297776 58.7G 83 Linux

    Command (m for help): w
    The partition table has been altered.
    Calling ioctl() to re-read partition table.

    root@smarc-rzg3s:~#
    ```

    Format eMMC.

    ```bash
    mkfs.ext4 /dev/mmcblk0p1
    mkfs.ext4 /dev/mmcblk0p2
    ```
    {: .hash }

    Format the eMMC and write the kernel, device tree, and rootfs.

    !!! note
        Where `#!bash <image name>` is one of the following:

        * `#!bash core-image-minimal`

    ```bash
    mount /dev/mmcblk0p2 /mnt/
    tar xf /root/<image name>-smarc-rzg3s.rootfs.tar.bz2 -C /mnt/
    umount /dev/mmcblk0p2
    ```
    {: .hash }

### Setting U-boot for eMMC boot

=== "RZ/G2L"
    Reset the board by pressing the reset button and interrupt the boot process by pressing the Enter key.

    ``` console
    U-Boot 2024.07 (Sep 12 2025 - 16:08:34 +0000)

    CPU:   Renesas Electronics CPU rev 1.0
    Model: smarc-rzg2l
    DRAM:  1.9 GiB
    SF: Detected mt25qu512a with page size 256 Bytes, erase size 4 KiB, total 64 MiB
    Core:  33 devices, 19 uclasses, devicetree: separate
    WDT:   watchdog@0000000012800800
    WDT:   Started watchdog@12800800 with servicing every 1000ms (60s timeout)
    MMC:   sd@11c00000: 0, sd@11c10000: 1
    Loading Environment from MMC... Reading from MMC(0)... OK
    In:    serial@1004b800
    Out:   serial@1004b800
    Err:   serial@1004b800
    WDT:   Started watchdog@12800800 with servicing every 1000ms (60s timeout)
    U-boot WDT started!
    Net:   eth0: ethernet@11c20000, eth1: ethernet@11c30000
    Hit any key to stop autoboot:  0
    =>
    ```

    Set environment variables in the u-boot environment to boot from eMMC.

    ```bash
    setenv bootargs 'root=/dev/mmcblk0p2 rootwait'
    setenv bootcmd 'mmc dev 1; ext4load mmc 0:1 0x48080000 Image-smarc-rzg2l.bin; ext4load mmc 0:1 0x48000000 r9a07g044l2-smarc.dtb; booti 0x48080000 - 0x48000000'
    saveenv
    ```
    {: .diamond2 }

    ``` console
    Saving Environment to MMC... Writing to MMC(0)….OK
    ```

    Please reset the board again for eMMC boot.

=== "RZ/G2LC"
    Reset the board by pressing the reset button and interrupt the boot process by pressing the Enter key.

    ``` console
    U-Boot 2024.07 (Sep 12 2025 - 16:08:34 +0000)

    CPU:   Renesas Electronics CPU rev 1.0
    Model: smarc-rzg2lc
    DRAM:  896 MiB
    SF: Detected mt25qu512a with page size 256 Bytes, erase size 4 KiB, total 64 MiB
    Core:  29 devices, 19 uclasses, devicetree: separate
    WDT:   watchdog@0000000012800800
    WDT:   Started watchdog@12800800 with servicing every 1000ms (60s timeout)
    MMC:   sd@11c00000: 0, sd@11c10000: 1
    Loading Environment from MMC... Reading from MMC(0)... OK
    In:    serial@1004b800
    Out:   serial@1004b800
    Err:   serial@1004b800
    WDT:   Started watchdog@12800800 with servicing every 1000ms (60s timeout)
    U-boot WDT started!
    Net:   eth0: ethernet@11c20000
    Hit any key to stop autoboot:  0
    =>
    ```

    Set environment variables in the u-boot environment to boot from eMMC.

    ```bash
    setenv bootargs 'root=/dev/mmcblk0p2 rootwait'
    setenv bootcmd 'mmc dev 1; ext4load mmc 0:1 0x48080000 Image-smarc-rzg2lc.bin; ext4load mmc 0:1 0x48000000 r9a07g044c2-smarc.dtb; booti 0x48080000 - 0x48000000'
    saveenv
    ```
    {: .diamond2 }

    ``` console
    Saving Environment to MMC... Writing to MMC(0)….OK
    ```

    Please reset the board again for eMMC boot.

=== "RZ/G2UL"
    Reset the board by pressing the reset button and interrupt the boot process by pressing the Enter key.

    ``` console
    U-Boot 2024.07 (Sep 12 2025 - 16:08:34 +0000)

    CPU:   Renesas Electronics CPU rev 1.0
    Model: smarc-rzg2ul
    DRAM:  896 MiB
    SW_ET0_EN: ON
    Core:  30 devices, 20 uclasses, devicetree: separate
    WDT:   watchdog@0000000012800800
    WDT:   Started watchdog@12800800 with servicing every 1000ms (60s timeout)
    MMC:   sd@11c00000: 0, sd@11c10000: 1
    Loading Environment from MMC... Reading from MMC(0)... OK
    In:    serial@1004b800
    Out:   serial@1004b800
    Err:   serial@1004b800
    WDT:   Started watchdog@12800800 with servicing every 1000ms (60s timeout)
    U-boot WDT started!
    Net:   eth0: ethernet@11c30000
    Hit any key to stop autoboot:  0
    =>
    ```

    Set environment variables in the u-boot environment to boot from eMMC.

    ```bash
    setenv bootargs 'root=/dev/mmcblk0p2 rootwait'
    setenv bootcmd 'mmc dev 1; ext4load mmc 0:1 0x48080000 Image-smarc-rzg2ul.bin; ext4load mmc 0:1 0x48000000 r9a07g043u11-smarc.dtb; booti 0x48080000 - 0x48000000'
    saveenv
    ```
    {: .diamond2 }

    ``` console
    Saving Environment to MMC... Writing to MMC(0)….OK
    ```

    Please reset the board again for eMMC boot.

=== "RZ/G3S"
    Reset the board by pressing the reset button and interrupt the boot process by pressing the Enter key.

    ``` console
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
    =>
    ```

    Set environment variables in the u-boot environment to boot from eMMC.

    ```bash
    env default -a
    saveenv
    ```
    {: .diamond2 }

    ``` console
    Saving Environment to MMC... Writing to MMC(0)….OK
    ```

    Please reset the board again for eMMC boot.
