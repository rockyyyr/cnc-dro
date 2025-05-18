export default `%
(Fusion CAM 2601.1.37)
( Posts processor: MPCNC v3.0 Beta 1.cps)
( Gcode generated: Sun May 18 05:56:24 2025 GMT)
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
N10 G90
N11 G21
(   Set Feed Rate Mode to units per minute)
N12 G94
(   Use the XY plane for circular motion)
N13 G17
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
N14 M3 S12000
( COMMAND_COOLANT_ON)
( >>> Coolant Channel A: Air)
N15 M8
( MOVEMENT_CUTTING)
( First G1 --> G0)
N16 G0 Z15 F730
N17 X1.519 Y9.095 F2800
( Safe G1 --> G0)
N18 Z5 F730
( MOVEMENT_PLUNGE)
N19 G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
N20 G3 X6.469 Y11.818 Z0.19 I2.475 J1.361
N21 X1.519 Y9.095 Z-0.12 I-2.475 J-1.361
N22 X6.469 Y11.818 Z-0.43 I2.475 J1.361
N23 X1.519 Y9.095 Z-0.74 I-2.475 J-1.361
N24 X6.819 Y10.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
N25 X1.169 I-2.825 F2400
N26 X6.819 I2.825
( Safe G1 --> G0)
N27 G0 Z15 F730
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
N28 Z15 F730
N29 X4.431 Y11.813 F2800
N30 G1 Z4 F2400
( MOVEMENT_PLUNGE)
N31 Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
N32 G3 X3.557 Y9.1 Z-1.452 I-0.437 J-1.356
N33 X4.431 Y11.813 Z-2.403 I0.437 J1.356
N34 X3.557 Y9.1 Z-3.355 I-0.437 J-1.356
N35 X4.431 Y11.813 Z-4.306 I0.437 J1.356
N36 X3.557 Y9.1 Z-5.258 I-0.437 J-1.356
N37 X4.431 Y11.813 Z-6.209 I0.437 J1.356
N38 X3.557 Y9.1 Z-7.161 I-0.437 J-1.356
N39 X4.431 Y11.813 Z-8.113 I0.437 J1.356
N40 X3.557 Y9.1 Z-9.064 I-0.437 J-1.356
N41 X4.431 Y11.813 Z-10.016 I0.437 J1.356
N42 X3.557 Y9.1 Z-10.967 I-0.437 J-1.356
N43 X4.431 Y11.813 Z-11.919 I0.437 J1.356
N44 X3.557 Y9.1 Z-12.87 I-0.437 J-1.356
N45 X4.431 Y11.813 Z-13.822 I0.437 J1.356
N46 X3.557 Y9.1 Z-14.774 I-0.437 J-1.356
N47 X4.431 Y11.813 Z-15.725 I0.437 J1.356
N48 X3.557 Y9.1 Z-16.677 I-0.437 J-1.356
N49 X4.431 Y11.813 Z-17.628 I0.437 J1.356
N50 X3.557 Y9.1 Z-18.58 I-0.437 J-1.356
N51 X5.419 Y10.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
N52 X2.569 I-1.425 F2400
N53 X5.419 I1.425
( Safe G1 --> G0)
N54 G0 Z15 F730
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
N55 Z15 F730
N56 X1.519 Y59.095 F2800
( Safe G1 --> G0)
N57 Z5 F730
( MOVEMENT_PLUNGE)
N58 G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
N59 G3 X6.469 Y61.818 Z0.19 I2.475 J1.361
N60 X1.519 Y59.095 Z-0.12 I-2.475 J-1.361
N61 X6.469 Y61.818 Z-0.43 I2.475 J1.361
N62 X1.519 Y59.095 Z-0.74 I-2.475 J-1.361
N63 X6.819 Y60.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
N64 X1.169 I-2.825 F2400
N65 X6.819 I2.825
( Safe G1 --> G0)
N66 G0 Z15 F730
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
N67 Z15 F730
N68 X4.431 Y61.813 F2800
N69 G1 Z4 F2400
( MOVEMENT_PLUNGE)
N70 Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
N71 G3 X3.557 Y59.1 Z-1.452 I-0.437 J-1.356
N72 X4.431 Y61.813 Z-2.403 I0.437 J1.356
N73 X3.557 Y59.1 Z-3.355 I-0.437 J-1.356
N74 X4.431 Y61.813 Z-4.306 I0.437 J1.356
N75 X3.557 Y59.1 Z-5.258 I-0.437 J-1.356
N76 X4.431 Y61.813 Z-6.209 I0.437 J1.356
N77 X3.557 Y59.1 Z-7.161 I-0.437 J-1.356
N78 X4.431 Y61.813 Z-8.113 I0.437 J1.356
N79 X3.557 Y59.1 Z-9.064 I-0.437 J-1.356
N80 X4.431 Y61.813 Z-10.016 I0.437 J1.356
N81 X3.557 Y59.1 Z-10.967 I-0.437 J-1.356
N82 X4.431 Y61.813 Z-11.919 I0.437 J1.356
N83 X3.557 Y59.1 Z-12.87 I-0.437 J-1.356
N84 X4.431 Y61.813 Z-13.822 I0.437 J1.356
N85 X3.557 Y59.1 Z-14.774 I-0.437 J-1.356
N86 X4.431 Y61.813 Z-15.725 I0.437 J1.356
N87 X3.557 Y59.1 Z-16.677 I-0.437 J-1.356
N88 X4.431 Y61.813 Z-17.628 I0.437 J1.356
N89 X3.557 Y59.1 Z-18.58 I-0.437 J-1.356
N90 X5.419 Y60.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
N91 X2.569 I-1.425 F2400
N92 X5.419 I1.425
( Safe G1 --> G0)
N93 G0 Z15 F730
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
N94 Z15 F730
N95 X1.519 Y109.095 F2800
( Safe G1 --> G0)
N96 Z5 F730
( MOVEMENT_PLUNGE)
N97 G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
N98 G3 X6.469 Y111.818 Z0.19 I2.475 J1.361
N99 X1.519 Y109.095 Z-0.12 I-2.475 J-1.361
N100 X6.469 Y111.818 Z-0.43 I2.475 J1.361
N101 X1.519 Y109.095 Z-0.74 I-2.475 J-1.361
N102 X6.819 Y110.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
N103 X1.169 I-2.825 F2400
N104 X6.819 I2.825
( Safe G1 --> G0)
N105 G0 Z15 F730
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
N106 Z15 F730
N107 X4.431 Y111.813 F2800
N108 G1 Z4 F2400
( MOVEMENT_PLUNGE)
N109 Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
N110 G3 X3.557 Y109.1 Z-1.452 I-0.437 J-1.356
N111 X4.431 Y111.813 Z-2.403 I0.437 J1.356
N112 X3.557 Y109.1 Z-3.355 I-0.437 J-1.356
N113 X4.431 Y111.813 Z-4.306 I0.437 J1.356
N114 X3.557 Y109.1 Z-5.258 I-0.437 J-1.356
N115 X4.431 Y111.813 Z-6.209 I0.437 J1.356
N116 X3.557 Y109.1 Z-7.161 I-0.437 J-1.356
N117 X4.431 Y111.813 Z-8.113 I0.437 J1.356
N118 X3.557 Y109.1 Z-9.064 I-0.437 J-1.356
N119 X4.431 Y111.813 Z-10.016 I0.437 J1.356
N120 X3.557 Y109.1 Z-10.967 I-0.437 J-1.356
N121 X4.431 Y111.813 Z-11.919 I0.437 J1.356
N122 X3.557 Y109.1 Z-12.87 I-0.437 J-1.356
N123 X4.431 Y111.813 Z-13.822 I0.437 J1.356
N124 X3.557 Y109.1 Z-14.774 I-0.437 J-1.356
N125 X4.431 Y111.813 Z-15.725 I0.437 J1.356
N126 X3.557 Y109.1 Z-16.677 I-0.437 J-1.356
N127 X4.431 Y111.813 Z-17.628 I0.437 J1.356
N128 X3.557 Y109.1 Z-18.58 I-0.437 J-1.356
N129 X5.419 Y110.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
N130 X2.569 I-1.425 F2400
N131 X5.419 I1.425
( Safe G1 --> G0)
N132 G0 Z15 F730
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
N133 Z15 F730
N134 X1.519 Y159.095 F2800
( Safe G1 --> G0)
N135 Z5 F730
( MOVEMENT_PLUNGE)
N136 G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
N137 G3 X6.469 Y161.818 Z0.19 I2.475 J1.361
N138 X1.519 Y159.095 Z-0.12 I-2.475 J-1.361
N139 X6.469 Y161.818 Z-0.43 I2.475 J1.361
N140 X1.519 Y159.095 Z-0.74 I-2.475 J-1.361
N141 X6.819 Y160.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
N142 X1.169 I-2.825 F2400
N143 X6.819 I2.825
( Safe G1 --> G0)
N144 G0 Z15 F730
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
N145 Z15 F730
N146 X4.431 Y161.813 F2800
N147 G1 Z4 F2400
( MOVEMENT_PLUNGE)
N148 Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
N149 G3 X3.557 Y159.1 Z-1.452 I-0.437 J-1.356
N150 X4.431 Y161.813 Z-2.403 I0.437 J1.356
N151 X3.557 Y159.1 Z-3.355 I-0.437 J-1.356
N152 X4.431 Y161.813 Z-4.306 I0.437 J1.356
N153 X3.557 Y159.1 Z-5.258 I-0.437 J-1.356
N154 X4.431 Y161.813 Z-6.209 I0.437 J1.356
N155 X3.557 Y159.1 Z-7.161 I-0.437 J-1.356
N156 X4.431 Y161.813 Z-8.113 I0.437 J1.356
N157 X3.557 Y159.1 Z-9.064 I-0.437 J-1.356
N158 X4.431 Y161.813 Z-10.016 I0.437 J1.356
N159 X3.557 Y159.1 Z-10.967 I-0.437 J-1.356
N160 X4.431 Y161.813 Z-11.919 I0.437 J1.356
N161 X3.557 Y159.1 Z-12.87 I-0.437 J-1.356
N162 X4.431 Y161.813 Z-13.822 I0.437 J1.356
N163 X3.557 Y159.1 Z-14.774 I-0.437 J-1.356
N164 X4.431 Y161.813 Z-15.725 I0.437 J1.356
N165 X3.557 Y159.1 Z-16.677 I-0.437 J-1.356
N166 X4.431 Y161.813 Z-17.628 I0.437 J1.356
N167 X3.557 Y159.1 Z-18.58 I-0.437 J-1.356
N168 X5.419 Y160.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
N169 X2.569 I-1.425 F2400
N170 X5.419 I1.425
( Safe G1 --> G0)
N171 G0 Z15 F730
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
N172 Z15 F730
N173 X1.519 Y209.095 F2800
( Safe G1 --> G0)
N174 Z5 F730
( MOVEMENT_PLUNGE)
N175 G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
N176 G3 X6.469 Y211.818 Z0.19 I2.475 J1.361
N177 X1.519 Y209.095 Z-0.12 I-2.475 J-1.361
N178 X6.469 Y211.818 Z-0.43 I2.475 J1.361
N179 X1.519 Y209.095 Z-0.74 I-2.475 J-1.361
N180 X6.819 Y210.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
N181 X1.169 I-2.825 F2400
N182 X6.819 I2.825
( Safe G1 --> G0)
N183 G0 Z15 F730
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
N184 Z15 F730
N185 X4.431 Y211.813 F2800
N186 G1 Z4 F2400
( MOVEMENT_PLUNGE)
N187 Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
N188 G3 X3.557 Y209.1 Z-1.452 I-0.437 J-1.356
N189 X4.431 Y211.813 Z-2.403 I0.437 J1.356
N190 X3.557 Y209.1 Z-3.355 I-0.437 J-1.356
N191 X4.431 Y211.813 Z-4.306 I0.437 J1.356
N192 X3.557 Y209.1 Z-5.258 I-0.437 J-1.356
N193 X4.431 Y211.813 Z-6.209 I0.437 J1.356
N194 X3.557 Y209.1 Z-7.161 I-0.437 J-1.356
N195 X4.431 Y211.813 Z-8.113 I0.437 J1.356
N196 X3.557 Y209.1 Z-9.064 I-0.437 J-1.356
N197 X4.431 Y211.813 Z-10.016 I0.437 J1.356
N198 X3.557 Y209.1 Z-10.967 I-0.437 J-1.356
N199 X4.431 Y211.813 Z-11.919 I0.437 J1.356
N200 X3.557 Y209.1 Z-12.87 I-0.437 J-1.356
N201 X4.431 Y211.813 Z-13.822 I0.437 J1.356
N202 X3.557 Y209.1 Z-14.774 I-0.437 J-1.356
N203 X4.431 Y211.813 Z-15.725 I0.437 J1.356
N204 X3.557 Y209.1 Z-16.677 I-0.437 J-1.356
N205 X4.431 Y211.813 Z-17.628 I0.437 J1.356
N206 X3.557 Y209.1 Z-18.58 I-0.437 J-1.356
N207 X5.419 Y210.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
N208 X2.569 I-1.425 F2400
N209 X5.419 I1.425
( Safe G1 --> G0)
N210 G0 Z15 F730
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
N211 Z15 F730
N212 X1.519 Y259.095 F2800
( Safe G1 --> G0)
N213 Z5 F730
( MOVEMENT_PLUNGE)
N214 G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
N215 G3 X6.469 Y261.818 Z0.19 I2.475 J1.361
N216 X1.519 Y259.095 Z-0.12 I-2.475 J-1.361
N217 X6.469 Y261.818 Z-0.43 I2.475 J1.361
N218 X1.519 Y259.095 Z-0.74 I-2.475 J-1.361
N219 X6.819 Y260.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
N220 X1.169 I-2.825 F2400
N221 X6.819 I2.825
( Safe G1 --> G0)
N222 G0 Z15 F730
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
N223 Z15 F730
N224 X4.431 Y261.813 F2800
N225 G1 Z4 F2400
( MOVEMENT_PLUNGE)
N226 Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
N227 G3 X3.557 Y259.1 Z-1.452 I-0.437 J-1.356
N228 X4.431 Y261.813 Z-2.403 I0.437 J1.356
N229 X3.557 Y259.1 Z-3.355 I-0.437 J-1.356
N230 X4.431 Y261.813 Z-4.306 I0.437 J1.356
N231 X3.557 Y259.1 Z-5.258 I-0.437 J-1.356
N232 X4.431 Y261.813 Z-6.209 I0.437 J1.356
N233 X3.557 Y259.1 Z-7.161 I-0.437 J-1.356
N234 X4.431 Y261.813 Z-8.113 I0.437 J1.356
N235 X3.557 Y259.1 Z-9.064 I-0.437 J-1.356
N236 X4.431 Y261.813 Z-10.016 I0.437 J1.356
N237 X3.557 Y259.1 Z-10.967 I-0.437 J-1.356
N238 X4.431 Y261.813 Z-11.919 I0.437 J1.356
N239 X3.557 Y259.1 Z-12.87 I-0.437 J-1.356
N240 X4.431 Y261.813 Z-13.822 I0.437 J1.356
N241 X3.557 Y259.1 Z-14.774 I-0.437 J-1.356
N242 X4.431 Y261.813 Z-15.725 I0.437 J1.356
N243 X3.557 Y259.1 Z-16.677 I-0.437 J-1.356
N244 X4.431 Y261.813 Z-17.628 I0.437 J1.356
N245 X3.557 Y259.1 Z-18.58 I-0.437 J-1.356
N246 X5.419 Y260.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
N247 X2.569 I-1.425 F2400
N248 X5.419 I1.425
( Safe G1 --> G0)
N249 G0 Z15 F730
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
N250 Z15 F730
N251 X1.519 Y309.095 F2800
( Safe G1 --> G0)
N252 Z5 F730
( MOVEMENT_PLUNGE)
N253 G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
N254 G3 X6.469 Y311.818 Z0.19 I2.475 J1.361
N255 X1.519 Y309.095 Z-0.12 I-2.475 J-1.361
N256 X6.469 Y311.818 Z-0.43 I2.475 J1.361
N257 X1.519 Y309.095 Z-0.74 I-2.475 J-1.361
N258 X6.819 Y310.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
N259 X1.169 I-2.825 F2400
N260 X6.819 I2.825
( Safe G1 --> G0)
N261 G0 Z15 F730
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
N262 Z15 F730
N263 X4.431 Y311.813 F2800
N264 G1 Z4 F2400
( MOVEMENT_PLUNGE)
N265 Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
N266 G3 X3.557 Y309.1 Z-1.452 I-0.437 J-1.356
N267 X4.431 Y311.813 Z-2.403 I0.437 J1.356
N268 X3.557 Y309.1 Z-3.355 I-0.437 J-1.356
N269 X4.431 Y311.813 Z-4.306 I0.437 J1.356
N270 X3.557 Y309.1 Z-5.258 I-0.437 J-1.356
N271 X4.431 Y311.813 Z-6.209 I0.437 J1.356
N272 X3.557 Y309.1 Z-7.161 I-0.437 J-1.356
N273 X4.431 Y311.813 Z-8.113 I0.437 J1.356
N274 X3.557 Y309.1 Z-9.064 I-0.437 J-1.356
N275 X4.431 Y311.813 Z-10.016 I0.437 J1.356
N276 X3.557 Y309.1 Z-10.967 I-0.437 J-1.356
N277 X4.431 Y311.813 Z-11.919 I0.437 J1.356
N278 X3.557 Y309.1 Z-12.87 I-0.437 J-1.356
N279 X4.431 Y311.813 Z-13.822 I0.437 J1.356
N280 X3.557 Y309.1 Z-14.774 I-0.437 J-1.356
N281 X4.431 Y311.813 Z-15.725 I0.437 J1.356
N282 X3.557 Y309.1 Z-16.677 I-0.437 J-1.356
N283 X4.431 Y311.813 Z-17.628 I0.437 J1.356
N284 X3.557 Y309.1 Z-18.58 I-0.437 J-1.356
N285 X5.419 Y310.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
N286 X2.569 I-1.425 F2400
N287 X5.419 I1.425
( Safe G1 --> G0)
N288 G0 Z15 F730
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
N289 Z15 F730
N290 X1.519 Y359.095 F2800
( Safe G1 --> G0)
N291 Z5 F730
( MOVEMENT_PLUNGE)
N292 G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
N293 G3 X6.469 Y361.818 Z0.19 I2.475 J1.361
N294 X1.519 Y359.095 Z-0.12 I-2.475 J-1.361
N295 X6.469 Y361.818 Z-0.43 I2.475 J1.361
N296 X1.519 Y359.095 Z-0.74 I-2.475 J-1.361
N297 X6.819 Y360.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
N298 X1.169 I-2.825 F2400
N299 X6.819 I2.825
( Safe G1 --> G0)
N300 G0 Z15 F730
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
N301 Z15 F730
N302 X4.431 Y361.813 F2800
N303 G1 Z4 F2400
( MOVEMENT_PLUNGE)
N304 Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
N305 G3 X3.557 Y359.1 Z-1.452 I-0.437 J-1.356
N306 X4.431 Y361.813 Z-2.403 I0.437 J1.356
N307 X3.557 Y359.1 Z-3.355 I-0.437 J-1.356
N308 X4.431 Y361.813 Z-4.306 I0.437 J1.356
N309 X3.557 Y359.1 Z-5.258 I-0.437 J-1.356
N310 X4.431 Y361.813 Z-6.209 I0.437 J1.356
N311 X3.557 Y359.1 Z-7.161 I-0.437 J-1.356
N312 X4.431 Y361.813 Z-8.113 I0.437 J1.356
N313 X3.557 Y359.1 Z-9.064 I-0.437 J-1.356
N314 X4.431 Y361.813 Z-10.016 I0.437 J1.356
N315 X3.557 Y359.1 Z-10.967 I-0.437 J-1.356
N316 X4.431 Y361.813 Z-11.919 I0.437 J1.356
N317 X3.557 Y359.1 Z-12.87 I-0.437 J-1.356
N318 X4.431 Y361.813 Z-13.822 I0.437 J1.356
N319 X3.557 Y359.1 Z-14.774 I-0.437 J-1.356
N320 X4.431 Y361.813 Z-15.725 I0.437 J1.356
N321 X3.557 Y359.1 Z-16.677 I-0.437 J-1.356
N322 X4.431 Y361.813 Z-17.628 I0.437 J1.356
N323 X3.557 Y359.1 Z-18.58 I-0.437 J-1.356
N324 X5.419 Y360.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
N325 X2.569 I-1.425 F2400
N326 X5.419 I1.425
( Safe G1 --> G0)
N327 G0 Z15 F730
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
N328 Z15 F730
N329 X1.519 Y409.095 F2800
( Safe G1 --> G0)
N330 Z5 F730
( MOVEMENT_PLUNGE)
N331 G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
N332 G3 X6.469 Y411.818 Z0.19 I2.475 J1.361
N333 X1.519 Y409.095 Z-0.12 I-2.475 J-1.361
N334 X6.469 Y411.818 Z-0.43 I2.475 J1.361
N335 X1.519 Y409.095 Z-0.74 I-2.475 J-1.361
N336 X6.819 Y410.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
N337 X1.169 I-2.825 F2400
N338 X6.819 I2.825
( Safe G1 --> G0)
N339 G0 Z15 F730
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
N340 Z15 F730
N341 X4.431 Y411.813 F2800
N342 G1 Z4 F2400
( MOVEMENT_PLUNGE)
N343 Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
N344 G3 X3.557 Y409.1 Z-1.452 I-0.437 J-1.356
N345 X4.431 Y411.813 Z-2.403 I0.437 J1.356
N346 X3.557 Y409.1 Z-3.355 I-0.437 J-1.356
N347 X4.431 Y411.813 Z-4.306 I0.437 J1.356
N348 X3.557 Y409.1 Z-5.258 I-0.437 J-1.356
N349 X4.431 Y411.813 Z-6.209 I0.437 J1.356
N350 X3.557 Y409.1 Z-7.161 I-0.437 J-1.356
N351 X4.431 Y411.813 Z-8.113 I0.437 J1.356
N352 X3.557 Y409.1 Z-9.064 I-0.437 J-1.356
N353 X4.431 Y411.813 Z-10.016 I0.437 J1.356
N354 X3.557 Y409.1 Z-10.967 I-0.437 J-1.356
N355 X4.431 Y411.813 Z-11.919 I0.437 J1.356
N356 X3.557 Y409.1 Z-12.87 I-0.437 J-1.356
N357 X4.431 Y411.813 Z-13.822 I0.437 J1.356
N358 X3.557 Y409.1 Z-14.774 I-0.437 J-1.356
N359 X4.431 Y411.813 Z-15.725 I0.437 J1.356
N360 X3.557 Y409.1 Z-16.677 I-0.437 J-1.356
N361 X4.431 Y411.813 Z-17.628 I0.437 J1.356
N362 X3.557 Y409.1 Z-18.58 I-0.437 J-1.356
N363 X5.419 Y410.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
N364 X2.569 I-1.425 F2400
N365 X5.419 I1.425
( Safe G1 --> G0)
N366 G0 Z15 F730
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
N367 Z15 F730
N368 X51.519 Y9.095 F2800
( Safe G1 --> G0)
N369 Z5 F730
( MOVEMENT_PLUNGE)
N370 G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
N371 G3 X56.469 Y11.818 Z0.19 I2.475 J1.361
N372 X51.519 Y9.095 Z-0.12 I-2.475 J-1.361
N373 X56.469 Y11.818 Z-0.43 I2.475 J1.361
N374 X51.519 Y9.095 Z-0.74 I-2.475 J-1.361
N375 X56.819 Y10.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
N376 X51.169 I-2.825 F2400
N377 X56.819 I2.825
( Safe G1 --> G0)
N378 G0 Z15 F730
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
N379 Z15 F730
N380 X54.431 Y11.813 F2800
N381 G1 Z4 F2400
( MOVEMENT_PLUNGE)
N382 Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
N383 G3 X53.557 Y9.1 Z-1.452 I-0.437 J-1.356
N384 X54.431 Y11.813 Z-2.403 I0.437 J1.356
N385 X53.557 Y9.1 Z-3.355 I-0.437 J-1.356
N386 X54.431 Y11.813 Z-4.306 I0.437 J1.356
N387 X53.557 Y9.1 Z-5.258 I-0.437 J-1.356
N388 X54.431 Y11.813 Z-6.209 I0.437 J1.356
N389 X53.557 Y9.1 Z-7.161 I-0.437 J-1.356
N390 X54.431 Y11.813 Z-8.113 I0.437 J1.356
N391 X53.557 Y9.1 Z-9.064 I-0.437 J-1.356
N392 X54.431 Y11.813 Z-10.016 I0.437 J1.356
N393 X53.557 Y9.1 Z-10.967 I-0.437 J-1.356
N394 X54.431 Y11.813 Z-11.919 I0.437 J1.356
N395 X53.557 Y9.1 Z-12.87 I-0.437 J-1.356
N396 X54.431 Y11.813 Z-13.822 I0.437 J1.356
N397 X53.557 Y9.1 Z-14.774 I-0.437 J-1.356
N398 X54.431 Y11.813 Z-15.725 I0.437 J1.356
N399 X53.557 Y9.1 Z-16.677 I-0.437 J-1.356
N400 X54.431 Y11.813 Z-17.628 I0.437 J1.356
N401 X53.557 Y9.1 Z-18.58 I-0.437 J-1.356
N402 X55.419 Y10.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
N403 X52.569 I-1.425 F2400
N404 X55.419 I1.425
( Safe G1 --> G0)
N405 G0 Z15 F730
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
N406 Z15 F730
N407 X51.519 Y59.095 F2800
( Safe G1 --> G0)
N408 Z5 F730
( MOVEMENT_PLUNGE)
N409 G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
N410 G3 X56.469 Y61.818 Z0.19 I2.475 J1.361
N411 X51.519 Y59.095 Z-0.12 I-2.475 J-1.361
N412 X56.469 Y61.818 Z-0.43 I2.475 J1.361
N413 X51.519 Y59.095 Z-0.74 I-2.475 J-1.361
N414 X56.819 Y60.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
N415 X51.169 I-2.825 F2400
N416 X56.819 I2.825
( Safe G1 --> G0)
N417 G0 Z15 F730
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
N418 Z15 F730
N419 X54.431 Y61.813 F2800
N420 G1 Z4 F2400
( MOVEMENT_PLUNGE)
N421 Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
N422 G3 X53.557 Y59.1 Z-1.452 I-0.437 J-1.356
N423 X54.431 Y61.813 Z-2.403 I0.437 J1.356
N424 X53.557 Y59.1 Z-3.355 I-0.437 J-1.356
N425 X54.431 Y61.813 Z-4.306 I0.437 J1.356
N426 X53.557 Y59.1 Z-5.258 I-0.437 J-1.356
N427 X54.431 Y61.813 Z-6.209 I0.437 J1.356
N428 X53.557 Y59.1 Z-7.161 I-0.437 J-1.356
N429 X54.431 Y61.813 Z-8.113 I0.437 J1.356
N430 X53.557 Y59.1 Z-9.064 I-0.437 J-1.356
N431 X54.431 Y61.813 Z-10.016 I0.437 J1.356
N432 X53.557 Y59.1 Z-10.967 I-0.437 J-1.356
N433 X54.431 Y61.813 Z-11.919 I0.437 J1.356
N434 X53.557 Y59.1 Z-12.87 I-0.437 J-1.356
N435 X54.431 Y61.813 Z-13.822 I0.437 J1.356
N436 X53.557 Y59.1 Z-14.774 I-0.437 J-1.356
N437 X54.431 Y61.813 Z-15.725 I0.437 J1.356
N438 X53.557 Y59.1 Z-16.677 I-0.437 J-1.356
N439 X54.431 Y61.813 Z-17.628 I0.437 J1.356
N440 X53.557 Y59.1 Z-18.58 I-0.437 J-1.356
N441 X55.419 Y60.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
N442 X52.569 I-1.425 F2400
N443 X55.419 I1.425
( Safe G1 --> G0)
N444 G0 Z15 F730
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
N445 Z15 F730
N446 X51.519 Y109.095 F2800
( Safe G1 --> G0)
N447 Z5 F730
( MOVEMENT_PLUNGE)
N448 G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
N449 G3 X56.469 Y111.818 Z0.19 I2.475 J1.361
N450 X51.519 Y109.095 Z-0.12 I-2.475 J-1.361
N451 X56.469 Y111.818 Z-0.43 I2.475 J1.361
N452 X51.519 Y109.095 Z-0.74 I-2.475 J-1.361
N453 X56.819 Y110.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
N454 X51.169 I-2.825 F2400
N455 X56.819 I2.825
( Safe G1 --> G0)
N456 G0 Z15 F730
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
N457 Z15 F730
N458 X54.431 Y111.813 F2800
N459 G1 Z4 F2400
( MOVEMENT_PLUNGE)
N460 Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
N461 G3 X53.557 Y109.1 Z-1.452 I-0.437 J-1.356
N462 X54.431 Y111.813 Z-2.403 I0.437 J1.356
N463 X53.557 Y109.1 Z-3.355 I-0.437 J-1.356
N464 X54.431 Y111.813 Z-4.306 I0.437 J1.356
N465 X53.557 Y109.1 Z-5.258 I-0.437 J-1.356
N466 X54.431 Y111.813 Z-6.209 I0.437 J1.356
N467 X53.557 Y109.1 Z-7.161 I-0.437 J-1.356
N468 X54.431 Y111.813 Z-8.113 I0.437 J1.356
N469 X53.557 Y109.1 Z-9.064 I-0.437 J-1.356
N470 X54.431 Y111.813 Z-10.016 I0.437 J1.356
N471 X53.557 Y109.1 Z-10.967 I-0.437 J-1.356
N472 X54.431 Y111.813 Z-11.919 I0.437 J1.356
N473 X53.557 Y109.1 Z-12.87 I-0.437 J-1.356
N474 X54.431 Y111.813 Z-13.822 I0.437 J1.356
N475 X53.557 Y109.1 Z-14.774 I-0.437 J-1.356
N476 X54.431 Y111.813 Z-15.725 I0.437 J1.356
N477 X53.557 Y109.1 Z-16.677 I-0.437 J-1.356
N478 X54.431 Y111.813 Z-17.628 I0.437 J1.356
N479 X53.557 Y109.1 Z-18.58 I-0.437 J-1.356
N480 X55.419 Y110.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
N481 X52.569 I-1.425 F2400
N482 X55.419 I1.425
( Safe G1 --> G0)
N483 G0 Z15 F730
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
N484 Z15 F730
N485 X51.519 Y159.095 F2800
( Safe G1 --> G0)
N486 Z5 F730
( MOVEMENT_PLUNGE)
N487 G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
N488 G3 X56.469 Y161.818 Z0.19 I2.475 J1.361
N489 X51.519 Y159.095 Z-0.12 I-2.475 J-1.361
N490 X56.469 Y161.818 Z-0.43 I2.475 J1.361
N491 X51.519 Y159.095 Z-0.74 I-2.475 J-1.361
N492 X56.819 Y160.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
N493 X51.169 I-2.825 F2400
N494 X56.819 I2.825
( Safe G1 --> G0)
N495 G0 Z15 F730
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
N496 Z15 F730
N497 X54.431 Y161.813 F2800
N498 G1 Z4 F2400
( MOVEMENT_PLUNGE)
N499 Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
N500 G3 X53.557 Y159.1 Z-1.452 I-0.437 J-1.356
N501 X54.431 Y161.813 Z-2.403 I0.437 J1.356
N502 X53.557 Y159.1 Z-3.355 I-0.437 J-1.356
N503 X54.431 Y161.813 Z-4.306 I0.437 J1.356
N504 X53.557 Y159.1 Z-5.258 I-0.437 J-1.356
N505 X54.431 Y161.813 Z-6.209 I0.437 J1.356
N506 X53.557 Y159.1 Z-7.161 I-0.437 J-1.356
N507 X54.431 Y161.813 Z-8.113 I0.437 J1.356
N508 X53.557 Y159.1 Z-9.064 I-0.437 J-1.356
N509 X54.431 Y161.813 Z-10.016 I0.437 J1.356
N510 X53.557 Y159.1 Z-10.967 I-0.437 J-1.356
N511 X54.431 Y161.813 Z-11.919 I0.437 J1.356
N512 X53.557 Y159.1 Z-12.87 I-0.437 J-1.356
N513 X54.431 Y161.813 Z-13.822 I0.437 J1.356
N514 X53.557 Y159.1 Z-14.774 I-0.437 J-1.356
N515 X54.431 Y161.813 Z-15.725 I0.437 J1.356
N516 X53.557 Y159.1 Z-16.677 I-0.437 J-1.356
N517 X54.431 Y161.813 Z-17.628 I0.437 J1.356
N518 X53.557 Y159.1 Z-18.58 I-0.437 J-1.356
N519 X55.419 Y160.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
N520 X52.569 I-1.425 F2400
N521 X55.419 I1.425
( Safe G1 --> G0)
N522 G0 Z15 F730
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
N523 Z15 F730
N524 X51.519 Y209.095 F2800
( Safe G1 --> G0)
N525 Z5 F730
( MOVEMENT_PLUNGE)
N526 G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
N527 G3 X56.469 Y211.818 Z0.19 I2.475 J1.361
N528 X51.519 Y209.095 Z-0.12 I-2.475 J-1.361
N529 X56.469 Y211.818 Z-0.43 I2.475 J1.361
N530 X51.519 Y209.095 Z-0.74 I-2.475 J-1.361
N531 X56.819 Y210.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
N532 X51.169 I-2.825 F2400
N533 X56.819 I2.825
( Safe G1 --> G0)
N534 G0 Z15 F730
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
N535 Z15 F730
N536 X54.431 Y211.813 F2800
N537 G1 Z4 F2400
( MOVEMENT_PLUNGE)
N538 Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
N539 G3 X53.557 Y209.1 Z-1.452 I-0.437 J-1.356
N540 X54.431 Y211.813 Z-2.403 I0.437 J1.356
N541 X53.557 Y209.1 Z-3.355 I-0.437 J-1.356
N542 X54.431 Y211.813 Z-4.306 I0.437 J1.356
N543 X53.557 Y209.1 Z-5.258 I-0.437 J-1.356
N544 X54.431 Y211.813 Z-6.209 I0.437 J1.356
N545 X53.557 Y209.1 Z-7.161 I-0.437 J-1.356
N546 X54.431 Y211.813 Z-8.113 I0.437 J1.356
N547 X53.557 Y209.1 Z-9.064 I-0.437 J-1.356
N548 X54.431 Y211.813 Z-10.016 I0.437 J1.356
N549 X53.557 Y209.1 Z-10.967 I-0.437 J-1.356
N550 X54.431 Y211.813 Z-11.919 I0.437 J1.356
N551 X53.557 Y209.1 Z-12.87 I-0.437 J-1.356
N552 X54.431 Y211.813 Z-13.822 I0.437 J1.356
N553 X53.557 Y209.1 Z-14.774 I-0.437 J-1.356
N554 X54.431 Y211.813 Z-15.725 I0.437 J1.356
N555 X53.557 Y209.1 Z-16.677 I-0.437 J-1.356
N556 X54.431 Y211.813 Z-17.628 I0.437 J1.356
N557 X53.557 Y209.1 Z-18.58 I-0.437 J-1.356
N558 X55.419 Y210.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
N559 X52.569 I-1.425 F2400
N560 X55.419 I1.425
( Safe G1 --> G0)
N561 G0 Z15 F730
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
N562 Z15 F730
N563 X51.519 Y259.095 F2800
( Safe G1 --> G0)
N564 Z5 F730
( MOVEMENT_PLUNGE)
N565 G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
N566 G3 X56.469 Y261.818 Z0.19 I2.475 J1.361
N567 X51.519 Y259.095 Z-0.12 I-2.475 J-1.361
N568 X56.469 Y261.818 Z-0.43 I2.475 J1.361
N569 X51.519 Y259.095 Z-0.74 I-2.475 J-1.361
N570 X56.819 Y260.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
N571 X51.169 I-2.825 F2400
N572 X56.819 I2.825
( Safe G1 --> G0)
N573 G0 Z15 F730
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
N574 Z15 F730
N575 X54.431 Y261.813 F2800
N576 G1 Z4 F2400
( MOVEMENT_PLUNGE)
N577 Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
N578 G3 X53.557 Y259.1 Z-1.452 I-0.437 J-1.356
N579 X54.431 Y261.813 Z-2.403 I0.437 J1.356
N580 X53.557 Y259.1 Z-3.355 I-0.437 J-1.356
N581 X54.431 Y261.813 Z-4.306 I0.437 J1.356
N582 X53.557 Y259.1 Z-5.258 I-0.437 J-1.356
N583 X54.431 Y261.813 Z-6.209 I0.437 J1.356
N584 X53.557 Y259.1 Z-7.161 I-0.437 J-1.356
N585 X54.431 Y261.813 Z-8.113 I0.437 J1.356
N586 X53.557 Y259.1 Z-9.064 I-0.437 J-1.356
N587 X54.431 Y261.813 Z-10.016 I0.437 J1.356
N588 X53.557 Y259.1 Z-10.967 I-0.437 J-1.356
N589 X54.431 Y261.813 Z-11.919 I0.437 J1.356
N590 X53.557 Y259.1 Z-12.87 I-0.437 J-1.356
N591 X54.431 Y261.813 Z-13.822 I0.437 J1.356
N592 X53.557 Y259.1 Z-14.774 I-0.437 J-1.356
N593 X54.431 Y261.813 Z-15.725 I0.437 J1.356
N594 X53.557 Y259.1 Z-16.677 I-0.437 J-1.356
N595 X54.431 Y261.813 Z-17.628 I0.437 J1.356
N596 X53.557 Y259.1 Z-18.58 I-0.437 J-1.356
N597 X55.419 Y260.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
N598 X52.569 I-1.425 F2400
N599 X55.419 I1.425
( Safe G1 --> G0)
N600 G0 Z15 F730
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
N601 Z15 F730
N602 X51.519 Y309.095 F2800
( Safe G1 --> G0)
N603 Z5 F730
( MOVEMENT_PLUNGE)
N604 G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
N605 G3 X56.469 Y311.818 Z0.19 I2.475 J1.361
N606 X51.519 Y309.095 Z-0.12 I-2.475 J-1.361
N607 X56.469 Y311.818 Z-0.43 I2.475 J1.361
N608 X51.519 Y309.095 Z-0.74 I-2.475 J-1.361
N609 X56.819 Y310.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
N610 X51.169 I-2.825 F2400
N611 X56.819 I2.825
( Safe G1 --> G0)
N612 G0 Z15 F730
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
N613 Z15 F730
N614 X54.431 Y311.813 F2800
N615 G1 Z4 F2400
( MOVEMENT_PLUNGE)
N616 Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
N617 G3 X53.557 Y309.1 Z-1.452 I-0.437 J-1.356
N618 X54.431 Y311.813 Z-2.403 I0.437 J1.356
N619 X53.557 Y309.1 Z-3.355 I-0.437 J-1.356
N620 X54.431 Y311.813 Z-4.306 I0.437 J1.356
N621 X53.557 Y309.1 Z-5.258 I-0.437 J-1.356
N622 X54.431 Y311.813 Z-6.209 I0.437 J1.356
N623 X53.557 Y309.1 Z-7.161 I-0.437 J-1.356
N624 X54.431 Y311.813 Z-8.113 I0.437 J1.356
N625 X53.557 Y309.1 Z-9.064 I-0.437 J-1.356
N626 X54.431 Y311.813 Z-10.016 I0.437 J1.356
N627 X53.557 Y309.1 Z-10.967 I-0.437 J-1.356
N628 X54.431 Y311.813 Z-11.919 I0.437 J1.356
N629 X53.557 Y309.1 Z-12.87 I-0.437 J-1.356
N630 X54.431 Y311.813 Z-13.822 I0.437 J1.356
N631 X53.557 Y309.1 Z-14.774 I-0.437 J-1.356
N632 X54.431 Y311.813 Z-15.725 I0.437 J1.356
N633 X53.557 Y309.1 Z-16.677 I-0.437 J-1.356
N634 X54.431 Y311.813 Z-17.628 I0.437 J1.356
N635 X53.557 Y309.1 Z-18.58 I-0.437 J-1.356
N636 X55.419 Y310.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
N637 X52.569 I-1.425 F2400
N638 X55.419 I1.425
( Safe G1 --> G0)
N639 G0 Z15 F730
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
N640 Z15 F730
N641 X51.519 Y359.095 F2800
( Safe G1 --> G0)
N642 Z5 F730
( MOVEMENT_PLUNGE)
N643 G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
N644 G3 X56.469 Y361.818 Z0.19 I2.475 J1.361
N645 X51.519 Y359.095 Z-0.12 I-2.475 J-1.361
N646 X56.469 Y361.818 Z-0.43 I2.475 J1.361
N647 X51.519 Y359.095 Z-0.74 I-2.475 J-1.361
N648 X56.819 Y360.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
N649 X51.169 I-2.825 F2400
N650 X56.819 I2.825
( Safe G1 --> G0)
N651 G0 Z15 F730
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
N652 Z15 F730
N653 X54.431 Y361.813 F2800
N654 G1 Z4 F2400
( MOVEMENT_PLUNGE)
N655 Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
N656 G3 X53.557 Y359.1 Z-1.452 I-0.437 J-1.356
N657 X54.431 Y361.813 Z-2.403 I0.437 J1.356
N658 X53.557 Y359.1 Z-3.355 I-0.437 J-1.356
N659 X54.431 Y361.813 Z-4.306 I0.437 J1.356
N660 X53.557 Y359.1 Z-5.258 I-0.437 J-1.356
N661 X54.431 Y361.813 Z-6.209 I0.437 J1.356
N662 X53.557 Y359.1 Z-7.161 I-0.437 J-1.356
N663 X54.431 Y361.813 Z-8.113 I0.437 J1.356
N664 X53.557 Y359.1 Z-9.064 I-0.437 J-1.356
N665 X54.431 Y361.813 Z-10.016 I0.437 J1.356
N666 X53.557 Y359.1 Z-10.967 I-0.437 J-1.356
N667 X54.431 Y361.813 Z-11.919 I0.437 J1.356
N668 X53.557 Y359.1 Z-12.87 I-0.437 J-1.356
N669 X54.431 Y361.813 Z-13.822 I0.437 J1.356
N670 X53.557 Y359.1 Z-14.774 I-0.437 J-1.356
N671 X54.431 Y361.813 Z-15.725 I0.437 J1.356
N672 X53.557 Y359.1 Z-16.677 I-0.437 J-1.356
N673 X54.431 Y361.813 Z-17.628 I0.437 J1.356
N674 X53.557 Y359.1 Z-18.58 I-0.437 J-1.356
N675 X55.419 Y360.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
N676 X52.569 I-1.425 F2400
N677 X55.419 I1.425
( Safe G1 --> G0)
N678 G0 Z15 F730
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
N679 Z15 F730
N680 X51.519 Y409.095 F2800
( Safe G1 --> G0)
N681 Z5 F730
( MOVEMENT_PLUNGE)
N682 G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
N683 G3 X56.469 Y411.818 Z0.19 I2.475 J1.361
N684 X51.519 Y409.095 Z-0.12 I-2.475 J-1.361
N685 X56.469 Y411.818 Z-0.43 I2.475 J1.361
N686 X51.519 Y409.095 Z-0.74 I-2.475 J-1.361
N687 X56.819 Y410.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
N688 X51.169 I-2.825 F2400
N689 X56.819 I2.825
( Safe G1 --> G0)
N690 G0 Z15 F730
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
N691 Z15 F730
N692 X54.431 Y411.813 F2800
N693 G1 Z4 F2400
( MOVEMENT_PLUNGE)
N694 Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
N695 G3 X53.557 Y409.1 Z-1.452 I-0.437 J-1.356
N696 X54.431 Y411.813 Z-2.403 I0.437 J1.356
N697 X53.557 Y409.1 Z-3.355 I-0.437 J-1.356
N698 X54.431 Y411.813 Z-4.306 I0.437 J1.356
N699 X53.557 Y409.1 Z-5.258 I-0.437 J-1.356
N700 X54.431 Y411.813 Z-6.209 I0.437 J1.356
N701 X53.557 Y409.1 Z-7.161 I-0.437 J-1.356
N702 X54.431 Y411.813 Z-8.113 I0.437 J1.356
N703 X53.557 Y409.1 Z-9.064 I-0.437 J-1.356
N704 X54.431 Y411.813 Z-10.016 I0.437 J1.356
N705 X53.557 Y409.1 Z-10.967 I-0.437 J-1.356
N706 X54.431 Y411.813 Z-11.919 I0.437 J1.356
N707 X53.557 Y409.1 Z-12.87 I-0.437 J-1.356
N708 X54.431 Y411.813 Z-13.822 I0.437 J1.356
N709 X53.557 Y409.1 Z-14.774 I-0.437 J-1.356
N710 X54.431 Y411.813 Z-15.725 I0.437 J1.356
N711 X53.557 Y409.1 Z-16.677 I-0.437 J-1.356
N712 X54.431 Y411.813 Z-17.628 I0.437 J1.356
N713 X53.557 Y409.1 Z-18.58 I-0.437 J-1.356
N714 X55.419 Y410.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
N715 X52.569 I-1.425 F2400
N716 X55.419 I1.425
( Safe G1 --> G0)
N717 G0 Z15 F730
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
N718 Z15 F730
N719 X101.519 Y9.095 F2800
( Safe G1 --> G0)
N720 Z5 F730
( MOVEMENT_PLUNGE)
N721 G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
N722 G3 X106.469 Y11.818 Z0.19 I2.475 J1.361
N723 X101.519 Y9.095 Z-0.12 I-2.475 J-1.361
N724 X106.469 Y11.818 Z-0.43 I2.475 J1.361
N725 X101.519 Y9.095 Z-0.74 I-2.475 J-1.361
N726 X106.819 Y10.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
N727 X101.169 I-2.825 F2400
N728 X106.819 I2.825
( Safe G1 --> G0)
N729 G0 Z15 F730
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
N730 Z15 F730
N731 X104.431 Y11.813 F2800
N732 G1 Z4 F2400
( MOVEMENT_PLUNGE)
N733 Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
N734 G3 X103.557 Y9.1 Z-1.452 I-0.437 J-1.356
N735 X104.431 Y11.813 Z-2.403 I0.437 J1.356
N736 X103.557 Y9.1 Z-3.355 I-0.437 J-1.356
N737 X104.431 Y11.813 Z-4.306 I0.437 J1.356
N738 X103.557 Y9.1 Z-5.258 I-0.437 J-1.356
N739 X104.431 Y11.813 Z-6.209 I0.437 J1.356
N740 X103.557 Y9.1 Z-7.161 I-0.437 J-1.356
N741 X104.431 Y11.813 Z-8.113 I0.437 J1.356
N742 X103.557 Y9.1 Z-9.064 I-0.437 J-1.356
N743 X104.431 Y11.813 Z-10.016 I0.437 J1.356
N744 X103.557 Y9.1 Z-10.967 I-0.437 J-1.356
N745 X104.431 Y11.813 Z-11.919 I0.437 J1.356
N746 X103.557 Y9.1 Z-12.87 I-0.437 J-1.356
N747 X104.431 Y11.813 Z-13.822 I0.437 J1.356
N748 X103.557 Y9.1 Z-14.774 I-0.437 J-1.356
N749 X104.431 Y11.813 Z-15.725 I0.437 J1.356
N750 X103.557 Y9.1 Z-16.677 I-0.437 J-1.356
N751 X104.431 Y11.813 Z-17.628 I0.437 J1.356
N752 X103.557 Y9.1 Z-18.58 I-0.437 J-1.356
N753 X105.419 Y10.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
N754 X102.569 I-1.425 F2400
N755 X105.419 I1.425
( Safe G1 --> G0)
N756 G0 Z15 F730
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
N757 Z15 F730
N758 X101.519 Y59.095 F2800
( Safe G1 --> G0)
N759 Z5 F730
( MOVEMENT_PLUNGE)
N760 G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
N761 G3 X106.469 Y61.818 Z0.19 I2.475 J1.361
N762 X101.519 Y59.095 Z-0.12 I-2.475 J-1.361
N763 X106.469 Y61.818 Z-0.43 I2.475 J1.361
N764 X101.519 Y59.095 Z-0.74 I-2.475 J-1.361
N765 X106.819 Y60.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
N766 X101.169 I-2.825 F2400
N767 X106.819 I2.825
( Safe G1 --> G0)
N768 G0 Z15 F730
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
N769 Z15 F730
N770 X104.431 Y61.813 F2800
N771 G1 Z4 F2400
( MOVEMENT_PLUNGE)
N772 Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
N773 G3 X103.557 Y59.1 Z-1.452 I-0.437 J-1.356
N774 X104.431 Y61.813 Z-2.403 I0.437 J1.356
N775 X103.557 Y59.1 Z-3.355 I-0.437 J-1.356
N776 X104.431 Y61.813 Z-4.306 I0.437 J1.356
N777 X103.557 Y59.1 Z-5.258 I-0.437 J-1.356
N778 X104.431 Y61.813 Z-6.209 I0.437 J1.356
N779 X103.557 Y59.1 Z-7.161 I-0.437 J-1.356
N780 X104.431 Y61.813 Z-8.113 I0.437 J1.356
N781 X103.557 Y59.1 Z-9.064 I-0.437 J-1.356
N782 X104.431 Y61.813 Z-10.016 I0.437 J1.356
N783 X103.557 Y59.1 Z-10.967 I-0.437 J-1.356
N784 X104.431 Y61.813 Z-11.919 I0.437 J1.356
N785 X103.557 Y59.1 Z-12.87 I-0.437 J-1.356
N786 X104.431 Y61.813 Z-13.822 I0.437 J1.356
N787 X103.557 Y59.1 Z-14.774 I-0.437 J-1.356
N788 X104.431 Y61.813 Z-15.725 I0.437 J1.356
N789 X103.557 Y59.1 Z-16.677 I-0.437 J-1.356
N790 X104.431 Y61.813 Z-17.628 I0.437 J1.356
N791 X103.557 Y59.1 Z-18.58 I-0.437 J-1.356
N792 X105.419 Y60.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
N793 X102.569 I-1.425 F2400
N794 X105.419 I1.425
( Safe G1 --> G0)
N795 G0 Z15 F730
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
N796 Z15 F730
N797 X101.519 Y109.095 F2800
( Safe G1 --> G0)
N798 Z5 F730
( MOVEMENT_PLUNGE)
N799 G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
N800 G3 X106.469 Y111.818 Z0.19 I2.475 J1.361
N801 X101.519 Y109.095 Z-0.12 I-2.475 J-1.361
N802 X106.469 Y111.818 Z-0.43 I2.475 J1.361
N803 X101.519 Y109.095 Z-0.74 I-2.475 J-1.361
N804 X106.819 Y110.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
N805 X101.169 I-2.825 F2400
N806 X106.819 I2.825
( Safe G1 --> G0)
N807 G0 Z15 F730
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
N808 Z15 F730
N809 X104.431 Y111.813 F2800
N810 G1 Z4 F2400
( MOVEMENT_PLUNGE)
N811 Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
N812 G3 X103.557 Y109.1 Z-1.452 I-0.437 J-1.356
N813 X104.431 Y111.813 Z-2.403 I0.437 J1.356
N814 X103.557 Y109.1 Z-3.355 I-0.437 J-1.356
N815 X104.431 Y111.813 Z-4.306 I0.437 J1.356
N816 X103.557 Y109.1 Z-5.258 I-0.437 J-1.356
N817 X104.431 Y111.813 Z-6.209 I0.437 J1.356
N818 X103.557 Y109.1 Z-7.161 I-0.437 J-1.356
N819 X104.431 Y111.813 Z-8.113 I0.437 J1.356
N820 X103.557 Y109.1 Z-9.064 I-0.437 J-1.356
N821 X104.431 Y111.813 Z-10.016 I0.437 J1.356
N822 X103.557 Y109.1 Z-10.967 I-0.437 J-1.356
N823 X104.431 Y111.813 Z-11.919 I0.437 J1.356
N824 X103.557 Y109.1 Z-12.87 I-0.437 J-1.356
N825 X104.431 Y111.813 Z-13.822 I0.437 J1.356
N826 X103.557 Y109.1 Z-14.774 I-0.437 J-1.356
N827 X104.431 Y111.813 Z-15.725 I0.437 J1.356
N828 X103.557 Y109.1 Z-16.677 I-0.437 J-1.356
N829 X104.431 Y111.813 Z-17.628 I0.437 J1.356
N830 X103.557 Y109.1 Z-18.58 I-0.437 J-1.356
N831 X105.419 Y110.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
N832 X102.569 I-1.425 F2400
N833 X105.419 I1.425
( Safe G1 --> G0)
N834 G0 Z15 F730
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
N835 Z15 F730
N836 X101.519 Y159.095 F2800
( Safe G1 --> G0)
N837 Z5 F730
( MOVEMENT_PLUNGE)
N838 G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
N839 G3 X106.469 Y161.818 Z0.19 I2.475 J1.361
N840 X101.519 Y159.095 Z-0.12 I-2.475 J-1.361
N841 X106.469 Y161.818 Z-0.43 I2.475 J1.361
N842 X101.519 Y159.095 Z-0.74 I-2.475 J-1.361
N843 X106.819 Y160.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
N844 X101.169 I-2.825 F2400
N845 X106.819 I2.825
( Safe G1 --> G0)
N846 G0 Z15 F730
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
N847 Z15 F730
N848 X104.431 Y161.813 F2800
N849 G1 Z4 F2400
( MOVEMENT_PLUNGE)
N850 Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
N851 G3 X103.557 Y159.1 Z-1.452 I-0.437 J-1.356
N852 X104.431 Y161.813 Z-2.403 I0.437 J1.356
N853 X103.557 Y159.1 Z-3.355 I-0.437 J-1.356
N854 X104.431 Y161.813 Z-4.306 I0.437 J1.356
N855 X103.557 Y159.1 Z-5.258 I-0.437 J-1.356
N856 X104.431 Y161.813 Z-6.209 I0.437 J1.356
N857 X103.557 Y159.1 Z-7.161 I-0.437 J-1.356
N858 X104.431 Y161.813 Z-8.113 I0.437 J1.356
N859 X103.557 Y159.1 Z-9.064 I-0.437 J-1.356
N860 X104.431 Y161.813 Z-10.016 I0.437 J1.356
N861 X103.557 Y159.1 Z-10.967 I-0.437 J-1.356
N862 X104.431 Y161.813 Z-11.919 I0.437 J1.356
N863 X103.557 Y159.1 Z-12.87 I-0.437 J-1.356
N864 X104.431 Y161.813 Z-13.822 I0.437 J1.356
N865 X103.557 Y159.1 Z-14.774 I-0.437 J-1.356
N866 X104.431 Y161.813 Z-15.725 I0.437 J1.356
N867 X103.557 Y159.1 Z-16.677 I-0.437 J-1.356
N868 X104.431 Y161.813 Z-17.628 I0.437 J1.356
N869 X103.557 Y159.1 Z-18.58 I-0.437 J-1.356
N870 X105.419 Y160.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
N871 X102.569 I-1.425 F2400
N872 X105.419 I1.425
( Safe G1 --> G0)
N873 G0 Z15 F730
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
N874 Z15 F730
N875 X101.519 Y209.095 F2800
( Safe G1 --> G0)
N876 Z5 F730
( MOVEMENT_PLUNGE)
N877 G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
N878 G3 X106.469 Y211.818 Z0.19 I2.475 J1.361
N879 X101.519 Y209.095 Z-0.12 I-2.475 J-1.361
N880 X106.469 Y211.818 Z-0.43 I2.475 J1.361
N881 X101.519 Y209.095 Z-0.74 I-2.475 J-1.361
N882 X106.819 Y210.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
N883 X101.169 I-2.825 F2400
N884 X106.819 I2.825
( Safe G1 --> G0)
N885 G0 Z15 F730
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
N886 Z15 F730
N887 X104.431 Y211.813 F2800
N888 G1 Z4 F2400
( MOVEMENT_PLUNGE)
N889 Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
N890 G3 X103.557 Y209.1 Z-1.452 I-0.437 J-1.356
N891 X104.431 Y211.813 Z-2.403 I0.437 J1.356
N892 X103.557 Y209.1 Z-3.355 I-0.437 J-1.356
N893 X104.431 Y211.813 Z-4.306 I0.437 J1.356
N894 X103.557 Y209.1 Z-5.258 I-0.437 J-1.356
N895 X104.431 Y211.813 Z-6.209 I0.437 J1.356
N896 X103.557 Y209.1 Z-7.161 I-0.437 J-1.356
N897 X104.431 Y211.813 Z-8.113 I0.437 J1.356
N898 X103.557 Y209.1 Z-9.064 I-0.437 J-1.356
N899 X104.431 Y211.813 Z-10.016 I0.437 J1.356
N900 X103.557 Y209.1 Z-10.967 I-0.437 J-1.356
N901 X104.431 Y211.813 Z-11.919 I0.437 J1.356
N902 X103.557 Y209.1 Z-12.87 I-0.437 J-1.356
N903 X104.431 Y211.813 Z-13.822 I0.437 J1.356
N904 X103.557 Y209.1 Z-14.774 I-0.437 J-1.356
N905 X104.431 Y211.813 Z-15.725 I0.437 J1.356
N906 X103.557 Y209.1 Z-16.677 I-0.437 J-1.356
N907 X104.431 Y211.813 Z-17.628 I0.437 J1.356
N908 X103.557 Y209.1 Z-18.58 I-0.437 J-1.356
N909 X105.419 Y210.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
N910 X102.569 I-1.425 F2400
N911 X105.419 I1.425
( Safe G1 --> G0)
N912 G0 Z15 F730
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
N913 Z15 F730
N914 X101.519 Y259.095 F2800
( Safe G1 --> G0)
N915 Z5 F730
( MOVEMENT_PLUNGE)
N916 G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
N917 G3 X106.469 Y261.818 Z0.19 I2.475 J1.361
N918 X101.519 Y259.095 Z-0.12 I-2.475 J-1.361
N919 X106.469 Y261.818 Z-0.43 I2.475 J1.361
N920 X101.519 Y259.095 Z-0.74 I-2.475 J-1.361
N921 X106.819 Y260.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
N922 X101.169 I-2.825 F2400
N923 X106.819 I2.825
( Safe G1 --> G0)
N924 G0 Z15 F730
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
N925 Z15 F730
N926 X104.431 Y261.813 F2800
N927 G1 Z4 F2400
( MOVEMENT_PLUNGE)
N928 Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
N929 G3 X103.557 Y259.1 Z-1.452 I-0.437 J-1.356
N930 X104.431 Y261.813 Z-2.403 I0.437 J1.356
N931 X103.557 Y259.1 Z-3.355 I-0.437 J-1.356
N932 X104.431 Y261.813 Z-4.306 I0.437 J1.356
N933 X103.557 Y259.1 Z-5.258 I-0.437 J-1.356
N934 X104.431 Y261.813 Z-6.209 I0.437 J1.356
N935 X103.557 Y259.1 Z-7.161 I-0.437 J-1.356
N936 X104.431 Y261.813 Z-8.113 I0.437 J1.356
N937 X103.557 Y259.1 Z-9.064 I-0.437 J-1.356
N938 X104.431 Y261.813 Z-10.016 I0.437 J1.356
N939 X103.557 Y259.1 Z-10.967 I-0.437 J-1.356
N940 X104.431 Y261.813 Z-11.919 I0.437 J1.356
N941 X103.557 Y259.1 Z-12.87 I-0.437 J-1.356
N942 X104.431 Y261.813 Z-13.822 I0.437 J1.356
N943 X103.557 Y259.1 Z-14.774 I-0.437 J-1.356
N944 X104.431 Y261.813 Z-15.725 I0.437 J1.356
N945 X103.557 Y259.1 Z-16.677 I-0.437 J-1.356
N946 X104.431 Y261.813 Z-17.628 I0.437 J1.356
N947 X103.557 Y259.1 Z-18.58 I-0.437 J-1.356
N948 X105.419 Y260.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
N949 X102.569 I-1.425 F2400
N950 X105.419 I1.425
( Safe G1 --> G0)
N951 G0 Z15 F730
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
N952 Z15 F730
N953 X101.519 Y309.095 F2800
( Safe G1 --> G0)
N954 Z5 F730
( MOVEMENT_PLUNGE)
N955 G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
N956 G3 X106.469 Y311.818 Z0.19 I2.475 J1.361
N957 X101.519 Y309.095 Z-0.12 I-2.475 J-1.361
N958 X106.469 Y311.818 Z-0.43 I2.475 J1.361
N959 X101.519 Y309.095 Z-0.74 I-2.475 J-1.361
N960 X106.819 Y310.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
N961 X101.169 I-2.825 F2400
N962 X106.819 I2.825
( Safe G1 --> G0)
N963 G0 Z15 F730
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
N964 Z15 F730
N965 X104.431 Y311.813 F2800
N966 G1 Z4 F2400
( MOVEMENT_PLUNGE)
N967 Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
N968 G3 X103.557 Y309.1 Z-1.452 I-0.437 J-1.356
N969 X104.431 Y311.813 Z-2.403 I0.437 J1.356
N970 X103.557 Y309.1 Z-3.355 I-0.437 J-1.356
N971 X104.431 Y311.813 Z-4.306 I0.437 J1.356
N972 X103.557 Y309.1 Z-5.258 I-0.437 J-1.356
N973 X104.431 Y311.813 Z-6.209 I0.437 J1.356
N974 X103.557 Y309.1 Z-7.161 I-0.437 J-1.356
N975 X104.431 Y311.813 Z-8.113 I0.437 J1.356
N976 X103.557 Y309.1 Z-9.064 I-0.437 J-1.356
N977 X104.431 Y311.813 Z-10.016 I0.437 J1.356
N978 X103.557 Y309.1 Z-10.967 I-0.437 J-1.356
N979 X104.431 Y311.813 Z-11.919 I0.437 J1.356
N980 X103.557 Y309.1 Z-12.87 I-0.437 J-1.356
N981 X104.431 Y311.813 Z-13.822 I0.437 J1.356
N982 X103.557 Y309.1 Z-14.774 I-0.437 J-1.356
N983 X104.431 Y311.813 Z-15.725 I0.437 J1.356
N984 X103.557 Y309.1 Z-16.677 I-0.437 J-1.356
N985 X104.431 Y311.813 Z-17.628 I0.437 J1.356
N986 X103.557 Y309.1 Z-18.58 I-0.437 J-1.356
N987 X105.419 Y310.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
N988 X102.569 I-1.425 F2400
N989 X105.419 I1.425
( Safe G1 --> G0)
N990 G0 Z15 F730
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
N991 Z15 F730
N992 X101.519 Y359.095 F2800
( Safe G1 --> G0)
N993 Z5 F730
( MOVEMENT_PLUNGE)
N994 G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
N995 G3 X106.469 Y361.818 Z0.19 I2.475 J1.361
N996 X101.519 Y359.095 Z-0.12 I-2.475 J-1.361
N997 X106.469 Y361.818 Z-0.43 I2.475 J1.361
N998 X101.519 Y359.095 Z-0.74 I-2.475 J-1.361
N999 X106.819 Y360.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
N1000 X101.169 I-2.825 F2400
N1001 X106.819 I2.825
( Safe G1 --> G0)
N1002 G0 Z15 F730
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
N1003 Z15 F730
N1004 X104.431 Y361.813 F2800
N1005 G1 Z4 F2400
( MOVEMENT_PLUNGE)
N1006 Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
N1007 G3 X103.557 Y359.1 Z-1.452 I-0.437 J-1.356
N1008 X104.431 Y361.813 Z-2.403 I0.437 J1.356
N1009 X103.557 Y359.1 Z-3.355 I-0.437 J-1.356
N1010 X104.431 Y361.813 Z-4.306 I0.437 J1.356
N1011 X103.557 Y359.1 Z-5.258 I-0.437 J-1.356
N1012 X104.431 Y361.813 Z-6.209 I0.437 J1.356
N1013 X103.557 Y359.1 Z-7.161 I-0.437 J-1.356
N1014 X104.431 Y361.813 Z-8.113 I0.437 J1.356
N1015 X103.557 Y359.1 Z-9.064 I-0.437 J-1.356
N1016 X104.431 Y361.813 Z-10.016 I0.437 J1.356
N1017 X103.557 Y359.1 Z-10.967 I-0.437 J-1.356
N1018 X104.431 Y361.813 Z-11.919 I0.437 J1.356
N1019 X103.557 Y359.1 Z-12.87 I-0.437 J-1.356
N1020 X104.431 Y361.813 Z-13.822 I0.437 J1.356
N1021 X103.557 Y359.1 Z-14.774 I-0.437 J-1.356
N1022 X104.431 Y361.813 Z-15.725 I0.437 J1.356
N1023 X103.557 Y359.1 Z-16.677 I-0.437 J-1.356
N1024 X104.431 Y361.813 Z-17.628 I0.437 J1.356
N1025 X103.557 Y359.1 Z-18.58 I-0.437 J-1.356
N1026 X105.419 Y360.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
N1027 X102.569 I-1.425 F2400
N1028 X105.419 I1.425
( Safe G1 --> G0)
N1029 G0 Z15 F730
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
N1030 Z15 F730
N1031 X101.519 Y409.095 F2800
( Safe G1 --> G0)
N1032 Z5 F730
( MOVEMENT_PLUNGE)
N1033 G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
N1034 G3 X106.469 Y411.818 Z0.19 I2.475 J1.361
N1035 X101.519 Y409.095 Z-0.12 I-2.475 J-1.361
N1036 X106.469 Y411.818 Z-0.43 I2.475 J1.361
N1037 X101.519 Y409.095 Z-0.74 I-2.475 J-1.361
N1038 X106.819 Y410.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
N1039 X101.169 I-2.825 F2400
N1040 X106.819 I2.825
( Safe G1 --> G0)
N1041 G0 Z15 F730
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
N1042 Z15 F730
N1043 X104.431 Y411.813 F2800
N1044 G1 Z4 F2400
( MOVEMENT_PLUNGE)
N1045 Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
N1046 G3 X103.557 Y409.1 Z-1.452 I-0.437 J-1.356
N1047 X104.431 Y411.813 Z-2.403 I0.437 J1.356
N1048 X103.557 Y409.1 Z-3.355 I-0.437 J-1.356
N1049 X104.431 Y411.813 Z-4.306 I0.437 J1.356
N1050 X103.557 Y409.1 Z-5.258 I-0.437 J-1.356
N1051 X104.431 Y411.813 Z-6.209 I0.437 J1.356
N1052 X103.557 Y409.1 Z-7.161 I-0.437 J-1.356
N1053 X104.431 Y411.813 Z-8.113 I0.437 J1.356
N1054 X103.557 Y409.1 Z-9.064 I-0.437 J-1.356
N1055 X104.431 Y411.813 Z-10.016 I0.437 J1.356
N1056 X103.557 Y409.1 Z-10.967 I-0.437 J-1.356
N1057 X104.431 Y411.813 Z-11.919 I0.437 J1.356
N1058 X103.557 Y409.1 Z-12.87 I-0.437 J-1.356
N1059 X104.431 Y411.813 Z-13.822 I0.437 J1.356
N1060 X103.557 Y409.1 Z-14.774 I-0.437 J-1.356
N1061 X104.431 Y411.813 Z-15.725 I0.437 J1.356
N1062 X103.557 Y409.1 Z-16.677 I-0.437 J-1.356
N1063 X104.431 Y411.813 Z-17.628 I0.437 J1.356
N1064 X103.557 Y409.1 Z-18.58 I-0.437 J-1.356
N1065 X105.419 Y410.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
N1066 X102.569 I-1.425 F2400
N1067 X105.419 I1.425
( Safe G1 --> G0)
N1068 G0 Z15 F730
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
N1069 Z15 F730
N1070 X151.519 Y9.095 F2800
( Safe G1 --> G0)
N1071 Z5 F730
( MOVEMENT_PLUNGE)
N1072 G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
N1073 G3 X156.469 Y11.818 Z0.19 I2.475 J1.361
N1074 X151.519 Y9.095 Z-0.12 I-2.475 J-1.361
N1075 X156.469 Y11.818 Z-0.43 I2.475 J1.361
N1076 X151.519 Y9.095 Z-0.74 I-2.475 J-1.361
N1077 X156.819 Y10.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
N1078 X151.169 I-2.825 F2400
N1079 X156.819 I2.825
( Safe G1 --> G0)
N1080 G0 Z15 F730
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
N1081 Z15 F730
N1082 X154.431 Y11.813 F2800
N1083 G1 Z4 F2400
( MOVEMENT_PLUNGE)
N1084 Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
N1085 G3 X153.557 Y9.1 Z-1.452 I-0.437 J-1.356
N1086 X154.431 Y11.813 Z-2.403 I0.437 J1.356
N1087 X153.557 Y9.1 Z-3.355 I-0.437 J-1.356
N1088 X154.431 Y11.813 Z-4.306 I0.437 J1.356
N1089 X153.557 Y9.1 Z-5.258 I-0.437 J-1.356
N1090 X154.431 Y11.813 Z-6.209 I0.437 J1.356
N1091 X153.557 Y9.1 Z-7.161 I-0.437 J-1.356
N1092 X154.431 Y11.813 Z-8.113 I0.437 J1.356
N1093 X153.557 Y9.1 Z-9.064 I-0.437 J-1.356
N1094 X154.431 Y11.813 Z-10.016 I0.437 J1.356
N1095 X153.557 Y9.1 Z-10.967 I-0.437 J-1.356
N1096 X154.431 Y11.813 Z-11.919 I0.437 J1.356
N1097 X153.557 Y9.1 Z-12.87 I-0.437 J-1.356
N1098 X154.431 Y11.813 Z-13.822 I0.437 J1.356
N1099 X153.557 Y9.1 Z-14.774 I-0.437 J-1.356
N1100 X154.431 Y11.813 Z-15.725 I0.437 J1.356
N1101 X153.557 Y9.1 Z-16.677 I-0.437 J-1.356
N1102 X154.431 Y11.813 Z-17.628 I0.437 J1.356
N1103 X153.557 Y9.1 Z-18.58 I-0.437 J-1.356
N1104 X155.419 Y10.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
N1105 X152.569 I-1.425 F2400
N1106 X155.419 I1.425
( Safe G1 --> G0)
N1107 G0 Z15 F730
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
N1108 Z15 F730
N1109 X151.519 Y59.095 F2800
( Safe G1 --> G0)
N1110 Z5 F730
( MOVEMENT_PLUNGE)
N1111 G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
N1112 G3 X156.469 Y61.818 Z0.19 I2.475 J1.361
N1113 X151.519 Y59.095 Z-0.12 I-2.475 J-1.361
N1114 X156.469 Y61.818 Z-0.43 I2.475 J1.361
N1115 X151.519 Y59.095 Z-0.74 I-2.475 J-1.361
N1116 X156.819 Y60.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
N1117 X151.169 I-2.825 F2400
N1118 X156.819 I2.825
( Safe G1 --> G0)
N1119 G0 Z15 F730
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
N1120 Z15 F730
N1121 X154.431 Y61.813 F2800
N1122 G1 Z4 F2400
( MOVEMENT_PLUNGE)
N1123 Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
N1124 G3 X153.557 Y59.1 Z-1.452 I-0.437 J-1.356
N1125 X154.431 Y61.813 Z-2.403 I0.437 J1.356
N1126 X153.557 Y59.1 Z-3.355 I-0.437 J-1.356
N1127 X154.431 Y61.813 Z-4.306 I0.437 J1.356
N1128 X153.557 Y59.1 Z-5.258 I-0.437 J-1.356
N1129 X154.431 Y61.813 Z-6.209 I0.437 J1.356
N1130 X153.557 Y59.1 Z-7.161 I-0.437 J-1.356
N1131 X154.431 Y61.813 Z-8.113 I0.437 J1.356
N1132 X153.557 Y59.1 Z-9.064 I-0.437 J-1.356
N1133 X154.431 Y61.813 Z-10.016 I0.437 J1.356
N1134 X153.557 Y59.1 Z-10.967 I-0.437 J-1.356
N1135 X154.431 Y61.813 Z-11.919 I0.437 J1.356
N1136 X153.557 Y59.1 Z-12.87 I-0.437 J-1.356
N1137 X154.431 Y61.813 Z-13.822 I0.437 J1.356
N1138 X153.557 Y59.1 Z-14.774 I-0.437 J-1.356
N1139 X154.431 Y61.813 Z-15.725 I0.437 J1.356
N1140 X153.557 Y59.1 Z-16.677 I-0.437 J-1.356
N1141 X154.431 Y61.813 Z-17.628 I0.437 J1.356
N1142 X153.557 Y59.1 Z-18.58 I-0.437 J-1.356
N1143 X155.419 Y60.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
N1144 X152.569 I-1.425 F2400
N1145 X155.419 I1.425
( Safe G1 --> G0)
N1146 G0 Z15 F730
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
N1147 Z15 F730
N1148 X151.519 Y109.095 F2800
( Safe G1 --> G0)
N1149 Z5 F730
( MOVEMENT_PLUNGE)
N1150 G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
N1151 G3 X156.469 Y111.818 Z0.19 I2.475 J1.361
N1152 X151.519 Y109.095 Z-0.12 I-2.475 J-1.361
N1153 X156.469 Y111.818 Z-0.43 I2.475 J1.361
N1154 X151.519 Y109.095 Z-0.74 I-2.475 J-1.361
N1155 X156.819 Y110.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
N1156 X151.169 I-2.825 F2400
N1157 X156.819 I2.825
( Safe G1 --> G0)
N1158 G0 Z15 F730
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
N1159 Z15 F730
N1160 X154.431 Y111.813 F2800
N1161 G1 Z4 F2400
( MOVEMENT_PLUNGE)
N1162 Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
N1163 G3 X153.557 Y109.1 Z-1.452 I-0.437 J-1.356
N1164 X154.431 Y111.813 Z-2.403 I0.437 J1.356
N1165 X153.557 Y109.1 Z-3.355 I-0.437 J-1.356
N1166 X154.431 Y111.813 Z-4.306 I0.437 J1.356
N1167 X153.557 Y109.1 Z-5.258 I-0.437 J-1.356
N1168 X154.431 Y111.813 Z-6.209 I0.437 J1.356
N1169 X153.557 Y109.1 Z-7.161 I-0.437 J-1.356
N1170 X154.431 Y111.813 Z-8.113 I0.437 J1.356
N1171 X153.557 Y109.1 Z-9.064 I-0.437 J-1.356
N1172 X154.431 Y111.813 Z-10.016 I0.437 J1.356
N1173 X153.557 Y109.1 Z-10.967 I-0.437 J-1.356
N1174 X154.431 Y111.813 Z-11.919 I0.437 J1.356
N1175 X153.557 Y109.1 Z-12.87 I-0.437 J-1.356
N1176 X154.431 Y111.813 Z-13.822 I0.437 J1.356
N1177 X153.557 Y109.1 Z-14.774 I-0.437 J-1.356
N1178 X154.431 Y111.813 Z-15.725 I0.437 J1.356
N1179 X153.557 Y109.1 Z-16.677 I-0.437 J-1.356
N1180 X154.431 Y111.813 Z-17.628 I0.437 J1.356
N1181 X153.557 Y109.1 Z-18.58 I-0.437 J-1.356
N1182 X155.419 Y110.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
N1183 X152.569 I-1.425 F2400
N1184 X155.419 I1.425
( Safe G1 --> G0)
N1185 G0 Z15 F730
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
N1186 Z15 F730
N1187 X151.519 Y159.095 F2800
( Safe G1 --> G0)
N1188 Z5 F730
( MOVEMENT_PLUNGE)
N1189 G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
N1190 G3 X156.469 Y161.818 Z0.19 I2.475 J1.361
N1191 X151.519 Y159.095 Z-0.12 I-2.475 J-1.361
N1192 X156.469 Y161.818 Z-0.43 I2.475 J1.361
N1193 X151.519 Y159.095 Z-0.74 I-2.475 J-1.361
N1194 X156.819 Y160.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
N1195 X151.169 I-2.825 F2400
N1196 X156.819 I2.825
( Safe G1 --> G0)
N1197 G0 Z15 F730
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
N1198 Z15 F730
N1199 X154.431 Y161.813 F2800
N1200 G1 Z4 F2400
( MOVEMENT_PLUNGE)
N1201 Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
N1202 G3 X153.557 Y159.1 Z-1.452 I-0.437 J-1.356
N1203 X154.431 Y161.813 Z-2.403 I0.437 J1.356
N1204 X153.557 Y159.1 Z-3.355 I-0.437 J-1.356
N1205 X154.431 Y161.813 Z-4.306 I0.437 J1.356
N1206 X153.557 Y159.1 Z-5.258 I-0.437 J-1.356
N1207 X154.431 Y161.813 Z-6.209 I0.437 J1.356
N1208 X153.557 Y159.1 Z-7.161 I-0.437 J-1.356
N1209 X154.431 Y161.813 Z-8.113 I0.437 J1.356
N1210 X153.557 Y159.1 Z-9.064 I-0.437 J-1.356
N1211 X154.431 Y161.813 Z-10.016 I0.437 J1.356
N1212 X153.557 Y159.1 Z-10.967 I-0.437 J-1.356
N1213 X154.431 Y161.813 Z-11.919 I0.437 J1.356
N1214 X153.557 Y159.1 Z-12.87 I-0.437 J-1.356
N1215 X154.431 Y161.813 Z-13.822 I0.437 J1.356
N1216 X153.557 Y159.1 Z-14.774 I-0.437 J-1.356
N1217 X154.431 Y161.813 Z-15.725 I0.437 J1.356
N1218 X153.557 Y159.1 Z-16.677 I-0.437 J-1.356
N1219 X154.431 Y161.813 Z-17.628 I0.437 J1.356
N1220 X153.557 Y159.1 Z-18.58 I-0.437 J-1.356
N1221 X155.419 Y160.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
N1222 X152.569 I-1.425 F2400
N1223 X155.419 I1.425
( Safe G1 --> G0)
N1224 G0 Z15 F730
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
N1225 Z15 F730
N1226 X151.519 Y209.095 F2800
( Safe G1 --> G0)
N1227 Z5 F730
( MOVEMENT_PLUNGE)
N1228 G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
N1229 G3 X156.469 Y211.818 Z0.19 I2.475 J1.361
N1230 X151.519 Y209.095 Z-0.12 I-2.475 J-1.361
N1231 X156.469 Y211.818 Z-0.43 I2.475 J1.361
N1232 X151.519 Y209.095 Z-0.74 I-2.475 J-1.361
N1233 X156.819 Y210.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
N1234 X151.169 I-2.825 F2400
N1235 X156.819 I2.825
( Safe G1 --> G0)
N1236 G0 Z15 F730
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
N1237 Z15 F730
N1238 X154.431 Y211.813 F2800
N1239 G1 Z4 F2400
( MOVEMENT_PLUNGE)
N1240 Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
N1241 G3 X153.557 Y209.1 Z-1.452 I-0.437 J-1.356
N1242 X154.431 Y211.813 Z-2.403 I0.437 J1.356
N1243 X153.557 Y209.1 Z-3.355 I-0.437 J-1.356
N1244 X154.431 Y211.813 Z-4.306 I0.437 J1.356
N1245 X153.557 Y209.1 Z-5.258 I-0.437 J-1.356
N1246 X154.431 Y211.813 Z-6.209 I0.437 J1.356
N1247 X153.557 Y209.1 Z-7.161 I-0.437 J-1.356
N1248 X154.431 Y211.813 Z-8.113 I0.437 J1.356
N1249 X153.557 Y209.1 Z-9.064 I-0.437 J-1.356
N1250 X154.431 Y211.813 Z-10.016 I0.437 J1.356
N1251 X153.557 Y209.1 Z-10.967 I-0.437 J-1.356
N1252 X154.431 Y211.813 Z-11.919 I0.437 J1.356
N1253 X153.557 Y209.1 Z-12.87 I-0.437 J-1.356
N1254 X154.431 Y211.813 Z-13.822 I0.437 J1.356
N1255 X153.557 Y209.1 Z-14.774 I-0.437 J-1.356
N1256 X154.431 Y211.813 Z-15.725 I0.437 J1.356
N1257 X153.557 Y209.1 Z-16.677 I-0.437 J-1.356
N1258 X154.431 Y211.813 Z-17.628 I0.437 J1.356
N1259 X153.557 Y209.1 Z-18.58 I-0.437 J-1.356
N1260 X155.419 Y210.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
N1261 X152.569 I-1.425 F2400
N1262 X155.419 I1.425
( Safe G1 --> G0)
N1263 G0 Z15 F730
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
N1264 Z15 F730
N1265 X151.519 Y259.095 F2800
( Safe G1 --> G0)
N1266 Z5 F730
( MOVEMENT_PLUNGE)
N1267 G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
N1268 G3 X156.469 Y261.818 Z0.19 I2.475 J1.361
N1269 X151.519 Y259.095 Z-0.12 I-2.475 J-1.361
N1270 X156.469 Y261.818 Z-0.43 I2.475 J1.361
N1271 X151.519 Y259.095 Z-0.74 I-2.475 J-1.361
N1272 X156.819 Y260.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
N1273 X151.169 I-2.825 F2400
N1274 X156.819 I2.825
( Safe G1 --> G0)
N1275 G0 Z15 F730
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
N1276 Z15 F730
N1277 X154.431 Y261.813 F2800
N1278 G1 Z4 F2400
( MOVEMENT_PLUNGE)
N1279 Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
N1280 G3 X153.557 Y259.1 Z-1.452 I-0.437 J-1.356
N1281 X154.431 Y261.813 Z-2.403 I0.437 J1.356
N1282 X153.557 Y259.1 Z-3.355 I-0.437 J-1.356
N1283 X154.431 Y261.813 Z-4.306 I0.437 J1.356
N1284 X153.557 Y259.1 Z-5.258 I-0.437 J-1.356
N1285 X154.431 Y261.813 Z-6.209 I0.437 J1.356
N1286 X153.557 Y259.1 Z-7.161 I-0.437 J-1.356
N1287 X154.431 Y261.813 Z-8.113 I0.437 J1.356
N1288 X153.557 Y259.1 Z-9.064 I-0.437 J-1.356
N1289 X154.431 Y261.813 Z-10.016 I0.437 J1.356
N1290 X153.557 Y259.1 Z-10.967 I-0.437 J-1.356
N1291 X154.431 Y261.813 Z-11.919 I0.437 J1.356
N1292 X153.557 Y259.1 Z-12.87 I-0.437 J-1.356
N1293 X154.431 Y261.813 Z-13.822 I0.437 J1.356
N1294 X153.557 Y259.1 Z-14.774 I-0.437 J-1.356
N1295 X154.431 Y261.813 Z-15.725 I0.437 J1.356
N1296 X153.557 Y259.1 Z-16.677 I-0.437 J-1.356
N1297 X154.431 Y261.813 Z-17.628 I0.437 J1.356
N1298 X153.557 Y259.1 Z-18.58 I-0.437 J-1.356
N1299 X155.419 Y260.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
N1300 X152.569 I-1.425 F2400
N1301 X155.419 I1.425
( Safe G1 --> G0)
N1302 G0 Z15 F730
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
N1303 Z15 F730
N1304 X151.519 Y309.095 F2800
( Safe G1 --> G0)
N1305 Z5 F730
( MOVEMENT_PLUNGE)
N1306 G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
N1307 G3 X156.469 Y311.818 Z0.19 I2.475 J1.361
N1308 X151.519 Y309.095 Z-0.12 I-2.475 J-1.361
N1309 X156.469 Y311.818 Z-0.43 I2.475 J1.361
N1310 X151.519 Y309.095 Z-0.74 I-2.475 J-1.361
N1311 X156.819 Y310.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
N1312 X151.169 I-2.825 F2400
N1313 X156.819 I2.825
( Safe G1 --> G0)
N1314 G0 Z15 F730
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
N1315 Z15 F730
N1316 X154.431 Y311.813 F2800
N1317 G1 Z4 F2400
( MOVEMENT_PLUNGE)
N1318 Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
N1319 G3 X153.557 Y309.1 Z-1.452 I-0.437 J-1.356
N1320 X154.431 Y311.813 Z-2.403 I0.437 J1.356
N1321 X153.557 Y309.1 Z-3.355 I-0.437 J-1.356
N1322 X154.431 Y311.813 Z-4.306 I0.437 J1.356
N1323 X153.557 Y309.1 Z-5.258 I-0.437 J-1.356
N1324 X154.431 Y311.813 Z-6.209 I0.437 J1.356
N1325 X153.557 Y309.1 Z-7.161 I-0.437 J-1.356
N1326 X154.431 Y311.813 Z-8.113 I0.437 J1.356
N1327 X153.557 Y309.1 Z-9.064 I-0.437 J-1.356
N1328 X154.431 Y311.813 Z-10.016 I0.437 J1.356
N1329 X153.557 Y309.1 Z-10.967 I-0.437 J-1.356
N1330 X154.431 Y311.813 Z-11.919 I0.437 J1.356
N1331 X153.557 Y309.1 Z-12.87 I-0.437 J-1.356
N1332 X154.431 Y311.813 Z-13.822 I0.437 J1.356
N1333 X153.557 Y309.1 Z-14.774 I-0.437 J-1.356
N1334 X154.431 Y311.813 Z-15.725 I0.437 J1.356
N1335 X153.557 Y309.1 Z-16.677 I-0.437 J-1.356
N1336 X154.431 Y311.813 Z-17.628 I0.437 J1.356
N1337 X153.557 Y309.1 Z-18.58 I-0.437 J-1.356
N1338 X155.419 Y310.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
N1339 X152.569 I-1.425 F2400
N1340 X155.419 I1.425
( Safe G1 --> G0)
N1341 G0 Z15 F730
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
N1342 Z15 F730
N1343 X151.519 Y359.095 F2800
( Safe G1 --> G0)
N1344 Z5 F730
( MOVEMENT_PLUNGE)
N1345 G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
N1346 G3 X156.469 Y361.818 Z0.19 I2.475 J1.361
N1347 X151.519 Y359.095 Z-0.12 I-2.475 J-1.361
N1348 X156.469 Y361.818 Z-0.43 I2.475 J1.361
N1349 X151.519 Y359.095 Z-0.74 I-2.475 J-1.361
N1350 X156.819 Y360.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
N1351 X151.169 I-2.825 F2400
N1352 X156.819 I2.825
( Safe G1 --> G0)
N1353 G0 Z15 F730
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
N1354 Z15 F730
N1355 X154.431 Y361.813 F2800
N1356 G1 Z4 F2400
( MOVEMENT_PLUNGE)
N1357 Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
N1358 G3 X153.557 Y359.1 Z-1.452 I-0.437 J-1.356
N1359 X154.431 Y361.813 Z-2.403 I0.437 J1.356
N1360 X153.557 Y359.1 Z-3.355 I-0.437 J-1.356
N1361 X154.431 Y361.813 Z-4.306 I0.437 J1.356
N1362 X153.557 Y359.1 Z-5.258 I-0.437 J-1.356
N1363 X154.431 Y361.813 Z-6.209 I0.437 J1.356
N1364 X153.557 Y359.1 Z-7.161 I-0.437 J-1.356
N1365 X154.431 Y361.813 Z-8.113 I0.437 J1.356
N1366 X153.557 Y359.1 Z-9.064 I-0.437 J-1.356
N1367 X154.431 Y361.813 Z-10.016 I0.437 J1.356
N1368 X153.557 Y359.1 Z-10.967 I-0.437 J-1.356
N1369 X154.431 Y361.813 Z-11.919 I0.437 J1.356
N1370 X153.557 Y359.1 Z-12.87 I-0.437 J-1.356
N1371 X154.431 Y361.813 Z-13.822 I0.437 J1.356
N1372 X153.557 Y359.1 Z-14.774 I-0.437 J-1.356
N1373 X154.431 Y361.813 Z-15.725 I0.437 J1.356
N1374 X153.557 Y359.1 Z-16.677 I-0.437 J-1.356
N1375 X154.431 Y361.813 Z-17.628 I0.437 J1.356
N1376 X153.557 Y359.1 Z-18.58 I-0.437 J-1.356
N1377 X155.419 Y360.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
N1378 X152.569 I-1.425 F2400
N1379 X155.419 I1.425
( Safe G1 --> G0)
N1380 G0 Z15 F730
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
N1381 Z15 F730
N1382 X151.519 Y409.095 F2800
( Safe G1 --> G0)
N1383 Z5 F730
( MOVEMENT_PLUNGE)
N1384 G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
N1385 G3 X156.469 Y411.818 Z0.19 I2.475 J1.361
N1386 X151.519 Y409.095 Z-0.12 I-2.475 J-1.361
N1387 X156.469 Y411.818 Z-0.43 I2.475 J1.361
N1388 X151.519 Y409.095 Z-0.74 I-2.475 J-1.361
N1389 X156.819 Y410.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
N1390 X151.169 I-2.825 F2400
N1391 X156.819 I2.825
( Safe G1 --> G0)
N1392 G0 Z15 F730
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
N1393 Z15 F730
N1394 X154.431 Y411.813 F2800
N1395 G1 Z4 F2400
( MOVEMENT_PLUNGE)
N1396 Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
N1397 G3 X153.557 Y409.1 Z-1.452 I-0.437 J-1.356
N1398 X154.431 Y411.813 Z-2.403 I0.437 J1.356
N1399 X153.557 Y409.1 Z-3.355 I-0.437 J-1.356
N1400 X154.431 Y411.813 Z-4.306 I0.437 J1.356
N1401 X153.557 Y409.1 Z-5.258 I-0.437 J-1.356
N1402 X154.431 Y411.813 Z-6.209 I0.437 J1.356
N1403 X153.557 Y409.1 Z-7.161 I-0.437 J-1.356
N1404 X154.431 Y411.813 Z-8.113 I0.437 J1.356
N1405 X153.557 Y409.1 Z-9.064 I-0.437 J-1.356
N1406 X154.431 Y411.813 Z-10.016 I0.437 J1.356
N1407 X153.557 Y409.1 Z-10.967 I-0.437 J-1.356
N1408 X154.431 Y411.813 Z-11.919 I0.437 J1.356
N1409 X153.557 Y409.1 Z-12.87 I-0.437 J-1.356
N1410 X154.431 Y411.813 Z-13.822 I0.437 J1.356
N1411 X153.557 Y409.1 Z-14.774 I-0.437 J-1.356
N1412 X154.431 Y411.813 Z-15.725 I0.437 J1.356
N1413 X153.557 Y409.1 Z-16.677 I-0.437 J-1.356
N1414 X154.431 Y411.813 Z-17.628 I0.437 J1.356
N1415 X153.557 Y409.1 Z-18.58 I-0.437 J-1.356
N1416 X155.419 Y410.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
N1417 X152.569 I-1.425 F2400
N1418 X155.419 I1.425
( Safe G1 --> G0)
N1419 G0 Z15 F730
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
N1420 Z15 F730
N1421 X201.519 Y9.095 F2800
( Safe G1 --> G0)
N1422 Z5 F730
( MOVEMENT_PLUNGE)
N1423 G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
N1424 G3 X206.469 Y11.818 Z0.19 I2.475 J1.361
N1425 X201.519 Y9.095 Z-0.12 I-2.475 J-1.361
N1426 X206.469 Y11.818 Z-0.43 I2.475 J1.361
N1427 X201.519 Y9.095 Z-0.74 I-2.475 J-1.361
N1428 X206.819 Y10.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
N1429 X201.169 I-2.825 F2400
N1430 X206.819 I2.825
( Safe G1 --> G0)
N1431 G0 Z15 F730
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
N1432 Z15 F730
N1433 X204.431 Y11.813 F2800
N1434 G1 Z4 F2400
( MOVEMENT_PLUNGE)
N1435 Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
N1436 G3 X203.557 Y9.1 Z-1.452 I-0.437 J-1.356
N1437 X204.431 Y11.813 Z-2.403 I0.437 J1.356
N1438 X203.557 Y9.1 Z-3.355 I-0.437 J-1.356
N1439 X204.431 Y11.813 Z-4.306 I0.437 J1.356
N1440 X203.557 Y9.1 Z-5.258 I-0.437 J-1.356
N1441 X204.431 Y11.813 Z-6.209 I0.437 J1.356
N1442 X203.557 Y9.1 Z-7.161 I-0.437 J-1.356
N1443 X204.431 Y11.813 Z-8.113 I0.437 J1.356
N1444 X203.557 Y9.1 Z-9.064 I-0.437 J-1.356
N1445 X204.431 Y11.813 Z-10.016 I0.437 J1.356
N1446 X203.557 Y9.1 Z-10.967 I-0.437 J-1.356
N1447 X204.431 Y11.813 Z-11.919 I0.437 J1.356
N1448 X203.557 Y9.1 Z-12.87 I-0.437 J-1.356
N1449 X204.431 Y11.813 Z-13.822 I0.437 J1.356
N1450 X203.557 Y9.1 Z-14.774 I-0.437 J-1.356
N1451 X204.431 Y11.813 Z-15.725 I0.437 J1.356
N1452 X203.557 Y9.1 Z-16.677 I-0.437 J-1.356
N1453 X204.431 Y11.813 Z-17.628 I0.437 J1.356
N1454 X203.557 Y9.1 Z-18.58 I-0.437 J-1.356
N1455 X205.419 Y10.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
N1456 X202.569 I-1.425 F2400
N1457 X205.419 I1.425
( Safe G1 --> G0)
N1458 G0 Z15 F730
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
N1459 Z15 F730
N1460 X201.519 Y59.095 F2800
( Safe G1 --> G0)
N1461 Z5 F730
( MOVEMENT_PLUNGE)
N1462 G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
N1463 G3 X206.469 Y61.818 Z0.19 I2.475 J1.361
N1464 X201.519 Y59.095 Z-0.12 I-2.475 J-1.361
N1465 X206.469 Y61.818 Z-0.43 I2.475 J1.361
N1466 X201.519 Y59.095 Z-0.74 I-2.475 J-1.361
N1467 X206.819 Y60.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
N1468 X201.169 I-2.825 F2400
N1469 X206.819 I2.825
( Safe G1 --> G0)
N1470 G0 Z15 F730
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
N1471 Z15 F730
N1472 X204.431 Y61.813 F2800
N1473 G1 Z4 F2400
( MOVEMENT_PLUNGE)
N1474 Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
N1475 G3 X203.557 Y59.1 Z-1.452 I-0.437 J-1.356
N1476 X204.431 Y61.813 Z-2.403 I0.437 J1.356
N1477 X203.557 Y59.1 Z-3.355 I-0.437 J-1.356
N1478 X204.431 Y61.813 Z-4.306 I0.437 J1.356
N1479 X203.557 Y59.1 Z-5.258 I-0.437 J-1.356
N1480 X204.431 Y61.813 Z-6.209 I0.437 J1.356
N1481 X203.557 Y59.1 Z-7.161 I-0.437 J-1.356
N1482 X204.431 Y61.813 Z-8.113 I0.437 J1.356
N1483 X203.557 Y59.1 Z-9.064 I-0.437 J-1.356
N1484 X204.431 Y61.813 Z-10.016 I0.437 J1.356
N1485 X203.557 Y59.1 Z-10.967 I-0.437 J-1.356
N1486 X204.431 Y61.813 Z-11.919 I0.437 J1.356
N1487 X203.557 Y59.1 Z-12.87 I-0.437 J-1.356
N1488 X204.431 Y61.813 Z-13.822 I0.437 J1.356
N1489 X203.557 Y59.1 Z-14.774 I-0.437 J-1.356
N1490 X204.431 Y61.813 Z-15.725 I0.437 J1.356
N1491 X203.557 Y59.1 Z-16.677 I-0.437 J-1.356
N1492 X204.431 Y61.813 Z-17.628 I0.437 J1.356
N1493 X203.557 Y59.1 Z-18.58 I-0.437 J-1.356
N1494 X205.419 Y60.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
N1495 X202.569 I-1.425 F2400
N1496 X205.419 I1.425
( Safe G1 --> G0)
N1497 G0 Z15 F730
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
N1498 Z15 F730
N1499 X201.519 Y109.095 F2800
( Safe G1 --> G0)
N1500 Z5 F730
( MOVEMENT_PLUNGE)
N1501 G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
N1502 G3 X206.469 Y111.818 Z0.19 I2.475 J1.361
N1503 X201.519 Y109.095 Z-0.12 I-2.475 J-1.361
N1504 X206.469 Y111.818 Z-0.43 I2.475 J1.361
N1505 X201.519 Y109.095 Z-0.74 I-2.475 J-1.361
N1506 X206.819 Y110.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
N1507 X201.169 I-2.825 F2400
N1508 X206.819 I2.825
( Safe G1 --> G0)
N1509 G0 Z15 F730
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
N1510 Z15 F730
N1511 X204.431 Y111.813 F2800
N1512 G1 Z4 F2400
( MOVEMENT_PLUNGE)
N1513 Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
N1514 G3 X203.557 Y109.1 Z-1.452 I-0.437 J-1.356
N1515 X204.431 Y111.813 Z-2.403 I0.437 J1.356
N1516 X203.557 Y109.1 Z-3.355 I-0.437 J-1.356
N1517 X204.431 Y111.813 Z-4.306 I0.437 J1.356
N1518 X203.557 Y109.1 Z-5.258 I-0.437 J-1.356
N1519 X204.431 Y111.813 Z-6.209 I0.437 J1.356
N1520 X203.557 Y109.1 Z-7.161 I-0.437 J-1.356
N1521 X204.431 Y111.813 Z-8.113 I0.437 J1.356
N1522 X203.557 Y109.1 Z-9.064 I-0.437 J-1.356
N1523 X204.431 Y111.813 Z-10.016 I0.437 J1.356
N1524 X203.557 Y109.1 Z-10.967 I-0.437 J-1.356
N1525 X204.431 Y111.813 Z-11.919 I0.437 J1.356
N1526 X203.557 Y109.1 Z-12.87 I-0.437 J-1.356
N1527 X204.431 Y111.813 Z-13.822 I0.437 J1.356
N1528 X203.557 Y109.1 Z-14.774 I-0.437 J-1.356
N1529 X204.431 Y111.813 Z-15.725 I0.437 J1.356
N1530 X203.557 Y109.1 Z-16.677 I-0.437 J-1.356
N1531 X204.431 Y111.813 Z-17.628 I0.437 J1.356
N1532 X203.557 Y109.1 Z-18.58 I-0.437 J-1.356
N1533 X205.419 Y110.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
N1534 X202.569 I-1.425 F2400
N1535 X205.419 I1.425
( Safe G1 --> G0)
N1536 G0 Z15 F730
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
N1537 Z15 F730
N1538 X201.519 Y159.095 F2800
( Safe G1 --> G0)
N1539 Z5 F730
( MOVEMENT_PLUNGE)
N1540 G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
N1541 G3 X206.469 Y161.818 Z0.19 I2.475 J1.361
N1542 X201.519 Y159.095 Z-0.12 I-2.475 J-1.361
N1543 X206.469 Y161.818 Z-0.43 I2.475 J1.361
N1544 X201.519 Y159.095 Z-0.74 I-2.475 J-1.361
N1545 X206.819 Y160.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
N1546 X201.169 I-2.825 F2400
N1547 X206.819 I2.825
( Safe G1 --> G0)
N1548 G0 Z15 F730
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
N1549 Z15 F730
N1550 X204.431 Y161.813 F2800
N1551 G1 Z4 F2400
( MOVEMENT_PLUNGE)
N1552 Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
N1553 G3 X203.557 Y159.1 Z-1.452 I-0.437 J-1.356
N1554 X204.431 Y161.813 Z-2.403 I0.437 J1.356
N1555 X203.557 Y159.1 Z-3.355 I-0.437 J-1.356
N1556 X204.431 Y161.813 Z-4.306 I0.437 J1.356
N1557 X203.557 Y159.1 Z-5.258 I-0.437 J-1.356
N1558 X204.431 Y161.813 Z-6.209 I0.437 J1.356
N1559 X203.557 Y159.1 Z-7.161 I-0.437 J-1.356
N1560 X204.431 Y161.813 Z-8.113 I0.437 J1.356
N1561 X203.557 Y159.1 Z-9.064 I-0.437 J-1.356
N1562 X204.431 Y161.813 Z-10.016 I0.437 J1.356
N1563 X203.557 Y159.1 Z-10.967 I-0.437 J-1.356
N1564 X204.431 Y161.813 Z-11.919 I0.437 J1.356
N1565 X203.557 Y159.1 Z-12.87 I-0.437 J-1.356
N1566 X204.431 Y161.813 Z-13.822 I0.437 J1.356
N1567 X203.557 Y159.1 Z-14.774 I-0.437 J-1.356
N1568 X204.431 Y161.813 Z-15.725 I0.437 J1.356
N1569 X203.557 Y159.1 Z-16.677 I-0.437 J-1.356
N1570 X204.431 Y161.813 Z-17.628 I0.437 J1.356
N1571 X203.557 Y159.1 Z-18.58 I-0.437 J-1.356
N1572 X205.419 Y160.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
N1573 X202.569 I-1.425 F2400
N1574 X205.419 I1.425
( Safe G1 --> G0)
N1575 G0 Z15 F730
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
N1576 Z15 F730
N1577 X201.519 Y209.095 F2800
( Safe G1 --> G0)
N1578 Z5 F730
( MOVEMENT_PLUNGE)
N1579 G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
N1580 G3 X206.469 Y211.818 Z0.19 I2.475 J1.361
N1581 X201.519 Y209.095 Z-0.12 I-2.475 J-1.361
N1582 X206.469 Y211.818 Z-0.43 I2.475 J1.361
N1583 X201.519 Y209.095 Z-0.74 I-2.475 J-1.361
N1584 X206.819 Y210.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
N1585 X201.169 I-2.825 F2400
N1586 X206.819 I2.825
( Safe G1 --> G0)
N1587 G0 Z15 F730
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
N1588 Z15 F730
N1589 X204.431 Y211.813 F2800
N1590 G1 Z4 F2400
( MOVEMENT_PLUNGE)
N1591 Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
N1592 G3 X203.557 Y209.1 Z-1.452 I-0.437 J-1.356
N1593 X204.431 Y211.813 Z-2.403 I0.437 J1.356
N1594 X203.557 Y209.1 Z-3.355 I-0.437 J-1.356
N1595 X204.431 Y211.813 Z-4.306 I0.437 J1.356
N1596 X203.557 Y209.1 Z-5.258 I-0.437 J-1.356
N1597 X204.431 Y211.813 Z-6.209 I0.437 J1.356
N1598 X203.557 Y209.1 Z-7.161 I-0.437 J-1.356
N1599 X204.431 Y211.813 Z-8.113 I0.437 J1.356
N1600 X203.557 Y209.1 Z-9.064 I-0.437 J-1.356
N1601 X204.431 Y211.813 Z-10.016 I0.437 J1.356
N1602 X203.557 Y209.1 Z-10.967 I-0.437 J-1.356
N1603 X204.431 Y211.813 Z-11.919 I0.437 J1.356
N1604 X203.557 Y209.1 Z-12.87 I-0.437 J-1.356
N1605 X204.431 Y211.813 Z-13.822 I0.437 J1.356
N1606 X203.557 Y209.1 Z-14.774 I-0.437 J-1.356
N1607 X204.431 Y211.813 Z-15.725 I0.437 J1.356
N1608 X203.557 Y209.1 Z-16.677 I-0.437 J-1.356
N1609 X204.431 Y211.813 Z-17.628 I0.437 J1.356
N1610 X203.557 Y209.1 Z-18.58 I-0.437 J-1.356
N1611 X205.419 Y210.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
N1612 X202.569 I-1.425 F2400
N1613 X205.419 I1.425
( Safe G1 --> G0)
N1614 G0 Z15 F730
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
N1615 Z15 F730
N1616 X201.519 Y259.095 F2800
( Safe G1 --> G0)
N1617 Z5 F730
( MOVEMENT_PLUNGE)
N1618 G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
N1619 G3 X206.469 Y261.818 Z0.19 I2.475 J1.361
N1620 X201.519 Y259.095 Z-0.12 I-2.475 J-1.361
N1621 X206.469 Y261.818 Z-0.43 I2.475 J1.361
N1622 X201.519 Y259.095 Z-0.74 I-2.475 J-1.361
N1623 X206.819 Y260.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
N1624 X201.169 I-2.825 F2400
N1625 X206.819 I2.825
( Safe G1 --> G0)
N1626 G0 Z15 F730
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
N1627 Z15 F730
N1628 X204.431 Y261.813 F2800
N1629 G1 Z4 F2400
( MOVEMENT_PLUNGE)
N1630 Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
N1631 G3 X203.557 Y259.1 Z-1.452 I-0.437 J-1.356
N1632 X204.431 Y261.813 Z-2.403 I0.437 J1.356
N1633 X203.557 Y259.1 Z-3.355 I-0.437 J-1.356
N1634 X204.431 Y261.813 Z-4.306 I0.437 J1.356
N1635 X203.557 Y259.1 Z-5.258 I-0.437 J-1.356
N1636 X204.431 Y261.813 Z-6.209 I0.437 J1.356
N1637 X203.557 Y259.1 Z-7.161 I-0.437 J-1.356
N1638 X204.431 Y261.813 Z-8.113 I0.437 J1.356
N1639 X203.557 Y259.1 Z-9.064 I-0.437 J-1.356
N1640 X204.431 Y261.813 Z-10.016 I0.437 J1.356
N1641 X203.557 Y259.1 Z-10.967 I-0.437 J-1.356
N1642 X204.431 Y261.813 Z-11.919 I0.437 J1.356
N1643 X203.557 Y259.1 Z-12.87 I-0.437 J-1.356
N1644 X204.431 Y261.813 Z-13.822 I0.437 J1.356
N1645 X203.557 Y259.1 Z-14.774 I-0.437 J-1.356
N1646 X204.431 Y261.813 Z-15.725 I0.437 J1.356
N1647 X203.557 Y259.1 Z-16.677 I-0.437 J-1.356
N1648 X204.431 Y261.813 Z-17.628 I0.437 J1.356
N1649 X203.557 Y259.1 Z-18.58 I-0.437 J-1.356
N1650 X205.419 Y260.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
N1651 X202.569 I-1.425 F2400
N1652 X205.419 I1.425
( Safe G1 --> G0)
N1653 G0 Z15 F730
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
N1654 Z15 F730
N1655 X201.519 Y309.095 F2800
( Safe G1 --> G0)
N1656 Z5 F730
( MOVEMENT_PLUNGE)
N1657 G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
N1658 G3 X206.469 Y311.818 Z0.19 I2.475 J1.361
N1659 X201.519 Y309.095 Z-0.12 I-2.475 J-1.361
N1660 X206.469 Y311.818 Z-0.43 I2.475 J1.361
N1661 X201.519 Y309.095 Z-0.74 I-2.475 J-1.361
N1662 X206.819 Y310.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
N1663 X201.169 I-2.825 F2400
N1664 X206.819 I2.825
( Safe G1 --> G0)
N1665 G0 Z15 F730
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
N1666 Z15 F730
N1667 X204.431 Y311.813 F2800
N1668 G1 Z4 F2400
( MOVEMENT_PLUNGE)
N1669 Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
N1670 G3 X203.557 Y309.1 Z-1.452 I-0.437 J-1.356
N1671 X204.431 Y311.813 Z-2.403 I0.437 J1.356
N1672 X203.557 Y309.1 Z-3.355 I-0.437 J-1.356
N1673 X204.431 Y311.813 Z-4.306 I0.437 J1.356
N1674 X203.557 Y309.1 Z-5.258 I-0.437 J-1.356
N1675 X204.431 Y311.813 Z-6.209 I0.437 J1.356
N1676 X203.557 Y309.1 Z-7.161 I-0.437 J-1.356
N1677 X204.431 Y311.813 Z-8.113 I0.437 J1.356
N1678 X203.557 Y309.1 Z-9.064 I-0.437 J-1.356
N1679 X204.431 Y311.813 Z-10.016 I0.437 J1.356
N1680 X203.557 Y309.1 Z-10.967 I-0.437 J-1.356
N1681 X204.431 Y311.813 Z-11.919 I0.437 J1.356
N1682 X203.557 Y309.1 Z-12.87 I-0.437 J-1.356
N1683 X204.431 Y311.813 Z-13.822 I0.437 J1.356
N1684 X203.557 Y309.1 Z-14.774 I-0.437 J-1.356
N1685 X204.431 Y311.813 Z-15.725 I0.437 J1.356
N1686 X203.557 Y309.1 Z-16.677 I-0.437 J-1.356
N1687 X204.431 Y311.813 Z-17.628 I0.437 J1.356
N1688 X203.557 Y309.1 Z-18.58 I-0.437 J-1.356
N1689 X205.419 Y310.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
N1690 X202.569 I-1.425 F2400
N1691 X205.419 I1.425
( Safe G1 --> G0)
N1692 G0 Z15 F730
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
N1693 Z15 F730
N1694 X201.519 Y359.095 F2800
( Safe G1 --> G0)
N1695 Z5 F730
( MOVEMENT_PLUNGE)
N1696 G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
N1697 G3 X206.469 Y361.818 Z0.19 I2.475 J1.361
N1698 X201.519 Y359.095 Z-0.12 I-2.475 J-1.361
N1699 X206.469 Y361.818 Z-0.43 I2.475 J1.361
N1700 X201.519 Y359.095 Z-0.74 I-2.475 J-1.361
N1701 X206.819 Y360.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
N1702 X201.169 I-2.825 F2400
N1703 X206.819 I2.825
( Safe G1 --> G0)
N1704 G0 Z15 F730
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
N1705 Z15 F730
N1706 X204.431 Y361.813 F2800
N1707 G1 Z4 F2400
( MOVEMENT_PLUNGE)
N1708 Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
N1709 G3 X203.557 Y359.1 Z-1.452 I-0.437 J-1.356
N1710 X204.431 Y361.813 Z-2.403 I0.437 J1.356
N1711 X203.557 Y359.1 Z-3.355 I-0.437 J-1.356
N1712 X204.431 Y361.813 Z-4.306 I0.437 J1.356
N1713 X203.557 Y359.1 Z-5.258 I-0.437 J-1.356
N1714 X204.431 Y361.813 Z-6.209 I0.437 J1.356
N1715 X203.557 Y359.1 Z-7.161 I-0.437 J-1.356
N1716 X204.431 Y361.813 Z-8.113 I0.437 J1.356
N1717 X203.557 Y359.1 Z-9.064 I-0.437 J-1.356
N1718 X204.431 Y361.813 Z-10.016 I0.437 J1.356
N1719 X203.557 Y359.1 Z-10.967 I-0.437 J-1.356
N1720 X204.431 Y361.813 Z-11.919 I0.437 J1.356
N1721 X203.557 Y359.1 Z-12.87 I-0.437 J-1.356
N1722 X204.431 Y361.813 Z-13.822 I0.437 J1.356
N1723 X203.557 Y359.1 Z-14.774 I-0.437 J-1.356
N1724 X204.431 Y361.813 Z-15.725 I0.437 J1.356
N1725 X203.557 Y359.1 Z-16.677 I-0.437 J-1.356
N1726 X204.431 Y361.813 Z-17.628 I0.437 J1.356
N1727 X203.557 Y359.1 Z-18.58 I-0.437 J-1.356
N1728 X205.419 Y360.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
N1729 X202.569 I-1.425 F2400
N1730 X205.419 I1.425
( Safe G1 --> G0)
N1731 G0 Z15 F730
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
N1732 Z15 F730
N1733 X201.519 Y409.095 F2800
( Safe G1 --> G0)
N1734 Z5 F730
( MOVEMENT_PLUNGE)
N1735 G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
N1736 G3 X206.469 Y411.818 Z0.19 I2.475 J1.361
N1737 X201.519 Y409.095 Z-0.12 I-2.475 J-1.361
N1738 X206.469 Y411.818 Z-0.43 I2.475 J1.361
N1739 X201.519 Y409.095 Z-0.74 I-2.475 J-1.361
N1740 X206.819 Y410.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
N1741 X201.169 I-2.825 F2400
N1742 X206.819 I2.825
( Safe G1 --> G0)
N1743 G0 Z15 F730
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
N1744 Z15 F730
N1745 X204.431 Y411.813 F2800
N1746 G1 Z4 F2400
( MOVEMENT_PLUNGE)
N1747 Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
N1748 G3 X203.557 Y409.1 Z-1.452 I-0.437 J-1.356
N1749 X204.431 Y411.813 Z-2.403 I0.437 J1.356
N1750 X203.557 Y409.1 Z-3.355 I-0.437 J-1.356
N1751 X204.431 Y411.813 Z-4.306 I0.437 J1.356
N1752 X203.557 Y409.1 Z-5.258 I-0.437 J-1.356
N1753 X204.431 Y411.813 Z-6.209 I0.437 J1.356
N1754 X203.557 Y409.1 Z-7.161 I-0.437 J-1.356
N1755 X204.431 Y411.813 Z-8.113 I0.437 J1.356
N1756 X203.557 Y409.1 Z-9.064 I-0.437 J-1.356
N1757 X204.431 Y411.813 Z-10.016 I0.437 J1.356
N1758 X203.557 Y409.1 Z-10.967 I-0.437 J-1.356
N1759 X204.431 Y411.813 Z-11.919 I0.437 J1.356
N1760 X203.557 Y409.1 Z-12.87 I-0.437 J-1.356
N1761 X204.431 Y411.813 Z-13.822 I0.437 J1.356
N1762 X203.557 Y409.1 Z-14.774 I-0.437 J-1.356
N1763 X204.431 Y411.813 Z-15.725 I0.437 J1.356
N1764 X203.557 Y409.1 Z-16.677 I-0.437 J-1.356
N1765 X204.431 Y411.813 Z-17.628 I0.437 J1.356
N1766 X203.557 Y409.1 Z-18.58 I-0.437 J-1.356
N1767 X205.419 Y410.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
N1768 X202.569 I-1.425 F2400
N1769 X205.419 I1.425
( Safe G1 --> G0)
N1770 G0 Z15 F730
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
N1771 Z15 F730
N1772 X251.519 Y9.095 F2800
( Safe G1 --> G0)
N1773 Z5 F730
( MOVEMENT_PLUNGE)
N1774 G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
N1775 G3 X256.469 Y11.818 Z0.19 I2.475 J1.361
N1776 X251.519 Y9.095 Z-0.12 I-2.475 J-1.361
N1777 X256.469 Y11.818 Z-0.43 I2.475 J1.361
N1778 X251.519 Y9.095 Z-0.74 I-2.475 J-1.361
N1779 X256.819 Y10.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
N1780 X251.169 I-2.825 F2400
N1781 X256.819 I2.825
( Safe G1 --> G0)
N1782 G0 Z15 F730
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
N1783 Z15 F730
N1784 X254.431 Y11.813 F2800
N1785 G1 Z4 F2400
( MOVEMENT_PLUNGE)
N1786 Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
N1787 G3 X253.557 Y9.1 Z-1.452 I-0.437 J-1.356
N1788 X254.431 Y11.813 Z-2.403 I0.437 J1.356
N1789 X253.557 Y9.1 Z-3.355 I-0.437 J-1.356
N1790 X254.431 Y11.813 Z-4.306 I0.437 J1.356
N1791 X253.557 Y9.1 Z-5.258 I-0.437 J-1.356
N1792 X254.431 Y11.813 Z-6.209 I0.437 J1.356
N1793 X253.557 Y9.1 Z-7.161 I-0.437 J-1.356
N1794 X254.431 Y11.813 Z-8.113 I0.437 J1.356
N1795 X253.557 Y9.1 Z-9.064 I-0.437 J-1.356
N1796 X254.431 Y11.813 Z-10.016 I0.437 J1.356
N1797 X253.557 Y9.1 Z-10.967 I-0.437 J-1.356
N1798 X254.431 Y11.813 Z-11.919 I0.437 J1.356
N1799 X253.557 Y9.1 Z-12.87 I-0.437 J-1.356
N1800 X254.431 Y11.813 Z-13.822 I0.437 J1.356
N1801 X253.557 Y9.1 Z-14.774 I-0.437 J-1.356
N1802 X254.431 Y11.813 Z-15.725 I0.437 J1.356
N1803 X253.557 Y9.1 Z-16.677 I-0.437 J-1.356
N1804 X254.431 Y11.813 Z-17.628 I0.437 J1.356
N1805 X253.557 Y9.1 Z-18.58 I-0.437 J-1.356
N1806 X255.419 Y10.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
N1807 X252.569 I-1.425 F2400
N1808 X255.419 I1.425
( Safe G1 --> G0)
N1809 G0 Z15 F730
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
N1810 Z15 F730
N1811 X251.519 Y59.095 F2800
( Safe G1 --> G0)
N1812 Z5 F730
( MOVEMENT_PLUNGE)
N1813 G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
N1814 G3 X256.469 Y61.818 Z0.19 I2.475 J1.361
N1815 X251.519 Y59.095 Z-0.12 I-2.475 J-1.361
N1816 X256.469 Y61.818 Z-0.43 I2.475 J1.361
N1817 X251.519 Y59.095 Z-0.74 I-2.475 J-1.361
N1818 X256.819 Y60.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
N1819 X251.169 I-2.825 F2400
N1820 X256.819 I2.825
( Safe G1 --> G0)
N1821 G0 Z15 F730
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
N1822 Z15 F730
N1823 X254.431 Y61.813 F2800
N1824 G1 Z4 F2400
( MOVEMENT_PLUNGE)
N1825 Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
N1826 G3 X253.557 Y59.1 Z-1.452 I-0.437 J-1.356
N1827 X254.431 Y61.813 Z-2.403 I0.437 J1.356
N1828 X253.557 Y59.1 Z-3.355 I-0.437 J-1.356
N1829 X254.431 Y61.813 Z-4.306 I0.437 J1.356
N1830 X253.557 Y59.1 Z-5.258 I-0.437 J-1.356
N1831 X254.431 Y61.813 Z-6.209 I0.437 J1.356
N1832 X253.557 Y59.1 Z-7.161 I-0.437 J-1.356
N1833 X254.431 Y61.813 Z-8.113 I0.437 J1.356
N1834 X253.557 Y59.1 Z-9.064 I-0.437 J-1.356
N1835 X254.431 Y61.813 Z-10.016 I0.437 J1.356
N1836 X253.557 Y59.1 Z-10.967 I-0.437 J-1.356
N1837 X254.431 Y61.813 Z-11.919 I0.437 J1.356
N1838 X253.557 Y59.1 Z-12.87 I-0.437 J-1.356
N1839 X254.431 Y61.813 Z-13.822 I0.437 J1.356
N1840 X253.557 Y59.1 Z-14.774 I-0.437 J-1.356
N1841 X254.431 Y61.813 Z-15.725 I0.437 J1.356
N1842 X253.557 Y59.1 Z-16.677 I-0.437 J-1.356
N1843 X254.431 Y61.813 Z-17.628 I0.437 J1.356
N1844 X253.557 Y59.1 Z-18.58 I-0.437 J-1.356
N1845 X255.419 Y60.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
N1846 X252.569 I-1.425 F2400
N1847 X255.419 I1.425
( Safe G1 --> G0)
N1848 G0 Z15 F730
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
N1849 Z15 F730
N1850 X251.519 Y109.095 F2800
( Safe G1 --> G0)
N1851 Z5 F730
( MOVEMENT_PLUNGE)
N1852 G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
N1853 G3 X256.469 Y111.818 Z0.19 I2.475 J1.361
N1854 X251.519 Y109.095 Z-0.12 I-2.475 J-1.361
N1855 X256.469 Y111.818 Z-0.43 I2.475 J1.361
N1856 X251.519 Y109.095 Z-0.74 I-2.475 J-1.361
N1857 X256.819 Y110.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
N1858 X251.169 I-2.825 F2400
N1859 X256.819 I2.825
( Safe G1 --> G0)
N1860 G0 Z15 F730
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
N1861 Z15 F730
N1862 X254.431 Y111.813 F2800
N1863 G1 Z4 F2400
( MOVEMENT_PLUNGE)
N1864 Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
N1865 G3 X253.557 Y109.1 Z-1.452 I-0.437 J-1.356
N1866 X254.431 Y111.813 Z-2.403 I0.437 J1.356
N1867 X253.557 Y109.1 Z-3.355 I-0.437 J-1.356
N1868 X254.431 Y111.813 Z-4.306 I0.437 J1.356
N1869 X253.557 Y109.1 Z-5.258 I-0.437 J-1.356
N1870 X254.431 Y111.813 Z-6.209 I0.437 J1.356
N1871 X253.557 Y109.1 Z-7.161 I-0.437 J-1.356
N1872 X254.431 Y111.813 Z-8.113 I0.437 J1.356
N1873 X253.557 Y109.1 Z-9.064 I-0.437 J-1.356
N1874 X254.431 Y111.813 Z-10.016 I0.437 J1.356
N1875 X253.557 Y109.1 Z-10.967 I-0.437 J-1.356
N1876 X254.431 Y111.813 Z-11.919 I0.437 J1.356
N1877 X253.557 Y109.1 Z-12.87 I-0.437 J-1.356
N1878 X254.431 Y111.813 Z-13.822 I0.437 J1.356
N1879 X253.557 Y109.1 Z-14.774 I-0.437 J-1.356
N1880 X254.431 Y111.813 Z-15.725 I0.437 J1.356
N1881 X253.557 Y109.1 Z-16.677 I-0.437 J-1.356
N1882 X254.431 Y111.813 Z-17.628 I0.437 J1.356
N1883 X253.557 Y109.1 Z-18.58 I-0.437 J-1.356
N1884 X255.419 Y110.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
N1885 X252.569 I-1.425 F2400
N1886 X255.419 I1.425
( Safe G1 --> G0)
N1887 G0 Z15 F730
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
N1888 Z15 F730
N1889 X251.519 Y159.095 F2800
( Safe G1 --> G0)
N1890 Z5 F730
( MOVEMENT_PLUNGE)
N1891 G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
N1892 G3 X256.469 Y161.818 Z0.19 I2.475 J1.361
N1893 X251.519 Y159.095 Z-0.12 I-2.475 J-1.361
N1894 X256.469 Y161.818 Z-0.43 I2.475 J1.361
N1895 X251.519 Y159.095 Z-0.74 I-2.475 J-1.361
N1896 X256.819 Y160.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
N1897 X251.169 I-2.825 F2400
N1898 X256.819 I2.825
( Safe G1 --> G0)
N1899 G0 Z15 F730
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
N1900 Z15 F730
N1901 X254.431 Y161.813 F2800
N1902 G1 Z4 F2400
( MOVEMENT_PLUNGE)
N1903 Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
N1904 G3 X253.557 Y159.1 Z-1.452 I-0.437 J-1.356
N1905 X254.431 Y161.813 Z-2.403 I0.437 J1.356
N1906 X253.557 Y159.1 Z-3.355 I-0.437 J-1.356
N1907 X254.431 Y161.813 Z-4.306 I0.437 J1.356
N1908 X253.557 Y159.1 Z-5.258 I-0.437 J-1.356
N1909 X254.431 Y161.813 Z-6.209 I0.437 J1.356
N1910 X253.557 Y159.1 Z-7.161 I-0.437 J-1.356
N1911 X254.431 Y161.813 Z-8.113 I0.437 J1.356
N1912 X253.557 Y159.1 Z-9.064 I-0.437 J-1.356
N1913 X254.431 Y161.813 Z-10.016 I0.437 J1.356
N1914 X253.557 Y159.1 Z-10.967 I-0.437 J-1.356
N1915 X254.431 Y161.813 Z-11.919 I0.437 J1.356
N1916 X253.557 Y159.1 Z-12.87 I-0.437 J-1.356
N1917 X254.431 Y161.813 Z-13.822 I0.437 J1.356
N1918 X253.557 Y159.1 Z-14.774 I-0.437 J-1.356
N1919 X254.431 Y161.813 Z-15.725 I0.437 J1.356
N1920 X253.557 Y159.1 Z-16.677 I-0.437 J-1.356
N1921 X254.431 Y161.813 Z-17.628 I0.437 J1.356
N1922 X253.557 Y159.1 Z-18.58 I-0.437 J-1.356
N1923 X255.419 Y160.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
N1924 X252.569 I-1.425 F2400
N1925 X255.419 I1.425
( Safe G1 --> G0)
N1926 G0 Z15 F730
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
N1927 Z15 F730
N1928 X251.519 Y209.095 F2800
( Safe G1 --> G0)
N1929 Z5 F730
( MOVEMENT_PLUNGE)
N1930 G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
N1931 G3 X256.469 Y211.818 Z0.19 I2.475 J1.361
N1932 X251.519 Y209.095 Z-0.12 I-2.475 J-1.361
N1933 X256.469 Y211.818 Z-0.43 I2.475 J1.361
N1934 X251.519 Y209.095 Z-0.74 I-2.475 J-1.361
N1935 X256.819 Y210.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
N1936 X251.169 I-2.825 F2400
N1937 X256.819 I2.825
( Safe G1 --> G0)
N1938 G0 Z15 F730
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
N1939 Z15 F730
N1940 X254.431 Y211.813 F2800
N1941 G1 Z4 F2400
( MOVEMENT_PLUNGE)
N1942 Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
N1943 G3 X253.557 Y209.1 Z-1.452 I-0.437 J-1.356
N1944 X254.431 Y211.813 Z-2.403 I0.437 J1.356
N1945 X253.557 Y209.1 Z-3.355 I-0.437 J-1.356
N1946 X254.431 Y211.813 Z-4.306 I0.437 J1.356
N1947 X253.557 Y209.1 Z-5.258 I-0.437 J-1.356
N1948 X254.431 Y211.813 Z-6.209 I0.437 J1.356
N1949 X253.557 Y209.1 Z-7.161 I-0.437 J-1.356
N1950 X254.431 Y211.813 Z-8.113 I0.437 J1.356
N1951 X253.557 Y209.1 Z-9.064 I-0.437 J-1.356
N1952 X254.431 Y211.813 Z-10.016 I0.437 J1.356
N1953 X253.557 Y209.1 Z-10.967 I-0.437 J-1.356
N1954 X254.431 Y211.813 Z-11.919 I0.437 J1.356
N1955 X253.557 Y209.1 Z-12.87 I-0.437 J-1.356
N1956 X254.431 Y211.813 Z-13.822 I0.437 J1.356
N1957 X253.557 Y209.1 Z-14.774 I-0.437 J-1.356
N1958 X254.431 Y211.813 Z-15.725 I0.437 J1.356
N1959 X253.557 Y209.1 Z-16.677 I-0.437 J-1.356
N1960 X254.431 Y211.813 Z-17.628 I0.437 J1.356
N1961 X253.557 Y209.1 Z-18.58 I-0.437 J-1.356
N1962 X255.419 Y210.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
N1963 X252.569 I-1.425 F2400
N1964 X255.419 I1.425
( Safe G1 --> G0)
N1965 G0 Z15 F730
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
N1966 Z15 F730
N1967 X251.519 Y259.095 F2800
( Safe G1 --> G0)
N1968 Z5 F730
( MOVEMENT_PLUNGE)
N1969 G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
N1970 G3 X256.469 Y261.818 Z0.19 I2.475 J1.361
N1971 X251.519 Y259.095 Z-0.12 I-2.475 J-1.361
N1972 X256.469 Y261.818 Z-0.43 I2.475 J1.361
N1973 X251.519 Y259.095 Z-0.74 I-2.475 J-1.361
N1974 X256.819 Y260.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
N1975 X251.169 I-2.825 F2400
N1976 X256.819 I2.825
( Safe G1 --> G0)
N1977 G0 Z15 F730
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
N1978 Z15 F730
N1979 X254.431 Y261.813 F2800
N1980 G1 Z4 F2400
( MOVEMENT_PLUNGE)
N1981 Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
N1982 G3 X253.557 Y259.1 Z-1.452 I-0.437 J-1.356
N1983 X254.431 Y261.813 Z-2.403 I0.437 J1.356
N1984 X253.557 Y259.1 Z-3.355 I-0.437 J-1.356
N1985 X254.431 Y261.813 Z-4.306 I0.437 J1.356
N1986 X253.557 Y259.1 Z-5.258 I-0.437 J-1.356
N1987 X254.431 Y261.813 Z-6.209 I0.437 J1.356
N1988 X253.557 Y259.1 Z-7.161 I-0.437 J-1.356
N1989 X254.431 Y261.813 Z-8.113 I0.437 J1.356
N1990 X253.557 Y259.1 Z-9.064 I-0.437 J-1.356
N1991 X254.431 Y261.813 Z-10.016 I0.437 J1.356
N1992 X253.557 Y259.1 Z-10.967 I-0.437 J-1.356
N1993 X254.431 Y261.813 Z-11.919 I0.437 J1.356
N1994 X253.557 Y259.1 Z-12.87 I-0.437 J-1.356
N1995 X254.431 Y261.813 Z-13.822 I0.437 J1.356
N1996 X253.557 Y259.1 Z-14.774 I-0.437 J-1.356
N1997 X254.431 Y261.813 Z-15.725 I0.437 J1.356
N1998 X253.557 Y259.1 Z-16.677 I-0.437 J-1.356
N1999 X254.431 Y261.813 Z-17.628 I0.437 J1.356
N2000 X253.557 Y259.1 Z-18.58 I-0.437 J-1.356
N2001 X255.419 Y260.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
N2002 X252.569 I-1.425 F2400
N2003 X255.419 I1.425
( Safe G1 --> G0)
N2004 G0 Z15 F730
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
N2005 Z15 F730
N2006 X251.519 Y309.095 F2800
( Safe G1 --> G0)
N2007 Z5 F730
( MOVEMENT_PLUNGE)
N2008 G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
N2009 G3 X256.469 Y311.818 Z0.19 I2.475 J1.361
N2010 X251.519 Y309.095 Z-0.12 I-2.475 J-1.361
N2011 X256.469 Y311.818 Z-0.43 I2.475 J1.361
N2012 X251.519 Y309.095 Z-0.74 I-2.475 J-1.361
N2013 X256.819 Y310.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
N2014 X251.169 I-2.825 F2400
N2015 X256.819 I2.825
( Safe G1 --> G0)
N2016 G0 Z15 F730
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
N2017 Z15 F730
N2018 X254.431 Y311.813 F2800
N2019 G1 Z4 F2400
( MOVEMENT_PLUNGE)
N2020 Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
N2021 G3 X253.557 Y309.1 Z-1.452 I-0.437 J-1.356
N2022 X254.431 Y311.813 Z-2.403 I0.437 J1.356
N2023 X253.557 Y309.1 Z-3.355 I-0.437 J-1.356
N2024 X254.431 Y311.813 Z-4.306 I0.437 J1.356
N2025 X253.557 Y309.1 Z-5.258 I-0.437 J-1.356
N2026 X254.431 Y311.813 Z-6.209 I0.437 J1.356
N2027 X253.557 Y309.1 Z-7.161 I-0.437 J-1.356
N2028 X254.431 Y311.813 Z-8.113 I0.437 J1.356
N2029 X253.557 Y309.1 Z-9.064 I-0.437 J-1.356
N2030 X254.431 Y311.813 Z-10.016 I0.437 J1.356
N2031 X253.557 Y309.1 Z-10.967 I-0.437 J-1.356
N2032 X254.431 Y311.813 Z-11.919 I0.437 J1.356
N2033 X253.557 Y309.1 Z-12.87 I-0.437 J-1.356
N2034 X254.431 Y311.813 Z-13.822 I0.437 J1.356
N2035 X253.557 Y309.1 Z-14.774 I-0.437 J-1.356
N2036 X254.431 Y311.813 Z-15.725 I0.437 J1.356
N2037 X253.557 Y309.1 Z-16.677 I-0.437 J-1.356
N2038 X254.431 Y311.813 Z-17.628 I0.437 J1.356
N2039 X253.557 Y309.1 Z-18.58 I-0.437 J-1.356
N2040 X255.419 Y310.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
N2041 X252.569 I-1.425 F2400
N2042 X255.419 I1.425
( Safe G1 --> G0)
N2043 G0 Z15 F730
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
N2044 Z15 F730
N2045 X251.519 Y359.095 F2800
( Safe G1 --> G0)
N2046 Z5 F730
( MOVEMENT_PLUNGE)
N2047 G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
N2048 G3 X256.469 Y361.818 Z0.19 I2.475 J1.361
N2049 X251.519 Y359.095 Z-0.12 I-2.475 J-1.361
N2050 X256.469 Y361.818 Z-0.43 I2.475 J1.361
N2051 X251.519 Y359.095 Z-0.74 I-2.475 J-1.361
N2052 X256.819 Y360.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
N2053 X251.169 I-2.825 F2400
N2054 X256.819 I2.825
( Safe G1 --> G0)
N2055 G0 Z15 F730
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
N2056 Z15 F730
N2057 X254.431 Y361.813 F2800
N2058 G1 Z4 F2400
( MOVEMENT_PLUNGE)
N2059 Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
N2060 G3 X253.557 Y359.1 Z-1.452 I-0.437 J-1.356
N2061 X254.431 Y361.813 Z-2.403 I0.437 J1.356
N2062 X253.557 Y359.1 Z-3.355 I-0.437 J-1.356
N2063 X254.431 Y361.813 Z-4.306 I0.437 J1.356
N2064 X253.557 Y359.1 Z-5.258 I-0.437 J-1.356
N2065 X254.431 Y361.813 Z-6.209 I0.437 J1.356
N2066 X253.557 Y359.1 Z-7.161 I-0.437 J-1.356
N2067 X254.431 Y361.813 Z-8.113 I0.437 J1.356
N2068 X253.557 Y359.1 Z-9.064 I-0.437 J-1.356
N2069 X254.431 Y361.813 Z-10.016 I0.437 J1.356
N2070 X253.557 Y359.1 Z-10.967 I-0.437 J-1.356
N2071 X254.431 Y361.813 Z-11.919 I0.437 J1.356
N2072 X253.557 Y359.1 Z-12.87 I-0.437 J-1.356
N2073 X254.431 Y361.813 Z-13.822 I0.437 J1.356
N2074 X253.557 Y359.1 Z-14.774 I-0.437 J-1.356
N2075 X254.431 Y361.813 Z-15.725 I0.437 J1.356
N2076 X253.557 Y359.1 Z-16.677 I-0.437 J-1.356
N2077 X254.431 Y361.813 Z-17.628 I0.437 J1.356
N2078 X253.557 Y359.1 Z-18.58 I-0.437 J-1.356
N2079 X255.419 Y360.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
N2080 X252.569 I-1.425 F2400
N2081 X255.419 I1.425
( Safe G1 --> G0)
N2082 G0 Z15 F730
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
N2083 Z15 F730
N2084 X251.519 Y409.095 F2800
( Safe G1 --> G0)
N2085 Z5 F730
( MOVEMENT_PLUNGE)
N2086 G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
N2087 G3 X256.469 Y411.818 Z0.19 I2.475 J1.361
N2088 X251.519 Y409.095 Z-0.12 I-2.475 J-1.361
N2089 X256.469 Y411.818 Z-0.43 I2.475 J1.361
N2090 X251.519 Y409.095 Z-0.74 I-2.475 J-1.361
N2091 X256.819 Y410.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
N2092 X251.169 I-2.825 F2400
N2093 X256.819 I2.825
( Safe G1 --> G0)
N2094 G0 Z15 F730
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
N2095 Z15 F730
N2096 X254.431 Y411.813 F2800
N2097 G1 Z4 F2400
( MOVEMENT_PLUNGE)
N2098 Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
N2099 G3 X253.557 Y409.1 Z-1.452 I-0.437 J-1.356
N2100 X254.431 Y411.813 Z-2.403 I0.437 J1.356
N2101 X253.557 Y409.1 Z-3.355 I-0.437 J-1.356
N2102 X254.431 Y411.813 Z-4.306 I0.437 J1.356
N2103 X253.557 Y409.1 Z-5.258 I-0.437 J-1.356
N2104 X254.431 Y411.813 Z-6.209 I0.437 J1.356
N2105 X253.557 Y409.1 Z-7.161 I-0.437 J-1.356
N2106 X254.431 Y411.813 Z-8.113 I0.437 J1.356
N2107 X253.557 Y409.1 Z-9.064 I-0.437 J-1.356
N2108 X254.431 Y411.813 Z-10.016 I0.437 J1.356
N2109 X253.557 Y409.1 Z-10.967 I-0.437 J-1.356
N2110 X254.431 Y411.813 Z-11.919 I0.437 J1.356
N2111 X253.557 Y409.1 Z-12.87 I-0.437 J-1.356
N2112 X254.431 Y411.813 Z-13.822 I0.437 J1.356
N2113 X253.557 Y409.1 Z-14.774 I-0.437 J-1.356
N2114 X254.431 Y411.813 Z-15.725 I0.437 J1.356
N2115 X253.557 Y409.1 Z-16.677 I-0.437 J-1.356
N2116 X254.431 Y411.813 Z-17.628 I0.437 J1.356
N2117 X253.557 Y409.1 Z-18.58 I-0.437 J-1.356
N2118 X255.419 Y410.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
N2119 X252.569 I-1.425 F2400
N2120 X255.419 I1.425
( Safe G1 --> G0)
N2121 G0 Z15 F730
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
N2122 Z15 F730
N2123 X301.519 Y9.095 F2800
( Safe G1 --> G0)
N2124 Z5 F730
( MOVEMENT_PLUNGE)
N2125 G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
N2126 G3 X306.469 Y11.818 Z0.19 I2.475 J1.361
N2127 X301.519 Y9.095 Z-0.12 I-2.475 J-1.361
N2128 X306.469 Y11.818 Z-0.43 I2.475 J1.361
N2129 X301.519 Y9.095 Z-0.74 I-2.475 J-1.361
N2130 X306.819 Y10.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
N2131 X301.169 I-2.825 F2400
N2132 X306.819 I2.825
( Safe G1 --> G0)
N2133 G0 Z15 F730
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
N2134 Z15 F730
N2135 X304.431 Y11.813 F2800
N2136 G1 Z4 F2400
( MOVEMENT_PLUNGE)
N2137 Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
N2138 G3 X303.557 Y9.1 Z-1.452 I-0.437 J-1.356
N2139 X304.431 Y11.813 Z-2.403 I0.437 J1.356
N2140 X303.557 Y9.1 Z-3.355 I-0.437 J-1.356
N2141 X304.431 Y11.813 Z-4.306 I0.437 J1.356
N2142 X303.557 Y9.1 Z-5.258 I-0.437 J-1.356
N2143 X304.431 Y11.813 Z-6.209 I0.437 J1.356
N2144 X303.557 Y9.1 Z-7.161 I-0.437 J-1.356
N2145 X304.431 Y11.813 Z-8.113 I0.437 J1.356
N2146 X303.557 Y9.1 Z-9.064 I-0.437 J-1.356
N2147 X304.431 Y11.813 Z-10.016 I0.437 J1.356
N2148 X303.557 Y9.1 Z-10.967 I-0.437 J-1.356
N2149 X304.431 Y11.813 Z-11.919 I0.437 J1.356
N2150 X303.557 Y9.1 Z-12.87 I-0.437 J-1.356
N2151 X304.431 Y11.813 Z-13.822 I0.437 J1.356
N2152 X303.557 Y9.1 Z-14.774 I-0.437 J-1.356
N2153 X304.431 Y11.813 Z-15.725 I0.437 J1.356
N2154 X303.557 Y9.1 Z-16.677 I-0.437 J-1.356
N2155 X304.431 Y11.813 Z-17.628 I0.437 J1.356
N2156 X303.557 Y9.1 Z-18.58 I-0.437 J-1.356
N2157 X305.419 Y10.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
N2158 X302.569 I-1.425 F2400
N2159 X305.419 I1.425
( Safe G1 --> G0)
N2160 G0 Z15 F730
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
N2161 Z15 F730
N2162 X301.519 Y59.095 F2800
( Safe G1 --> G0)
N2163 Z5 F730
( MOVEMENT_PLUNGE)
N2164 G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
N2165 G3 X306.469 Y61.818 Z0.19 I2.475 J1.361
N2166 X301.519 Y59.095 Z-0.12 I-2.475 J-1.361
N2167 X306.469 Y61.818 Z-0.43 I2.475 J1.361
N2168 X301.519 Y59.095 Z-0.74 I-2.475 J-1.361
N2169 X306.819 Y60.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
N2170 X301.169 I-2.825 F2400
N2171 X306.819 I2.825
( Safe G1 --> G0)
N2172 G0 Z15 F730
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
N2173 Z15 F730
N2174 X304.431 Y61.813 F2800
N2175 G1 Z4 F2400
( MOVEMENT_PLUNGE)
N2176 Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
N2177 G3 X303.557 Y59.1 Z-1.452 I-0.437 J-1.356
N2178 X304.431 Y61.813 Z-2.403 I0.437 J1.356
N2179 X303.557 Y59.1 Z-3.355 I-0.437 J-1.356
N2180 X304.431 Y61.813 Z-4.306 I0.437 J1.356
N2181 X303.557 Y59.1 Z-5.258 I-0.437 J-1.356
N2182 X304.431 Y61.813 Z-6.209 I0.437 J1.356
N2183 X303.557 Y59.1 Z-7.161 I-0.437 J-1.356
N2184 X304.431 Y61.813 Z-8.113 I0.437 J1.356
N2185 X303.557 Y59.1 Z-9.064 I-0.437 J-1.356
N2186 X304.431 Y61.813 Z-10.016 I0.437 J1.356
N2187 X303.557 Y59.1 Z-10.967 I-0.437 J-1.356
N2188 X304.431 Y61.813 Z-11.919 I0.437 J1.356
N2189 X303.557 Y59.1 Z-12.87 I-0.437 J-1.356
N2190 X304.431 Y61.813 Z-13.822 I0.437 J1.356
N2191 X303.557 Y59.1 Z-14.774 I-0.437 J-1.356
N2192 X304.431 Y61.813 Z-15.725 I0.437 J1.356
N2193 X303.557 Y59.1 Z-16.677 I-0.437 J-1.356
N2194 X304.431 Y61.813 Z-17.628 I0.437 J1.356
N2195 X303.557 Y59.1 Z-18.58 I-0.437 J-1.356
N2196 X305.419 Y60.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
N2197 X302.569 I-1.425 F2400
N2198 X305.419 I1.425
( Safe G1 --> G0)
N2199 G0 Z15 F730
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
N2200 Z15 F730
N2201 X301.519 Y109.095 F2800
( Safe G1 --> G0)
N2202 Z5 F730
( MOVEMENT_PLUNGE)
N2203 G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
N2204 G3 X306.469 Y111.818 Z0.19 I2.475 J1.361
N2205 X301.519 Y109.095 Z-0.12 I-2.475 J-1.361
N2206 X306.469 Y111.818 Z-0.43 I2.475 J1.361
N2207 X301.519 Y109.095 Z-0.74 I-2.475 J-1.361
N2208 X306.819 Y110.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
N2209 X301.169 I-2.825 F2400
N2210 X306.819 I2.825
( Safe G1 --> G0)
N2211 G0 Z15 F730
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
N2212 Z15 F730
N2213 X304.431 Y111.813 F2800
N2214 G1 Z4 F2400
( MOVEMENT_PLUNGE)
N2215 Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
N2216 G3 X303.557 Y109.1 Z-1.452 I-0.437 J-1.356
N2217 X304.431 Y111.813 Z-2.403 I0.437 J1.356
N2218 X303.557 Y109.1 Z-3.355 I-0.437 J-1.356
N2219 X304.431 Y111.813 Z-4.306 I0.437 J1.356
N2220 X303.557 Y109.1 Z-5.258 I-0.437 J-1.356
N2221 X304.431 Y111.813 Z-6.209 I0.437 J1.356
N2222 X303.557 Y109.1 Z-7.161 I-0.437 J-1.356
N2223 X304.431 Y111.813 Z-8.113 I0.437 J1.356
N2224 X303.557 Y109.1 Z-9.064 I-0.437 J-1.356
N2225 X304.431 Y111.813 Z-10.016 I0.437 J1.356
N2226 X303.557 Y109.1 Z-10.967 I-0.437 J-1.356
N2227 X304.431 Y111.813 Z-11.919 I0.437 J1.356
N2228 X303.557 Y109.1 Z-12.87 I-0.437 J-1.356
N2229 X304.431 Y111.813 Z-13.822 I0.437 J1.356
N2230 X303.557 Y109.1 Z-14.774 I-0.437 J-1.356
N2231 X304.431 Y111.813 Z-15.725 I0.437 J1.356
N2232 X303.557 Y109.1 Z-16.677 I-0.437 J-1.356
N2233 X304.431 Y111.813 Z-17.628 I0.437 J1.356
N2234 X303.557 Y109.1 Z-18.58 I-0.437 J-1.356
N2235 X305.419 Y110.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
N2236 X302.569 I-1.425 F2400
N2237 X305.419 I1.425
( Safe G1 --> G0)
N2238 G0 Z15 F730
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
N2239 Z15 F730
N2240 X301.519 Y159.095 F2800
( Safe G1 --> G0)
N2241 Z5 F730
( MOVEMENT_PLUNGE)
N2242 G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
N2243 G3 X306.469 Y161.818 Z0.19 I2.475 J1.361
N2244 X301.519 Y159.095 Z-0.12 I-2.475 J-1.361
N2245 X306.469 Y161.818 Z-0.43 I2.475 J1.361
N2246 X301.519 Y159.095 Z-0.74 I-2.475 J-1.361
N2247 X306.819 Y160.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
N2248 X301.169 I-2.825 F2400
N2249 X306.819 I2.825
( Safe G1 --> G0)
N2250 G0 Z15 F730
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
N2251 Z15 F730
N2252 X304.431 Y161.813 F2800
N2253 G1 Z4 F2400
( MOVEMENT_PLUNGE)
N2254 Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
N2255 G3 X303.557 Y159.1 Z-1.452 I-0.437 J-1.356
N2256 X304.431 Y161.813 Z-2.403 I0.437 J1.356
N2257 X303.557 Y159.1 Z-3.355 I-0.437 J-1.356
N2258 X304.431 Y161.813 Z-4.306 I0.437 J1.356
N2259 X303.557 Y159.1 Z-5.258 I-0.437 J-1.356
N2260 X304.431 Y161.813 Z-6.209 I0.437 J1.356
N2261 X303.557 Y159.1 Z-7.161 I-0.437 J-1.356
N2262 X304.431 Y161.813 Z-8.113 I0.437 J1.356
N2263 X303.557 Y159.1 Z-9.064 I-0.437 J-1.356
N2264 X304.431 Y161.813 Z-10.016 I0.437 J1.356
N2265 X303.557 Y159.1 Z-10.967 I-0.437 J-1.356
N2266 X304.431 Y161.813 Z-11.919 I0.437 J1.356
N2267 X303.557 Y159.1 Z-12.87 I-0.437 J-1.356
N2268 X304.431 Y161.813 Z-13.822 I0.437 J1.356
N2269 X303.557 Y159.1 Z-14.774 I-0.437 J-1.356
N2270 X304.431 Y161.813 Z-15.725 I0.437 J1.356
N2271 X303.557 Y159.1 Z-16.677 I-0.437 J-1.356
N2272 X304.431 Y161.813 Z-17.628 I0.437 J1.356
N2273 X303.557 Y159.1 Z-18.58 I-0.437 J-1.356
N2274 X305.419 Y160.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
N2275 X302.569 I-1.425 F2400
N2276 X305.419 I1.425
( Safe G1 --> G0)
N2277 G0 Z15 F730
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
N2278 Z15 F730
N2279 X301.519 Y209.095 F2800
( Safe G1 --> G0)
N2280 Z5 F730
( MOVEMENT_PLUNGE)
N2281 G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
N2282 G3 X306.469 Y211.818 Z0.19 I2.475 J1.361
N2283 X301.519 Y209.095 Z-0.12 I-2.475 J-1.361
N2284 X306.469 Y211.818 Z-0.43 I2.475 J1.361
N2285 X301.519 Y209.095 Z-0.74 I-2.475 J-1.361
N2286 X306.819 Y210.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
N2287 X301.169 I-2.825 F2400
N2288 X306.819 I2.825
( Safe G1 --> G0)
N2289 G0 Z15 F730
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
N2290 Z15 F730
N2291 X304.431 Y211.813 F2800
N2292 G1 Z4 F2400
( MOVEMENT_PLUNGE)
N2293 Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
N2294 G3 X303.557 Y209.1 Z-1.452 I-0.437 J-1.356
N2295 X304.431 Y211.813 Z-2.403 I0.437 J1.356
N2296 X303.557 Y209.1 Z-3.355 I-0.437 J-1.356
N2297 X304.431 Y211.813 Z-4.306 I0.437 J1.356
N2298 X303.557 Y209.1 Z-5.258 I-0.437 J-1.356
N2299 X304.431 Y211.813 Z-6.209 I0.437 J1.356
N2300 X303.557 Y209.1 Z-7.161 I-0.437 J-1.356
N2301 X304.431 Y211.813 Z-8.113 I0.437 J1.356
N2302 X303.557 Y209.1 Z-9.064 I-0.437 J-1.356
N2303 X304.431 Y211.813 Z-10.016 I0.437 J1.356
N2304 X303.557 Y209.1 Z-10.967 I-0.437 J-1.356
N2305 X304.431 Y211.813 Z-11.919 I0.437 J1.356
N2306 X303.557 Y209.1 Z-12.87 I-0.437 J-1.356
N2307 X304.431 Y211.813 Z-13.822 I0.437 J1.356
N2308 X303.557 Y209.1 Z-14.774 I-0.437 J-1.356
N2309 X304.431 Y211.813 Z-15.725 I0.437 J1.356
N2310 X303.557 Y209.1 Z-16.677 I-0.437 J-1.356
N2311 X304.431 Y211.813 Z-17.628 I0.437 J1.356
N2312 X303.557 Y209.1 Z-18.58 I-0.437 J-1.356
N2313 X305.419 Y210.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
N2314 X302.569 I-1.425 F2400
N2315 X305.419 I1.425
( Safe G1 --> G0)
N2316 G0 Z15 F730
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
N2317 Z15 F730
N2318 X301.519 Y259.095 F2800
( Safe G1 --> G0)
N2319 Z5 F730
( MOVEMENT_PLUNGE)
N2320 G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
N2321 G3 X306.469 Y261.818 Z0.19 I2.475 J1.361
N2322 X301.519 Y259.095 Z-0.12 I-2.475 J-1.361
N2323 X306.469 Y261.818 Z-0.43 I2.475 J1.361
N2324 X301.519 Y259.095 Z-0.74 I-2.475 J-1.361
N2325 X306.819 Y260.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
N2326 X301.169 I-2.825 F2400
N2327 X306.819 I2.825
( Safe G1 --> G0)
N2328 G0 Z15 F730
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
N2329 Z15 F730
N2330 X304.431 Y261.813 F2800
N2331 G1 Z4 F2400
( MOVEMENT_PLUNGE)
N2332 Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
N2333 G3 X303.557 Y259.1 Z-1.452 I-0.437 J-1.356
N2334 X304.431 Y261.813 Z-2.403 I0.437 J1.356
N2335 X303.557 Y259.1 Z-3.355 I-0.437 J-1.356
N2336 X304.431 Y261.813 Z-4.306 I0.437 J1.356
N2337 X303.557 Y259.1 Z-5.258 I-0.437 J-1.356
N2338 X304.431 Y261.813 Z-6.209 I0.437 J1.356
N2339 X303.557 Y259.1 Z-7.161 I-0.437 J-1.356
N2340 X304.431 Y261.813 Z-8.113 I0.437 J1.356
N2341 X303.557 Y259.1 Z-9.064 I-0.437 J-1.356
N2342 X304.431 Y261.813 Z-10.016 I0.437 J1.356
N2343 X303.557 Y259.1 Z-10.967 I-0.437 J-1.356
N2344 X304.431 Y261.813 Z-11.919 I0.437 J1.356
N2345 X303.557 Y259.1 Z-12.87 I-0.437 J-1.356
N2346 X304.431 Y261.813 Z-13.822 I0.437 J1.356
N2347 X303.557 Y259.1 Z-14.774 I-0.437 J-1.356
N2348 X304.431 Y261.813 Z-15.725 I0.437 J1.356
N2349 X303.557 Y259.1 Z-16.677 I-0.437 J-1.356
N2350 X304.431 Y261.813 Z-17.628 I0.437 J1.356
N2351 X303.557 Y259.1 Z-18.58 I-0.437 J-1.356
N2352 X305.419 Y260.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
N2353 X302.569 I-1.425 F2400
N2354 X305.419 I1.425
( Safe G1 --> G0)
N2355 G0 Z15 F730
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
N2356 Z15 F730
N2357 X301.519 Y309.095 F2800
( Safe G1 --> G0)
N2358 Z5 F730
( MOVEMENT_PLUNGE)
N2359 G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
N2360 G3 X306.469 Y311.818 Z0.19 I2.475 J1.361
N2361 X301.519 Y309.095 Z-0.12 I-2.475 J-1.361
N2362 X306.469 Y311.818 Z-0.43 I2.475 J1.361
N2363 X301.519 Y309.095 Z-0.74 I-2.475 J-1.361
N2364 X306.819 Y310.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
N2365 X301.169 I-2.825 F2400
N2366 X306.819 I2.825
( Safe G1 --> G0)
N2367 G0 Z15 F730
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
N2368 Z15 F730
N2369 X304.431 Y311.813 F2800
N2370 G1 Z4 F2400
( MOVEMENT_PLUNGE)
N2371 Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
N2372 G3 X303.557 Y309.1 Z-1.452 I-0.437 J-1.356
N2373 X304.431 Y311.813 Z-2.403 I0.437 J1.356
N2374 X303.557 Y309.1 Z-3.355 I-0.437 J-1.356
N2375 X304.431 Y311.813 Z-4.306 I0.437 J1.356
N2376 X303.557 Y309.1 Z-5.258 I-0.437 J-1.356
N2377 X304.431 Y311.813 Z-6.209 I0.437 J1.356
N2378 X303.557 Y309.1 Z-7.161 I-0.437 J-1.356
N2379 X304.431 Y311.813 Z-8.113 I0.437 J1.356
N2380 X303.557 Y309.1 Z-9.064 I-0.437 J-1.356
N2381 X304.431 Y311.813 Z-10.016 I0.437 J1.356
N2382 X303.557 Y309.1 Z-10.967 I-0.437 J-1.356
N2383 X304.431 Y311.813 Z-11.919 I0.437 J1.356
N2384 X303.557 Y309.1 Z-12.87 I-0.437 J-1.356
N2385 X304.431 Y311.813 Z-13.822 I0.437 J1.356
N2386 X303.557 Y309.1 Z-14.774 I-0.437 J-1.356
N2387 X304.431 Y311.813 Z-15.725 I0.437 J1.356
N2388 X303.557 Y309.1 Z-16.677 I-0.437 J-1.356
N2389 X304.431 Y311.813 Z-17.628 I0.437 J1.356
N2390 X303.557 Y309.1 Z-18.58 I-0.437 J-1.356
N2391 X305.419 Y310.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
N2392 X302.569 I-1.425 F2400
N2393 X305.419 I1.425
( Safe G1 --> G0)
N2394 G0 Z15 F730
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
N2395 Z15 F730
N2396 X301.519 Y359.095 F2800
( Safe G1 --> G0)
N2397 Z5 F730
( MOVEMENT_PLUNGE)
N2398 G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
N2399 G3 X306.469 Y361.818 Z0.19 I2.475 J1.361
N2400 X301.519 Y359.095 Z-0.12 I-2.475 J-1.361
N2401 X306.469 Y361.818 Z-0.43 I2.475 J1.361
N2402 X301.519 Y359.095 Z-0.74 I-2.475 J-1.361
N2403 X306.819 Y360.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
N2404 X301.169 I-2.825 F2400
N2405 X306.819 I2.825
( Safe G1 --> G0)
N2406 G0 Z15 F730
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
N2407 Z15 F730
N2408 X304.431 Y361.813 F2800
N2409 G1 Z4 F2400
( MOVEMENT_PLUNGE)
N2410 Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
N2411 G3 X303.557 Y359.1 Z-1.452 I-0.437 J-1.356
N2412 X304.431 Y361.813 Z-2.403 I0.437 J1.356
N2413 X303.557 Y359.1 Z-3.355 I-0.437 J-1.356
N2414 X304.431 Y361.813 Z-4.306 I0.437 J1.356
N2415 X303.557 Y359.1 Z-5.258 I-0.437 J-1.356
N2416 X304.431 Y361.813 Z-6.209 I0.437 J1.356
N2417 X303.557 Y359.1 Z-7.161 I-0.437 J-1.356
N2418 X304.431 Y361.813 Z-8.113 I0.437 J1.356
N2419 X303.557 Y359.1 Z-9.064 I-0.437 J-1.356
N2420 X304.431 Y361.813 Z-10.016 I0.437 J1.356
N2421 X303.557 Y359.1 Z-10.967 I-0.437 J-1.356
N2422 X304.431 Y361.813 Z-11.919 I0.437 J1.356
N2423 X303.557 Y359.1 Z-12.87 I-0.437 J-1.356
N2424 X304.431 Y361.813 Z-13.822 I0.437 J1.356
N2425 X303.557 Y359.1 Z-14.774 I-0.437 J-1.356
N2426 X304.431 Y361.813 Z-15.725 I0.437 J1.356
N2427 X303.557 Y359.1 Z-16.677 I-0.437 J-1.356
N2428 X304.431 Y361.813 Z-17.628 I0.437 J1.356
N2429 X303.557 Y359.1 Z-18.58 I-0.437 J-1.356
N2430 X305.419 Y360.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
N2431 X302.569 I-1.425 F2400
N2432 X305.419 I1.425
( Safe G1 --> G0)
N2433 G0 Z15 F730
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
N2434 Z15 F730
N2435 X301.519 Y409.095 F2800
( Safe G1 --> G0)
N2436 Z5 F730
( MOVEMENT_PLUNGE)
N2437 G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
N2438 G3 X306.469 Y411.818 Z0.19 I2.475 J1.361
N2439 X301.519 Y409.095 Z-0.12 I-2.475 J-1.361
N2440 X306.469 Y411.818 Z-0.43 I2.475 J1.361
N2441 X301.519 Y409.095 Z-0.74 I-2.475 J-1.361
N2442 X306.819 Y410.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
N2443 X301.169 I-2.825 F2400
N2444 X306.819 I2.825
( Safe G1 --> G0)
N2445 G0 Z15 F730
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
N2446 Z15 F730
N2447 X304.431 Y411.813 F2800
N2448 G1 Z4 F2400
( MOVEMENT_PLUNGE)
N2449 Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
N2450 G3 X303.557 Y409.1 Z-1.452 I-0.437 J-1.356
N2451 X304.431 Y411.813 Z-2.403 I0.437 J1.356
N2452 X303.557 Y409.1 Z-3.355 I-0.437 J-1.356
N2453 X304.431 Y411.813 Z-4.306 I0.437 J1.356
N2454 X303.557 Y409.1 Z-5.258 I-0.437 J-1.356
N2455 X304.431 Y411.813 Z-6.209 I0.437 J1.356
N2456 X303.557 Y409.1 Z-7.161 I-0.437 J-1.356
N2457 X304.431 Y411.813 Z-8.113 I0.437 J1.356
N2458 X303.557 Y409.1 Z-9.064 I-0.437 J-1.356
N2459 X304.431 Y411.813 Z-10.016 I0.437 J1.356
N2460 X303.557 Y409.1 Z-10.967 I-0.437 J-1.356
N2461 X304.431 Y411.813 Z-11.919 I0.437 J1.356
N2462 X303.557 Y409.1 Z-12.87 I-0.437 J-1.356
N2463 X304.431 Y411.813 Z-13.822 I0.437 J1.356
N2464 X303.557 Y409.1 Z-14.774 I-0.437 J-1.356
N2465 X304.431 Y411.813 Z-15.725 I0.437 J1.356
N2466 X303.557 Y409.1 Z-16.677 I-0.437 J-1.356
N2467 X304.431 Y411.813 Z-17.628 I0.437 J1.356
N2468 X303.557 Y409.1 Z-18.58 I-0.437 J-1.356
N2469 X305.419 Y410.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
N2470 X302.569 I-1.425 F2400
N2471 X305.419 I1.425
( Safe G1 --> G0)
N2472 G0 Z15 F730
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
N2473 Z15 F730
N2474 X351.519 Y9.095 F2800
( Safe G1 --> G0)
N2475 Z5 F730
( MOVEMENT_PLUNGE)
N2476 G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
N2477 G3 X356.469 Y11.818 Z0.19 I2.475 J1.361
N2478 X351.519 Y9.095 Z-0.12 I-2.475 J-1.361
N2479 X356.469 Y11.818 Z-0.43 I2.475 J1.361
N2480 X351.519 Y9.095 Z-0.74 I-2.475 J-1.361
N2481 X356.819 Y10.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
N2482 X351.169 I-2.825 F2400
N2483 X356.819 I2.825
( Safe G1 --> G0)
N2484 G0 Z15 F730
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
N2485 Z15 F730
N2486 X354.431 Y11.813 F2800
N2487 G1 Z4 F2400
( MOVEMENT_PLUNGE)
N2488 Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
N2489 G3 X353.557 Y9.1 Z-1.452 I-0.437 J-1.356
N2490 X354.431 Y11.813 Z-2.403 I0.437 J1.356
N2491 X353.557 Y9.1 Z-3.355 I-0.437 J-1.356
N2492 X354.431 Y11.813 Z-4.306 I0.437 J1.356
N2493 X353.557 Y9.1 Z-5.258 I-0.437 J-1.356
N2494 X354.431 Y11.813 Z-6.209 I0.437 J1.356
N2495 X353.557 Y9.1 Z-7.161 I-0.437 J-1.356
N2496 X354.431 Y11.813 Z-8.113 I0.437 J1.356
N2497 X353.557 Y9.1 Z-9.064 I-0.437 J-1.356
N2498 X354.431 Y11.813 Z-10.016 I0.437 J1.356
N2499 X353.557 Y9.1 Z-10.967 I-0.437 J-1.356
N2500 X354.431 Y11.813 Z-11.919 I0.437 J1.356
N2501 X353.557 Y9.1 Z-12.87 I-0.437 J-1.356
N2502 X354.431 Y11.813 Z-13.822 I0.437 J1.356
N2503 X353.557 Y9.1 Z-14.774 I-0.437 J-1.356
N2504 X354.431 Y11.813 Z-15.725 I0.437 J1.356
N2505 X353.557 Y9.1 Z-16.677 I-0.437 J-1.356
N2506 X354.431 Y11.813 Z-17.628 I0.437 J1.356
N2507 X353.557 Y9.1 Z-18.58 I-0.437 J-1.356
N2508 X355.419 Y10.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
N2509 X352.569 I-1.425 F2400
N2510 X355.419 I1.425
( Safe G1 --> G0)
N2511 G0 Z15 F730
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
N2512 Z15 F730
N2513 X351.519 Y59.095 F2800
( Safe G1 --> G0)
N2514 Z5 F730
( MOVEMENT_PLUNGE)
N2515 G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
N2516 G3 X356.469 Y61.818 Z0.19 I2.475 J1.361
N2517 X351.519 Y59.095 Z-0.12 I-2.475 J-1.361
N2518 X356.469 Y61.818 Z-0.43 I2.475 J1.361
N2519 X351.519 Y59.095 Z-0.74 I-2.475 J-1.361
N2520 X356.819 Y60.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
N2521 X351.169 I-2.825 F2400
N2522 X356.819 I2.825
( Safe G1 --> G0)
N2523 G0 Z15 F730
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
N2524 Z15 F730
N2525 X354.431 Y61.813 F2800
N2526 G1 Z4 F2400
( MOVEMENT_PLUNGE)
N2527 Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
N2528 G3 X353.557 Y59.1 Z-1.452 I-0.437 J-1.356
N2529 X354.431 Y61.813 Z-2.403 I0.437 J1.356
N2530 X353.557 Y59.1 Z-3.355 I-0.437 J-1.356
N2531 X354.431 Y61.813 Z-4.306 I0.437 J1.356
N2532 X353.557 Y59.1 Z-5.258 I-0.437 J-1.356
N2533 X354.431 Y61.813 Z-6.209 I0.437 J1.356
N2534 X353.557 Y59.1 Z-7.161 I-0.437 J-1.356
N2535 X354.431 Y61.813 Z-8.113 I0.437 J1.356
N2536 X353.557 Y59.1 Z-9.064 I-0.437 J-1.356
N2537 X354.431 Y61.813 Z-10.016 I0.437 J1.356
N2538 X353.557 Y59.1 Z-10.967 I-0.437 J-1.356
N2539 X354.431 Y61.813 Z-11.919 I0.437 J1.356
N2540 X353.557 Y59.1 Z-12.87 I-0.437 J-1.356
N2541 X354.431 Y61.813 Z-13.822 I0.437 J1.356
N2542 X353.557 Y59.1 Z-14.774 I-0.437 J-1.356
N2543 X354.431 Y61.813 Z-15.725 I0.437 J1.356
N2544 X353.557 Y59.1 Z-16.677 I-0.437 J-1.356
N2545 X354.431 Y61.813 Z-17.628 I0.437 J1.356
N2546 X353.557 Y59.1 Z-18.58 I-0.437 J-1.356
N2547 X355.419 Y60.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
N2548 X352.569 I-1.425 F2400
N2549 X355.419 I1.425
( Safe G1 --> G0)
N2550 G0 Z15 F730
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
N2551 Z15 F730
N2552 X351.519 Y109.095 F2800
( Safe G1 --> G0)
N2553 Z5 F730
( MOVEMENT_PLUNGE)
N2554 G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
N2555 G3 X356.469 Y111.818 Z0.19 I2.475 J1.361
N2556 X351.519 Y109.095 Z-0.12 I-2.475 J-1.361
N2557 X356.469 Y111.818 Z-0.43 I2.475 J1.361
N2558 X351.519 Y109.095 Z-0.74 I-2.475 J-1.361
N2559 X356.819 Y110.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
N2560 X351.169 I-2.825 F2400
N2561 X356.819 I2.825
( Safe G1 --> G0)
N2562 G0 Z15 F730
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
N2563 Z15 F730
N2564 X354.431 Y111.813 F2800
N2565 G1 Z4 F2400
( MOVEMENT_PLUNGE)
N2566 Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
N2567 G3 X353.557 Y109.1 Z-1.452 I-0.437 J-1.356
N2568 X354.431 Y111.813 Z-2.403 I0.437 J1.356
N2569 X353.557 Y109.1 Z-3.355 I-0.437 J-1.356
N2570 X354.431 Y111.813 Z-4.306 I0.437 J1.356
N2571 X353.557 Y109.1 Z-5.258 I-0.437 J-1.356
N2572 X354.431 Y111.813 Z-6.209 I0.437 J1.356
N2573 X353.557 Y109.1 Z-7.161 I-0.437 J-1.356
N2574 X354.431 Y111.813 Z-8.113 I0.437 J1.356
N2575 X353.557 Y109.1 Z-9.064 I-0.437 J-1.356
N2576 X354.431 Y111.813 Z-10.016 I0.437 J1.356
N2577 X353.557 Y109.1 Z-10.967 I-0.437 J-1.356
N2578 X354.431 Y111.813 Z-11.919 I0.437 J1.356
N2579 X353.557 Y109.1 Z-12.87 I-0.437 J-1.356
N2580 X354.431 Y111.813 Z-13.822 I0.437 J1.356
N2581 X353.557 Y109.1 Z-14.774 I-0.437 J-1.356
N2582 X354.431 Y111.813 Z-15.725 I0.437 J1.356
N2583 X353.557 Y109.1 Z-16.677 I-0.437 J-1.356
N2584 X354.431 Y111.813 Z-17.628 I0.437 J1.356
N2585 X353.557 Y109.1 Z-18.58 I-0.437 J-1.356
N2586 X355.419 Y110.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
N2587 X352.569 I-1.425 F2400
N2588 X355.419 I1.425
( Safe G1 --> G0)
N2589 G0 Z15 F730
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
N2590 Z15 F730
N2591 X351.519 Y159.095 F2800
( Safe G1 --> G0)
N2592 Z5 F730
( MOVEMENT_PLUNGE)
N2593 G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
N2594 G3 X356.469 Y161.818 Z0.19 I2.475 J1.361
N2595 X351.519 Y159.095 Z-0.12 I-2.475 J-1.361
N2596 X356.469 Y161.818 Z-0.43 I2.475 J1.361
N2597 X351.519 Y159.095 Z-0.74 I-2.475 J-1.361
N2598 X356.819 Y160.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
N2599 X351.169 I-2.825 F2400
N2600 X356.819 I2.825
( Safe G1 --> G0)
N2601 G0 Z15 F730
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
N2602 Z15 F730
N2603 X354.431 Y161.813 F2800
N2604 G1 Z4 F2400
( MOVEMENT_PLUNGE)
N2605 Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
N2606 G3 X353.557 Y159.1 Z-1.452 I-0.437 J-1.356
N2607 X354.431 Y161.813 Z-2.403 I0.437 J1.356
N2608 X353.557 Y159.1 Z-3.355 I-0.437 J-1.356
N2609 X354.431 Y161.813 Z-4.306 I0.437 J1.356
N2610 X353.557 Y159.1 Z-5.258 I-0.437 J-1.356
N2611 X354.431 Y161.813 Z-6.209 I0.437 J1.356
N2612 X353.557 Y159.1 Z-7.161 I-0.437 J-1.356
N2613 X354.431 Y161.813 Z-8.113 I0.437 J1.356
N2614 X353.557 Y159.1 Z-9.064 I-0.437 J-1.356
N2615 X354.431 Y161.813 Z-10.016 I0.437 J1.356
N2616 X353.557 Y159.1 Z-10.967 I-0.437 J-1.356
N2617 X354.431 Y161.813 Z-11.919 I0.437 J1.356
N2618 X353.557 Y159.1 Z-12.87 I-0.437 J-1.356
N2619 X354.431 Y161.813 Z-13.822 I0.437 J1.356
N2620 X353.557 Y159.1 Z-14.774 I-0.437 J-1.356
N2621 X354.431 Y161.813 Z-15.725 I0.437 J1.356
N2622 X353.557 Y159.1 Z-16.677 I-0.437 J-1.356
N2623 X354.431 Y161.813 Z-17.628 I0.437 J1.356
N2624 X353.557 Y159.1 Z-18.58 I-0.437 J-1.356
N2625 X355.419 Y160.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
N2626 X352.569 I-1.425 F2400
N2627 X355.419 I1.425
( Safe G1 --> G0)
N2628 G0 Z15 F730
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
N2629 Z15 F730
N2630 X351.519 Y209.095 F2800
( Safe G1 --> G0)
N2631 Z5 F730
( MOVEMENT_PLUNGE)
N2632 G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
N2633 G3 X356.469 Y211.818 Z0.19 I2.475 J1.361
N2634 X351.519 Y209.095 Z-0.12 I-2.475 J-1.361
N2635 X356.469 Y211.818 Z-0.43 I2.475 J1.361
N2636 X351.519 Y209.095 Z-0.74 I-2.475 J-1.361
N2637 X356.819 Y210.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
N2638 X351.169 I-2.825 F2400
N2639 X356.819 I2.825
( Safe G1 --> G0)
N2640 G0 Z15 F730
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
N2641 Z15 F730
N2642 X354.431 Y211.813 F2800
N2643 G1 Z4 F2400
( MOVEMENT_PLUNGE)
N2644 Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
N2645 G3 X353.557 Y209.1 Z-1.452 I-0.437 J-1.356
N2646 X354.431 Y211.813 Z-2.403 I0.437 J1.356
N2647 X353.557 Y209.1 Z-3.355 I-0.437 J-1.356
N2648 X354.431 Y211.813 Z-4.306 I0.437 J1.356
N2649 X353.557 Y209.1 Z-5.258 I-0.437 J-1.356
N2650 X354.431 Y211.813 Z-6.209 I0.437 J1.356
N2651 X353.557 Y209.1 Z-7.161 I-0.437 J-1.356
N2652 X354.431 Y211.813 Z-8.113 I0.437 J1.356
N2653 X353.557 Y209.1 Z-9.064 I-0.437 J-1.356
N2654 X354.431 Y211.813 Z-10.016 I0.437 J1.356
N2655 X353.557 Y209.1 Z-10.967 I-0.437 J-1.356
N2656 X354.431 Y211.813 Z-11.919 I0.437 J1.356
N2657 X353.557 Y209.1 Z-12.87 I-0.437 J-1.356
N2658 X354.431 Y211.813 Z-13.822 I0.437 J1.356
N2659 X353.557 Y209.1 Z-14.774 I-0.437 J-1.356
N2660 X354.431 Y211.813 Z-15.725 I0.437 J1.356
N2661 X353.557 Y209.1 Z-16.677 I-0.437 J-1.356
N2662 X354.431 Y211.813 Z-17.628 I0.437 J1.356
N2663 X353.557 Y209.1 Z-18.58 I-0.437 J-1.356
N2664 X355.419 Y210.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
N2665 X352.569 I-1.425 F2400
N2666 X355.419 I1.425
( Safe G1 --> G0)
N2667 G0 Z15 F730
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
N2668 Z15 F730
N2669 X351.519 Y259.095 F2800
( Safe G1 --> G0)
N2670 Z5 F730
( MOVEMENT_PLUNGE)
N2671 G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
N2672 G3 X356.469 Y261.818 Z0.19 I2.475 J1.361
N2673 X351.519 Y259.095 Z-0.12 I-2.475 J-1.361
N2674 X356.469 Y261.818 Z-0.43 I2.475 J1.361
N2675 X351.519 Y259.095 Z-0.74 I-2.475 J-1.361
N2676 X356.819 Y260.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
N2677 X351.169 I-2.825 F2400
N2678 X356.819 I2.825
( Safe G1 --> G0)
N2679 G0 Z15 F730
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
N2680 Z15 F730
N2681 X354.431 Y261.813 F2800
N2682 G1 Z4 F2400
( MOVEMENT_PLUNGE)
N2683 Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
N2684 G3 X353.557 Y259.1 Z-1.452 I-0.437 J-1.356
N2685 X354.431 Y261.813 Z-2.403 I0.437 J1.356
N2686 X353.557 Y259.1 Z-3.355 I-0.437 J-1.356
N2687 X354.431 Y261.813 Z-4.306 I0.437 J1.356
N2688 X353.557 Y259.1 Z-5.258 I-0.437 J-1.356
N2689 X354.431 Y261.813 Z-6.209 I0.437 J1.356
N2690 X353.557 Y259.1 Z-7.161 I-0.437 J-1.356
N2691 X354.431 Y261.813 Z-8.113 I0.437 J1.356
N2692 X353.557 Y259.1 Z-9.064 I-0.437 J-1.356
N2693 X354.431 Y261.813 Z-10.016 I0.437 J1.356
N2694 X353.557 Y259.1 Z-10.967 I-0.437 J-1.356
N2695 X354.431 Y261.813 Z-11.919 I0.437 J1.356
N2696 X353.557 Y259.1 Z-12.87 I-0.437 J-1.356
N2697 X354.431 Y261.813 Z-13.822 I0.437 J1.356
N2698 X353.557 Y259.1 Z-14.774 I-0.437 J-1.356
N2699 X354.431 Y261.813 Z-15.725 I0.437 J1.356
N2700 X353.557 Y259.1 Z-16.677 I-0.437 J-1.356
N2701 X354.431 Y261.813 Z-17.628 I0.437 J1.356
N2702 X353.557 Y259.1 Z-18.58 I-0.437 J-1.356
N2703 X355.419 Y260.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
N2704 X352.569 I-1.425 F2400
N2705 X355.419 I1.425
( Safe G1 --> G0)
N2706 G0 Z15 F730
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
N2707 Z15 F730
N2708 X351.519 Y309.095 F2800
( Safe G1 --> G0)
N2709 Z5 F730
( MOVEMENT_PLUNGE)
N2710 G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
N2711 G3 X356.469 Y311.818 Z0.19 I2.475 J1.361
N2712 X351.519 Y309.095 Z-0.12 I-2.475 J-1.361
N2713 X356.469 Y311.818 Z-0.43 I2.475 J1.361
N2714 X351.519 Y309.095 Z-0.74 I-2.475 J-1.361
N2715 X356.819 Y310.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
N2716 X351.169 I-2.825 F2400
N2717 X356.819 I2.825
( Safe G1 --> G0)
N2718 G0 Z15 F730
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
N2719 Z15 F730
N2720 X354.431 Y311.813 F2800
N2721 G1 Z4 F2400
( MOVEMENT_PLUNGE)
N2722 Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
N2723 G3 X353.557 Y309.1 Z-1.452 I-0.437 J-1.356
N2724 X354.431 Y311.813 Z-2.403 I0.437 J1.356
N2725 X353.557 Y309.1 Z-3.355 I-0.437 J-1.356
N2726 X354.431 Y311.813 Z-4.306 I0.437 J1.356
N2727 X353.557 Y309.1 Z-5.258 I-0.437 J-1.356
N2728 X354.431 Y311.813 Z-6.209 I0.437 J1.356
N2729 X353.557 Y309.1 Z-7.161 I-0.437 J-1.356
N2730 X354.431 Y311.813 Z-8.113 I0.437 J1.356
N2731 X353.557 Y309.1 Z-9.064 I-0.437 J-1.356
N2732 X354.431 Y311.813 Z-10.016 I0.437 J1.356
N2733 X353.557 Y309.1 Z-10.967 I-0.437 J-1.356
N2734 X354.431 Y311.813 Z-11.919 I0.437 J1.356
N2735 X353.557 Y309.1 Z-12.87 I-0.437 J-1.356
N2736 X354.431 Y311.813 Z-13.822 I0.437 J1.356
N2737 X353.557 Y309.1 Z-14.774 I-0.437 J-1.356
N2738 X354.431 Y311.813 Z-15.725 I0.437 J1.356
N2739 X353.557 Y309.1 Z-16.677 I-0.437 J-1.356
N2740 X354.431 Y311.813 Z-17.628 I0.437 J1.356
N2741 X353.557 Y309.1 Z-18.58 I-0.437 J-1.356
N2742 X355.419 Y310.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
N2743 X352.569 I-1.425 F2400
N2744 X355.419 I1.425
( Safe G1 --> G0)
N2745 G0 Z15 F730
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
N2746 Z15 F730
N2747 X351.519 Y359.095 F2800
( Safe G1 --> G0)
N2748 Z5 F730
( MOVEMENT_PLUNGE)
N2749 G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
N2750 G3 X356.469 Y361.818 Z0.19 I2.475 J1.361
N2751 X351.519 Y359.095 Z-0.12 I-2.475 J-1.361
N2752 X356.469 Y361.818 Z-0.43 I2.475 J1.361
N2753 X351.519 Y359.095 Z-0.74 I-2.475 J-1.361
N2754 X356.819 Y360.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
N2755 X351.169 I-2.825 F2400
N2756 X356.819 I2.825
( Safe G1 --> G0)
N2757 G0 Z15 F730
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
N2758 Z15 F730
N2759 X354.431 Y361.813 F2800
N2760 G1 Z4 F2400
( MOVEMENT_PLUNGE)
N2761 Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
N2762 G3 X353.557 Y359.1 Z-1.452 I-0.437 J-1.356
N2763 X354.431 Y361.813 Z-2.403 I0.437 J1.356
N2764 X353.557 Y359.1 Z-3.355 I-0.437 J-1.356
N2765 X354.431 Y361.813 Z-4.306 I0.437 J1.356
N2766 X353.557 Y359.1 Z-5.258 I-0.437 J-1.356
N2767 X354.431 Y361.813 Z-6.209 I0.437 J1.356
N2768 X353.557 Y359.1 Z-7.161 I-0.437 J-1.356
N2769 X354.431 Y361.813 Z-8.113 I0.437 J1.356
N2770 X353.557 Y359.1 Z-9.064 I-0.437 J-1.356
N2771 X354.431 Y361.813 Z-10.016 I0.437 J1.356
N2772 X353.557 Y359.1 Z-10.967 I-0.437 J-1.356
N2773 X354.431 Y361.813 Z-11.919 I0.437 J1.356
N2774 X353.557 Y359.1 Z-12.87 I-0.437 J-1.356
N2775 X354.431 Y361.813 Z-13.822 I0.437 J1.356
N2776 X353.557 Y359.1 Z-14.774 I-0.437 J-1.356
N2777 X354.431 Y361.813 Z-15.725 I0.437 J1.356
N2778 X353.557 Y359.1 Z-16.677 I-0.437 J-1.356
N2779 X354.431 Y361.813 Z-17.628 I0.437 J1.356
N2780 X353.557 Y359.1 Z-18.58 I-0.437 J-1.356
N2781 X355.419 Y360.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
N2782 X352.569 I-1.425 F2400
N2783 X355.419 I1.425
( Safe G1 --> G0)
N2784 G0 Z15 F730
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
N2785 Z15 F730
N2786 X351.519 Y409.095 F2800
( Safe G1 --> G0)
N2787 Z5 F730
( MOVEMENT_PLUNGE)
N2788 G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
N2789 G3 X356.469 Y411.818 Z0.19 I2.475 J1.361
N2790 X351.519 Y409.095 Z-0.12 I-2.475 J-1.361
N2791 X356.469 Y411.818 Z-0.43 I2.475 J1.361
N2792 X351.519 Y409.095 Z-0.74 I-2.475 J-1.361
N2793 X356.819 Y410.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
N2794 X351.169 I-2.825 F2400
N2795 X356.819 I2.825
( Safe G1 --> G0)
N2796 G0 Z15 F730
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
N2797 Z15 F730
N2798 X354.431 Y411.813 F2800
N2799 G1 Z4 F2400
( MOVEMENT_PLUNGE)
N2800 Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
N2801 G3 X353.557 Y409.1 Z-1.452 I-0.437 J-1.356
N2802 X354.431 Y411.813 Z-2.403 I0.437 J1.356
N2803 X353.557 Y409.1 Z-3.355 I-0.437 J-1.356
N2804 X354.431 Y411.813 Z-4.306 I0.437 J1.356
N2805 X353.557 Y409.1 Z-5.258 I-0.437 J-1.356
N2806 X354.431 Y411.813 Z-6.209 I0.437 J1.356
N2807 X353.557 Y409.1 Z-7.161 I-0.437 J-1.356
N2808 X354.431 Y411.813 Z-8.113 I0.437 J1.356
N2809 X353.557 Y409.1 Z-9.064 I-0.437 J-1.356
N2810 X354.431 Y411.813 Z-10.016 I0.437 J1.356
N2811 X353.557 Y409.1 Z-10.967 I-0.437 J-1.356
N2812 X354.431 Y411.813 Z-11.919 I0.437 J1.356
N2813 X353.557 Y409.1 Z-12.87 I-0.437 J-1.356
N2814 X354.431 Y411.813 Z-13.822 I0.437 J1.356
N2815 X353.557 Y409.1 Z-14.774 I-0.437 J-1.356
N2816 X354.431 Y411.813 Z-15.725 I0.437 J1.356
N2817 X353.557 Y409.1 Z-16.677 I-0.437 J-1.356
N2818 X354.431 Y411.813 Z-17.628 I0.437 J1.356
N2819 X353.557 Y409.1 Z-18.58 I-0.437 J-1.356
N2820 X355.419 Y410.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
N2821 X352.569 I-1.425 F2400
N2822 X355.419 I1.425
( Safe G1 --> G0)
N2823 G0 Z15 F730
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
N2824 Z15 F730
N2825 X401.519 Y9.095 F2800
( Safe G1 --> G0)
N2826 Z5 F730
( MOVEMENT_PLUNGE)
N2827 G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
N2828 G3 X406.469 Y11.818 Z0.19 I2.475 J1.361
N2829 X401.519 Y9.095 Z-0.12 I-2.475 J-1.361
N2830 X406.469 Y11.818 Z-0.43 I2.475 J1.361
N2831 X401.519 Y9.095 Z-0.74 I-2.475 J-1.361
N2832 X406.819 Y10.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
N2833 X401.169 I-2.825 F2400
N2834 X406.819 I2.825
( Safe G1 --> G0)
N2835 G0 Z15 F730
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
N2836 Z15 F730
N2837 X404.431 Y11.813 F2800
N2838 G1 Z4 F2400
( MOVEMENT_PLUNGE)
N2839 Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
N2840 G3 X403.557 Y9.1 Z-1.452 I-0.437 J-1.356
N2841 X404.431 Y11.813 Z-2.403 I0.437 J1.356
N2842 X403.557 Y9.1 Z-3.355 I-0.437 J-1.356
N2843 X404.431 Y11.813 Z-4.306 I0.437 J1.356
N2844 X403.557 Y9.1 Z-5.258 I-0.437 J-1.356
N2845 X404.431 Y11.813 Z-6.209 I0.437 J1.356
N2846 X403.557 Y9.1 Z-7.161 I-0.437 J-1.356
N2847 X404.431 Y11.813 Z-8.113 I0.437 J1.356
N2848 X403.557 Y9.1 Z-9.064 I-0.437 J-1.356
N2849 X404.431 Y11.813 Z-10.016 I0.437 J1.356
N2850 X403.557 Y9.1 Z-10.967 I-0.437 J-1.356
N2851 X404.431 Y11.813 Z-11.919 I0.437 J1.356
N2852 X403.557 Y9.1 Z-12.87 I-0.437 J-1.356
N2853 X404.431 Y11.813 Z-13.822 I0.437 J1.356
N2854 X403.557 Y9.1 Z-14.774 I-0.437 J-1.356
N2855 X404.431 Y11.813 Z-15.725 I0.437 J1.356
N2856 X403.557 Y9.1 Z-16.677 I-0.437 J-1.356
N2857 X404.431 Y11.813 Z-17.628 I0.437 J1.356
N2858 X403.557 Y9.1 Z-18.58 I-0.437 J-1.356
N2859 X405.419 Y10.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
N2860 X402.569 I-1.425 F2400
N2861 X405.419 I1.425
( Safe G1 --> G0)
N2862 G0 Z15 F730
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
N2863 Z15 F730
N2864 X401.519 Y59.095 F2800
( Safe G1 --> G0)
N2865 Z5 F730
( MOVEMENT_PLUNGE)
N2866 G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
N2867 G3 X406.469 Y61.818 Z0.19 I2.475 J1.361
N2868 X401.519 Y59.095 Z-0.12 I-2.475 J-1.361
N2869 X406.469 Y61.818 Z-0.43 I2.475 J1.361
N2870 X401.519 Y59.095 Z-0.74 I-2.475 J-1.361
N2871 X406.819 Y60.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
N2872 X401.169 I-2.825 F2400
N2873 X406.819 I2.825
( Safe G1 --> G0)
N2874 G0 Z15 F730
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
N2875 Z15 F730
N2876 X404.431 Y61.813 F2800
N2877 G1 Z4 F2400
( MOVEMENT_PLUNGE)
N2878 Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
N2879 G3 X403.557 Y59.1 Z-1.452 I-0.437 J-1.356
N2880 X404.431 Y61.813 Z-2.403 I0.437 J1.356
N2881 X403.557 Y59.1 Z-3.355 I-0.437 J-1.356
N2882 X404.431 Y61.813 Z-4.306 I0.437 J1.356
N2883 X403.557 Y59.1 Z-5.258 I-0.437 J-1.356
N2884 X404.431 Y61.813 Z-6.209 I0.437 J1.356
N2885 X403.557 Y59.1 Z-7.161 I-0.437 J-1.356
N2886 X404.431 Y61.813 Z-8.113 I0.437 J1.356
N2887 X403.557 Y59.1 Z-9.064 I-0.437 J-1.356
N2888 X404.431 Y61.813 Z-10.016 I0.437 J1.356
N2889 X403.557 Y59.1 Z-10.967 I-0.437 J-1.356
N2890 X404.431 Y61.813 Z-11.919 I0.437 J1.356
N2891 X403.557 Y59.1 Z-12.87 I-0.437 J-1.356
N2892 X404.431 Y61.813 Z-13.822 I0.437 J1.356
N2893 X403.557 Y59.1 Z-14.774 I-0.437 J-1.356
N2894 X404.431 Y61.813 Z-15.725 I0.437 J1.356
N2895 X403.557 Y59.1 Z-16.677 I-0.437 J-1.356
N2896 X404.431 Y61.813 Z-17.628 I0.437 J1.356
N2897 X403.557 Y59.1 Z-18.58 I-0.437 J-1.356
N2898 X405.419 Y60.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
N2899 X402.569 I-1.425 F2400
N2900 X405.419 I1.425
( Safe G1 --> G0)
N2901 G0 Z15 F730
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
N2902 Z15 F730
N2903 X401.519 Y109.095 F2800
( Safe G1 --> G0)
N2904 Z5 F730
( MOVEMENT_PLUNGE)
N2905 G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
N2906 G3 X406.469 Y111.818 Z0.19 I2.475 J1.361
N2907 X401.519 Y109.095 Z-0.12 I-2.475 J-1.361
N2908 X406.469 Y111.818 Z-0.43 I2.475 J1.361
N2909 X401.519 Y109.095 Z-0.74 I-2.475 J-1.361
N2910 X406.819 Y110.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
N2911 X401.169 I-2.825 F2400
N2912 X406.819 I2.825
( Safe G1 --> G0)
N2913 G0 Z15 F730
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
N2914 Z15 F730
N2915 X404.431 Y111.813 F2800
N2916 G1 Z4 F2400
( MOVEMENT_PLUNGE)
N2917 Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
N2918 G3 X403.557 Y109.1 Z-1.452 I-0.437 J-1.356
N2919 X404.431 Y111.813 Z-2.403 I0.437 J1.356
N2920 X403.557 Y109.1 Z-3.355 I-0.437 J-1.356
N2921 X404.431 Y111.813 Z-4.306 I0.437 J1.356
N2922 X403.557 Y109.1 Z-5.258 I-0.437 J-1.356
N2923 X404.431 Y111.813 Z-6.209 I0.437 J1.356
N2924 X403.557 Y109.1 Z-7.161 I-0.437 J-1.356
N2925 X404.431 Y111.813 Z-8.113 I0.437 J1.356
N2926 X403.557 Y109.1 Z-9.064 I-0.437 J-1.356
N2927 X404.431 Y111.813 Z-10.016 I0.437 J1.356
N2928 X403.557 Y109.1 Z-10.967 I-0.437 J-1.356
N2929 X404.431 Y111.813 Z-11.919 I0.437 J1.356
N2930 X403.557 Y109.1 Z-12.87 I-0.437 J-1.356
N2931 X404.431 Y111.813 Z-13.822 I0.437 J1.356
N2932 X403.557 Y109.1 Z-14.774 I-0.437 J-1.356
N2933 X404.431 Y111.813 Z-15.725 I0.437 J1.356
N2934 X403.557 Y109.1 Z-16.677 I-0.437 J-1.356
N2935 X404.431 Y111.813 Z-17.628 I0.437 J1.356
N2936 X403.557 Y109.1 Z-18.58 I-0.437 J-1.356
N2937 X405.419 Y110.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
N2938 X402.569 I-1.425 F2400
N2939 X405.419 I1.425
( Safe G1 --> G0)
N2940 G0 Z15 F730
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
N2941 Z15 F730
N2942 X401.519 Y159.095 F2800
( Safe G1 --> G0)
N2943 Z5 F730
( MOVEMENT_PLUNGE)
N2944 G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
N2945 G3 X406.469 Y161.818 Z0.19 I2.475 J1.361
N2946 X401.519 Y159.095 Z-0.12 I-2.475 J-1.361
N2947 X406.469 Y161.818 Z-0.43 I2.475 J1.361
N2948 X401.519 Y159.095 Z-0.74 I-2.475 J-1.361
N2949 X406.819 Y160.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
N2950 X401.169 I-2.825 F2400
N2951 X406.819 I2.825
( Safe G1 --> G0)
N2952 G0 Z15 F730
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
N2953 Z15 F730
N2954 X404.431 Y161.813 F2800
N2955 G1 Z4 F2400
( MOVEMENT_PLUNGE)
N2956 Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
N2957 G3 X403.557 Y159.1 Z-1.452 I-0.437 J-1.356
N2958 X404.431 Y161.813 Z-2.403 I0.437 J1.356
N2959 X403.557 Y159.1 Z-3.355 I-0.437 J-1.356
N2960 X404.431 Y161.813 Z-4.306 I0.437 J1.356
N2961 X403.557 Y159.1 Z-5.258 I-0.437 J-1.356
N2962 X404.431 Y161.813 Z-6.209 I0.437 J1.356
N2963 X403.557 Y159.1 Z-7.161 I-0.437 J-1.356
N2964 X404.431 Y161.813 Z-8.113 I0.437 J1.356
N2965 X403.557 Y159.1 Z-9.064 I-0.437 J-1.356
N2966 X404.431 Y161.813 Z-10.016 I0.437 J1.356
N2967 X403.557 Y159.1 Z-10.967 I-0.437 J-1.356
N2968 X404.431 Y161.813 Z-11.919 I0.437 J1.356
N2969 X403.557 Y159.1 Z-12.87 I-0.437 J-1.356
N2970 X404.431 Y161.813 Z-13.822 I0.437 J1.356
N2971 X403.557 Y159.1 Z-14.774 I-0.437 J-1.356
N2972 X404.431 Y161.813 Z-15.725 I0.437 J1.356
N2973 X403.557 Y159.1 Z-16.677 I-0.437 J-1.356
N2974 X404.431 Y161.813 Z-17.628 I0.437 J1.356
N2975 X403.557 Y159.1 Z-18.58 I-0.437 J-1.356
N2976 X405.419 Y160.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
N2977 X402.569 I-1.425 F2400
N2978 X405.419 I1.425
( Safe G1 --> G0)
N2979 G0 Z15 F730
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
N2980 Z15 F730
N2981 X401.519 Y209.095 F2800
( Safe G1 --> G0)
N2982 Z5 F730
( MOVEMENT_PLUNGE)
N2983 G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
N2984 G3 X406.469 Y211.818 Z0.19 I2.475 J1.361
N2985 X401.519 Y209.095 Z-0.12 I-2.475 J-1.361
N2986 X406.469 Y211.818 Z-0.43 I2.475 J1.361
N2987 X401.519 Y209.095 Z-0.74 I-2.475 J-1.361
N2988 X406.819 Y210.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
N2989 X401.169 I-2.825 F2400
N2990 X406.819 I2.825
( Safe G1 --> G0)
N2991 G0 Z15 F730
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
N2992 Z15 F730
N2993 X404.431 Y211.813 F2800
N2994 G1 Z4 F2400
( MOVEMENT_PLUNGE)
N2995 Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
N2996 G3 X403.557 Y209.1 Z-1.452 I-0.437 J-1.356
N2997 X404.431 Y211.813 Z-2.403 I0.437 J1.356
N2998 X403.557 Y209.1 Z-3.355 I-0.437 J-1.356
N2999 X404.431 Y211.813 Z-4.306 I0.437 J1.356
N3000 X403.557 Y209.1 Z-5.258 I-0.437 J-1.356
N3001 X404.431 Y211.813 Z-6.209 I0.437 J1.356
N3002 X403.557 Y209.1 Z-7.161 I-0.437 J-1.356
N3003 X404.431 Y211.813 Z-8.113 I0.437 J1.356
N3004 X403.557 Y209.1 Z-9.064 I-0.437 J-1.356
N3005 X404.431 Y211.813 Z-10.016 I0.437 J1.356
N3006 X403.557 Y209.1 Z-10.967 I-0.437 J-1.356
N3007 X404.431 Y211.813 Z-11.919 I0.437 J1.356
N3008 X403.557 Y209.1 Z-12.87 I-0.437 J-1.356
N3009 X404.431 Y211.813 Z-13.822 I0.437 J1.356
N3010 X403.557 Y209.1 Z-14.774 I-0.437 J-1.356
N3011 X404.431 Y211.813 Z-15.725 I0.437 J1.356
N3012 X403.557 Y209.1 Z-16.677 I-0.437 J-1.356
N3013 X404.431 Y211.813 Z-17.628 I0.437 J1.356
N3014 X403.557 Y209.1 Z-18.58 I-0.437 J-1.356
N3015 X405.419 Y210.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
N3016 X402.569 I-1.425 F2400
N3017 X405.419 I1.425
( Safe G1 --> G0)
N3018 G0 Z15 F730
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
N3019 Z15 F730
N3020 X401.519 Y259.095 F2800
( Safe G1 --> G0)
N3021 Z5 F730
( MOVEMENT_PLUNGE)
N3022 G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
N3023 G3 X406.469 Y261.818 Z0.19 I2.475 J1.361
N3024 X401.519 Y259.095 Z-0.12 I-2.475 J-1.361
N3025 X406.469 Y261.818 Z-0.43 I2.475 J1.361
N3026 X401.519 Y259.095 Z-0.74 I-2.475 J-1.361
N3027 X406.819 Y260.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
N3028 X401.169 I-2.825 F2400
N3029 X406.819 I2.825
( Safe G1 --> G0)
N3030 G0 Z15 F730
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
N3031 Z15 F730
N3032 X404.431 Y261.813 F2800
N3033 G1 Z4 F2400
( MOVEMENT_PLUNGE)
N3034 Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
N3035 G3 X403.557 Y259.1 Z-1.452 I-0.437 J-1.356
N3036 X404.431 Y261.813 Z-2.403 I0.437 J1.356
N3037 X403.557 Y259.1 Z-3.355 I-0.437 J-1.356
N3038 X404.431 Y261.813 Z-4.306 I0.437 J1.356
N3039 X403.557 Y259.1 Z-5.258 I-0.437 J-1.356
N3040 X404.431 Y261.813 Z-6.209 I0.437 J1.356
N3041 X403.557 Y259.1 Z-7.161 I-0.437 J-1.356
N3042 X404.431 Y261.813 Z-8.113 I0.437 J1.356
N3043 X403.557 Y259.1 Z-9.064 I-0.437 J-1.356
N3044 X404.431 Y261.813 Z-10.016 I0.437 J1.356
N3045 X403.557 Y259.1 Z-10.967 I-0.437 J-1.356
N3046 X404.431 Y261.813 Z-11.919 I0.437 J1.356
N3047 X403.557 Y259.1 Z-12.87 I-0.437 J-1.356
N3048 X404.431 Y261.813 Z-13.822 I0.437 J1.356
N3049 X403.557 Y259.1 Z-14.774 I-0.437 J-1.356
N3050 X404.431 Y261.813 Z-15.725 I0.437 J1.356
N3051 X403.557 Y259.1 Z-16.677 I-0.437 J-1.356
N3052 X404.431 Y261.813 Z-17.628 I0.437 J1.356
N3053 X403.557 Y259.1 Z-18.58 I-0.437 J-1.356
N3054 X405.419 Y260.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
N3055 X402.569 I-1.425 F2400
N3056 X405.419 I1.425
( Safe G1 --> G0)
N3057 G0 Z15 F730
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
N3058 Z15 F730
N3059 X401.519 Y309.095 F2800
( Safe G1 --> G0)
N3060 Z5 F730
( MOVEMENT_PLUNGE)
N3061 G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
N3062 G3 X406.469 Y311.818 Z0.19 I2.475 J1.361
N3063 X401.519 Y309.095 Z-0.12 I-2.475 J-1.361
N3064 X406.469 Y311.818 Z-0.43 I2.475 J1.361
N3065 X401.519 Y309.095 Z-0.74 I-2.475 J-1.361
N3066 X406.819 Y310.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
N3067 X401.169 I-2.825 F2400
N3068 X406.819 I2.825
( Safe G1 --> G0)
N3069 G0 Z15 F730
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
N3070 Z15 F730
N3071 X404.431 Y311.813 F2800
N3072 G1 Z4 F2400
( MOVEMENT_PLUNGE)
N3073 Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
N3074 G3 X403.557 Y309.1 Z-1.452 I-0.437 J-1.356
N3075 X404.431 Y311.813 Z-2.403 I0.437 J1.356
N3076 X403.557 Y309.1 Z-3.355 I-0.437 J-1.356
N3077 X404.431 Y311.813 Z-4.306 I0.437 J1.356
N3078 X403.557 Y309.1 Z-5.258 I-0.437 J-1.356
N3079 X404.431 Y311.813 Z-6.209 I0.437 J1.356
N3080 X403.557 Y309.1 Z-7.161 I-0.437 J-1.356
N3081 X404.431 Y311.813 Z-8.113 I0.437 J1.356
N3082 X403.557 Y309.1 Z-9.064 I-0.437 J-1.356
N3083 X404.431 Y311.813 Z-10.016 I0.437 J1.356
N3084 X403.557 Y309.1 Z-10.967 I-0.437 J-1.356
N3085 X404.431 Y311.813 Z-11.919 I0.437 J1.356
N3086 X403.557 Y309.1 Z-12.87 I-0.437 J-1.356
N3087 X404.431 Y311.813 Z-13.822 I0.437 J1.356
N3088 X403.557 Y309.1 Z-14.774 I-0.437 J-1.356
N3089 X404.431 Y311.813 Z-15.725 I0.437 J1.356
N3090 X403.557 Y309.1 Z-16.677 I-0.437 J-1.356
N3091 X404.431 Y311.813 Z-17.628 I0.437 J1.356
N3092 X403.557 Y309.1 Z-18.58 I-0.437 J-1.356
N3093 X405.419 Y310.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
N3094 X402.569 I-1.425 F2400
N3095 X405.419 I1.425
( Safe G1 --> G0)
N3096 G0 Z15 F730
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
N3097 Z15 F730
N3098 X401.519 Y359.095 F2800
( Safe G1 --> G0)
N3099 Z5 F730
( MOVEMENT_PLUNGE)
N3100 G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
N3101 G3 X406.469 Y361.818 Z0.19 I2.475 J1.361
N3102 X401.519 Y359.095 Z-0.12 I-2.475 J-1.361
N3103 X406.469 Y361.818 Z-0.43 I2.475 J1.361
N3104 X401.519 Y359.095 Z-0.74 I-2.475 J-1.361
N3105 X406.819 Y360.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
N3106 X401.169 I-2.825 F2400
N3107 X406.819 I2.825
( Safe G1 --> G0)
N3108 G0 Z15 F730
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
N3109 Z15 F730
N3110 X404.431 Y361.813 F2800
N3111 G1 Z4 F2400
( MOVEMENT_PLUNGE)
N3112 Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
N3113 G3 X403.557 Y359.1 Z-1.452 I-0.437 J-1.356
N3114 X404.431 Y361.813 Z-2.403 I0.437 J1.356
N3115 X403.557 Y359.1 Z-3.355 I-0.437 J-1.356
N3116 X404.431 Y361.813 Z-4.306 I0.437 J1.356
N3117 X403.557 Y359.1 Z-5.258 I-0.437 J-1.356
N3118 X404.431 Y361.813 Z-6.209 I0.437 J1.356
N3119 X403.557 Y359.1 Z-7.161 I-0.437 J-1.356
N3120 X404.431 Y361.813 Z-8.113 I0.437 J1.356
N3121 X403.557 Y359.1 Z-9.064 I-0.437 J-1.356
N3122 X404.431 Y361.813 Z-10.016 I0.437 J1.356
N3123 X403.557 Y359.1 Z-10.967 I-0.437 J-1.356
N3124 X404.431 Y361.813 Z-11.919 I0.437 J1.356
N3125 X403.557 Y359.1 Z-12.87 I-0.437 J-1.356
N3126 X404.431 Y361.813 Z-13.822 I0.437 J1.356
N3127 X403.557 Y359.1 Z-14.774 I-0.437 J-1.356
N3128 X404.431 Y361.813 Z-15.725 I0.437 J1.356
N3129 X403.557 Y359.1 Z-16.677 I-0.437 J-1.356
N3130 X404.431 Y361.813 Z-17.628 I0.437 J1.356
N3131 X403.557 Y359.1 Z-18.58 I-0.437 J-1.356
N3132 X405.419 Y360.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
N3133 X402.569 I-1.425 F2400
N3134 X405.419 I1.425
( Safe G1 --> G0)
N3135 G0 Z15 F730
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
N3136 Z15 F730
N3137 X401.519 Y409.095 F2800
( Safe G1 --> G0)
N3138 Z5 F730
( MOVEMENT_PLUNGE)
N3139 G1 Z0.5 F600
( MOVEMENT_RAMP_HELIX)
N3140 G3 X406.469 Y411.818 Z0.19 I2.475 J1.361
N3141 X401.519 Y409.095 Z-0.12 I-2.475 J-1.361
N3142 X406.469 Y411.818 Z-0.43 I2.475 J1.361
N3143 X401.519 Y409.095 Z-0.74 I-2.475 J-1.361
N3144 X406.819 Y410.457 Z-1 I2.475 J1.361
( MOVEMENT_CUTTING)
N3145 X401.169 I-2.825 F2400
N3146 X406.819 I2.825
( Safe G1 --> G0)
N3147 G0 Z15 F730
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
N3148 Z15 F730
N3149 X404.431 Y411.813 F2800
N3150 G1 Z4 F2400
( MOVEMENT_PLUNGE)
N3151 Z-0.5 F600
( MOVEMENT_RAMP_HELIX)
N3152 G3 X403.557 Y409.1 Z-1.452 I-0.437 J-1.356
N3153 X404.431 Y411.813 Z-2.403 I0.437 J1.356
N3154 X403.557 Y409.1 Z-3.355 I-0.437 J-1.356
N3155 X404.431 Y411.813 Z-4.306 I0.437 J1.356
N3156 X403.557 Y409.1 Z-5.258 I-0.437 J-1.356
N3157 X404.431 Y411.813 Z-6.209 I0.437 J1.356
N3158 X403.557 Y409.1 Z-7.161 I-0.437 J-1.356
N3159 X404.431 Y411.813 Z-8.113 I0.437 J1.356
N3160 X403.557 Y409.1 Z-9.064 I-0.437 J-1.356
N3161 X404.431 Y411.813 Z-10.016 I0.437 J1.356
N3162 X403.557 Y409.1 Z-10.967 I-0.437 J-1.356
N3163 X404.431 Y411.813 Z-11.919 I0.437 J1.356
N3164 X403.557 Y409.1 Z-12.87 I-0.437 J-1.356
N3165 X404.431 Y411.813 Z-13.822 I0.437 J1.356
N3166 X403.557 Y409.1 Z-14.774 I-0.437 J-1.356
N3167 X404.431 Y411.813 Z-15.725 I0.437 J1.356
N3168 X403.557 Y409.1 Z-16.677 I-0.437 J-1.356
N3169 X404.431 Y411.813 Z-17.628 I0.437 J1.356
N3170 X403.557 Y409.1 Z-18.58 I-0.437 J-1.356
N3171 X405.419 Y410.457 Z-19.15 I0.437 J1.356
( MOVEMENT_CUTTING)
N3172 X402.569 I-1.425 F2400
N3173 X405.419 I1.425
( Safe G1 --> G0)
N3174 G0 Z15 F730
( *** SECTION end ***)
()
( *** STOP begin ***)
( COMMAND_COOLANT_OFF)
( >>> Coolant Channel A: Off)
N3175 M9
( COMMAND_STOP_SPINDLE)
N3176 M5
N3177 M30
( *** STOP end ***)
%
`;