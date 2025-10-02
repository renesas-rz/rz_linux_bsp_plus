## Step 4: Deploy Renesas RZ Linux BSP Plus

You can prepare the microSD card by the following method. Please select one of them and follow the steps.

Below steps are for `#!bash wic` image.

###  1. In case of Windows PC

1.  Download or copy the release package into your PC
2.  Unzip the release package and extract an image file
3.  Write the image file to your micro SD card by using one of the following tool
	*   [Win32 Disk Imager](https://sourceforge.net/projects/win32diskimager/){: target=_blank }
	*   [balenaEtcher](https://etcher.balena.io/){: target=_blank }

    === "RZ/G2L"

        Image file is:

        * `#!bash <image name>-smarc-rzg2l.rootfs.wic.gz`

        !!! note
            Where `#!bash <image name>` is one of the following:

            * `#!bash core-image-minimal`
            * `#!bash core-image-weston`

        !!! danger "Caution"
            Even if you see a message such as `#!bash you need to format the disk` before/after writing the image, do not format the SD card.

    === "RZ/G2LC"

        Image file is:

        * `#!bash <image name>-smarc-rzg2lc.rootfs.wic.gz`

        !!! note
            Where `#!bash <image name>` is one of the following:

            * `#!bash core-image-minimal`
            * `#!bash core-image-weston`

        !!! danger "Caution"
            Even if you see a message such as `#!bash you need to format the disk` before/after writing the image, do not format the SD card.

    === "RZ/G2UL"

        Image file is:

        * `#!bash <image name>-smarc-rzg2ul.rootfs.wic.gz`

        !!! note
            Where `#!bash <image name>` is one of the following:

            * `#!bash core-image-minimal`

        !!! danger "Caution"
            Even if you see a message such as `#!bash you need to format the disk` before/after writing the image, do not format the SD card.

    === "RZ/G3S"

        Image file is:

        * `#!bash <image name>-smarc-rzg3s.rootfs.wic.gz`

        !!! note
            Where `#!bash <image name>` is one of the following:

            * `#!bash core-image-minimal`

        !!! danger "Caution"
            Even if you see a message such as `#!bash you need to format the disk` before/after writing the image, do not format the SD card.

### 2. In case of Linux PC (Ubuntu)

1.  Download or copy the release package into your PC
2.  Unzip the release package and extract an image file
3.  Insert the micro SD Card into your Linux PC and find the device name of the SD card

    Use `#!bash lsblk` command to check the device name as follows.

	*   Before inserting the SD card

    	```bash
    	lsblk
        ```
        {: .dollar }

        ```bash
    	NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
    		(snip)
    	nvme0n1     259:0    0 465.8G  0 disk
    	├─nvme0n1p1 259:1    0   512M  0 part /boot/efi
    	└─nvme0n1p2 259:2    0 465.3G  0 part /
    	```

	*   After inserting the SD card

    	```bash
    	lsblk
        ```
        {: .dollar }

        ```bash
    	NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
    		(snip)
    	nvme0n1     259:0    0 465.8G  0 disk
    	├─nvme0n1p1 259:1    0   512M  0 part /boot/efi
    	└─nvme0n1p2 259:2    0 465.3G  0 part /
    	sda           8:0    1  14.5G  0 disk
    	├─sda1        8:1    1   500M  0 part /media/user/boot
    	└─sda2        8:2    1   3.4G  0 part /media/user/rootfs
    	```

    !!! note
	    The device name is assigned to the SD card by Linux on your Host PC.
        It may be named `#!bash /dev/sd*` (`#!bash *` is a letter representing
        the physical drive). It is `#!bash /dev/sda` in this sample.

4.  Unmount the SD card if it is mounted

    Use `#!bash umount` command with mount points that are displayed when you executed `#!bash lsblk` command. For example:

	```bash
	umount /media/user/boot
	umount /media/user/rootfs
	```
    {: .dollar }

5.  Write the image to the SD card

    Use `#!bash bmaptool` command with device name of SD card is displayed when you executed `#!bash lsblk` command. For example:

    ```bash
    sudo bmaptool copy <wic image>.wic.gz /dev/sda
    ```
    {: .dollar }

    === "RZ/G2L"

        Image file is:

        * `#!bash <image name>-smarc-rzg2l.rootfs.wic.gz`

        !!! note
            Additionally, the file below is also required:

            * `#!bash <image name>-smarc-rzg2l.rootfs.wic.bmap`

        !!! note
            Where `#!bash <image name>` is one of the following:

            * `#!bash core-image-minimal`
            * `#!bash core-image-weston`

    === "RZ/G2LC"

        Image file is:

        * `#!bash <image name>-smarc-rzg2lc.rootfs.wic.gz`

        !!! note
            Additionally, the file below is also required:

            * `#!bash <image name>-smarc-rzg2lc.rootfs.wic.bmap`

        !!! note
            Where `#!bash <image name>` is one of the following:

            * `#!bash core-image-minimal`
            * `#!bash core-image-weston`

    === "RZ/G2UL"

        Image file is:

        * `#!bash <image name>-smarc-rzg2ul.rootfs.wic.gz`

        !!! note
            Additionally, the file below is also required:

            * `#!bash <image name>-smarc-rzg2ul.rootfs.wic.bmap`

        !!! note
            Where `#!bash <image name>` is one of the following:

            * `#!bash core-image-minimal`

    === "RZ/G3S"

        Image file is:

        * `#!bash <image name>-smarc-rzg3s.rootfs.wic.gz`

        !!! note
            Additionally, the file below is also required:

            * `#!bash <image name>-smarc-rzg3s.rootfs.wic.bmap`

        !!! note
            Where `#!bash <image name>` is one of the following:

            * `#!bash core-image-minimal`
