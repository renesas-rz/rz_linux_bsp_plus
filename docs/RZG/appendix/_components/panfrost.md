## Panfrost

[Panfrost](https://docs.mesa3d.org/drivers/panfrost.html){: target=_blank } is an open-source graphics driver within the Mesa 3D Graphics Library, designed for Arm Mali GPUs. It provides hardware-accelerated 3D graphics on Linux systems.

### Renesas RZ Linux BSP Plus Panfrost Status and Implementation

The Renesas RZ Linux BSP Plus for RZ/G2L is based on the Yocto 5.0 (Scarthgap) release and utilizes the SLTS Linux kernel version 6.12 (CIP).

In its default configuration, Yocto Scarthgap includes Mesa version 24.0.7. However, Mesa 24.0.7 is considered outdated for current graphics requirements. To address this, Renesas has integrated Mesa version 25.2.8, sourced from a more recent Yocto 5.x series release, into the RZ Linux BSP Plus for RZ/G2L.

These components are open-source software (OSS) and are provided without warranty. For more information, please refer to the [Notice & Terms](https://renesas-rz.github.io/rz_solution/legal_notices/){: target=_blank } page.

#### Mesa 25.2.8

Mesa 25.2.8 is the final planned point release for the 25.2 branch, released on December 4, 2025, to provide critical bug fixes and stability improvements for graphics drivers. For devices utilizing G31 and G52 GPUs (which use the Panfrost open-source driver), this specific version acts as a maintenance update, fixing issues identified in previous 25.2.x releases.

#### Mesa 25.2.8 and Dependencies for Renesas RZ Linux BSP Plus

To support the latest stable Panfrost driver available in Mesa 25.2.8, additional packages and components are required as listed below:

!!! content-wrapper no-indent table-no-sort table-no-hover ""

    | Components | Default Version on Yocto 5.0 (Scarthgap) | Compliance Version^[1](#tf:1)^{: #tfref:1 } Available on Yocto 5.x Series |
    | ---------- | ---------------------------------------- | ------------------------------------------------------------------------- |
    | Mesa                        | 24.0.7    | 25.2.8                                 |
    | LLVM CLANG                  | 18.1.8    | `clang-layer`^[2](#tf:2)^{: #tfref:2 } |
    | Meson                       | 1.3.1     | 1.5.1                                  |
    | Wayland Protocols           | 1.33      | 1.45                                   |
    | SPIRV-Tools (SPIRV-Headers) | 1.3.275.0 | 1.4.309.0                              |
    | SPIRV-LLVM-Translator       | N/A       | `clang-layer`^[2](#tf:2)^{: #tfref:2 } |
    | `libclc`                    | N/A       | `clang-layer`^[2](#tf:2)^{: #tfref:2 } |
    | `libdrm`                    | 2.4.120   | 2.4.123                                |

    1. **Compliance Version** refers to the minimum version required to fulfill the Mesa 25.2.8 requirements. The versions listed here are sourced from different Yocto 5.x series releases. [↩](#tfref:1){: .tf-backref }
    {: #tf:1 }

    2. The `clang-layer` is required to compile Mesa 25.2.8, specifically for building `libclc`. The supported layer can be found here: [meta-clang (scarthgap-clang20)](https://github.com/kraj/meta-clang/tree/scarthgap-clang20){ target=_blank }. [↩](#tfref:2){: .tf-backref }
    {: #tf:2 }

#### How To Replace DDK with Panfrost

!!! note "Note"

    This step assumes that users have reviewed and understood all instructions provided on the [How To Build Linux BSP Plus for RZ/G](../how_to_build_linux_bsp_plus/index.md) page.

1.  Go to your work directory

    ``` bash
    cd ${WORK}
    ```
    {: .dollar .wrap }

2.  Clone `meta-clang (scarthgap-clang20)` and `meta-rz-panfrost (scarthgap-mesa25.2.8)`

    ``` bash
    git clone --branch scarthgap-clang20 https://github.com/kraj/meta-clang.git --depth 1
    git clone --branch scarthgap-mesa25.2.8 https://github.com/renesas-rz/meta-rz-panfrost.git --depth 1
    ```
    {: .dollar .wrap }

    !!! note "Note"

        The source code for these components can be accessed in their respective repositories, as listed below:

        *   [meta-clang (scarthgap-clang20)](https://github.com/kraj/meta-clang/tree/scarthgap-clang20){ target=_blank }
        *   [meta-rz-panfrost (scarthgap-mesa25.2.8)](https://github.com/renesas-rz/meta-rz-panfrost/tree/scarthgap-mesa25.2.8){ target=_blank }

3.  Initialize build environment

    ``` bash
    TEMPLATECONF=${PWD}/meta-renesas/meta-rz-distro/conf/templates/rz-bsp-plus-conf/ source poky/oe-init-build-env build
    ```
    {: .dollar .wrap }

4.  Modify bitbake layers

    1.  Remove `meta-rz-graphics`

        ``` bash
        bitbake-layers remove-layer ../meta-rz-features/meta-rz-graphics
        ```
        {: .dollar .wrap }

        !!! note "Note"

            This step is not required if the Graphics package for Renesas RZ Linux BSP Plus has not been initialized.

    2.  Add `meta-clang (scarthgap-clang20)`

        ``` bash
        bitbake-layers add-layer ../meta-clang
        ```
        {: .dollar .wrap }

    3.  Add `meta-rz-panfrost (scarthgap-mesa25.2.8)`

        ``` bash
        bitbake-layers add-layer ../meta-rz-panfrost
        ```
        {: .dollar .wrap }

5.  Modify `conf/local.conf`

    1.  Select mesa 25.2.8

        ``` bash
        PREFERRED_VERSION_mesa = "25.2.8"
        ```
        {: .wrap }

    2.  Add (optional) tools of `kmscude` and `glmark2`

        ``` bash
        IMAGE_INSTALL:append = " kmscube glmark2"
        ```
        {: .wrap }

        !!! success "Tip"

            `kmscube` is a useful tool to confirm OpenGL versions and driver.

6.  Build

    ``` bash
    MACHINE=${BOARD} bitbake core-image-weston
    ```
    {: .dollar .wrap }

#### How To Confirm Panfrost is Installed

1.  From boot logs

    During system boot, logs similar to those shown below should appear, indicating that the Panfrost driver has been loaded successfully.

    ``` console
    [    0.795615] panfrost 11840000.gpu: clock rate = 500000000
	[    0.795673] panfrost 11840000.gpu: bus_clock rate = 200000000
	[    0.796673] panfrost 11840000.gpu: [drm:panfrost_devfreq_init] Failed to register cooling device
	[    0.796869] panfrost 11840000.gpu: mali-g31 id 0x7093 major 0x0 minor 0x0 status 0x0
	[    0.796893] panfrost 11840000.gpu: features: 00000000,000027f7, issues: 00000000,00000400
	[    0.796911] panfrost 11840000.gpu: Features: L2:0x070d0206 Shader:0x00000000 Tiler:0x00000209 Mem:0x1 MMU:0x00002821 AS:0xff JS:0x7
	[    0.796933] panfrost 11840000.gpu: shader_present=0x1 l2_present=0x1
	[    0.798770] [drm] Initialized panfrost 1.2.0 for 11840000.gpu on minor 0
    ```
    {: .wrap }

2.  Using `kmscube`

    EGL/OpenGL ES information can be verified using the `kmscube` utility, as shown below.

    ``` console
    root@smarc-rzg2l:~# kmscube
    Using display 0xaaaab7eb8f60 with EGL version 1.5
    ===================================
    EGL information:
      version: "1.5"
      vendor: "Mesa Project"
      ...(snip)...
    ===================================
    OpenGL ES 2.x information:
      version: "OpenGL ES 3.1 Mesa 25.2.8"
      shading language version: "OpenGL ES GLSL ES 3.10"
      vendor: "Mesa"
      renderer: "Mali-G31 (Panfrost)"
      ...(snip)...
    ===================================
    failed to set mode: Permission denied
    ```
    {: .wrap }
