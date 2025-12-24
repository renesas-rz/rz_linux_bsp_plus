## Step 2: Obtain necessary environment

### 1. Necessary Equipment

Please prepare the following equipment for your EVK.

=== "RZ/G2L"

    +--------------------------------------------------------+-------------------------------------------------------------------+------------------------------------------------------------------+
    |    Equipment                                           |    Purpose                                                        |    Remarks                                                       |
    +========================================================+===================================================================+==================================================================+
    | RZ/G2L Module Board (SMARC2.1) + Common Carrier Board  | It is used to evaluate Linux boot.                                | Included with RZ/G2L Evaluation Board Kit (EVK)                  |
    |                                                        |                                                                   |                                                                  |
    | (P/N: RTK9744L23S01000BE)                              |                                                                   |                                                                  |
    +--------------------------------------------------------+-------------------------------------------------------------------+------------------------------------------------------------------+
    | USB serial cable                                       | It is used to connect the PC and the EVK and get the console      | Included with RZ/G2L Evaluation Board Kit (EVK)                  |
    |                                                        | output of Linux running on the EVK.                               |                                                                  |
    |                                                        |                                                                   |                                                                  |
    |                                                        | * Connect to micro USB type-B (2.0) port of EVK                   |                                                                  |
    +--------------------------------------------------------+-------------------------------------------------------------------+------------------------------------------------------------------+
    | USB Power Delivery (PD) AC adapter + USB C PD cable    | Used for power supply                                             |                                                                  |
    | for power supply                                       |                                                                   |                                                                  |
    |                                                        | * Connect to USB type-C port of EVK                               |                                                                  |
    +--------------------------------------------------------+-------------------------------------------------------------------+------------------------------------------------------------------+
    | PC                                                     | It can be used to operate the demo environment from a terminal    | The OS of the PC is as follows. However, Windows PCs are for     |
    |                                                        | on a PC, rebuild HMI SDK Linux, or use it as a development device | debugging using a serial connection and cannot be used for       |
    |                                                        | for applications.                                                 | development such as building software.                           |
    |                                                        |                                                                   |                                                                  |
    |                                                        | * At least 100GB or more free space of HDD/SDD                    | * Ubuntu 22.04 LTS, 64-bit version                               |
    |                                                        | * 8GB or more RAM                                                 | * Windows 10 or 11                                               |
    |                                                        | * 4-core or more CPU                                              |                                                                  |
    +--------------------------------------------------------+-------------------------------------------------------------------+------------------------------------------------------------------+
    | micro SD card                                          | Linux and demo images provided by the HMI SDK are written and     | Linux on the RZ/G2L EVK is booted from a micro SD card by eSD    |
    |                                                        | used as a Linux boot device.                                      | boot.                                                            |
    |                                                        |                                                                   |                                                                  |
    |                                                        | * Type: SDHC                                                      |                                                                  |
    |                                                        | * Speed class: UHI-Class 10                                       |                                                                  |
    |                                                        | * Capacity: Minimum 4GB, recommended 8GB                          |                                                                  |
    +--------------------------------------------------------+-------------------------------------------------------------------+------------------------------------------------------------------+

