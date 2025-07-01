## How to boot from eMMC

In this section, the steps to boot from eMMC are described.

### Writing Bootloader for eMMC Boot

For the boot operation, `#!bash EXT_CSD` registers of eMMC need to be modified and two boot loader files need to be written to the target board.

After booting the `#!bash Flash Writer`, `#!bash EM_SECSD` command of Flash Writer is used to modify `#!bash EXT_CSD` register of eMMC to enable eMMC boot.

Then, `#!bash EM_W` command of Flash Writer is used to write boot loader binary files. This command receives binary data from the serial port and writes the data to a specified address of the eMMC with information where the data should be loaded on the address of the main memory.

=== "RZ/G2L"

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

    Send the data of `#!bash bl2_bp_smmc-smarc-rzg2l_pmic.srec` from terminal software after the message **please send !** is shown.

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

### Create a microSD card to boot Linux for eMMC boot

Please create a microSD card (see [Step 4: Deploy Renesas RZ Linux BSP Plus](../getting_started/index.md#step-4-deploy-renesas-rz-linux-bsp-plus)).

After that, please return to the following instructions before unmounting the micro SD card.

Copy the kernel image, device tree file, and rootfs to the second partition of the microSD card.

```bash
cd /media/user/rootfs/home/root/
sudo cp ${WORK}/build/tmp/deploy/images/${BOARD}/<Linux kernel> ./
sudo cp ${WORK}/build/tmp/deploy/images/${BOARD}/<Devise tree> ./
sudo cp ${WORK}/build/tmp/deploy/images/${BOARD}/<root filesystem> ./
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

    Then, set the SW1 on SOM module to eMMC mode.

    !!! content-wrapper no-indent table-no-sort table-no-hover ""

        ![](images/smarc-rzg2l-board-SW1_eMMC.png){ align=left .switch-icon }

        |      SW1-1     |      SW1-2     |
        |:--------------:|:--------------:|
        | ON {: .green } |  OFF {: .red}  |

    Turn on the board by pressing the reset button SW10. After Linux boots, please log in as root and create partitions on the eMMC by running the following commands.

    ``` console
    root@smarc-rzg2l:~# fdisk /dev/mmcblk0

    Welcome to fdisk (util-linux 2.35.1).
    Changes will remain in memory only, until you decide to write them.
    Be careful before using the write command.

    Command (m for help): o
    Created a new DOS disklabel with disk identifier 0xf3d53104.

    Command (m for help): n
    Partition type
       p   primary (0 primary, 0 extended, 4 free)
       e   extended (container for logical partitions)
    Select (default p): (Push the enter key)
    Partition number (1-4, default 1): (Push the enter key)
    First sector (2048-124321791, default 2048): (Push the enter key)
    Last sector, +/-sectors or +/-size{K,M,G,T,P} (2048-124321791, default 124321791): +500M

    Created a new partition 1 of type 'Linux' and of size 500 MiB.

    Command (m for help): n
    Partition type
       p   primary (1 primary, 0 extended, 3 free)
       e   extended (container for logical partitions)
    Select (default p): (Push the enter key)

    Using default response p.
    Partition number (2-4, default 2): (Push the enter key)
    First sector (1026048-124321791, default 1026048): (Push the enter key)
    Last sector, +/-sectors or +/-size{K,M,G,T,P} (1026048-124321791, default 124321791): (Push the enter key)

    Created a new partition 2 of type 'Linux' and of size 58.8 GiB.

    Command (m for help): p
    Disk /dev/mmcblk0: 59.29 GiB, 63652757504 bytes, 124321792 sectors
    Units: sectors of 1 * 512 = 512 bytes
    Sector size (logical/physical): 512 bytes / 512 bytes
    I/O size (minimum/optimal): 512 bytes / 512 bytes
    Disklabel type: dos
    Disk identifier: 0xf3d53104

    Device         Boot   Start       End   Sectors  Size Id Type
    /dev/mmcblk0p1         2048   1026047   1024000  500M 83 Linux
    /dev/mmcblk0p2      1026048 124321791 123295744 58.8G 83 Linux

    Command (m for help): w
    The partition table has been altered.
    Calling ioctl() to re-read partition table.
    Syncing disks.

    root@smarc-rzg2l:~#
    ```

    Format eMMC.

    ```bash
    mkfs.ext4 /dev/mmcblk0p1
    mkfs.ext4 /dev/mmcblk0p2
    ```
    {: .hash }

    Format the eMMC and write the kernel, device tree, and rootfs.

    ```bash
    mount /dev/mmcblk0p1 /mnt/
    cp Image-smarc-rzg2l.bin /mnt/
    cp r9a07g044l2-smarc.dtb /mnt/
    umount /dev/mmcblk0p1
    mount /dev/mmcblk0p2 /mnt/
    tar xf /home/root/core-image-weston-smarc-rzg2l.tar.bz2 -C /mnt/
    umount /dev/mmcblk0p2
    ```
    {: .hash }

### Setting U-boot for eMMC boot

=== "RZ/G2L"

    Reset the board by pressing the reset button SW10 and interrupt the boot process by pressing the Enter key.

    ``` console
    U-Boot 2021.10 (Apr 22 2022 - 03:04:59 +0000)

    CPU:   Renesas Electronics K rev 16.15
    Model: smarc-rzg2l
    DRAM:  1.9 GiB
    MMC:   sd@11c00000: 0, sd@11c10000: 1
    Loading Environment from MMC... OK
    In:    serial@1004b800
    Out:   serial@1004b800
    Err:   serial@1004b800
    Net:   eth0: ethernet@11c20000
    Hit any key to stop autoboot:  0
    =>
    ```

    Set environment variables in the u-boot environment to boot from eMMC.
    When using other boards, please replace the file names in `#!bash bootcmd` and set the IP address of your Linux host PC.

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
