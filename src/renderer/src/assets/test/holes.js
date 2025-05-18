export default `%
(Fusion CAM 2601.1.37)
( Posts processor: MPCNC v3.0 Beta 1.cps)
( Gcode generated: Sat May 17 03:25:43 2025 GMT)
( Document: Spoilboard v2 v5)
( Setup: Threaded Inserts)
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( )
( Ranges Table:)
(   X: Min=1.169 Max=406.819 Size=405.65)
(   Y: Min=7.632 Max=413.281 Size=405.65)
(   Z: Min=-19.15 Max=15 Size=34.15)
( )
( Tools Table:)
(  T2 D=6.35 CR=0 - ZMIN=-19.15 - flat end mill )
( )
( Feedrate and Scaling Properties:)
(   Feed: Travel speed X/Y = 2800)
(   Feed: Travel Speed Z = 730)
(   Feed: Enforce Feedrate = false)
(   Feed: Scale Feedrate = false)
(   Feed: Max XY Cut Speed = 900)
(   Feed: Max Z Cut Speed = 180)
(   Feed: Max Toolpath Speed = 1000)
( )
( G1->G0 Mapping Properties:)
(   Map: First G1 -> G0 Rapid = true)
(   Map: G1s -> G0 Rapids = true)
(   Map: SafeZ Mode = Retract : default = 15)
(   Map: Allow Rapid Z = true)
( )
( *** START begin ***)
(   Set Absolute Positioning)
(   Units = mm)
G90
G21
(   Set Feed Rate Mode to units per minute)
G94
(   Use the XY plane for circular motion)
G17
( *** START end ***)
( )
( *** SECTION begin ***)
(   X Min: 1.169 - X Max: 6.819)
(   Y Min: 7.632 - Y Max: 13.281)
(   Z Min: -1 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket2 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( >>> Spindle Speed 12000)
M3 S12000
( COMMAND_COOLANT_ON)
( >>> Coolant Channel A: Air)
M8
( MOVEMENT_CUTTING)
( First G1 --> G0)
G0 Z15 F730
X1.519 Y9.095 F2800
( Safe G1 --> G0)
Z5 F730
( MOVEMENT_PLUNGE)
G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X6.469 Y11.818 Z0.19 I2.475 J1.361
X1.519 Y9.095 Z-0.12 I-2.475 J-1.361
X6.469 Y11.818 Z-0.43 I2.475 J1.361
X1.519 Y9.095 Z-0.74 I-2.475 J-1.361
X6.819 Y10.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
X1.169 I-2.825 F2400
X6.819 I2.825
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 2.569 - X Max: 5.419)
(   Y Min: 9.031 - Y Max: 11.882)
(   Z Min: -19.15 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket3 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X4.431 Y11.813 F2800
G1 Z4 F2400
( MOVEMENT_PLUNGE)
Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X3.557 Y9.1 Z-1.452 I-0.437 J-1.356
X4.431 Y11.813 Z-2.403 I0.437 J1.356
X3.557 Y9.1 Z-3.355 I-0.437 J-1.356
X4.431 Y11.813 Z-4.306 I0.437 J1.356
X3.557 Y9.1 Z-5.258 I-0.437 J-1.356
X4.431 Y11.813 Z-6.209 I0.437 J1.356
X3.557 Y9.1 Z-7.161 I-0.437 J-1.356
X4.431 Y11.813 Z-8.113 I0.437 J1.356
X3.557 Y9.1 Z-9.064 I-0.437 J-1.356
X4.431 Y11.813 Z-10.016 I0.437 J1.356
X3.557 Y9.1 Z-10.967 I-0.437 J-1.356
X4.431 Y11.813 Z-11.919 I0.437 J1.356
X3.557 Y9.1 Z-12.87 I-0.437 J-1.356
X4.431 Y11.813 Z-13.822 I0.437 J1.356
X3.557 Y9.1 Z-14.774 I-0.437 J-1.356
X4.431 Y11.813 Z-15.725 I0.437 J1.356
X3.557 Y9.1 Z-16.677 I-0.437 J-1.356
X4.431 Y11.813 Z-17.628 I0.437 J1.356
X3.557 Y9.1 Z-18.58 I-0.437 J-1.356
X5.419 Y10.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
X2.569 I-1.425 F2400
X5.419 I1.425
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 1.169 - X Max: 6.819)
(   Y Min: 57.632 - Y Max: 63.281)
(   Z Min: -1 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket2 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X1.519 Y59.095 F2800
( Safe G1 --> G0)
Z5 F730
( MOVEMENT_PLUNGE)
G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X6.469 Y61.818 Z0.19 I2.475 J1.361
X1.519 Y59.095 Z-0.12 I-2.475 J-1.361
X6.469 Y61.818 Z-0.43 I2.475 J1.361
X1.519 Y59.095 Z-0.74 I-2.475 J-1.361
X6.819 Y60.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
X1.169 I-2.825 F2400
X6.819 I2.825
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 2.569 - X Max: 5.419)
(   Y Min: 59.031 - Y Max: 61.882)
(   Z Min: -19.15 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket3 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X4.431 Y61.813 F2800
G1 Z4 F2400
( MOVEMENT_PLUNGE)
Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X3.557 Y59.1 Z-1.452 I-0.437 J-1.356
X4.431 Y61.813 Z-2.403 I0.437 J1.356
X3.557 Y59.1 Z-3.355 I-0.437 J-1.356
X4.431 Y61.813 Z-4.306 I0.437 J1.356
X3.557 Y59.1 Z-5.258 I-0.437 J-1.356
X4.431 Y61.813 Z-6.209 I0.437 J1.356
X3.557 Y59.1 Z-7.161 I-0.437 J-1.356
X4.431 Y61.813 Z-8.113 I0.437 J1.356
X3.557 Y59.1 Z-9.064 I-0.437 J-1.356
X4.431 Y61.813 Z-10.016 I0.437 J1.356
X3.557 Y59.1 Z-10.967 I-0.437 J-1.356
X4.431 Y61.813 Z-11.919 I0.437 J1.356
X3.557 Y59.1 Z-12.87 I-0.437 J-1.356
X4.431 Y61.813 Z-13.822 I0.437 J1.356
X3.557 Y59.1 Z-14.774 I-0.437 J-1.356
X4.431 Y61.813 Z-15.725 I0.437 J1.356
X3.557 Y59.1 Z-16.677 I-0.437 J-1.356
X4.431 Y61.813 Z-17.628 I0.437 J1.356
X3.557 Y59.1 Z-18.58 I-0.437 J-1.356
X5.419 Y60.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
X2.569 I-1.425 F2400
X5.419 I1.425
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 1.169 - X Max: 6.819)
(   Y Min: 107.632 - Y Max: 113.281)
(   Z Min: -1 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket2 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X1.519 Y109.095 F2800
( Safe G1 --> G0)
Z5 F730
( MOVEMENT_PLUNGE)
G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X6.469 Y111.818 Z0.19 I2.475 J1.361
X1.519 Y109.095 Z-0.12 I-2.475 J-1.361
X6.469 Y111.818 Z-0.43 I2.475 J1.361
X1.519 Y109.095 Z-0.74 I-2.475 J-1.361
X6.819 Y110.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
X1.169 I-2.825 F2400
X6.819 I2.825
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 2.569 - X Max: 5.419)
(   Y Min: 109.031 - Y Max: 111.882)
(   Z Min: -19.15 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket3 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X4.431 Y111.813 F2800
G1 Z4 F2400
( MOVEMENT_PLUNGE)
Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X3.557 Y109.1 Z-1.452 I-0.437 J-1.356
X4.431 Y111.813 Z-2.403 I0.437 J1.356
X3.557 Y109.1 Z-3.355 I-0.437 J-1.356
X4.431 Y111.813 Z-4.306 I0.437 J1.356
X3.557 Y109.1 Z-5.258 I-0.437 J-1.356
X4.431 Y111.813 Z-6.209 I0.437 J1.356
X3.557 Y109.1 Z-7.161 I-0.437 J-1.356
X4.431 Y111.813 Z-8.113 I0.437 J1.356
X3.557 Y109.1 Z-9.064 I-0.437 J-1.356
X4.431 Y111.813 Z-10.016 I0.437 J1.356
X3.557 Y109.1 Z-10.967 I-0.437 J-1.356
X4.431 Y111.813 Z-11.919 I0.437 J1.356
X3.557 Y109.1 Z-12.87 I-0.437 J-1.356
X4.431 Y111.813 Z-13.822 I0.437 J1.356
X3.557 Y109.1 Z-14.774 I-0.437 J-1.356
X4.431 Y111.813 Z-15.725 I0.437 J1.356
X3.557 Y109.1 Z-16.677 I-0.437 J-1.356
X4.431 Y111.813 Z-17.628 I0.437 J1.356
X3.557 Y109.1 Z-18.58 I-0.437 J-1.356
X5.419 Y110.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
X2.569 I-1.425 F2400
X5.419 I1.425
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 1.169 - X Max: 6.819)
(   Y Min: 157.632 - Y Max: 163.282)
(   Z Min: -1 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket2 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X1.519 Y159.095 F2800
( Safe G1 --> G0)
Z5 F730
( MOVEMENT_PLUNGE)
G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X6.469 Y161.818 Z0.19 I2.475 J1.361
X1.519 Y159.095 Z-0.12 I-2.475 J-1.361
X6.469 Y161.818 Z-0.43 I2.475 J1.361
X1.519 Y159.095 Z-0.74 I-2.475 J-1.361
X6.819 Y160.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
X1.169 I-2.825 F2400
X6.819 I2.825
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 2.569 - X Max: 5.419)
(   Y Min: 159.032 - Y Max: 161.882)
(   Z Min: -19.15 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket3 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X4.431 Y161.813 F2800
G1 Z4 F2400
( MOVEMENT_PLUNGE)
Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X3.557 Y159.1 Z-1.452 I-0.437 J-1.356
X4.431 Y161.813 Z-2.403 I0.437 J1.356
X3.557 Y159.1 Z-3.355 I-0.437 J-1.356
X4.431 Y161.813 Z-4.306 I0.437 J1.356
X3.557 Y159.1 Z-5.258 I-0.437 J-1.356
X4.431 Y161.813 Z-6.209 I0.437 J1.356
X3.557 Y159.1 Z-7.161 I-0.437 J-1.356
X4.431 Y161.813 Z-8.113 I0.437 J1.356
X3.557 Y159.1 Z-9.064 I-0.437 J-1.356
X4.431 Y161.813 Z-10.016 I0.437 J1.356
X3.557 Y159.1 Z-10.967 I-0.437 J-1.356
X4.431 Y161.813 Z-11.919 I0.437 J1.356
X3.557 Y159.1 Z-12.87 I-0.437 J-1.356
X4.431 Y161.813 Z-13.822 I0.437 J1.356
X3.557 Y159.1 Z-14.774 I-0.437 J-1.356
X4.431 Y161.813 Z-15.725 I0.437 J1.356
X3.557 Y159.1 Z-16.677 I-0.437 J-1.356
X4.431 Y161.813 Z-17.628 I0.437 J1.356
X3.557 Y159.1 Z-18.58 I-0.437 J-1.356
X5.419 Y160.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
X2.569 I-1.425 F2400
X5.419 I1.425
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 1.169 - X Max: 6.819)
(   Y Min: 207.632 - Y Max: 213.282)
(   Z Min: -1 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket2 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X1.519 Y209.095 F2800
( Safe G1 --> G0)
Z5 F730
( MOVEMENT_PLUNGE)
G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X6.469 Y211.818 Z0.19 I2.475 J1.361
X1.519 Y209.095 Z-0.12 I-2.475 J-1.361
X6.469 Y211.818 Z-0.43 I2.475 J1.361
X1.519 Y209.095 Z-0.74 I-2.475 J-1.361
X6.819 Y210.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
X1.169 I-2.825 F2400
X6.819 I2.825
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 2.569 - X Max: 5.419)
(   Y Min: 209.032 - Y Max: 211.882)
(   Z Min: -19.15 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket3 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X4.431 Y211.813 F2800
G1 Z4 F2400
( MOVEMENT_PLUNGE)
Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X3.557 Y209.1 Z-1.452 I-0.437 J-1.356
X4.431 Y211.813 Z-2.403 I0.437 J1.356
X3.557 Y209.1 Z-3.355 I-0.437 J-1.356
X4.431 Y211.813 Z-4.306 I0.437 J1.356
X3.557 Y209.1 Z-5.258 I-0.437 J-1.356
X4.431 Y211.813 Z-6.209 I0.437 J1.356
X3.557 Y209.1 Z-7.161 I-0.437 J-1.356
X4.431 Y211.813 Z-8.113 I0.437 J1.356
X3.557 Y209.1 Z-9.064 I-0.437 J-1.356
X4.431 Y211.813 Z-10.016 I0.437 J1.356
X3.557 Y209.1 Z-10.967 I-0.437 J-1.356
X4.431 Y211.813 Z-11.919 I0.437 J1.356
X3.557 Y209.1 Z-12.87 I-0.437 J-1.356
X4.431 Y211.813 Z-13.822 I0.437 J1.356
X3.557 Y209.1 Z-14.774 I-0.437 J-1.356
X4.431 Y211.813 Z-15.725 I0.437 J1.356
X3.557 Y209.1 Z-16.677 I-0.437 J-1.356
X4.431 Y211.813 Z-17.628 I0.437 J1.356
X3.557 Y209.1 Z-18.58 I-0.437 J-1.356
X5.419 Y210.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
X2.569 I-1.425 F2400
X5.419 I1.425
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 1.169 - X Max: 6.819)
(   Y Min: 257.632 - Y Max: 263.282)
(   Z Min: -1 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket2 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X1.519 Y259.095 F2800
( Safe G1 --> G0)
Z5 F730
( MOVEMENT_PLUNGE)
G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X6.469 Y261.818 Z0.19 I2.475 J1.361
X1.519 Y259.095 Z-0.12 I-2.475 J-1.361
X6.469 Y261.818 Z-0.43 I2.475 J1.361
X1.519 Y259.095 Z-0.74 I-2.475 J-1.361
X6.819 Y260.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
X1.169 I-2.825 F2400
X6.819 I2.825
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 2.569 - X Max: 5.419)
(   Y Min: 259.032 - Y Max: 261.882)
(   Z Min: -19.15 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket3 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X4.431 Y261.813 F2800
G1 Z4 F2400
( MOVEMENT_PLUNGE)
Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X3.557 Y259.1 Z-1.452 I-0.437 J-1.356
X4.431 Y261.813 Z-2.403 I0.437 J1.356
X3.557 Y259.1 Z-3.355 I-0.437 J-1.356
X4.431 Y261.813 Z-4.306 I0.437 J1.356
X3.557 Y259.1 Z-5.258 I-0.437 J-1.356
X4.431 Y261.813 Z-6.209 I0.437 J1.356
X3.557 Y259.1 Z-7.161 I-0.437 J-1.356
X4.431 Y261.813 Z-8.113 I0.437 J1.356
X3.557 Y259.1 Z-9.064 I-0.437 J-1.356
X4.431 Y261.813 Z-10.016 I0.437 J1.356
X3.557 Y259.1 Z-10.967 I-0.437 J-1.356
X4.431 Y261.813 Z-11.919 I0.437 J1.356
X3.557 Y259.1 Z-12.87 I-0.437 J-1.356
X4.431 Y261.813 Z-13.822 I0.437 J1.356
X3.557 Y259.1 Z-14.774 I-0.437 J-1.356
X4.431 Y261.813 Z-15.725 I0.437 J1.356
X3.557 Y259.1 Z-16.677 I-0.437 J-1.356
X4.431 Y261.813 Z-17.628 I0.437 J1.356
X3.557 Y259.1 Z-18.58 I-0.437 J-1.356
X5.419 Y260.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
X2.569 I-1.425 F2400
X5.419 I1.425
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 1.169 - X Max: 6.819)
(   Y Min: 307.632 - Y Max: 313.281)
(   Z Min: -1 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket2 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X1.519 Y309.095 F2800
( Safe G1 --> G0)
Z5 F730
( MOVEMENT_PLUNGE)
G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X6.469 Y311.818 Z0.19 I2.475 J1.361
X1.519 Y309.095 Z-0.12 I-2.475 J-1.361
X6.469 Y311.818 Z-0.43 I2.475 J1.361
X1.519 Y309.095 Z-0.74 I-2.475 J-1.361
X6.819 Y310.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
X1.169 I-2.825 F2400
X6.819 I2.825
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 2.569 - X Max: 5.419)
(   Y Min: 309.031 - Y Max: 311.882)
(   Z Min: -19.15 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket3 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X4.431 Y311.813 F2800
G1 Z4 F2400
( MOVEMENT_PLUNGE)
Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X3.557 Y309.1 Z-1.452 I-0.437 J-1.356
X4.431 Y311.813 Z-2.403 I0.437 J1.356
X3.557 Y309.1 Z-3.355 I-0.437 J-1.356
X4.431 Y311.813 Z-4.306 I0.437 J1.356
X3.557 Y309.1 Z-5.258 I-0.437 J-1.356
X4.431 Y311.813 Z-6.209 I0.437 J1.356
X3.557 Y309.1 Z-7.161 I-0.437 J-1.356
X4.431 Y311.813 Z-8.113 I0.437 J1.356
X3.557 Y309.1 Z-9.064 I-0.437 J-1.356
X4.431 Y311.813 Z-10.016 I0.437 J1.356
X3.557 Y309.1 Z-10.967 I-0.437 J-1.356
X4.431 Y311.813 Z-11.919 I0.437 J1.356
X3.557 Y309.1 Z-12.87 I-0.437 J-1.356
X4.431 Y311.813 Z-13.822 I0.437 J1.356
X3.557 Y309.1 Z-14.774 I-0.437 J-1.356
X4.431 Y311.813 Z-15.725 I0.437 J1.356
X3.557 Y309.1 Z-16.677 I-0.437 J-1.356
X4.431 Y311.813 Z-17.628 I0.437 J1.356
X3.557 Y309.1 Z-18.58 I-0.437 J-1.356
X5.419 Y310.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
X2.569 I-1.425 F2400
X5.419 I1.425
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 1.169 - X Max: 6.819)
(   Y Min: 357.632 - Y Max: 363.281)
(   Z Min: -1 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket2 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X1.519 Y359.095 F2800
( Safe G1 --> G0)
Z5 F730
( MOVEMENT_PLUNGE)
G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X6.469 Y361.818 Z0.19 I2.475 J1.361
X1.519 Y359.095 Z-0.12 I-2.475 J-1.361
X6.469 Y361.818 Z-0.43 I2.475 J1.361
X1.519 Y359.095 Z-0.74 I-2.475 J-1.361
X6.819 Y360.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
X1.169 I-2.825 F2400
X6.819 I2.825
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 2.569 - X Max: 5.419)
(   Y Min: 359.031 - Y Max: 361.882)
(   Z Min: -19.15 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket3 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X4.431 Y361.813 F2800
G1 Z4 F2400
( MOVEMENT_PLUNGE)
Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X3.557 Y359.1 Z-1.452 I-0.437 J-1.356
X4.431 Y361.813 Z-2.403 I0.437 J1.356
X3.557 Y359.1 Z-3.355 I-0.437 J-1.356
X4.431 Y361.813 Z-4.306 I0.437 J1.356
X3.557 Y359.1 Z-5.258 I-0.437 J-1.356
X4.431 Y361.813 Z-6.209 I0.437 J1.356
X3.557 Y359.1 Z-7.161 I-0.437 J-1.356
X4.431 Y361.813 Z-8.113 I0.437 J1.356
X3.557 Y359.1 Z-9.064 I-0.437 J-1.356
X4.431 Y361.813 Z-10.016 I0.437 J1.356
X3.557 Y359.1 Z-10.967 I-0.437 J-1.356
X4.431 Y361.813 Z-11.919 I0.437 J1.356
X3.557 Y359.1 Z-12.87 I-0.437 J-1.356
X4.431 Y361.813 Z-13.822 I0.437 J1.356
X3.557 Y359.1 Z-14.774 I-0.437 J-1.356
X4.431 Y361.813 Z-15.725 I0.437 J1.356
X3.557 Y359.1 Z-16.677 I-0.437 J-1.356
X4.431 Y361.813 Z-17.628 I0.437 J1.356
X3.557 Y359.1 Z-18.58 I-0.437 J-1.356
X5.419 Y360.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
X2.569 I-1.425 F2400
X5.419 I1.425
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 1.169 - X Max: 6.819)
(   Y Min: 407.632 - Y Max: 413.281)
(   Z Min: -1 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket2 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X1.519 Y409.095 F2800
( Safe G1 --> G0)
Z5 F730
( MOVEMENT_PLUNGE)
G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X6.469 Y411.818 Z0.19 I2.475 J1.361
X1.519 Y409.095 Z-0.12 I-2.475 J-1.361
X6.469 Y411.818 Z-0.43 I2.475 J1.361
X1.519 Y409.095 Z-0.74 I-2.475 J-1.361
X6.819 Y410.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
X1.169 I-2.825 F2400
X6.819 I2.825
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 2.569 - X Max: 5.419)
(   Y Min: 409.031 - Y Max: 411.882)
(   Z Min: -19.15 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket3 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X4.431 Y411.813 F2800
G1 Z4 F2400
( MOVEMENT_PLUNGE)
Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X3.557 Y409.1 Z-1.452 I-0.437 J-1.356
X4.431 Y411.813 Z-2.403 I0.437 J1.356
X3.557 Y409.1 Z-3.355 I-0.437 J-1.356
X4.431 Y411.813 Z-4.306 I0.437 J1.356
X3.557 Y409.1 Z-5.258 I-0.437 J-1.356
X4.431 Y411.813 Z-6.209 I0.437 J1.356
X3.557 Y409.1 Z-7.161 I-0.437 J-1.356
X4.431 Y411.813 Z-8.113 I0.437 J1.356
X3.557 Y409.1 Z-9.064 I-0.437 J-1.356
X4.431 Y411.813 Z-10.016 I0.437 J1.356
X3.557 Y409.1 Z-10.967 I-0.437 J-1.356
X4.431 Y411.813 Z-11.919 I0.437 J1.356
X3.557 Y409.1 Z-12.87 I-0.437 J-1.356
X4.431 Y411.813 Z-13.822 I0.437 J1.356
X3.557 Y409.1 Z-14.774 I-0.437 J-1.356
X4.431 Y411.813 Z-15.725 I0.437 J1.356
X3.557 Y409.1 Z-16.677 I-0.437 J-1.356
X4.431 Y411.813 Z-17.628 I0.437 J1.356
X3.557 Y409.1 Z-18.58 I-0.437 J-1.356
X5.419 Y410.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
X2.569 I-1.425 F2400
X5.419 I1.425
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 51.169 - X Max: 56.819)
(   Y Min: 7.632 - Y Max: 13.281)
(   Z Min: -1 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket2 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X51.519 Y9.095 F2800
( Safe G1 --> G0)
Z5 F730
( MOVEMENT_PLUNGE)
G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X56.469 Y11.818 Z0.19 I2.475 J1.361
X51.519 Y9.095 Z-0.12 I-2.475 J-1.361
X56.469 Y11.818 Z-0.43 I2.475 J1.361
X51.519 Y9.095 Z-0.74 I-2.475 J-1.361
X56.819 Y10.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
X51.169 I-2.825 F2400
X56.819 I2.825
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 52.569 - X Max: 55.419)
(   Y Min: 9.031 - Y Max: 11.882)
(   Z Min: -19.15 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket3 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X54.431 Y11.813 F2800
G1 Z4 F2400
( MOVEMENT_PLUNGE)
Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X53.557 Y9.1 Z-1.452 I-0.437 J-1.356
X54.431 Y11.813 Z-2.403 I0.437 J1.356
X53.557 Y9.1 Z-3.355 I-0.437 J-1.356
X54.431 Y11.813 Z-4.306 I0.437 J1.356
X53.557 Y9.1 Z-5.258 I-0.437 J-1.356
X54.431 Y11.813 Z-6.209 I0.437 J1.356
X53.557 Y9.1 Z-7.161 I-0.437 J-1.356
X54.431 Y11.813 Z-8.113 I0.437 J1.356
X53.557 Y9.1 Z-9.064 I-0.437 J-1.356
X54.431 Y11.813 Z-10.016 I0.437 J1.356
X53.557 Y9.1 Z-10.967 I-0.437 J-1.356
X54.431 Y11.813 Z-11.919 I0.437 J1.356
X53.557 Y9.1 Z-12.87 I-0.437 J-1.356
X54.431 Y11.813 Z-13.822 I0.437 J1.356
X53.557 Y9.1 Z-14.774 I-0.437 J-1.356
X54.431 Y11.813 Z-15.725 I0.437 J1.356
X53.557 Y9.1 Z-16.677 I-0.437 J-1.356
X54.431 Y11.813 Z-17.628 I0.437 J1.356
X53.557 Y9.1 Z-18.58 I-0.437 J-1.356
X55.419 Y10.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
X52.569 I-1.425 F2400
X55.419 I1.425
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 51.169 - X Max: 56.819)
(   Y Min: 57.632 - Y Max: 63.281)
(   Z Min: -1 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket2 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X51.519 Y59.095 F2800
( Safe G1 --> G0)
Z5 F730
( MOVEMENT_PLUNGE)
G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X56.469 Y61.818 Z0.19 I2.475 J1.361
X51.519 Y59.095 Z-0.12 I-2.475 J-1.361
X56.469 Y61.818 Z-0.43 I2.475 J1.361
X51.519 Y59.095 Z-0.74 I-2.475 J-1.361
X56.819 Y60.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
X51.169 I-2.825 F2400
X56.819 I2.825
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 52.569 - X Max: 55.419)
(   Y Min: 59.031 - Y Max: 61.882)
(   Z Min: -19.15 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket3 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X54.431 Y61.813 F2800
G1 Z4 F2400
( MOVEMENT_PLUNGE)
Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X53.557 Y59.1 Z-1.452 I-0.437 J-1.356
X54.431 Y61.813 Z-2.403 I0.437 J1.356
X53.557 Y59.1 Z-3.355 I-0.437 J-1.356
X54.431 Y61.813 Z-4.306 I0.437 J1.356
X53.557 Y59.1 Z-5.258 I-0.437 J-1.356
X54.431 Y61.813 Z-6.209 I0.437 J1.356
X53.557 Y59.1 Z-7.161 I-0.437 J-1.356
X54.431 Y61.813 Z-8.113 I0.437 J1.356
X53.557 Y59.1 Z-9.064 I-0.437 J-1.356
X54.431 Y61.813 Z-10.016 I0.437 J1.356
X53.557 Y59.1 Z-10.967 I-0.437 J-1.356
X54.431 Y61.813 Z-11.919 I0.437 J1.356
X53.557 Y59.1 Z-12.87 I-0.437 J-1.356
X54.431 Y61.813 Z-13.822 I0.437 J1.356
X53.557 Y59.1 Z-14.774 I-0.437 J-1.356
X54.431 Y61.813 Z-15.725 I0.437 J1.356
X53.557 Y59.1 Z-16.677 I-0.437 J-1.356
X54.431 Y61.813 Z-17.628 I0.437 J1.356
X53.557 Y59.1 Z-18.58 I-0.437 J-1.356
X55.419 Y60.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
X52.569 I-1.425 F2400
X55.419 I1.425
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 51.169 - X Max: 56.819)
(   Y Min: 107.632 - Y Max: 113.281)
(   Z Min: -1 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket2 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X51.519 Y109.095 F2800
( Safe G1 --> G0)
Z5 F730
( MOVEMENT_PLUNGE)
G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X56.469 Y111.818 Z0.19 I2.475 J1.361
X51.519 Y109.095 Z-0.12 I-2.475 J-1.361
X56.469 Y111.818 Z-0.43 I2.475 J1.361
X51.519 Y109.095 Z-0.74 I-2.475 J-1.361
X56.819 Y110.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
X51.169 I-2.825 F2400
X56.819 I2.825
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 52.569 - X Max: 55.419)
(   Y Min: 109.031 - Y Max: 111.882)
(   Z Min: -19.15 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket3 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X54.431 Y111.813 F2800
G1 Z4 F2400
( MOVEMENT_PLUNGE)
Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X53.557 Y109.1 Z-1.452 I-0.437 J-1.356
X54.431 Y111.813 Z-2.403 I0.437 J1.356
X53.557 Y109.1 Z-3.355 I-0.437 J-1.356
X54.431 Y111.813 Z-4.306 I0.437 J1.356
X53.557 Y109.1 Z-5.258 I-0.437 J-1.356
X54.431 Y111.813 Z-6.209 I0.437 J1.356
X53.557 Y109.1 Z-7.161 I-0.437 J-1.356
X54.431 Y111.813 Z-8.113 I0.437 J1.356
X53.557 Y109.1 Z-9.064 I-0.437 J-1.356
X54.431 Y111.813 Z-10.016 I0.437 J1.356
X53.557 Y109.1 Z-10.967 I-0.437 J-1.356
X54.431 Y111.813 Z-11.919 I0.437 J1.356
X53.557 Y109.1 Z-12.87 I-0.437 J-1.356
X54.431 Y111.813 Z-13.822 I0.437 J1.356
X53.557 Y109.1 Z-14.774 I-0.437 J-1.356
X54.431 Y111.813 Z-15.725 I0.437 J1.356
X53.557 Y109.1 Z-16.677 I-0.437 J-1.356
X54.431 Y111.813 Z-17.628 I0.437 J1.356
X53.557 Y109.1 Z-18.58 I-0.437 J-1.356
X55.419 Y110.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
X52.569 I-1.425 F2400
X55.419 I1.425
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 51.169 - X Max: 56.819)
(   Y Min: 157.632 - Y Max: 163.282)
(   Z Min: -1 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket2 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X51.519 Y159.095 F2800
( Safe G1 --> G0)
Z5 F730
( MOVEMENT_PLUNGE)
G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X56.469 Y161.818 Z0.19 I2.475 J1.361
X51.519 Y159.095 Z-0.12 I-2.475 J-1.361
X56.469 Y161.818 Z-0.43 I2.475 J1.361
X51.519 Y159.095 Z-0.74 I-2.475 J-1.361
X56.819 Y160.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
X51.169 I-2.825 F2400
X56.819 I2.825
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 52.569 - X Max: 55.419)
(   Y Min: 159.032 - Y Max: 161.882)
(   Z Min: -19.15 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket3 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X54.431 Y161.813 F2800
G1 Z4 F2400
( MOVEMENT_PLUNGE)
Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X53.557 Y159.1 Z-1.452 I-0.437 J-1.356
X54.431 Y161.813 Z-2.403 I0.437 J1.356
X53.557 Y159.1 Z-3.355 I-0.437 J-1.356
X54.431 Y161.813 Z-4.306 I0.437 J1.356
X53.557 Y159.1 Z-5.258 I-0.437 J-1.356
X54.431 Y161.813 Z-6.209 I0.437 J1.356
X53.557 Y159.1 Z-7.161 I-0.437 J-1.356
X54.431 Y161.813 Z-8.113 I0.437 J1.356
X53.557 Y159.1 Z-9.064 I-0.437 J-1.356
X54.431 Y161.813 Z-10.016 I0.437 J1.356
X53.557 Y159.1 Z-10.967 I-0.437 J-1.356
X54.431 Y161.813 Z-11.919 I0.437 J1.356
X53.557 Y159.1 Z-12.87 I-0.437 J-1.356
X54.431 Y161.813 Z-13.822 I0.437 J1.356
X53.557 Y159.1 Z-14.774 I-0.437 J-1.356
X54.431 Y161.813 Z-15.725 I0.437 J1.356
X53.557 Y159.1 Z-16.677 I-0.437 J-1.356
X54.431 Y161.813 Z-17.628 I0.437 J1.356
X53.557 Y159.1 Z-18.58 I-0.437 J-1.356
X55.419 Y160.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
X52.569 I-1.425 F2400
X55.419 I1.425
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 51.169 - X Max: 56.819)
(   Y Min: 207.632 - Y Max: 213.282)
(   Z Min: -1 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket2 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X51.519 Y209.095 F2800
( Safe G1 --> G0)
Z5 F730
( MOVEMENT_PLUNGE)
G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X56.469 Y211.818 Z0.19 I2.475 J1.361
X51.519 Y209.095 Z-0.12 I-2.475 J-1.361
X56.469 Y211.818 Z-0.43 I2.475 J1.361
X51.519 Y209.095 Z-0.74 I-2.475 J-1.361
X56.819 Y210.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
X51.169 I-2.825 F2400
X56.819 I2.825
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 52.569 - X Max: 55.419)
(   Y Min: 209.032 - Y Max: 211.882)
(   Z Min: -19.15 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket3 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X54.431 Y211.813 F2800
G1 Z4 F2400
( MOVEMENT_PLUNGE)
Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X53.557 Y209.1 Z-1.452 I-0.437 J-1.356
X54.431 Y211.813 Z-2.403 I0.437 J1.356
X53.557 Y209.1 Z-3.355 I-0.437 J-1.356
X54.431 Y211.813 Z-4.306 I0.437 J1.356
X53.557 Y209.1 Z-5.258 I-0.437 J-1.356
X54.431 Y211.813 Z-6.209 I0.437 J1.356
X53.557 Y209.1 Z-7.161 I-0.437 J-1.356
X54.431 Y211.813 Z-8.113 I0.437 J1.356
X53.557 Y209.1 Z-9.064 I-0.437 J-1.356
X54.431 Y211.813 Z-10.016 I0.437 J1.356
X53.557 Y209.1 Z-10.967 I-0.437 J-1.356
X54.431 Y211.813 Z-11.919 I0.437 J1.356
X53.557 Y209.1 Z-12.87 I-0.437 J-1.356
X54.431 Y211.813 Z-13.822 I0.437 J1.356
X53.557 Y209.1 Z-14.774 I-0.437 J-1.356
X54.431 Y211.813 Z-15.725 I0.437 J1.356
X53.557 Y209.1 Z-16.677 I-0.437 J-1.356
X54.431 Y211.813 Z-17.628 I0.437 J1.356
X53.557 Y209.1 Z-18.58 I-0.437 J-1.356
X55.419 Y210.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
X52.569 I-1.425 F2400
X55.419 I1.425
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 51.169 - X Max: 56.819)
(   Y Min: 257.632 - Y Max: 263.282)
(   Z Min: -1 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket2 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X51.519 Y259.095 F2800
( Safe G1 --> G0)
Z5 F730
( MOVEMENT_PLUNGE)
G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X56.469 Y261.818 Z0.19 I2.475 J1.361
X51.519 Y259.095 Z-0.12 I-2.475 J-1.361
X56.469 Y261.818 Z-0.43 I2.475 J1.361
X51.519 Y259.095 Z-0.74 I-2.475 J-1.361
X56.819 Y260.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
X51.169 I-2.825 F2400
X56.819 I2.825
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 52.569 - X Max: 55.419)
(   Y Min: 259.032 - Y Max: 261.882)
(   Z Min: -19.15 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket3 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X54.431 Y261.813 F2800
G1 Z4 F2400
( MOVEMENT_PLUNGE)
Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X53.557 Y259.1 Z-1.452 I-0.437 J-1.356
X54.431 Y261.813 Z-2.403 I0.437 J1.356
X53.557 Y259.1 Z-3.355 I-0.437 J-1.356
X54.431 Y261.813 Z-4.306 I0.437 J1.356
X53.557 Y259.1 Z-5.258 I-0.437 J-1.356
X54.431 Y261.813 Z-6.209 I0.437 J1.356
X53.557 Y259.1 Z-7.161 I-0.437 J-1.356
X54.431 Y261.813 Z-8.113 I0.437 J1.356
X53.557 Y259.1 Z-9.064 I-0.437 J-1.356
X54.431 Y261.813 Z-10.016 I0.437 J1.356
X53.557 Y259.1 Z-10.967 I-0.437 J-1.356
X54.431 Y261.813 Z-11.919 I0.437 J1.356
X53.557 Y259.1 Z-12.87 I-0.437 J-1.356
X54.431 Y261.813 Z-13.822 I0.437 J1.356
X53.557 Y259.1 Z-14.774 I-0.437 J-1.356
X54.431 Y261.813 Z-15.725 I0.437 J1.356
X53.557 Y259.1 Z-16.677 I-0.437 J-1.356
X54.431 Y261.813 Z-17.628 I0.437 J1.356
X53.557 Y259.1 Z-18.58 I-0.437 J-1.356
X55.419 Y260.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
X52.569 I-1.425 F2400
X55.419 I1.425
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 51.169 - X Max: 56.819)
(   Y Min: 307.632 - Y Max: 313.281)
(   Z Min: -1 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket2 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X51.519 Y309.095 F2800
( Safe G1 --> G0)
Z5 F730
( MOVEMENT_PLUNGE)
G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X56.469 Y311.818 Z0.19 I2.475 J1.361
X51.519 Y309.095 Z-0.12 I-2.475 J-1.361
X56.469 Y311.818 Z-0.43 I2.475 J1.361
X51.519 Y309.095 Z-0.74 I-2.475 J-1.361
X56.819 Y310.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
X51.169 I-2.825 F2400
X56.819 I2.825
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 52.569 - X Max: 55.419)
(   Y Min: 309.031 - Y Max: 311.882)
(   Z Min: -19.15 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket3 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X54.431 Y311.813 F2800
G1 Z4 F2400
( MOVEMENT_PLUNGE)
Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X53.557 Y309.1 Z-1.452 I-0.437 J-1.356
X54.431 Y311.813 Z-2.403 I0.437 J1.356
X53.557 Y309.1 Z-3.355 I-0.437 J-1.356
X54.431 Y311.813 Z-4.306 I0.437 J1.356
X53.557 Y309.1 Z-5.258 I-0.437 J-1.356
X54.431 Y311.813 Z-6.209 I0.437 J1.356
X53.557 Y309.1 Z-7.161 I-0.437 J-1.356
X54.431 Y311.813 Z-8.113 I0.437 J1.356
X53.557 Y309.1 Z-9.064 I-0.437 J-1.356
X54.431 Y311.813 Z-10.016 I0.437 J1.356
X53.557 Y309.1 Z-10.967 I-0.437 J-1.356
X54.431 Y311.813 Z-11.919 I0.437 J1.356
X53.557 Y309.1 Z-12.87 I-0.437 J-1.356
X54.431 Y311.813 Z-13.822 I0.437 J1.356
X53.557 Y309.1 Z-14.774 I-0.437 J-1.356
X54.431 Y311.813 Z-15.725 I0.437 J1.356
X53.557 Y309.1 Z-16.677 I-0.437 J-1.356
X54.431 Y311.813 Z-17.628 I0.437 J1.356
X53.557 Y309.1 Z-18.58 I-0.437 J-1.356
X55.419 Y310.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
X52.569 I-1.425 F2400
X55.419 I1.425
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 51.169 - X Max: 56.819)
(   Y Min: 357.632 - Y Max: 363.281)
(   Z Min: -1 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket2 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X51.519 Y359.095 F2800
( Safe G1 --> G0)
Z5 F730
( MOVEMENT_PLUNGE)
G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X56.469 Y361.818 Z0.19 I2.475 J1.361
X51.519 Y359.095 Z-0.12 I-2.475 J-1.361
X56.469 Y361.818 Z-0.43 I2.475 J1.361
X51.519 Y359.095 Z-0.74 I-2.475 J-1.361
X56.819 Y360.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
X51.169 I-2.825 F2400
X56.819 I2.825
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 52.569 - X Max: 55.419)
(   Y Min: 359.031 - Y Max: 361.882)
(   Z Min: -19.15 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket3 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X54.431 Y361.813 F2800
G1 Z4 F2400
( MOVEMENT_PLUNGE)
Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X53.557 Y359.1 Z-1.452 I-0.437 J-1.356
X54.431 Y361.813 Z-2.403 I0.437 J1.356
X53.557 Y359.1 Z-3.355 I-0.437 J-1.356
X54.431 Y361.813 Z-4.306 I0.437 J1.356
X53.557 Y359.1 Z-5.258 I-0.437 J-1.356
X54.431 Y361.813 Z-6.209 I0.437 J1.356
X53.557 Y359.1 Z-7.161 I-0.437 J-1.356
X54.431 Y361.813 Z-8.113 I0.437 J1.356
X53.557 Y359.1 Z-9.064 I-0.437 J-1.356
X54.431 Y361.813 Z-10.016 I0.437 J1.356
X53.557 Y359.1 Z-10.967 I-0.437 J-1.356
X54.431 Y361.813 Z-11.919 I0.437 J1.356
X53.557 Y359.1 Z-12.87 I-0.437 J-1.356
X54.431 Y361.813 Z-13.822 I0.437 J1.356
X53.557 Y359.1 Z-14.774 I-0.437 J-1.356
X54.431 Y361.813 Z-15.725 I0.437 J1.356
X53.557 Y359.1 Z-16.677 I-0.437 J-1.356
X54.431 Y361.813 Z-17.628 I0.437 J1.356
X53.557 Y359.1 Z-18.58 I-0.437 J-1.356
X55.419 Y360.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
X52.569 I-1.425 F2400
X55.419 I1.425
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 51.169 - X Max: 56.819)
(   Y Min: 407.632 - Y Max: 413.281)
(   Z Min: -1 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket2 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X51.519 Y409.095 F2800
( Safe G1 --> G0)
Z5 F730
( MOVEMENT_PLUNGE)
G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X56.469 Y411.818 Z0.19 I2.475 J1.361
X51.519 Y409.095 Z-0.12 I-2.475 J-1.361
X56.469 Y411.818 Z-0.43 I2.475 J1.361
X51.519 Y409.095 Z-0.74 I-2.475 J-1.361
X56.819 Y410.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
X51.169 I-2.825 F2400
X56.819 I2.825
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 52.569 - X Max: 55.419)
(   Y Min: 409.031 - Y Max: 411.882)
(   Z Min: -19.15 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket3 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X54.431 Y411.813 F2800
G1 Z4 F2400
( MOVEMENT_PLUNGE)
Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X53.557 Y409.1 Z-1.452 I-0.437 J-1.356
X54.431 Y411.813 Z-2.403 I0.437 J1.356
X53.557 Y409.1 Z-3.355 I-0.437 J-1.356
X54.431 Y411.813 Z-4.306 I0.437 J1.356
X53.557 Y409.1 Z-5.258 I-0.437 J-1.356
X54.431 Y411.813 Z-6.209 I0.437 J1.356
X53.557 Y409.1 Z-7.161 I-0.437 J-1.356
X54.431 Y411.813 Z-8.113 I0.437 J1.356
X53.557 Y409.1 Z-9.064 I-0.437 J-1.356
X54.431 Y411.813 Z-10.016 I0.437 J1.356
X53.557 Y409.1 Z-10.967 I-0.437 J-1.356
X54.431 Y411.813 Z-11.919 I0.437 J1.356
X53.557 Y409.1 Z-12.87 I-0.437 J-1.356
X54.431 Y411.813 Z-13.822 I0.437 J1.356
X53.557 Y409.1 Z-14.774 I-0.437 J-1.356
X54.431 Y411.813 Z-15.725 I0.437 J1.356
X53.557 Y409.1 Z-16.677 I-0.437 J-1.356
X54.431 Y411.813 Z-17.628 I0.437 J1.356
X53.557 Y409.1 Z-18.58 I-0.437 J-1.356
X55.419 Y410.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
X52.569 I-1.425 F2400
X55.419 I1.425
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 101.169 - X Max: 106.819)
(   Y Min: 7.632 - Y Max: 13.281)
(   Z Min: -1 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket2 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X101.519 Y9.095 F2800
( Safe G1 --> G0)
Z5 F730
( MOVEMENT_PLUNGE)
G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X106.469 Y11.818 Z0.19 I2.475 J1.361
X101.519 Y9.095 Z-0.12 I-2.475 J-1.361
X106.469 Y11.818 Z-0.43 I2.475 J1.361
X101.519 Y9.095 Z-0.74 I-2.475 J-1.361
X106.819 Y10.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
X101.169 I-2.825 F2400
X106.819 I2.825
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 102.569 - X Max: 105.419)
(   Y Min: 9.031 - Y Max: 11.882)
(   Z Min: -19.15 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket3 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X104.431 Y11.813 F2800
G1 Z4 F2400
( MOVEMENT_PLUNGE)
Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X103.557 Y9.1 Z-1.452 I-0.437 J-1.356
X104.431 Y11.813 Z-2.403 I0.437 J1.356
X103.557 Y9.1 Z-3.355 I-0.437 J-1.356
X104.431 Y11.813 Z-4.306 I0.437 J1.356
X103.557 Y9.1 Z-5.258 I-0.437 J-1.356
X104.431 Y11.813 Z-6.209 I0.437 J1.356
X103.557 Y9.1 Z-7.161 I-0.437 J-1.356
X104.431 Y11.813 Z-8.113 I0.437 J1.356
X103.557 Y9.1 Z-9.064 I-0.437 J-1.356
X104.431 Y11.813 Z-10.016 I0.437 J1.356
X103.557 Y9.1 Z-10.967 I-0.437 J-1.356
X104.431 Y11.813 Z-11.919 I0.437 J1.356
X103.557 Y9.1 Z-12.87 I-0.437 J-1.356
X104.431 Y11.813 Z-13.822 I0.437 J1.356
X103.557 Y9.1 Z-14.774 I-0.437 J-1.356
X104.431 Y11.813 Z-15.725 I0.437 J1.356
X103.557 Y9.1 Z-16.677 I-0.437 J-1.356
X104.431 Y11.813 Z-17.628 I0.437 J1.356
X103.557 Y9.1 Z-18.58 I-0.437 J-1.356
X105.419 Y10.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
X102.569 I-1.425 F2400
X105.419 I1.425
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 101.169 - X Max: 106.819)
(   Y Min: 57.632 - Y Max: 63.281)
(   Z Min: -1 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket2 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X101.519 Y59.095 F2800
( Safe G1 --> G0)
Z5 F730
( MOVEMENT_PLUNGE)
G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X106.469 Y61.818 Z0.19 I2.475 J1.361
X101.519 Y59.095 Z-0.12 I-2.475 J-1.361
X106.469 Y61.818 Z-0.43 I2.475 J1.361
X101.519 Y59.095 Z-0.74 I-2.475 J-1.361
X106.819 Y60.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
X101.169 I-2.825 F2400
X106.819 I2.825
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 102.569 - X Max: 105.419)
(   Y Min: 59.031 - Y Max: 61.882)
(   Z Min: -19.15 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket3 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X104.431 Y61.813 F2800
G1 Z4 F2400
( MOVEMENT_PLUNGE)
Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X103.557 Y59.1 Z-1.452 I-0.437 J-1.356
X104.431 Y61.813 Z-2.403 I0.437 J1.356
X103.557 Y59.1 Z-3.355 I-0.437 J-1.356
X104.431 Y61.813 Z-4.306 I0.437 J1.356
X103.557 Y59.1 Z-5.258 I-0.437 J-1.356
X104.431 Y61.813 Z-6.209 I0.437 J1.356
X103.557 Y59.1 Z-7.161 I-0.437 J-1.356
X104.431 Y61.813 Z-8.113 I0.437 J1.356
X103.557 Y59.1 Z-9.064 I-0.437 J-1.356
X104.431 Y61.813 Z-10.016 I0.437 J1.356
X103.557 Y59.1 Z-10.967 I-0.437 J-1.356
X104.431 Y61.813 Z-11.919 I0.437 J1.356
X103.557 Y59.1 Z-12.87 I-0.437 J-1.356
X104.431 Y61.813 Z-13.822 I0.437 J1.356
X103.557 Y59.1 Z-14.774 I-0.437 J-1.356
X104.431 Y61.813 Z-15.725 I0.437 J1.356
X103.557 Y59.1 Z-16.677 I-0.437 J-1.356
X104.431 Y61.813 Z-17.628 I0.437 J1.356
X103.557 Y59.1 Z-18.58 I-0.437 J-1.356
X105.419 Y60.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
X102.569 I-1.425 F2400
X105.419 I1.425
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 101.169 - X Max: 106.819)
(   Y Min: 107.632 - Y Max: 113.281)
(   Z Min: -1 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket2 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X101.519 Y109.095 F2800
( Safe G1 --> G0)
Z5 F730
( MOVEMENT_PLUNGE)
G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X106.469 Y111.818 Z0.19 I2.475 J1.361
X101.519 Y109.095 Z-0.12 I-2.475 J-1.361
X106.469 Y111.818 Z-0.43 I2.475 J1.361
X101.519 Y109.095 Z-0.74 I-2.475 J-1.361
X106.819 Y110.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
X101.169 I-2.825 F2400
X106.819 I2.825
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 102.569 - X Max: 105.419)
(   Y Min: 109.031 - Y Max: 111.882)
(   Z Min: -19.15 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket3 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X104.431 Y111.813 F2800
G1 Z4 F2400
( MOVEMENT_PLUNGE)
Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X103.557 Y109.1 Z-1.452 I-0.437 J-1.356
X104.431 Y111.813 Z-2.403 I0.437 J1.356
X103.557 Y109.1 Z-3.355 I-0.437 J-1.356
X104.431 Y111.813 Z-4.306 I0.437 J1.356
X103.557 Y109.1 Z-5.258 I-0.437 J-1.356
X104.431 Y111.813 Z-6.209 I0.437 J1.356
X103.557 Y109.1 Z-7.161 I-0.437 J-1.356
X104.431 Y111.813 Z-8.113 I0.437 J1.356
X103.557 Y109.1 Z-9.064 I-0.437 J-1.356
X104.431 Y111.813 Z-10.016 I0.437 J1.356
X103.557 Y109.1 Z-10.967 I-0.437 J-1.356
X104.431 Y111.813 Z-11.919 I0.437 J1.356
X103.557 Y109.1 Z-12.87 I-0.437 J-1.356
X104.431 Y111.813 Z-13.822 I0.437 J1.356
X103.557 Y109.1 Z-14.774 I-0.437 J-1.356
X104.431 Y111.813 Z-15.725 I0.437 J1.356
X103.557 Y109.1 Z-16.677 I-0.437 J-1.356
X104.431 Y111.813 Z-17.628 I0.437 J1.356
X103.557 Y109.1 Z-18.58 I-0.437 J-1.356
X105.419 Y110.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
X102.569 I-1.425 F2400
X105.419 I1.425
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 101.169 - X Max: 106.819)
(   Y Min: 157.632 - Y Max: 163.282)
(   Z Min: -1 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket2 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X101.519 Y159.095 F2800
( Safe G1 --> G0)
Z5 F730
( MOVEMENT_PLUNGE)
G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X106.469 Y161.818 Z0.19 I2.475 J1.361
X101.519 Y159.095 Z-0.12 I-2.475 J-1.361
X106.469 Y161.818 Z-0.43 I2.475 J1.361
X101.519 Y159.095 Z-0.74 I-2.475 J-1.361
X106.819 Y160.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
X101.169 I-2.825 F2400
X106.819 I2.825
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 102.569 - X Max: 105.419)
(   Y Min: 159.032 - Y Max: 161.882)
(   Z Min: -19.15 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket3 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X104.431 Y161.813 F2800
G1 Z4 F2400
( MOVEMENT_PLUNGE)
Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X103.557 Y159.1 Z-1.452 I-0.437 J-1.356
X104.431 Y161.813 Z-2.403 I0.437 J1.356
X103.557 Y159.1 Z-3.355 I-0.437 J-1.356
X104.431 Y161.813 Z-4.306 I0.437 J1.356
X103.557 Y159.1 Z-5.258 I-0.437 J-1.356
X104.431 Y161.813 Z-6.209 I0.437 J1.356
X103.557 Y159.1 Z-7.161 I-0.437 J-1.356
X104.431 Y161.813 Z-8.113 I0.437 J1.356
X103.557 Y159.1 Z-9.064 I-0.437 J-1.356
X104.431 Y161.813 Z-10.016 I0.437 J1.356
X103.557 Y159.1 Z-10.967 I-0.437 J-1.356
X104.431 Y161.813 Z-11.919 I0.437 J1.356
X103.557 Y159.1 Z-12.87 I-0.437 J-1.356
X104.431 Y161.813 Z-13.822 I0.437 J1.356
X103.557 Y159.1 Z-14.774 I-0.437 J-1.356
X104.431 Y161.813 Z-15.725 I0.437 J1.356
X103.557 Y159.1 Z-16.677 I-0.437 J-1.356
X104.431 Y161.813 Z-17.628 I0.437 J1.356
X103.557 Y159.1 Z-18.58 I-0.437 J-1.356
X105.419 Y160.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
X102.569 I-1.425 F2400
X105.419 I1.425
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 101.169 - X Max: 106.819)
(   Y Min: 207.632 - Y Max: 213.282)
(   Z Min: -1 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket2 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X101.519 Y209.095 F2800
( Safe G1 --> G0)
Z5 F730
( MOVEMENT_PLUNGE)
G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X106.469 Y211.818 Z0.19 I2.475 J1.361
X101.519 Y209.095 Z-0.12 I-2.475 J-1.361
X106.469 Y211.818 Z-0.43 I2.475 J1.361
X101.519 Y209.095 Z-0.74 I-2.475 J-1.361
X106.819 Y210.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
X101.169 I-2.825 F2400
X106.819 I2.825
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 102.569 - X Max: 105.419)
(   Y Min: 209.032 - Y Max: 211.882)
(   Z Min: -19.15 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket3 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X104.431 Y211.813 F2800
G1 Z4 F2400
( MOVEMENT_PLUNGE)
Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X103.557 Y209.1 Z-1.452 I-0.437 J-1.356
X104.431 Y211.813 Z-2.403 I0.437 J1.356
X103.557 Y209.1 Z-3.355 I-0.437 J-1.356
X104.431 Y211.813 Z-4.306 I0.437 J1.356
X103.557 Y209.1 Z-5.258 I-0.437 J-1.356
X104.431 Y211.813 Z-6.209 I0.437 J1.356
X103.557 Y209.1 Z-7.161 I-0.437 J-1.356
X104.431 Y211.813 Z-8.113 I0.437 J1.356
X103.557 Y209.1 Z-9.064 I-0.437 J-1.356
X104.431 Y211.813 Z-10.016 I0.437 J1.356
X103.557 Y209.1 Z-10.967 I-0.437 J-1.356
X104.431 Y211.813 Z-11.919 I0.437 J1.356
X103.557 Y209.1 Z-12.87 I-0.437 J-1.356
X104.431 Y211.813 Z-13.822 I0.437 J1.356
X103.557 Y209.1 Z-14.774 I-0.437 J-1.356
X104.431 Y211.813 Z-15.725 I0.437 J1.356
X103.557 Y209.1 Z-16.677 I-0.437 J-1.356
X104.431 Y211.813 Z-17.628 I0.437 J1.356
X103.557 Y209.1 Z-18.58 I-0.437 J-1.356
X105.419 Y210.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
X102.569 I-1.425 F2400
X105.419 I1.425
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 101.169 - X Max: 106.819)
(   Y Min: 257.632 - Y Max: 263.282)
(   Z Min: -1 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket2 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X101.519 Y259.095 F2800
( Safe G1 --> G0)
Z5 F730
( MOVEMENT_PLUNGE)
G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X106.469 Y261.818 Z0.19 I2.475 J1.361
X101.519 Y259.095 Z-0.12 I-2.475 J-1.361
X106.469 Y261.818 Z-0.43 I2.475 J1.361
X101.519 Y259.095 Z-0.74 I-2.475 J-1.361
X106.819 Y260.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
X101.169 I-2.825 F2400
X106.819 I2.825
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 102.569 - X Max: 105.419)
(   Y Min: 259.032 - Y Max: 261.882)
(   Z Min: -19.15 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket3 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X104.431 Y261.813 F2800
G1 Z4 F2400
( MOVEMENT_PLUNGE)
Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X103.557 Y259.1 Z-1.452 I-0.437 J-1.356
X104.431 Y261.813 Z-2.403 I0.437 J1.356
X103.557 Y259.1 Z-3.355 I-0.437 J-1.356
X104.431 Y261.813 Z-4.306 I0.437 J1.356
X103.557 Y259.1 Z-5.258 I-0.437 J-1.356
X104.431 Y261.813 Z-6.209 I0.437 J1.356
X103.557 Y259.1 Z-7.161 I-0.437 J-1.356
X104.431 Y261.813 Z-8.113 I0.437 J1.356
X103.557 Y259.1 Z-9.064 I-0.437 J-1.356
X104.431 Y261.813 Z-10.016 I0.437 J1.356
X103.557 Y259.1 Z-10.967 I-0.437 J-1.356
X104.431 Y261.813 Z-11.919 I0.437 J1.356
X103.557 Y259.1 Z-12.87 I-0.437 J-1.356
X104.431 Y261.813 Z-13.822 I0.437 J1.356
X103.557 Y259.1 Z-14.774 I-0.437 J-1.356
X104.431 Y261.813 Z-15.725 I0.437 J1.356
X103.557 Y259.1 Z-16.677 I-0.437 J-1.356
X104.431 Y261.813 Z-17.628 I0.437 J1.356
X103.557 Y259.1 Z-18.58 I-0.437 J-1.356
X105.419 Y260.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
X102.569 I-1.425 F2400
X105.419 I1.425
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 101.169 - X Max: 106.819)
(   Y Min: 307.632 - Y Max: 313.281)
(   Z Min: -1 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket2 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X101.519 Y309.095 F2800
( Safe G1 --> G0)
Z5 F730
( MOVEMENT_PLUNGE)
G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X106.469 Y311.818 Z0.19 I2.475 J1.361
X101.519 Y309.095 Z-0.12 I-2.475 J-1.361
X106.469 Y311.818 Z-0.43 I2.475 J1.361
X101.519 Y309.095 Z-0.74 I-2.475 J-1.361
X106.819 Y310.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
X101.169 I-2.825 F2400
X106.819 I2.825
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 102.569 - X Max: 105.419)
(   Y Min: 309.031 - Y Max: 311.882)
(   Z Min: -19.15 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket3 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X104.431 Y311.813 F2800
G1 Z4 F2400
( MOVEMENT_PLUNGE)
Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X103.557 Y309.1 Z-1.452 I-0.437 J-1.356
X104.431 Y311.813 Z-2.403 I0.437 J1.356
X103.557 Y309.1 Z-3.355 I-0.437 J-1.356
X104.431 Y311.813 Z-4.306 I0.437 J1.356
X103.557 Y309.1 Z-5.258 I-0.437 J-1.356
X104.431 Y311.813 Z-6.209 I0.437 J1.356
X103.557 Y309.1 Z-7.161 I-0.437 J-1.356
X104.431 Y311.813 Z-8.113 I0.437 J1.356
X103.557 Y309.1 Z-9.064 I-0.437 J-1.356
X104.431 Y311.813 Z-10.016 I0.437 J1.356
X103.557 Y309.1 Z-10.967 I-0.437 J-1.356
X104.431 Y311.813 Z-11.919 I0.437 J1.356
X103.557 Y309.1 Z-12.87 I-0.437 J-1.356
X104.431 Y311.813 Z-13.822 I0.437 J1.356
X103.557 Y309.1 Z-14.774 I-0.437 J-1.356
X104.431 Y311.813 Z-15.725 I0.437 J1.356
X103.557 Y309.1 Z-16.677 I-0.437 J-1.356
X104.431 Y311.813 Z-17.628 I0.437 J1.356
X103.557 Y309.1 Z-18.58 I-0.437 J-1.356
X105.419 Y310.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
X102.569 I-1.425 F2400
X105.419 I1.425
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 101.169 - X Max: 106.819)
(   Y Min: 357.632 - Y Max: 363.281)
(   Z Min: -1 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket2 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X101.519 Y359.095 F2800
( Safe G1 --> G0)
Z5 F730
( MOVEMENT_PLUNGE)
G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X106.469 Y361.818 Z0.19 I2.475 J1.361
X101.519 Y359.095 Z-0.12 I-2.475 J-1.361
X106.469 Y361.818 Z-0.43 I2.475 J1.361
X101.519 Y359.095 Z-0.74 I-2.475 J-1.361
X106.819 Y360.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
X101.169 I-2.825 F2400
X106.819 I2.825
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 102.569 - X Max: 105.419)
(   Y Min: 359.031 - Y Max: 361.882)
(   Z Min: -19.15 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket3 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X104.431 Y361.813 F2800
G1 Z4 F2400
( MOVEMENT_PLUNGE)
Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X103.557 Y359.1 Z-1.452 I-0.437 J-1.356
X104.431 Y361.813 Z-2.403 I0.437 J1.356
X103.557 Y359.1 Z-3.355 I-0.437 J-1.356
X104.431 Y361.813 Z-4.306 I0.437 J1.356
X103.557 Y359.1 Z-5.258 I-0.437 J-1.356
X104.431 Y361.813 Z-6.209 I0.437 J1.356
X103.557 Y359.1 Z-7.161 I-0.437 J-1.356
X104.431 Y361.813 Z-8.113 I0.437 J1.356
X103.557 Y359.1 Z-9.064 I-0.437 J-1.356
X104.431 Y361.813 Z-10.016 I0.437 J1.356
X103.557 Y359.1 Z-10.967 I-0.437 J-1.356
X104.431 Y361.813 Z-11.919 I0.437 J1.356
X103.557 Y359.1 Z-12.87 I-0.437 J-1.356
X104.431 Y361.813 Z-13.822 I0.437 J1.356
X103.557 Y359.1 Z-14.774 I-0.437 J-1.356
X104.431 Y361.813 Z-15.725 I0.437 J1.356
X103.557 Y359.1 Z-16.677 I-0.437 J-1.356
X104.431 Y361.813 Z-17.628 I0.437 J1.356
X103.557 Y359.1 Z-18.58 I-0.437 J-1.356
X105.419 Y360.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
X102.569 I-1.425 F2400
X105.419 I1.425
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 101.169 - X Max: 106.819)
(   Y Min: 407.632 - Y Max: 413.281)
(   Z Min: -1 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket2 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X101.519 Y409.095 F2800
( Safe G1 --> G0)
Z5 F730
( MOVEMENT_PLUNGE)
G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X106.469 Y411.818 Z0.19 I2.475 J1.361
X101.519 Y409.095 Z-0.12 I-2.475 J-1.361
X106.469 Y411.818 Z-0.43 I2.475 J1.361
X101.519 Y409.095 Z-0.74 I-2.475 J-1.361
X106.819 Y410.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
X101.169 I-2.825 F2400
X106.819 I2.825
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 102.569 - X Max: 105.419)
(   Y Min: 409.031 - Y Max: 411.882)
(   Z Min: -19.15 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket3 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X104.431 Y411.813 F2800
G1 Z4 F2400
( MOVEMENT_PLUNGE)
Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X103.557 Y409.1 Z-1.452 I-0.437 J-1.356
X104.431 Y411.813 Z-2.403 I0.437 J1.356
X103.557 Y409.1 Z-3.355 I-0.437 J-1.356
X104.431 Y411.813 Z-4.306 I0.437 J1.356
X103.557 Y409.1 Z-5.258 I-0.437 J-1.356
X104.431 Y411.813 Z-6.209 I0.437 J1.356
X103.557 Y409.1 Z-7.161 I-0.437 J-1.356
X104.431 Y411.813 Z-8.113 I0.437 J1.356
X103.557 Y409.1 Z-9.064 I-0.437 J-1.356
X104.431 Y411.813 Z-10.016 I0.437 J1.356
X103.557 Y409.1 Z-10.967 I-0.437 J-1.356
X104.431 Y411.813 Z-11.919 I0.437 J1.356
X103.557 Y409.1 Z-12.87 I-0.437 J-1.356
X104.431 Y411.813 Z-13.822 I0.437 J1.356
X103.557 Y409.1 Z-14.774 I-0.437 J-1.356
X104.431 Y411.813 Z-15.725 I0.437 J1.356
X103.557 Y409.1 Z-16.677 I-0.437 J-1.356
X104.431 Y411.813 Z-17.628 I0.437 J1.356
X103.557 Y409.1 Z-18.58 I-0.437 J-1.356
X105.419 Y410.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
X102.569 I-1.425 F2400
X105.419 I1.425
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 151.169 - X Max: 156.819)
(   Y Min: 7.632 - Y Max: 13.281)
(   Z Min: -1 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket2 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X151.519 Y9.095 F2800
( Safe G1 --> G0)
Z5 F730
( MOVEMENT_PLUNGE)
G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X156.469 Y11.818 Z0.19 I2.475 J1.361
X151.519 Y9.095 Z-0.12 I-2.475 J-1.361
X156.469 Y11.818 Z-0.43 I2.475 J1.361
X151.519 Y9.095 Z-0.74 I-2.475 J-1.361
X156.819 Y10.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
X151.169 I-2.825 F2400
X156.819 I2.825
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 152.569 - X Max: 155.419)
(   Y Min: 9.031 - Y Max: 11.882)
(   Z Min: -19.15 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket3 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X154.431 Y11.813 F2800
G1 Z4 F2400
( MOVEMENT_PLUNGE)
Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X153.557 Y9.1 Z-1.452 I-0.437 J-1.356
X154.431 Y11.813 Z-2.403 I0.437 J1.356
X153.557 Y9.1 Z-3.355 I-0.437 J-1.356
X154.431 Y11.813 Z-4.306 I0.437 J1.356
X153.557 Y9.1 Z-5.258 I-0.437 J-1.356
X154.431 Y11.813 Z-6.209 I0.437 J1.356
X153.557 Y9.1 Z-7.161 I-0.437 J-1.356
X154.431 Y11.813 Z-8.113 I0.437 J1.356
X153.557 Y9.1 Z-9.064 I-0.437 J-1.356
X154.431 Y11.813 Z-10.016 I0.437 J1.356
X153.557 Y9.1 Z-10.967 I-0.437 J-1.356
X154.431 Y11.813 Z-11.919 I0.437 J1.356
X153.557 Y9.1 Z-12.87 I-0.437 J-1.356
X154.431 Y11.813 Z-13.822 I0.437 J1.356
X153.557 Y9.1 Z-14.774 I-0.437 J-1.356
X154.431 Y11.813 Z-15.725 I0.437 J1.356
X153.557 Y9.1 Z-16.677 I-0.437 J-1.356
X154.431 Y11.813 Z-17.628 I0.437 J1.356
X153.557 Y9.1 Z-18.58 I-0.437 J-1.356
X155.419 Y10.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
X152.569 I-1.425 F2400
X155.419 I1.425
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 151.169 - X Max: 156.819)
(   Y Min: 57.632 - Y Max: 63.281)
(   Z Min: -1 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket2 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X151.519 Y59.095 F2800
( Safe G1 --> G0)
Z5 F730
( MOVEMENT_PLUNGE)
G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X156.469 Y61.818 Z0.19 I2.475 J1.361
X151.519 Y59.095 Z-0.12 I-2.475 J-1.361
X156.469 Y61.818 Z-0.43 I2.475 J1.361
X151.519 Y59.095 Z-0.74 I-2.475 J-1.361
X156.819 Y60.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
X151.169 I-2.825 F2400
X156.819 I2.825
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 152.569 - X Max: 155.419)
(   Y Min: 59.031 - Y Max: 61.882)
(   Z Min: -19.15 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket3 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X154.431 Y61.813 F2800
G1 Z4 F2400
( MOVEMENT_PLUNGE)
Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X153.557 Y59.1 Z-1.452 I-0.437 J-1.356
X154.431 Y61.813 Z-2.403 I0.437 J1.356
X153.557 Y59.1 Z-3.355 I-0.437 J-1.356
X154.431 Y61.813 Z-4.306 I0.437 J1.356
X153.557 Y59.1 Z-5.258 I-0.437 J-1.356
X154.431 Y61.813 Z-6.209 I0.437 J1.356
X153.557 Y59.1 Z-7.161 I-0.437 J-1.356
X154.431 Y61.813 Z-8.113 I0.437 J1.356
X153.557 Y59.1 Z-9.064 I-0.437 J-1.356
X154.431 Y61.813 Z-10.016 I0.437 J1.356
X153.557 Y59.1 Z-10.967 I-0.437 J-1.356
X154.431 Y61.813 Z-11.919 I0.437 J1.356
X153.557 Y59.1 Z-12.87 I-0.437 J-1.356
X154.431 Y61.813 Z-13.822 I0.437 J1.356
X153.557 Y59.1 Z-14.774 I-0.437 J-1.356
X154.431 Y61.813 Z-15.725 I0.437 J1.356
X153.557 Y59.1 Z-16.677 I-0.437 J-1.356
X154.431 Y61.813 Z-17.628 I0.437 J1.356
X153.557 Y59.1 Z-18.58 I-0.437 J-1.356
X155.419 Y60.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
X152.569 I-1.425 F2400
X155.419 I1.425
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 151.169 - X Max: 156.819)
(   Y Min: 107.632 - Y Max: 113.281)
(   Z Min: -1 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket2 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X151.519 Y109.095 F2800
( Safe G1 --> G0)
Z5 F730
( MOVEMENT_PLUNGE)
G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X156.469 Y111.818 Z0.19 I2.475 J1.361
X151.519 Y109.095 Z-0.12 I-2.475 J-1.361
X156.469 Y111.818 Z-0.43 I2.475 J1.361
X151.519 Y109.095 Z-0.74 I-2.475 J-1.361
X156.819 Y110.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
X151.169 I-2.825 F2400
X156.819 I2.825
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 152.569 - X Max: 155.419)
(   Y Min: 109.031 - Y Max: 111.882)
(   Z Min: -19.15 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket3 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X154.431 Y111.813 F2800
G1 Z4 F2400
( MOVEMENT_PLUNGE)
Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X153.557 Y109.1 Z-1.452 I-0.437 J-1.356
X154.431 Y111.813 Z-2.403 I0.437 J1.356
X153.557 Y109.1 Z-3.355 I-0.437 J-1.356
X154.431 Y111.813 Z-4.306 I0.437 J1.356
X153.557 Y109.1 Z-5.258 I-0.437 J-1.356
X154.431 Y111.813 Z-6.209 I0.437 J1.356
X153.557 Y109.1 Z-7.161 I-0.437 J-1.356
X154.431 Y111.813 Z-8.113 I0.437 J1.356
X153.557 Y109.1 Z-9.064 I-0.437 J-1.356
X154.431 Y111.813 Z-10.016 I0.437 J1.356
X153.557 Y109.1 Z-10.967 I-0.437 J-1.356
X154.431 Y111.813 Z-11.919 I0.437 J1.356
X153.557 Y109.1 Z-12.87 I-0.437 J-1.356
X154.431 Y111.813 Z-13.822 I0.437 J1.356
X153.557 Y109.1 Z-14.774 I-0.437 J-1.356
X154.431 Y111.813 Z-15.725 I0.437 J1.356
X153.557 Y109.1 Z-16.677 I-0.437 J-1.356
X154.431 Y111.813 Z-17.628 I0.437 J1.356
X153.557 Y109.1 Z-18.58 I-0.437 J-1.356
X155.419 Y110.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
X152.569 I-1.425 F2400
X155.419 I1.425
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 151.169 - X Max: 156.819)
(   Y Min: 157.632 - Y Max: 163.282)
(   Z Min: -1 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket2 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X151.519 Y159.095 F2800
( Safe G1 --> G0)
Z5 F730
( MOVEMENT_PLUNGE)
G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X156.469 Y161.818 Z0.19 I2.475 J1.361
X151.519 Y159.095 Z-0.12 I-2.475 J-1.361
X156.469 Y161.818 Z-0.43 I2.475 J1.361
X151.519 Y159.095 Z-0.74 I-2.475 J-1.361
X156.819 Y160.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
X151.169 I-2.825 F2400
X156.819 I2.825
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 152.569 - X Max: 155.419)
(   Y Min: 159.032 - Y Max: 161.882)
(   Z Min: -19.15 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket3 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X154.431 Y161.813 F2800
G1 Z4 F2400
( MOVEMENT_PLUNGE)
Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X153.557 Y159.1 Z-1.452 I-0.437 J-1.356
X154.431 Y161.813 Z-2.403 I0.437 J1.356
X153.557 Y159.1 Z-3.355 I-0.437 J-1.356
X154.431 Y161.813 Z-4.306 I0.437 J1.356
X153.557 Y159.1 Z-5.258 I-0.437 J-1.356
X154.431 Y161.813 Z-6.209 I0.437 J1.356
X153.557 Y159.1 Z-7.161 I-0.437 J-1.356
X154.431 Y161.813 Z-8.113 I0.437 J1.356
X153.557 Y159.1 Z-9.064 I-0.437 J-1.356
X154.431 Y161.813 Z-10.016 I0.437 J1.356
X153.557 Y159.1 Z-10.967 I-0.437 J-1.356
X154.431 Y161.813 Z-11.919 I0.437 J1.356
X153.557 Y159.1 Z-12.87 I-0.437 J-1.356
X154.431 Y161.813 Z-13.822 I0.437 J1.356
X153.557 Y159.1 Z-14.774 I-0.437 J-1.356
X154.431 Y161.813 Z-15.725 I0.437 J1.356
X153.557 Y159.1 Z-16.677 I-0.437 J-1.356
X154.431 Y161.813 Z-17.628 I0.437 J1.356
X153.557 Y159.1 Z-18.58 I-0.437 J-1.356
X155.419 Y160.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
X152.569 I-1.425 F2400
X155.419 I1.425
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 151.169 - X Max: 156.819)
(   Y Min: 207.632 - Y Max: 213.282)
(   Z Min: -1 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket2 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X151.519 Y209.095 F2800
( Safe G1 --> G0)
Z5 F730
( MOVEMENT_PLUNGE)
G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X156.469 Y211.818 Z0.19 I2.475 J1.361
X151.519 Y209.095 Z-0.12 I-2.475 J-1.361
X156.469 Y211.818 Z-0.43 I2.475 J1.361
X151.519 Y209.095 Z-0.74 I-2.475 J-1.361
X156.819 Y210.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
X151.169 I-2.825 F2400
X156.819 I2.825
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 152.569 - X Max: 155.419)
(   Y Min: 209.032 - Y Max: 211.882)
(   Z Min: -19.15 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket3 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X154.431 Y211.813 F2800
G1 Z4 F2400
( MOVEMENT_PLUNGE)
Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X153.557 Y209.1 Z-1.452 I-0.437 J-1.356
X154.431 Y211.813 Z-2.403 I0.437 J1.356
X153.557 Y209.1 Z-3.355 I-0.437 J-1.356
X154.431 Y211.813 Z-4.306 I0.437 J1.356
X153.557 Y209.1 Z-5.258 I-0.437 J-1.356
X154.431 Y211.813 Z-6.209 I0.437 J1.356
X153.557 Y209.1 Z-7.161 I-0.437 J-1.356
X154.431 Y211.813 Z-8.113 I0.437 J1.356
X153.557 Y209.1 Z-9.064 I-0.437 J-1.356
X154.431 Y211.813 Z-10.016 I0.437 J1.356
X153.557 Y209.1 Z-10.967 I-0.437 J-1.356
X154.431 Y211.813 Z-11.919 I0.437 J1.356
X153.557 Y209.1 Z-12.87 I-0.437 J-1.356
X154.431 Y211.813 Z-13.822 I0.437 J1.356
X153.557 Y209.1 Z-14.774 I-0.437 J-1.356
X154.431 Y211.813 Z-15.725 I0.437 J1.356
X153.557 Y209.1 Z-16.677 I-0.437 J-1.356
X154.431 Y211.813 Z-17.628 I0.437 J1.356
X153.557 Y209.1 Z-18.58 I-0.437 J-1.356
X155.419 Y210.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
X152.569 I-1.425 F2400
X155.419 I1.425
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 151.169 - X Max: 156.819)
(   Y Min: 257.632 - Y Max: 263.282)
(   Z Min: -1 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket2 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X151.519 Y259.095 F2800
( Safe G1 --> G0)
Z5 F730
( MOVEMENT_PLUNGE)
G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X156.469 Y261.818 Z0.19 I2.475 J1.361
X151.519 Y259.095 Z-0.12 I-2.475 J-1.361
X156.469 Y261.818 Z-0.43 I2.475 J1.361
X151.519 Y259.095 Z-0.74 I-2.475 J-1.361
X156.819 Y260.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
X151.169 I-2.825 F2400
X156.819 I2.825
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 152.569 - X Max: 155.419)
(   Y Min: 259.032 - Y Max: 261.882)
(   Z Min: -19.15 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket3 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X154.431 Y261.813 F2800
G1 Z4 F2400
( MOVEMENT_PLUNGE)
Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X153.557 Y259.1 Z-1.452 I-0.437 J-1.356
X154.431 Y261.813 Z-2.403 I0.437 J1.356
X153.557 Y259.1 Z-3.355 I-0.437 J-1.356
X154.431 Y261.813 Z-4.306 I0.437 J1.356
X153.557 Y259.1 Z-5.258 I-0.437 J-1.356
X154.431 Y261.813 Z-6.209 I0.437 J1.356
X153.557 Y259.1 Z-7.161 I-0.437 J-1.356
X154.431 Y261.813 Z-8.113 I0.437 J1.356
X153.557 Y259.1 Z-9.064 I-0.437 J-1.356
X154.431 Y261.813 Z-10.016 I0.437 J1.356
X153.557 Y259.1 Z-10.967 I-0.437 J-1.356
X154.431 Y261.813 Z-11.919 I0.437 J1.356
X153.557 Y259.1 Z-12.87 I-0.437 J-1.356
X154.431 Y261.813 Z-13.822 I0.437 J1.356
X153.557 Y259.1 Z-14.774 I-0.437 J-1.356
X154.431 Y261.813 Z-15.725 I0.437 J1.356
X153.557 Y259.1 Z-16.677 I-0.437 J-1.356
X154.431 Y261.813 Z-17.628 I0.437 J1.356
X153.557 Y259.1 Z-18.58 I-0.437 J-1.356
X155.419 Y260.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
X152.569 I-1.425 F2400
X155.419 I1.425
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 151.169 - X Max: 156.819)
(   Y Min: 307.632 - Y Max: 313.281)
(   Z Min: -1 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket2 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X151.519 Y309.095 F2800
( Safe G1 --> G0)
Z5 F730
( MOVEMENT_PLUNGE)
G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X156.469 Y311.818 Z0.19 I2.475 J1.361
X151.519 Y309.095 Z-0.12 I-2.475 J-1.361
X156.469 Y311.818 Z-0.43 I2.475 J1.361
X151.519 Y309.095 Z-0.74 I-2.475 J-1.361
X156.819 Y310.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
X151.169 I-2.825 F2400
X156.819 I2.825
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 152.569 - X Max: 155.419)
(   Y Min: 309.031 - Y Max: 311.882)
(   Z Min: -19.15 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket3 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X154.431 Y311.813 F2800
G1 Z4 F2400
( MOVEMENT_PLUNGE)
Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X153.557 Y309.1 Z-1.452 I-0.437 J-1.356
X154.431 Y311.813 Z-2.403 I0.437 J1.356
X153.557 Y309.1 Z-3.355 I-0.437 J-1.356
X154.431 Y311.813 Z-4.306 I0.437 J1.356
X153.557 Y309.1 Z-5.258 I-0.437 J-1.356
X154.431 Y311.813 Z-6.209 I0.437 J1.356
X153.557 Y309.1 Z-7.161 I-0.437 J-1.356
X154.431 Y311.813 Z-8.113 I0.437 J1.356
X153.557 Y309.1 Z-9.064 I-0.437 J-1.356
X154.431 Y311.813 Z-10.016 I0.437 J1.356
X153.557 Y309.1 Z-10.967 I-0.437 J-1.356
X154.431 Y311.813 Z-11.919 I0.437 J1.356
X153.557 Y309.1 Z-12.87 I-0.437 J-1.356
X154.431 Y311.813 Z-13.822 I0.437 J1.356
X153.557 Y309.1 Z-14.774 I-0.437 J-1.356
X154.431 Y311.813 Z-15.725 I0.437 J1.356
X153.557 Y309.1 Z-16.677 I-0.437 J-1.356
X154.431 Y311.813 Z-17.628 I0.437 J1.356
X153.557 Y309.1 Z-18.58 I-0.437 J-1.356
X155.419 Y310.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
X152.569 I-1.425 F2400
X155.419 I1.425
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 151.169 - X Max: 156.819)
(   Y Min: 357.632 - Y Max: 363.281)
(   Z Min: -1 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket2 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X151.519 Y359.095 F2800
( Safe G1 --> G0)
Z5 F730
( MOVEMENT_PLUNGE)
G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X156.469 Y361.818 Z0.19 I2.475 J1.361
X151.519 Y359.095 Z-0.12 I-2.475 J-1.361
X156.469 Y361.818 Z-0.43 I2.475 J1.361
X151.519 Y359.095 Z-0.74 I-2.475 J-1.361
X156.819 Y360.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
X151.169 I-2.825 F2400
X156.819 I2.825
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 152.569 - X Max: 155.419)
(   Y Min: 359.031 - Y Max: 361.882)
(   Z Min: -19.15 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket3 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X154.431 Y361.813 F2800
G1 Z4 F2400
( MOVEMENT_PLUNGE)
Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X153.557 Y359.1 Z-1.452 I-0.437 J-1.356
X154.431 Y361.813 Z-2.403 I0.437 J1.356
X153.557 Y359.1 Z-3.355 I-0.437 J-1.356
X154.431 Y361.813 Z-4.306 I0.437 J1.356
X153.557 Y359.1 Z-5.258 I-0.437 J-1.356
X154.431 Y361.813 Z-6.209 I0.437 J1.356
X153.557 Y359.1 Z-7.161 I-0.437 J-1.356
X154.431 Y361.813 Z-8.113 I0.437 J1.356
X153.557 Y359.1 Z-9.064 I-0.437 J-1.356
X154.431 Y361.813 Z-10.016 I0.437 J1.356
X153.557 Y359.1 Z-10.967 I-0.437 J-1.356
X154.431 Y361.813 Z-11.919 I0.437 J1.356
X153.557 Y359.1 Z-12.87 I-0.437 J-1.356
X154.431 Y361.813 Z-13.822 I0.437 J1.356
X153.557 Y359.1 Z-14.774 I-0.437 J-1.356
X154.431 Y361.813 Z-15.725 I0.437 J1.356
X153.557 Y359.1 Z-16.677 I-0.437 J-1.356
X154.431 Y361.813 Z-17.628 I0.437 J1.356
X153.557 Y359.1 Z-18.58 I-0.437 J-1.356
X155.419 Y360.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
X152.569 I-1.425 F2400
X155.419 I1.425
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 151.169 - X Max: 156.819)
(   Y Min: 407.632 - Y Max: 413.281)
(   Z Min: -1 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket2 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X151.519 Y409.095 F2800
( Safe G1 --> G0)
Z5 F730
( MOVEMENT_PLUNGE)
G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X156.469 Y411.818 Z0.19 I2.475 J1.361
X151.519 Y409.095 Z-0.12 I-2.475 J-1.361
X156.469 Y411.818 Z-0.43 I2.475 J1.361
X151.519 Y409.095 Z-0.74 I-2.475 J-1.361
X156.819 Y410.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
X151.169 I-2.825 F2400
X156.819 I2.825
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 152.569 - X Max: 155.419)
(   Y Min: 409.031 - Y Max: 411.882)
(   Z Min: -19.15 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket3 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X154.431 Y411.813 F2800
G1 Z4 F2400
( MOVEMENT_PLUNGE)
Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X153.557 Y409.1 Z-1.452 I-0.437 J-1.356
X154.431 Y411.813 Z-2.403 I0.437 J1.356
X153.557 Y409.1 Z-3.355 I-0.437 J-1.356
X154.431 Y411.813 Z-4.306 I0.437 J1.356
X153.557 Y409.1 Z-5.258 I-0.437 J-1.356
X154.431 Y411.813 Z-6.209 I0.437 J1.356
X153.557 Y409.1 Z-7.161 I-0.437 J-1.356
X154.431 Y411.813 Z-8.113 I0.437 J1.356
X153.557 Y409.1 Z-9.064 I-0.437 J-1.356
X154.431 Y411.813 Z-10.016 I0.437 J1.356
X153.557 Y409.1 Z-10.967 I-0.437 J-1.356
X154.431 Y411.813 Z-11.919 I0.437 J1.356
X153.557 Y409.1 Z-12.87 I-0.437 J-1.356
X154.431 Y411.813 Z-13.822 I0.437 J1.356
X153.557 Y409.1 Z-14.774 I-0.437 J-1.356
X154.431 Y411.813 Z-15.725 I0.437 J1.356
X153.557 Y409.1 Z-16.677 I-0.437 J-1.356
X154.431 Y411.813 Z-17.628 I0.437 J1.356
X153.557 Y409.1 Z-18.58 I-0.437 J-1.356
X155.419 Y410.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
X152.569 I-1.425 F2400
X155.419 I1.425
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 201.169 - X Max: 206.819)
(   Y Min: 7.632 - Y Max: 13.281)
(   Z Min: -1 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket2 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X201.519 Y9.095 F2800
( Safe G1 --> G0)
Z5 F730
( MOVEMENT_PLUNGE)
G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X206.469 Y11.818 Z0.19 I2.475 J1.361
X201.519 Y9.095 Z-0.12 I-2.475 J-1.361
X206.469 Y11.818 Z-0.43 I2.475 J1.361
X201.519 Y9.095 Z-0.74 I-2.475 J-1.361
X206.819 Y10.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
X201.169 I-2.825 F2400
X206.819 I2.825
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 202.569 - X Max: 205.419)
(   Y Min: 9.031 - Y Max: 11.882)
(   Z Min: -19.15 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket3 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X204.431 Y11.813 F2800
G1 Z4 F2400
( MOVEMENT_PLUNGE)
Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X203.557 Y9.1 Z-1.452 I-0.437 J-1.356
X204.431 Y11.813 Z-2.403 I0.437 J1.356
X203.557 Y9.1 Z-3.355 I-0.437 J-1.356
X204.431 Y11.813 Z-4.306 I0.437 J1.356
X203.557 Y9.1 Z-5.258 I-0.437 J-1.356
X204.431 Y11.813 Z-6.209 I0.437 J1.356
X203.557 Y9.1 Z-7.161 I-0.437 J-1.356
X204.431 Y11.813 Z-8.113 I0.437 J1.356
X203.557 Y9.1 Z-9.064 I-0.437 J-1.356
X204.431 Y11.813 Z-10.016 I0.437 J1.356
X203.557 Y9.1 Z-10.967 I-0.437 J-1.356
X204.431 Y11.813 Z-11.919 I0.437 J1.356
X203.557 Y9.1 Z-12.87 I-0.437 J-1.356
X204.431 Y11.813 Z-13.822 I0.437 J1.356
X203.557 Y9.1 Z-14.774 I-0.437 J-1.356
X204.431 Y11.813 Z-15.725 I0.437 J1.356
X203.557 Y9.1 Z-16.677 I-0.437 J-1.356
X204.431 Y11.813 Z-17.628 I0.437 J1.356
X203.557 Y9.1 Z-18.58 I-0.437 J-1.356
X205.419 Y10.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
X202.569 I-1.425 F2400
X205.419 I1.425
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 201.169 - X Max: 206.819)
(   Y Min: 57.632 - Y Max: 63.281)
(   Z Min: -1 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket2 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X201.519 Y59.095 F2800
( Safe G1 --> G0)
Z5 F730
( MOVEMENT_PLUNGE)
G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X206.469 Y61.818 Z0.19 I2.475 J1.361
X201.519 Y59.095 Z-0.12 I-2.475 J-1.361
X206.469 Y61.818 Z-0.43 I2.475 J1.361
X201.519 Y59.095 Z-0.74 I-2.475 J-1.361
X206.819 Y60.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
X201.169 I-2.825 F2400
X206.819 I2.825
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 202.569 - X Max: 205.419)
(   Y Min: 59.031 - Y Max: 61.882)
(   Z Min: -19.15 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket3 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X204.431 Y61.813 F2800
G1 Z4 F2400
( MOVEMENT_PLUNGE)
Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X203.557 Y59.1 Z-1.452 I-0.437 J-1.356
X204.431 Y61.813 Z-2.403 I0.437 J1.356
X203.557 Y59.1 Z-3.355 I-0.437 J-1.356
X204.431 Y61.813 Z-4.306 I0.437 J1.356
X203.557 Y59.1 Z-5.258 I-0.437 J-1.356
X204.431 Y61.813 Z-6.209 I0.437 J1.356
X203.557 Y59.1 Z-7.161 I-0.437 J-1.356
X204.431 Y61.813 Z-8.113 I0.437 J1.356
X203.557 Y59.1 Z-9.064 I-0.437 J-1.356
X204.431 Y61.813 Z-10.016 I0.437 J1.356
X203.557 Y59.1 Z-10.967 I-0.437 J-1.356
X204.431 Y61.813 Z-11.919 I0.437 J1.356
X203.557 Y59.1 Z-12.87 I-0.437 J-1.356
X204.431 Y61.813 Z-13.822 I0.437 J1.356
X203.557 Y59.1 Z-14.774 I-0.437 J-1.356
X204.431 Y61.813 Z-15.725 I0.437 J1.356
X203.557 Y59.1 Z-16.677 I-0.437 J-1.356
X204.431 Y61.813 Z-17.628 I0.437 J1.356
X203.557 Y59.1 Z-18.58 I-0.437 J-1.356
X205.419 Y60.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
X202.569 I-1.425 F2400
X205.419 I1.425
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 201.169 - X Max: 206.819)
(   Y Min: 107.632 - Y Max: 113.281)
(   Z Min: -1 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket2 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X201.519 Y109.095 F2800
( Safe G1 --> G0)
Z5 F730
( MOVEMENT_PLUNGE)
G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X206.469 Y111.818 Z0.19 I2.475 J1.361
X201.519 Y109.095 Z-0.12 I-2.475 J-1.361
X206.469 Y111.818 Z-0.43 I2.475 J1.361
X201.519 Y109.095 Z-0.74 I-2.475 J-1.361
X206.819 Y110.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
X201.169 I-2.825 F2400
X206.819 I2.825
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 202.569 - X Max: 205.419)
(   Y Min: 109.031 - Y Max: 111.882)
(   Z Min: -19.15 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket3 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X204.431 Y111.813 F2800
G1 Z4 F2400
( MOVEMENT_PLUNGE)
Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X203.557 Y109.1 Z-1.452 I-0.437 J-1.356
X204.431 Y111.813 Z-2.403 I0.437 J1.356
X203.557 Y109.1 Z-3.355 I-0.437 J-1.356
X204.431 Y111.813 Z-4.306 I0.437 J1.356
X203.557 Y109.1 Z-5.258 I-0.437 J-1.356
X204.431 Y111.813 Z-6.209 I0.437 J1.356
X203.557 Y109.1 Z-7.161 I-0.437 J-1.356
X204.431 Y111.813 Z-8.113 I0.437 J1.356
X203.557 Y109.1 Z-9.064 I-0.437 J-1.356
X204.431 Y111.813 Z-10.016 I0.437 J1.356
X203.557 Y109.1 Z-10.967 I-0.437 J-1.356
X204.431 Y111.813 Z-11.919 I0.437 J1.356
X203.557 Y109.1 Z-12.87 I-0.437 J-1.356
X204.431 Y111.813 Z-13.822 I0.437 J1.356
X203.557 Y109.1 Z-14.774 I-0.437 J-1.356
X204.431 Y111.813 Z-15.725 I0.437 J1.356
X203.557 Y109.1 Z-16.677 I-0.437 J-1.356
X204.431 Y111.813 Z-17.628 I0.437 J1.356
X203.557 Y109.1 Z-18.58 I-0.437 J-1.356
X205.419 Y110.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
X202.569 I-1.425 F2400
X205.419 I1.425
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 201.169 - X Max: 206.819)
(   Y Min: 157.632 - Y Max: 163.282)
(   Z Min: -1 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket2 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X201.519 Y159.095 F2800
( Safe G1 --> G0)
Z5 F730
( MOVEMENT_PLUNGE)
G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X206.469 Y161.818 Z0.19 I2.475 J1.361
X201.519 Y159.095 Z-0.12 I-2.475 J-1.361
X206.469 Y161.818 Z-0.43 I2.475 J1.361
X201.519 Y159.095 Z-0.74 I-2.475 J-1.361
X206.819 Y160.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
X201.169 I-2.825 F2400
X206.819 I2.825
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 202.569 - X Max: 205.419)
(   Y Min: 159.032 - Y Max: 161.882)
(   Z Min: -19.15 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket3 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X204.431 Y161.813 F2800
G1 Z4 F2400
( MOVEMENT_PLUNGE)
Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X203.557 Y159.1 Z-1.452 I-0.437 J-1.356
X204.431 Y161.813 Z-2.403 I0.437 J1.356
X203.557 Y159.1 Z-3.355 I-0.437 J-1.356
X204.431 Y161.813 Z-4.306 I0.437 J1.356
X203.557 Y159.1 Z-5.258 I-0.437 J-1.356
X204.431 Y161.813 Z-6.209 I0.437 J1.356
X203.557 Y159.1 Z-7.161 I-0.437 J-1.356
X204.431 Y161.813 Z-8.113 I0.437 J1.356
X203.557 Y159.1 Z-9.064 I-0.437 J-1.356
X204.431 Y161.813 Z-10.016 I0.437 J1.356
X203.557 Y159.1 Z-10.967 I-0.437 J-1.356
X204.431 Y161.813 Z-11.919 I0.437 J1.356
X203.557 Y159.1 Z-12.87 I-0.437 J-1.356
X204.431 Y161.813 Z-13.822 I0.437 J1.356
X203.557 Y159.1 Z-14.774 I-0.437 J-1.356
X204.431 Y161.813 Z-15.725 I0.437 J1.356
X203.557 Y159.1 Z-16.677 I-0.437 J-1.356
X204.431 Y161.813 Z-17.628 I0.437 J1.356
X203.557 Y159.1 Z-18.58 I-0.437 J-1.356
X205.419 Y160.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
X202.569 I-1.425 F2400
X205.419 I1.425
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 201.169 - X Max: 206.819)
(   Y Min: 207.632 - Y Max: 213.282)
(   Z Min: -1 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket2 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X201.519 Y209.095 F2800
( Safe G1 --> G0)
Z5 F730
( MOVEMENT_PLUNGE)
G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X206.469 Y211.818 Z0.19 I2.475 J1.361
X201.519 Y209.095 Z-0.12 I-2.475 J-1.361
X206.469 Y211.818 Z-0.43 I2.475 J1.361
X201.519 Y209.095 Z-0.74 I-2.475 J-1.361
X206.819 Y210.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
X201.169 I-2.825 F2400
X206.819 I2.825
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 202.569 - X Max: 205.419)
(   Y Min: 209.032 - Y Max: 211.882)
(   Z Min: -19.15 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket3 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X204.431 Y211.813 F2800
G1 Z4 F2400
( MOVEMENT_PLUNGE)
Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X203.557 Y209.1 Z-1.452 I-0.437 J-1.356
X204.431 Y211.813 Z-2.403 I0.437 J1.356
X203.557 Y209.1 Z-3.355 I-0.437 J-1.356
X204.431 Y211.813 Z-4.306 I0.437 J1.356
X203.557 Y209.1 Z-5.258 I-0.437 J-1.356
X204.431 Y211.813 Z-6.209 I0.437 J1.356
X203.557 Y209.1 Z-7.161 I-0.437 J-1.356
X204.431 Y211.813 Z-8.113 I0.437 J1.356
X203.557 Y209.1 Z-9.064 I-0.437 J-1.356
X204.431 Y211.813 Z-10.016 I0.437 J1.356
X203.557 Y209.1 Z-10.967 I-0.437 J-1.356
X204.431 Y211.813 Z-11.919 I0.437 J1.356
X203.557 Y209.1 Z-12.87 I-0.437 J-1.356
X204.431 Y211.813 Z-13.822 I0.437 J1.356
X203.557 Y209.1 Z-14.774 I-0.437 J-1.356
X204.431 Y211.813 Z-15.725 I0.437 J1.356
X203.557 Y209.1 Z-16.677 I-0.437 J-1.356
X204.431 Y211.813 Z-17.628 I0.437 J1.356
X203.557 Y209.1 Z-18.58 I-0.437 J-1.356
X205.419 Y210.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
X202.569 I-1.425 F2400
X205.419 I1.425
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 201.169 - X Max: 206.819)
(   Y Min: 257.632 - Y Max: 263.282)
(   Z Min: -1 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket2 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X201.519 Y259.095 F2800
( Safe G1 --> G0)
Z5 F730
( MOVEMENT_PLUNGE)
G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X206.469 Y261.818 Z0.19 I2.475 J1.361
X201.519 Y259.095 Z-0.12 I-2.475 J-1.361
X206.469 Y261.818 Z-0.43 I2.475 J1.361
X201.519 Y259.095 Z-0.74 I-2.475 J-1.361
X206.819 Y260.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
X201.169 I-2.825 F2400
X206.819 I2.825
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 202.569 - X Max: 205.419)
(   Y Min: 259.032 - Y Max: 261.882)
(   Z Min: -19.15 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket3 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X204.431 Y261.813 F2800
G1 Z4 F2400
( MOVEMENT_PLUNGE)
Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X203.557 Y259.1 Z-1.452 I-0.437 J-1.356
X204.431 Y261.813 Z-2.403 I0.437 J1.356
X203.557 Y259.1 Z-3.355 I-0.437 J-1.356
X204.431 Y261.813 Z-4.306 I0.437 J1.356
X203.557 Y259.1 Z-5.258 I-0.437 J-1.356
X204.431 Y261.813 Z-6.209 I0.437 J1.356
X203.557 Y259.1 Z-7.161 I-0.437 J-1.356
X204.431 Y261.813 Z-8.113 I0.437 J1.356
X203.557 Y259.1 Z-9.064 I-0.437 J-1.356
X204.431 Y261.813 Z-10.016 I0.437 J1.356
X203.557 Y259.1 Z-10.967 I-0.437 J-1.356
X204.431 Y261.813 Z-11.919 I0.437 J1.356
X203.557 Y259.1 Z-12.87 I-0.437 J-1.356
X204.431 Y261.813 Z-13.822 I0.437 J1.356
X203.557 Y259.1 Z-14.774 I-0.437 J-1.356
X204.431 Y261.813 Z-15.725 I0.437 J1.356
X203.557 Y259.1 Z-16.677 I-0.437 J-1.356
X204.431 Y261.813 Z-17.628 I0.437 J1.356
X203.557 Y259.1 Z-18.58 I-0.437 J-1.356
X205.419 Y260.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
X202.569 I-1.425 F2400
X205.419 I1.425
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 201.169 - X Max: 206.819)
(   Y Min: 307.632 - Y Max: 313.281)
(   Z Min: -1 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket2 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X201.519 Y309.095 F2800
( Safe G1 --> G0)
Z5 F730
( MOVEMENT_PLUNGE)
G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X206.469 Y311.818 Z0.19 I2.475 J1.361
X201.519 Y309.095 Z-0.12 I-2.475 J-1.361
X206.469 Y311.818 Z-0.43 I2.475 J1.361
X201.519 Y309.095 Z-0.74 I-2.475 J-1.361
X206.819 Y310.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
X201.169 I-2.825 F2400
X206.819 I2.825
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 202.569 - X Max: 205.419)
(   Y Min: 309.031 - Y Max: 311.882)
(   Z Min: -19.15 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket3 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X204.431 Y311.813 F2800
G1 Z4 F2400
( MOVEMENT_PLUNGE)
Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X203.557 Y309.1 Z-1.452 I-0.437 J-1.356
X204.431 Y311.813 Z-2.403 I0.437 J1.356
X203.557 Y309.1 Z-3.355 I-0.437 J-1.356
X204.431 Y311.813 Z-4.306 I0.437 J1.356
X203.557 Y309.1 Z-5.258 I-0.437 J-1.356
X204.431 Y311.813 Z-6.209 I0.437 J1.356
X203.557 Y309.1 Z-7.161 I-0.437 J-1.356
X204.431 Y311.813 Z-8.113 I0.437 J1.356
X203.557 Y309.1 Z-9.064 I-0.437 J-1.356
X204.431 Y311.813 Z-10.016 I0.437 J1.356
X203.557 Y309.1 Z-10.967 I-0.437 J-1.356
X204.431 Y311.813 Z-11.919 I0.437 J1.356
X203.557 Y309.1 Z-12.87 I-0.437 J-1.356
X204.431 Y311.813 Z-13.822 I0.437 J1.356
X203.557 Y309.1 Z-14.774 I-0.437 J-1.356
X204.431 Y311.813 Z-15.725 I0.437 J1.356
X203.557 Y309.1 Z-16.677 I-0.437 J-1.356
X204.431 Y311.813 Z-17.628 I0.437 J1.356
X203.557 Y309.1 Z-18.58 I-0.437 J-1.356
X205.419 Y310.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
X202.569 I-1.425 F2400
X205.419 I1.425
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 201.169 - X Max: 206.819)
(   Y Min: 357.632 - Y Max: 363.281)
(   Z Min: -1 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket2 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X201.519 Y359.095 F2800
( Safe G1 --> G0)
Z5 F730
( MOVEMENT_PLUNGE)
G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X206.469 Y361.818 Z0.19 I2.475 J1.361
X201.519 Y359.095 Z-0.12 I-2.475 J-1.361
X206.469 Y361.818 Z-0.43 I2.475 J1.361
X201.519 Y359.095 Z-0.74 I-2.475 J-1.361
X206.819 Y360.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
X201.169 I-2.825 F2400
X206.819 I2.825
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 202.569 - X Max: 205.419)
(   Y Min: 359.031 - Y Max: 361.882)
(   Z Min: -19.15 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket3 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X204.431 Y361.813 F2800
G1 Z4 F2400
( MOVEMENT_PLUNGE)
Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X203.557 Y359.1 Z-1.452 I-0.437 J-1.356
X204.431 Y361.813 Z-2.403 I0.437 J1.356
X203.557 Y359.1 Z-3.355 I-0.437 J-1.356
X204.431 Y361.813 Z-4.306 I0.437 J1.356
X203.557 Y359.1 Z-5.258 I-0.437 J-1.356
X204.431 Y361.813 Z-6.209 I0.437 J1.356
X203.557 Y359.1 Z-7.161 I-0.437 J-1.356
X204.431 Y361.813 Z-8.113 I0.437 J1.356
X203.557 Y359.1 Z-9.064 I-0.437 J-1.356
X204.431 Y361.813 Z-10.016 I0.437 J1.356
X203.557 Y359.1 Z-10.967 I-0.437 J-1.356
X204.431 Y361.813 Z-11.919 I0.437 J1.356
X203.557 Y359.1 Z-12.87 I-0.437 J-1.356
X204.431 Y361.813 Z-13.822 I0.437 J1.356
X203.557 Y359.1 Z-14.774 I-0.437 J-1.356
X204.431 Y361.813 Z-15.725 I0.437 J1.356
X203.557 Y359.1 Z-16.677 I-0.437 J-1.356
X204.431 Y361.813 Z-17.628 I0.437 J1.356
X203.557 Y359.1 Z-18.58 I-0.437 J-1.356
X205.419 Y360.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
X202.569 I-1.425 F2400
X205.419 I1.425
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 201.169 - X Max: 206.819)
(   Y Min: 407.632 - Y Max: 413.281)
(   Z Min: -1 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket2 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X201.519 Y409.095 F2800
( Safe G1 --> G0)
Z5 F730
( MOVEMENT_PLUNGE)
G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X206.469 Y411.818 Z0.19 I2.475 J1.361
X201.519 Y409.095 Z-0.12 I-2.475 J-1.361
X206.469 Y411.818 Z-0.43 I2.475 J1.361
X201.519 Y409.095 Z-0.74 I-2.475 J-1.361
X206.819 Y410.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
X201.169 I-2.825 F2400
X206.819 I2.825
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 202.569 - X Max: 205.419)
(   Y Min: 409.031 - Y Max: 411.882)
(   Z Min: -19.15 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket3 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X204.431 Y411.813 F2800
G1 Z4 F2400
( MOVEMENT_PLUNGE)
Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X203.557 Y409.1 Z-1.452 I-0.437 J-1.356
X204.431 Y411.813 Z-2.403 I0.437 J1.356
X203.557 Y409.1 Z-3.355 I-0.437 J-1.356
X204.431 Y411.813 Z-4.306 I0.437 J1.356
X203.557 Y409.1 Z-5.258 I-0.437 J-1.356
X204.431 Y411.813 Z-6.209 I0.437 J1.356
X203.557 Y409.1 Z-7.161 I-0.437 J-1.356
X204.431 Y411.813 Z-8.113 I0.437 J1.356
X203.557 Y409.1 Z-9.064 I-0.437 J-1.356
X204.431 Y411.813 Z-10.016 I0.437 J1.356
X203.557 Y409.1 Z-10.967 I-0.437 J-1.356
X204.431 Y411.813 Z-11.919 I0.437 J1.356
X203.557 Y409.1 Z-12.87 I-0.437 J-1.356
X204.431 Y411.813 Z-13.822 I0.437 J1.356
X203.557 Y409.1 Z-14.774 I-0.437 J-1.356
X204.431 Y411.813 Z-15.725 I0.437 J1.356
X203.557 Y409.1 Z-16.677 I-0.437 J-1.356
X204.431 Y411.813 Z-17.628 I0.437 J1.356
X203.557 Y409.1 Z-18.58 I-0.437 J-1.356
X205.419 Y410.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
X202.569 I-1.425 F2400
X205.419 I1.425
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 251.169 - X Max: 256.819)
(   Y Min: 7.632 - Y Max: 13.281)
(   Z Min: -1 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket2 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X251.519 Y9.095 F2800
( Safe G1 --> G0)
Z5 F730
( MOVEMENT_PLUNGE)
G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X256.469 Y11.818 Z0.19 I2.475 J1.361
X251.519 Y9.095 Z-0.12 I-2.475 J-1.361
X256.469 Y11.818 Z-0.43 I2.475 J1.361
X251.519 Y9.095 Z-0.74 I-2.475 J-1.361
X256.819 Y10.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
X251.169 I-2.825 F2400
X256.819 I2.825
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 252.569 - X Max: 255.419)
(   Y Min: 9.031 - Y Max: 11.882)
(   Z Min: -19.15 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket3 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X254.431 Y11.813 F2800
G1 Z4 F2400
( MOVEMENT_PLUNGE)
Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X253.557 Y9.1 Z-1.452 I-0.437 J-1.356
X254.431 Y11.813 Z-2.403 I0.437 J1.356
X253.557 Y9.1 Z-3.355 I-0.437 J-1.356
X254.431 Y11.813 Z-4.306 I0.437 J1.356
X253.557 Y9.1 Z-5.258 I-0.437 J-1.356
X254.431 Y11.813 Z-6.209 I0.437 J1.356
X253.557 Y9.1 Z-7.161 I-0.437 J-1.356
X254.431 Y11.813 Z-8.113 I0.437 J1.356
X253.557 Y9.1 Z-9.064 I-0.437 J-1.356
X254.431 Y11.813 Z-10.016 I0.437 J1.356
X253.557 Y9.1 Z-10.967 I-0.437 J-1.356
X254.431 Y11.813 Z-11.919 I0.437 J1.356
X253.557 Y9.1 Z-12.87 I-0.437 J-1.356
X254.431 Y11.813 Z-13.822 I0.437 J1.356
X253.557 Y9.1 Z-14.774 I-0.437 J-1.356
X254.431 Y11.813 Z-15.725 I0.437 J1.356
X253.557 Y9.1 Z-16.677 I-0.437 J-1.356
X254.431 Y11.813 Z-17.628 I0.437 J1.356
X253.557 Y9.1 Z-18.58 I-0.437 J-1.356
X255.419 Y10.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
X252.569 I-1.425 F2400
X255.419 I1.425
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 251.169 - X Max: 256.819)
(   Y Min: 57.632 - Y Max: 63.281)
(   Z Min: -1 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket2 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X251.519 Y59.095 F2800
( Safe G1 --> G0)
Z5 F730
( MOVEMENT_PLUNGE)
G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X256.469 Y61.818 Z0.19 I2.475 J1.361
X251.519 Y59.095 Z-0.12 I-2.475 J-1.361
X256.469 Y61.818 Z-0.43 I2.475 J1.361
X251.519 Y59.095 Z-0.74 I-2.475 J-1.361
X256.819 Y60.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
X251.169 I-2.825 F2400
X256.819 I2.825
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 252.569 - X Max: 255.419)
(   Y Min: 59.031 - Y Max: 61.882)
(   Z Min: -19.15 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket3 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X254.431 Y61.813 F2800
G1 Z4 F2400
( MOVEMENT_PLUNGE)
Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X253.557 Y59.1 Z-1.452 I-0.437 J-1.356
X254.431 Y61.813 Z-2.403 I0.437 J1.356
X253.557 Y59.1 Z-3.355 I-0.437 J-1.356
X254.431 Y61.813 Z-4.306 I0.437 J1.356
X253.557 Y59.1 Z-5.258 I-0.437 J-1.356
X254.431 Y61.813 Z-6.209 I0.437 J1.356
X253.557 Y59.1 Z-7.161 I-0.437 J-1.356
X254.431 Y61.813 Z-8.113 I0.437 J1.356
X253.557 Y59.1 Z-9.064 I-0.437 J-1.356
X254.431 Y61.813 Z-10.016 I0.437 J1.356
X253.557 Y59.1 Z-10.967 I-0.437 J-1.356
X254.431 Y61.813 Z-11.919 I0.437 J1.356
X253.557 Y59.1 Z-12.87 I-0.437 J-1.356
X254.431 Y61.813 Z-13.822 I0.437 J1.356
X253.557 Y59.1 Z-14.774 I-0.437 J-1.356
X254.431 Y61.813 Z-15.725 I0.437 J1.356
X253.557 Y59.1 Z-16.677 I-0.437 J-1.356
X254.431 Y61.813 Z-17.628 I0.437 J1.356
X253.557 Y59.1 Z-18.58 I-0.437 J-1.356
X255.419 Y60.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
X252.569 I-1.425 F2400
X255.419 I1.425
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 251.169 - X Max: 256.819)
(   Y Min: 107.632 - Y Max: 113.281)
(   Z Min: -1 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket2 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X251.519 Y109.095 F2800
( Safe G1 --> G0)
Z5 F730
( MOVEMENT_PLUNGE)
G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X256.469 Y111.818 Z0.19 I2.475 J1.361
X251.519 Y109.095 Z-0.12 I-2.475 J-1.361
X256.469 Y111.818 Z-0.43 I2.475 J1.361
X251.519 Y109.095 Z-0.74 I-2.475 J-1.361
X256.819 Y110.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
X251.169 I-2.825 F2400
X256.819 I2.825
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 252.569 - X Max: 255.419)
(   Y Min: 109.031 - Y Max: 111.882)
(   Z Min: -19.15 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket3 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X254.431 Y111.813 F2800
G1 Z4 F2400
( MOVEMENT_PLUNGE)
Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X253.557 Y109.1 Z-1.452 I-0.437 J-1.356
X254.431 Y111.813 Z-2.403 I0.437 J1.356
X253.557 Y109.1 Z-3.355 I-0.437 J-1.356
X254.431 Y111.813 Z-4.306 I0.437 J1.356
X253.557 Y109.1 Z-5.258 I-0.437 J-1.356
X254.431 Y111.813 Z-6.209 I0.437 J1.356
X253.557 Y109.1 Z-7.161 I-0.437 J-1.356
X254.431 Y111.813 Z-8.113 I0.437 J1.356
X253.557 Y109.1 Z-9.064 I-0.437 J-1.356
X254.431 Y111.813 Z-10.016 I0.437 J1.356
X253.557 Y109.1 Z-10.967 I-0.437 J-1.356
X254.431 Y111.813 Z-11.919 I0.437 J1.356
X253.557 Y109.1 Z-12.87 I-0.437 J-1.356
X254.431 Y111.813 Z-13.822 I0.437 J1.356
X253.557 Y109.1 Z-14.774 I-0.437 J-1.356
X254.431 Y111.813 Z-15.725 I0.437 J1.356
X253.557 Y109.1 Z-16.677 I-0.437 J-1.356
X254.431 Y111.813 Z-17.628 I0.437 J1.356
X253.557 Y109.1 Z-18.58 I-0.437 J-1.356
X255.419 Y110.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
X252.569 I-1.425 F2400
X255.419 I1.425
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 251.169 - X Max: 256.819)
(   Y Min: 157.632 - Y Max: 163.282)
(   Z Min: -1 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket2 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X251.519 Y159.095 F2800
( Safe G1 --> G0)
Z5 F730
( MOVEMENT_PLUNGE)
G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X256.469 Y161.818 Z0.19 I2.475 J1.361
X251.519 Y159.095 Z-0.12 I-2.475 J-1.361
X256.469 Y161.818 Z-0.43 I2.475 J1.361
X251.519 Y159.095 Z-0.74 I-2.475 J-1.361
X256.819 Y160.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
X251.169 I-2.825 F2400
X256.819 I2.825
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 252.569 - X Max: 255.419)
(   Y Min: 159.032 - Y Max: 161.882)
(   Z Min: -19.15 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket3 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X254.431 Y161.813 F2800
G1 Z4 F2400
( MOVEMENT_PLUNGE)
Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X253.557 Y159.1 Z-1.452 I-0.437 J-1.356
X254.431 Y161.813 Z-2.403 I0.437 J1.356
X253.557 Y159.1 Z-3.355 I-0.437 J-1.356
X254.431 Y161.813 Z-4.306 I0.437 J1.356
X253.557 Y159.1 Z-5.258 I-0.437 J-1.356
X254.431 Y161.813 Z-6.209 I0.437 J1.356
X253.557 Y159.1 Z-7.161 I-0.437 J-1.356
X254.431 Y161.813 Z-8.113 I0.437 J1.356
X253.557 Y159.1 Z-9.064 I-0.437 J-1.356
X254.431 Y161.813 Z-10.016 I0.437 J1.356
X253.557 Y159.1 Z-10.967 I-0.437 J-1.356
X254.431 Y161.813 Z-11.919 I0.437 J1.356
X253.557 Y159.1 Z-12.87 I-0.437 J-1.356
X254.431 Y161.813 Z-13.822 I0.437 J1.356
X253.557 Y159.1 Z-14.774 I-0.437 J-1.356
X254.431 Y161.813 Z-15.725 I0.437 J1.356
X253.557 Y159.1 Z-16.677 I-0.437 J-1.356
X254.431 Y161.813 Z-17.628 I0.437 J1.356
X253.557 Y159.1 Z-18.58 I-0.437 J-1.356
X255.419 Y160.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
X252.569 I-1.425 F2400
X255.419 I1.425
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 251.169 - X Max: 256.819)
(   Y Min: 207.632 - Y Max: 213.282)
(   Z Min: -1 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket2 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X251.519 Y209.095 F2800
( Safe G1 --> G0)
Z5 F730
( MOVEMENT_PLUNGE)
G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X256.469 Y211.818 Z0.19 I2.475 J1.361
X251.519 Y209.095 Z-0.12 I-2.475 J-1.361
X256.469 Y211.818 Z-0.43 I2.475 J1.361
X251.519 Y209.095 Z-0.74 I-2.475 J-1.361
X256.819 Y210.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
X251.169 I-2.825 F2400
X256.819 I2.825
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 252.569 - X Max: 255.419)
(   Y Min: 209.032 - Y Max: 211.882)
(   Z Min: -19.15 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket3 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X254.431 Y211.813 F2800
G1 Z4 F2400
( MOVEMENT_PLUNGE)
Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X253.557 Y209.1 Z-1.452 I-0.437 J-1.356
X254.431 Y211.813 Z-2.403 I0.437 J1.356
X253.557 Y209.1 Z-3.355 I-0.437 J-1.356
X254.431 Y211.813 Z-4.306 I0.437 J1.356
X253.557 Y209.1 Z-5.258 I-0.437 J-1.356
X254.431 Y211.813 Z-6.209 I0.437 J1.356
X253.557 Y209.1 Z-7.161 I-0.437 J-1.356
X254.431 Y211.813 Z-8.113 I0.437 J1.356
X253.557 Y209.1 Z-9.064 I-0.437 J-1.356
X254.431 Y211.813 Z-10.016 I0.437 J1.356
X253.557 Y209.1 Z-10.967 I-0.437 J-1.356
X254.431 Y211.813 Z-11.919 I0.437 J1.356
X253.557 Y209.1 Z-12.87 I-0.437 J-1.356
X254.431 Y211.813 Z-13.822 I0.437 J1.356
X253.557 Y209.1 Z-14.774 I-0.437 J-1.356
X254.431 Y211.813 Z-15.725 I0.437 J1.356
X253.557 Y209.1 Z-16.677 I-0.437 J-1.356
X254.431 Y211.813 Z-17.628 I0.437 J1.356
X253.557 Y209.1 Z-18.58 I-0.437 J-1.356
X255.419 Y210.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
X252.569 I-1.425 F2400
X255.419 I1.425
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 251.169 - X Max: 256.819)
(   Y Min: 257.632 - Y Max: 263.282)
(   Z Min: -1 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket2 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X251.519 Y259.095 F2800
( Safe G1 --> G0)
Z5 F730
( MOVEMENT_PLUNGE)
G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X256.469 Y261.818 Z0.19 I2.475 J1.361
X251.519 Y259.095 Z-0.12 I-2.475 J-1.361
X256.469 Y261.818 Z-0.43 I2.475 J1.361
X251.519 Y259.095 Z-0.74 I-2.475 J-1.361
X256.819 Y260.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
X251.169 I-2.825 F2400
X256.819 I2.825
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 252.569 - X Max: 255.419)
(   Y Min: 259.032 - Y Max: 261.882)
(   Z Min: -19.15 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket3 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X254.431 Y261.813 F2800
G1 Z4 F2400
( MOVEMENT_PLUNGE)
Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X253.557 Y259.1 Z-1.452 I-0.437 J-1.356
X254.431 Y261.813 Z-2.403 I0.437 J1.356
X253.557 Y259.1 Z-3.355 I-0.437 J-1.356
X254.431 Y261.813 Z-4.306 I0.437 J1.356
X253.557 Y259.1 Z-5.258 I-0.437 J-1.356
X254.431 Y261.813 Z-6.209 I0.437 J1.356
X253.557 Y259.1 Z-7.161 I-0.437 J-1.356
X254.431 Y261.813 Z-8.113 I0.437 J1.356
X253.557 Y259.1 Z-9.064 I-0.437 J-1.356
X254.431 Y261.813 Z-10.016 I0.437 J1.356
X253.557 Y259.1 Z-10.967 I-0.437 J-1.356
X254.431 Y261.813 Z-11.919 I0.437 J1.356
X253.557 Y259.1 Z-12.87 I-0.437 J-1.356
X254.431 Y261.813 Z-13.822 I0.437 J1.356
X253.557 Y259.1 Z-14.774 I-0.437 J-1.356
X254.431 Y261.813 Z-15.725 I0.437 J1.356
X253.557 Y259.1 Z-16.677 I-0.437 J-1.356
X254.431 Y261.813 Z-17.628 I0.437 J1.356
X253.557 Y259.1 Z-18.58 I-0.437 J-1.356
X255.419 Y260.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
X252.569 I-1.425 F2400
X255.419 I1.425
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 251.169 - X Max: 256.819)
(   Y Min: 307.632 - Y Max: 313.281)
(   Z Min: -1 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket2 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X251.519 Y309.095 F2800
( Safe G1 --> G0)
Z5 F730
( MOVEMENT_PLUNGE)
G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X256.469 Y311.818 Z0.19 I2.475 J1.361
X251.519 Y309.095 Z-0.12 I-2.475 J-1.361
X256.469 Y311.818 Z-0.43 I2.475 J1.361
X251.519 Y309.095 Z-0.74 I-2.475 J-1.361
X256.819 Y310.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
X251.169 I-2.825 F2400
X256.819 I2.825
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 252.569 - X Max: 255.419)
(   Y Min: 309.031 - Y Max: 311.882)
(   Z Min: -19.15 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket3 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X254.431 Y311.813 F2800
G1 Z4 F2400
( MOVEMENT_PLUNGE)
Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X253.557 Y309.1 Z-1.452 I-0.437 J-1.356
X254.431 Y311.813 Z-2.403 I0.437 J1.356
X253.557 Y309.1 Z-3.355 I-0.437 J-1.356
X254.431 Y311.813 Z-4.306 I0.437 J1.356
X253.557 Y309.1 Z-5.258 I-0.437 J-1.356
X254.431 Y311.813 Z-6.209 I0.437 J1.356
X253.557 Y309.1 Z-7.161 I-0.437 J-1.356
X254.431 Y311.813 Z-8.113 I0.437 J1.356
X253.557 Y309.1 Z-9.064 I-0.437 J-1.356
X254.431 Y311.813 Z-10.016 I0.437 J1.356
X253.557 Y309.1 Z-10.967 I-0.437 J-1.356
X254.431 Y311.813 Z-11.919 I0.437 J1.356
X253.557 Y309.1 Z-12.87 I-0.437 J-1.356
X254.431 Y311.813 Z-13.822 I0.437 J1.356
X253.557 Y309.1 Z-14.774 I-0.437 J-1.356
X254.431 Y311.813 Z-15.725 I0.437 J1.356
X253.557 Y309.1 Z-16.677 I-0.437 J-1.356
X254.431 Y311.813 Z-17.628 I0.437 J1.356
X253.557 Y309.1 Z-18.58 I-0.437 J-1.356
X255.419 Y310.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
X252.569 I-1.425 F2400
X255.419 I1.425
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 251.169 - X Max: 256.819)
(   Y Min: 357.632 - Y Max: 363.281)
(   Z Min: -1 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket2 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X251.519 Y359.095 F2800
( Safe G1 --> G0)
Z5 F730
( MOVEMENT_PLUNGE)
G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X256.469 Y361.818 Z0.19 I2.475 J1.361
X251.519 Y359.095 Z-0.12 I-2.475 J-1.361
X256.469 Y361.818 Z-0.43 I2.475 J1.361
X251.519 Y359.095 Z-0.74 I-2.475 J-1.361
X256.819 Y360.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
X251.169 I-2.825 F2400
X256.819 I2.825
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 252.569 - X Max: 255.419)
(   Y Min: 359.031 - Y Max: 361.882)
(   Z Min: -19.15 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket3 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X254.431 Y361.813 F2800
G1 Z4 F2400
( MOVEMENT_PLUNGE)
Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X253.557 Y359.1 Z-1.452 I-0.437 J-1.356
X254.431 Y361.813 Z-2.403 I0.437 J1.356
X253.557 Y359.1 Z-3.355 I-0.437 J-1.356
X254.431 Y361.813 Z-4.306 I0.437 J1.356
X253.557 Y359.1 Z-5.258 I-0.437 J-1.356
X254.431 Y361.813 Z-6.209 I0.437 J1.356
X253.557 Y359.1 Z-7.161 I-0.437 J-1.356
X254.431 Y361.813 Z-8.113 I0.437 J1.356
X253.557 Y359.1 Z-9.064 I-0.437 J-1.356
X254.431 Y361.813 Z-10.016 I0.437 J1.356
X253.557 Y359.1 Z-10.967 I-0.437 J-1.356
X254.431 Y361.813 Z-11.919 I0.437 J1.356
X253.557 Y359.1 Z-12.87 I-0.437 J-1.356
X254.431 Y361.813 Z-13.822 I0.437 J1.356
X253.557 Y359.1 Z-14.774 I-0.437 J-1.356
X254.431 Y361.813 Z-15.725 I0.437 J1.356
X253.557 Y359.1 Z-16.677 I-0.437 J-1.356
X254.431 Y361.813 Z-17.628 I0.437 J1.356
X253.557 Y359.1 Z-18.58 I-0.437 J-1.356
X255.419 Y360.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
X252.569 I-1.425 F2400
X255.419 I1.425
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 251.169 - X Max: 256.819)
(   Y Min: 407.632 - Y Max: 413.281)
(   Z Min: -1 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket2 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X251.519 Y409.095 F2800
( Safe G1 --> G0)
Z5 F730
( MOVEMENT_PLUNGE)
G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X256.469 Y411.818 Z0.19 I2.475 J1.361
X251.519 Y409.095 Z-0.12 I-2.475 J-1.361
X256.469 Y411.818 Z-0.43 I2.475 J1.361
X251.519 Y409.095 Z-0.74 I-2.475 J-1.361
X256.819 Y410.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
X251.169 I-2.825 F2400
X256.819 I2.825
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 252.569 - X Max: 255.419)
(   Y Min: 409.031 - Y Max: 411.882)
(   Z Min: -19.15 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket3 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X254.431 Y411.813 F2800
G1 Z4 F2400
( MOVEMENT_PLUNGE)
Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X253.557 Y409.1 Z-1.452 I-0.437 J-1.356
X254.431 Y411.813 Z-2.403 I0.437 J1.356
X253.557 Y409.1 Z-3.355 I-0.437 J-1.356
X254.431 Y411.813 Z-4.306 I0.437 J1.356
X253.557 Y409.1 Z-5.258 I-0.437 J-1.356
X254.431 Y411.813 Z-6.209 I0.437 J1.356
X253.557 Y409.1 Z-7.161 I-0.437 J-1.356
X254.431 Y411.813 Z-8.113 I0.437 J1.356
X253.557 Y409.1 Z-9.064 I-0.437 J-1.356
X254.431 Y411.813 Z-10.016 I0.437 J1.356
X253.557 Y409.1 Z-10.967 I-0.437 J-1.356
X254.431 Y411.813 Z-11.919 I0.437 J1.356
X253.557 Y409.1 Z-12.87 I-0.437 J-1.356
X254.431 Y411.813 Z-13.822 I0.437 J1.356
X253.557 Y409.1 Z-14.774 I-0.437 J-1.356
X254.431 Y411.813 Z-15.725 I0.437 J1.356
X253.557 Y409.1 Z-16.677 I-0.437 J-1.356
X254.431 Y411.813 Z-17.628 I0.437 J1.356
X253.557 Y409.1 Z-18.58 I-0.437 J-1.356
X255.419 Y410.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
X252.569 I-1.425 F2400
X255.419 I1.425
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 301.169 - X Max: 306.819)
(   Y Min: 7.632 - Y Max: 13.281)
(   Z Min: -1 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket2 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X301.519 Y9.095 F2800
( Safe G1 --> G0)
Z5 F730
( MOVEMENT_PLUNGE)
G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X306.469 Y11.818 Z0.19 I2.475 J1.361
X301.519 Y9.095 Z-0.12 I-2.475 J-1.361
X306.469 Y11.818 Z-0.43 I2.475 J1.361
X301.519 Y9.095 Z-0.74 I-2.475 J-1.361
X306.819 Y10.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
X301.169 I-2.825 F2400
X306.819 I2.825
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 302.569 - X Max: 305.419)
(   Y Min: 9.031 - Y Max: 11.882)
(   Z Min: -19.15 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket3 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X304.431 Y11.813 F2800
G1 Z4 F2400
( MOVEMENT_PLUNGE)
Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X303.557 Y9.1 Z-1.452 I-0.437 J-1.356
X304.431 Y11.813 Z-2.403 I0.437 J1.356
X303.557 Y9.1 Z-3.355 I-0.437 J-1.356
X304.431 Y11.813 Z-4.306 I0.437 J1.356
X303.557 Y9.1 Z-5.258 I-0.437 J-1.356
X304.431 Y11.813 Z-6.209 I0.437 J1.356
X303.557 Y9.1 Z-7.161 I-0.437 J-1.356
X304.431 Y11.813 Z-8.113 I0.437 J1.356
X303.557 Y9.1 Z-9.064 I-0.437 J-1.356
X304.431 Y11.813 Z-10.016 I0.437 J1.356
X303.557 Y9.1 Z-10.967 I-0.437 J-1.356
X304.431 Y11.813 Z-11.919 I0.437 J1.356
X303.557 Y9.1 Z-12.87 I-0.437 J-1.356
X304.431 Y11.813 Z-13.822 I0.437 J1.356
X303.557 Y9.1 Z-14.774 I-0.437 J-1.356
X304.431 Y11.813 Z-15.725 I0.437 J1.356
X303.557 Y9.1 Z-16.677 I-0.437 J-1.356
X304.431 Y11.813 Z-17.628 I0.437 J1.356
X303.557 Y9.1 Z-18.58 I-0.437 J-1.356
X305.419 Y10.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
X302.569 I-1.425 F2400
X305.419 I1.425
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 301.169 - X Max: 306.819)
(   Y Min: 57.632 - Y Max: 63.281)
(   Z Min: -1 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket2 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X301.519 Y59.095 F2800
( Safe G1 --> G0)
Z5 F730
( MOVEMENT_PLUNGE)
G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X306.469 Y61.818 Z0.19 I2.475 J1.361
X301.519 Y59.095 Z-0.12 I-2.475 J-1.361
X306.469 Y61.818 Z-0.43 I2.475 J1.361
X301.519 Y59.095 Z-0.74 I-2.475 J-1.361
X306.819 Y60.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
X301.169 I-2.825 F2400
X306.819 I2.825
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 302.569 - X Max: 305.419)
(   Y Min: 59.031 - Y Max: 61.882)
(   Z Min: -19.15 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket3 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X304.431 Y61.813 F2800
G1 Z4 F2400
( MOVEMENT_PLUNGE)
Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X303.557 Y59.1 Z-1.452 I-0.437 J-1.356
X304.431 Y61.813 Z-2.403 I0.437 J1.356
X303.557 Y59.1 Z-3.355 I-0.437 J-1.356
X304.431 Y61.813 Z-4.306 I0.437 J1.356
X303.557 Y59.1 Z-5.258 I-0.437 J-1.356
X304.431 Y61.813 Z-6.209 I0.437 J1.356
X303.557 Y59.1 Z-7.161 I-0.437 J-1.356
X304.431 Y61.813 Z-8.113 I0.437 J1.356
X303.557 Y59.1 Z-9.064 I-0.437 J-1.356
X304.431 Y61.813 Z-10.016 I0.437 J1.356
X303.557 Y59.1 Z-10.967 I-0.437 J-1.356
X304.431 Y61.813 Z-11.919 I0.437 J1.356
X303.557 Y59.1 Z-12.87 I-0.437 J-1.356
X304.431 Y61.813 Z-13.822 I0.437 J1.356
X303.557 Y59.1 Z-14.774 I-0.437 J-1.356
X304.431 Y61.813 Z-15.725 I0.437 J1.356
X303.557 Y59.1 Z-16.677 I-0.437 J-1.356
X304.431 Y61.813 Z-17.628 I0.437 J1.356
X303.557 Y59.1 Z-18.58 I-0.437 J-1.356
X305.419 Y60.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
X302.569 I-1.425 F2400
X305.419 I1.425
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 301.169 - X Max: 306.819)
(   Y Min: 107.632 - Y Max: 113.281)
(   Z Min: -1 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket2 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X301.519 Y109.095 F2800
( Safe G1 --> G0)
Z5 F730
( MOVEMENT_PLUNGE)
G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X306.469 Y111.818 Z0.19 I2.475 J1.361
X301.519 Y109.095 Z-0.12 I-2.475 J-1.361
X306.469 Y111.818 Z-0.43 I2.475 J1.361
X301.519 Y109.095 Z-0.74 I-2.475 J-1.361
X306.819 Y110.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
X301.169 I-2.825 F2400
X306.819 I2.825
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 302.569 - X Max: 305.419)
(   Y Min: 109.031 - Y Max: 111.882)
(   Z Min: -19.15 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket3 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X304.431 Y111.813 F2800
G1 Z4 F2400
( MOVEMENT_PLUNGE)
Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X303.557 Y109.1 Z-1.452 I-0.437 J-1.356
X304.431 Y111.813 Z-2.403 I0.437 J1.356
X303.557 Y109.1 Z-3.355 I-0.437 J-1.356
X304.431 Y111.813 Z-4.306 I0.437 J1.356
X303.557 Y109.1 Z-5.258 I-0.437 J-1.356
X304.431 Y111.813 Z-6.209 I0.437 J1.356
X303.557 Y109.1 Z-7.161 I-0.437 J-1.356
X304.431 Y111.813 Z-8.113 I0.437 J1.356
X303.557 Y109.1 Z-9.064 I-0.437 J-1.356
X304.431 Y111.813 Z-10.016 I0.437 J1.356
X303.557 Y109.1 Z-10.967 I-0.437 J-1.356
X304.431 Y111.813 Z-11.919 I0.437 J1.356
X303.557 Y109.1 Z-12.87 I-0.437 J-1.356
X304.431 Y111.813 Z-13.822 I0.437 J1.356
X303.557 Y109.1 Z-14.774 I-0.437 J-1.356
X304.431 Y111.813 Z-15.725 I0.437 J1.356
X303.557 Y109.1 Z-16.677 I-0.437 J-1.356
X304.431 Y111.813 Z-17.628 I0.437 J1.356
X303.557 Y109.1 Z-18.58 I-0.437 J-1.356
X305.419 Y110.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
X302.569 I-1.425 F2400
X305.419 I1.425
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 301.169 - X Max: 306.819)
(   Y Min: 157.632 - Y Max: 163.282)
(   Z Min: -1 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket2 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X301.519 Y159.095 F2800
( Safe G1 --> G0)
Z5 F730
( MOVEMENT_PLUNGE)
G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X306.469 Y161.818 Z0.19 I2.475 J1.361
X301.519 Y159.095 Z-0.12 I-2.475 J-1.361
X306.469 Y161.818 Z-0.43 I2.475 J1.361
X301.519 Y159.095 Z-0.74 I-2.475 J-1.361
X306.819 Y160.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
X301.169 I-2.825 F2400
X306.819 I2.825
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 302.569 - X Max: 305.419)
(   Y Min: 159.032 - Y Max: 161.882)
(   Z Min: -19.15 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket3 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X304.431 Y161.813 F2800
G1 Z4 F2400
( MOVEMENT_PLUNGE)
Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X303.557 Y159.1 Z-1.452 I-0.437 J-1.356
X304.431 Y161.813 Z-2.403 I0.437 J1.356
X303.557 Y159.1 Z-3.355 I-0.437 J-1.356
X304.431 Y161.813 Z-4.306 I0.437 J1.356
X303.557 Y159.1 Z-5.258 I-0.437 J-1.356
X304.431 Y161.813 Z-6.209 I0.437 J1.356
X303.557 Y159.1 Z-7.161 I-0.437 J-1.356
X304.431 Y161.813 Z-8.113 I0.437 J1.356
X303.557 Y159.1 Z-9.064 I-0.437 J-1.356
X304.431 Y161.813 Z-10.016 I0.437 J1.356
X303.557 Y159.1 Z-10.967 I-0.437 J-1.356
X304.431 Y161.813 Z-11.919 I0.437 J1.356
X303.557 Y159.1 Z-12.87 I-0.437 J-1.356
X304.431 Y161.813 Z-13.822 I0.437 J1.356
X303.557 Y159.1 Z-14.774 I-0.437 J-1.356
X304.431 Y161.813 Z-15.725 I0.437 J1.356
X303.557 Y159.1 Z-16.677 I-0.437 J-1.356
X304.431 Y161.813 Z-17.628 I0.437 J1.356
X303.557 Y159.1 Z-18.58 I-0.437 J-1.356
X305.419 Y160.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
X302.569 I-1.425 F2400
X305.419 I1.425
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 301.169 - X Max: 306.819)
(   Y Min: 207.632 - Y Max: 213.282)
(   Z Min: -1 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket2 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X301.519 Y209.095 F2800
( Safe G1 --> G0)
Z5 F730
( MOVEMENT_PLUNGE)
G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X306.469 Y211.818 Z0.19 I2.475 J1.361
X301.519 Y209.095 Z-0.12 I-2.475 J-1.361
X306.469 Y211.818 Z-0.43 I2.475 J1.361
X301.519 Y209.095 Z-0.74 I-2.475 J-1.361
X306.819 Y210.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
X301.169 I-2.825 F2400
X306.819 I2.825
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 302.569 - X Max: 305.419)
(   Y Min: 209.032 - Y Max: 211.882)
(   Z Min: -19.15 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket3 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X304.431 Y211.813 F2800
G1 Z4 F2400
( MOVEMENT_PLUNGE)
Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X303.557 Y209.1 Z-1.452 I-0.437 J-1.356
X304.431 Y211.813 Z-2.403 I0.437 J1.356
X303.557 Y209.1 Z-3.355 I-0.437 J-1.356
X304.431 Y211.813 Z-4.306 I0.437 J1.356
X303.557 Y209.1 Z-5.258 I-0.437 J-1.356
X304.431 Y211.813 Z-6.209 I0.437 J1.356
X303.557 Y209.1 Z-7.161 I-0.437 J-1.356
X304.431 Y211.813 Z-8.113 I0.437 J1.356
X303.557 Y209.1 Z-9.064 I-0.437 J-1.356
X304.431 Y211.813 Z-10.016 I0.437 J1.356
X303.557 Y209.1 Z-10.967 I-0.437 J-1.356
X304.431 Y211.813 Z-11.919 I0.437 J1.356
X303.557 Y209.1 Z-12.87 I-0.437 J-1.356
X304.431 Y211.813 Z-13.822 I0.437 J1.356
X303.557 Y209.1 Z-14.774 I-0.437 J-1.356
X304.431 Y211.813 Z-15.725 I0.437 J1.356
X303.557 Y209.1 Z-16.677 I-0.437 J-1.356
X304.431 Y211.813 Z-17.628 I0.437 J1.356
X303.557 Y209.1 Z-18.58 I-0.437 J-1.356
X305.419 Y210.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
X302.569 I-1.425 F2400
X305.419 I1.425
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 301.169 - X Max: 306.819)
(   Y Min: 257.632 - Y Max: 263.282)
(   Z Min: -1 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket2 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X301.519 Y259.095 F2800
( Safe G1 --> G0)
Z5 F730
( MOVEMENT_PLUNGE)
G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X306.469 Y261.818 Z0.19 I2.475 J1.361
X301.519 Y259.095 Z-0.12 I-2.475 J-1.361
X306.469 Y261.818 Z-0.43 I2.475 J1.361
X301.519 Y259.095 Z-0.74 I-2.475 J-1.361
X306.819 Y260.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
X301.169 I-2.825 F2400
X306.819 I2.825
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 302.569 - X Max: 305.419)
(   Y Min: 259.032 - Y Max: 261.882)
(   Z Min: -19.15 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket3 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X304.431 Y261.813 F2800
G1 Z4 F2400
( MOVEMENT_PLUNGE)
Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X303.557 Y259.1 Z-1.452 I-0.437 J-1.356
X304.431 Y261.813 Z-2.403 I0.437 J1.356
X303.557 Y259.1 Z-3.355 I-0.437 J-1.356
X304.431 Y261.813 Z-4.306 I0.437 J1.356
X303.557 Y259.1 Z-5.258 I-0.437 J-1.356
X304.431 Y261.813 Z-6.209 I0.437 J1.356
X303.557 Y259.1 Z-7.161 I-0.437 J-1.356
X304.431 Y261.813 Z-8.113 I0.437 J1.356
X303.557 Y259.1 Z-9.064 I-0.437 J-1.356
X304.431 Y261.813 Z-10.016 I0.437 J1.356
X303.557 Y259.1 Z-10.967 I-0.437 J-1.356
X304.431 Y261.813 Z-11.919 I0.437 J1.356
X303.557 Y259.1 Z-12.87 I-0.437 J-1.356
X304.431 Y261.813 Z-13.822 I0.437 J1.356
X303.557 Y259.1 Z-14.774 I-0.437 J-1.356
X304.431 Y261.813 Z-15.725 I0.437 J1.356
X303.557 Y259.1 Z-16.677 I-0.437 J-1.356
X304.431 Y261.813 Z-17.628 I0.437 J1.356
X303.557 Y259.1 Z-18.58 I-0.437 J-1.356
X305.419 Y260.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
X302.569 I-1.425 F2400
X305.419 I1.425
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 301.169 - X Max: 306.819)
(   Y Min: 307.632 - Y Max: 313.281)
(   Z Min: -1 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket2 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X301.519 Y309.095 F2800
( Safe G1 --> G0)
Z5 F730
( MOVEMENT_PLUNGE)
G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X306.469 Y311.818 Z0.19 I2.475 J1.361
X301.519 Y309.095 Z-0.12 I-2.475 J-1.361
X306.469 Y311.818 Z-0.43 I2.475 J1.361
X301.519 Y309.095 Z-0.74 I-2.475 J-1.361
X306.819 Y310.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
X301.169 I-2.825 F2400
X306.819 I2.825
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 302.569 - X Max: 305.419)
(   Y Min: 309.031 - Y Max: 311.882)
(   Z Min: -19.15 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket3 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X304.431 Y311.813 F2800
G1 Z4 F2400
( MOVEMENT_PLUNGE)
Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X303.557 Y309.1 Z-1.452 I-0.437 J-1.356
X304.431 Y311.813 Z-2.403 I0.437 J1.356
X303.557 Y309.1 Z-3.355 I-0.437 J-1.356
X304.431 Y311.813 Z-4.306 I0.437 J1.356
X303.557 Y309.1 Z-5.258 I-0.437 J-1.356
X304.431 Y311.813 Z-6.209 I0.437 J1.356
X303.557 Y309.1 Z-7.161 I-0.437 J-1.356
X304.431 Y311.813 Z-8.113 I0.437 J1.356
X303.557 Y309.1 Z-9.064 I-0.437 J-1.356
X304.431 Y311.813 Z-10.016 I0.437 J1.356
X303.557 Y309.1 Z-10.967 I-0.437 J-1.356
X304.431 Y311.813 Z-11.919 I0.437 J1.356
X303.557 Y309.1 Z-12.87 I-0.437 J-1.356
X304.431 Y311.813 Z-13.822 I0.437 J1.356
X303.557 Y309.1 Z-14.774 I-0.437 J-1.356
X304.431 Y311.813 Z-15.725 I0.437 J1.356
X303.557 Y309.1 Z-16.677 I-0.437 J-1.356
X304.431 Y311.813 Z-17.628 I0.437 J1.356
X303.557 Y309.1 Z-18.58 I-0.437 J-1.356
X305.419 Y310.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
X302.569 I-1.425 F2400
X305.419 I1.425
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 301.169 - X Max: 306.819)
(   Y Min: 357.632 - Y Max: 363.281)
(   Z Min: -1 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket2 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X301.519 Y359.095 F2800
( Safe G1 --> G0)
Z5 F730
( MOVEMENT_PLUNGE)
G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X306.469 Y361.818 Z0.19 I2.475 J1.361
X301.519 Y359.095 Z-0.12 I-2.475 J-1.361
X306.469 Y361.818 Z-0.43 I2.475 J1.361
X301.519 Y359.095 Z-0.74 I-2.475 J-1.361
X306.819 Y360.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
X301.169 I-2.825 F2400
X306.819 I2.825
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 302.569 - X Max: 305.419)
(   Y Min: 359.031 - Y Max: 361.882)
(   Z Min: -19.15 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket3 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X304.431 Y361.813 F2800
G1 Z4 F2400
( MOVEMENT_PLUNGE)
Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X303.557 Y359.1 Z-1.452 I-0.437 J-1.356
X304.431 Y361.813 Z-2.403 I0.437 J1.356
X303.557 Y359.1 Z-3.355 I-0.437 J-1.356
X304.431 Y361.813 Z-4.306 I0.437 J1.356
X303.557 Y359.1 Z-5.258 I-0.437 J-1.356
X304.431 Y361.813 Z-6.209 I0.437 J1.356
X303.557 Y359.1 Z-7.161 I-0.437 J-1.356
X304.431 Y361.813 Z-8.113 I0.437 J1.356
X303.557 Y359.1 Z-9.064 I-0.437 J-1.356
X304.431 Y361.813 Z-10.016 I0.437 J1.356
X303.557 Y359.1 Z-10.967 I-0.437 J-1.356
X304.431 Y361.813 Z-11.919 I0.437 J1.356
X303.557 Y359.1 Z-12.87 I-0.437 J-1.356
X304.431 Y361.813 Z-13.822 I0.437 J1.356
X303.557 Y359.1 Z-14.774 I-0.437 J-1.356
X304.431 Y361.813 Z-15.725 I0.437 J1.356
X303.557 Y359.1 Z-16.677 I-0.437 J-1.356
X304.431 Y361.813 Z-17.628 I0.437 J1.356
X303.557 Y359.1 Z-18.58 I-0.437 J-1.356
X305.419 Y360.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
X302.569 I-1.425 F2400
X305.419 I1.425
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 301.169 - X Max: 306.819)
(   Y Min: 407.632 - Y Max: 413.281)
(   Z Min: -1 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket2 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X301.519 Y409.095 F2800
( Safe G1 --> G0)
Z5 F730
( MOVEMENT_PLUNGE)
G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X306.469 Y411.818 Z0.19 I2.475 J1.361
X301.519 Y409.095 Z-0.12 I-2.475 J-1.361
X306.469 Y411.818 Z-0.43 I2.475 J1.361
X301.519 Y409.095 Z-0.74 I-2.475 J-1.361
X306.819 Y410.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
X301.169 I-2.825 F2400
X306.819 I2.825
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 302.569 - X Max: 305.419)
(   Y Min: 409.031 - Y Max: 411.882)
(   Z Min: -19.15 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket3 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X304.431 Y411.813 F2800
G1 Z4 F2400
( MOVEMENT_PLUNGE)
Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X303.557 Y409.1 Z-1.452 I-0.437 J-1.356
X304.431 Y411.813 Z-2.403 I0.437 J1.356
X303.557 Y409.1 Z-3.355 I-0.437 J-1.356
X304.431 Y411.813 Z-4.306 I0.437 J1.356
X303.557 Y409.1 Z-5.258 I-0.437 J-1.356
X304.431 Y411.813 Z-6.209 I0.437 J1.356
X303.557 Y409.1 Z-7.161 I-0.437 J-1.356
X304.431 Y411.813 Z-8.113 I0.437 J1.356
X303.557 Y409.1 Z-9.064 I-0.437 J-1.356
X304.431 Y411.813 Z-10.016 I0.437 J1.356
X303.557 Y409.1 Z-10.967 I-0.437 J-1.356
X304.431 Y411.813 Z-11.919 I0.437 J1.356
X303.557 Y409.1 Z-12.87 I-0.437 J-1.356
X304.431 Y411.813 Z-13.822 I0.437 J1.356
X303.557 Y409.1 Z-14.774 I-0.437 J-1.356
X304.431 Y411.813 Z-15.725 I0.437 J1.356
X303.557 Y409.1 Z-16.677 I-0.437 J-1.356
X304.431 Y411.813 Z-17.628 I0.437 J1.356
X303.557 Y409.1 Z-18.58 I-0.437 J-1.356
X305.419 Y410.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
X302.569 I-1.425 F2400
X305.419 I1.425
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 351.169 - X Max: 356.819)
(   Y Min: 7.632 - Y Max: 13.281)
(   Z Min: -1 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket2 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X351.519 Y9.095 F2800
( Safe G1 --> G0)
Z5 F730
( MOVEMENT_PLUNGE)
G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X356.469 Y11.818 Z0.19 I2.475 J1.361
X351.519 Y9.095 Z-0.12 I-2.475 J-1.361
X356.469 Y11.818 Z-0.43 I2.475 J1.361
X351.519 Y9.095 Z-0.74 I-2.475 J-1.361
X356.819 Y10.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
X351.169 I-2.825 F2400
X356.819 I2.825
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 352.569 - X Max: 355.419)
(   Y Min: 9.031 - Y Max: 11.882)
(   Z Min: -19.15 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket3 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X354.431 Y11.813 F2800
G1 Z4 F2400
( MOVEMENT_PLUNGE)
Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X353.557 Y9.1 Z-1.452 I-0.437 J-1.356
X354.431 Y11.813 Z-2.403 I0.437 J1.356
X353.557 Y9.1 Z-3.355 I-0.437 J-1.356
X354.431 Y11.813 Z-4.306 I0.437 J1.356
X353.557 Y9.1 Z-5.258 I-0.437 J-1.356
X354.431 Y11.813 Z-6.209 I0.437 J1.356
X353.557 Y9.1 Z-7.161 I-0.437 J-1.356
X354.431 Y11.813 Z-8.113 I0.437 J1.356
X353.557 Y9.1 Z-9.064 I-0.437 J-1.356
X354.431 Y11.813 Z-10.016 I0.437 J1.356
X353.557 Y9.1 Z-10.967 I-0.437 J-1.356
X354.431 Y11.813 Z-11.919 I0.437 J1.356
X353.557 Y9.1 Z-12.87 I-0.437 J-1.356
X354.431 Y11.813 Z-13.822 I0.437 J1.356
X353.557 Y9.1 Z-14.774 I-0.437 J-1.356
X354.431 Y11.813 Z-15.725 I0.437 J1.356
X353.557 Y9.1 Z-16.677 I-0.437 J-1.356
X354.431 Y11.813 Z-17.628 I0.437 J1.356
X353.557 Y9.1 Z-18.58 I-0.437 J-1.356
X355.419 Y10.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
X352.569 I-1.425 F2400
X355.419 I1.425
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 351.169 - X Max: 356.819)
(   Y Min: 57.632 - Y Max: 63.281)
(   Z Min: -1 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket2 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X351.519 Y59.095 F2800
( Safe G1 --> G0)
Z5 F730
( MOVEMENT_PLUNGE)
G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X356.469 Y61.818 Z0.19 I2.475 J1.361
X351.519 Y59.095 Z-0.12 I-2.475 J-1.361
X356.469 Y61.818 Z-0.43 I2.475 J1.361
X351.519 Y59.095 Z-0.74 I-2.475 J-1.361
X356.819 Y60.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
X351.169 I-2.825 F2400
X356.819 I2.825
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 352.569 - X Max: 355.419)
(   Y Min: 59.031 - Y Max: 61.882)
(   Z Min: -19.15 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket3 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X354.431 Y61.813 F2800
G1 Z4 F2400
( MOVEMENT_PLUNGE)
Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X353.557 Y59.1 Z-1.452 I-0.437 J-1.356
X354.431 Y61.813 Z-2.403 I0.437 J1.356
X353.557 Y59.1 Z-3.355 I-0.437 J-1.356
X354.431 Y61.813 Z-4.306 I0.437 J1.356
X353.557 Y59.1 Z-5.258 I-0.437 J-1.356
X354.431 Y61.813 Z-6.209 I0.437 J1.356
X353.557 Y59.1 Z-7.161 I-0.437 J-1.356
X354.431 Y61.813 Z-8.113 I0.437 J1.356
X353.557 Y59.1 Z-9.064 I-0.437 J-1.356
X354.431 Y61.813 Z-10.016 I0.437 J1.356
X353.557 Y59.1 Z-10.967 I-0.437 J-1.356
X354.431 Y61.813 Z-11.919 I0.437 J1.356
X353.557 Y59.1 Z-12.87 I-0.437 J-1.356
X354.431 Y61.813 Z-13.822 I0.437 J1.356
X353.557 Y59.1 Z-14.774 I-0.437 J-1.356
X354.431 Y61.813 Z-15.725 I0.437 J1.356
X353.557 Y59.1 Z-16.677 I-0.437 J-1.356
X354.431 Y61.813 Z-17.628 I0.437 J1.356
X353.557 Y59.1 Z-18.58 I-0.437 J-1.356
X355.419 Y60.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
X352.569 I-1.425 F2400
X355.419 I1.425
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 351.169 - X Max: 356.819)
(   Y Min: 107.632 - Y Max: 113.281)
(   Z Min: -1 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket2 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X351.519 Y109.095 F2800
( Safe G1 --> G0)
Z5 F730
( MOVEMENT_PLUNGE)
G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X356.469 Y111.818 Z0.19 I2.475 J1.361
X351.519 Y109.095 Z-0.12 I-2.475 J-1.361
X356.469 Y111.818 Z-0.43 I2.475 J1.361
X351.519 Y109.095 Z-0.74 I-2.475 J-1.361
X356.819 Y110.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
X351.169 I-2.825 F2400
X356.819 I2.825
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 352.569 - X Max: 355.419)
(   Y Min: 109.031 - Y Max: 111.882)
(   Z Min: -19.15 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket3 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X354.431 Y111.813 F2800
G1 Z4 F2400
( MOVEMENT_PLUNGE)
Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X353.557 Y109.1 Z-1.452 I-0.437 J-1.356
X354.431 Y111.813 Z-2.403 I0.437 J1.356
X353.557 Y109.1 Z-3.355 I-0.437 J-1.356
X354.431 Y111.813 Z-4.306 I0.437 J1.356
X353.557 Y109.1 Z-5.258 I-0.437 J-1.356
X354.431 Y111.813 Z-6.209 I0.437 J1.356
X353.557 Y109.1 Z-7.161 I-0.437 J-1.356
X354.431 Y111.813 Z-8.113 I0.437 J1.356
X353.557 Y109.1 Z-9.064 I-0.437 J-1.356
X354.431 Y111.813 Z-10.016 I0.437 J1.356
X353.557 Y109.1 Z-10.967 I-0.437 J-1.356
X354.431 Y111.813 Z-11.919 I0.437 J1.356
X353.557 Y109.1 Z-12.87 I-0.437 J-1.356
X354.431 Y111.813 Z-13.822 I0.437 J1.356
X353.557 Y109.1 Z-14.774 I-0.437 J-1.356
X354.431 Y111.813 Z-15.725 I0.437 J1.356
X353.557 Y109.1 Z-16.677 I-0.437 J-1.356
X354.431 Y111.813 Z-17.628 I0.437 J1.356
X353.557 Y109.1 Z-18.58 I-0.437 J-1.356
X355.419 Y110.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
X352.569 I-1.425 F2400
X355.419 I1.425
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 351.169 - X Max: 356.819)
(   Y Min: 157.632 - Y Max: 163.282)
(   Z Min: -1 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket2 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X351.519 Y159.095 F2800
( Safe G1 --> G0)
Z5 F730
( MOVEMENT_PLUNGE)
G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X356.469 Y161.818 Z0.19 I2.475 J1.361
X351.519 Y159.095 Z-0.12 I-2.475 J-1.361
X356.469 Y161.818 Z-0.43 I2.475 J1.361
X351.519 Y159.095 Z-0.74 I-2.475 J-1.361
X356.819 Y160.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
X351.169 I-2.825 F2400
X356.819 I2.825
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 352.569 - X Max: 355.419)
(   Y Min: 159.032 - Y Max: 161.882)
(   Z Min: -19.15 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket3 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X354.431 Y161.813 F2800
G1 Z4 F2400
( MOVEMENT_PLUNGE)
Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X353.557 Y159.1 Z-1.452 I-0.437 J-1.356
X354.431 Y161.813 Z-2.403 I0.437 J1.356
X353.557 Y159.1 Z-3.355 I-0.437 J-1.356
X354.431 Y161.813 Z-4.306 I0.437 J1.356
X353.557 Y159.1 Z-5.258 I-0.437 J-1.356
X354.431 Y161.813 Z-6.209 I0.437 J1.356
X353.557 Y159.1 Z-7.161 I-0.437 J-1.356
X354.431 Y161.813 Z-8.113 I0.437 J1.356
X353.557 Y159.1 Z-9.064 I-0.437 J-1.356
X354.431 Y161.813 Z-10.016 I0.437 J1.356
X353.557 Y159.1 Z-10.967 I-0.437 J-1.356
X354.431 Y161.813 Z-11.919 I0.437 J1.356
X353.557 Y159.1 Z-12.87 I-0.437 J-1.356
X354.431 Y161.813 Z-13.822 I0.437 J1.356
X353.557 Y159.1 Z-14.774 I-0.437 J-1.356
X354.431 Y161.813 Z-15.725 I0.437 J1.356
X353.557 Y159.1 Z-16.677 I-0.437 J-1.356
X354.431 Y161.813 Z-17.628 I0.437 J1.356
X353.557 Y159.1 Z-18.58 I-0.437 J-1.356
X355.419 Y160.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
X352.569 I-1.425 F2400
X355.419 I1.425
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 351.169 - X Max: 356.819)
(   Y Min: 207.632 - Y Max: 213.282)
(   Z Min: -1 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket2 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X351.519 Y209.095 F2800
( Safe G1 --> G0)
Z5 F730
( MOVEMENT_PLUNGE)
G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X356.469 Y211.818 Z0.19 I2.475 J1.361
X351.519 Y209.095 Z-0.12 I-2.475 J-1.361
X356.469 Y211.818 Z-0.43 I2.475 J1.361
X351.519 Y209.095 Z-0.74 I-2.475 J-1.361
X356.819 Y210.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
X351.169 I-2.825 F2400
X356.819 I2.825
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 352.569 - X Max: 355.419)
(   Y Min: 209.032 - Y Max: 211.882)
(   Z Min: -19.15 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket3 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X354.431 Y211.813 F2800
G1 Z4 F2400
( MOVEMENT_PLUNGE)
Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X353.557 Y209.1 Z-1.452 I-0.437 J-1.356
X354.431 Y211.813 Z-2.403 I0.437 J1.356
X353.557 Y209.1 Z-3.355 I-0.437 J-1.356
X354.431 Y211.813 Z-4.306 I0.437 J1.356
X353.557 Y209.1 Z-5.258 I-0.437 J-1.356
X354.431 Y211.813 Z-6.209 I0.437 J1.356
X353.557 Y209.1 Z-7.161 I-0.437 J-1.356
X354.431 Y211.813 Z-8.113 I0.437 J1.356
X353.557 Y209.1 Z-9.064 I-0.437 J-1.356
X354.431 Y211.813 Z-10.016 I0.437 J1.356
X353.557 Y209.1 Z-10.967 I-0.437 J-1.356
X354.431 Y211.813 Z-11.919 I0.437 J1.356
X353.557 Y209.1 Z-12.87 I-0.437 J-1.356
X354.431 Y211.813 Z-13.822 I0.437 J1.356
X353.557 Y209.1 Z-14.774 I-0.437 J-1.356
X354.431 Y211.813 Z-15.725 I0.437 J1.356
X353.557 Y209.1 Z-16.677 I-0.437 J-1.356
X354.431 Y211.813 Z-17.628 I0.437 J1.356
X353.557 Y209.1 Z-18.58 I-0.437 J-1.356
X355.419 Y210.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
X352.569 I-1.425 F2400
X355.419 I1.425
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 351.169 - X Max: 356.819)
(   Y Min: 257.632 - Y Max: 263.282)
(   Z Min: -1 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket2 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X351.519 Y259.095 F2800
( Safe G1 --> G0)
Z5 F730
( MOVEMENT_PLUNGE)
G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X356.469 Y261.818 Z0.19 I2.475 J1.361
X351.519 Y259.095 Z-0.12 I-2.475 J-1.361
X356.469 Y261.818 Z-0.43 I2.475 J1.361
X351.519 Y259.095 Z-0.74 I-2.475 J-1.361
X356.819 Y260.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
X351.169 I-2.825 F2400
X356.819 I2.825
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 352.569 - X Max: 355.419)
(   Y Min: 259.032 - Y Max: 261.882)
(   Z Min: -19.15 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket3 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X354.431 Y261.813 F2800
G1 Z4 F2400
( MOVEMENT_PLUNGE)
Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X353.557 Y259.1 Z-1.452 I-0.437 J-1.356
X354.431 Y261.813 Z-2.403 I0.437 J1.356
X353.557 Y259.1 Z-3.355 I-0.437 J-1.356
X354.431 Y261.813 Z-4.306 I0.437 J1.356
X353.557 Y259.1 Z-5.258 I-0.437 J-1.356
X354.431 Y261.813 Z-6.209 I0.437 J1.356
X353.557 Y259.1 Z-7.161 I-0.437 J-1.356
X354.431 Y261.813 Z-8.113 I0.437 J1.356
X353.557 Y259.1 Z-9.064 I-0.437 J-1.356
X354.431 Y261.813 Z-10.016 I0.437 J1.356
X353.557 Y259.1 Z-10.967 I-0.437 J-1.356
X354.431 Y261.813 Z-11.919 I0.437 J1.356
X353.557 Y259.1 Z-12.87 I-0.437 J-1.356
X354.431 Y261.813 Z-13.822 I0.437 J1.356
X353.557 Y259.1 Z-14.774 I-0.437 J-1.356
X354.431 Y261.813 Z-15.725 I0.437 J1.356
X353.557 Y259.1 Z-16.677 I-0.437 J-1.356
X354.431 Y261.813 Z-17.628 I0.437 J1.356
X353.557 Y259.1 Z-18.58 I-0.437 J-1.356
X355.419 Y260.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
X352.569 I-1.425 F2400
X355.419 I1.425
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 351.169 - X Max: 356.819)
(   Y Min: 307.632 - Y Max: 313.281)
(   Z Min: -1 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket2 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X351.519 Y309.095 F2800
( Safe G1 --> G0)
Z5 F730
( MOVEMENT_PLUNGE)
G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X356.469 Y311.818 Z0.19 I2.475 J1.361
X351.519 Y309.095 Z-0.12 I-2.475 J-1.361
X356.469 Y311.818 Z-0.43 I2.475 J1.361
X351.519 Y309.095 Z-0.74 I-2.475 J-1.361
X356.819 Y310.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
X351.169 I-2.825 F2400
X356.819 I2.825
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 352.569 - X Max: 355.419)
(   Y Min: 309.031 - Y Max: 311.882)
(   Z Min: -19.15 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket3 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X354.431 Y311.813 F2800
G1 Z4 F2400
( MOVEMENT_PLUNGE)
Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X353.557 Y309.1 Z-1.452 I-0.437 J-1.356
X354.431 Y311.813 Z-2.403 I0.437 J1.356
X353.557 Y309.1 Z-3.355 I-0.437 J-1.356
X354.431 Y311.813 Z-4.306 I0.437 J1.356
X353.557 Y309.1 Z-5.258 I-0.437 J-1.356
X354.431 Y311.813 Z-6.209 I0.437 J1.356
X353.557 Y309.1 Z-7.161 I-0.437 J-1.356
X354.431 Y311.813 Z-8.113 I0.437 J1.356
X353.557 Y309.1 Z-9.064 I-0.437 J-1.356
X354.431 Y311.813 Z-10.016 I0.437 J1.356
X353.557 Y309.1 Z-10.967 I-0.437 J-1.356
X354.431 Y311.813 Z-11.919 I0.437 J1.356
X353.557 Y309.1 Z-12.87 I-0.437 J-1.356
X354.431 Y311.813 Z-13.822 I0.437 J1.356
X353.557 Y309.1 Z-14.774 I-0.437 J-1.356
X354.431 Y311.813 Z-15.725 I0.437 J1.356
X353.557 Y309.1 Z-16.677 I-0.437 J-1.356
X354.431 Y311.813 Z-17.628 I0.437 J1.356
X353.557 Y309.1 Z-18.58 I-0.437 J-1.356
X355.419 Y310.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
X352.569 I-1.425 F2400
X355.419 I1.425
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 351.169 - X Max: 356.819)
(   Y Min: 357.632 - Y Max: 363.281)
(   Z Min: -1 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket2 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X351.519 Y359.095 F2800
( Safe G1 --> G0)
Z5 F730
( MOVEMENT_PLUNGE)
G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X356.469 Y361.818 Z0.19 I2.475 J1.361
X351.519 Y359.095 Z-0.12 I-2.475 J-1.361
X356.469 Y361.818 Z-0.43 I2.475 J1.361
X351.519 Y359.095 Z-0.74 I-2.475 J-1.361
X356.819 Y360.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
X351.169 I-2.825 F2400
X356.819 I2.825
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 352.569 - X Max: 355.419)
(   Y Min: 359.031 - Y Max: 361.882)
(   Z Min: -19.15 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket3 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X354.431 Y361.813 F2800
G1 Z4 F2400
( MOVEMENT_PLUNGE)
Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X353.557 Y359.1 Z-1.452 I-0.437 J-1.356
X354.431 Y361.813 Z-2.403 I0.437 J1.356
X353.557 Y359.1 Z-3.355 I-0.437 J-1.356
X354.431 Y361.813 Z-4.306 I0.437 J1.356
X353.557 Y359.1 Z-5.258 I-0.437 J-1.356
X354.431 Y361.813 Z-6.209 I0.437 J1.356
X353.557 Y359.1 Z-7.161 I-0.437 J-1.356
X354.431 Y361.813 Z-8.113 I0.437 J1.356
X353.557 Y359.1 Z-9.064 I-0.437 J-1.356
X354.431 Y361.813 Z-10.016 I0.437 J1.356
X353.557 Y359.1 Z-10.967 I-0.437 J-1.356
X354.431 Y361.813 Z-11.919 I0.437 J1.356
X353.557 Y359.1 Z-12.87 I-0.437 J-1.356
X354.431 Y361.813 Z-13.822 I0.437 J1.356
X353.557 Y359.1 Z-14.774 I-0.437 J-1.356
X354.431 Y361.813 Z-15.725 I0.437 J1.356
X353.557 Y359.1 Z-16.677 I-0.437 J-1.356
X354.431 Y361.813 Z-17.628 I0.437 J1.356
X353.557 Y359.1 Z-18.58 I-0.437 J-1.356
X355.419 Y360.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
X352.569 I-1.425 F2400
X355.419 I1.425
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 351.169 - X Max: 356.819)
(   Y Min: 407.632 - Y Max: 413.281)
(   Z Min: -1 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket2 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X351.519 Y409.095 F2800
( Safe G1 --> G0)
Z5 F730
( MOVEMENT_PLUNGE)
G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X356.469 Y411.818 Z0.19 I2.475 J1.361
X351.519 Y409.095 Z-0.12 I-2.475 J-1.361
X356.469 Y411.818 Z-0.43 I2.475 J1.361
X351.519 Y409.095 Z-0.74 I-2.475 J-1.361
X356.819 Y410.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
X351.169 I-2.825 F2400
X356.819 I2.825
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 352.569 - X Max: 355.419)
(   Y Min: 409.031 - Y Max: 411.882)
(   Z Min: -19.15 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket3 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X354.431 Y411.813 F2800
G1 Z4 F2400
( MOVEMENT_PLUNGE)
Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X353.557 Y409.1 Z-1.452 I-0.437 J-1.356
X354.431 Y411.813 Z-2.403 I0.437 J1.356
X353.557 Y409.1 Z-3.355 I-0.437 J-1.356
X354.431 Y411.813 Z-4.306 I0.437 J1.356
X353.557 Y409.1 Z-5.258 I-0.437 J-1.356
X354.431 Y411.813 Z-6.209 I0.437 J1.356
X353.557 Y409.1 Z-7.161 I-0.437 J-1.356
X354.431 Y411.813 Z-8.113 I0.437 J1.356
X353.557 Y409.1 Z-9.064 I-0.437 J-1.356
X354.431 Y411.813 Z-10.016 I0.437 J1.356
X353.557 Y409.1 Z-10.967 I-0.437 J-1.356
X354.431 Y411.813 Z-11.919 I0.437 J1.356
X353.557 Y409.1 Z-12.87 I-0.437 J-1.356
X354.431 Y411.813 Z-13.822 I0.437 J1.356
X353.557 Y409.1 Z-14.774 I-0.437 J-1.356
X354.431 Y411.813 Z-15.725 I0.437 J1.356
X353.557 Y409.1 Z-16.677 I-0.437 J-1.356
X354.431 Y411.813 Z-17.628 I0.437 J1.356
X353.557 Y409.1 Z-18.58 I-0.437 J-1.356
X355.419 Y410.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
X352.569 I-1.425 F2400
X355.419 I1.425
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 401.169 - X Max: 406.819)
(   Y Min: 7.632 - Y Max: 13.281)
(   Z Min: -1 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket2 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X401.519 Y9.095 F2800
( Safe G1 --> G0)
Z5 F730
( MOVEMENT_PLUNGE)
G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X406.469 Y11.818 Z0.19 I2.475 J1.361
X401.519 Y9.095 Z-0.12 I-2.475 J-1.361
X406.469 Y11.818 Z-0.43 I2.475 J1.361
X401.519 Y9.095 Z-0.74 I-2.475 J-1.361
X406.819 Y10.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
X401.169 I-2.825 F2400
X406.819 I2.825
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 402.569 - X Max: 405.419)
(   Y Min: 9.031 - Y Max: 11.882)
(   Z Min: -19.15 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket3 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X404.431 Y11.813 F2800
G1 Z4 F2400
( MOVEMENT_PLUNGE)
Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X403.557 Y9.1 Z-1.452 I-0.437 J-1.356
X404.431 Y11.813 Z-2.403 I0.437 J1.356
X403.557 Y9.1 Z-3.355 I-0.437 J-1.356
X404.431 Y11.813 Z-4.306 I0.437 J1.356
X403.557 Y9.1 Z-5.258 I-0.437 J-1.356
X404.431 Y11.813 Z-6.209 I0.437 J1.356
X403.557 Y9.1 Z-7.161 I-0.437 J-1.356
X404.431 Y11.813 Z-8.113 I0.437 J1.356
X403.557 Y9.1 Z-9.064 I-0.437 J-1.356
X404.431 Y11.813 Z-10.016 I0.437 J1.356
X403.557 Y9.1 Z-10.967 I-0.437 J-1.356
X404.431 Y11.813 Z-11.919 I0.437 J1.356
X403.557 Y9.1 Z-12.87 I-0.437 J-1.356
X404.431 Y11.813 Z-13.822 I0.437 J1.356
X403.557 Y9.1 Z-14.774 I-0.437 J-1.356
X404.431 Y11.813 Z-15.725 I0.437 J1.356
X403.557 Y9.1 Z-16.677 I-0.437 J-1.356
X404.431 Y11.813 Z-17.628 I0.437 J1.356
X403.557 Y9.1 Z-18.58 I-0.437 J-1.356
X405.419 Y10.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
X402.569 I-1.425 F2400
X405.419 I1.425
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 401.169 - X Max: 406.819)
(   Y Min: 57.632 - Y Max: 63.281)
(   Z Min: -1 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket2 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X401.519 Y59.095 F2800
( Safe G1 --> G0)
Z5 F730
( MOVEMENT_PLUNGE)
G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X406.469 Y61.818 Z0.19 I2.475 J1.361
X401.519 Y59.095 Z-0.12 I-2.475 J-1.361
X406.469 Y61.818 Z-0.43 I2.475 J1.361
X401.519 Y59.095 Z-0.74 I-2.475 J-1.361
X406.819 Y60.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
X401.169 I-2.825 F2400
X406.819 I2.825
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 402.569 - X Max: 405.419)
(   Y Min: 59.031 - Y Max: 61.882)
(   Z Min: -19.15 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket3 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X404.431 Y61.813 F2800
G1 Z4 F2400
( MOVEMENT_PLUNGE)
Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X403.557 Y59.1 Z-1.452 I-0.437 J-1.356
X404.431 Y61.813 Z-2.403 I0.437 J1.356
X403.557 Y59.1 Z-3.355 I-0.437 J-1.356
X404.431 Y61.813 Z-4.306 I0.437 J1.356
X403.557 Y59.1 Z-5.258 I-0.437 J-1.356
X404.431 Y61.813 Z-6.209 I0.437 J1.356
X403.557 Y59.1 Z-7.161 I-0.437 J-1.356
X404.431 Y61.813 Z-8.113 I0.437 J1.356
X403.557 Y59.1 Z-9.064 I-0.437 J-1.356
X404.431 Y61.813 Z-10.016 I0.437 J1.356
X403.557 Y59.1 Z-10.967 I-0.437 J-1.356
X404.431 Y61.813 Z-11.919 I0.437 J1.356
X403.557 Y59.1 Z-12.87 I-0.437 J-1.356
X404.431 Y61.813 Z-13.822 I0.437 J1.356
X403.557 Y59.1 Z-14.774 I-0.437 J-1.356
X404.431 Y61.813 Z-15.725 I0.437 J1.356
X403.557 Y59.1 Z-16.677 I-0.437 J-1.356
X404.431 Y61.813 Z-17.628 I0.437 J1.356
X403.557 Y59.1 Z-18.58 I-0.437 J-1.356
X405.419 Y60.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
X402.569 I-1.425 F2400
X405.419 I1.425
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 401.169 - X Max: 406.819)
(   Y Min: 107.632 - Y Max: 113.281)
(   Z Min: -1 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket2 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X401.519 Y109.095 F2800
( Safe G1 --> G0)
Z5 F730
( MOVEMENT_PLUNGE)
G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X406.469 Y111.818 Z0.19 I2.475 J1.361
X401.519 Y109.095 Z-0.12 I-2.475 J-1.361
X406.469 Y111.818 Z-0.43 I2.475 J1.361
X401.519 Y109.095 Z-0.74 I-2.475 J-1.361
X406.819 Y110.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
X401.169 I-2.825 F2400
X406.819 I2.825
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 402.569 - X Max: 405.419)
(   Y Min: 109.031 - Y Max: 111.882)
(   Z Min: -19.15 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket3 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X404.431 Y111.813 F2800
G1 Z4 F2400
( MOVEMENT_PLUNGE)
Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X403.557 Y109.1 Z-1.452 I-0.437 J-1.356
X404.431 Y111.813 Z-2.403 I0.437 J1.356
X403.557 Y109.1 Z-3.355 I-0.437 J-1.356
X404.431 Y111.813 Z-4.306 I0.437 J1.356
X403.557 Y109.1 Z-5.258 I-0.437 J-1.356
X404.431 Y111.813 Z-6.209 I0.437 J1.356
X403.557 Y109.1 Z-7.161 I-0.437 J-1.356
X404.431 Y111.813 Z-8.113 I0.437 J1.356
X403.557 Y109.1 Z-9.064 I-0.437 J-1.356
X404.431 Y111.813 Z-10.016 I0.437 J1.356
X403.557 Y109.1 Z-10.967 I-0.437 J-1.356
X404.431 Y111.813 Z-11.919 I0.437 J1.356
X403.557 Y109.1 Z-12.87 I-0.437 J-1.356
X404.431 Y111.813 Z-13.822 I0.437 J1.356
X403.557 Y109.1 Z-14.774 I-0.437 J-1.356
X404.431 Y111.813 Z-15.725 I0.437 J1.356
X403.557 Y109.1 Z-16.677 I-0.437 J-1.356
X404.431 Y111.813 Z-17.628 I0.437 J1.356
X403.557 Y109.1 Z-18.58 I-0.437 J-1.356
X405.419 Y110.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
X402.569 I-1.425 F2400
X405.419 I1.425
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 401.169 - X Max: 406.819)
(   Y Min: 157.632 - Y Max: 163.282)
(   Z Min: -1 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket2 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X401.519 Y159.095 F2800
( Safe G1 --> G0)
Z5 F730
( MOVEMENT_PLUNGE)
G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X406.469 Y161.818 Z0.19 I2.475 J1.361
X401.519 Y159.095 Z-0.12 I-2.475 J-1.361
X406.469 Y161.818 Z-0.43 I2.475 J1.361
X401.519 Y159.095 Z-0.74 I-2.475 J-1.361
X406.819 Y160.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
X401.169 I-2.825 F2400
X406.819 I2.825
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 402.569 - X Max: 405.419)
(   Y Min: 159.032 - Y Max: 161.882)
(   Z Min: -19.15 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket3 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X404.431 Y161.813 F2800
G1 Z4 F2400
( MOVEMENT_PLUNGE)
Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X403.557 Y159.1 Z-1.452 I-0.437 J-1.356
X404.431 Y161.813 Z-2.403 I0.437 J1.356
X403.557 Y159.1 Z-3.355 I-0.437 J-1.356
X404.431 Y161.813 Z-4.306 I0.437 J1.356
X403.557 Y159.1 Z-5.258 I-0.437 J-1.356
X404.431 Y161.813 Z-6.209 I0.437 J1.356
X403.557 Y159.1 Z-7.161 I-0.437 J-1.356
X404.431 Y161.813 Z-8.113 I0.437 J1.356
X403.557 Y159.1 Z-9.064 I-0.437 J-1.356
X404.431 Y161.813 Z-10.016 I0.437 J1.356
X403.557 Y159.1 Z-10.967 I-0.437 J-1.356
X404.431 Y161.813 Z-11.919 I0.437 J1.356
X403.557 Y159.1 Z-12.87 I-0.437 J-1.356
X404.431 Y161.813 Z-13.822 I0.437 J1.356
X403.557 Y159.1 Z-14.774 I-0.437 J-1.356
X404.431 Y161.813 Z-15.725 I0.437 J1.356
X403.557 Y159.1 Z-16.677 I-0.437 J-1.356
X404.431 Y161.813 Z-17.628 I0.437 J1.356
X403.557 Y159.1 Z-18.58 I-0.437 J-1.356
X405.419 Y160.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
X402.569 I-1.425 F2400
X405.419 I1.425
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 401.169 - X Max: 406.819)
(   Y Min: 207.632 - Y Max: 213.282)
(   Z Min: -1 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket2 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X401.519 Y209.095 F2800
( Safe G1 --> G0)
Z5 F730
( MOVEMENT_PLUNGE)
G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X406.469 Y211.818 Z0.19 I2.475 J1.361
X401.519 Y209.095 Z-0.12 I-2.475 J-1.361
X406.469 Y211.818 Z-0.43 I2.475 J1.361
X401.519 Y209.095 Z-0.74 I-2.475 J-1.361
X406.819 Y210.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
X401.169 I-2.825 F2400
X406.819 I2.825
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 402.569 - X Max: 405.419)
(   Y Min: 209.032 - Y Max: 211.882)
(   Z Min: -19.15 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket3 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X404.431 Y211.813 F2800
G1 Z4 F2400
( MOVEMENT_PLUNGE)
Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X403.557 Y209.1 Z-1.452 I-0.437 J-1.356
X404.431 Y211.813 Z-2.403 I0.437 J1.356
X403.557 Y209.1 Z-3.355 I-0.437 J-1.356
X404.431 Y211.813 Z-4.306 I0.437 J1.356
X403.557 Y209.1 Z-5.258 I-0.437 J-1.356
X404.431 Y211.813 Z-6.209 I0.437 J1.356
X403.557 Y209.1 Z-7.161 I-0.437 J-1.356
X404.431 Y211.813 Z-8.113 I0.437 J1.356
X403.557 Y209.1 Z-9.064 I-0.437 J-1.356
X404.431 Y211.813 Z-10.016 I0.437 J1.356
X403.557 Y209.1 Z-10.967 I-0.437 J-1.356
X404.431 Y211.813 Z-11.919 I0.437 J1.356
X403.557 Y209.1 Z-12.87 I-0.437 J-1.356
X404.431 Y211.813 Z-13.822 I0.437 J1.356
X403.557 Y209.1 Z-14.774 I-0.437 J-1.356
X404.431 Y211.813 Z-15.725 I0.437 J1.356
X403.557 Y209.1 Z-16.677 I-0.437 J-1.356
X404.431 Y211.813 Z-17.628 I0.437 J1.356
X403.557 Y209.1 Z-18.58 I-0.437 J-1.356
X405.419 Y210.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
X402.569 I-1.425 F2400
X405.419 I1.425
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 401.169 - X Max: 406.819)
(   Y Min: 257.632 - Y Max: 263.282)
(   Z Min: -1 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket2 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X401.519 Y259.095 F2800
( Safe G1 --> G0)
Z5 F730
( MOVEMENT_PLUNGE)
G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X406.469 Y261.818 Z0.19 I2.475 J1.361
X401.519 Y259.095 Z-0.12 I-2.475 J-1.361
X406.469 Y261.818 Z-0.43 I2.475 J1.361
X401.519 Y259.095 Z-0.74 I-2.475 J-1.361
X406.819 Y260.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
X401.169 I-2.825 F2400
X406.819 I2.825
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 402.569 - X Max: 405.419)
(   Y Min: 259.032 - Y Max: 261.882)
(   Z Min: -19.15 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket3 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X404.431 Y261.813 F2800
G1 Z4 F2400
( MOVEMENT_PLUNGE)
Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X403.557 Y259.1 Z-1.452 I-0.437 J-1.356
X404.431 Y261.813 Z-2.403 I0.437 J1.356
X403.557 Y259.1 Z-3.355 I-0.437 J-1.356
X404.431 Y261.813 Z-4.306 I0.437 J1.356
X403.557 Y259.1 Z-5.258 I-0.437 J-1.356
X404.431 Y261.813 Z-6.209 I0.437 J1.356
X403.557 Y259.1 Z-7.161 I-0.437 J-1.356
X404.431 Y261.813 Z-8.113 I0.437 J1.356
X403.557 Y259.1 Z-9.064 I-0.437 J-1.356
X404.431 Y261.813 Z-10.016 I0.437 J1.356
X403.557 Y259.1 Z-10.967 I-0.437 J-1.356
X404.431 Y261.813 Z-11.919 I0.437 J1.356
X403.557 Y259.1 Z-12.87 I-0.437 J-1.356
X404.431 Y261.813 Z-13.822 I0.437 J1.356
X403.557 Y259.1 Z-14.774 I-0.437 J-1.356
X404.431 Y261.813 Z-15.725 I0.437 J1.356
X403.557 Y259.1 Z-16.677 I-0.437 J-1.356
X404.431 Y261.813 Z-17.628 I0.437 J1.356
X403.557 Y259.1 Z-18.58 I-0.437 J-1.356
X405.419 Y260.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
X402.569 I-1.425 F2400
X405.419 I1.425
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 401.169 - X Max: 406.819)
(   Y Min: 307.632 - Y Max: 313.281)
(   Z Min: -1 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket2 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X401.519 Y309.095 F2800
( Safe G1 --> G0)
Z5 F730
( MOVEMENT_PLUNGE)
G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X406.469 Y311.818 Z0.19 I2.475 J1.361
X401.519 Y309.095 Z-0.12 I-2.475 J-1.361
X406.469 Y311.818 Z-0.43 I2.475 J1.361
X401.519 Y309.095 Z-0.74 I-2.475 J-1.361
X406.819 Y310.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
X401.169 I-2.825 F2400
X406.819 I2.825
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 402.569 - X Max: 405.419)
(   Y Min: 309.031 - Y Max: 311.882)
(   Z Min: -19.15 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket3 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X404.431 Y311.813 F2800
G1 Z4 F2400
( MOVEMENT_PLUNGE)
Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X403.557 Y309.1 Z-1.452 I-0.437 J-1.356
X404.431 Y311.813 Z-2.403 I0.437 J1.356
X403.557 Y309.1 Z-3.355 I-0.437 J-1.356
X404.431 Y311.813 Z-4.306 I0.437 J1.356
X403.557 Y309.1 Z-5.258 I-0.437 J-1.356
X404.431 Y311.813 Z-6.209 I0.437 J1.356
X403.557 Y309.1 Z-7.161 I-0.437 J-1.356
X404.431 Y311.813 Z-8.113 I0.437 J1.356
X403.557 Y309.1 Z-9.064 I-0.437 J-1.356
X404.431 Y311.813 Z-10.016 I0.437 J1.356
X403.557 Y309.1 Z-10.967 I-0.437 J-1.356
X404.431 Y311.813 Z-11.919 I0.437 J1.356
X403.557 Y309.1 Z-12.87 I-0.437 J-1.356
X404.431 Y311.813 Z-13.822 I0.437 J1.356
X403.557 Y309.1 Z-14.774 I-0.437 J-1.356
X404.431 Y311.813 Z-15.725 I0.437 J1.356
X403.557 Y309.1 Z-16.677 I-0.437 J-1.356
X404.431 Y311.813 Z-17.628 I0.437 J1.356
X403.557 Y309.1 Z-18.58 I-0.437 J-1.356
X405.419 Y310.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
X402.569 I-1.425 F2400
X405.419 I1.425
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 401.169 - X Max: 406.819)
(   Y Min: 357.632 - Y Max: 363.281)
(   Z Min: -1 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket2 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X401.519 Y359.095 F2800
( Safe G1 --> G0)
Z5 F730
( MOVEMENT_PLUNGE)
G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X406.469 Y361.818 Z0.19 I2.475 J1.361
X401.519 Y359.095 Z-0.12 I-2.475 J-1.361
X406.469 Y361.818 Z-0.43 I2.475 J1.361
X401.519 Y359.095 Z-0.74 I-2.475 J-1.361
X406.819 Y360.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
X401.169 I-2.825 F2400
X406.819 I2.825
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 402.569 - X Max: 405.419)
(   Y Min: 359.031 - Y Max: 361.882)
(   Z Min: -19.15 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket3 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X404.431 Y361.813 F2800
G1 Z4 F2400
( MOVEMENT_PLUNGE)
Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X403.557 Y359.1 Z-1.452 I-0.437 J-1.356
X404.431 Y361.813 Z-2.403 I0.437 J1.356
X403.557 Y359.1 Z-3.355 I-0.437 J-1.356
X404.431 Y361.813 Z-4.306 I0.437 J1.356
X403.557 Y359.1 Z-5.258 I-0.437 J-1.356
X404.431 Y361.813 Z-6.209 I0.437 J1.356
X403.557 Y359.1 Z-7.161 I-0.437 J-1.356
X404.431 Y361.813 Z-8.113 I0.437 J1.356
X403.557 Y359.1 Z-9.064 I-0.437 J-1.356
X404.431 Y361.813 Z-10.016 I0.437 J1.356
X403.557 Y359.1 Z-10.967 I-0.437 J-1.356
X404.431 Y361.813 Z-11.919 I0.437 J1.356
X403.557 Y359.1 Z-12.87 I-0.437 J-1.356
X404.431 Y361.813 Z-13.822 I0.437 J1.356
X403.557 Y359.1 Z-14.774 I-0.437 J-1.356
X404.431 Y361.813 Z-15.725 I0.437 J1.356
X403.557 Y359.1 Z-16.677 I-0.437 J-1.356
X404.431 Y361.813 Z-17.628 I0.437 J1.356
X403.557 Y359.1 Z-18.58 I-0.437 J-1.356
X405.419 Y360.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
X402.569 I-1.425 F2400
X405.419 I1.425
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 401.169 - X Max: 406.819)
(   Y Min: 407.632 - Y Max: 413.281)
(   Z Min: -1 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket2 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X401.519 Y409.095 F2800
( Safe G1 --> G0)
Z5 F730
( MOVEMENT_PLUNGE)
G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X406.469 Y411.818 Z0.19 I2.475 J1.361
X401.519 Y409.095 Z-0.12 I-2.475 J-1.361
X406.469 Y411.818 Z-0.43 I2.475 J1.361
X401.519 Y409.095 Z-0.74 I-2.475 J-1.361
X406.819 Y410.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
X401.169 I-2.825 F2400
X406.819 I2.825
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( *** SECTION begin ***)
(   X Min: 402.569 - X Max: 405.419)
(   Y Min: 409.031 - Y Max: 411.882)
(   Z Min: -19.15 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Pocket3 - Milling - Tool: 2 -  flat end mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( COMMAND_COOLANT_ON)
( First G1 --> G0)
Z15 F730
X404.431 Y411.813 F2800
G1 Z4 F2400
( MOVEMENT_PLUNGE)
Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
G3 X403.557 Y409.1 Z-1.452 I-0.437 J-1.356
X404.431 Y411.813 Z-2.403 I0.437 J1.356
X403.557 Y409.1 Z-3.355 I-0.437 J-1.356
X404.431 Y411.813 Z-4.306 I0.437 J1.356
X403.557 Y409.1 Z-5.258 I-0.437 J-1.356
X404.431 Y411.813 Z-6.209 I0.437 J1.356
X403.557 Y409.1 Z-7.161 I-0.437 J-1.356
X404.431 Y411.813 Z-8.113 I0.437 J1.356
X403.557 Y409.1 Z-9.064 I-0.437 J-1.356
X404.431 Y411.813 Z-10.016 I0.437 J1.356
X403.557 Y409.1 Z-10.967 I-0.437 J-1.356
X404.431 Y411.813 Z-11.919 I0.437 J1.356
X403.557 Y409.1 Z-12.87 I-0.437 J-1.356
X404.431 Y411.813 Z-13.822 I0.437 J1.356
X403.557 Y409.1 Z-14.774 I-0.437 J-1.356
X404.431 Y411.813 Z-15.725 I0.437 J1.356
X403.557 Y409.1 Z-16.677 I-0.437 J-1.356
X404.431 Y411.813 Z-17.628 I0.437 J1.356
X403.557 Y409.1 Z-18.58 I-0.437 J-1.356
X405.419 Y410.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
X402.569 I-1.425 F2400
X405.419 I1.425
( Safe G1 --> G0)
G0 Z15 F730
( *** SECTION end ***)
()
( *** STOP begin ***)
( COMMAND_COOLANT_OFF)
( >>> Coolant Channel A: Off)
M9
( COMMAND_STOP_SPINDLE)
M5
M30
( *** STOP end ***)
%
`;