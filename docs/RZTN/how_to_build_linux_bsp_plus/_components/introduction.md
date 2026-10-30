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

    !!! danger "Caution"
        The system may occasionally fail to boot due to an issue in the USB2 PHY driver.  
        A fix for this issue is planned for an upcoming update. In the meantime, if you need to address this issue, please refer to the workaround in Step 1-4.

    !!! note
        A pre-built Linux image generated using the same procedure is provided.  
        If you wish to use it, please download it from the link below.  
        Both Realtime Linux Kernel and Non-Realtime Linux Kernel images are avilable.

        - **[RZ/T2N Pre-built images](https://www.renesas.com/document/swo/rzt2n-pre-built-images){target=_blank}**

        **The pre-built Linux images are also affected by the USB2 PHY driver issue described above.**
