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
          "y": 481,
          "width": 78,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 58,
          "x": 265,
          "dir": -1
        },
        {
          "id": "rock2",
          "type": "rock",
          "x": 215,
          "y": 501,
          "radius": 22
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
          "id": "gate1",
          "type": "gate",
          "y": 508,
          "leftX": 115,
          "rightX": 245,
          "postRadius": 18
        },
        {
          "id": "log2",
          "type": "log",
          "y": 644,
          "width": 78,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 46,
          "x": 265,
          "dir": -1
        },
        {
          "id": "log3",
          "type": "log",
          "y": 372,
          "width": 78,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 46,
          "x": 95,
          "dir": 1
        },
        {
          "id": "rock4",
          "type": "rock",
          "x": 215,
          "y": 681,
          "radius": 22
        },
        {
          "id": "rock5",
          "type": "rock",
          "x": 128,
          "y": 375,
          "radius": 24
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
          "id": "gate1",
          "type": "gate",
          "y": 522,
          "leftX": 115,
          "rightX": 245,
          "postRadius": 18
        },
        {
          "id": "log2",
          "type": "log",
          "y": 522,
          "width": 77,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 48,
          "x": 95,
          "dir": 1
        },
        {
          "id": "rock3",
          "type": "rock",
          "x": 215,
          "y": 542,
          "radius": 22
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
          "id": "log1",
          "type": "log",
          "y": 535,
          "width": 77,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 50,
          "x": 265,
          "dir": -1
        },
        {
          "id": "rock2",
          "type": "rock",
          "x": 215,
          "y": 717,
          "radius": 22
        },
        {
          "id": "rock3",
          "type": "rock",
          "x": 128,
          "y": 393,
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
          "y": 698,
          "width": 77,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 52,
          "x": 95,
          "dir": 1
        },
        {
          "id": "log2",
          "type": "log",
          "y": 399,
          "width": 77,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 52,
          "x": 265,
          "dir": -1
        },
        {
          "id": "rock3",
          "type": "rock",
          "x": 215,
          "y": 569,
          "radius": 22
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
          "y": 562,
          "leftX": 115,
          "rightX": 245,
          "postRadius": 18
        },
        {
          "id": "log2",
          "type": "log",
          "y": 562,
          "width": 77,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 54,
          "x": 265,
          "dir": -1
        },
        {
          "id": "rock3",
          "type": "rock",
          "x": 215,
          "y": 753,
          "radius": 22
        },
        {
          "id": "rock4",
          "type": "rock",
          "x": 128,
          "y": 411,
          "radius": 24
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
          "y": 576,
          "width": 77,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 56,
          "x": 95,
          "dir": 1
        },
        {
          "id": "rock2",
          "type": "rock",
          "x": 215,
          "y": 596,
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
          "id": "log1",
          "type": "log",
          "y": 834,
          "width": 77,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 58,
          "x": 265,
          "dir": -1
        },
        {
          "id": "log2",
          "type": "log",
          "y": 589,
          "width": 77,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 58,
          "x": 95,
          "dir": 1
        },
        {
          "id": "log3",
          "type": "log",
          "y": 345,
          "width": 77,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 58,
          "x": 265,
          "dir": -1
        },
        {
          "id": "rock4",
          "type": "rock",
          "x": 215,
          "y": 879,
          "radius": 22
        },
        {
          "id": "rock5",
          "type": "rock",
          "x": 128,
          "y": 609,
          "radius": 24
        },
        {
          "id": "rock6",
          "type": "rock",
          "x": 249,
          "y": 340,
          "radius": 26
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
          "id": "log1",
          "type": "log",
          "y": 770,
          "width": 77,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 44,
          "x": 95,
          "dir": 1
        },
        {
          "id": "log2",
          "type": "log",
          "y": 435,
          "width": 77,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 44,
          "x": 265,
          "dir": -1
        },
        {
          "id": "rock3",
          "type": "rock",
          "x": 215,
          "y": 807,
          "radius": 22
        },
        {
          "id": "rock4",
          "type": "rock",
          "x": 128,
          "y": 438,
          "radius": 24
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
          "id": "log1",
          "type": "log",
          "y": 788,
          "width": 77,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 46,
          "x": 265,
          "dir": -1
        },
        {
          "id": "log2",
          "type": "log",
          "y": 444,
          "width": 77,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 46,
          "x": 95,
          "dir": 1
        },
        {
          "id": "rock3",
          "type": "rock",
          "x": 215,
          "y": 919,
          "radius": 22
        },
        {
          "id": "rock4",
          "type": "rock",
          "x": 128,
          "y": 636,
          "radius": 24
        },
        {
          "id": "rock5",
          "type": "rock",
          "x": 249,
          "y": 353,
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
          "id": "gate1",
          "type": "gate",
          "y": 630,
          "leftX": 115,
          "rightX": 245,
          "postRadius": 18
        },
        {
          "id": "log2",
          "type": "log",
          "y": 894,
          "width": 77,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 48,
          "x": 95,
          "dir": 1
        },
        {
          "id": "log3",
          "type": "log",
          "y": 630,
          "width": 77,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 48,
          "x": 265,
          "dir": -1
        },
        {
          "id": "log4",
          "type": "log",
          "y": 365,
          "width": 77,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 48,
          "x": 95,
          "dir": 1
        },
        {
          "id": "rock5",
          "type": "rock",
          "x": 215,
          "y": 843,
          "radius": 22
        },
        {
          "id": "rock6",
          "type": "rock",
          "x": 128,
          "y": 456,
          "radius": 24
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
          "id": "log1",
          "type": "log",
          "y": 824,
          "width": 77,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 50,
          "x": 265,
          "dir": -1
        },
        {
          "id": "log2",
          "type": "log",
          "y": 462,
          "width": 77,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 50,
          "x": 95,
          "dir": 1
        },
        {
          "id": "rock3",
          "type": "rock",
          "x": 215,
          "y": 960,
          "radius": 22
        },
        {
          "id": "rock4",
          "type": "rock",
          "x": 128,
          "y": 663,
          "radius": 24
        },
        {
          "id": "rock5",
          "type": "rock",
          "x": 249,
          "y": 367,
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
          "id": "gate1",
          "type": "gate",
          "y": 657,
          "leftX": 115,
          "rightX": 245,
          "postRadius": 18
        },
        {
          "id": "log2",
          "type": "log",
          "y": 842,
          "width": 76,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 52,
          "x": 95,
          "dir": 1
        },
        {
          "id": "log3",
          "type": "log",
          "y": 471,
          "width": 76,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 52,
          "x": 265,
          "dir": -1
        },
        {
          "id": "rock4",
          "type": "rock",
          "x": 215,
          "y": 879,
          "radius": 22
        },
        {
          "id": "rock5",
          "type": "rock",
          "x": 128,
          "y": 474,
          "radius": 24
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
          "id": "log1",
          "type": "log",
          "y": 955,
          "width": 76,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 54,
          "x": 265,
          "dir": -1
        },
        {
          "id": "log2",
          "type": "log",
          "y": 670,
          "width": 76,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 54,
          "x": 95,
          "dir": 1
        },
        {
          "id": "log3",
          "type": "log",
          "y": 385,
          "width": 76,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 54,
          "x": 265,
          "dir": -1
        },
        {
          "id": "rock4",
          "type": "rock",
          "x": 215,
          "y": 1062,
          "radius": 22
        },
        {
          "id": "rock5",
          "type": "rock",
          "x": 128,
          "y": 814,
          "radius": 24
        },
        {
          "id": "rock6",
          "type": "rock",
          "x": 249,
          "y": 566,
          "radius": 26
        },
        {
          "id": "rock7",
          "type": "rock",
          "x": 139,
          "y": 318,
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
          "id": "gate1",
          "type": "gate",
          "y": 861,
          "leftX": 115,
          "rightX": 245,
          "postRadius": 18
        },
        {
          "id": "gate2",
          "type": "gate",
          "y": 506,
          "leftX": 135,
          "rightX": 265,
          "postRadius": 18
        },
        {
          "id": "log3",
          "type": "log",
          "y": 878,
          "width": 76,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 56,
          "x": 95,
          "dir": 1
        },
        {
          "id": "log4",
          "type": "log",
          "y": 489,
          "width": 76,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 56,
          "x": 265,
          "dir": -1
        },
        {
          "id": "rock5",
          "type": "rock",
          "x": 215,
          "y": 1020,
          "radius": 22
        },
        {
          "id": "rock6",
          "type": "rock",
          "x": 128,
          "y": 704,
          "radius": 24
        },
        {
          "id": "rock7",
          "type": "rock",
          "x": 249,
          "y": 387,
          "radius": 26
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
          "y": 1350,
          "radius": 21
        },
        {
          "id": "log_2",
          "type": "log",
          "y": 1227,
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
          "y": 1172,
          "radius": 23
        },
        {
          "id": "rock_8",
          "type": "rock",
          "x": 202,
          "y": 1029,
          "radius": 18
        },
        {
          "id": "log_3",
          "type": "log",
          "y": 1019,
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
          "y": 913,
          "radius": 21
        },
        {
          "id": "gate_1",
          "type": "gate",
          "y": 865,
          "leftX": 144,
          "rightX": 236,
          "postRadius": 11
        },
        {
          "id": "log_4",
          "type": "log",
          "y": 711,
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
          "y": 709,
          "radius": 23
        },
        {
          "id": "rock_11",
          "type": "rock",
          "x": 138,
          "y": 531,
          "radius": 18
        },
        {
          "id": "log_5",
          "type": "log",
          "y": 503,
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
          "y": 388,
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
          "y": 1409,
          "radius": 21
        },
        {
          "id": "rock_6",
          "type": "rock",
          "x": 135,
          "y": 1260,
          "radius": 23
        },
        {
          "id": "log_2",
          "type": "log",
          "y": 1185,
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
          "y": 1147,
          "radius": 18
        },
        {
          "id": "rock_8",
          "type": "rock",
          "x": 133,
          "y": 998,
          "radius": 21
        },
        {
          "id": "log_3",
          "type": "log",
          "y": 935,
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
          "y": 880,
          "leftX": 157,
          "rightX": 249,
          "postRadius": 11
        },
        {
          "id": "rock_9",
          "type": "rock",
          "x": 261,
          "y": 832,
          "radius": 23
        },
        {
          "id": "rock_10",
          "type": "rock",
          "x": 154,
          "y": 736,
          "radius": 18
        },
        {
          "id": "rock_11",
          "type": "rock",
          "x": 170,
          "y": 623,
          "radius": 21
        },
        {
          "id": "log_4",
          "type": "log",
          "y": 525,
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
          "y": 474,
          "radius": 23
        },
        {
          "id": "rock_13",
          "type": "rock",
          "x": 267,
          "y": 361,
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
          "y": 1476,
          "radius": 21
        },
        {
          "id": "rock_5",
          "type": "rock",
          "x": 154,
          "y": 1355,
          "radius": 23
        },
        {
          "id": "rock_6",
          "type": "rock",
          "x": 188,
          "y": 1269,
          "radius": 18
        },
        {
          "id": "rock_7",
          "type": "rock",
          "x": 108,
          "y": 1148,
          "radius": 21
        },
        {
          "id": "log_2",
          "type": "log",
          "y": 1102,
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
          "y": 1062,
          "radius": 23
        },
        {
          "id": "rock_9",
          "type": "rock",
          "x": 176,
          "y": 940,
          "radius": 18
        },
        {
          "id": "gate_1",
          "type": "gate",
          "y": 900,
          "leftX": 141,
          "rightX": 233,
          "postRadius": 11
        },
        {
          "id": "rock_10",
          "type": "rock",
          "x": 220,
          "y": 855,
          "radius": 21
        },
        {
          "id": "rock_11",
          "type": "rock",
          "x": 123,
          "y": 733,
          "radius": 23
        },
        {
          "id": "log_3",
          "type": "log",
          "y": 698,
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
          "y": 647,
          "radius": 18
        },
        {
          "id": "rock_13",
          "type": "rock",
          "x": 144,
          "y": 526,
          "radius": 21
        },
        {
          "id": "rock_14",
          "type": "rock",
          "x": 206,
          "y": 440,
          "radius": 23
        },
        {
          "id": "rock_15",
          "type": "rock",
          "x": 141,
          "y": 319,
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
          "y": 1457,
          "radius": 21
        },
        {
          "id": "log_2",
          "type": "log",
          "y": 1353,
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
          "y": 1285,
          "radius": 23
        },
        {
          "id": "log_3",
          "type": "log",
          "y": 1172,
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
          "y": 1150,
          "radius": 18
        },
        {
          "id": "rock_10",
          "type": "rock",
          "x": 144,
          "y": 978,
          "radius": 21
        },
        {
          "id": "gate_1",
          "type": "gate",
          "y": 915,
          "leftX": 146,
          "rightX": 238,
          "postRadius": 11
        },
        {
          "id": "log_4",
          "type": "log",
          "y": 860,
          "width": 72,
          "height": 22,
          "minX": 155,
          "maxX": 239,
          "speed": 101,
          "x": 239,
          "dir": -1
        },
        {
          "id": "rock_11",
          "type": "rock",
          "x": 247,
          "y": 843,
          "radius": 23
        },
        {
          "id": "log_5",
          "type": "log",
          "y": 708,
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
          "y": 671,
          "radius": 18
        },
        {
          "id": "rock_13",
          "type": "rock",
          "x": 190,
          "y": 536,
          "radius": 21
        },
        {
          "id": "log_6",
          "type": "log",
          "y": 427,
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
          "y": 364,
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
          "y": 1483,
          "radius": 21
        },
        {
          "id": "rock_8",
          "type": "rock",
          "x": 139,
          "y": 1333,
          "radius": 23
        },
        {
          "id": "gate_1",
          "type": "gate",
          "y": 1285,
          "leftX": 90,
          "rightX": 182,
          "postRadius": 11
        },
        {
          "id": "log_4",
          "type": "log",
          "y": 1230,
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
          "y": 1170,
          "radius": 18
        },
        {
          "id": "rock_10",
          "type": "rock",
          "x": 147,
          "y": 995,
          "radius": 21
        },
        {
          "id": "log_5",
          "type": "log",
          "y": 985,
          "width": 73,
          "height": 22,
          "minX": 163,
          "maxX": 247,
          "speed": 88,
          "x": 163,
          "dir": 1
        },
        {
          "id": "gate_2",
          "type": "gate",
          "y": 930,
          "leftX": 183,
          "rightX": 275,
          "postRadius": 11
        },
        {
          "id": "rock_11",
          "type": "rock",
          "x": 249,
          "y": 856,
          "radius": 23
        },
        {
          "id": "rock_12",
          "type": "rock",
          "x": 133,
          "y": 681,
          "radius": 18
        },
        {
          "id": "gate_3",
          "type": "gate",
          "y": 575,
          "leftX": 111,
          "rightX": 203,
          "postRadius": 11
        },
        {
          "id": "rock_13",
          "type": "rock",
          "x": 191,
          "y": 527,
          "radius": 21
        },
        {
          "id": "log_6",
          "type": "log",
          "y": 520,
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
          "y": 368,
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
          "y": 1548,
          "radius": 21
        },
        {
          "id": "rock_8",
          "type": "rock",
          "x": 147,
          "y": 1399,
          "radius": 23
        },
        {
          "id": "log_3",
          "type": "log",
          "y": 1363,
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
          "y": 1285,
          "radius": 18
        },
        {
          "id": "gate_1",
          "type": "gate",
          "y": 1193,
          "leftX": 102,
          "rightX": 194,
          "postRadius": 11
        },
        {
          "id": "rock_10",
          "type": "rock",
          "x": 115,
          "y": 1135,
          "radius": 21
        },
        {
          "id": "log_4",
          "type": "log",
          "y": 1121,
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
          "y": 1021,
          "radius": 23
        },
        {
          "id": "rock_12",
          "type": "rock",
          "x": 172,
          "y": 872,
          "radius": 18
        },
        {
          "id": "log_5",
          "type": "log",
          "y": 779,
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
          "y": 758,
          "radius": 21
        },
        {
          "id": "gate_2",
          "type": "gate",
          "y": 707,
          "leftX": 130,
          "rightX": 222,
          "postRadius": 11
        },
        {
          "id": "rock_14",
          "type": "rock",
          "x": 94,
          "y": 608,
          "radius": 23
        },
        {
          "id": "log_6",
          "type": "log",
          "y": 537,
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
          "y": 494,
          "radius": 18
        },
        {
          "id": "rock_16",
          "type": "rock",
          "x": 186,
          "y": 345,
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
          "y": 1562,
          "radius": 21
        },
        {
          "id": "log_2",
          "type": "log",
          "y": 1472,
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
          "y": 1396,
          "radius": 23
        },
        {
          "id": "log_3",
          "type": "log",
          "y": 1309,
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
          "y": 1266,
          "radius": 18
        },
        {
          "id": "rock_11",
          "type": "rock",
          "x": 133,
          "y": 1100,
          "radius": 21
        },
        {
          "id": "log_4",
          "type": "log",
          "y": 1046,
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
          "y": 965,
          "leftX": 146,
          "rightX": 238,
          "postRadius": 11
        },
        {
          "id": "rock_12",
          "type": "rock",
          "x": 250,
          "y": 917,
          "radius": 23
        },
        {
          "id": "log_5",
          "type": "log",
          "y": 884,
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
          "y": 804,
          "radius": 18
        },
        {
          "id": "rock_14",
          "type": "rock",
          "x": 178,
          "y": 674,
          "radius": 21
        },
        {
          "id": "log_6",
          "type": "log",
          "y": 621,
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
          "y": 508,
          "radius": 23
        },
        {
          "id": "log_7",
          "type": "log",
          "y": 458,
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
          "y": 378,
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
          "y": 1633,
          "radius": 21
        },
        {
          "id": "rock_9",
          "type": "rock",
          "x": 153,
          "y": 1487,
          "radius": 23
        },
        {
          "id": "log_3",
          "type": "log",
          "y": 1478,
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
          "y": 1378,
          "radius": 18
        },
        {
          "id": "log_4",
          "type": "log",
          "y": 1302,
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
          "y": 1295,
          "radius": 21
        },
        {
          "id": "gate_1",
          "type": "gate",
          "y": 1247,
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
          "y": 978,
          "radius": 18
        },
        {
          "id": "log_5",
          "type": "log",
          "y": 965,
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
          "y": 869,
          "radius": 21
        },
        {
          "id": "log_6",
          "type": "log",
          "y": 788,
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
          "y": 781,
          "radius": 23
        },
        {
          "id": "gate_2",
          "type": "gate",
          "y": 733,
          "leftX": 126,
          "rightX": 218,
          "postRadius": 11
        },
        {
          "id": "rock_16",
          "type": "rock",
          "x": 209,
          "y": 614,
          "radius": 18
        },
        {
          "id": "rock_17",
          "type": "rock",
          "x": 163,
          "y": 469,
          "radius": 21
        },
        {
          "id": "log_7",
          "type": "log",
          "y": 452,
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
          "y": 359,
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
          "y": 1660,
          "radius": 21
        },
        {
          "id": "rock_8",
          "type": "rock",
          "x": 154,
          "y": 1512,
          "radius": 23
        },
        {
          "id": "log_3",
          "type": "log",
          "y": 1451,
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
          "y": 1401,
          "radius": 18
        },
        {
          "id": "rock_10",
          "type": "rock",
          "x": 99,
          "y": 1315,
          "radius": 21
        },
        {
          "id": "gate_1",
          "type": "gate",
          "y": 1267,
          "leftX": 101,
          "rightX": 193,
          "postRadius": 11
        },
        {
          "id": "log_4",
          "type": "log",
          "y": 1187,
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
          "y": 1141,
          "radius": 23
        },
        {
          "id": "rock_12",
          "type": "rock",
          "x": 186,
          "y": 993,
          "radius": 18
        },
        {
          "id": "rock_13",
          "type": "rock",
          "x": 211,
          "y": 881,
          "radius": 21
        },
        {
          "id": "log_5",
          "type": "log",
          "y": 823,
          "width": 68,
          "height": 22,
          "minX": 136,
          "maxX": 214,
          "speed": 106,
          "x": 214,
          "dir": -1
        },
        {
          "id": "rock_14",
          "type": "rock",
          "x": 121,
          "y": 791,
          "radius": 23
        },
        {
          "id": "gate_2",
          "type": "gate",
          "y": 743,
          "leftX": 129,
          "rightX": 221,
          "postRadius": 11
        },
        {
          "id": "rock_15",
          "type": "rock",
          "x": 210,
          "y": 622,
          "radius": 18
        },
        {
          "id": "log_6",
          "type": "log",
          "y": 559,
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
          "y": 474,
          "radius": 21
        },
        {
          "id": "rock_17",
          "type": "rock",
          "x": 234,
          "y": 362,
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
          "y": 1676,
          "radius": 21
        },
        {
          "id": "log_3",
          "type": "log",
          "y": 1566,
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
          "y": 1513,
          "radius": 23
        },
        {
          "id": "log_4",
          "type": "log",
          "y": 1388,
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
          "y": 1387,
          "radius": 18
        },
        {
          "id": "gate_1",
          "type": "gate",
          "y": 1287,
          "leftX": 103,
          "rightX": 195,
          "postRadius": 11
        },
        {
          "id": "rock_12",
          "type": "rock",
          "x": 124,
          "y": 1224,
          "radius": 21
        },
        {
          "id": "log_5",
          "type": "log",
          "y": 1109,
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
          "y": 1098,
          "radius": 23
        },
        {
          "id": "rock_14",
          "type": "rock",
          "x": 169,
          "y": 935,
          "radius": 18
        },
        {
          "id": "log_6",
          "type": "log",
          "y": 931,
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
          "y": 809,
          "radius": 21
        },
        {
          "id": "gate_2",
          "type": "gate",
          "y": 753,
          "leftX": 132,
          "rightX": 224,
          "postRadius": 11
        },
        {
          "id": "log_7",
          "type": "log",
          "y": 652,
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
          "y": 646,
          "radius": 23
        },
        {
          "id": "rock_17",
          "type": "rock",
          "x": 234,
          "y": 520,
          "radius": 18
        },
        {
          "id": "log_8",
          "type": "log",
          "y": 474,
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
          "y": 357,
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
          "y": 1735,
          "radius": 21
        },
        {
          "id": "rock_9",
          "type": "rock",
          "x": 160,
          "y": 1592,
          "radius": 23
        },
        {
          "id": "log_4",
          "type": "log",
          "y": 1507,
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
          "y": 1485,
          "radius": 18
        },
        {
          "id": "gate_1",
          "type": "gate",
          "y": 1450,
          "leftX": 89,
          "rightX": 181,
          "postRadius": 11
        },
        {
          "id": "rock_11",
          "type": "rock",
          "x": 103,
          "y": 1341,
          "radius": 21
        },
        {
          "id": "rock_12",
          "type": "rock",
          "x": 226,
          "y": 1234,
          "radius": 23
        },
        {
          "id": "log_5",
          "type": "log",
          "y": 1229,
          "width": 68,
          "height": 22,
          "minX": 141,
          "maxX": 218,
          "speed": 98,
          "x": 141,
          "dir": 1
        },
        {
          "id": "rock_13",
          "type": "rock",
          "x": 187,
          "y": 1091,
          "radius": 18
        },
        {
          "id": "gate_2",
          "type": "gate",
          "y": 1040,
          "leftX": 188,
          "rightX": 280,
          "postRadius": 11
        },
        {
          "id": "rock_14",
          "type": "rock",
          "x": 229,
          "y": 984,
          "radius": 21
        },
        {
          "id": "log_6",
          "type": "log",
          "y": 851,
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
          "y": 841,
          "radius": 23
        },
        {
          "id": "rock_16",
          "type": "rock",
          "x": 198,
          "y": 734,
          "radius": 18
        },
        {
          "id": "gate_3",
          "type": "gate",
          "y": 630,
          "leftX": 110,
          "rightX": 202,
          "postRadius": 11
        },
        {
          "id": "rock_17",
          "type": "rock",
          "x": 141,
          "y": 590,
          "radius": 21
        },
        {
          "id": "log_7",
          "type": "log",
          "y": 573,
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
          "y": 483,
          "radius": 23
        },
        {
          "id": "rock_19",
          "type": "rock",
          "x": 164,
          "y": 340,
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
          "y": 1752,
          "radius": 21
        },
        {
          "id": "rock_10",
          "type": "rock",
          "x": 156,
          "y": 1596,
          "radius": 23
        },
        {
          "id": "gate_1",
          "type": "gate",
          "y": 1556,
          "leftX": 108,
          "rightX": 200,
          "postRadius": 11
        },
        {
          "id": "log_5",
          "type": "log",
          "y": 1501,
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
          "y": 1476,
          "radius": 18
        },
        {
          "id": "rock_12",
          "type": "rock",
          "x": 112,
          "y": 1319,
          "radius": 21
        },
        {
          "id": "log_6",
          "type": "log",
          "y": 1277,
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
          "y": 1222,
          "leftX": 155,
          "rightX": 247,
          "postRadius": 11
        },
        {
          "id": "rock_13",
          "type": "rock",
          "x": 243,
          "y": 1174,
          "radius": 23
        },
        {
          "id": "rock_14",
          "type": "rock",
          "x": 193,
          "y": 1043,
          "radius": 18
        },
        {
          "id": "rock_15",
          "type": "rock",
          "x": 212,
          "y": 923,
          "radius": 21
        },
        {
          "id": "gate_3",
          "type": "gate",
          "y": 888,
          "leftX": 134,
          "rightX": 226,
          "postRadius": 11
        },
        {
          "id": "log_7",
          "type": "log",
          "y": 833,
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
          "y": 767,
          "radius": 23
        },
        {
          "id": "rock_17",
          "type": "rock",
          "x": 204,
          "y": 647,
          "radius": 18
        },
        {
          "id": "log_8",
          "type": "log",
          "y": 609,
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
          "y": 554,
          "leftX": 113,
          "rightX": 205,
          "postRadius": 11
        },
        {
          "id": "rock_18",
          "type": "rock",
          "x": 166,
          "y": 490,
          "radius": 21
        },
        {
          "id": "rock_19",
          "type": "rock",
          "x": 242,
          "y": 370,
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
          "y": 1808,
          "radius": 21
        },
        {
          "id": "rock_9",
          "type": "rock",
          "x": 167,
          "y": 1677,
          "radius": 23
        },
        {
          "id": "log_3",
          "type": "log",
          "y": 1612,
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
          "y": 1583,
          "radius": 18
        },
        {
          "id": "rock_11",
          "type": "rock",
          "x": 96,
          "y": 1453,
          "radius": 21
        },
        {
          "id": "log_4",
          "type": "log",
          "y": 1408,
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
          "y": 1353,
          "leftX": 100,
          "rightX": 192,
          "postRadius": 11
        },
        {
          "id": "rock_12",
          "type": "rock",
          "x": 219,
          "y": 1305,
          "radius": 23
        },
        {
          "id": "rock_13",
          "type": "rock",
          "x": 162,
          "y": 1228,
          "radius": 18
        },
        {
          "id": "rock_14",
          "type": "rock",
          "x": 229,
          "y": 1134,
          "radius": 21
        },
        {
          "id": "log_5",
          "type": "log",
          "y": 1045,
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
          "y": 1003,
          "radius": 23
        },
        {
          "id": "rock_16",
          "type": "rock",
          "x": 232,
          "y": 909,
          "radius": 18
        },
        {
          "id": "log_6",
          "type": "log",
          "y": 842,
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
          "y": 835,
          "radius": 21
        },
        {
          "id": "gate_2",
          "type": "gate",
          "y": 787,
          "leftX": 128,
          "rightX": 220,
          "postRadius": 11
        },
        {
          "id": "rock_18",
          "type": "rock",
          "x": 176,
          "y": 684,
          "radius": 23
        },
        {
          "id": "rock_19",
          "type": "rock",
          "x": 125,
          "y": 554,
          "radius": 18
        },
        {
          "id": "log_7",
          "type": "log",
          "y": 478,
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
          "y": 460,
          "radius": 21
        },
        {
          "id": "rock_21",
          "type": "rock",
          "x": 188,
          "y": 329,
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
          "y": 1827,
          "radius": 21
        },
        {
          "id": "log_3",
          "type": "log",
          "y": 1718,
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
          "y": 1676,
          "radius": 23
        },
        {
          "id": "rock_12",
          "type": "rock",
          "x": 189,
          "y": 1561,
          "radius": 18
        },
        {
          "id": "log_4",
          "type": "log",
          "y": 1550,
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
          "y": 1428,
          "radius": 21
        },
        {
          "id": "gate_1",
          "type": "gate",
          "y": 1380,
          "leftX": 102,
          "rightX": 194,
          "postRadius": 11
        },
        {
          "id": "rock_14",
          "type": "rock",
          "x": 223,
          "y": 1296,
          "radius": 23
        },
        {
          "id": "log_5",
          "type": "log",
          "y": 1283,
          "width": 66,
          "height": 22,
          "minX": 143,
          "maxX": 217,
          "speed": 116,
          "x": 217,
          "dir": -1
        },
        {
          "id": "rock_15",
          "type": "rock",
          "x": 179,
          "y": 1145,
          "radius": 18
        },
        {
          "id": "log_6",
          "type": "log",
          "y": 1115,
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
          "y": 1030,
          "radius": 21
        },
        {
          "id": "rock_17",
          "type": "rock",
          "x": 131,
          "y": 879,
          "radius": 23
        },
        {
          "id": "log_7",
          "type": "log",
          "y": 848,
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
          "y": 800,
          "leftX": 128,
          "rightX": 220,
          "postRadius": 11
        },
        {
          "id": "rock_18",
          "type": "rock",
          "x": 203,
          "y": 764,
          "radius": 18
        },
        {
          "id": "log_8",
          "type": "log",
          "y": 680,
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
          "y": 614,
          "radius": 21
        },
        {
          "id": "rock_20",
          "type": "rock",
          "x": 212,
          "y": 499,
          "radius": 23
        },
        {
          "id": "log_9",
          "type": "log",
          "y": 413,
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
          "y": 348,
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
          "y": 1880,
          "radius": 21
        },
        {
          "id": "rock_9",
          "type": "rock",
          "x": 176,
          "y": 1753,
          "radius": 23
        },
        {
          "id": "log_3",
          "type": "log",
          "y": 1670,
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
          "y": 1661,
          "radius": 18
        },
        {
          "id": "rock_11",
          "type": "rock",
          "x": 97,
          "y": 1534,
          "radius": 21
        },
        {
          "id": "log_4",
          "type": "log",
          "y": 1455,
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
          "y": 1442,
          "radius": 23
        },
        {
          "id": "gate_1",
          "type": "gate",
          "y": 1400,
          "leftX": 94,
          "rightX": 186,
          "postRadius": 11
        },
        {
          "id": "rock_13",
          "type": "rock",
          "x": 153,
          "y": 1314,
          "radius": 18
        },
        {
          "id": "rock_14",
          "type": "rock",
          "x": 223,
          "y": 1223,
          "radius": 21
        },
        {
          "id": "rock_15",
          "type": "rock",
          "x": 178,
          "y": 1095,
          "radius": 23
        },
        {
          "id": "log_5",
          "type": "log",
          "y": 1080,
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
          "y": 1003,
          "radius": 18
        },
        {
          "id": "rock_17",
          "type": "rock",
          "x": 143,
          "y": 876,
          "radius": 21
        },
        {
          "id": "log_6",
          "type": "log",
          "y": 865,
          "width": 64,
          "height": 22,
          "minX": 128,
          "maxX": 200,
          "speed": 109,
          "x": 128,
          "dir": 1
        },
        {
          "id": "gate_2",
          "type": "gate",
          "y": 810,
          "leftX": 118,
          "rightX": 210,
          "postRadius": 11
        },
        {
          "id": "rock_18",
          "type": "rock",
          "x": 163,
          "y": 762,
          "radius": 23
        },
        {
          "id": "rock_19",
          "type": "rock",
          "x": 106,
          "y": 657,
          "radius": 18
        },
        {
          "id": "rock_20",
          "type": "rock",
          "x": 225,
          "y": 565,
          "radius": 21
        },
        {
          "id": "log_7",
          "type": "log",
          "y": 490,
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
          "y": 437,
          "radius": 23
        },
        {
          "id": "rock_22",
          "type": "rock",
          "x": 247,
          "y": 346,
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
          "y": 1901,
          "radius": 21
        },
        {
          "id": "rock_11",
          "type": "rock",
          "x": 171,
          "y": 1764,
          "radius": 23
        },
        {
          "id": "log_4",
          "type": "log",
          "y": 1738,
          "width": 67,
          "height": 22,
          "minX": 151,
          "maxX": 228,
          "speed": 113,
          "x": 228,
          "dir": -1
        },
        {
          "id": "rock_12",
          "type": "rock",
          "x": 197,
          "y": 1663,
          "radius": 18
        },
        {
          "id": "log_5",
          "type": "log",
          "y": 1625,
          "width": 67,
          "height": 22,
          "minX": 127,
          "maxX": 204,
          "speed": 106,
          "x": 127,
          "dir": 1
        },
        {
          "id": "gate_1",
          "type": "gate",
          "y": 1570,
          "leftX": 91,
          "rightX": 183,
          "postRadius": 11
        },
        {
          "id": "rock_13",
          "type": "rock",
          "x": 95,
          "y": 1526,
          "radius": 21
        },
        {
          "id": "rock_14",
          "type": "rock",
          "x": 204,
          "y": 1425,
          "radius": 23
        },
        {
          "id": "rock_15",
          "type": "rock",
          "x": 162,
          "y": 1288,
          "radius": 18
        },
        {
          "id": "log_6",
          "type": "log",
          "y": 1224,
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
          "y": 1187,
          "radius": 21
        },
        {
          "id": "gate_2",
          "type": "gate",
          "y": 1120,
          "leftX": 185,
          "rightX": 277,
          "postRadius": 11
        },
        {
          "id": "rock_17",
          "type": "rock",
          "x": 160,
          "y": 1050,
          "radius": 23
        },
        {
          "id": "log_7",
          "type": "log",
          "y": 1016,
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
          "y": 949,
          "radius": 18
        },
        {
          "id": "rock_19",
          "type": "rock",
          "x": 129,
          "y": 812,
          "radius": 21
        },
        {
          "id": "rock_20",
          "type": "rock",
          "x": 173,
          "y": 711,
          "radius": 23
        },
        {
          "id": "gate_3",
          "type": "gate",
          "y": 670,
          "leftX": 112,
          "rightX": 204,
          "postRadius": 11
        },
        {
          "id": "log_8",
          "type": "log",
          "y": 615,
          "width": 65,
          "height": 22,
          "minX": 132,
          "maxX": 206,
          "speed": 105,
          "x": 206,
          "dir": -1
        },
        {
          "id": "rock_21",
          "type": "rock",
          "x": 128,
          "y": 574,
          "radius": 18
        },
        {
          "id": "log_9",
          "type": "log",
          "y": 502,
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
          "y": 473,
          "radius": 21
        },
        {
          "id": "rock_23",
          "type": "rock",
          "x": 192,
          "y": 336,
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
          "y": 1946,
          "radius": 21
        },
        {
          "id": "rock_11",
          "type": "rock",
          "x": 175,
          "y": 1814,
          "radius": 23
        },
        {
          "id": "log_4",
          "type": "log",
          "y": 1772,
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
          "y": 1718,
          "radius": 18
        },
        {
          "id": "log_5",
          "type": "log",
          "y": 1655,
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
          "y": 1648,
          "radius": 21
        },
        {
          "id": "gate_1",
          "type": "gate",
          "y": 1600,
          "leftX": 91,
          "rightX": 183,
          "postRadius": 11
        },
        {
          "id": "rock_14",
          "type": "rock",
          "x": 191,
          "y": 1490,
          "radius": 23
        },
        {
          "id": "rock_15",
          "type": "rock",
          "x": 152,
          "y": 1358,
          "radius": 18
        },
        {
          "id": "rock_16",
          "type": "rock",
          "x": 221,
          "y": 1262,
          "radius": 21
        },
        {
          "id": "log_6",
          "type": "log",
          "y": 1246,
          "width": 63,
          "height": 22,
          "minX": 166,
          "maxX": 236,
          "speed": 121,
          "x": 236,
          "dir": -1
        },
        {
          "id": "rock_17",
          "type": "rock",
          "x": 173,
          "y": 1188,
          "radius": 23
        },
        {
          "id": "gate_2",
          "type": "gate",
          "y": 1140,
          "leftX": 184,
          "rightX": 276,
          "postRadius": 11
        },
        {
          "id": "log_7",
          "type": "log",
          "y": 1034,
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
          "y": 1034,
          "radius": 18
        },
        {
          "id": "rock_19",
          "type": "rock",
          "x": 144,
          "y": 902,
          "radius": 21
        },
        {
          "id": "rock_20",
          "type": "rock",
          "x": 171,
          "y": 806,
          "radius": 23
        },
        {
          "id": "rock_21",
          "type": "rock",
          "x": 101,
          "y": 728,
          "radius": 18
        },
        {
          "id": "gate_3",
          "type": "gate",
          "y": 680,
          "leftX": 111,
          "rightX": 203,
          "postRadius": 11
        },
        {
          "id": "log_8",
          "type": "log",
          "y": 625,
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
          "y": 578,
          "radius": 21
        },
        {
          "id": "log_9",
          "type": "log",
          "y": 508,
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
          "y": 446,
          "radius": 23
        },
        {
          "id": "rock_24",
          "type": "rock",
          "x": 242,
          "y": 350,
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
          "y": 1984,
          "radius": 21
        },
        {
          "id": "rock_12",
          "type": "rock",
          "x": 178,
          "y": 1849,
          "radius": 23
        },
        {
          "id": "log_4",
          "type": "log",
          "y": 1840,
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
          "y": 1751,
          "radius": 18
        },
        {
          "id": "log_5",
          "type": "log",
          "y": 1685,
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
          "y": 1678,
          "radius": 21
        },
        {
          "id": "gate_1",
          "type": "gate",
          "y": 1630,
          "leftX": 89,
          "rightX": 181,
          "postRadius": 11
        },
        {
          "id": "rock_15",
          "type": "rock",
          "x": 189,
          "y": 1518,
          "radius": 23
        },
        {
          "id": "rock_16",
          "type": "rock",
          "x": 152,
          "y": 1383,
          "radius": 18
        },
        {
          "id": "log_6",
          "type": "log",
          "y": 1370,
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
          "y": 1285,
          "radius": 21
        },
        {
          "id": "log_7",
          "type": "log",
          "y": 1215,
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
          "y": 1208,
          "radius": 23
        },
        {
          "id": "gate_2",
          "type": "gate",
          "y": 1160,
          "leftX": 187,
          "rightX": 279,
          "postRadius": 11
        },
        {
          "id": "rock_19",
          "type": "rock",
          "x": 243,
          "y": 1052,
          "radius": 18
        },
        {
          "id": "rock_20",
          "type": "rock",
          "x": 143,
          "y": 917,
          "radius": 21
        },
        {
          "id": "log_8",
          "type": "log",
          "y": 900,
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
          "y": 819,
          "radius": 23
        },
        {
          "id": "log_9",
          "type": "log",
          "y": 745,
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
          "y": 738,
          "radius": 18
        },
        {
          "id": "gate_3",
          "type": "gate",
          "y": 690,
          "leftX": 110,
          "rightX": 202,
          "postRadius": 11
        },
        {
          "id": "rock_23",
          "type": "rock",
          "x": 224,
          "y": 586,
          "radius": 21
        },
        {
          "id": "rock_24",
          "type": "rock",
          "x": 187,
          "y": 451,
          "radius": 23
        },
        {
          "id": "log_10",
          "type": "log",
          "y": 430,
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
          "y": 353,
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
          "y": 2028,
          "radius": 21
        },
        {
          "id": "rock_11",
          "type": "rock",
          "x": 178,
          "y": 1898,
          "radius": 23
        },
        {
          "id": "log_4",
          "type": "log",
          "y": 1841,
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
          "y": 1804,
          "radius": 18
        },
        {
          "id": "log_5",
          "type": "log",
          "y": 1715,
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
          "y": 1708,
          "radius": 21
        },
        {
          "id": "gate_1",
          "type": "gate",
          "y": 1660,
          "leftX": 94,
          "rightX": 186,
          "postRadius": 11
        },
        {
          "id": "rock_14",
          "type": "rock",
          "x": 188,
          "y": 1580,
          "radius": 23
        },
        {
          "id": "rock_15",
          "type": "rock",
          "x": 144,
          "y": 1450,
          "radius": 18
        },
        {
          "id": "rock_16",
          "type": "rock",
          "x": 210,
          "y": 1356,
          "radius": 21
        },
        {
          "id": "log_6",
          "type": "log",
          "y": 1292,
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
          "y": 1226,
          "radius": 23
        },
        {
          "id": "gate_2",
          "type": "gate",
          "y": 1180,
          "leftX": 181,
          "rightX": 273,
          "postRadius": 11
        },
        {
          "id": "rock_18",
          "type": "rock",
          "x": 253,
          "y": 1133,
          "radius": 18
        },
        {
          "id": "log_7",
          "type": "log",
          "y": 1068,
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
          "y": 1003,
          "radius": 21
        },
        {
          "id": "rock_20",
          "type": "rock",
          "x": 188,
          "y": 909,
          "radius": 23
        },
        {
          "id": "rock_21",
          "type": "rock",
          "x": 99,
          "y": 779,
          "radius": 18
        },
        {
          "id": "gate_3",
          "type": "gate",
          "y": 700,
          "leftX": 114,
          "rightX": 206,
          "postRadius": 11
        },
        {
          "id": "rock_22",
          "type": "rock",
          "x": 213,
          "y": 652,
          "radius": 21
        },
        {
          "id": "log_8",
          "type": "log",
          "y": 645,
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
          "y": 555,
          "radius": 23
        },
        {
          "id": "log_9",
          "type": "log",
          "y": 519,
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
          "y": 461,
          "radius": 18
        },
        {
          "id": "rock_25",
          "type": "rock",
          "x": 165,
          "y": 331,
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
          "y": 2050,
          "radius": 21
        },
        {
          "id": "log_3",
          "type": "log",
          "y": 1937,
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
          "y": 1903,
          "radius": 23
        },
        {
          "id": "rock_13",
          "type": "rock",
          "x": 200,
          "y": 1791,
          "radius": 18
        },
        {
          "id": "log_4",
          "type": "log",
          "y": 1769,
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
          "y": 1643,
          "radius": 21
        },
        {
          "id": "gate_1",
          "type": "gate",
          "y": 1527,
          "leftX": 103,
          "rightX": 195,
          "postRadius": 11
        },
        {
          "id": "rock_15",
          "type": "rock",
          "x": 209,
          "y": 1479,
          "radius": 23
        },
        {
          "id": "log_5",
          "type": "log",
          "y": 1472,
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
          "y": 1384,
          "radius": 18
        },
        {
          "id": "log_6",
          "type": "log",
          "y": 1334,
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
          "y": 1272,
          "radius": 21
        },
        {
          "id": "rock_18",
          "type": "rock",
          "x": 162,
          "y": 1125,
          "radius": 23
        },
        {
          "id": "log_7",
          "type": "log",
          "y": 1066,
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
          "y": 1013,
          "radius": 18
        },
        {
          "id": "log_8",
          "type": "log",
          "y": 928,
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
          "y": 921,
          "radius": 21
        },
        {
          "id": "gate_2",
          "type": "gate",
          "y": 873,
          "leftX": 118,
          "rightX": 210,
          "postRadius": 11
        },
        {
          "id": "rock_21",
          "type": "rock",
          "x": 178,
          "y": 754,
          "radius": 23
        },
        {
          "id": "log_9",
          "type": "log",
          "y": 631,
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
          "y": 606,
          "radius": 18
        },
        {
          "id": "rock_23",
          "type": "rock",
          "x": 242,
          "y": 494,
          "radius": 21
        },
        {
          "id": "log_10",
          "type": "log",
          "y": 463,
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
          "y": 347,
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
          "y": 2096,
          "radius": 21
        },
        {
          "id": "rock_12",
          "type": "rock",
          "x": 178,
          "y": 1954,
          "radius": 23
        },
        {
          "id": "log_5",
          "type": "log",
          "y": 1909,
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
          "y": 1820,
          "leftX": 117,
          "rightX": 209,
          "postRadius": 11
        },
        {
          "id": "rock_13",
          "type": "rock",
          "x": 189,
          "y": 1772,
          "radius": 18
        },
        {
          "id": "rock_14",
          "type": "rock",
          "x": 108,
          "y": 1706,
          "radius": 21
        },
        {
          "id": "log_6",
          "type": "log",
          "y": 1674,
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
          "y": 1600,
          "radius": 23
        },
        {
          "id": "rock_16",
          "type": "rock",
          "x": 151,
          "y": 1458,
          "radius": 18
        },
        {
          "id": "gate_2",
          "type": "gate",
          "y": 1420,
          "leftX": 147,
          "rightX": 239,
          "postRadius": 11
        },
        {
          "id": "rock_17",
          "type": "rock",
          "x": 221,
          "y": 1352,
          "radius": 21
        },
        {
          "id": "log_7",
          "type": "log",
          "y": 1338,
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
          "y": 1210,
          "radius": 23
        },
        {
          "id": "rock_19",
          "type": "rock",
          "x": 239,
          "y": 1104,
          "radius": 18
        },
        {
          "id": "log_8",
          "type": "log",
          "y": 1102,
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
          "y": 1020,
          "leftX": 133,
          "rightX": 225,
          "postRadius": 11
        },
        {
          "id": "rock_20",
          "type": "rock",
          "x": 143,
          "y": 962,
          "radius": 21
        },
        {
          "id": "rock_21",
          "type": "rock",
          "x": 169,
          "y": 856,
          "radius": 23
        },
        {
          "id": "log_9",
          "type": "log",
          "y": 766,
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
          "y": 714,
          "radius": 18
        },
        {
          "id": "gate_4",
          "type": "gate",
          "y": 620,
          "leftX": 123,
          "rightX": 215,
          "postRadius": 11
        },
        {
          "id": "rock_23",
          "type": "rock",
          "x": 231,
          "y": 572,
          "radius": 21
        },
        {
          "id": "log_10",
          "type": "log",
          "y": 531,
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
          "y": 466,
          "radius": 23
        },
        {
          "id": "rock_25",
          "type": "rock",
          "x": 241,
          "y": 360,
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
          "y": 2154,
          "radius": 21
        },
        {
          "id": "rock_10",
          "type": "rock",
          "x": 184,
          "y": 2029,
          "radius": 23
        },
        {
          "id": "rock_11",
          "type": "rock",
          "x": 216,
          "y": 1941,
          "radius": 18
        },
        {
          "id": "log_4",
          "type": "log",
          "y": 1895,
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
          "y": 1817,
          "radius": 21
        },
        {
          "id": "gate_1",
          "type": "gate",
          "y": 1750,
          "leftX": 99,
          "rightX": 191,
          "postRadius": 11
        },
        {
          "id": "rock_13",
          "type": "rock",
          "x": 190,
          "y": 1702,
          "radius": 23
        },
        {
          "id": "log_5",
          "type": "log",
          "y": 1605,
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
          "y": 1604,
          "radius": 18
        },
        {
          "id": "rock_15",
          "type": "rock",
          "x": 194,
          "y": 1515,
          "radius": 21
        },
        {
          "id": "rock_16",
          "type": "rock",
          "x": 153,
          "y": 1391,
          "radius": 23
        },
        {
          "id": "rock_17",
          "type": "rock",
          "x": 252,
          "y": 1303,
          "radius": 18
        },
        {
          "id": "gate_2",
          "type": "gate",
          "y": 1240,
          "leftX": 178,
          "rightX": 270,
          "postRadius": 11
        },
        {
          "id": "log_6",
          "type": "log",
          "y": 1185,
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
          "y": 1178,
          "radius": 21
        },
        {
          "id": "rock_19",
          "type": "rock",
          "x": 213,
          "y": 1090,
          "radius": 23
        },
        {
          "id": "rock_20",
          "type": "rock",
          "x": 123,
          "y": 966,
          "radius": 18
        },
        {
          "id": "log_7",
          "type": "log",
          "y": 925,
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
          "y": 877,
          "radius": 21
        },
        {
          "id": "rock_22",
          "type": "rock",
          "x": 128,
          "y": 778,
          "radius": 23
        },
        {
          "id": "gate_3",
          "type": "gate",
          "y": 730,
          "leftX": 115,
          "rightX": 207,
          "postRadius": 11
        },
        {
          "id": "rock_23",
          "type": "rock",
          "x": 197,
          "y": 664,
          "radius": 18
        },
        {
          "id": "rock_24",
          "type": "rock",
          "x": 153,
          "y": 540,
          "radius": 21
        },
        {
          "id": "log_8",
          "type": "log",
          "y": 535,
          "width": 62,
          "height": 22,
          "minX": 162,
          "maxX": 231,
          "speed": 112,
          "x": 231,
          "dir": -1
        },
        {
          "id": "rock_25",
          "type": "rock",
          "x": 253,
          "y": 452,
          "radius": 23
        },
        {
          "id": "rock_26",
          "type": "rock",
          "x": 186,
          "y": 327,
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
          "y": 2169,
          "radius": 21
        },
        {
          "id": "rock_12",
          "type": "rock",
          "x": 181,
          "y": 2030,
          "radius": 23
        },
        {
          "id": "log_4",
          "type": "log",
          "y": 2006,
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
          "y": 1928,
          "radius": 18
        },
        {
          "id": "log_5",
          "type": "log",
          "y": 1828,
          "width": 61,
          "height": 22,
          "minX": 133,
          "maxX": 201,
          "speed": 118,
          "x": 133,
          "dir": 1
        },
        {
          "id": "rock_14",
          "type": "rock",
          "x": 124,
          "y": 1821,
          "radius": 21
        },
        {
          "id": "gate_1",
          "type": "gate",
          "y": 1773,
          "leftX": 101,
          "rightX": 193,
          "postRadius": 11
        },
        {
          "id": "rock_15",
          "type": "rock",
          "x": 180,
          "y": 1686,
          "radius": 23
        },
        {
          "id": "rock_16",
          "type": "rock",
          "x": 143,
          "y": 1547,
          "radius": 18
        },
        {
          "id": "log_6",
          "type": "log",
          "y": 1489,
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
          "y": 1445,
          "radius": 21
        },
        {
          "id": "log_7",
          "type": "log",
          "y": 1310,
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
          "y": 1306,
          "radius": 23
        },
        {
          "id": "gate_2",
          "type": "gate",
          "y": 1255,
          "leftX": 178,
          "rightX": 270,
          "postRadius": 11
        },
        {
          "id": "rock_19",
          "type": "rock",
          "x": 249,
          "y": 1203,
          "radius": 18
        },
        {
          "id": "rock_20",
          "type": "rock",
          "x": 158,
          "y": 1064,
          "radius": 21
        },
        {
          "id": "log_8",
          "type": "log",
          "y": 971,
          "width": 58,
          "height": 22,
          "minX": 133,
          "maxX": 196,
          "speed": 117,
          "x": 196,
          "dir": -1
        },
        {
          "id": "rock_21",
          "type": "rock",
          "x": 187,
          "y": 962,
          "radius": 23
        },
        {
          "id": "rock_22",
          "type": "rock",
          "x": 103,
          "y": 823,
          "radius": 18
        },
        {
          "id": "log_9",
          "type": "log",
          "y": 793,
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
          "y": 738,
          "leftX": 114,
          "rightX": 206,
          "postRadius": 11
        },
        {
          "id": "rock_23",
          "type": "rock",
          "x": 208,
          "y": 690,
          "radius": 21
        },
        {
          "id": "rock_24",
          "type": "rock",
          "x": 166,
          "y": 581,
          "radius": 23
        },
        {
          "id": "rock_25",
          "type": "rock",
          "x": 233,
          "y": 479,
          "radius": 18
        },
        {
          "id": "log_10",
          "type": "log",
          "y": 454,
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
          "y": 340,
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
          "y": 2197,
          "radius": 21
        },
        {
          "id": "log_4",
          "type": "log",
          "y": 2062,
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
          "y": 2057,
          "radius": 23
        },
        {
          "id": "rock_14",
          "type": "rock",
          "x": 210,
          "y": 1952,
          "radius": 18
        },
        {
          "id": "log_5",
          "type": "log",
          "y": 1878,
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
          "y": 1843,
          "radius": 21
        },
        {
          "id": "gate_1",
          "type": "gate",
          "y": 1795,
          "leftX": 102,
          "rightX": 194,
          "postRadius": 11
        },
        {
          "id": "rock_16",
          "type": "rock",
          "x": 182,
          "y": 1707,
          "radius": 23
        },
        {
          "id": "log_6",
          "type": "log",
          "y": 1595,
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
          "y": 1567,
          "radius": 18
        },
        {
          "id": "rock_18",
          "type": "rock",
          "x": 210,
          "y": 1462,
          "radius": 21
        },
        {
          "id": "log_7",
          "type": "log",
          "y": 1412,
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
          "y": 1322,
          "radius": 23
        },
        {
          "id": "gate_2",
          "type": "gate",
          "y": 1270,
          "leftX": 176,
          "rightX": 268,
          "postRadius": 11
        },
        {
          "id": "rock_20",
          "type": "rock",
          "x": 247,
          "y": 1217,
          "radius": 18
        },
        {
          "id": "log_8",
          "type": "log",
          "y": 1128,
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
          "y": 1077,
          "radius": 21
        },
        {
          "id": "rock_22",
          "type": "rock",
          "x": 187,
          "y": 972,
          "radius": 23
        },
        {
          "id": "log_9",
          "type": "log",
          "y": 945,
          "width": 58,
          "height": 22,
          "minX": 127,
          "maxX": 190,
          "speed": 130,
          "x": 127,
          "dir": 1
        },
        {
          "id": "rock_23",
          "type": "rock",
          "x": 105,
          "y": 832,
          "radius": 18
        },
        {
          "id": "gate_3",
          "type": "gate",
          "y": 745,
          "leftX": 115,
          "rightX": 207,
          "postRadius": 11
        },
        {
          "id": "rock_24",
          "type": "rock",
          "x": 209,
          "y": 697,
          "radius": 21
        },
        {
          "id": "log_10",
          "type": "log",
          "y": 662,
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
          "y": 587,
          "radius": 23
        },
        {
          "id": "rock_26",
          "type": "rock",
          "x": 232,
          "y": 482,
          "radius": 18
        },
        {
          "id": "log_11",
          "type": "log",
          "y": 478,
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
          "y": 342,
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
          "y": 2242,
          "radius": 21
        },
        {
          "id": "rock_12",
          "type": "rock",
          "x": 188,
          "y": 2106,
          "radius": 23
        },
        {
          "id": "log_4",
          "type": "log",
          "y": 2068,
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
          "y": 2006,
          "radius": 18
        },
        {
          "id": "log_5",
          "type": "log",
          "y": 1880,
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
          "y": 1870,
          "radius": 21
        },
        {
          "id": "gate_1",
          "type": "gate",
          "y": 1825,
          "leftX": 99,
          "rightX": 191,
          "postRadius": 11
        },
        {
          "id": "rock_15",
          "type": "rock",
          "x": 182,
          "y": 1771,
          "radius": 23
        },
        {
          "id": "rock_16",
          "type": "rock",
          "x": 131,
          "y": 1635,
          "radius": 18
        },
        {
          "id": "rock_17",
          "type": "rock",
          "x": 200,
          "y": 1535,
          "radius": 21
        },
        {
          "id": "log_6",
          "type": "log",
          "y": 1533,
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
          "y": 1399,
          "radius": 23
        },
        {
          "id": "log_7",
          "type": "log",
          "y": 1345,
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
          "y": 1290,
          "leftX": 182,
          "rightX": 274,
          "postRadius": 11
        },
        {
          "id": "rock_19",
          "type": "rock",
          "x": 253,
          "y": 1242,
          "radius": 18
        },
        {
          "id": "rock_20",
          "type": "rock",
          "x": 173,
          "y": 1163,
          "radius": 21
        },
        {
          "id": "rock_21",
          "type": "rock",
          "x": 200,
          "y": 1063,
          "radius": 23
        },
        {
          "id": "log_8",
          "type": "log",
          "y": 998,
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
          "y": 927,
          "radius": 18
        },
        {
          "id": "rock_23",
          "type": "rock",
          "x": 181,
          "y": 827,
          "radius": 21
        },
        {
          "id": "log_9",
          "type": "log",
          "y": 810,
          "width": 58,
          "height": 22,
          "minX": 115,
          "maxX": 179,
          "speed": 132,
          "x": 115,
          "dir": 1
        },
        {
          "id": "gate_3",
          "type": "gate",
          "y": 755,
          "leftX": 112,
          "rightX": 204,
          "postRadius": 11
        },
        {
          "id": "rock_24",
          "type": "rock",
          "x": 147,
          "y": 692,
          "radius": 23
        },
        {
          "id": "rock_25",
          "type": "rock",
          "x": 216,
          "y": 592,
          "radius": 18
        },
        {
          "id": "log_10",
          "type": "log",
          "y": 463,
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
          "y": 456,
          "radius": 21
        },
        {
          "id": "rock_27",
          "type": "rock",
          "x": 256,
          "y": 356,
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
          "y": 2270,
          "radius": 21
        },
        {
          "id": "rock_13",
          "type": "rock",
          "x": 187,
          "y": 2133,
          "radius": 23
        },
        {
          "id": "gate_1",
          "type": "gate",
          "y": 2028,
          "leftX": 135,
          "rightX": 227,
          "postRadius": 11
        },
        {
          "id": "rock_14",
          "type": "rock",
          "x": 205,
          "y": 1980,
          "radius": 18
        },
        {
          "id": "log_6",
          "type": "log",
          "y": 1973,
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
          "y": 1894,
          "radius": 21
        },
        {
          "id": "log_7",
          "type": "log",
          "y": 1795,
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
          "y": 1792,
          "radius": 23
        },
        {
          "id": "rock_17",
          "type": "rock",
          "x": 121,
          "y": 1715,
          "radius": 18
        },
        {
          "id": "gate_2",
          "type": "gate",
          "y": 1667,
          "leftX": 117,
          "rightX": 209,
          "postRadius": 11
        },
        {
          "id": "rock_18",
          "type": "rock",
          "x": 200,
          "y": 1553,
          "radius": 21
        },
        {
          "id": "log_8",
          "type": "log",
          "y": 1435,
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
          "y": 1416,
          "radius": 23
        },
        {
          "id": "gate_3",
          "type": "gate",
          "y": 1305,
          "leftX": 174,
          "rightX": 266,
          "postRadius": 11
        },
        {
          "id": "rock_20",
          "type": "rock",
          "x": 251,
          "y": 1257,
          "radius": 18
        },
        {
          "id": "rock_21",
          "type": "rock",
          "x": 171,
          "y": 1176,
          "radius": 21
        },
        {
          "id": "log_9",
          "type": "log",
          "y": 1175,
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
          "y": 1075,
          "radius": 23
        },
        {
          "id": "rock_23",
          "type": "rock",
          "x": 119,
          "y": 991,
          "radius": 18
        },
        {
          "id": "gate_4",
          "type": "gate",
          "y": 943,
          "leftX": 99,
          "rightX": 191,
          "postRadius": 11
        },
        {
          "id": "rock_24",
          "type": "rock",
          "x": 184,
          "y": 836,
          "radius": 21
        },
        {
          "id": "log_10",
          "type": "log",
          "y": 815,
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
          "y": 698,
          "radius": 23
        },
        {
          "id": "log_11",
          "type": "log",
          "y": 637,
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
          "y": 582,
          "leftX": 157,
          "rightX": 249,
          "postRadius": 11
        },
        {
          "id": "rock_26",
          "type": "rock",
          "x": 228,
          "y": 534,
          "radius": 18
        },
        {
          "id": "rock_27",
          "type": "rock",
          "x": 177,
          "y": 459,
          "radius": 21
        },
        {
          "id": "rock_28",
          "type": "rock",
          "x": 254,
          "y": 358,
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
          "y": 2292,
          "radius": 21
        },
        {
          "id": "log_5",
          "type": "log",
          "y": 2151,
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
          "y": 2145,
          "radius": 23
        },
        {
          "id": "log_6",
          "type": "log",
          "y": 2035,
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
          "y": 2035,
          "radius": 18
        },
        {
          "id": "gate_1",
          "type": "gate",
          "y": 1980,
          "leftX": 124,
          "rightX": 216,
          "postRadius": 11
        },
        {
          "id": "rock_16",
          "type": "rock",
          "x": 119,
          "y": 1888,
          "radius": 21
        },
        {
          "id": "rock_17",
          "type": "rock",
          "x": 173,
          "y": 1778,
          "radius": 23
        },
        {
          "id": "log_7",
          "type": "log",
          "y": 1662,
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
          "y": 1632,
          "radius": 18
        },
        {
          "id": "gate_2",
          "type": "gate",
          "y": 1540,
          "leftX": 142,
          "rightX": 234,
          "postRadius": 11
        },
        {
          "id": "rock_19",
          "type": "rock",
          "x": 216,
          "y": 1492,
          "radius": 21
        },
        {
          "id": "log_8",
          "type": "log",
          "y": 1467,
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
          "y": 1375,
          "radius": 23
        },
        {
          "id": "rock_21",
          "type": "rock",
          "x": 251,
          "y": 1264,
          "radius": 18
        },
        {
          "id": "log_9",
          "type": "log",
          "y": 1173,
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
          "y": 1148,
          "radius": 21
        },
        {
          "id": "gate_3",
          "type": "gate",
          "y": 1100,
          "leftX": 132,
          "rightX": 224,
          "postRadius": 11
        },
        {
          "id": "rock_23",
          "type": "rock",
          "x": 183,
          "y": 1007,
          "radius": 23
        },
        {
          "id": "log_10",
          "type": "log",
          "y": 978,
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
          "y": 861,
          "radius": 18
        },
        {
          "id": "rock_25",
          "type": "rock",
          "x": 200,
          "y": 751,
          "radius": 21
        },
        {
          "id": "gate_4",
          "type": "gate",
          "y": 660,
          "leftX": 129,
          "rightX": 221,
          "postRadius": 11
        },
        {
          "id": "log_11",
          "type": "log",
          "y": 605,
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
          "y": 604,
          "radius": 23
        },
        {
          "id": "rock_27",
          "type": "rock",
          "x": 239,
          "y": 494,
          "radius": 18
        },
        {
          "id": "log_12",
          "type": "log",
          "y": 489,
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
          "y": 347,
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
          "y": 2337,
          "radius": 21
        },
        {
          "id": "log_5",
          "type": "log",
          "y": 2211,
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
          "y": 2195,
          "radius": 23
        },
        {
          "id": "rock_16",
          "type": "rock",
          "x": 218,
          "y": 2090,
          "radius": 18
        },
        {
          "id": "log_6",
          "type": "log",
          "y": 2067,
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
          "y": 2012,
          "leftX": 124,
          "rightX": 216,
          "postRadius": 11
        },
        {
          "id": "rock_17",
          "type": "rock",
          "x": 125,
          "y": 1948,
          "radius": 21
        },
        {
          "id": "rock_18",
          "type": "rock",
          "x": 178,
          "y": 1843,
          "radius": 23
        },
        {
          "id": "log_7",
          "type": "log",
          "y": 1763,
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
          "y": 1701,
          "radius": 18
        },
        {
          "id": "log_8",
          "type": "log",
          "y": 1619,
          "width": 58,
          "height": 22,
          "minX": 139,
          "maxX": 203,
          "speed": 134,
          "x": 139,
          "dir": 1
        },
        {
          "id": "gate_2",
          "type": "gate",
          "y": 1564,
          "leftX": 142,
          "rightX": 234,
          "postRadius": 11
        },
        {
          "id": "rock_20",
          "type": "rock",
          "x": 217,
          "y": 1516,
          "radius": 21
        },
        {
          "id": "rock_21",
          "type": "rock",
          "x": 171,
          "y": 1454,
          "radius": 23
        },
        {
          "id": "rock_22",
          "type": "rock",
          "x": 267,
          "y": 1349,
          "radius": 18
        },
        {
          "id": "log_9",
          "type": "log",
          "y": 1315,
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
          "y": 1208,
          "radius": 21
        },
        {
          "id": "log_10",
          "type": "log",
          "y": 1171,
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
          "y": 1116,
          "leftX": 132,
          "rightX": 224,
          "postRadius": 11
        },
        {
          "id": "rock_24",
          "type": "rock",
          "x": 192,
          "y": 1068,
          "radius": 23
        },
        {
          "id": "rock_25",
          "type": "rock",
          "x": 106,
          "y": 961,
          "radius": 18
        },
        {
          "id": "log_11",
          "type": "log",
          "y": 867,
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
          "y": 855,
          "radius": 21
        },
        {
          "id": "log_12",
          "type": "log",
          "y": 723,
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
          "y": 714,
          "radius": 23
        },
        {
          "id": "gate_4",
          "type": "gate",
          "y": 668,
          "leftX": 130,
          "rightX": 222,
          "postRadius": 11
        },
        {
          "id": "rock_28",
          "type": "rock",
          "x": 218,
          "y": 608,
          "radius": 18
        },
        {
          "id": "rock_29",
          "type": "rock",
          "x": 185,
          "y": 467,
          "radius": 21
        },
        {
          "id": "log_13",
          "type": "log",
          "y": 419,
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
          "y": 361,
          "radius": 23
        }
      ]
    }
  }
];
