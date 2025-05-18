export default `%
(Fusion CAM 2601.1.37)
( Posts processor: MPCNC v3.0 Beta 1.cps)
( Gcode generated: Sun May 18 05:52:32 2025 GMT)
( Document: Spoilboard v2 v5)
( Setup: Face 2)
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( )
( Ranges Table:)
(   X: Min=382.638 Max=382.638 Size=0)
(   Y: Min=-4.65 Max=435.562 Size=440.212)
(   Z: Min=-0.35 Max=15 Size=15.35)
( )
( Tools Table:)
(  T9 D=50.8 CR=0 - ZMIN=-0.35 - face mill )
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
(   X Min: 382.638 - X Max: 382.638)
(   Y Min: -4.65 - Y Max: 435.562)
(   Z Min: -0.35 - Z Max: 15)
( SafeZ retract level: 5)
( 2D Contour4 - Milling - Tool: 9 -  face mill)
( COMMAND_START_SPINDLE)
( COMMAND_SPINDLE_CLOCKWISE)
( >>> Spindle Speed 16000)
N14 M3 S16000
( COMMAND_COOLANT_ON)
( >>> Coolant Channel A: Air)
N15 M8
( MOVEMENT_CUTTING)
( First G1 --> G0)
N16 G0 Z15 F730
N17 X382.638 Y-4.65 F2800
( Safe G1 --> G0)
N18 Z5 F730
( MOVEMENT_PLUNGE)
N19 G1 Z1 F333
N20 Z-0.35
( MOVEMENT_FINISH_CUTTING)
N21 Y435.562 F2600
( MOVEMENT_CUTTING)
( Safe G1 --> G0)
N22 G0 Z15 F730
( *** SECTION end ***)
()
( *** STOP begin ***)
( COMMAND_COOLANT_OFF)
( >>> Coolant Channel A: Off)
N23 M9
( COMMAND_STOP_SPINDLE)
N24 M5
N25 M30
( *** STOP end ***)
%
`;