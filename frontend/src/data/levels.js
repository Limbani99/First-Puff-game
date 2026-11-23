// Level definitions for First Puff - 50 Progressive Casual & Hard Levels
// Progressive river physics, challenging obstacles, and rewarding crew mechanics
// 50 Levels total: 150 Stars possible (3 stars per level)
// Levels 1-22: Progressive learning & river exploration
// Levels 23-50: Hard rapids, counter-moving logs, tight slalom gates & boulder fields

export const CREW_MEMBERS = {
  "hippo": {
    "id": "hippo",
    "name": "Hippo",
    "role": "Pusher",
    "avatar": "🦛",
    "color": "#8b5cf6",
    "bgColor": "bg-purple-500",
    "borderColor": "border-purple-300",
    "direction": "Forward",
    "label": "Forward",
    "description": "Puffs backward to propel the raft forward"
  },
  "penguin": {
    "id": "penguin",
    "name": "Penguin",
    "role": "Brake",
    "avatar": "🐧",
    "color": "#06b6d4",
    "bgColor": "bg-cyan-500",
    "borderColor": "border-cyan-300",
    "direction": "Backward",
    "label": "Brake",
    "description": "Puffs forward to slow down and reverse"
  },
  "frog": {
    "id": "frog",
    "name": "Frog",
    "role": "Steer Right",
    "avatar": "🐸",
    "color": "#22c55e",
    "bgColor": "bg-emerald-500",
    "borderColor": "border-emerald-300",
    "direction": "Right",
    "label": "Right",
    "description": "Puffs left to push the raft right"
  },
  "pig": {
    "id": "pig",
    "name": "Pig",
    "role": "Steer Left",
    "avatar": "🐷",
    "color": "#ec4899",
    "bgColor": "bg-pink-500",
    "borderColor": "border-pink-300",
    "direction": "Left",
    "label": "Left",
    "description": "Puffs right to push the raft left"
  }
};