=== "RZ/G2LC"

    +--------------------------------------------------------+-------------------------------------------------------------------+------------------------------------------------------------------+
    |    Equipment                                           |    Purpose                                                        |    Remarks                                                       |
    +========================================================+===================================================================+==================================================================+
    | RZ/G2LC Module Board (SMARC2.1) + Common Carrier Board | It is used to evaluate Linux boot.                                | Included with RZ/G2LC Evaluation Board Kit (EVK)                 |
    |                                                        |                                                                   |                                                                  |
    | (P/N: RTK9744C22S01000BE)                              |                                                                   |                                                                  |
    +--------------------------------------------------------+-------------------------------------------------------------------+------------------------------------------------------------------+
    | USB serial cable                                       | It is used to connect the PC and the EVK and get the console      | Included with RZ/G2LC Evaluation Board Kit (EVK)                 |
    |                                                        | output of Linux running on the EVK.                               |                                                                  |
    |                                                        |                                                                   |                                                                  |
    |                                                        | * Connect to micro USB type-B (2.0) port of EVK                   |                                                                  |
    +--------------------------------------------------------+-------------------------------------------------------------------+------------------------------------------------------------------+
    | USB Power Delivery (PD) AC adapter + USB C PD cable    | Used for power supply                                             |                                                                  |
    | for power supply                                       |                                                                   |                                                                  |
    |                                                        | * Connect to USB type-C port of EVK                               |                                                                  |
    +--------------------------------------------------------+-------------------------------------------------------------------+------------------------------------------------------------------+
    | PC                                                     | It can be used to operate the demo environment from a terminal    | The OS of the PC is as follows. However, Windows PCs are for     |
    |                                                        | on a PC, rebuild HMI SDK Linux, or use it as a development device | debugging using a serial connection and cannot be used for       |
    |                                                        | for applications.                                                 | development such as building software.                           |
    |                                                        |                                                                   |                                                                  |
    |                                                        | * At least 100GB or more free space of HDD/SDD                    | * Ubuntu 22.04 LTS, 64-bit version                               |
    |                                                        | * 8GB or more RAM                                                 | * Windows 10 or 11                                               |
    |                                                        | * 4-core or more CPU                                              |                                                                  |
    +--------------------------------------------------------+-------------------------------------------------------------------+------------------------------------------------------------------+
    | micro SD card                                          | Linux and demo images provided by the HMI SDK are written and     | Linux on the RZ/G2LC EVK is booted from a micro SD card by eSD   |
    |                                                        | used as a Linux boot device.                                      | boot.                                                            |
    |                                                        |                                                                   |                                                                  |
    |                                                        | * Type: SDHC                                                      |                                                                  |
    |                                                        | * Speed class: UHI-Class 10                                       |                                                                  |
    |                                                        | * Capacity: Minimum 4GB, recommended 8GB                          |                                                                  |
    +--------------------------------------------------------+-------------------------------------------------------------------+------------------------------------------------------------------+

=== "RZ/G2UL"

    +--------------------------------------------------------+-------------------------------------------------------------------+------------------------------------------------------------------+
    |    Equipment                                           |    Purpose                                                        |    Remarks                                                       |
    +========================================================+===================================================================+==================================================================+
    | RZ/G2UL Module Board (SMARC2.1) + Common Carrier Board | It is used to evaluate Linux boot.                                | Included with RZ/G2UL Evaluation Board Kit (EVK)                 |
    |                                                        |                                                                   |                                                                  |
    | (P/N: RTK9743U11S01000BE)                              |                                                                   |                                                                  |
    +--------------------------------------------------------+-------------------------------------------------------------------+------------------------------------------------------------------+
    | USB serial cable                                       | It is used to connect the PC and the EVK and get the console      | Included with RZ/G2UL Evaluation Board Kit (EVK)                 |
    |                                                        | output of Linux running on the EVK.                               |                                                                  |
    |                                                        |                                                                   |                                                                  |
    |                                                        | * Connect to micro USB type-B (2.0) port of EVK                   |                                                                  |
    +--------------------------------------------------------+-------------------------------------------------------------------+------------------------------------------------------------------+
    | USB Power Delivery (PD) AC adapter + USB C PD cable    | Used for power supply                                             |                                                                  |
    | for power supply                                       |                                                                   |                                                                  |
    |                                                        | * Connect to USB type-C port of EVK                               |                                                                  |
    +--------------------------------------------------------+-------------------------------------------------------------------+------------------------------------------------------------------+
    | PC                                                     | It can be used to operate the demo environment from a terminal    | The OS of the PC is as follows. However, Windows PCs are for     |
    |                                                        | on a PC, rebuild HMI SDK Linux, or use it as a development device | debugging using a serial connection and cannot be used for       |
    |                                                        | for applications.                                                 | development such as building software.                           |
    |                                                        |                                                                   |                                                                  |
    |                                                        | * At least 100GB or more free space of HDD/SDD                    | * Ubuntu 22.04 LTS, 64-bit version                               |
    |                                                        | * 8GB or more RAM                                                 | * Windows 10 or 11                                               |
    |                                                        | * 4-core or more CPU                                              |                                                                  |
    +--------------------------------------------------------+-------------------------------------------------------------------+------------------------------------------------------------------+
    | micro SD card                                          | Linux and demo images provided by the HMI SDK are written and     | Linux on the RZ/G2UL EVK is booted from a micro SD card by eSD   |
    |                                                        | used as a Linux boot device.                                      | boot.                                                            |
    |                                                        |                                                                   |                                                                  |
    |                                                        | * Type: SDHC                                                      |                                                                  |
    |                                                        | * Speed class: UHI-Class 10                                       |                                                                  |
    |                                                        | * Capacity: Minimum 4GB, recommended 8GB                          |                                                                  |
    +--------------------------------------------------------+-------------------------------------------------------------------+------------------------------------------------------------------+

