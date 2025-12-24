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

4.  Clone Yocto recipe package

    Create a working directory, and clone Yocto recipe package.

    ```bash
    mkdir ${WORK}
    cd ${WORK}
    ```
    {: .dollar }

    ```bash
    git clone https://github.com/renesas-rz/meta-renesas
    cd meta-renesas
    git checkout -b tmp BSP-PLUS-K6.12-V3.0
    cd ../
    kas checkout meta-renesas/kas/base.yml
    ```
    {: .dollar }

5.  Initialize build environment

    Run an environment setup script as follows.

    ```bash
    cd ${WORK}
    TEMPLATECONF=${PWD}/meta-renesas/meta-rz-distro/conf/templates/vlp-v5-conf/ source poky/oe-init-build-env build
    ```
    {: .dollar }

6.  Install ethtool command

    "ethtool" command is a command for configuring network interfaces. If you want to install the ethtool command on Linux, modify local.conf by the following instruction.

    === "Yocto 5.0 (Scarthgap)"

        ```bash
        cd ${WORK}/build
        echo 'IMAGE_INSTALL:append = " ethtool"' >> conf/local.conf
        ```
        {: .dollar }

7.  Build images

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
                |        | Flash Writer     | * `#!bash HDR_NM`                                             |
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
                |        | Flash Writer     | * `#!bash HDR_NM`                                             |
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
