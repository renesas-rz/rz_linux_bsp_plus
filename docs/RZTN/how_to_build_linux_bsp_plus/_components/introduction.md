## Introduction

This page explains how to build Linux BSP Plus source code.

=== "RZ/T2H"

    !!! note "Requirement"
        1.  To build Linux BSP Plus (Yocto Linux), the equipment below should be prepared.

            !!! content-wrapper no-indent table-no-sort table-no-hover ""

                +-----------+--------------------------------------------------+
                | Equipment | Details                                          |
                +===========+==================================================+
                | Linux PC  | Approximately **100GB free space** is necessary. |
                |           +-------------+------------------------------------+
                |           | OS          | **Ubuntu 22.04 LTS**               |
                |           |             |                                    |
                |           |             | 64bit OS must be used.             |
                +-----------+-------------+------------------------------------+

=== "RZ/N2H"

    !!! note "Requirement"
        1.  To build Linux BSP Plus (Yocto Linux), the equipment below should be prepared.

            !!! content-wrapper no-indent table-no-sort table-no-hover ""

                +-----------+--------------------------------------------------+
                | Equipment | Details                                          |
                +===========+==================================================+
                | Linux PC  | Approximately **100GB free space** is necessary. |
                |           +-------------+------------------------------------+
                |           | OS          | **Ubuntu 22.04 LTS**               |
                |           |             |                                    |
                |           |             | 64bit OS must be used.             |
                +-----------+-------------+------------------------------------+

=== "RZ/T2N"

    !!! note "Requirement"
        1.  To build Linux BSP Plus (Yocto Linux), the equipment below should be prepared.

            !!! content-wrapper no-indent table-no-sort table-no-hover ""

                +-----------+--------------------------------------------------+
                | Equipment | Details                                          |
                +===========+==================================================+
                | Linux PC  | Approximately **100GB free space** is necessary. |
                |           +-------------+------------------------------------+
                |           | OS          | **Ubuntu 22.04 LTS**               |
                |           |             |                                    |
                |           |             | 64bit OS must be used.             |
                +-----------+-------------+------------------------------------+

    !!! note
        A pre-built Linux image generated using the same procedure is provided.  
        If you wish to use it, please download it from the link below.  
        Both Realtime Linux Kernel and Non-Realtime Linux Kernel images are available.

        - **[RZ/T2N Pre-built images](https://www.renesas.com/document/swo/rzt2n-pre-built-images){target=_blank}**

        **The pre-built Linux images may occasionally fail to boot due to an issue in the USB2 PHY driver.**  
        **A fix is already available in the source code. If this issue affects your evaluation, please rebuild the image with the fix applied by following the build procedure below.**  