export const LEVELS = [
  {
    "id": 1,
    "name": "First Puff",
    "targetTime": 20,
    "hint": "Tap the Hippo to move forward!",
    "crewUnlocked": [
      "hippo"
    ],
    "teaches": "Tapping and moving",
    "world": {
      "width": 360,
      "height": 1100,
      "startX": 180,
      "startY": 950,
      "finishX": 180,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 1100,
          "cx": 180,
          "width": 270
        },
        {
          "y": 550,
          "cx": 180,
          "width": 270
        },
        {
          "y": 0,
          "cx": 180,
          "width": 270
        }
      ],
      "obstacles": []
    }
  },
  {
    "id": 2,
    "name": "Wide River",
    "targetTime": 25,
    "hint": "Frog pushes you right.",
    "crewUnlocked": [
      "hippo",
      "frog"
    ],
    "teaches": "Sideways steering",
    "world": {
      "width": 360,
      "height": 1127,
      "startX": 180,
      "startY": 977,
      "finishX": 205,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.98,
      "waypoints": [
        {
          "y": 1127,
          "cx": 180,
          "width": 270
        },
        {
          "y": 564,
          "cx": 180,
          "width": 270
        },
        {
          "y": 0,
          "cx": 180,
          "width": 270
        }
      ],
      "obstacles": []
    }
  },
  {
    "id": 3,
    "name": "Gentle Curve",
    "targetTime": 30,
    "hint": "Use the Pig to go left.",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig"
    ],
    "teaches": "Left and right together",
    "world": {
      "width": 360,
      "height": 1154,
      "startX": 180,
      "startY": 1004,
      "finishX": 155,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.981,
      "waypoints": [
        {
          "y": 1154,
          "cx": 180,
          "width": 270
        },
        {
          "y": 577,
          "cx": 157,
          "width": 270
        },
        {
          "y": 0,
          "cx": 180,
          "width": 270
        }
      ],
      "obstacles": []
    }
  },
  {
    "id": 4,
    "name": "Charge It",
    "targetTime": 25,
    "hint": "Hold the button to charge a big puff!",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig"
    ],
    "teaches": "Hold-to-charge for long pushes",
    "world": {
      "width": 360,
      "height": 1181,
      "startX": 180,
      "startY": 1031,
      "finishX": 180,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.978,
      "waypoints": [
        {
          "y": 1181,
          "cx": 180,
          "width": 270
        },
        {
          "y": 591,
          "cx": 167,
          "width": 270
        },
        {
          "y": 0,
          "cx": 180,
          "width": 270
        }
      ],
      "obstacles": []
    }
  },
  {
    "id": 5,
    "name": "Little Rocks",
    "targetTime": 35,
    "hint": "Rocks slow you down. Go around them.",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig"
    ],
    "teaches": "Avoiding obstacles",
    "world": {
      "width": 360,
      "height": 1208,
      "startX": 180,
      "startY": 1058,
      "finishX": 205,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 1208,
          "cx": 180,
          "width": 270
        },
        {
          "y": 604,
          "cx": 191,
          "width": 270
        },
        {
          "y": 0,
          "cx": 180,
          "width": 270
        }
      ],
      "obstacles": [
        {
          "id": "rock1",
          "type": "rock",
          "x": 215,
          "y": 474,
          "radius": 22
        }
      ]
    }
  },
  {
    "id": 6,
    "name": "Zig Zag",
    "targetTime": 40,
    "hint": "Turn early, then straighten up.",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig"
    ],
    "teaches": "Chaining turns and timing",
    "world": {
      "width": 360,
      "height": 1235,
      "startX": 180,
      "startY": 1085,
      "finishX": 155,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.98,
      "waypoints": [
        {
          "y": 1235,
          "cx": 180,
          "width": 270
        },
        {
          "y": 618,
          "cx": 206,
          "width": 270
        },
        {
          "y": 0,
          "cx": 180,
          "width": 270
        }
      ],
      "obstacles": []
    }
  },
  {
    "id": 7,
    "name": "Slow Logs",
    "targetTime": 40,
    "hint": "Wait for the log to pass.",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig"
    ],
    "teaches": "Timing against moving objects",
    "world": {
      "width": 360,
      "height": 1262,
      "startX": 180,
      "startY": 1112,
      "finishX": 180,
      "finishY": 130,
      "finishRadius": 38,
      "drag": 0.981,
      "waypoints": [
        {
          "y": 1262,
          "cx": 180,
          "width": 270
        },
        {
          "y": 631,
          "cx": 195,
          "width": 270
        },
        {
          "y": 0,
          "cx": 180,
          "width": 270
        }
      ],
      "obstacles": [
        {
          "id": "log1",
          "type": "log",
          "y": 768,
          "width": 74,
          "height": 22,
          "minX": 95,
          "maxX": 255,
          "speed": 50,
          "x": 240,
          "dir": -1
        },
        {
          "id": "rock2",
          "type": "rock",
          "x": 215,
          "y": 494,
          "radius": 20
        }
      ]
    }
  },
  {
    "id": 8,
    "name": "Brake Time",
    "targetTime": 35,
    "hint": "Penguin brakes the raft. Stop on the flag!",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Using the brake",
    "world": {
      "width": 360,
      "height": 1289,
      "startX": 180,
      "startY": 1139,
      "finishX": 205,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.978,
      "waypoints": [
        {
          "y": 1289,
          "cx": 180,
          "width": 270
        },
        {
          "y": 859,
          "cx": 167,
          "width": 270
        },
        {
          "y": 430,
          "cx": 154,
          "width": 270
        },
        {
          "y": 0,
          "cx": 180,
          "width": 270
        }
      ],
      "obstacles": [
        {
          "id": "log1",
          "type": "log",
          "y": 495,
          "width": 78,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 44,
          "x": 95,
          "dir": 1
        }
      ]
    }
  },
  {
    "id": 9,
    "name": "Narrow Gate",
    "targetTime": 45,
    "hint": "Line up before the gate.",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Lining up through gaps",
    "world": {
      "width": 360,
      "height": 1316,
      "startX": 180,
      "startY": 1166,
      "finishX": 155,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 1316,
          "cx": 180,
          "width": 270
        },
        {
          "y": 877,
          "cx": 151,
          "width": 270
        },
        {
          "y": 439,
          "cx": 177,
          "width": 270
        },
        {
          "y": 0,
          "cx": 180,
          "width": 270
        }
      ],
      "obstacles": [
        {
          "id": "rock4",
          "type": "rock",
          "x": 215,
          "y": 950,
          "radius": 22
        },
        {
          "id": "log2",
          "type": "log",
          "y": 804,
          "width": 74,
          "height": 22,
          "minX": 95,
          "maxX": 255,
          "speed": 45,
          "x": 240,
          "dir": -1
        },
        {
          "id": "gate1",
          "type": "gate",
          "y": 658,
          "leftX": 105,
          "rightX": 255,
          "postRadius": 16
        },
        {
          "id": "log3",
          "type": "log",
          "y": 512,
          "width": 74,
          "height": 22,
          "minX": 95,
          "maxX": 255,
          "speed": 45,
          "x": 105,
          "dir": 1
        },
        {
          "id": "rock5",
          "type": "rock",
          "x": 130,
          "y": 366,
          "radius": 22
        }
      ]
    }
  },
  {
    "id": 10,
    "name": "River Crossing",
    "targetTime": 55,
    "hint": "Use all four crew members together!",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Zone 1 Grand Finale",
    "world": {
      "width": 360,
      "height": 1343,
      "startX": 180,
      "startY": 1193,
      "finishX": 180,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.98,
      "waypoints": [
        {
          "y": 1343,
          "cx": 180,
          "width": 270
        },
        {
          "y": 895,
          "cx": 164,
          "width": 270
        },
        {
          "y": 448,
          "cx": 204,
          "width": 270
        },
        {
          "y": 0,
          "cx": 180,
          "width": 270
        }
      ],
      "obstacles": [
        {
          "id": "log1",
          "type": "log",
          "y": 942,
          "width": 70,
          "height": 22,
          "minX": 110,
          "maxX": 230,
          "speed": 42,
          "x": 120,
          "dir": 1
        },
        {
          "id": "rock2",
          "type": "rock",
          "x": 235,
          "y": 762,
          "radius": 20
        },
        {
          "id": "gate1",
          "type": "gate",
          "y": 581,
          "leftX": 105,
          "rightX": 255,
          "postRadius": 16
        },
        {
          "id": "rock3",
          "type": "rock",
          "x": 135,
          "y": 401,
          "radius": 20
        }
      ]
    }
  },
  {
    "id": 11,
    "name": "Reed Strait",
    "targetTime": 35,
    "hint": "Stay centered in the narrow stream.",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Stream centering",
    "world": {
      "width": 360,
      "height": 1370,
      "startX": 180,
      "startY": 1220,
      "finishX": 205,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.981,
      "waypoints": [
        {
          "y": 1370,
          "cx": 180,
          "width": 270
        },
        {
          "y": 913,
          "cx": 194,
          "width": 270
        },
        {
          "y": 457,
          "cx": 208,
          "width": 270
        },
        {
          "y": 0,
          "cx": 180,
          "width": 270
        }
      ],
      "obstacles": [
        {
          "id": "rock2",
          "type": "rock",
          "x": 215,
          "y": 918,
          "radius": 22
        },
        {
          "id": "log1",
          "type": "log",
          "y": 685,
          "width": 77,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 50,
          "x": 265,
          "dir": -1
        },
        {
          "id": "rock3",
          "type": "rock",
          "x": 128,
          "y": 453,
          "radius": 24
        }
      ]
    }
  },
  {
    "id": 12,
    "name": "Pebble Beach",
    "targetTime": 35,
    "hint": "Small rocks ahead! Gentle puffs are key.",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Micro-steering",
    "world": {
      "width": 360,
      "height": 1397,
      "startX": 180,
      "startY": 1247,
      "finishX": 155,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.978,
      "waypoints": [
        {
          "y": 1397,
          "cx": 180,
          "width": 270
        },
        {
          "y": 931,
          "cx": 212,
          "width": 270
        },
        {
          "y": 466,
          "cx": 183,
          "width": 270
        },
        {
          "y": 0,
          "cx": 180,
          "width": 270
        }
      ],
      "obstacles": [
        {
          "id": "log1",
          "type": "log",
          "y": 938,
          "width": 77,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 52,
          "x": 95,
          "dir": 1
        },
        {
          "id": "rock3",
          "type": "rock",
          "x": 215,
          "y": 699,
          "radius": 22
        },
        {
          "id": "log2",
          "type": "log",
          "y": 459,
          "width": 77,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 52,
          "x": 265,
          "dir": -1
        }
      ]
    }
  },
  {
    "id": 13,
    "name": "Twin Gates",
    "targetTime": 40,
    "hint": "Pass cleanly through two wooden gates.",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Successive gate navigation",
    "world": {
      "width": 360,
      "height": 1424,
      "startX": 180,
      "startY": 1274,
      "finishX": 180,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 1424,
          "cx": 180,
          "width": 270
        },
        {
          "y": 949,
          "cx": 197,
          "width": 270
        },
        {
          "y": 475,
          "cx": 153,
          "width": 270
        },
        {
          "y": 0,
          "cx": 180,
          "width": 270
        }
      ],
      "obstacles": [
        {
          "id": "gate1",
          "type": "gate",
          "y": 1007,
          "leftX": 105,
          "rightX": 255,
          "postRadius": 16
        },
        {
          "id": "log2",
          "type": "log",
          "y": 810,
          "width": 74,
          "height": 22,
          "minX": 95,
          "maxX": 255,
          "speed": 50,
          "x": 105,
          "dir": 1
        },
        {
          "id": "gate2",
          "type": "gate",
          "y": 614,
          "leftX": 105,
          "rightX": 255,
          "postRadius": 16
        },
        {
          "id": "rock4",
          "type": "rock",
          "x": 135,
          "y": 417,
          "radius": 22
        }
      ]
    }
  },
  {
    "id": 14,
    "name": "Log Drift",
    "targetTime": 40,
    "hint": "Watch both logs move before puffing.",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Double moving obstacles",
    "world": {
      "width": 360,
      "height": 1451,
      "startX": 180,
      "startY": 1301,
      "finishX": 205,
      "finishY": 130,
      "finishRadius": 38,
      "drag": 0.98,
      "waypoints": [
        {
          "y": 1451,
          "cx": 180,
          "width": 270
        },
        {
          "y": 967,
          "cx": 164,
          "width": 270
        },
        {
          "y": 484,
          "cx": 149,
          "width": 270
        },
        {
          "y": 0,
          "cx": 180,
          "width": 270
        }
      ],
      "obstacles": [
        {
          "id": "log1",
          "type": "log",
          "y": 894,
          "width": 74,
          "height": 22,
          "minX": 95,
          "maxX": 255,
          "speed": 52,
          "x": 105,
          "dir": 1
        },
        {
          "id": "rock2",
          "type": "rock",
          "x": 215,
          "y": 557,
          "radius": 22
        }
      ]
    }
  },
  {
    "id": 15,
    "name": "The Horseshoe",
    "targetTime": 45,
    "hint": "A long right turn then hard left bend.",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Long sweeping turns",
    "world": {
      "width": 360,
      "height": 1478,
      "startX": 180,
      "startY": 1328,
      "finishX": 155,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.981,
      "waypoints": [
        {
          "y": 1478,
          "cx": 180,
          "width": 270
        },
        {
          "y": 985,
          "cx": 145,
          "width": 270
        },
        {
          "y": 493,
          "cx": 177,
          "width": 270
        },
        {
          "y": 0,
          "cx": 180,
          "width": 270
        }
      ],
      "obstacles": [
        {
          "id": "rock4",
          "type": "rock",
          "x": 215,
          "y": 1110,
          "radius": 22
        },
        {
          "id": "log1",
          "type": "log",
          "y": 961,
          "width": 74,
          "height": 22,
          "minX": 95,
          "maxX": 255,
          "speed": 52,
          "x": 240,
          "dir": -1
        },
        {
          "id": "rock5",
          "type": "rock",
          "x": 128,
          "y": 813,
          "radius": 22
        },
        {
          "id": "log2",
          "type": "log",
          "y": 665,
          "width": 74,
          "height": 22,
          "minX": 95,
          "maxX": 255,
          "speed": 52,
          "x": 105,
          "dir": 1
        },
        {
          "id": "rock6",
          "type": "rock",
          "x": 235,
          "y": 517,
          "radius": 22
        },
        {
          "id": "log3",
          "type": "log",
          "y": 368,
          "width": 74,
          "height": 22,
          "minX": 95,
          "maxX": 255,
          "speed": 52,
          "x": 240,
          "dir": -1
        }
      ]
    }
  },
  {
    "id": 16,
    "name": "Boulder Alley",
    "targetTime": 40,
    "hint": "Alternate left and right between boulders.",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Slalom maneuvers",
    "world": {
      "width": 360,
      "height": 1505,
      "startX": 180,
      "startY": 1355,
      "finishX": 180,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.978,
      "waypoints": [
        {
          "y": 1505,
          "cx": 180,
          "width": 264
        },
        {
          "y": 1129,
          "cx": 161,
          "width": 264
        },
        {
          "y": 753,
          "cx": 209,
          "width": 264
        },
        {
          "y": 376,
          "cx": 203,
          "width": 264
        },
        {
          "y": 0,
          "cx": 180,
          "width": 264
        }
      ],
      "obstacles": [
        {
          "id": "rock3",
          "type": "rock",
          "x": 215,
          "y": 1072,
          "radius": 22
        },
        {
          "id": "log1",
          "type": "log",
          "y": 859,
          "width": 74,
          "height": 22,
          "minX": 95,
          "maxX": 255,
          "speed": 44,
          "x": 105,
          "dir": 1
        },
        {
          "id": "rock4",
          "type": "rock",
          "x": 128,
          "y": 646,
          "radius": 22
        },
        {
          "id": "log2",
          "type": "log",
          "y": 433,
          "width": 74,
          "height": 22,
          "minX": 95,
          "maxX": 255,
          "speed": 44,
          "x": 240,
          "dir": -1
        }
      ]
    }
  },
  {
    "id": 17,
    "name": "Fast Stream",
    "targetTime": 35,
    "hint": "Charge Hippo to speed through straightaways.",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "High-speed cruising",
    "world": {
      "width": 360,
      "height": 1532,
      "startX": 180,
      "startY": 1382,
      "finishX": 205,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 1532,
          "cx": 180,
          "width": 258
        },
        {
          "y": 1149,
          "cx": 198,
          "width": 258
        },
        {
          "y": 766,
          "cx": 214,
          "width": 258
        },
        {
          "y": 383,
          "cx": 167,
          "width": 258
        },
        {
          "y": 0,
          "cx": 180,
          "width": 258
        }
      ],
      "obstacles": [
        {
          "id": "rock3",
          "type": "rock",
          "x": 215,
          "y": 1130,
          "radius": 22
        },
        {
          "id": "log1",
          "type": "log",
          "y": 948,
          "width": 77,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 46,
          "x": 265,
          "dir": -1
        },
        {
          "id": "rock4",
          "type": "rock",
          "x": 128,
          "y": 766,
          "radius": 24
        },
        {
          "id": "log2",
          "type": "log",
          "y": 584,
          "width": 77,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 46,
          "x": 95,
          "dir": 1
        },
        {
          "id": "rock5",
          "type": "rock",
          "x": 249,
          "y": 402,
          "radius": 26
        }
      ]
    }
  },
  {
    "id": 18,
    "name": "Criss-Cross",
    "targetTime": 45,
    "hint": "Logs moving in opposite directions!",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Opposing log timing",
    "world": {
      "width": 360,
      "height": 1559,
      "startX": 180,
      "startY": 1409,
      "finishX": 155,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.98,
      "waypoints": [
        {
          "y": 1559,
          "cx": 180,
          "width": 252
        },
        {
          "y": 1169,
          "cx": 218,
          "width": 252
        },
        {
          "y": 780,
          "cx": 183,
          "width": 252
        },
        {
          "y": 390,
          "cx": 142,
          "width": 252
        },
        {
          "y": 0,
          "cx": 180,
          "width": 252
        }
      ],
      "obstacles": [
        {
          "id": "log2",
          "type": "log",
          "y": 1179,
          "width": 74,
          "height": 22,
          "minX": 95,
          "maxX": 255,
          "speed": 46,
          "x": 105,
          "dir": 1
        },
        {
          "id": "rock5",
          "type": "rock",
          "x": 215,
          "y": 1019,
          "radius": 22
        },
        {
          "id": "gate1",
          "type": "gate",
          "y": 859,
          "leftX": 105,
          "rightX": 255,
          "postRadius": 16
        },
        {
          "id": "log3",
          "type": "log",
          "y": 700,
          "width": 74,
          "height": 22,
          "minX": 95,
          "maxX": 255,
          "speed": 46,
          "x": 240,
          "dir": -1
        },
        {
          "id": "rock6",
          "type": "rock",
          "x": 128,
          "y": 540,
          "radius": 22
        },
        {
          "id": "log4",
          "type": "log",
          "y": 380,
          "width": 74,
          "height": 22,
          "minX": 95,
          "maxX": 255,
          "speed": 46,
          "x": 105,
          "dir": 1
        }
      ]
    }
  },
  {
    "id": 19,
    "name": "The Funnel",
    "targetTime": 40,
    "hint": "River narrows as you approach the flag.",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Funnel compression",
    "world": {
      "width": 360,
      "height": 1586,
      "startX": 180,
      "startY": 1436,
      "finishX": 180,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.981,
      "waypoints": [
        {
          "y": 1586,
          "cx": 180,
          "width": 246
        },
        {
          "y": 1190,
          "cx": 200,
          "width": 246
        },
        {
          "y": 793,
          "cx": 148,
          "width": 246
        },
        {
          "y": 397,
          "cx": 155,
          "width": 246
        },
        {
          "y": 0,
          "cx": 180,
          "width": 246
        }
      ],
      "obstacles": [
        {
          "id": "rock3",
          "type": "rock",
          "x": 215,
          "y": 1175,
          "radius": 22
        },
        {
          "id": "log1",
          "type": "log",
          "y": 984,
          "width": 77,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 50,
          "x": 265,
          "dir": -1
        },
        {
          "id": "rock4",
          "type": "rock",
          "x": 128,
          "y": 793,
          "radius": 24
        },
        {
          "id": "log2",
          "type": "log",
          "y": 602,
          "width": 77,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 50,
          "x": 95,
          "dir": 1
        },
        {
          "id": "rock5",
          "type": "rock",
          "x": 249,
          "y": 411,
          "radius": 26
        }
      ]
    }
  },
  {
    "id": 20,
    "name": "Rapids Rush",
    "targetTime": 55,
    "hint": "Zone 2 finale! Combine every skill.",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Zone 2 Grand Finale",
    "world": {
      "width": 360,
      "height": 1613,
      "startX": 180,
      "startY": 1463,
      "finishX": 205,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.978,
      "waypoints": [
        {
          "y": 1613,
          "cx": 180,
          "width": 270
        },
        {
          "y": 1210,
          "cx": 161,
          "width": 270
        },
        {
          "y": 807,
          "cx": 144,
          "width": 270
        },
        {
          "y": 403,
          "cx": 194,
          "width": 270
        },
        {
          "y": 0,
          "cx": 180,
          "width": 270
        }
      ],
      "obstacles": [
        {
          "id": "rock4",
          "type": "rock",
          "x": 215,
          "y": 1198,
          "radius": 22
        },
        {
          "id": "log2",
          "type": "log",
          "y": 1002,
          "width": 74,
          "height": 22,
          "minX": 95,
          "maxX": 255,
          "speed": 50,
          "x": 105,
          "dir": 1
        },
        {
          "id": "gate1",
          "type": "gate",
          "y": 807,
          "leftX": 105,
          "rightX": 255,
          "postRadius": 16
        },
        {
          "id": "rock5",
          "type": "rock",
          "x": 128,
          "y": 611,
          "radius": 22
        },
        {
          "id": "log3",
          "type": "log",
          "y": 416,
          "width": 74,
          "height": 22,
          "minX": 95,
          "maxX": 255,
          "speed": 50,
          "x": 240,
          "dir": -1
        }
      ]
    }
  },
  {
    "id": 21,
    "name": "Mossy Banks",
    "targetTime": 40,
    "hint": "Winding river with grassy shores.",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Smooth bank drifting",
    "world": {
      "width": 360,
      "height": 1640,
      "startX": 180,
      "startY": 1490,
      "finishX": 155,
      "finishY": 130,
      "finishRadius": 38,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 1640,
          "cx": 180,
          "width": 264
        },
        {
          "y": 1230,
          "cx": 139,
          "width": 264
        },
        {
          "y": 820,
          "cx": 177,
          "width": 264
        },
        {
          "y": 410,
          "cx": 221,
          "width": 264
        },
        {
          "y": 0,
          "cx": 180,
          "width": 264
        }
      ],
      "obstacles": [
        {
          "id": "rock4",
          "type": "rock",
          "x": 215,
          "y": 1270,
          "radius": 22
        },
        {
          "id": "log1",
          "type": "log",
          "y": 1120,
          "width": 76,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 54,
          "x": 265,
          "dir": -1
        },
        {
          "id": "rock5",
          "type": "rock",
          "x": 128,
          "y": 970,
          "radius": 24
        },
        {
          "id": "log2",
          "type": "log",
          "y": 820,
          "width": 76,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 54,
          "x": 95,
          "dir": 1
        },
        {
          "id": "rock6",
          "type": "rock",
          "x": 249,
          "y": 670,
          "radius": 26
        },
        {
          "id": "log3",
          "type": "log",
          "y": 520,
          "width": 76,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 54,
          "x": 265,
          "dir": -1
        },
        {
          "id": "rock7",
          "type": "rock",
          "x": 139,
          "y": 370,
          "radius": 22
        }
      ]
    }
  },
  {
    "id": 22,
    "name": "Triple Gates",
    "targetTime": 45,
    "hint": "Three gates in a row. Maintain your line.",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Linear precision",
    "world": {
      "width": 360,
      "height": 1667,
      "startX": 180,
      "startY": 1517,
      "finishX": 180,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.98,
      "waypoints": [
        {
          "y": 1667,
          "cx": 180,
          "width": 258
        },
        {
          "y": 1250,
          "cx": 159,
          "width": 258
        },
        {
          "y": 834,
          "cx": 215,
          "width": 258
        },
        {
          "y": 417,
          "cx": 206,
          "width": 258
        },
        {
          "y": 0,
          "cx": 180,
          "width": 258
        }
      ],
      "obstacles": [
        {
          "id": "rock5",
          "type": "rock",
          "x": 215,
          "y": 1294,
          "radius": 22
        },
        {
          "id": "gate1",
          "type": "gate",
          "y": 1140,
          "leftX": 105,
          "rightX": 255,
          "postRadius": 16
        },
        {
          "id": "log3",
          "type": "log",
          "y": 987,
          "width": 74,
          "height": 22,
          "minX": 95,
          "maxX": 255,
          "speed": 52,
          "x": 105,
          "dir": 1
        },
        {
          "id": "gate2",
          "type": "gate",
          "y": 834,
          "leftX": 105,
          "rightX": 255,
          "postRadius": 16
        },
        {
          "id": "rock6",
          "type": "rock",
          "x": 128,
          "y": 680,
          "radius": 22
        },
        {
          "id": "gate3",
          "type": "gate",
          "y": 527,
          "leftX": 105,
          "rightX": 255,
          "postRadius": 16
        },
        {
          "id": "rock7",
          "type": "rock",
          "x": 235,
          "y": 373,
          "radius": 22
        }
      ]
    }
  },
  {
    "id": 23,
    "name": "Timber Flume Extreme",
    "targetTime": 42,
    "hint": "Logs move fast here! Tap Penguin to brake before timing your dash.",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "High-speed log timing",
    "world": {
      "width": 360,
      "height": 1750,
      "startX": 180,
      "startY": 1600,
      "finishX": 180,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.983,
      "waypoints": [
        {
          "y": 1750,
          "cx": 180,
          "width": 190
        },
        {
          "y": 1458,
          "cx": 208,
          "width": 190
        },
        {
          "y": 1167,
          "cx": 152,
          "width": 190
        },
        {
          "y": 875,
          "cx": 208,
          "width": 182
        },
        {
          "y": 583,
          "cx": 152,
          "width": 182
        },
        {
          "y": 292,
          "cx": 208,
          "width": 190
        },
        {
          "y": 0,
          "cx": 180,
          "width": 190
        }
      ],
      "obstacles": [
        {
          "id": "rock_6",
          "type": "rock",
          "x": 251,
          "y": 1429,
          "radius": 21
        },
        {
          "id": "log_2",
          "type": "log",
          "y": 1328,
          "width": 74,
          "height": 22,
          "minX": 114,
          "maxX": 214,
          "speed": 90,
          "x": 214,
          "dir": -1
        },
        {
          "id": "rock_7",
          "type": "rock",
          "x": 129,
          "y": 1228,
          "radius": 23
        },
        {
          "id": "rock_8",
          "type": "rock",
          "x": 202,
          "y": 1127,
          "radius": 18
        },
        {
          "id": "log_3",
          "type": "log",
          "y": 1026,
          "width": 74,
          "height": 22,
          "minX": 132,
          "maxX": 228,
          "speed": 83,
          "x": 132,
          "dir": 1
        },
        {
          "id": "rock_9",
          "type": "rock",
          "x": 140,
          "y": 925,
          "radius": 21
        },
        {
          "id": "gate_1",
          "type": "gate",
          "y": 825,
          "leftX": 144,
          "rightX": 236,
          "postRadius": 11
        },
        {
          "id": "log_4",
          "type": "log",
          "y": 724,
          "width": 74,
          "height": 22,
          "minX": 131,
          "maxX": 223,
          "speed": 96,
          "x": 223,
          "dir": -1
        },
        {
          "id": "rock_10",
          "type": "rock",
          "x": 234,
          "y": 623,
          "radius": 23
        },
        {
          "id": "rock_11",
          "type": "rock",
          "x": 138,
          "y": 522,
          "radius": 18
        },
        {
          "id": "log_5",
          "type": "log",
          "y": 422,
          "width": 74,
          "height": 22,
          "minX": 120,
          "maxX": 214,
          "speed": 89,
          "x": 120,
          "dir": 1
        },
        {
          "id": "rock_12",
          "type": "rock",
          "x": 214,
          "y": 321,
          "radius": 21
        }
      ]
    }
  },
  {
    "id": 24,
    "name": "Serpent Chicanes",
    "targetTime": 44,
    "hint": "Sharp bends ahead. Steer hard with Pig and Frog around the rock apex.",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Apex cornering under pressure",
    "world": {
      "width": 360,
      "height": 1780,
      "startX": 180,
      "startY": 1630,
      "finishX": 180,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.983,
      "waypoints": [
        {
          "y": 1780,
          "cx": 180,
          "width": 185
        },
        {
          "y": 1483,
          "cx": 222,
          "width": 185
        },
        {
          "y": 1187,
          "cx": 138,
          "width": 185
        },
        {
          "y": 890,
          "cx": 222,
          "width": 177
        },
        {
          "y": 593,
          "cx": 138,
          "width": 177
        },
        {
          "y": 297,
          "cx": 222,
          "width": 185
        },
        {
          "y": 0,
          "cx": 180,
          "width": 185
        }
      ],
      "obstacles": [
        {
          "id": "rock_5",
          "type": "rock",
          "x": 263,
          "y": 1464,
          "radius": 21
        },
        {
          "id": "rock_6",
          "type": "rock",
          "x": 135,
          "y": 1369,
          "radius": 23
        },
        {
          "id": "log_2",
          "type": "log",
          "y": 1273,
          "width": 74,
          "height": 22,
          "minX": 91,
          "maxX": 186,
          "speed": 90,
          "x": 186,
          "dir": -1
        },
        {
          "id": "rock_7",
          "type": "rock",
          "x": 173,
          "y": 1177,
          "radius": 18
        },
        {
          "id": "rock_8",
          "type": "rock",
          "x": 133,
          "y": 1081,
          "radius": 21
        },
        {
          "id": "log_3",
          "type": "log",
          "y": 986,
          "width": 74,
          "height": 22,
          "minX": 165,
          "maxX": 253,
          "speed": 83,
          "x": 165,
          "dir": 1
        },
        {
          "id": "gate_1",
          "type": "gate",
          "y": 890,
          "leftX": 157,
          "rightX": 249,
          "postRadius": 11
        },
        {
          "id": "rock_9",
          "type": "rock",
          "x": 261,
          "y": 794,
          "radius": 23
        },
        {
          "id": "rock_10",
          "type": "rock",
          "x": 154,
          "y": 699,
          "radius": 18
        },
        {
          "id": "rock_11",
          "type": "rock",
          "x": 170,
          "y": 603,
          "radius": 21
        },
        {
          "id": "log_4",
          "type": "log",
          "y": 507,
          "width": 74,
          "height": 22,
          "minX": 113,
          "maxX": 202,
          "speed": 96,
          "x": 202,
          "dir": -1
        },
        {
          "id": "rock_12",
          "type": "rock",
          "x": 115,
          "y": 411,
          "radius": 23
        },
        {
          "id": "rock_13",
          "type": "rock",
          "x": 267,
          "y": 316,
          "radius": 18
        }
      ]
    }
  },
  {
    "id": 25,
    "name": "The Boulder Gauntlet",
    "targetTime": 45,
    "hint": "14 boulders choke the river! Weave left and right without panicking.",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Dense boulder navigation",
    "world": {
      "width": 360,
      "height": 1820,
      "startX": 180,
      "startY": 1670,
      "finishX": 180,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.984,
      "waypoints": [
        {
          "y": 1820,
          "cx": 180,
          "width": 180
        },
        {
          "y": 1517,
          "cx": 205,
          "width": 180
        },
        {
          "y": 1213,
          "cx": 155,
          "width": 180
        },
        {
          "y": 910,
          "cx": 205,
          "width": 172
        },
        {
          "y": 607,
          "cx": 155,
          "width": 172
        },
        {
          "y": 303,
          "cx": 205,
          "width": 180
        },
        {
          "y": 0,
          "cx": 180,
          "width": 180
        }
      ],
      "obstacles": [
        {
          "id": "rock_4",
          "type": "rock",
          "x": 257,
          "y": 1514,
          "radius": 21
        },
        {
          "id": "rock_5",
          "type": "rock",
          "x": 154,
          "y": 1428,
          "radius": 23
        },
        {
          "id": "rock_6",
          "type": "rock",
          "x": 188,
          "y": 1341,
          "radius": 18
        },
        {
          "id": "rock_7",
          "type": "rock",
          "x": 108,
          "y": 1255,
          "radius": 21
        },
        {
          "id": "log_2",
          "type": "log",
          "y": 1169,
          "width": 74,
          "height": 22,
          "minX": 130,
          "maxX": 217,
          "speed": 90,
          "x": 217,
          "dir": -1
        },
        {
          "id": "rock_8",
          "type": "rock",
          "x": 235,
          "y": 1083,
          "radius": 23
        },
        {
          "id": "rock_9",
          "type": "rock",
          "x": 176,
          "y": 996,
          "radius": 18
        },
        {
          "id": "gate_1",
          "type": "gate",
          "y": 910,
          "leftX": 141,
          "rightX": 233,
          "postRadius": 11
        },
        {
          "id": "rock_10",
          "type": "rock",
          "x": 220,
          "y": 824,
          "radius": 21
        },
        {
          "id": "rock_11",
          "type": "rock",
          "x": 123,
          "y": 738,
          "radius": 23
        },
        {
          "id": "log_3",
          "type": "log",
          "y": 651,
          "width": 72,
          "height": 22,
          "minX": 128,
          "maxX": 212,
          "speed": 83,
          "x": 128,
          "dir": 1
        },
        {
          "id": "rock_12",
          "type": "rock",
          "x": 220,
          "y": 565,
          "radius": 18
        },
        {
          "id": "rock_13",
          "type": "rock",
          "x": 144,
          "y": 479,
          "radius": 21
        },
        {
          "id": "rock_14",
          "type": "rock",
          "x": 206,
          "y": 393,
          "radius": 23
        },
        {
          "id": "rock_15",
          "type": "rock",
          "x": 141,
          "y": 306,
          "radius": 18
        }
      ]
    }
  },
  {
    "id": 26,
    "name": "Twin Log Crossfire",
    "targetTime": 46,
    "hint": "Paired logs scissor across the river. Wait for them to open before bursting through.",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Scissor log evasion",
    "world": {
      "width": 360,
      "height": 1850,
      "startX": 180,
      "startY": 1700,
      "finishX": 180,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.984,
      "waypoints": [
        {
          "y": 1850,
          "cx": 180,
          "width": 180
        },
        {
          "y": 1542,
          "cx": 210,
          "width": 180
        },
        {
          "y": 1233,
          "cx": 150,
          "width": 180
        },
        {
          "y": 925,
          "cx": 210,
          "width": 172
        },
        {
          "y": 617,
          "cx": 150,
          "width": 172
        },
        {
          "y": 308,
          "cx": 210,
          "width": 180
        },
        {
          "y": 0,
          "cx": 180,
          "width": 180
        }
      ],
      "obstacles": [
        {
          "id": "rock_7",
          "type": "rock",
          "x": 252,
          "y": 1536,
          "radius": 21
        },
        {
          "id": "log_2",
          "type": "log",
          "y": 1442,
          "width": 74,
          "height": 22,
          "minX": 128,
          "maxX": 218,
          "speed": 95,
          "x": 218,
          "dir": -1
        },
        {
          "id": "rock_8",
          "type": "rock",
          "x": 136,
          "y": 1348,
          "radius": 23
        },
        {
          "id": "log_3",
          "type": "log",
          "y": 1254,
          "width": 74,
          "height": 22,
          "minX": 118,
          "maxX": 206,
          "speed": 88,
          "x": 118,
          "dir": 1
        },
        {
          "id": "rock_9",
          "type": "rock",
          "x": 190,
          "y": 1160,
          "radius": 18
        },
        {
          "id": "rock_10",
          "type": "rock",
          "x": 144,
          "y": 1066,
          "radius": 21
        },
        {
          "id": "gate_1",
          "type": "gate",
          "y": 972,
          "leftX": 146,
          "rightX": 238,
          "postRadius": 11
        },
        {
          "id": "rock_11",
          "type": "rock",
          "x": 247,
          "y": 878,
          "radius": 23
        },
        {
          "id": "log_4",
          "type": "log",
          "y": 784,
          "width": 72,
          "height": 22,
          "minX": 155,
          "maxX": 239,
          "speed": 101,
          "x": 239,
          "dir": -1
        },
        {
          "id": "log_5",
          "type": "log",
          "y": 690,
          "width": 72,
          "height": 22,
          "minX": 126,
          "maxX": 210,
          "speed": 94,
          "x": 126,
          "dir": 1
        },
        {
          "id": "rock_12",
          "type": "rock",
          "x": 137,
          "y": 596,
          "radius": 18
        },
        {
          "id": "rock_13",
          "type": "rock",
          "x": 190,
          "y": 502,
          "radius": 21
        },
        {
          "id": "log_6",
          "type": "log",
          "y": 408,
          "width": 74,
          "height": 22,
          "minX": 143,
          "maxX": 230,
          "speed": 87,
          "x": 230,
          "dir": -1
        },
        {
          "id": "rock_14",
          "type": "rock",
          "x": 143,
          "y": 314,
          "radius": 23
        }
      ]
    }
  },
  {
    "id": 27,
    "name": "Slalom Alley",
    "targetTime": 48,
    "hint": "Three offset gates in rapid succession. Keep your raft centered!",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Triple gate slalom",
    "world": {
      "width": 360,
      "height": 1880,
      "startX": 180,
      "startY": 1730,
      "finishX": 180,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.985,
      "waypoints": [
        {
          "y": 1880,
          "cx": 180,
          "width": 180
        },
        {
          "y": 1567,
          "cx": 215,
          "width": 180
        },
        {
          "y": 1253,
          "cx": 145,
          "width": 180
        },
        {
          "y": 940,
          "cx": 215,
          "width": 172
        },
        {
          "y": 627,
          "cx": 145,
          "width": 172
        },
        {
          "y": 313,
          "cx": 215,
          "width": 180
        },
        {
          "y": 0,
          "cx": 180,
          "width": 180
        }
      ],
      "obstacles": [
        {
          "id": "rock_7",
          "type": "rock",
          "x": 255,
          "y": 1564,
          "radius": 21
        },
        {
          "id": "rock_8",
          "type": "rock",
          "x": 139,
          "y": 1468,
          "radius": 23
        },
        {
          "id": "gate_1",
          "type": "gate",
          "y": 1372,
          "leftX": 90,
          "rightX": 182,
          "postRadius": 11
        },
        {
          "id": "log_4",
          "type": "log",
          "y": 1276,
          "width": 74,
          "height": 22,
          "minX": 105,
          "maxX": 195,
          "speed": 95,
          "x": 195,
          "dir": -1
        },
        {
          "id": "rock_9",
          "type": "rock",
          "x": 188,
          "y": 1180,
          "radius": 18
        },
        {
          "id": "rock_10",
          "type": "rock",
          "x": 147,
          "y": 1084,
          "radius": 21
        },
        {
          "id": "gate_2",
          "type": "gate",
          "y": 988,
          "leftX": 183,
          "rightX": 275,
          "postRadius": 11
        },
        {
          "id": "log_5",
          "type": "log",
          "y": 892,
          "width": 73,
          "height": 22,
          "minX": 163,
          "maxX": 247,
          "speed": 88,
          "x": 163,
          "dir": 1
        },
        {
          "id": "rock_11",
          "type": "rock",
          "x": 249,
          "y": 796,
          "radius": 23
        },
        {
          "id": "rock_12",
          "type": "rock",
          "x": 133,
          "y": 700,
          "radius": 18
        },
        {
          "id": "gate_3",
          "type": "gate",
          "y": 604,
          "leftX": 111,
          "rightX": 203,
          "postRadius": 11
        },
        {
          "id": "rock_13",
          "type": "rock",
          "x": 191,
          "y": 508,
          "radius": 21
        },
        {
          "id": "log_6",
          "type": "log",
          "y": 412,
          "width": 73,
          "height": 22,
          "minX": 126,
          "maxX": 212,
          "speed": 101,
          "x": 212,
          "dir": -1
        },
        {
          "id": "rock_14",
          "type": "rock",
          "x": 146,
          "y": 316,
          "radius": 23
        }
      ]
    }
  },
  {
    "id": 28,
    "name": "Split Bayou",
    "targetTime": 50,
    "hint": "Island boulders divide the stream. Pick a side early and hold your line.",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Forked channel commitment",
    "world": {
      "width": 360,
      "height": 1920,
      "startX": 180,
      "startY": 1770,
      "finishX": 180,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.985,
      "waypoints": [
        {
          "y": 1920,
          "cx": 180,
          "width": 190
        },
        {
          "y": 1600,
          "cx": 215,
          "width": 190
        },
        {
          "y": 1280,
          "cx": 145,
          "width": 190
        },
        {
          "y": 960,
          "cx": 215,
          "width": 182
        },
        {
          "y": 640,
          "cx": 145,
          "width": 182
        },
        {
          "y": 320,
          "cx": 215,
          "width": 190
        },
        {
          "y": 0,
          "cx": 180,
          "width": 190
        }
      ],
      "obstacles": [
        {
          "id": "rock_7",
          "type": "rock",
          "x": 268,
          "y": 1613,
          "radius": 21
        },
        {
          "id": "rock_8",
          "type": "rock",
          "x": 147,
          "y": 1526,
          "radius": 23
        },
        {
          "id": "log_3",
          "type": "log",
          "y": 1439,
          "width": 74,
          "height": 22,
          "minX": 113,
          "maxX": 213,
          "speed": 97,
          "x": 213,
          "dir": -1
        },
        {
          "id": "rock_9",
          "type": "rock",
          "x": 170,
          "y": 1352,
          "radius": 18
        },
        {
          "id": "gate_1",
          "type": "gate",
          "y": 1265,
          "leftX": 102,
          "rightX": 194,
          "postRadius": 11
        },
        {
          "id": "rock_10",
          "type": "rock",
          "x": 115,
          "y": 1178,
          "radius": 21
        },
        {
          "id": "log_4",
          "type": "log",
          "y": 1091,
          "width": 74,
          "height": 22,
          "minX": 132,
          "maxX": 228,
          "speed": 90,
          "x": 132,
          "dir": 1
        },
        {
          "id": "rock_11",
          "type": "rock",
          "x": 260,
          "y": 1004,
          "radius": 23
        },
        {
          "id": "rock_12",
          "type": "rock",
          "x": 172,
          "y": 916,
          "radius": 18
        },
        {
          "id": "log_5",
          "type": "log",
          "y": 829,
          "width": 74,
          "height": 22,
          "minX": 129,
          "maxX": 221,
          "speed": 103,
          "x": 221,
          "dir": -1
        },
        {
          "id": "rock_13",
          "type": "rock",
          "x": 195,
          "y": 742,
          "radius": 21
        },
        {
          "id": "gate_2",
          "type": "gate",
          "y": 655,
          "leftX": 130,
          "rightX": 222,
          "postRadius": 11
        },
        {
          "id": "rock_14",
          "type": "rock",
          "x": 94,
          "y": 568,
          "radius": 23
        },
        {
          "id": "log_6",
          "type": "log",
          "y": 481,
          "width": 74,
          "height": 22,
          "minX": 120,
          "maxX": 215,
          "speed": 96,
          "x": 120,
          "dir": 1
        },
        {
          "id": "rock_15",
          "type": "rock",
          "x": 242,
          "y": 394,
          "radius": 18
        },
        {
          "id": "rock_16",
          "type": "rock",
          "x": 186,
          "y": 307,
          "radius": 21
        }
      ]
    }
  },
  {
    "id": 29,
    "name": "Log Scissor Trap",
    "targetTime": 50,
    "hint": "Double scissors! Reverse with Penguin if you mistime your entry.",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Emergency reverse recovery",
    "world": {
      "width": 360,
      "height": 1950,
      "startX": 180,
      "startY": 1800,
      "finishX": 180,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.985,
      "waypoints": [
        {
          "y": 1950,
          "cx": 180,
          "width": 175
        },
        {
          "y": 1625,
          "cx": 210,
          "width": 175
        },
        {
          "y": 1300,
          "cx": 150,
          "width": 175
        },
        {
          "y": 975,
          "cx": 210,
          "width": 167
        },
        {
          "y": 650,
          "cx": 150,
          "width": 167
        },
        {
          "y": 325,
          "cx": 210,
          "width": 175
        },
        {
          "y": 0,
          "cx": 180,
          "width": 175
        }
      ],
      "obstacles": [
        {
          "id": "rock_8",
          "type": "rock",
          "x": 255,
          "y": 1641,
          "radius": 21
        },
        {
          "id": "log_2",
          "type": "log",
          "y": 1552,
          "width": 74,
          "height": 22,
          "minX": 139,
          "maxX": 224,
          "speed": 100,
          "x": 224,
          "dir": -1
        },
        {
          "id": "rock_9",
          "type": "rock",
          "x": 144,
          "y": 1464,
          "radius": 23
        },
        {
          "id": "log_3",
          "type": "log",
          "y": 1375,
          "width": 74,
          "height": 22,
          "minX": 109,
          "maxX": 194,
          "speed": 93,
          "x": 109,
          "dir": 1
        },
        {
          "id": "rock_10",
          "type": "rock",
          "x": 180,
          "y": 1286,
          "radius": 18
        },
        {
          "id": "rock_11",
          "type": "rock",
          "x": 133,
          "y": 1197,
          "radius": 21
        },
        {
          "id": "log_4",
          "type": "log",
          "y": 1108,
          "width": 71,
          "height": 22,
          "minX": 156,
          "maxX": 238,
          "speed": 106,
          "x": 238,
          "dir": -1
        },
        {
          "id": "gate_1",
          "type": "gate",
          "y": 1019,
          "leftX": 146,
          "rightX": 238,
          "postRadius": 11
        },
        {
          "id": "rock_12",
          "type": "rock",
          "x": 250,
          "y": 931,
          "radius": 23
        },
        {
          "id": "log_5",
          "type": "log",
          "y": 842,
          "width": 70,
          "height": 22,
          "minX": 153,
          "maxX": 234,
          "speed": 99,
          "x": 153,
          "dir": 1
        },
        {
          "id": "rock_13",
          "type": "rock",
          "x": 154,
          "y": 753,
          "radius": 18
        },
        {
          "id": "rock_14",
          "type": "rock",
          "x": 178,
          "y": 664,
          "radius": 21
        },
        {
          "id": "log_6",
          "type": "log",
          "y": 575,
          "width": 70,
          "height": 22,
          "minX": 114,
          "maxX": 196,
          "speed": 92,
          "x": 196,
          "dir": -1
        },
        {
          "id": "rock_15",
          "type": "rock",
          "x": 124,
          "y": 486,
          "radius": 23
        },
        {
          "id": "log_7",
          "type": "log",
          "y": 398,
          "width": 72,
          "height": 22,
          "minX": 144,
          "maxX": 227,
          "speed": 105,
          "x": 144,
          "dir": 1
        },
        {
          "id": "rock_16",
          "type": "rock",
          "x": 259,
          "y": 309,
          "radius": 18
        }
      ]
    }
  },
  {
    "id": 30,
    "name": "Bayou Final Rush",
    "targetTime": 52,
    "hint": "Zone 3 finale! 18 hazards stand between you and the canyon.",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Bayou multi-hazard mastery",
    "world": {
      "width": 360,
      "height": 2000,
      "startX": 180,
      "startY": 1850,
      "finishX": 180,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.986,
      "waypoints": [
        {
          "y": 2000,
          "cx": 180,
          "width": 175
        },
        {
          "y": 1667,
          "cx": 220,
          "width": 175
        },
        {
          "y": 1333,
          "cx": 140,
          "width": 175
        },
        {
          "y": 1000,
          "cx": 220,
          "width": 167
        },
        {
          "y": 667,
          "cx": 140,
          "width": 167
        },
        {
          "y": 333,
          "cx": 220,
          "width": 175
        },
        {
          "y": 0,
          "cx": 180,
          "width": 175
        }
      ],
      "obstacles": [
        {
          "id": "rock_8",
          "type": "rock",
          "x": 268,
          "y": 1698,
          "radius": 21
        },
        {
          "id": "rock_9",
          "type": "rock",
          "x": 153,
          "y": 1616,
          "radius": 23
        },
        {
          "id": "log_3",
          "type": "log",
          "y": 1534,
          "width": 74,
          "height": 22,
          "minX": 132,
          "maxX": 217,
          "speed": 100,
          "x": 217,
          "dir": -1
        },
        {
          "id": "rock_10",
          "type": "rock",
          "x": 175,
          "y": 1452,
          "radius": 18
        },
        {
          "id": "log_4",
          "type": "log",
          "y": 1369,
          "width": 73,
          "height": 22,
          "minX": 105,
          "maxX": 190,
          "speed": 93,
          "x": 105,
          "dir": 1
        },
        {
          "id": "rock_11",
          "type": "rock",
          "x": 93,
          "y": 1287,
          "radius": 21
        },
        {
          "id": "gate_1",
          "type": "gate",
          "y": 1205,
          "leftX": 99,
          "rightX": 191,
          "postRadius": 11
        },
        {
          "id": "rock_12",
          "type": "rock",
          "x": 242,
          "y": 1123,
          "radius": 23
        },
        {
          "id": "rock_13",
          "type": "rock",
          "x": 191,
          "y": 1041,
          "radius": 18
        },
        {
          "id": "log_5",
          "type": "log",
          "y": 959,
          "width": 70,
          "height": 22,
          "minX": 171,
          "maxX": 252,
          "speed": 106,
          "x": 252,
          "dir": -1
        },
        {
          "id": "rock_14",
          "type": "rock",
          "x": 213,
          "y": 877,
          "radius": 21
        },
        {
          "id": "log_6",
          "type": "log",
          "y": 795,
          "width": 70,
          "height": 22,
          "minX": 129,
          "maxX": 210,
          "speed": 99,
          "x": 129,
          "dir": 1
        },
        {
          "id": "rock_15",
          "type": "rock",
          "x": 117,
          "y": 713,
          "radius": 23
        },
        {
          "id": "gate_2",
          "type": "gate",
          "y": 631,
          "leftX": 126,
          "rightX": 218,
          "postRadius": 11
        },
        {
          "id": "rock_16",
          "type": "rock",
          "x": 209,
          "y": 548,
          "radius": 18
        },
        {
          "id": "rock_17",
          "type": "rock",
          "x": 163,
          "y": 466,
          "radius": 21
        },
        {
          "id": "log_7",
          "type": "log",
          "y": 384,
          "width": 72,
          "height": 22,
          "minX": 149,
          "maxX": 234,
          "speed": 92,
          "x": 234,
          "dir": -1
        },
        {
          "id": "rock_18",
          "type": "rock",
          "x": 238,
          "y": 302,
          "radius": 23
        }
      ]
    }
  },
  {
    "id": 31,
    "name": "Mist Canyon Run",
    "targetTime": 52,
    "hint": "Narrow canyon walls and faster current. Avoid bouncing into rock outcroppings.",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "High-drift wall avoidance",
    "world": {
      "width": 360,
      "height": 2030,
      "startX": 180,
      "startY": 1880,
      "finishX": 180,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.986,
      "waypoints": [
        {
          "y": 2030,
          "cx": 180,
          "width": 170
        },
        {
          "y": 1692,
          "cx": 215,
          "width": 170
        },
        {
          "y": 1353,
          "cx": 145,
          "width": 170
        },
        {
          "y": 1015,
          "cx": 215,
          "width": 162
        },
        {
          "y": 677,
          "cx": 145,
          "width": 162
        },
        {
          "y": 338,
          "cx": 215,
          "width": 170
        },
        {
          "y": 0,
          "cx": 180,
          "width": 170
        }
      ],
      "obstacles": [
        {
          "id": "rock_7",
          "type": "rock",
          "x": 262,
          "y": 1722,
          "radius": 21
        },
        {
          "id": "rock_8",
          "type": "rock",
          "x": 154,
          "y": 1633,
          "radius": 23
        },
        {
          "id": "log_3",
          "type": "log",
          "y": 1545,
          "width": 71,
          "height": 22,
          "minX": 124,
          "maxX": 207,
          "speed": 100,
          "x": 207,
          "dir": -1
        },
        {
          "id": "rock_9",
          "type": "rock",
          "x": 179,
          "y": 1457,
          "radius": 18
        },
        {
          "id": "rock_10",
          "type": "rock",
          "x": 99,
          "y": 1368,
          "radius": 21
        },
        {
          "id": "gate_1",
          "type": "gate",
          "y": 1280,
          "leftX": 101,
          "rightX": 193,
          "postRadius": 11
        },
        {
          "id": "log_4",
          "type": "log",
          "y": 1192,
          "width": 70,
          "height": 22,
          "minX": 139,
          "maxX": 219,
          "speed": 93,
          "x": 139,
          "dir": 1
        },
        {
          "id": "rock_11",
          "type": "rock",
          "x": 238,
          "y": 1103,
          "radius": 23
        },
        {
          "id": "rock_12",
          "type": "rock",
          "x": 186,
          "y": 1015,
          "radius": 18
        },
        {
          "id": "rock_13",
          "type": "rock",
          "x": 211,
          "y": 927,
          "radius": 21
        },
        {
          "id": "log_5",
          "type": "log",
          "y": 838,
          "width": 68,
          "height": 22,
          "minX": 136,
          "maxX": 214,
          "speed": 106,
          "x": 214,
          "dir": -1
        },
        {
          "id": "gate_2",
          "type": "gate",
          "y": 750,
          "leftX": 129,
          "rightX": 221,
          "postRadius": 11
        },
        {
          "id": "rock_14",
          "type": "rock",
          "x": 121,
          "y": 662,
          "radius": 23
        },
        {
          "id": "rock_15",
          "type": "rock",
          "x": 210,
          "y": 573,
          "radius": 18
        },
        {
          "id": "log_6",
          "type": "log",
          "y": 485,
          "width": 69,
          "height": 22,
          "minX": 129,
          "maxX": 209,
          "speed": 99,
          "x": 129,
          "dir": 1
        },
        {
          "id": "rock_16",
          "type": "rock",
          "x": 163,
          "y": 397,
          "radius": 21
        },
        {
          "id": "rock_17",
          "type": "rock",
          "x": 234,
          "y": 308,
          "radius": 23
        }
      ]
    }
  },
  {
    "id": 32,
    "name": "Double Scissor Rapids",
    "targetTime": 54,
    "hint": "Scissor logs crossing at 100 px/s! Precision timing is mandatory.",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Fast scissor traversal",
    "world": {
      "width": 360,
      "height": 2060,
      "startX": 180,
      "startY": 1910,
      "finishX": 180,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.986,
      "waypoints": [
        {
          "y": 2060,
          "cx": 180,
          "width": 170
        },
        {
          "y": 1717,
          "cx": 210,
          "width": 170
        },
        {
          "y": 1373,
          "cx": 150,
          "width": 170
        },
        {
          "y": 1030,
          "cx": 210,
          "width": 162
        },
        {
          "y": 687,
          "cx": 150,
          "width": 162
        },
        {
          "y": 343,
          "cx": 210,
          "width": 170
        },
        {
          "y": 0,
          "cx": 180,
          "width": 170
        }
      ],
      "obstacles": [
        {
          "id": "rock_9",
          "type": "rock",
          "x": 257,
          "y": 1755,
          "radius": 21
        },
        {
          "id": "log_3",
          "type": "log",
          "y": 1669,
          "width": 71,
          "height": 22,
          "minX": 142,
          "maxX": 225,
          "speed": 105,
          "x": 225,
          "dir": -1
        },
        {
          "id": "rock_10",
          "type": "rock",
          "x": 150,
          "y": 1584,
          "radius": 23
        },
        {
          "id": "log_4",
          "type": "log",
          "y": 1499,
          "width": 71,
          "height": 22,
          "minX": 111,
          "maxX": 194,
          "speed": 98,
          "x": 111,
          "dir": 1
        },
        {
          "id": "rock_11",
          "type": "rock",
          "x": 176,
          "y": 1414,
          "radius": 18
        },
        {
          "id": "gate_1",
          "type": "gate",
          "y": 1328,
          "leftX": 103,
          "rightX": 195,
          "postRadius": 11
        },
        {
          "id": "rock_12",
          "type": "rock",
          "x": 124,
          "y": 1243,
          "radius": 21
        },
        {
          "id": "log_5",
          "type": "log",
          "y": 1158,
          "width": 69,
          "height": 22,
          "minX": 157,
          "maxX": 236,
          "speed": 111,
          "x": 236,
          "dir": -1
        },
        {
          "id": "rock_13",
          "type": "rock",
          "x": 247,
          "y": 1073,
          "radius": 23
        },
        {
          "id": "rock_14",
          "type": "rock",
          "x": 169,
          "y": 987,
          "radius": 18
        },
        {
          "id": "log_6",
          "type": "log",
          "y": 902,
          "width": 68,
          "height": 22,
          "minX": 154,
          "maxX": 232,
          "speed": 104,
          "x": 154,
          "dir": 1
        },
        {
          "id": "rock_15",
          "type": "rock",
          "x": 195,
          "y": 817,
          "radius": 21
        },
        {
          "id": "gate_2",
          "type": "gate",
          "y": 732,
          "leftX": 132,
          "rightX": 224,
          "postRadius": 11
        },
        {
          "id": "log_7",
          "type": "log",
          "y": 646,
          "width": 68,
          "height": 22,
          "minX": 117,
          "maxX": 196,
          "speed": 97,
          "x": 196,
          "dir": -1
        },
        {
          "id": "rock_16",
          "type": "rock",
          "x": 109,
          "y": 561,
          "radius": 23
        },
        {
          "id": "rock_17",
          "type": "rock",
          "x": 234,
          "y": 476,
          "radius": 18
        },
        {
          "id": "log_8",
          "type": "log",
          "y": 391,
          "width": 70,
          "height": 22,
          "minX": 147,
          "maxX": 228,
          "speed": 110,
          "x": 147,
          "dir": 1
        },
        {
          "id": "rock_18",
          "type": "rock",
          "x": 184,
          "y": 305,
          "radius": 21
        }
      ]
    }
  },
  {
    "id": 33,
    "name": "The Needle's Eye",
    "targetTime": 54,
    "hint": "Razor-thin gates flanked by rocks. Micro-tap left and right to adjust.",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Micro-steering through gates",
    "world": {
      "width": 360,
      "height": 2100,
      "startX": 180,
      "startY": 1950,
      "finishX": 180,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.987,
      "waypoints": [
        {
          "y": 2100,
          "cx": 180,
          "width": 165
        },
        {
          "y": 1750,
          "cx": 220,
          "width": 165
        },
        {
          "y": 1400,
          "cx": 140,
          "width": 165
        },
        {
          "y": 1050,
          "cx": 220,
          "width": 157
        },
        {
          "y": 700,
          "cx": 140,
          "width": 157
        },
        {
          "y": 350,
          "cx": 220,
          "width": 165
        },
        {
          "y": 0,
          "cx": 180,
          "width": 165
        }
      ],
      "obstacles": [
        {
          "id": "rock_8",
          "type": "rock",
          "x": 268,
          "y": 1797,
          "radius": 21
        },
        {
          "id": "rock_9",
          "type": "rock",
          "x": 160,
          "y": 1714,
          "radius": 23
        },
        {
          "id": "log_4",
          "type": "log",
          "y": 1631,
          "width": 69,
          "height": 22,
          "minX": 124,
          "maxX": 204,
          "speed": 105,
          "x": 204,
          "dir": -1
        },
        {
          "id": "rock_10",
          "type": "rock",
          "x": 183,
          "y": 1548,
          "radius": 18
        },
        {
          "id": "gate_1",
          "type": "gate",
          "y": 1465,
          "leftX": 89,
          "rightX": 181,
          "postRadius": 11
        },
        {
          "id": "rock_11",
          "type": "rock",
          "x": 103,
          "y": 1382,
          "radius": 21
        },
        {
          "id": "log_5",
          "type": "log",
          "y": 1299,
          "width": 68,
          "height": 22,
          "minX": 141,
          "maxX": 218,
          "speed": 98,
          "x": 141,
          "dir": 1
        },
        {
          "id": "rock_12",
          "type": "rock",
          "x": 226,
          "y": 1216,
          "radius": 23
        },
        {
          "id": "rock_13",
          "type": "rock",
          "x": 187,
          "y": 1133,
          "radius": 18
        },
        {
          "id": "gate_2",
          "type": "gate",
          "y": 1050,
          "leftX": 188,
          "rightX": 280,
          "postRadius": 11
        },
        {
          "id": "rock_14",
          "type": "rock",
          "x": 229,
          "y": 967,
          "radius": 21
        },
        {
          "id": "log_6",
          "type": "log",
          "y": 884,
          "width": 66,
          "height": 22,
          "minX": 137,
          "maxX": 212,
          "speed": 111,
          "x": 212,
          "dir": -1
        },
        {
          "id": "rock_15",
          "type": "rock",
          "x": 127,
          "y": 801,
          "radius": 23
        },
        {
          "id": "rock_16",
          "type": "rock",
          "x": 198,
          "y": 718,
          "radius": 18
        },
        {
          "id": "gate_3",
          "type": "gate",
          "y": 635,
          "leftX": 110,
          "rightX": 202,
          "postRadius": 11
        },
        {
          "id": "rock_17",
          "type": "rock",
          "x": 141,
          "y": 552,
          "radius": 21
        },
        {
          "id": "log_7",
          "type": "log",
          "y": 469,
          "width": 67,
          "height": 22,
          "minX": 131,
          "maxX": 207,
          "speed": 104,
          "x": 131,
          "dir": 1
        },
        {
          "id": "rock_18",
          "type": "rock",
          "x": 214,
          "y": 386,
          "radius": 23
        },
        {
          "id": "rock_19",
          "type": "rock",
          "x": 164,
          "y": 303,
          "radius": 18
        }
      ]
    }
  },
  {
    "id": 34,
    "name": "Rapid Slalom Blitz",
    "targetTime": 55,
    "hint": "Four alternating gates! Don't let momentum slam you into the banks.",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Quad-gate rhythm",
    "world": {
      "width": 360,
      "height": 2130,
      "startX": 180,
      "startY": 1980,
      "finishX": 180,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.987,
      "waypoints": [
        {
          "y": 2130,
          "cx": 180,
          "width": 165
        },
        {
          "y": 1775,
          "cx": 222,
          "width": 165
        },
        {
          "y": 1420,
          "cx": 138,
          "width": 165
        },
        {
          "y": 1065,
          "cx": 222,
          "width": 157
        },
        {
          "y": 710,
          "cx": 138,
          "width": 157
        },
        {
          "y": 355,
          "cx": 222,
          "width": 165
        },
        {
          "y": 0,
          "cx": 180,
          "width": 165
        }
      ],
      "obstacles": [
        {
          "id": "rock_9",
          "type": "rock",
          "x": 268,
          "y": 1826,
          "radius": 21
        },
        {
          "id": "rock_10",
          "type": "rock",
          "x": 156,
          "y": 1741,
          "radius": 23
        },
        {
          "id": "gate_1",
          "type": "gate",
          "y": 1657,
          "leftX": 108,
          "rightX": 200,
          "postRadius": 11
        },
        {
          "id": "log_5",
          "type": "log",
          "y": 1572,
          "width": 69,
          "height": 22,
          "minX": 117,
          "maxX": 197,
          "speed": 107,
          "x": 197,
          "dir": -1
        },
        {
          "id": "rock_11",
          "type": "rock",
          "x": 175,
          "y": 1488,
          "radius": 18
        },
        {
          "id": "rock_12",
          "type": "rock",
          "x": 112,
          "y": 1403,
          "radius": 21
        },
        {
          "id": "log_6",
          "type": "log",
          "y": 1319,
          "width": 68,
          "height": 22,
          "minX": 133,
          "maxX": 211,
          "speed": 100,
          "x": 133,
          "dir": 1
        },
        {
          "id": "gate_2",
          "type": "gate",
          "y": 1234,
          "leftX": 155,
          "rightX": 247,
          "postRadius": 11
        },
        {
          "id": "rock_13",
          "type": "rock",
          "x": 243,
          "y": 1150,
          "radius": 23
        },
        {
          "id": "rock_14",
          "type": "rock",
          "x": 193,
          "y": 1065,
          "radius": 18
        },
        {
          "id": "rock_15",
          "type": "rock",
          "x": 212,
          "y": 981,
          "radius": 21
        },
        {
          "id": "gate_3",
          "type": "gate",
          "y": 896,
          "leftX": 134,
          "rightX": 226,
          "postRadius": 11
        },
        {
          "id": "log_7",
          "type": "log",
          "y": 812,
          "width": 66,
          "height": 22,
          "minX": 130,
          "maxX": 205,
          "speed": 113,
          "x": 205,
          "dir": -1
        },
        {
          "id": "rock_16",
          "type": "rock",
          "x": 106,
          "y": 727,
          "radius": 23
        },
        {
          "id": "rock_17",
          "type": "rock",
          "x": 204,
          "y": 643,
          "radius": 18
        },
        {
          "id": "log_8",
          "type": "log",
          "y": 558,
          "width": 67,
          "height": 22,
          "minX": 124,
          "maxX": 200,
          "speed": 106,
          "x": 124,
          "dir": 1
        },
        {
          "id": "gate_4",
          "type": "gate",
          "y": 474,
          "leftX": 113,
          "rightX": 205,
          "postRadius": 11
        },
        {
          "id": "rock_18",
          "type": "rock",
          "x": 166,
          "y": 389,
          "radius": 21
        },
        {
          "id": "rock_19",
          "type": "rock",
          "x": 242,
          "y": 305,
          "radius": 23
        }
      ]
    }
  },
  {
    "id": 35,
    "name": "Whirlpool Rocks",
    "targetTime": 56,
    "hint": "Circular boulder clusters create vortex-like choke lanes. Thread through carefully.",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Navigating cluster bottlenecks",
    "world": {
      "width": 360,
      "height": 2160,
      "startX": 180,
      "startY": 2010,
      "finishX": 180,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.987,
      "waypoints": [
        {
          "y": 2160,
          "cx": 180,
          "width": 165
        },
        {
          "y": 1800,
          "cx": 215,
          "width": 165
        },
        {
          "y": 1440,
          "cx": 145,
          "width": 165
        },
        {
          "y": 1080,
          "cx": 215,
          "width": 157
        },
        {
          "y": 720,
          "cx": 145,
          "width": 157
        },
        {
          "y": 360,
          "cx": 215,
          "width": 165
        },
        {
          "y": 0,
          "cx": 180,
          "width": 165
        }
      ],
      "obstacles": [
        {
          "id": "rock_8",
          "type": "rock",
          "x": 266,
          "y": 1862,
          "radius": 21
        },
        {
          "id": "rock_9",
          "type": "rock",
          "x": 167,
          "y": 1784,
          "radius": 23
        },
        {
          "id": "log_3",
          "type": "log",
          "y": 1705,
          "width": 69,
          "height": 22,
          "minX": 138,
          "maxX": 218,
          "speed": 107,
          "x": 218,
          "dir": -1
        },
        {
          "id": "rock_10",
          "type": "rock",
          "x": 197,
          "y": 1627,
          "radius": 18
        },
        {
          "id": "rock_11",
          "type": "rock",
          "x": 96,
          "y": 1549,
          "radius": 21
        },
        {
          "id": "log_4",
          "type": "log",
          "y": 1471,
          "width": 69,
          "height": 22,
          "minX": 112,
          "maxX": 191,
          "speed": 100,
          "x": 112,
          "dir": 1
        },
        {
          "id": "gate_1",
          "type": "gate",
          "y": 1393,
          "leftX": 100,
          "rightX": 192,
          "postRadius": 11
        },
        {
          "id": "rock_12",
          "type": "rock",
          "x": 219,
          "y": 1315,
          "radius": 23
        },
        {
          "id": "rock_13",
          "type": "rock",
          "x": 162,
          "y": 1236,
          "radius": 18
        },
        {
          "id": "rock_14",
          "type": "rock",
          "x": 229,
          "y": 1158,
          "radius": 21
        },
        {
          "id": "log_5",
          "type": "log",
          "y": 1080,
          "width": 66,
          "height": 22,
          "minX": 171,
          "maxX": 246,
          "speed": 113,
          "x": 246,
          "dir": -1
        },
        {
          "id": "rock_15",
          "type": "rock",
          "x": 155,
          "y": 1002,
          "radius": 23
        },
        {
          "id": "rock_16",
          "type": "rock",
          "x": 232,
          "y": 924,
          "radius": 18
        },
        {
          "id": "log_6",
          "type": "log",
          "y": 845,
          "width": 66,
          "height": 22,
          "minX": 131,
          "maxX": 206,
          "speed": 106,
          "x": 131,
          "dir": 1
        },
        {
          "id": "rock_17",
          "type": "rock",
          "x": 143,
          "y": 767,
          "radius": 21
        },
        {
          "id": "rock_18",
          "type": "rock",
          "x": 176,
          "y": 689,
          "radius": 23
        },
        {
          "id": "gate_2",
          "type": "gate",
          "y": 611,
          "leftX": 128,
          "rightX": 220,
          "postRadius": 11
        },
        {
          "id": "rock_19",
          "type": "rock",
          "x": 125,
          "y": 533,
          "radius": 18
        },
        {
          "id": "log_7",
          "type": "log",
          "y": 455,
          "width": 68,
          "height": 22,
          "minX": 153,
          "maxX": 231,
          "speed": 99,
          "x": 231,
          "dir": -1
        },
        {
          "id": "rock_20",
          "type": "rock",
          "x": 246,
          "y": 376,
          "radius": 21
        },
        {
          "id": "rock_21",
          "type": "rock",
          "x": 188,
          "y": 298,
          "radius": 23
        }
      ]
    }
  },
  {
    "id": 36,
    "name": "Timber Barrage",
    "targetTime": 57,
    "hint": "Six patrol logs across the gorge! Look ahead and plan your window.",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Anticipatory pathing",
    "world": {
      "width": 360,
      "height": 2200,
      "startX": 180,
      "startY": 2050,
      "finishX": 180,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.988,
      "waypoints": [
        {
          "y": 2200,
          "cx": 180,
          "width": 160
        },
        {
          "y": 1833,
          "cx": 210,
          "width": 160
        },
        {
          "y": 1467,
          "cx": 150,
          "width": 160
        },
        {
          "y": 1100,
          "cx": 210,
          "width": 152
        },
        {
          "y": 733,
          "cx": 150,
          "width": 152
        },
        {
          "y": 367,
          "cx": 210,
          "width": 160
        },
        {
          "y": 0,
          "cx": 180,
          "width": 160
        }
      ],
      "obstacles": [
        {
          "id": "rock_10",
          "type": "rock",
          "x": 258,
          "y": 1900,
          "radius": 21
        },
        {
          "id": "log_3",
          "type": "log",
          "y": 1820,
          "width": 67,
          "height": 22,
          "minX": 153,
          "maxX": 230,
          "speed": 110,
          "x": 230,
          "dir": -1
        },
        {
          "id": "rock_11",
          "type": "rock",
          "x": 160,
          "y": 1740,
          "radius": 23
        },
        {
          "id": "rock_12",
          "type": "rock",
          "x": 189,
          "y": 1660,
          "radius": 18
        },
        {
          "id": "log_4",
          "type": "log",
          "y": 1580,
          "width": 67,
          "height": 22,
          "minX": 125,
          "maxX": 202,
          "speed": 103,
          "x": 125,
          "dir": 1
        },
        {
          "id": "rock_13",
          "type": "rock",
          "x": 108,
          "y": 1500,
          "radius": 21
        },
        {
          "id": "gate_1",
          "type": "gate",
          "y": 1420,
          "leftX": 102,
          "rightX": 194,
          "postRadius": 11
        },
        {
          "id": "log_5",
          "type": "log",
          "y": 1340,
          "width": 66,
          "height": 22,
          "minX": 143,
          "maxX": 217,
          "speed": 116,
          "x": 217,
          "dir": -1
        },
        {
          "id": "rock_14",
          "type": "rock",
          "x": 223,
          "y": 1260,
          "radius": 23
        },
        {
          "id": "rock_15",
          "type": "rock",
          "x": 179,
          "y": 1180,
          "radius": 18
        },
        {
          "id": "log_6",
          "type": "log",
          "y": 1100,
          "width": 64,
          "height": 22,
          "minX": 171,
          "maxX": 244,
          "speed": 109,
          "x": 171,
          "dir": 1
        },
        {
          "id": "rock_16",
          "type": "rock",
          "x": 223,
          "y": 1020,
          "radius": 21
        },
        {
          "id": "rock_17",
          "type": "rock",
          "x": 131,
          "y": 940,
          "radius": 23
        },
        {
          "id": "log_7",
          "type": "log",
          "y": 860,
          "width": 64,
          "height": 22,
          "minX": 133,
          "maxX": 205,
          "speed": 102,
          "x": 205,
          "dir": -1
        },
        {
          "id": "gate_2",
          "type": "gate",
          "y": 780,
          "leftX": 128,
          "rightX": 220,
          "postRadius": 11
        },
        {
          "id": "rock_18",
          "type": "rock",
          "x": 203,
          "y": 700,
          "radius": 18
        },
        {
          "id": "log_8",
          "type": "log",
          "y": 620,
          "width": 64,
          "height": 22,
          "minX": 122,
          "maxX": 195,
          "speed": 115,
          "x": 122,
          "dir": 1
        },
        {
          "id": "rock_19",
          "type": "rock",
          "x": 146,
          "y": 540,
          "radius": 21
        },
        {
          "id": "rock_20",
          "type": "rock",
          "x": 212,
          "y": 460,
          "radius": 23
        },
        {
          "id": "log_9",
          "type": "log",
          "y": 380,
          "width": 67,
          "height": 22,
          "minX": 164,
          "maxX": 240,
          "speed": 108,
          "x": 240,
          "dir": -1
        },
        {
          "id": "rock_21",
          "type": "rock",
          "x": 156,
          "y": 300,
          "radius": 18
        }
      ]
    }
  },
  {
    "id": 37,
    "name": "Canyon Gauntlet",
    "targetTime": 58,
    "hint": "Serpentine S-bends through sheer stone walls. Use Hippo pulses wisely.",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Controlled pulse maneuvering",
    "world": {
      "width": 360,
      "height": 2230,
      "startX": 180,
      "startY": 2080,
      "finishX": 180,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.988,
      "waypoints": [
        {
          "y": 2230,
          "cx": 180,
          "width": 160
        },
        {
          "y": 1858,
          "cx": 226,
          "width": 160
        },
        {
          "y": 1487,
          "cx": 134,
          "width": 160
        },
        {
          "y": 1115,
          "cx": 226,
          "width": 152
        },
        {
          "y": 743,
          "cx": 134,
          "width": 152
        },
        {
          "y": 372,
          "cx": 226,
          "width": 160
        },
        {
          "y": 0,
          "cx": 180,
          "width": 160
        }
      ],
      "obstacles": [
        {
          "id": "rock_8",
          "type": "rock",
          "x": 272,
          "y": 1932,
          "radius": 21
        },
        {
          "id": "rock_9",
          "type": "rock",
          "x": 176,
          "y": 1854,
          "radius": 23
        },
        {
          "id": "log_3",
          "type": "log",
          "y": 1777,
          "width": 67,
          "height": 22,
          "minX": 141,
          "maxX": 218,
          "speed": 110,
          "x": 218,
          "dir": -1
        },
        {
          "id": "rock_10",
          "type": "rock",
          "x": 201,
          "y": 1699,
          "radius": 18
        },
        {
          "id": "rock_11",
          "type": "rock",
          "x": 97,
          "y": 1621,
          "radius": 21
        },
        {
          "id": "log_4",
          "type": "log",
          "y": 1543,
          "width": 67,
          "height": 22,
          "minX": 104,
          "maxX": 180,
          "speed": 103,
          "x": 104,
          "dir": 1
        },
        {
          "id": "rock_12",
          "type": "rock",
          "x": 192,
          "y": 1465,
          "radius": 23
        },
        {
          "id": "gate_1",
          "type": "gate",
          "y": 1387,
          "leftX": 94,
          "rightX": 186,
          "postRadius": 11
        },
        {
          "id": "rock_13",
          "type": "rock",
          "x": 153,
          "y": 1310,
          "radius": 18
        },
        {
          "id": "rock_14",
          "type": "rock",
          "x": 223,
          "y": 1232,
          "radius": 21
        },
        {
          "id": "rock_15",
          "type": "rock",
          "x": 178,
          "y": 1154,
          "radius": 23
        },
        {
          "id": "log_5",
          "type": "log",
          "y": 1076,
          "width": 64,
          "height": 22,
          "minX": 181,
          "maxX": 253,
          "speed": 116,
          "x": 253,
          "dir": -1
        },
        {
          "id": "rock_16",
          "type": "rock",
          "x": 246,
          "y": 998,
          "radius": 18
        },
        {
          "id": "rock_17",
          "type": "rock",
          "x": 143,
          "y": 920,
          "radius": 21
        },
        {
          "id": "gate_2",
          "type": "gate",
          "y": 843,
          "leftX": 118,
          "rightX": 210,
          "postRadius": 11
        },
        {
          "id": "log_6",
          "type": "log",
          "y": 765,
          "width": 64,
          "height": 22,
          "minX": 128,
          "maxX": 200,
          "speed": 109,
          "x": 128,
          "dir": 1
        },
        {
          "id": "rock_18",
          "type": "rock",
          "x": 163,
          "y": 687,
          "radius": 23
        },
        {
          "id": "rock_19",
          "type": "rock",
          "x": 106,
          "y": 609,
          "radius": 18
        },
        {
          "id": "rock_20",
          "type": "rock",
          "x": 225,
          "y": 531,
          "radius": 21
        },
        {
          "id": "log_7",
          "type": "log",
          "y": 453,
          "width": 66,
          "height": 22,
          "minX": 159,
          "maxX": 234,
          "speed": 102,
          "x": 234,
          "dir": -1
        },
        {
          "id": "rock_21",
          "type": "rock",
          "x": 186,
          "y": 376,
          "radius": 23
        },
        {
          "id": "rock_22",
          "type": "rock",
          "x": 247,
          "y": 298,
          "radius": 18
        }
      ]
    }
  },
  {
    "id": 38,
    "name": "Triple Gate Rush",
    "targetTime": 58,
    "hint": "A fast moving log guards the exit of each gate! Clear gate then immediately brake.",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Post-gate brake reflex",
    "world": {
      "width": 360,
      "height": 2260,
      "startX": 180,
      "startY": 2110,
      "finishX": 180,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.988,
      "waypoints": [
        {
          "y": 2260,
          "cx": 180,
          "width": 160
        },
        {
          "y": 1883,
          "cx": 220,
          "width": 160
        },
        {
          "y": 1507,
          "cx": 140,
          "width": 160
        },
        {
          "y": 1130,
          "cx": 220,
          "width": 152
        },
        {
          "y": 753,
          "cx": 140,
          "width": 152
        },
        {
          "y": 377,
          "cx": 220,
          "width": 160
        },
        {
          "y": 0,
          "cx": 180,
          "width": 160
        }
      ],
      "obstacles": [
        {
          "id": "rock_10",
          "type": "rock",
          "x": 267,
          "y": 1964,
          "radius": 21
        },
        {
          "id": "rock_11",
          "type": "rock",
          "x": 171,
          "y": 1888,
          "radius": 23
        },
        {
          "id": "log_4",
          "type": "log",
          "y": 1813,
          "width": 67,
          "height": 22,
          "minX": 151,
          "maxX": 228,
          "speed": 113,
          "x": 228,
          "dir": -1
        },
        {
          "id": "log_5",
          "type": "log",
          "y": 1737,
          "width": 67,
          "height": 22,
          "minX": 127,
          "maxX": 204,
          "speed": 106,
          "x": 127,
          "dir": 1
        },
        {
          "id": "rock_12",
          "type": "rock",
          "x": 197,
          "y": 1661,
          "radius": 18
        },
        {
          "id": "gate_1",
          "type": "gate",
          "y": 1585,
          "leftX": 91,
          "rightX": 183,
          "postRadius": 11
        },
        {
          "id": "rock_13",
          "type": "rock",
          "x": 95,
          "y": 1509,
          "radius": 21
        },
        {
          "id": "rock_14",
          "type": "rock",
          "x": 204,
          "y": 1433,
          "radius": 23
        },
        {
          "id": "rock_15",
          "type": "rock",
          "x": 162,
          "y": 1358,
          "radius": 18
        },
        {
          "id": "log_6",
          "type": "log",
          "y": 1282,
          "width": 65,
          "height": 22,
          "minX": 164,
          "maxX": 237,
          "speed": 119,
          "x": 237,
          "dir": -1
        },
        {
          "id": "rock_16",
          "type": "rock",
          "x": 232,
          "y": 1206,
          "radius": 21
        },
        {
          "id": "gate_2",
          "type": "gate",
          "y": 1130,
          "leftX": 185,
          "rightX": 277,
          "postRadius": 11
        },
        {
          "id": "rock_17",
          "type": "rock",
          "x": 160,
          "y": 1054,
          "radius": 23
        },
        {
          "id": "log_7",
          "type": "log",
          "y": 978,
          "width": 64,
          "height": 22,
          "minX": 160,
          "maxX": 232,
          "speed": 112,
          "x": 160,
          "dir": 1
        },
        {
          "id": "rock_18",
          "type": "rock",
          "x": 230,
          "y": 903,
          "radius": 18
        },
        {
          "id": "rock_19",
          "type": "rock",
          "x": 129,
          "y": 827,
          "radius": 21
        },
        {
          "id": "rock_20",
          "type": "rock",
          "x": 173,
          "y": 751,
          "radius": 23
        },
        {
          "id": "gate_3",
          "type": "gate",
          "y": 675,
          "leftX": 112,
          "rightX": 204,
          "postRadius": 11
        },
        {
          "id": "rock_21",
          "type": "rock",
          "x": 128,
          "y": 599,
          "radius": 18
        },
        {
          "id": "log_8",
          "type": "log",
          "y": 523,
          "width": 65,
          "height": 22,
          "minX": 132,
          "maxX": 206,
          "speed": 105,
          "x": 206,
          "dir": -1
        },
        {
          "id": "log_9",
          "type": "log",
          "y": 448,
          "width": 66,
          "height": 22,
          "minX": 156,
          "maxX": 231,
          "speed": 118,
          "x": 156,
          "dir": 1
        },
        {
          "id": "rock_22",
          "type": "rock",
          "x": 248,
          "y": 372,
          "radius": 21
        },
        {
          "id": "rock_23",
          "type": "rock",
          "x": 192,
          "y": 296,
          "radius": 23
        }
      ]
    }
  },
  {
    "id": 39,
    "name": "Devil's Churn",
    "targetTime": 60,
    "hint": "High river glide and narrow water. Remember: 10 bumps means Game Over!",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Endurance hazard control",
    "world": {
      "width": 360,
      "height": 2300,
      "startX": 180,
      "startY": 2150,
      "finishX": 180,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.989,
      "waypoints": [
        {
          "y": 2300,
          "cx": 180,
          "width": 155
        },
        {
          "y": 1917,
          "cx": 222,
          "width": 155
        },
        {
          "y": 1533,
          "cx": 138,
          "width": 155
        },
        {
          "y": 1150,
          "cx": 222,
          "width": 147
        },
        {
          "y": 767,
          "cx": 138,
          "width": 147
        },
        {
          "y": 383,
          "cx": 222,
          "width": 155
        },
        {
          "y": 0,
          "cx": 180,
          "width": 155
        }
      ],
      "obstacles": [
        {
          "id": "rock_10",
          "type": "rock",
          "x": 265,
          "y": 2006,
          "radius": 21
        },
        {
          "id": "rock_11",
          "type": "rock",
          "x": 175,
          "y": 1931,
          "radius": 23
        },
        {
          "id": "log_4",
          "type": "log",
          "y": 1857,
          "width": 65,
          "height": 22,
          "minX": 153,
          "maxX": 227,
          "speed": 115,
          "x": 227,
          "dir": -1
        },
        {
          "id": "rock_12",
          "type": "rock",
          "x": 202,
          "y": 1782,
          "radius": 18
        },
        {
          "id": "log_5",
          "type": "log",
          "y": 1708,
          "width": 65,
          "height": 22,
          "minX": 128,
          "maxX": 202,
          "speed": 108,
          "x": 128,
          "dir": 1
        },
        {
          "id": "rock_13",
          "type": "rock",
          "x": 117,
          "y": 1634,
          "radius": 21
        },
        {
          "id": "gate_1",
          "type": "gate",
          "y": 1559,
          "leftX": 91,
          "rightX": 183,
          "postRadius": 11
        },
        {
          "id": "rock_14",
          "type": "rock",
          "x": 191,
          "y": 1485,
          "radius": 23
        },
        {
          "id": "rock_15",
          "type": "rock",
          "x": 152,
          "y": 1410,
          "radius": 18
        },
        {
          "id": "rock_16",
          "type": "rock",
          "x": 221,
          "y": 1336,
          "radius": 21
        },
        {
          "id": "rock_17",
          "type": "rock",
          "x": 173,
          "y": 1262,
          "radius": 23
        },
        {
          "id": "log_6",
          "type": "log",
          "y": 1187,
          "width": 63,
          "height": 22,
          "minX": 166,
          "maxX": 236,
          "speed": 121,
          "x": 236,
          "dir": -1
        },
        {
          "id": "gate_2",
          "type": "gate",
          "y": 1113,
          "leftX": 184,
          "rightX": 276,
          "postRadius": 11
        },
        {
          "id": "log_7",
          "type": "log",
          "y": 1038,
          "width": 62,
          "height": 22,
          "minX": 162,
          "maxX": 231,
          "speed": 114,
          "x": 162,
          "dir": 1
        },
        {
          "id": "rock_18",
          "type": "rock",
          "x": 242,
          "y": 964,
          "radius": 18
        },
        {
          "id": "rock_19",
          "type": "rock",
          "x": 144,
          "y": 890,
          "radius": 21
        },
        {
          "id": "rock_20",
          "type": "rock",
          "x": 171,
          "y": 815,
          "radius": 23
        },
        {
          "id": "rock_21",
          "type": "rock",
          "x": 101,
          "y": 741,
          "radius": 18
        },
        {
          "id": "gate_3",
          "type": "gate",
          "y": 666,
          "leftX": 111,
          "rightX": 203,
          "postRadius": 11
        },
        {
          "id": "log_8",
          "type": "log",
          "y": 592,
          "width": 63,
          "height": 22,
          "minX": 134,
          "maxX": 205,
          "speed": 107,
          "x": 205,
          "dir": -1
        },
        {
          "id": "rock_22",
          "type": "rock",
          "x": 224,
          "y": 518,
          "radius": 21
        },
        {
          "id": "log_9",
          "type": "log",
          "y": 443,
          "width": 64,
          "height": 22,
          "minX": 158,
          "maxX": 231,
          "speed": 120,
          "x": 158,
          "dir": 1
        },
        {
          "id": "rock_23",
          "type": "rock",
          "x": 184,
          "y": 369,
          "radius": 23
        },
        {
          "id": "rock_24",
          "type": "rock",
          "x": 242,
          "y": 294,
          "radius": 18
        }
      ]
    }
  },
  {
    "id": 40,
    "name": "Mist River Climax",
    "targetTime": 62,
    "hint": "The Grand Canyon finale! 25 coordinated hazards testing all crew roles.",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Mist river mastery",
    "world": {
      "width": 360,
      "height": 2340,
      "startX": 180,
      "startY": 2190,
      "finishX": 180,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.989,
      "waypoints": [
        {
          "y": 2340,
          "cx": 180,
          "width": 155
        },
        {
          "y": 1950,
          "cx": 225,
          "width": 155
        },
        {
          "y": 1560,
          "cx": 135,
          "width": 155
        },
        {
          "y": 1170,
          "cx": 225,
          "width": 147
        },
        {
          "y": 780,
          "cx": 135,
          "width": 147
        },
        {
          "y": 390,
          "cx": 225,
          "width": 155
        },
        {
          "y": 0,
          "cx": 180,
          "width": 155
        }
      ],
      "obstacles": [
        {
          "id": "rock_11",
          "type": "rock",
          "x": 268,
          "y": 2047,
          "radius": 21
        },
        {
          "id": "rock_12",
          "type": "rock",
          "x": 178,
          "y": 1974,
          "radius": 23
        },
        {
          "id": "log_4",
          "type": "log",
          "y": 1901,
          "width": 65,
          "height": 22,
          "minX": 163,
          "maxX": 237,
          "speed": 115,
          "x": 237,
          "dir": -1
        },
        {
          "id": "rock_13",
          "type": "rock",
          "x": 203,
          "y": 1828,
          "radius": 18
        },
        {
          "id": "log_5",
          "type": "log",
          "y": 1755,
          "width": 65,
          "height": 22,
          "minX": 127,
          "maxX": 201,
          "speed": 108,
          "x": 127,
          "dir": 1
        },
        {
          "id": "rock_14",
          "type": "rock",
          "x": 116,
          "y": 1682,
          "radius": 21
        },
        {
          "id": "gate_1",
          "type": "gate",
          "y": 1608,
          "leftX": 89,
          "rightX": 181,
          "postRadius": 11
        },
        {
          "id": "rock_15",
          "type": "rock",
          "x": 189,
          "y": 1535,
          "radius": 23
        },
        {
          "id": "rock_16",
          "type": "rock",
          "x": 152,
          "y": 1462,
          "radius": 18
        },
        {
          "id": "log_6",
          "type": "log",
          "y": 1389,
          "width": 63,
          "height": 22,
          "minX": 143,
          "maxX": 215,
          "speed": 121,
          "x": 215,
          "dir": -1
        },
        {
          "id": "rock_17",
          "type": "rock",
          "x": 222,
          "y": 1316,
          "radius": 21
        },
        {
          "id": "log_7",
          "type": "log",
          "y": 1243,
          "width": 62,
          "height": 22,
          "minX": 180,
          "maxX": 250,
          "speed": 114,
          "x": 180,
          "dir": 1
        },
        {
          "id": "rock_18",
          "type": "rock",
          "x": 175,
          "y": 1170,
          "radius": 23
        },
        {
          "id": "gate_2",
          "type": "gate",
          "y": 1097,
          "leftX": 187,
          "rightX": 279,
          "postRadius": 11
        },
        {
          "id": "rock_19",
          "type": "rock",
          "x": 243,
          "y": 1024,
          "radius": 18
        },
        {
          "id": "rock_20",
          "type": "rock",
          "x": 143,
          "y": 951,
          "radius": 21
        },
        {
          "id": "log_8",
          "type": "log",
          "y": 878,
          "width": 62,
          "height": 22,
          "minX": 128,
          "maxX": 197,
          "speed": 107,
          "x": 197,
          "dir": -1
        },
        {
          "id": "rock_21",
          "type": "rock",
          "x": 168,
          "y": 805,
          "radius": 23
        },
        {
          "id": "log_9",
          "type": "log",
          "y": 732,
          "width": 62,
          "height": 22,
          "minX": 108,
          "maxX": 178,
          "speed": 120,
          "x": 108,
          "dir": 1
        },
        {
          "id": "rock_22",
          "type": "rock",
          "x": 99,
          "y": 658,
          "radius": 18
        },
        {
          "id": "gate_3",
          "type": "gate",
          "y": 585,
          "leftX": 110,
          "rightX": 202,
          "postRadius": 11
        },
        {
          "id": "rock_24",
          "type": "rock",
          "x": 187,
          "y": 512,
          "radius": 23
        },
        {
          "id": "rock_23",
          "type": "rock",
          "x": 224,
          "y": 439,
          "radius": 21
        },
        {
          "id": "log_10",
          "type": "log",
          "y": 366,
          "width": 65,
          "height": 22,
          "minX": 179,
          "maxX": 252,
          "speed": 113,
          "x": 252,
          "dir": -1
        },
        {
          "id": "rock_25",
          "type": "rock",
          "x": 245,
          "y": 293,
          "radius": 18
        }
      ]
    }
  },
  {
    "id": 41,
    "name": "Cascade Foothills",
    "targetTime": 60,
    "hint": "Welcome to Zone 5. Currents are swift and rock clusters leave razor margins.",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Cascade entry precision",
    "world": {
      "width": 360,
      "height": 2380,
      "startX": 180,
      "startY": 2230,
      "finishX": 180,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.989,
      "waypoints": [
        {
          "y": 2380,
          "cx": 180,
          "width": 155
        },
        {
          "y": 1983,
          "cx": 218,
          "width": 155
        },
        {
          "y": 1587,
          "cx": 142,
          "width": 155
        },
        {
          "y": 1190,
          "cx": 218,
          "width": 147
        },
        {
          "y": 793,
          "cx": 142,
          "width": 147
        },
        {
          "y": 397,
          "cx": 218,
          "width": 155
        },
        {
          "y": 0,
          "cx": 180,
          "width": 155
        }
      ],
      "obstacles": [
        {
          "id": "rock_10",
          "type": "rock",
          "x": 260,
          "y": 2085,
          "radius": 21
        },
        {
          "id": "rock_11",
          "type": "rock",
          "x": 178,
          "y": 2011,
          "radius": 23
        },
        {
          "id": "log_4",
          "type": "log",
          "y": 1936,
          "width": 65,
          "height": 22,
          "minX": 154,
          "maxX": 228,
          "speed": 117,
          "x": 228,
          "dir": -1
        },
        {
          "id": "rock_12",
          "type": "rock",
          "x": 208,
          "y": 1862,
          "radius": 18
        },
        {
          "id": "log_5",
          "type": "log",
          "y": 1787,
          "width": 65,
          "height": 22,
          "minX": 130,
          "maxX": 204,
          "speed": 110,
          "x": 130,
          "dir": 1
        },
        {
          "id": "rock_13",
          "type": "rock",
          "x": 119,
          "y": 1712,
          "radius": 21
        },
        {
          "id": "gate_1",
          "type": "gate",
          "y": 1638,
          "leftX": 94,
          "rightX": 186,
          "postRadius": 11
        },
        {
          "id": "rock_14",
          "type": "rock",
          "x": 188,
          "y": 1563,
          "radius": 23
        },
        {
          "id": "rock_15",
          "type": "rock",
          "x": 144,
          "y": 1488,
          "radius": 18
        },
        {
          "id": "rock_16",
          "type": "rock",
          "x": 210,
          "y": 1414,
          "radius": 21
        },
        {
          "id": "log_6",
          "type": "log",
          "y": 1339,
          "width": 63,
          "height": 22,
          "minX": 163,
          "maxX": 234,
          "speed": 123,
          "x": 234,
          "dir": -1
        },
        {
          "id": "rock_17",
          "type": "rock",
          "x": 170,
          "y": 1265,
          "radius": 23
        },
        {
          "id": "rock_18",
          "type": "rock",
          "x": 253,
          "y": 1190,
          "radius": 18
        },
        {
          "id": "gate_2",
          "type": "gate",
          "y": 1115,
          "leftX": 181,
          "rightX": 273,
          "postRadius": 11
        },
        {
          "id": "log_7",
          "type": "log",
          "y": 1041,
          "width": 62,
          "height": 22,
          "minX": 160,
          "maxX": 229,
          "speed": 116,
          "x": 160,
          "dir": 1
        },
        {
          "id": "rock_19",
          "type": "rock",
          "x": 158,
          "y": 966,
          "radius": 21
        },
        {
          "id": "rock_20",
          "type": "rock",
          "x": 188,
          "y": 892,
          "radius": 23
        },
        {
          "id": "rock_21",
          "type": "rock",
          "x": 99,
          "y": 817,
          "radius": 18
        },
        {
          "id": "gate_3",
          "type": "gate",
          "y": 742,
          "leftX": 114,
          "rightX": 206,
          "postRadius": 11
        },
        {
          "id": "rock_22",
          "type": "rock",
          "x": 213,
          "y": 668,
          "radius": 21
        },
        {
          "id": "log_8",
          "type": "log",
          "y": 593,
          "width": 63,
          "height": 22,
          "minX": 135,
          "maxX": 206,
          "speed": 109,
          "x": 206,
          "dir": -1
        },
        {
          "id": "rock_23",
          "type": "rock",
          "x": 164,
          "y": 518,
          "radius": 23
        },
        {
          "id": "log_9",
          "type": "log",
          "y": 444,
          "width": 64,
          "height": 22,
          "minX": 158,
          "maxX": 231,
          "speed": 122,
          "x": 158,
          "dir": 1
        },
        {
          "id": "rock_24",
          "type": "rock",
          "x": 230,
          "y": 369,
          "radius": 18
        },
        {
          "id": "rock_25",
          "type": "rock",
          "x": 165,
          "y": 295,
          "radius": 21
        }
      ]
    }
  },
  {
    "id": 42,
    "name": "The Log Matrix",
    "targetTime": 62,
    "hint": "Seven fast logs moving in alternating directions. Charge Hippo only during clear gaps.",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Matrix log traversal",
    "world": {
      "width": 360,
      "height": 2420,
      "startX": 180,
      "startY": 2270,
      "finishX": 180,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.989,
      "waypoints": [
        {
          "y": 2420,
          "cx": 180,
          "width": 150
        },
        {
          "y": 2017,
          "cx": 215,
          "width": 150
        },
        {
          "y": 1613,
          "cx": 145,
          "width": 150
        },
        {
          "y": 1210,
          "cx": 215,
          "width": 142
        },
        {
          "y": 807,
          "cx": 145,
          "width": 142
        },
        {
          "y": 403,
          "cx": 215,
          "width": 150
        },
        {
          "y": 0,
          "cx": 180,
          "width": 150
        }
      ],
      "obstacles": [
        {
          "id": "rock_11",
          "type": "rock",
          "x": 256,
          "y": 2121,
          "radius": 21
        },
        {
          "id": "log_3",
          "type": "log",
          "y": 2042,
          "width": 63,
          "height": 22,
          "minX": 166,
          "maxX": 237,
          "speed": 120,
          "x": 237,
          "dir": -1
        },
        {
          "id": "rock_12",
          "type": "rock",
          "x": 171,
          "y": 1962,
          "radius": 23
        },
        {
          "id": "rock_13",
          "type": "rock",
          "x": 200,
          "y": 1883,
          "radius": 18
        },
        {
          "id": "log_4",
          "type": "log",
          "y": 1804,
          "width": 63,
          "height": 22,
          "minX": 137,
          "maxX": 208,
          "speed": 113,
          "x": 137,
          "dir": 1
        },
        {
          "id": "rock_14",
          "type": "rock",
          "x": 106,
          "y": 1725,
          "radius": 21
        },
        {
          "id": "gate_1",
          "type": "gate",
          "y": 1646,
          "leftX": 103,
          "rightX": 195,
          "postRadius": 11
        },
        {
          "id": "rock_15",
          "type": "rock",
          "x": 209,
          "y": 1566,
          "radius": 23
        },
        {
          "id": "log_5",
          "type": "log",
          "y": 1487,
          "width": 62,
          "height": 22,
          "minX": 135,
          "maxX": 204,
          "speed": 126,
          "x": 204,
          "dir": -1
        },
        {
          "id": "rock_16",
          "type": "rock",
          "x": 161,
          "y": 1408,
          "radius": 18
        },
        {
          "id": "log_6",
          "type": "log",
          "y": 1329,
          "width": 61,
          "height": 22,
          "minX": 160,
          "maxX": 227,
          "speed": 119,
          "x": 160,
          "dir": 1
        },
        {
          "id": "rock_17",
          "type": "rock",
          "x": 228,
          "y": 1250,
          "radius": 21
        },
        {
          "id": "rock_18",
          "type": "rock",
          "x": 162,
          "y": 1170,
          "radius": 23
        },
        {
          "id": "log_7",
          "type": "log",
          "y": 1091,
          "width": 60,
          "height": 22,
          "minX": 157,
          "maxX": 223,
          "speed": 112,
          "x": 223,
          "dir": -1
        },
        {
          "id": "rock_19",
          "type": "rock",
          "x": 224,
          "y": 1012,
          "radius": 18
        },
        {
          "id": "log_8",
          "type": "log",
          "y": 933,
          "width": 60,
          "height": 22,
          "minX": 133,
          "maxX": 199,
          "speed": 125,
          "x": 133,
          "dir": 1
        },
        {
          "id": "rock_20",
          "type": "rock",
          "x": 141,
          "y": 854,
          "radius": 21
        },
        {
          "id": "gate_2",
          "type": "gate",
          "y": 774,
          "leftX": 118,
          "rightX": 210,
          "postRadius": 11
        },
        {
          "id": "rock_21",
          "type": "rock",
          "x": 178,
          "y": 695,
          "radius": 23
        },
        {
          "id": "log_9",
          "type": "log",
          "y": 616,
          "width": 61,
          "height": 22,
          "minX": 141,
          "maxX": 210,
          "speed": 118,
          "x": 210,
          "dir": -1
        },
        {
          "id": "rock_22",
          "type": "rock",
          "x": 135,
          "y": 537,
          "radius": 18
        },
        {
          "id": "rock_23",
          "type": "rock",
          "x": 242,
          "y": 458,
          "radius": 21
        },
        {
          "id": "log_10",
          "type": "log",
          "y": 378,
          "width": 63,
          "height": 22,
          "minX": 170,
          "maxX": 240,
          "speed": 111,
          "x": 170,
          "dir": 1
        },
        {
          "id": "rock_24",
          "type": "rock",
          "x": 186,
          "y": 299,
          "radius": 23
        }
      ]
    }
  },
  {
    "id": 43,
    "name": "Quad Slalom Cascade",
    "targetTime": 62,
    "hint": "Four tight gates with logs patrolling right between them. Brake with Penguin to survive.",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Tight-quarter gate clearing",
    "world": {
      "width": 360,
      "height": 2460,
      "startX": 180,
      "startY": 2310,
      "finishX": 180,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.99,
      "waypoints": [
        {
          "y": 2460,
          "cx": 180,
          "width": 150
        },
        {
          "y": 2050,
          "cx": 222,
          "width": 150
        },
        {
          "y": 1640,
          "cx": 138,
          "width": 150
        },
        {
          "y": 1230,
          "cx": 222,
          "width": 142
        },
        {
          "y": 820,
          "cx": 138,
          "width": 142
        },
        {
          "y": 410,
          "cx": 222,
          "width": 150
        },
        {
          "y": 0,
          "cx": 180,
          "width": 150
        }
      ],
      "obstacles": [
        {
          "id": "rock_11",
          "type": "rock",
          "x": 261,
          "y": 2162,
          "radius": 21
        },
        {
          "id": "rock_12",
          "type": "rock",
          "x": 178,
          "y": 2085,
          "radius": 23
        },
        {
          "id": "log_5",
          "type": "log",
          "y": 2007,
          "width": 63,
          "height": 22,
          "minX": 158,
          "maxX": 229,
          "speed": 120,
          "x": 229,
          "dir": -1
        },
        {
          "id": "gate_1",
          "type": "gate",
          "y": 1929,
          "leftX": 117,
          "rightX": 209,
          "postRadius": 11
        },
        {
          "id": "rock_13",
          "type": "rock",
          "x": 189,
          "y": 1852,
          "radius": 18
        },
        {
          "id": "rock_14",
          "type": "rock",
          "x": 108,
          "y": 1774,
          "radius": 21
        },
        {
          "id": "log_6",
          "type": "log",
          "y": 1696,
          "width": 63,
          "height": 22,
          "minX": 109,
          "maxX": 180,
          "speed": 113,
          "x": 109,
          "dir": 1
        },
        {
          "id": "rock_15",
          "type": "rock",
          "x": 188,
          "y": 1618,
          "radius": 23
        },
        {
          "id": "rock_16",
          "type": "rock",
          "x": 151,
          "y": 1541,
          "radius": 18
        },
        {
          "id": "gate_2",
          "type": "gate",
          "y": 1463,
          "leftX": 147,
          "rightX": 239,
          "postRadius": 11
        },
        {
          "id": "rock_17",
          "type": "rock",
          "x": 221,
          "y": 1385,
          "radius": 21
        },
        {
          "id": "log_7",
          "type": "log",
          "y": 1308,
          "width": 61,
          "height": 22,
          "minX": 166,
          "maxX": 233,
          "speed": 126,
          "x": 233,
          "dir": -1
        },
        {
          "id": "rock_18",
          "type": "rock",
          "x": 180,
          "y": 1230,
          "radius": 23
        },
        {
          "id": "rock_19",
          "type": "rock",
          "x": 239,
          "y": 1152,
          "radius": 18
        },
        {
          "id": "log_8",
          "type": "log",
          "y": 1075,
          "width": 60,
          "height": 22,
          "minX": 163,
          "maxX": 229,
          "speed": 119,
          "x": 163,
          "dir": 1
        },
        {
          "id": "gate_3",
          "type": "gate",
          "y": 997,
          "leftX": 133,
          "rightX": 225,
          "postRadius": 11
        },
        {
          "id": "rock_20",
          "type": "rock",
          "x": 143,
          "y": 919,
          "radius": 21
        },
        {
          "id": "rock_21",
          "type": "rock",
          "x": 169,
          "y": 842,
          "radius": 23
        },
        {
          "id": "log_9",
          "type": "log",
          "y": 764,
          "width": 60,
          "height": 22,
          "minX": 116,
          "maxX": 183,
          "speed": 112,
          "x": 183,
          "dir": -1
        },
        {
          "id": "rock_22",
          "type": "rock",
          "x": 116,
          "y": 686,
          "radius": 18
        },
        {
          "id": "gate_4",
          "type": "gate",
          "y": 608,
          "leftX": 123,
          "rightX": 215,
          "postRadius": 11
        },
        {
          "id": "rock_23",
          "type": "rock",
          "x": 231,
          "y": 531,
          "radius": 21
        },
        {
          "id": "log_10",
          "type": "log",
          "y": 453,
          "width": 62,
          "height": 22,
          "minX": 162,
          "maxX": 232,
          "speed": 125,
          "x": 162,
          "dir": 1
        },
        {
          "id": "rock_24",
          "type": "rock",
          "x": 187,
          "y": 375,
          "radius": 23
        },
        {
          "id": "rock_25",
          "type": "rock",
          "x": 241,
          "y": 298,
          "radius": 18
        }
      ]
    }
  },
  {
    "id": 44,
    "name": "The Boulder Labyrinth",
    "targetTime": 64,
    "hint": "A staggering rock labyrinth. Follow the open water seams; don't corner yourself.",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Labyrinth route planning",
    "world": {
      "width": 360,
      "height": 2500,
      "startX": 180,
      "startY": 2350,
      "finishX": 180,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.99,
      "waypoints": [
        {
          "y": 2500,
          "cx": 180,
          "width": 150
        },
        {
          "y": 2083,
          "cx": 218,
          "width": 150
        },
        {
          "y": 1667,
          "cx": 142,
          "width": 150
        },
        {
          "y": 1250,
          "cx": 218,
          "width": 142
        },
        {
          "y": 833,
          "cx": 142,
          "width": 142
        },
        {
          "y": 417,
          "cx": 218,
          "width": 150
        },
        {
          "y": 0,
          "cx": 180,
          "width": 150
        }
      ],
      "obstacles": [
        {
          "id": "rock_9",
          "type": "rock",
          "x": 256,
          "y": 2204,
          "radius": 21
        },
        {
          "id": "rock_10",
          "type": "rock",
          "x": 184,
          "y": 2127,
          "radius": 23
        },
        {
          "id": "rock_11",
          "type": "rock",
          "x": 216,
          "y": 2051,
          "radius": 18
        },
        {
          "id": "log_4",
          "type": "log",
          "y": 1975,
          "width": 63,
          "height": 22,
          "minX": 148,
          "maxX": 219,
          "speed": 120,
          "x": 219,
          "dir": -1
        },
        {
          "id": "rock_12",
          "type": "rock",
          "x": 125,
          "y": 1899,
          "radius": 21
        },
        {
          "id": "gate_1",
          "type": "gate",
          "y": 1822,
          "leftX": 99,
          "rightX": 191,
          "postRadius": 11
        },
        {
          "id": "rock_13",
          "type": "rock",
          "x": 190,
          "y": 1746,
          "radius": 23
        },
        {
          "id": "log_5",
          "type": "log",
          "y": 1670,
          "width": 63,
          "height": 22,
          "minX": 118,
          "maxX": 188,
          "speed": 113,
          "x": 118,
          "dir": 1
        },
        {
          "id": "rock_14",
          "type": "rock",
          "x": 129,
          "y": 1593,
          "radius": 18
        },
        {
          "id": "rock_15",
          "type": "rock",
          "x": 194,
          "y": 1517,
          "radius": 21
        },
        {
          "id": "rock_16",
          "type": "rock",
          "x": 153,
          "y": 1441,
          "radius": 23
        },
        {
          "id": "rock_17",
          "type": "rock",
          "x": 252,
          "y": 1364,
          "radius": 18
        },
        {
          "id": "gate_2",
          "type": "gate",
          "y": 1288,
          "leftX": 178,
          "rightX": 270,
          "postRadius": 11
        },
        {
          "id": "log_6",
          "type": "log",
          "y": 1212,
          "width": 60,
          "height": 22,
          "minX": 173,
          "maxX": 239,
          "speed": 126,
          "x": 239,
          "dir": -1
        },
        {
          "id": "rock_18",
          "type": "rock",
          "x": 181,
          "y": 1136,
          "radius": 21
        },
        {
          "id": "rock_19",
          "type": "rock",
          "x": 213,
          "y": 1059,
          "radius": 23
        },
        {
          "id": "rock_20",
          "type": "rock",
          "x": 123,
          "y": 983,
          "radius": 18
        },
        {
          "id": "log_7",
          "type": "log",
          "y": 907,
          "width": 60,
          "height": 22,
          "minX": 126,
          "maxX": 192,
          "speed": 119,
          "x": 126,
          "dir": 1
        },
        {
          "id": "rock_21",
          "type": "rock",
          "x": 190,
          "y": 830,
          "radius": 21
        },
        {
          "id": "rock_22",
          "type": "rock",
          "x": 128,
          "y": 754,
          "radius": 23
        },
        {
          "id": "gate_3",
          "type": "gate",
          "y": 678,
          "leftX": 115,
          "rightX": 207,
          "postRadius": 11
        },
        {
          "id": "rock_23",
          "type": "rock",
          "x": 197,
          "y": 601,
          "radius": 18
        },
        {
          "id": "log_8",
          "type": "log",
          "y": 525,
          "width": 62,
          "height": 22,
          "minX": 162,
          "maxX": 231,
          "speed": 112,
          "x": 231,
          "dir": -1
        },
        {
          "id": "rock_24",
          "type": "rock",
          "x": 153,
          "y": 449,
          "radius": 21
        },
        {
          "id": "rock_25",
          "type": "rock",
          "x": 253,
          "y": 373,
          "radius": 23
        },
        {
          "id": "rock_26",
          "type": "rock",
          "x": 186,
          "y": 296,
          "radius": 18
        }
      ]
    }
  },
  {
    "id": 45,
    "name": "Raging Flume",
    "targetTime": 64,
    "hint": "Narrow flume with high drift. Logs sweep at 120 px/s! Time your Hippo boost.",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Flume blitzing",
    "world": {
      "width": 360,
      "height": 2530,
      "startX": 180,
      "startY": 2380,
      "finishX": 180,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.99,
      "waypoints": [
        {
          "y": 2530,
          "cx": 180,
          "width": 145
        },
        {
          "y": 2108,
          "cx": 220,
          "width": 145
        },
        {
          "y": 1687,
          "cx": 140,
          "width": 145
        },
        {
          "y": 1265,
          "cx": 220,
          "width": 137
        },
        {
          "y": 843,
          "cx": 140,
          "width": 137
        },
        {
          "y": 422,
          "cx": 220,
          "width": 145
        },
        {
          "y": 0,
          "cx": 180,
          "width": 145
        }
      ],
      "obstacles": [
        {
          "id": "rock_11",
          "type": "rock",
          "x": 256,
          "y": 2233,
          "radius": 21
        },
        {
          "id": "rock_12",
          "type": "rock",
          "x": 181,
          "y": 2155,
          "radius": 23
        },
        {
          "id": "log_4",
          "type": "log",
          "y": 2078,
          "width": 61,
          "height": 22,
          "minX": 167,
          "maxX": 235,
          "speed": 125,
          "x": 235,
          "dir": -1
        },
        {
          "id": "rock_13",
          "type": "rock",
          "x": 210,
          "y": 2000,
          "radius": 18
        },
        {
          "id": "rock_14",
          "type": "rock",
          "x": 124,
          "y": 1923,
          "radius": 21
        },
        {
          "id": "log_5",
          "type": "log",
          "y": 1846,
          "width": 61,
          "height": 22,
          "minX": 133,
          "maxX": 201,
          "speed": 118,
          "x": 133,
          "dir": 1
        },
        {
          "id": "gate_1",
          "type": "gate",
          "y": 1768,
          "leftX": 101,
          "rightX": 193,
          "postRadius": 11
        },
        {
          "id": "rock_15",
          "type": "rock",
          "x": 180,
          "y": 1691,
          "radius": 23
        },
        {
          "id": "rock_16",
          "type": "rock",
          "x": 143,
          "y": 1613,
          "radius": 18
        },
        {
          "id": "log_6",
          "type": "log",
          "y": 1536,
          "width": 59,
          "height": 22,
          "minX": 144,
          "maxX": 211,
          "speed": 131,
          "x": 211,
          "dir": -1
        },
        {
          "id": "rock_17",
          "type": "rock",
          "x": 210,
          "y": 1459,
          "radius": 21
        },
        {
          "id": "log_7",
          "type": "log",
          "y": 1381,
          "width": 58,
          "height": 22,
          "minX": 180,
          "maxX": 243,
          "speed": 124,
          "x": 180,
          "dir": 1
        },
        {
          "id": "rock_18",
          "type": "rock",
          "x": 176,
          "y": 1304,
          "radius": 23
        },
        {
          "id": "gate_2",
          "type": "gate",
          "y": 1226,
          "leftX": 178,
          "rightX": 270,
          "postRadius": 11
        },
        {
          "id": "rock_19",
          "type": "rock",
          "x": 249,
          "y": 1149,
          "radius": 18
        },
        {
          "id": "rock_20",
          "type": "rock",
          "x": 158,
          "y": 1071,
          "radius": 21
        },
        {
          "id": "rock_21",
          "type": "rock",
          "x": 187,
          "y": 994,
          "radius": 23
        },
        {
          "id": "log_8",
          "type": "log",
          "y": 917,
          "width": 58,
          "height": 22,
          "minX": 133,
          "maxX": 196,
          "speed": 117,
          "x": 196,
          "dir": -1
        },
        {
          "id": "rock_22",
          "type": "rock",
          "x": 103,
          "y": 839,
          "radius": 18
        },
        {
          "id": "log_9",
          "type": "log",
          "y": 762,
          "width": 58,
          "height": 22,
          "minX": 118,
          "maxX": 181,
          "speed": 130,
          "x": 118,
          "dir": 1
        },
        {
          "id": "gate_3",
          "type": "gate",
          "y": 684,
          "leftX": 114,
          "rightX": 206,
          "postRadius": 11
        },
        {
          "id": "rock_23",
          "type": "rock",
          "x": 208,
          "y": 607,
          "radius": 21
        },
        {
          "id": "rock_24",
          "type": "rock",
          "x": 166,
          "y": 530,
          "radius": 23
        },
        {
          "id": "rock_25",
          "type": "rock",
          "x": 233,
          "y": 452,
          "radius": 18
        },
        {
          "id": "log_10",
          "type": "log",
          "y": 375,
          "width": 61,
          "height": 22,
          "minX": 180,
          "maxX": 248,
          "speed": 123,
          "x": 248,
          "dir": -1
        },
        {
          "id": "rock_26",
          "type": "rock",
          "x": 171,
          "y": 297,
          "radius": 21
        }
      ]
    }
  },
  {
    "id": 46,
    "name": "Scissor Rapids Extreme",
    "targetTime": 65,
    "hint": "Three pairs of scissor logs patrolling in sync. Dash through the moment they cross!",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Extreme scissor synchronization",
    "world": {
      "width": 360,
      "height": 2560,
      "startX": 180,
      "startY": 2410,
      "finishX": 180,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.99,
      "waypoints": [
        {
          "y": 2560,
          "cx": 180,
          "width": 145
        },
        {
          "y": 2133,
          "cx": 218,
          "width": 145
        },
        {
          "y": 1707,
          "cx": 142,
          "width": 145
        },
        {
          "y": 1280,
          "cx": 218,
          "width": 137
        },
        {
          "y": 853,
          "cx": 142,
          "width": 137
        },
        {
          "y": 427,
          "cx": 218,
          "width": 145
        },
        {
          "y": 0,
          "cx": 180,
          "width": 145
        }
      ],
      "obstacles": [
        {
          "id": "rock_12",
          "type": "rock",
          "x": 254,
          "y": 2264,
          "radius": 21
        },
        {
          "id": "log_4",
          "type": "log",
          "y": 2189,
          "width": 61,
          "height": 22,
          "minX": 171,
          "maxX": 239,
          "speed": 125,
          "x": 239,
          "dir": -1
        },
        {
          "id": "rock_13",
          "type": "rock",
          "x": 180,
          "y": 2113,
          "radius": 23
        },
        {
          "id": "rock_14",
          "type": "rock",
          "x": 210,
          "y": 2037,
          "radius": 18
        },
        {
          "id": "log_5",
          "type": "log",
          "y": 1961,
          "width": 61,
          "height": 22,
          "minX": 139,
          "maxX": 207,
          "speed": 118,
          "x": 139,
          "dir": 1
        },
        {
          "id": "rock_15",
          "type": "rock",
          "x": 125,
          "y": 1886,
          "radius": 21
        },
        {
          "id": "gate_1",
          "type": "gate",
          "y": 1810,
          "leftX": 102,
          "rightX": 194,
          "postRadius": 11
        },
        {
          "id": "rock_16",
          "type": "rock",
          "x": 182,
          "y": 1734,
          "radius": 23
        },
        {
          "id": "log_6",
          "type": "log",
          "y": 1659,
          "width": 60,
          "height": 22,
          "minX": 128,
          "maxX": 195,
          "speed": 131,
          "x": 195,
          "dir": -1
        },
        {
          "id": "rock_17",
          "type": "rock",
          "x": 143,
          "y": 1583,
          "radius": 18
        },
        {
          "id": "rock_18",
          "type": "rock",
          "x": 210,
          "y": 1507,
          "radius": 21
        },
        {
          "id": "log_7",
          "type": "log",
          "y": 1431,
          "width": 59,
          "height": 22,
          "minX": 162,
          "maxX": 227,
          "speed": 124,
          "x": 162,
          "dir": 1
        },
        {
          "id": "rock_19",
          "type": "rock",
          "x": 175,
          "y": 1356,
          "radius": 23
        },
        {
          "id": "gate_2",
          "type": "gate",
          "y": 1280,
          "leftX": 176,
          "rightX": 268,
          "postRadius": 11
        },
        {
          "id": "rock_20",
          "type": "rock",
          "x": 247,
          "y": 1204,
          "radius": 18
        },
        {
          "id": "log_8",
          "type": "log",
          "y": 1129,
          "width": 58,
          "height": 22,
          "minX": 159,
          "maxX": 222,
          "speed": 117,
          "x": 222,
          "dir": -1
        },
        {
          "id": "rock_21",
          "type": "rock",
          "x": 158,
          "y": 1053,
          "radius": 21
        },
        {
          "id": "log_9",
          "type": "log",
          "y": 977,
          "width": 58,
          "height": 22,
          "minX": 127,
          "maxX": 190,
          "speed": 130,
          "x": 127,
          "dir": 1
        },
        {
          "id": "rock_22",
          "type": "rock",
          "x": 187,
          "y": 901,
          "radius": 23
        },
        {
          "id": "rock_23",
          "type": "rock",
          "x": 105,
          "y": 826,
          "radius": 18
        },
        {
          "id": "gate_3",
          "type": "gate",
          "y": 750,
          "leftX": 115,
          "rightX": 207,
          "postRadius": 11
        },
        {
          "id": "rock_24",
          "type": "rock",
          "x": 209,
          "y": 674,
          "radius": 21
        },
        {
          "id": "log_10",
          "type": "log",
          "y": 599,
          "width": 59,
          "height": 22,
          "minX": 143,
          "maxX": 209,
          "speed": 123,
          "x": 209,
          "dir": -1
        },
        {
          "id": "rock_25",
          "type": "rock",
          "x": 165,
          "y": 523,
          "radius": 23
        },
        {
          "id": "rock_26",
          "type": "rock",
          "x": 232,
          "y": 447,
          "radius": 18
        },
        {
          "id": "log_11",
          "type": "log",
          "y": 371,
          "width": 60,
          "height": 22,
          "minX": 175,
          "maxX": 243,
          "speed": 116,
          "x": 175,
          "dir": 1
        },
        {
          "id": "rock_27",
          "type": "rock",
          "x": 169,
          "y": 296,
          "radius": 21
        }
      ]
    }
  },
  {
    "id": 47,
    "name": "Delta Chokepoint",
    "targetTime": 66,
    "hint": "River pinches to 135px with boulders pinching the channel. Perfect steering required.",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Extreme chokepoint navigation",
    "world": {
      "width": 360,
      "height": 2600,
      "startX": 180,
      "startY": 2450,
      "finishX": 180,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.99,
      "waypoints": [
        {
          "y": 2600,
          "cx": 180,
          "width": 145
        },
        {
          "y": 2167,
          "cx": 225,
          "width": 145
        },
        {
          "y": 1733,
          "cx": 135,
          "width": 145
        },
        {
          "y": 1300,
          "cx": 225,
          "width": 137
        },
        {
          "y": 867,
          "cx": 135,
          "width": 137
        },
        {
          "y": 433,
          "cx": 225,
          "width": 145
        },
        {
          "y": 0,
          "cx": 180,
          "width": 145
        }
      ],
      "obstacles": [
        {
          "id": "rock_11",
          "type": "rock",
          "x": 259,
          "y": 2303,
          "radius": 21
        },
        {
          "id": "rock_12",
          "type": "rock",
          "x": 188,
          "y": 2226,
          "radius": 23
        },
        {
          "id": "log_4",
          "type": "log",
          "y": 2149,
          "width": 61,
          "height": 22,
          "minX": 170,
          "maxX": 238,
          "speed": 127,
          "x": 238,
          "dir": -1
        },
        {
          "id": "rock_13",
          "type": "rock",
          "x": 216,
          "y": 2071,
          "radius": 18
        },
        {
          "id": "log_5",
          "type": "log",
          "y": 1994,
          "width": 61,
          "height": 22,
          "minX": 131,
          "maxX": 199,
          "speed": 120,
          "x": 131,
          "dir": 1
        },
        {
          "id": "rock_14",
          "type": "rock",
          "x": 122,
          "y": 1917,
          "radius": 21
        },
        {
          "id": "gate_1",
          "type": "gate",
          "y": 1840,
          "leftX": 99,
          "rightX": 191,
          "postRadius": 11
        },
        {
          "id": "rock_15",
          "type": "rock",
          "x": 182,
          "y": 1763,
          "radius": 23
        },
        {
          "id": "rock_16",
          "type": "rock",
          "x": 131,
          "y": 1686,
          "radius": 18
        },
        {
          "id": "rock_17",
          "type": "rock",
          "x": 200,
          "y": 1609,
          "radius": 21
        },
        {
          "id": "log_6",
          "type": "log",
          "y": 1531,
          "width": 59,
          "height": 22,
          "minX": 143,
          "maxX": 210,
          "speed": 133,
          "x": 210,
          "dir": -1
        },
        {
          "id": "rock_18",
          "type": "rock",
          "x": 168,
          "y": 1454,
          "radius": 23
        },
        {
          "id": "log_7",
          "type": "log",
          "y": 1377,
          "width": 58,
          "height": 22,
          "minX": 184,
          "maxX": 248,
          "speed": 126,
          "x": 184,
          "dir": 1
        },
        {
          "id": "gate_2",
          "type": "gate",
          "y": 1300,
          "leftX": 182,
          "rightX": 274,
          "postRadius": 11
        },
        {
          "id": "rock_19",
          "type": "rock",
          "x": 253,
          "y": 1223,
          "radius": 18
        },
        {
          "id": "rock_20",
          "type": "rock",
          "x": 173,
          "y": 1146,
          "radius": 21
        },
        {
          "id": "rock_21",
          "type": "rock",
          "x": 200,
          "y": 1069,
          "radius": 23
        },
        {
          "id": "log_8",
          "type": "log",
          "y": 991,
          "width": 58,
          "height": 22,
          "minX": 131,
          "maxX": 194,
          "speed": 119,
          "x": 194,
          "dir": -1
        },
        {
          "id": "rock_22",
          "type": "rock",
          "x": 107,
          "y": 914,
          "radius": 18
        },
        {
          "id": "rock_23",
          "type": "rock",
          "x": 181,
          "y": 837,
          "radius": 21
        },
        {
          "id": "log_9",
          "type": "log",
          "y": 760,
          "width": 58,
          "height": 22,
          "minX": 115,
          "maxX": 179,
          "speed": 132,
          "x": 115,
          "dir": 1
        },
        {
          "id": "rock_24",
          "type": "rock",
          "x": 147,
          "y": 683,
          "radius": 23
        },
        {
          "id": "gate_3",
          "type": "gate",
          "y": 606,
          "leftX": 112,
          "rightX": 204,
          "postRadius": 11
        },
        {
          "id": "rock_25",
          "type": "rock",
          "x": 216,
          "y": 529,
          "radius": 18
        },
        {
          "id": "log_10",
          "type": "log",
          "y": 451,
          "width": 61,
          "height": 22,
          "minX": 185,
          "maxX": 253,
          "speed": 125,
          "x": 253,
          "dir": -1
        },
        {
          "id": "rock_26",
          "type": "rock",
          "x": 179,
          "y": 374,
          "radius": 21
        },
        {
          "id": "rock_27",
          "type": "rock",
          "x": 256,
          "y": 297,
          "radius": 23
        }
      ]
    }
  },
  {
    "id": 48,
    "name": "Grand Slalom Blitz",
    "targetTime": 67,
    "hint": "Five precision gates across 2600px of cascading river. Maintain calm under pressure.",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Five-gate grand slalom",
    "world": {
      "width": 360,
      "height": 2630,
      "startX": 180,
      "startY": 2480,
      "finishX": 180,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.991,
      "waypoints": [
        {
          "y": 2630,
          "cx": 180,
          "width": 145
        },
        {
          "y": 2192,
          "cx": 222,
          "width": 145
        },
        {
          "y": 1753,
          "cx": 138,
          "width": 145
        },
        {
          "y": 1315,
          "cx": 222,
          "width": 137
        },
        {
          "y": 877,
          "cx": 138,
          "width": 137
        },
        {
          "y": 438,
          "cx": 222,
          "width": 145
        },
        {
          "y": 0,
          "cx": 180,
          "width": 145
        }
      ],
      "obstacles": [
        {
          "id": "rock_12",
          "type": "rock",
          "x": 256,
          "y": 2334,
          "radius": 21
        },
        {
          "id": "rock_13",
          "type": "rock",
          "x": 187,
          "y": 2259,
          "radius": 23
        },
        {
          "id": "gate_1",
          "type": "gate",
          "y": 2183,
          "leftX": 135,
          "rightX": 227,
          "postRadius": 11
        },
        {
          "id": "rock_14",
          "type": "rock",
          "x": 205,
          "y": 2108,
          "radius": 18
        },
        {
          "id": "log_6",
          "type": "log",
          "y": 2032,
          "width": 61,
          "height": 22,
          "minX": 146,
          "maxX": 214,
          "speed": 130,
          "x": 214,
          "dir": -1
        },
        {
          "id": "rock_15",
          "type": "rock",
          "x": 123,
          "y": 1957,
          "radius": 21
        },
        {
          "id": "log_7",
          "type": "log",
          "y": 1881,
          "width": 61,
          "height": 22,
          "minX": 112,
          "maxX": 180,
          "speed": 123,
          "x": 112,
          "dir": 1
        },
        {
          "id": "rock_16",
          "type": "rock",
          "x": 185,
          "y": 1806,
          "radius": 23
        },
        {
          "id": "rock_17",
          "type": "rock",
          "x": 121,
          "y": 1730,
          "radius": 18
        },
        {
          "id": "gate_2",
          "type": "gate",
          "y": 1655,
          "leftX": 117,
          "rightX": 209,
          "postRadius": 11
        },
        {
          "id": "rock_18",
          "type": "rock",
          "x": 200,
          "y": 1579,
          "radius": 21
        },
        {
          "id": "log_8",
          "type": "log",
          "y": 1504,
          "width": 58,
          "height": 22,
          "minX": 166,
          "maxX": 232,
          "speed": 136,
          "x": 232,
          "dir": -1
        },
        {
          "id": "rock_19",
          "type": "rock",
          "x": 166,
          "y": 1428,
          "radius": 23
        },
        {
          "id": "gate_3",
          "type": "gate",
          "y": 1353,
          "leftX": 174,
          "rightX": 266,
          "postRadius": 11
        },
        {
          "id": "rock_20",
          "type": "rock",
          "x": 251,
          "y": 1277,
          "radius": 18
        },
        {
          "id": "rock_21",
          "type": "rock",
          "x": 171,
          "y": 1202,
          "radius": 21
        },
        {
          "id": "log_9",
          "type": "log",
          "y": 1126,
          "width": 58,
          "height": 22,
          "minX": 164,
          "maxX": 227,
          "speed": 129,
          "x": 164,
          "dir": 1
        },
        {
          "id": "rock_22",
          "type": "rock",
          "x": 200,
          "y": 1051,
          "radius": 23
        },
        {
          "id": "rock_23",
          "type": "rock",
          "x": 119,
          "y": 975,
          "radius": 18
        },
        {
          "id": "gate_4",
          "type": "gate",
          "y": 900,
          "leftX": 99,
          "rightX": 191,
          "postRadius": 11
        },
        {
          "id": "rock_24",
          "type": "rock",
          "x": 184,
          "y": 824,
          "radius": 21
        },
        {
          "id": "log_10",
          "type": "log",
          "y": 749,
          "width": 58,
          "height": 22,
          "minX": 118,
          "maxX": 182,
          "speed": 122,
          "x": 182,
          "dir": -1
        },
        {
          "id": "rock_25",
          "type": "rock",
          "x": 148,
          "y": 673,
          "radius": 23
        },
        {
          "id": "log_11",
          "type": "log",
          "y": 598,
          "width": 59,
          "height": 22,
          "minX": 151,
          "maxX": 217,
          "speed": 135,
          "x": 151,
          "dir": 1
        },
        {
          "id": "gate_5",
          "type": "gate",
          "y": 522,
          "leftX": 157,
          "rightX": 249,
          "postRadius": 11
        },
        {
          "id": "rock_26",
          "type": "rock",
          "x": 228,
          "y": 447,
          "radius": 18
        },
        {
          "id": "rock_27",
          "type": "rock",
          "x": 177,
          "y": 371,
          "radius": 21
        },
        {
          "id": "rock_28",
          "type": "rock",
          "x": 254,
          "y": 296,
          "radius": 23
        }
      ]
    }
  },
  {
    "id": 49,
    "name": "Maelstrom Approach",
    "targetTime": 68,
    "hint": "Penultimate challenge: 27 hazards, rapid current, and brutal scissor traps.",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Maelstrom approach mastery",
    "world": {
      "width": 360,
      "height": 2660,
      "startX": 180,
      "startY": 2510,
      "finishX": 180,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.991,
      "waypoints": [
        {
          "y": 2660,
          "cx": 180,
          "width": 140
        },
        {
          "y": 2217,
          "cx": 225,
          "width": 140
        },
        {
          "y": 1773,
          "cx": 135,
          "width": 140
        },
        {
          "y": 1330,
          "cx": 225,
          "width": 135
        },
        {
          "y": 887,
          "cx": 135,
          "width": 135
        },
        {
          "y": 443,
          "cx": 225,
          "width": 140
        },
        {
          "y": 0,
          "cx": 180,
          "width": 140
        }
      ],
      "obstacles": [
        {
          "id": "rock_13",
          "type": "rock",
          "x": 256,
          "y": 2363,
          "radius": 21
        },
        {
          "id": "log_5",
          "type": "log",
          "y": 2287,
          "width": 59,
          "height": 22,
          "minX": 179,
          "maxX": 244,
          "speed": 133,
          "x": 244,
          "dir": -1
        },
        {
          "id": "rock_14",
          "type": "rock",
          "x": 186,
          "y": 2210,
          "radius": 23
        },
        {
          "id": "log_6",
          "type": "log",
          "y": 2134,
          "width": 59,
          "height": 22,
          "minX": 156,
          "maxX": 221,
          "speed": 126,
          "x": 156,
          "dir": 1
        },
        {
          "id": "rock_15",
          "type": "rock",
          "x": 212,
          "y": 2057,
          "radius": 18
        },
        {
          "id": "gate_1",
          "type": "gate",
          "y": 1981,
          "leftX": 124,
          "rightX": 216,
          "postRadius": 11
        },
        {
          "id": "rock_16",
          "type": "rock",
          "x": 119,
          "y": 1904,
          "radius": 21
        },
        {
          "id": "rock_17",
          "type": "rock",
          "x": 173,
          "y": 1828,
          "radius": 23
        },
        {
          "id": "log_7",
          "type": "log",
          "y": 1751,
          "width": 58,
          "height": 22,
          "minX": 125,
          "maxX": 190,
          "speed": 139,
          "x": 190,
          "dir": -1
        },
        {
          "id": "rock_18",
          "type": "rock",
          "x": 140,
          "y": 1674,
          "radius": 18
        },
        {
          "id": "gate_2",
          "type": "gate",
          "y": 1598,
          "leftX": 142,
          "rightX": 234,
          "postRadius": 11
        },
        {
          "id": "rock_19",
          "type": "rock",
          "x": 216,
          "y": 1521,
          "radius": 21
        },
        {
          "id": "log_8",
          "type": "log",
          "y": 1445,
          "width": 57,
          "height": 22,
          "minX": 165,
          "maxX": 229,
          "speed": 132,
          "x": 165,
          "dir": 1
        },
        {
          "id": "rock_20",
          "type": "rock",
          "x": 181,
          "y": 1368,
          "radius": 23
        },
        {
          "id": "rock_21",
          "type": "rock",
          "x": 251,
          "y": 1292,
          "radius": 18
        },
        {
          "id": "log_9",
          "type": "log",
          "y": 1215,
          "width": 57,
          "height": 22,
          "minX": 162,
          "maxX": 224,
          "speed": 125,
          "x": 224,
          "dir": -1
        },
        {
          "id": "rock_22",
          "type": "rock",
          "x": 164,
          "y": 1139,
          "radius": 21
        },
        {
          "id": "gate_3",
          "type": "gate",
          "y": 1062,
          "leftX": 132,
          "rightX": 224,
          "postRadius": 11
        },
        {
          "id": "rock_23",
          "type": "rock",
          "x": 183,
          "y": 986,
          "radius": 23
        },
        {
          "id": "log_10",
          "type": "log",
          "y": 909,
          "width": 57,
          "height": 22,
          "minX": 122,
          "maxX": 184,
          "speed": 138,
          "x": 122,
          "dir": 1
        },
        {
          "id": "rock_24",
          "type": "rock",
          "x": 101,
          "y": 832,
          "radius": 18
        },
        {
          "id": "rock_25",
          "type": "rock",
          "x": 200,
          "y": 756,
          "radius": 21
        },
        {
          "id": "gate_4",
          "type": "gate",
          "y": 679,
          "leftX": 129,
          "rightX": 221,
          "postRadius": 11
        },
        {
          "id": "log_11",
          "type": "log",
          "y": 603,
          "width": 58,
          "height": 22,
          "minX": 160,
          "maxX": 224,
          "speed": 131,
          "x": 224,
          "dir": -1
        },
        {
          "id": "rock_26",
          "type": "rock",
          "x": 168,
          "y": 526,
          "radius": 23
        },
        {
          "id": "rock_27",
          "type": "rock",
          "x": 239,
          "y": 450,
          "radius": 18
        },
        {
          "id": "log_12",
          "type": "log",
          "y": 373,
          "width": 59,
          "height": 22,
          "minX": 183,
          "maxX": 248,
          "speed": 124,
          "x": 183,
          "dir": 1
        },
        {
          "id": "rock_28",
          "type": "rock",
          "x": 176,
          "y": 297,
          "radius": 21
        }
      ]
    }
  },
  {
    "id": 50,
    "name": "The Legendary Delta",
    "targetTime": 70,
    "hint": "The Ultimate Challenge! 29 obstacles across 2700px. Prove yourself as Grand Captain!",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Grand Captain animal crew mastery",
    "world": {
      "width": 360,
      "height": 2700,
      "startX": 180,
      "startY": 2550,
      "finishX": 180,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.991,
      "waypoints": [
        {
          "y": 2700,
          "cx": 180,
          "width": 140
        },
        {
          "y": 2250,
          "cx": 228,
          "width": 140
        },
        {
          "y": 1800,
          "cx": 132,
          "width": 140
        },
        {
          "y": 1350,
          "cx": 228,
          "width": 135
        },
        {
          "y": 900,
          "cx": 132,
          "width": 135
        },
        {
          "y": 450,
          "cx": 228,
          "width": 140
        },
        {
          "y": 0,
          "cx": 180,
          "width": 140
        }
      ],
      "obstacles": [
        {
          "id": "rock_14",
          "type": "rock",
          "x": 258,
          "y": 2407,
          "radius": 21
        },
        {
          "id": "log_5",
          "type": "log",
          "y": 2334,
          "width": 59,
          "height": 22,
          "minX": 187,
          "maxX": 252,
          "speed": 135,
          "x": 252,
          "dir": -1
        },
        {
          "id": "rock_15",
          "type": "rock",
          "x": 192,
          "y": 2261,
          "radius": 23
        },
        {
          "id": "rock_16",
          "type": "rock",
          "x": 218,
          "y": 2188,
          "radius": 18
        },
        {
          "id": "log_6",
          "type": "log",
          "y": 2115,
          "width": 59,
          "height": 22,
          "minX": 156,
          "maxX": 221,
          "speed": 128,
          "x": 156,
          "dir": 1
        },
        {
          "id": "gate_1",
          "type": "gate",
          "y": 2043,
          "leftX": 124,
          "rightX": 216,
          "postRadius": 11
        },
        {
          "id": "rock_17",
          "type": "rock",
          "x": 125,
          "y": 1970,
          "radius": 21
        },
        {
          "id": "rock_18",
          "type": "rock",
          "x": 178,
          "y": 1897,
          "radius": 23
        },
        {
          "id": "log_7",
          "type": "log",
          "y": 1824,
          "width": 59,
          "height": 22,
          "minX": 108,
          "maxX": 172,
          "speed": 141,
          "x": 172,
          "dir": -1
        },
        {
          "id": "rock_19",
          "type": "rock",
          "x": 129,
          "y": 1751,
          "radius": 18
        },
        {
          "id": "log_8",
          "type": "log",
          "y": 1678,
          "width": 58,
          "height": 22,
          "minX": 139,
          "maxX": 203,
          "speed": 134,
          "x": 139,
          "dir": 1
        },
        {
          "id": "rock_20",
          "type": "rock",
          "x": 217,
          "y": 1605,
          "radius": 21
        },
        {
          "id": "gate_2",
          "type": "gate",
          "y": 1532,
          "leftX": 142,
          "rightX": 234,
          "postRadius": 11
        },
        {
          "id": "rock_21",
          "type": "rock",
          "x": 171,
          "y": 1459,
          "radius": 23
        },
        {
          "id": "rock_22",
          "type": "rock",
          "x": 267,
          "y": 1386,
          "radius": 18
        },
        {
          "id": "log_9",
          "type": "log",
          "y": 1314,
          "width": 57,
          "height": 22,
          "minX": 190,
          "maxX": 252,
          "speed": 127,
          "x": 252,
          "dir": -1
        },
        {
          "id": "rock_23",
          "type": "rock",
          "x": 174,
          "y": 1241,
          "radius": 21
        },
        {
          "id": "log_10",
          "type": "log",
          "y": 1168,
          "width": 57,
          "height": 22,
          "minX": 159,
          "maxX": 221,
          "speed": 140,
          "x": 159,
          "dir": 1
        },
        {
          "id": "gate_3",
          "type": "gate",
          "y": 1095,
          "leftX": 132,
          "rightX": 224,
          "postRadius": 11
        },
        {
          "id": "rock_24",
          "type": "rock",
          "x": 192,
          "y": 1022,
          "radius": 23
        },
        {
          "id": "rock_25",
          "type": "rock",
          "x": 106,
          "y": 949,
          "radius": 18
        },
        {
          "id": "log_11",
          "type": "log",
          "y": 876,
          "width": 57,
          "height": 22,
          "minX": 108,
          "maxX": 170,
          "speed": 133,
          "x": 170,
          "dir": -1
        },
        {
          "id": "rock_26",
          "type": "rock",
          "x": 178,
          "y": 803,
          "radius": 21
        },
        {
          "id": "log_12",
          "type": "log",
          "y": 730,
          "width": 58,
          "height": 22,
          "minX": 138,
          "maxX": 201,
          "speed": 126,
          "x": 138,
          "dir": 1
        },
        {
          "id": "rock_27",
          "type": "rock",
          "x": 148,
          "y": 657,
          "radius": 23
        },
        {
          "id": "gate_4",
          "type": "gate",
          "y": 585,
          "leftX": 130,
          "rightX": 222,
          "postRadius": 11
        },
        {
          "id": "rock_28",
          "type": "rock",
          "x": 218,
          "y": 512,
          "radius": 18
        },
        {
          "id": "rock_29",
          "type": "rock",
          "x": 185,
          "y": 439,
          "radius": 21
        },
        {
          "id": "log_13",
          "type": "log",
          "y": 366,
          "width": 59,
          "height": 22,
          "minX": 192,
          "maxX": 257,
          "speed": 139,
          "x": 257,
          "dir": -1
        },
        {
          "id": "rock_30",
          "type": "rock",
          "x": 256,
          "y": 293,
          "radius": 23
        }
      ]
    }
  }
];
