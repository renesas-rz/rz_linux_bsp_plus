## Step 2: Build Renesas RZ Linux BSP Plus source code

This step explains how to build Linux environment with Renesas RZ Linux BSP Plus source code.

!!! note
    In the following instructions, text in angle brackets should be replaced
    with a character string that depends on your environment.

    The brackets `<` and `>` are unnecessary in the text.


1.  Install the required packages

    Install some packages into your Linux PC, which are necessary in the following steps.

    ```bash
    sudo apt-get update
    sudo apt-get install gawk wget git-core diffstat unzip texinfo gcc-multilib build-essential chrpath socat cpio python python3 python3-pip python3-pexpect xz-utils debianutils iputils-ping libsdl1.2-dev xterm p7zip-full libyaml-dev libssl-dev bmap-tools

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

    === "RZ/G2L"

        ```bash
        export WORK=<A directory path for building>
        export BOARD=smarc-rzg2l
        ```
        {: .dollar }

4.  Clone Yocto recipe package

    Create a working directory, and clone Yocto recipe package.

    === "RZ/G2L"

        ```bash
        mkdir ${WORK}
        cd ${WORK}
        ```
        {: .dollar }

        ```bash
        git clone https://git.yoctoproject.org/git/poky
        cd poky
        git checkout -b tmp dc4827b3660bc1a03a2bc3b0672615b50e9137ff
        cd ${WORK}
        ```
        {: .dollar }

        ```bash
        git clone https://git.yoctoproject.org/meta-arm
        cd meta-arm
        git checkout -b tmp 950a4afce46a359def2958bd9ae33fc08ff9bb0d
        cd ${WORK}
        ```
        {: .dollar }

        ```bash
        git clone https://git.openembedded.org/meta-openembedded
        cd meta-openembedded
        git checkout -b tmp  67ad83dd7c2485dae0c90eac345007af6195b84d
        cd ${WORK}
        ```
        {: .dollar }

        ```bash
        git clone https://github.com/renesas-rz/meta-renesas
        cd meta-renesas
        git checkout -b tmp a50fccc0d577195ea258e7557d8fa01bad176c23
        cd ${WORK}
        ```
        {: .dollar }

5.  Enable Graphics and Video Codec

    The graphics package and the video codec package can be used at the same time, or just one of the packages can be used individually.

    !!! note
        You need to download Graphics and Video Codec packages for this steps.

        See [Step 1: Obtain Renesas RZ Linux BSP Plus source code](#step-1-obtain-renesas-rz-linux-bsp-plus-source-code).

    === "RZ/G2L"

        Graphics package is **RTK0EF0045Z14001ZJ-*.zip**.

        Video Codec package is **RTK0EF0045Z16002ZJ_*.zip**.

        - Graphics package

            !!! note
                If you want to enable the Graphics on RZ/G2L when building `#!bash core-image-weston`,
                please copy the Graphics package to working directory and run the commands below.

                If you build `#!bash core-image-minimal`, please ignore this step.

            After copying the Graphics package, please extract the package as below.

            ```bash
            cd ${WORK}
            unzip ./RTK0EF0045Z14001ZJ-*.zip
            tar zxvf ./RTK0EF0045Z14001ZJ-*/meta-rz-features_graphics_*.tar.gz
            ```
            {: .dollar }

        - Video Codec package

            After copying the Video Codec package, please extract the package as below.

            ```bash
            cd ${WORK}
            unzip ./RTK0EF0045Z16002ZJ-*.zip
            tar zxvf ./RTK0EF0045Z16002ZJ-*/meta-rz-features_codecs_*.tar.gz
            ```
            {: .dollar }

6.  Initialize build environment

    Run an environment setup script as follows.

    ```bash
    cd ${WORK}
    TEMPLATECONF=${PWD}/meta-renesas/meta-rz-distro/conf/templates/rz-bsp-plus-conf/ source poky/oe-init-build-env build
    ```
    {: .dollar }

7.  Add layers

    Add necessary Yocto `#!bash meta-layers` layer as follows.

    === "RZ/G2L"

        * Graphics: Please run the command below if you need the Graphics library.

            ```bash
            cd ${WORK}/build
            bitbake-layers add-layer ../meta-rz-features/meta-rz-graphics
            ```
            {: .dollar }

        * Video Codec: Please run the command below if you need the video codec library.

            ```bash
            cd ${WORK}/build
            bitbake-layers add-layer ../meta-rz-features/meta-rz-codecs
            ```
            {: .dollar }

8.  Enable `#!bash mke2fs` (Make Extended Filesystem) command sets

    If you need to create the filesystem for the block devices on the evaluation board,
    please add `#!bash mke2fs` command sets to root filesystem by local.conf.

    !!! danger "Caution"
        If eMMC boot is required, this step is mandatory.

    === "Yocto 5.0 (Scarthgap)"

        ```bash
        cd ${WORK}/build
        echo 'IMAGE_INSTALL:append = " e2fsprogs-mke2fs"'>> conf/local.conf
        ```
        {: .dollar }

9.  Build images

    Run `#!bash bitbake` command to build images.

    === "RZ/G2L"

        ```bash
        cd ${WORK}/build
        MACHINE=${BOARD} bitbake <image name>
        ```
        {: .dollar }

    !!! note
        Available build options (`#!bash <image name>`) are:

        * `#!bash core-image-minimal`
        * `#!bash core-image-weston`

    !!! note
        After building images, you can find them in the following directories.

        * Images: `#!bash ${WORK}/build/tmp/deploy/images/${BOARD}/`

        === "RZ/G2L"

            !!! content-wrapper no-indent table-no-sort table-no-hover ""

                +--------+------------------+---------------------------------------------------------------+
                | Device | Category         | File name                                                     |
                +========+==================+===============================================================+
                | RZ/G2L | Linux kernel     | `#!bash Image-smarc-rzg2l.bin`                                |
                |        +------------------+---------------------------------------------------------------+
                |        | Device tree file | `#!bash r9a07g044l2-smarc.dtb`                                |
                |        +------------------+---------------------------------------------------------------+
                |        | Root filesystem  | `#!bash <image name>-smarc-rzg2l.rootfs.tar.bz2`              |
                |        +------------------+---------------------------------------------------------------+
                |        | Boot loader      | * `#!bash bl2_bp_esd-smarc-rzg2l_pmic.bin`                    |
                |        |                  | * `#!bash bl2_bp_mmc-smarc-rzg2l_pmic.srec`                   |
                |        |                  | * `#!bash bl2_bp_spi-smarc-rzg2l_pmic.srec`                   |
                |        |                  | * `#!bash fip-smarc-rzg2l_pmic.srec`                          |
                |        +------------------+---------------------------------------------------------------+
                |        | Flash Writer     | `#!bash Flash_Writer_SCIF_RZG2L_SMARC_PMIC_DDR4_2GB_1PCS.mot` |
                |        +------------------+---------------------------------------------------------------+
                |        | SD image (wic)   | * `#!bash <image name>-smarc-rzg2l.rootfs.wic.gz`             |
                |        |                  | * `#!bash <image name>-smarc-rzg2l.rootfs.wic.bmap`           |
                +--------+------------------+---------------------------------------------------------------+
