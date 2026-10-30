## Step 1: Build Renesas RZ Linux BSP Plus source code

This step explains how to build Linux environment with Renesas RZ Linux BSP Plus source code.

!!! note
    In the following instructions, text in angle brackets should be replaced
    with a character string that depends on your environment.

    The brackets `<` and `>` are unnecessary in the text.


1.  Install the required packages

    Install some packages into your Linux PC, which are necessary in the following steps.

    ```bash
    sudo apt-get update
    sudo apt install build-essential chrpath cpio debianutils diffstat file gawk gcc git iputils-ping libacl1 liblz4-tool locales python3 python3-git python3-jinja2 python3-pexpect python3-pip python3-subunit socat texinfo unzip wget xz-utils zstd bmap-tools
    pip3 install --user kas

    ```
    {: .dollar }

2.  Set up your `#!bash git` environment

    Set up your `#!bash git` environment if you have never done it.

    ```bash
    git config --global user.email "<Your email address>"
    git config --global user.name "<Your user name>"
    ```
    {: .dollar }

    !!! note
        For more information, refer to [Yocto Project Quick Build](https://docs.yoctoproject.org/3.1.26/brief-yoctoprojectqs/brief-yoctoprojectqs.html){: target=_blank }.

3.  Set environment variables

    Set the following environment variables.

    === "RZ/T2H"

        ```bash
        export WORK=<A directory path for building>
        export BOARD=rzt2h-dev
        ```
        {: .dollar }

    === "RZ/N2H"

        ```bash
        export WORK=<A directory path for building>
        export BOARD=rzn2h-dev
        ```
        {: .dollar }

    === "RZ/T2N"

        ```bash
        export WORK=<A directory path for building>
        export BOARD=rzt2n-dev
        ```
        {: .dollar }

4.  Clone Yocto recipe package

    Create a working directory, and clone Yocto recipe package.

    ```bash
    mkdir ${WORK}
    cd ${WORK}
    ```
    {: .dollar }

    === "RZ/T2H"

        ```bash
        git clone https://github.com/renesas-rz/meta-renesas
        cd meta-renesas
        git checkout -b tmp BSP-PLUS-K6.12-V3.0
        cd ../
        kas checkout meta-renesas/kas/base.yml
        ```
        {: .dollar }

    === "RZ/N2H"

        ```bash
        git clone https://github.com/renesas-rz/meta-renesas
        cd meta-renesas
        git checkout -b tmp BSP-PLUS-K6.12-V3.0
        cd ../
        kas checkout meta-renesas/kas/base.yml
        ```
        {: .dollar }

    === "RZ/T2N"

        ```bash
        git clone https://git.yoctoproject.org/git/poky
        cd poky
        git checkout -b tmp 7e8674996b0164b07e56bc066d0fba790e627061
        git cherry-pick 80593d0ce1 e6cbef9080 e380eea705 bf7d623729 3bcac51eb2 fb693aab03
        cd ${WORK}
        ```
        {: .dollar }

        ```bash
        git clone https://git.yoctoproject.org/meta-arm
        cd meta-arm
        git checkout -b tmp 8e0f8af90fefb03f08cd2228cde7a89902a6b37c
        cd ${WORK}
        ```
        {: .dollar }

        ```bash
        git clone https://git.openembedded.org/meta-openembedded
        cd meta-openembedded
        git checkout -b tmp 89a01c3d9ad1f8fce6aeb4dd0e694cfa28d42099
        cd ${WORK}
        ```
        {: .dollar }

        ```bash
        git clone https://github.com/renesas-rz/meta-renesas
        cd meta-renesas
        git checkout -b tmp RZT2N-BSP-1.0.0-RC2
        cd ${WORK}
        ```
        {: .dollar }

        !!! danger "Caution"

            Optional fix for the USB2 PHY driver issue.  
            If you need to work around this issue, please refer to the following procedure to rebuild the environment and apply the fix.  

            ```bash
            cd ${WORK}/meta-renesas
            git cherry-pick 3a0ace60e
            cd ${WORK}
            ```
            {: .dollar}

            Please note that the following packages are not compatible with this procedure.

            * Industrial Network Package 
            * Time Sensitive Network Package

5.  Initialize build environment

    Run an environment setup script as follows.

    ```bash
    cd ${WORK}
    TEMPLATECONF=${PWD}/meta-renesas/meta-rz-distro/conf/templates/vlp-v5-conf/ source poky/oe-init-build-env build
    ```
    {: .dollar }

6.  Enable the command for writing a boot image to eMMC

    If you need to create the filesystem for the block devices on the evaluation board,
    please add `#!bash bmaptool` command sets to root filesystem by local.conf.

    !!! danger "Caution"
        If eMMC boot is required, this step is mandatory.

    ```bash
    cd ${WORK}/build
    echo 'IMAGE_INSTALL:append = " bmaptool"'>> conf/local.conf
    ```
    {: .dollar }

7.  Enable Real-time Linux kernel (optional)


    If you need to build a Real-time Linux kernel,
    please configure the build to use the RT kernel recipe.

    === "RZ/T2H"

        ```bash
        cd ${WORK}/build
        echo 'PREFERRED_PROVIDER_virtual/kernel = "linux-renesas-rt"'>> conf/local.conf
        echo 'PREFERRED_VERSION_linux-renesas-rt = "6.12%"'>> conf/local.conf
        ```
        {: .dollar }

    === "RZ/N2H"

        ```bash
        cd ${WORK}/build
        echo 'PREFERRED_PROVIDER_virtual/kernel = "linux-renesas-rt"'>> conf/local.conf
        echo 'PREFERRED_VERSION_linux-renesas-rt = "6.12%"'>> conf/local.conf
        ```
        {: .dollar }

    === "RZ/T2N"

        ```bash
        cd ${WORK}/build
        echo 'PREFERRED_PROVIDER_virtual/kernel = "linux-renesas-rt"'>> conf/local.conf
        echo 'PREFERRED_VERSION_linux-renesas-rt = "6.12%"'>> conf/local.conf
        ```
        {: .dollar }

8.  Build images

    Run `#!bash bitbake` command to build images.

    === "RZ/T2H"

        ```bash
        cd ${WORK}/build
        MACHINE=${BOARD} bitbake core-image-minimal
        ```
        {: .dollar }

        !!! note
            After building images, you can find them in the following directories.

            * Images: `#!bash ${WORK}/build/tmp/deploy/images/${BOARD}/`

            !!! content-wrapper no-indent table-no-sort table-no-hover ""

                +--------+------------------+---------------------------------------------------------------+
                | Device | Category         | File name                                                     |
                +========+==================+===============================================================+
                | RZ/T2H | Linux kernel     | `#!bash Image-rzt2h-dev.bin`                                  |
                |        +------------------+---------------------------------------------------------------+
                |        | Device tree file | `#!bash r9a09g077m44-dev.dtb`                                 |
                |        +------------------+---------------------------------------------------------------+
                |        | Root filesystem  | `#!bash core-image-minimal-rzt2h-dev.rootfs.tar.bz2`          |
                |        +------------------+---------------------------------------------------------------+
                |        | Boot loader      | * `#!bash bl2_bp_esd-rzt2h-dev.bin`                           |
                |        |                  | * `#!bash bl2_bp_emmc-rzt2h-dev.srec`                         |
                |        |                  | * `#!bash bl2_bp_xspi0-rzt2h-dev.srec`                        |
                |        |                  | * `#!bash fip-rzt2h-dev.srec`                                 |
                |        +------------------+---------------------------------------------------------------+
                |        | Flash Programmer | * `#!bash HDR NM`                                             |
                |        |                  | * `#!bash Flash_Programmer_SCIF_CR52_RZT2H_EVK.mot`           |
                |        +------------------+---------------------------------------------------------------+
                |        | SD image (wic)   | * `#!bash core-image-minimal-rzt2h-dev.rootfs.wic.gz`         |
                |        |                  | * `#!bash core-image-minimal-rzt2h-dev.rootfs.wic.bmap`       |
                +--------+------------------+---------------------------------------------------------------+

        !!! note
            If you need to create an SDK toolchain, run `#!bash bitbake`
            command as follows.

            ```bash
            cd ${WORK}/build
            MACHINE=${BOARD} bitbake core-image-minimal -c populate_sdk
            ```
            {: .dollar }

            After building SDK toolchain, you can find them in the following directory.
            ```bash
            ${WORK}/build/tmp/deploy/sdk/
            ```
            {: .dollar }

    === "RZ/N2H"

        ```bash
        cd ${WORK}/build
        MACHINE=${BOARD} bitbake core-image-minimal
        ```
        {: .dollar }

        !!! note
            After building images, you can find them in the following directories.

            * Images: `#!bash ${WORK}/build/tmp/deploy/images/${BOARD}/`

            !!! content-wrapper no-indent table-no-sort table-no-hover ""

                +--------+------------------+---------------------------------------------------------------+
                | Device | Category         | File name                                                     |
                +========+==================+===============================================================+
                | RZ/N2H | Linux kernel     | `#!bash Image-rzn2h-dev.bin`                                  |
                |        +------------------+---------------------------------------------------------------+
                |        | Device tree file | `#!bash r9a09g087m44-dev.dtb`                                 |
                |        +------------------+---------------------------------------------------------------+
                |        | Root filesystem  | `#!bash core-image-minimal-rzn2h-dev.rootfs.tar.bz2`          |
                |        +------------------+---------------------------------------------------------------+
                |        | Boot loader      | * `#!bash bl2_bp_esd-rzn2h-dev.bin`                           |
                |        |                  | * `#!bash bl2_bp_emmc-rzn2h-dev.srec`                         |
                |        |                  | * `#!bash bl2_bp_xspi0-rzn2h-dev.srec`                        |
                |        |                  | * `#!bash fip-rzn2h-dev.srec`                                 |
                |        +------------------+---------------------------------------------------------------+
                |        | Flash Programmer | * `#!bash HDR NM`                                             |
                |        |                  | * `#!bash Flash_Programmer_SCIF_CR52_RZT2H_EVK.mot`           |
                |        +------------------+---------------------------------------------------------------+
                |        | SD image (wic)   | * `#!bash core-image-minimal-rzn2h-dev.rootfs.wic.gz`         |
                |        |                  | * `#!bash core-image-minimal-rzn2h-dev.rootfs.wic.bmap`       |
                +--------+------------------+---------------------------------------------------------------+

        !!! note
            If you need to create an SDK toolchain, run `#!bash bitbake`
            command as follows.

            ```bash
            cd ${WORK}/build
            MACHINE=${BOARD} bitbake core-image-minimal -c populate_sdk
            ```
            {: .dollar }

            After building SDK toolchain, you can find them in the following directory.
            ```bash
            ${WORK}/build/tmp/deploy/sdk/
            ```
            {: .dollar }

    === "RZ/T2N"

        ```bash
        cd ${WORK}/build
        MACHINE=${BOARD} bitbake core-image-minimal
        ```
        {: .dollar }

        !!! note
            After building images, you can find them in the following directories.

            * Images: `#!bash ${WORK}/build/tmp/deploy/images/${BOARD}/`

            !!! content-wrapper no-indent table-no-sort table-no-hover ""

                +--------+------------------+---------------------------------------------------------------+
                | Device | Category         | File name                                                     |
                +========+==================+===============================================================+
                | RZ/T2N | Linux kernel     | `#!bash Image-rzt2n-dev.bin`                                  |
                |        +------------------+---------------------------------------------------------------+
                |        | Device tree file | `#!bash r9a07g076-dev.dtb`                                    |
                |        +------------------+---------------------------------------------------------------+
                |        | Root filesystem  | `#!bash core-image-minimal-rzt2n-dev.rootfs.tar.bz2`          |
                |        +------------------+---------------------------------------------------------------+
                |        | Boot loader      | * `#!bash bl2_bp_esd-rzt2n-dev.bin`                           |
                |        |                  | * `#!bash bl2_bp_emmc-rzt2n-dev.srec`                         |
                |        |                  | * `#!bash bl2_bp_xspi0-rzt2n-dev.srec`                        |
                |        |                  | * `#!bash fip-rzt2n-dev.srec`                                 |
                |        +------------------+---------------------------------------------------------------+
                |        | Flash Programmer | * `#!bash HDR NM`                                             |
                |        |                  | * `#!bash Flash_Programmer_SCIF_CR52_RZT2N_EVK.mot`           |
                |        +------------------+---------------------------------------------------------------+
                |        | SD image (wic)   | * `#!bash core-image-minimal-rzt2n-dev.rootfs.wic.gz`         |
                |        |                  | * `#!bash core-image-minimal-rzt2n-dev.rootfs.wic.bmap`       |
                +--------+------------------+---------------------------------------------------------------+

        !!! note
            If you need to create an SDK toolchain, run `#!bash bitbake`
            command as follows.

            ```bash
            cd ${WORK}/build
            MACHINE=${BOARD} bitbake core-image-minimal -c populate_sdk
            ```
            {: .dollar }

            After building SDK toolchain, you can find them in the following directory.
            ```bash
            ${WORK}/build/tmp/deploy/sdk/
            ```
            {: .dollar }

        !!! note
            Refer to the [RZ/T2N Group DDR Design Contents](https://www.renesas.com/document/gde/rzt2n-group-ddr-design-contents) available on the Renesas website. Follow the accompanying guide to generate an ECC-enabled DDR memory initialization parameter file, and integrate the generated file into the build environment.

        !!! note
            If you need the Flash Programmer source code, please download and use it from the link below.  
            [RZ MPU Flash Programmer Source Code](https://www.renesas.com/document/sws/rz-mpu-flash-programmer-v120)