=== "RZ/G3S"

    +--------------------------------------------------------+-------------------------------------------------------------------+------------------------------------------------------------------+
    |    Equipment                                           |    Purpose                                                        |    Remarks                                                       |
    +========================================================+===================================================================+==================================================================+
    | RZ/G3S Module Board (SMARC2.1)                         | It is used to evaluate Linux boot.                                | Included with RZ/G3S Evaluation Board Kit (EVK)                  |
    |+ Common Carrier Board II                               |                                                                   |                                                                  |
    |                                                        |                                                                   |                                                                  |
    | (P/N: RTK9845S33S01000BE)                              |                                                                   |                                                                  |
    +--------------------------------------------------------+-------------------------------------------------------------------+------------------------------------------------------------------+
    | USB serial cable                                       | It is used to connect the PC and the EVK and get the console      | Included with RZ/G3S Evaluation Board Kit (EVK)                  |
    |                                                        | output of Linux running on the EVK.                               |                                                                  |
    |                                                        |                                                                   |                                                                  |
    |                                                        | * Connect to micro USB type-B (2.0) port of EVK                   |                                                                  |
    +--------------------------------------------------------+-------------------------------------------------------------------+------------------------------------------------------------------+
    | USB Power Delivery (PD) AC adapter + USB C PD cable    | Used for power supply                                             |                                                                  |
    | for power supply                                       |                                                                   |                                                                  |
    |                                                        | * Connect to USB type-C port of EVK                               |                                                                  |
    +--------------------------------------------------------+-------------------------------------------------------------------+------------------------------------------------------------------+
    | PC                                                     | It can be used to operate the demo environment from a terminal    | The OS of the PC is as follows. However, Windows PCs are for     |
    |                                                        | on a PC, rebuild HMI SDK Linux, or use it as a development device | debugging using a serial connection and cannot be used for       |
    |                                                        | for applications.                                                 | development such as building software.                           |
    |                                                        |                                                                   |                                                                  |
    |                                                        | * At least 100GB or more free space of HDD/SDD                    | * Ubuntu 22.04 LTS, 64-bit version                               |
    |                                                        | * 8GB or more RAM                                                 | * Windows 10 or 11                                               |
    |                                                        | * 4-core or more CPU                                              |                                                                  |
    +--------------------------------------------------------+-------------------------------------------------------------------+------------------------------------------------------------------+
    | micro SD card                                          | Linux and demo images provided by the HMI SDK are written and     | Linux on the RZ/G3S EVK is booted from a micro SD card by eSD    |
    |                                                        | used as a Linux boot device.                                      | boot.                                                            |
    |                                                        |                                                                   |                                                                  |
    |                                                        | * Type: SDHC                                                      |                                                                  |
    |                                                        | * Speed class: UHI-Class 10                                       |                                                                  |
    |                                                        | * Capacity: Minimum 4GB, recommended 8GB                          |                                                                  |
    +--------------------------------------------------------+-------------------------------------------------------------------+------------------------------------------------------------------+

### 2. Necessary Software

Please install following software **on Linux PC**.

* [git](https://git-scm.com/){: target=_blank }
