export default `%
(Fusion CAM 2601.1.37)
( Posts processor: MPCNC v3.0 Beta 1.cps)
( Gcode generated: Sun May 18 00:07:32 2025 GMT)
( Document: Spoilboard v2 v5)
( Setup: Face 2)
(When using Fusion for Personal Use, the feedrate of rapid)
(moves is reduced to match the feedrate of cutting moves,)
(which can increase machining time. Unrestricted rapid moves)
(are available with a Fusion Subscription.)
( )
( Ranges Table:)
(   X: Min=-27.99 Max=409.038 Size=437.028)
(   Y: Min=4.211 Max=411.077 Size=406.866)
(   Z: Min=-0.3 Max=15 Size=15.3)
( )
( Tools Table:)
(  T9 D=50.8 CR=0 - ZMIN=-0.3 - face mill )
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
(   X Min: -27.99 - X Max: 409.038)
(   Y Min: 4.211 - Y Max: 411.077)
(   Z Min: -0.3 - Z Max: 15)
( SafeZ retract level: 5)
( Face3 2 - Milling - Tool: 9 -  face mill)
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
N17 X0 Y4.211 F2800
( Safe G1 --> G0)
N18 Z5 F730
( MOVEMENT_PLUNGE)
N19 G1 Z-0.35 F333
( MOVEMENT_LEAD_IN)
N20 X0 F2600
( MOVEMENT_FINISH_CUTTING)
N21 X409.038
( MOVEMENT_CUTTING)
( Safe G1 --> G0)
N22 G0 Z5 F730
( Safe G1 --> G0)
N23 X0 Y38.117 F2800
( MOVEMENT_PLUNGE)
N24 G1 Z-0.35 F333
( MOVEMENT_LEAD_IN)
N25 X0 F2600
( MOVEMENT_FINISH_CUTTING)
N26 X409.038
( MOVEMENT_CUTTING)
( Safe G1 --> G0)
N27 G0 Z5 F730
( Safe G1 --> G0)
N28 X0 Y72.022 F2800
( MOVEMENT_PLUNGE)
N29 G1 Z-0.35 F333
( MOVEMENT_LEAD_IN)
N30 X0 F2600
( MOVEMENT_FINISH_CUTTING)
N31 X409.038
( MOVEMENT_CUTTING)
( Safe G1 --> G0)
N32 G0 Z5 F730
( Safe G1 --> G0)
N33 X0 Y105.928 F2800
( MOVEMENT_PLUNGE)
N34 G1 Z-0.35 F333
( MOVEMENT_LEAD_IN)
N35 X0 F2600
( MOVEMENT_FINISH_CUTTING)
N36 X409.038
( MOVEMENT_CUTTING)
( Safe G1 --> G0)
N37 G0 Z5 F730
( Safe G1 --> G0)
N38 X0 Y139.833 F2800
( MOVEMENT_PLUNGE)
N39 G1 Z-0.35 F333
( MOVEMENT_LEAD_IN)
N40 X0 F2600
( MOVEMENT_FINISH_CUTTING)
N41 X409.038
( MOVEMENT_CUTTING)
( Safe G1 --> G0)
N42 G0 Z5 F730
( Safe G1 --> G0)
N43 X0 Y173.739 F2800
( MOVEMENT_PLUNGE)
N44 G1 Z-0.35 F333
( MOVEMENT_LEAD_IN)
N45 X0 F2600
( MOVEMENT_FINISH_CUTTING)
N46 X409.038
( MOVEMENT_CUTTING)
( Safe G1 --> G0)
N47 G0 Z5 F730
( Safe G1 --> G0)
N48 X0 Y207.644 F2800
( MOVEMENT_PLUNGE)
N49 G1 Z-0.35 F333
( MOVEMENT_LEAD_IN)
N50 X0 F2600
( MOVEMENT_FINISH_CUTTING)
N51 X409.038
( MOVEMENT_CUTTING)
( Safe G1 --> G0)
N52 G0 Z5 F730
( Safe G1 --> G0)
N53 X0 Y241.549 F2800
( MOVEMENT_PLUNGE)
N54 G1 Z-0.35 F333
( MOVEMENT_LEAD_IN)
N55 X0 F2600
( MOVEMENT_FINISH_CUTTING)
N56 X409.038
( MOVEMENT_CUTTING)
( Safe G1 --> G0)
N57 G0 Z5 F730
( Safe G1 --> G0)
N58 X0 Y275.455 F2800
( MOVEMENT_PLUNGE)
N59 G1 Z-0.35 F333
( MOVEMENT_LEAD_IN)
N60 X0 F2600
( MOVEMENT_FINISH_CUTTING)
N61 X409.038
( MOVEMENT_CUTTING)
( Safe G1 --> G0)
N62 G0 Z5 F730
( Safe G1 --> G0)
N63 X0 Y309.36 F2800
( MOVEMENT_PLUNGE)
N64 G1 Z-0.35 F333
( MOVEMENT_LEAD_IN)
N65 X0 F2600
( MOVEMENT_FINISH_CUTTING)
N66 X409.038
( MOVEMENT_CUTTING)
( Safe G1 --> G0)
N67 G0 Z5 F730
( Safe G1 --> G0)
N68 X0 Y343.266 F2800
( MOVEMENT_PLUNGE)
N69 G1 Z-0.35 F333
( MOVEMENT_LEAD_IN)
N70 X0 F2600
( MOVEMENT_FINISH_CUTTING)
N71 X409.038
( MOVEMENT_CUTTING)
( Safe G1 --> G0)
N72 G0 Z5 F730
( Safe G1 --> G0)
N73 X0 Y377.171 F2800
( MOVEMENT_PLUNGE)
N74 G1 Z-0.35 F333
( MOVEMENT_LEAD_IN)
N75 X0 F2600
( MOVEMENT_FINISH_CUTTING)
N76 X409.038
( MOVEMENT_CUTTING)
( Safe G1 --> G0)
N77 G0 Z5 F730
( Safe G1 --> G0)
N78 X0 Y411.077 F2800
( MOVEMENT_PLUNGE)
N79 G1 Z-0.35 F333
( MOVEMENT_LEAD_IN)
N80 X0 F2600
( MOVEMENT_FINISH_CUTTING)
N81 X409.038
( MOVEMENT_CUTTING)
( Safe G1 --> G0)
N82 G0 Z15 F730
( *** SECTION end ***)
()
( *** STOP begin ***)
( COMMAND_COOLANT_OFF)
( >>> Coolant Channel A: Off)
N83 M9
( COMMAND_STOP_SPINDLE)
N84 M5
N85 M30
( *** STOP end ***)
%
`;