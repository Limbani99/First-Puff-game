// Level definitions for First Puff - 50 Progressive Casual Levels
// Progressive river physics, gentle obstacles, and rewarding crew mechanics
// 50 Levels total: 150 Stars possible (3 stars per level)

export const CREW_MEMBERS = {
  hippo: {
    id: 'hippo',
    name: 'Hippo',
    role: 'Pusher',
    avatar: '🦛',
    color: '#8b5cf6', // purple
    bgColor: 'bg-purple-500',
    borderColor: 'border-purple-300',
    direction: 'Forward',
    label: 'Forward',
    description: 'Puffs backward to propel the raft forward'
  },
  penguin: {
    id: 'penguin',
    name: 'Penguin',
    role: 'Brake',
    avatar: '🐧',
    color: '#06b6d4', // cyan
    bgColor: 'bg-cyan-500',
    borderColor: 'border-cyan-300',
    direction: 'Backward',
    label: 'Brake',
    description: 'Puffs forward to slow down and reverse'
  },
  frog: {
    id: 'frog',
    name: 'Frog',
    role: 'Steer Right',
    avatar: '🐸',
    color: '#22c55e', // green
    bgColor: 'bg-emerald-500',
    borderColor: 'border-emerald-300',
    direction: 'Right',
    label: 'Right',
    description: 'Puffs left to push the raft right'
  },
  pig: {
    id: 'pig',
    name: 'Pig',
    role: 'Steer Left',
    avatar: '🐷',
    color: '#ec4899', // pink
    bgColor: 'bg-pink-500',
    borderColor: 'border-pink-300',
    direction: 'Left',
    label: 'Left',
    description: 'Puffs right to push the raft left'
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
    "name": "Timber Flume",
    "targetTime": 50,
    "hint": "Three logs patrolling the river channel.",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Rhythmic log evasion",
    "world": {
      "width": 360,
      "height": 1694,
      "startX": 180,
      "startY": 1544,
      "finishX": 205,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.981,
      "waypoints": [
        {
          "y": 1694,
          "cx": 180,
          "width": 252
        },
        {
          "y": 1271,
          "cx": 201,
          "width": 252
        },
        {
          "y": 847,
          "cx": 219,
          "width": 252
        },
        {
          "y": 424,
          "cx": 164,
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
          "id": "log1",
          "type": "log",
          "y": 896,
          "width": 76,
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
          "y": 498,
          "width": 76,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 58,
          "x": 95,
          "dir": 1
        },
        {
          "id": "rock3",
          "type": "rock",
          "x": 215,
          "y": 1105,
          "radius": 22
        },
        {
          "id": "rock4",
          "type": "rock",
          "x": 128,
          "y": 846,
          "radius": 24
        },
        {
          "id": "rock5",
          "type": "rock",
          "x": 249,
          "y": 588,
          "radius": 26
        },
        {
          "id": "rock6",
          "type": "rock",
          "x": 139,
          "y": 329,
          "radius": 22
        }
      ]
    }
  },
  {
    "id": 24,
    "name": "Double Chicane",
    "targetTime": 45,
    "hint": "Quick left-right then right-left!",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "S-bend transitions",
    "world": {
      "width": 360,
      "height": 1721,
      "startX": 180,
      "startY": 1571,
      "finishX": 155,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.978,
      "waypoints": [
        {
          "y": 1721,
          "cx": 180,
          "width": 246
        },
        {
          "y": 1377,
          "cx": 224,
          "width": 246
        },
        {
          "y": 1033,
          "cx": 183,
          "width": 246
        },
        {
          "y": 688,
          "cx": 136,
          "width": 246
        },
        {
          "y": 344,
          "cx": 171,
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
          "id": "gate1",
          "type": "gate",
          "y": 711,
          "leftX": 115,
          "rightX": 245,
          "postRadius": 18
        },
        {
          "id": "log2",
          "type": "log",
          "y": 1016,
          "width": 76,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 44,
          "x": 95,
          "dir": 1
        },
        {
          "id": "log3",
          "type": "log",
          "y": 711,
          "width": 76,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 44,
          "x": 265,
          "dir": -1
        },
        {
          "id": "log4",
          "type": "log",
          "y": 405,
          "width": 76,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 44,
          "x": 95,
          "dir": 1
        },
        {
          "id": "rock5",
          "type": "rock",
          "x": 215,
          "y": 1061,
          "radius": 22
        },
        {
          "id": "rock6",
          "type": "rock",
          "x": 128,
          "y": 731,
          "radius": 24
        },
        {
          "id": "rock7",
          "type": "rock",
          "x": 249,
          "y": 400,
          "radius": 26
        }
      ]
    }
  },
  {
    "id": 25,
    "name": "Rock Garden",
    "targetTime": 45,
    "hint": "Cluster of rocks in the midstream.",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Cluster avoidance",
    "world": {
      "width": 360,
      "height": 1748,
      "startX": 180,
      "startY": 1598,
      "finishX": 180,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 1748,
          "cx": 180,
          "width": 270
        },
        {
          "y": 1398,
          "cx": 203,
          "width": 270
        },
        {
          "y": 1049,
          "cx": 143,
          "width": 270
        },
        {
          "y": 699,
          "cx": 152,
          "width": 270
        },
        {
          "y": 350,
          "cx": 213,
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
          "y": 1036,
          "width": 76,
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
          "y": 724,
          "width": 76,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 46,
          "x": 95,
          "dir": 1
        },
        {
          "id": "log3",
          "type": "log",
          "y": 412,
          "width": 76,
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
          "x": 215,
          "y": 1148,
          "radius": 22
        },
        {
          "id": "rock5",
          "type": "rock",
          "x": 128,
          "y": 879,
          "radius": 24
        },
        {
          "id": "rock6",
          "type": "rock",
          "x": 249,
          "y": 609,
          "radius": 26
        },
        {
          "id": "rock7",
          "type": "rock",
          "x": 139,
          "y": 340,
          "radius": 22
        }
      ]
    }
  },
  {
    "id": 26,
    "name": "Heavy Traffic",
    "targetTime": 45,
    "hint": "Quick logs! Penguin brake to wait for openings.",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Active braking in traffic",
    "world": {
      "width": 360,
      "height": 1775,
      "startX": 180,
      "startY": 1625,
      "finishX": 205,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.98,
      "waypoints": [
        {
          "y": 1775,
          "cx": 180,
          "width": 264
        },
        {
          "y": 1420,
          "cx": 157,
          "width": 264
        },
        {
          "y": 1065,
          "cx": 139,
          "width": 264
        },
        {
          "y": 710,
          "cx": 197,
          "width": 264
        },
        {
          "y": 355,
          "cx": 224,
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
          "y": 1056,
          "width": 76,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 48,
          "x": 95,
          "dir": 1
        },
        {
          "id": "log2",
          "type": "log",
          "y": 738,
          "width": 76,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 48,
          "x": 265,
          "dir": -1
        },
        {
          "id": "log3",
          "type": "log",
          "y": 419,
          "width": 76,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 48,
          "x": 95,
          "dir": 1
        },
        {
          "id": "rock4",
          "type": "rock",
          "x": 215,
          "y": 1101,
          "radius": 22
        },
        {
          "id": "rock5",
          "type": "rock",
          "x": 128,
          "y": 758,
          "radius": 24
        },
        {
          "id": "rock6",
          "type": "rock",
          "x": 249,
          "y": 414,
          "radius": 26
        }
      ]
    }
  },
  {
    "id": 27,
    "name": "Needle Eye",
    "targetTime": 40,
    "hint": "Tight finish pond. Brake before you overshoot!",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Precision landing",
    "world": {
      "width": 360,
      "height": 1802,
      "startX": 180,
      "startY": 1652,
      "finishX": 155,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.981,
      "waypoints": [
        {
          "y": 1802,
          "cx": 180,
          "width": 258
        },
        {
          "y": 1442,
          "cx": 133,
          "width": 258
        },
        {
          "y": 1081,
          "cx": 177,
          "width": 258
        },
        {
          "y": 721,
          "cx": 227,
          "width": 258
        },
        {
          "y": 360,
          "cx": 190,
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
          "y": 1142,
          "width": 76,
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
          "y": 881,
          "width": 76,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 50,
          "x": 95,
          "dir": 1
        },
        {
          "id": "log3",
          "type": "log",
          "y": 621,
          "width": 76,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 50,
          "x": 265,
          "dir": -1
        },
        {
          "id": "log4",
          "type": "log",
          "y": 360,
          "width": 76,
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
          "x": 215,
          "y": 1238,
          "radius": 22
        },
        {
          "id": "rock6",
          "type": "rock",
          "x": 128,
          "y": 1005,
          "radius": 24
        },
        {
          "id": "rock7",
          "type": "rock",
          "x": 249,
          "y": 771,
          "radius": 26
        },
        {
          "id": "rock8",
          "type": "rock",
          "x": 139,
          "y": 537,
          "radius": 22
        },
        {
          "id": "rock9",
          "type": "rock",
          "x": 238,
          "y": 304,
          "radius": 24
        }
      ]
    }
  },
  {
    "id": 28,
    "name": "Island Divide",
    "targetTime": 45,
    "hint": "Pick the left or right river branch.",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Route selection",
    "world": {
      "width": 360,
      "height": 1829,
      "startX": 180,
      "startY": 1679,
      "finishX": 180,
      "finishY": 130,
      "finishRadius": 38,
      "drag": 0.978,
      "waypoints": [
        {
          "y": 1829,
          "cx": 180,
          "width": 252
        },
        {
          "y": 1463,
          "cx": 156,
          "width": 252
        },
        {
          "y": 1097,
          "cx": 220,
          "width": 252
        },
        {
          "y": 732,
          "cx": 209,
          "width": 252
        },
        {
          "y": 366,
          "cx": 144,
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
          "id": "log1",
          "type": "log",
          "y": 1097,
          "width": 76,
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
          "y": 765,
          "width": 76,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 52,
          "x": 265,
          "dir": -1
        },
        {
          "id": "log3",
          "type": "log",
          "y": 432,
          "width": 76,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 52,
          "x": 95,
          "dir": 1
        },
        {
          "id": "rock4",
          "type": "rock",
          "x": 215,
          "y": 1213,
          "radius": 22
        },
        {
          "id": "rock5",
          "type": "rock",
          "x": 128,
          "y": 927,
          "radius": 24
        },
        {
          "id": "rock6",
          "type": "rock",
          "x": 249,
          "y": 642,
          "radius": 26
        },
        {
          "id": "rock7",
          "type": "rock",
          "x": 139,
          "y": 356,
          "radius": 22
        }
      ]
    }
  },
  {
    "id": 29,
    "name": "Gale Stream",
    "targetTime": 40,
    "hint": "Fast water currents push you forward.",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Momentum control",
    "world": {
      "width": 360,
      "height": 1856,
      "startX": 180,
      "startY": 1706,
      "finishX": 205,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 1856,
          "cx": 180,
          "width": 246
        },
        {
          "y": 1485,
          "cx": 205,
          "width": 246
        },
        {
          "y": 1114,
          "cx": 224,
          "width": 246
        },
        {
          "y": 742,
          "cx": 161,
          "width": 246
        },
        {
          "y": 371,
          "cx": 134,
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
          "y": 1117,
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
          "y": 778,
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
          "y": 439,
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
          "y": 1283,
          "radius": 22
        },
        {
          "id": "rock5",
          "type": "rock",
          "x": 128,
          "y": 1041,
          "radius": 24
        },
        {
          "id": "rock6",
          "type": "rock",
          "x": 249,
          "y": 798,
          "radius": 26
        },
        {
          "id": "rock7",
          "type": "rock",
          "x": 139,
          "y": 555,
          "radius": 22
        },
        {
          "id": "rock8",
          "type": "rock",
          "x": 238,
          "y": 313,
          "radius": 24
        }
      ]
    }
  },
  {
    "id": 30,
    "name": "Bayou Bonanza",
    "targetTime": 60,
    "hint": "Zone 3 finale! Master the timber maze.",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Zone 3 Grand Finale",
    "world": {
      "width": 360,
      "height": 1883,
      "startX": 180,
      "startY": 1733,
      "finishX": 155,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.98,
      "waypoints": [
        {
          "y": 1883,
          "cx": 180,
          "width": 270
        },
        {
          "y": 1506,
          "cx": 230,
          "width": 270
        },
        {
          "y": 1130,
          "cx": 183,
          "width": 270
        },
        {
          "y": 753,
          "cx": 130,
          "width": 270
        },
        {
          "y": 377,
          "cx": 170,
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
          "y": 1005,
          "leftX": 115,
          "rightX": 245,
          "postRadius": 18
        },
        {
          "id": "gate2",
          "type": "gate",
          "y": 578,
          "leftX": 135,
          "rightX": 265,
          "postRadius": 18
        },
        {
          "id": "log3",
          "type": "log",
          "y": 1206,
          "width": 75,
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
          "y": 930,
          "width": 75,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 56,
          "x": 265,
          "dir": -1
        },
        {
          "id": "log5",
          "type": "log",
          "y": 653,
          "width": 75,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 56,
          "x": 95,
          "dir": 1
        },
        {
          "id": "log6",
          "type": "log",
          "y": 377,
          "width": 75,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 56,
          "x": 265,
          "dir": -1
        },
        {
          "id": "rock7",
          "type": "rock",
          "x": 215,
          "y": 1256,
          "radius": 22
        },
        {
          "id": "rock8",
          "type": "rock",
          "x": 128,
          "y": 960,
          "radius": 24
        },
        {
          "id": "rock9",
          "type": "rock",
          "x": 249,
          "y": 663,
          "radius": 26
        },
        {
          "id": "rock10",
          "type": "rock",
          "x": 139,
          "y": 367,
          "radius": 22
        }
      ]
    }
  },
  {
    "id": 31,
    "name": "Misty Shallows",
    "targetTime": 45,
    "hint": "Long deep river with gentle winding turns.",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Endurance navigation",
    "world": {
      "width": 360,
      "height": 1910,
      "startX": 180,
      "startY": 1760,
      "finishX": 180,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.981,
      "waypoints": [
        {
          "y": 1910,
          "cx": 180,
          "width": 264
        },
        {
          "y": 1528,
          "cx": 205,
          "width": 264
        },
        {
          "y": 1146,
          "cx": 137,
          "width": 264
        },
        {
          "y": 764,
          "cx": 149,
          "width": 264
        },
        {
          "y": 382,
          "cx": 218,
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
          "y": 1158,
          "width": 75,
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
          "y": 805,
          "width": 75,
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
          "y": 453,
          "width": 75,
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
          "y": 1328,
          "radius": 22
        },
        {
          "id": "rock5",
          "type": "rock",
          "x": 128,
          "y": 1077,
          "radius": 24
        },
        {
          "id": "rock6",
          "type": "rock",
          "x": 249,
          "y": 825,
          "radius": 26
        },
        {
          "id": "rock7",
          "type": "rock",
          "x": 139,
          "y": 573,
          "radius": 22
        },
        {
          "id": "rock8",
          "type": "rock",
          "x": 238,
          "y": 322,
          "radius": 24
        }
      ]
    }
  },
  {
    "id": 32,
    "name": "Rock Ribbons",
    "targetTime": 45,
    "hint": "Rocks lined up along the water bends.",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Cornering near rocks",
    "world": {
      "width": 360,
      "height": 1937,
      "startX": 180,
      "startY": 1787,
      "finishX": 205,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.978,
      "waypoints": [
        {
          "y": 1937,
          "cx": 180,
          "width": 258
        },
        {
          "y": 1614,
          "cx": 153,
          "width": 258
        },
        {
          "y": 1291,
          "cx": 134,
          "width": 258
        },
        {
          "y": 969,
          "cx": 200,
          "width": 258
        },
        {
          "y": 646,
          "cx": 229,
          "width": 258
        },
        {
          "y": 323,
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
          "y": 1178,
          "width": 75,
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
          "y": 819,
          "width": 75,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 44,
          "x": 265,
          "dir": -1
        },
        {
          "id": "log3",
          "type": "log",
          "y": 459,
          "width": 75,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 44,
          "x": 95,
          "dir": 1
        },
        {
          "id": "rock4",
          "type": "rock",
          "x": 215,
          "y": 1300,
          "radius": 22
        },
        {
          "id": "rock5",
          "type": "rock",
          "x": 128,
          "y": 992,
          "radius": 24
        },
        {
          "id": "rock6",
          "type": "rock",
          "x": 249,
          "y": 685,
          "radius": 26
        },
        {
          "id": "rock7",
          "type": "rock",
          "x": 139,
          "y": 377,
          "radius": 22
        }
      ]
    }
  },
  {
    "id": 33,
    "name": "Quad Logs",
    "targetTime": 50,
    "hint": "Four floating logs in staggered patrols.",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Multi-log pacing",
    "world": {
      "width": 360,
      "height": 1964,
      "startX": 180,
      "startY": 1814,
      "finishX": 155,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 1964,
          "cx": 180,
          "width": 252
        },
        {
          "y": 1637,
          "cx": 127,
          "width": 252
        },
        {
          "y": 1309,
          "cx": 177,
          "width": 252
        },
        {
          "y": 982,
          "cx": 233,
          "width": 252
        },
        {
          "y": 655,
          "cx": 190,
          "width": 252
        },
        {
          "y": 327,
          "cx": 129,
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
          "id": "log1",
          "type": "log",
          "y": 1271,
          "width": 75,
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
          "y": 978,
          "width": 75,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 46,
          "x": 95,
          "dir": 1
        },
        {
          "id": "log3",
          "type": "log",
          "y": 686,
          "width": 75,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 46,
          "x": 265,
          "dir": -1
        },
        {
          "id": "log4",
          "type": "log",
          "y": 393,
          "width": 75,
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
          "x": 215,
          "y": 1411,
          "radius": 22
        },
        {
          "id": "rock6",
          "type": "rock",
          "x": 128,
          "y": 1187,
          "radius": 24
        },
        {
          "id": "rock7",
          "type": "rock",
          "x": 249,
          "y": 964,
          "radius": 26
        },
        {
          "id": "rock8",
          "type": "rock",
          "x": 139,
          "y": 740,
          "radius": 22
        },
        {
          "id": "rock9",
          "type": "rock",
          "x": 238,
          "y": 517,
          "radius": 24
        },
        {
          "id": "rock10",
          "type": "rock",
          "x": 105,
          "y": 293,
          "radius": 26
        }
      ]
    }
  },
  {
    "id": 34,
    "name": "The Serpent",
    "targetTime": 50,
    "hint": "Triple S-curve snake river course.",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Continuous steering",
    "world": {
      "width": 360,
      "height": 1991,
      "startX": 180,
      "startY": 1841,
      "finishX": 180,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.98,
      "waypoints": [
        {
          "y": 1991,
          "cx": 180,
          "width": 246
        },
        {
          "y": 1659,
          "cx": 154,
          "width": 246
        },
        {
          "y": 1327,
          "cx": 225,
          "width": 246
        },
        {
          "y": 996,
          "cx": 212,
          "width": 246
        },
        {
          "y": 664,
          "cx": 139,
          "width": 246
        },
        {
          "y": 332,
          "cx": 142,
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
          "y": 1218,
          "width": 75,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 48,
          "x": 95,
          "dir": 1
        },
        {
          "id": "log2",
          "type": "log",
          "y": 846,
          "width": 75,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 48,
          "x": 265,
          "dir": -1
        },
        {
          "id": "log3",
          "type": "log",
          "y": 473,
          "width": 75,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 48,
          "x": 95,
          "dir": 1
        },
        {
          "id": "rock4",
          "type": "rock",
          "x": 215,
          "y": 1396,
          "radius": 22
        },
        {
          "id": "rock5",
          "type": "rock",
          "x": 128,
          "y": 1131,
          "radius": 24
        },
        {
          "id": "rock6",
          "type": "rock",
          "x": 249,
          "y": 866,
          "radius": 26
        },
        {
          "id": "rock7",
          "type": "rock",
          "x": 139,
          "y": 600,
          "radius": 22
        },
        {
          "id": "rock8",
          "type": "rock",
          "x": 238,
          "y": 335,
          "radius": 24
        }
      ]
    }
  },
  {
    "id": 35,
    "name": "The Gauntlet",
    "targetTime": 50,
    "hint": "Pass the gate then dodge the moving log.",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Gate into log transitions",
    "world": {
      "width": 360,
      "height": 2018,
      "startX": 180,
      "startY": 1868,
      "finishX": 205,
      "finishY": 130,
      "finishRadius": 38,
      "drag": 0.981,
      "waypoints": [
        {
          "y": 2018,
          "cx": 180,
          "width": 270
        },
        {
          "y": 1682,
          "cx": 209,
          "width": 270
        },
        {
          "y": 1345,
          "cx": 229,
          "width": 270
        },
        {
          "y": 1009,
          "cx": 158,
          "width": 270
        },
        {
          "y": 673,
          "cx": 128,
          "width": 270
        },
        {
          "y": 336,
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
          "id": "gate1",
          "type": "gate",
          "y": 1095,
          "leftX": 115,
          "rightX": 245,
          "postRadius": 18
        },
        {
          "id": "gate2",
          "type": "gate",
          "y": 623,
          "leftX": 135,
          "rightX": 265,
          "postRadius": 18
        },
        {
          "id": "log3",
          "type": "log",
          "y": 1314,
          "width": 75,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 50,
          "x": 265,
          "dir": -1
        },
        {
          "id": "log4",
          "type": "log",
          "y": 1011,
          "width": 75,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 50,
          "x": 95,
          "dir": 1
        },
        {
          "id": "log5",
          "type": "log",
          "y": 707,
          "width": 75,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 50,
          "x": 265,
          "dir": -1
        },
        {
          "id": "log6",
          "type": "log",
          "y": 404,
          "width": 75,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 50,
          "x": 95,
          "dir": 1
        },
        {
          "id": "rock7",
          "type": "rock",
          "x": 215,
          "y": 1457,
          "radius": 22
        },
        {
          "id": "rock8",
          "type": "rock",
          "x": 128,
          "y": 1226,
          "radius": 24
        },
        {
          "id": "rock9",
          "type": "rock",
          "x": 249,
          "y": 995,
          "radius": 26
        },
        {
          "id": "rock10",
          "type": "rock",
          "x": 139,
          "y": 763,
          "radius": 22
        },
        {
          "id": "rock11",
          "type": "rock",
          "x": 238,
          "y": 532,
          "radius": 24
        },
        {
          "id": "rock12",
          "type": "rock",
          "x": 105,
          "y": 301,
          "radius": 26
        }
      ]
    }
  },
  {
    "id": 36,
    "name": "Canyon Strait",
    "targetTime": 45,
    "hint": "Tall river banks with minimal drift room.",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Tight corridor control",
    "world": {
      "width": 360,
      "height": 2045,
      "startX": 180,
      "startY": 1895,
      "finishX": 155,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.978,
      "waypoints": [
        {
          "y": 2045,
          "cx": 180,
          "width": 264
        },
        {
          "y": 1704,
          "cx": 236,
          "width": 264
        },
        {
          "y": 1363,
          "cx": 182,
          "width": 264
        },
        {
          "y": 1023,
          "cx": 124,
          "width": 264
        },
        {
          "y": 682,
          "cx": 170,
          "width": 264
        },
        {
          "y": 341,
          "cx": 234,
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
          "id": "gate1",
          "type": "gate",
          "y": 873,
          "leftX": 115,
          "rightX": 245,
          "postRadius": 18
        },
        {
          "id": "log2",
          "type": "log",
          "y": 1336,
          "width": 75,
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
          "y": 1027,
          "width": 75,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 52,
          "x": 265,
          "dir": -1
        },
        {
          "id": "log4",
          "type": "log",
          "y": 718,
          "width": 75,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 52,
          "x": 95,
          "dir": 1
        },
        {
          "id": "log5",
          "type": "log",
          "y": 409,
          "width": 75,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 52,
          "x": 265,
          "dir": -1
        },
        {
          "id": "rock6",
          "type": "rock",
          "x": 215,
          "y": 1441,
          "radius": 22
        },
        {
          "id": "rock7",
          "type": "rock",
          "x": 128,
          "y": 1167,
          "radius": 24
        },
        {
          "id": "rock8",
          "type": "rock",
          "x": 249,
          "y": 893,
          "radius": 26
        },
        {
          "id": "rock9",
          "type": "rock",
          "x": 139,
          "y": 618,
          "radius": 22
        },
        {
          "id": "rock10",
          "type": "rock",
          "x": 238,
          "y": 344,
          "radius": 24
        }
      ]
    }
  },
  {
    "id": 37,
    "name": "Speed & Brake",
    "targetTime": 40,
    "hint": "Full speed ahead, then full brake at the flag!",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Acceleration into sudden stop",
    "world": {
      "width": 360,
      "height": 2072,
      "startX": 180,
      "startY": 1922,
      "finishX": 180,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 2072,
          "cx": 180,
          "width": 258
        },
        {
          "y": 1727,
          "cx": 207,
          "width": 258
        },
        {
          "y": 1381,
          "cx": 132,
          "width": 258
        },
        {
          "y": 1036,
          "cx": 146,
          "width": 258
        },
        {
          "y": 691,
          "cx": 223,
          "width": 258
        },
        {
          "y": 345,
          "cx": 220,
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
          "y": 1358,
          "width": 75,
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
          "y": 1043,
          "width": 75,
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
          "y": 729,
          "width": 75,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 54,
          "x": 265,
          "dir": -1
        },
        {
          "id": "log4",
          "type": "log",
          "y": 414,
          "width": 75,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 54,
          "x": 95,
          "dir": 1
        },
        {
          "id": "rock5",
          "type": "rock",
          "x": 215,
          "y": 1503,
          "radius": 22
        },
        {
          "id": "rock6",
          "type": "rock",
          "x": 128,
          "y": 1264,
          "radius": 24
        },
        {
          "id": "rock7",
          "type": "rock",
          "x": 249,
          "y": 1025,
          "radius": 26
        },
        {
          "id": "rock8",
          "type": "rock",
          "x": 139,
          "y": 787,
          "radius": 22
        },
        {
          "id": "rock9",
          "type": "rock",
          "x": 238,
          "y": 548,
          "radius": 24
        },
        {
          "id": "rock10",
          "type": "rock",
          "x": 105,
          "y": 309,
          "radius": 26
        }
      ]
    }
  },
  {
    "id": 38,
    "name": "Rock Wave",
    "targetTime": 50,
    "hint": "Waves of boulders across the channel.",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Wave weaving",
    "world": {
      "width": 360,
      "height": 2099,
      "startX": 180,
      "startY": 1949,
      "finishX": 205,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.98,
      "waypoints": [
        {
          "y": 2099,
          "cx": 180,
          "width": 252
        },
        {
          "y": 1749,
          "cx": 149,
          "width": 252
        },
        {
          "y": 1399,
          "cx": 129,
          "width": 252
        },
        {
          "y": 1050,
          "cx": 204,
          "width": 252
        },
        {
          "y": 700,
          "cx": 235,
          "width": 252
        },
        {
          "y": 350,
          "cx": 164,
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
          "id": "log1",
          "type": "log",
          "y": 1379,
          "width": 75,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 56,
          "x": 95,
          "dir": 1
        },
        {
          "id": "log2",
          "type": "log",
          "y": 1059,
          "width": 75,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 56,
          "x": 265,
          "dir": -1
        },
        {
          "id": "log3",
          "type": "log",
          "y": 740,
          "width": 75,
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
          "y": 420,
          "width": 75,
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
          "y": 1486,
          "radius": 22
        },
        {
          "id": "rock6",
          "type": "rock",
          "x": 128,
          "y": 1203,
          "radius": 24
        },
        {
          "id": "rock7",
          "type": "rock",
          "x": 249,
          "y": 920,
          "radius": 26
        },
        {
          "id": "rock8",
          "type": "rock",
          "x": 139,
          "y": 636,
          "radius": 22
        },
        {
          "id": "rock9",
          "type": "rock",
          "x": 238,
          "y": 353,
          "radius": 24
        }
      ]
    }
  },
  {
    "id": 39,
    "name": "Twin Cascades",
    "targetTime": 50,
    "hint": "Fast channel leading into double gates.",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "High-speed alignment",
    "world": {
      "width": 360,
      "height": 2126,
      "startX": 180,
      "startY": 1976,
      "finishX": 155,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.981,
      "waypoints": [
        {
          "y": 2126,
          "cx": 180,
          "width": 246
        },
        {
          "y": 1772,
          "cx": 121,
          "width": 246
        },
        {
          "y": 1417,
          "cx": 178,
          "width": 246
        },
        {
          "y": 1063,
          "cx": 239,
          "width": 246
        },
        {
          "y": 709,
          "cx": 190,
          "width": 246
        },
        {
          "y": 354,
          "cx": 123,
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
          "y": 1401,
          "width": 75,
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
          "y": 1076,
          "width": 75,
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
          "y": 750,
          "width": 75,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 58,
          "x": 265,
          "dir": -1
        },
        {
          "id": "log4",
          "type": "log",
          "y": 425,
          "width": 75,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 58,
          "x": 95,
          "dir": 1
        },
        {
          "id": "rock5",
          "type": "rock",
          "x": 215,
          "y": 1549,
          "radius": 22
        },
        {
          "id": "rock6",
          "type": "rock",
          "x": 128,
          "y": 1303,
          "radius": 24
        },
        {
          "id": "rock7",
          "type": "rock",
          "x": 249,
          "y": 1056,
          "radius": 26
        },
        {
          "id": "rock8",
          "type": "rock",
          "x": 139,
          "y": 810,
          "radius": 22
        },
        {
          "id": "rock9",
          "type": "rock",
          "x": 238,
          "y": 563,
          "radius": 24
        },
        {
          "id": "rock10",
          "type": "rock",
          "x": 105,
          "y": 317,
          "radius": 26
        }
      ]
    }
  },
  {
    "id": 40,
    "name": "Canyon Champion",
    "targetTime": 65,
    "hint": "Zone 4 finale! High speed, gates, and timber.",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Zone 4 Grand Finale",
    "world": {
      "width": 360,
      "height": 2153,
      "startX": 180,
      "startY": 2003,
      "finishX": 180,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.978,
      "waypoints": [
        {
          "y": 2153,
          "cx": 180,
          "width": 270
        },
        {
          "y": 1794,
          "cx": 152,
          "width": 270
        },
        {
          "y": 1435,
          "cx": 231,
          "width": 270
        },
        {
          "y": 1077,
          "cx": 215,
          "width": 270
        },
        {
          "y": 718,
          "cx": 134,
          "width": 270
        },
        {
          "y": 359,
          "cx": 138,
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
          "y": 1185,
          "leftX": 115,
          "rightX": 245,
          "postRadius": 18
        },
        {
          "id": "gate2",
          "type": "gate",
          "y": 668,
          "leftX": 135,
          "rightX": 265,
          "postRadius": 18
        },
        {
          "id": "log3",
          "type": "log",
          "y": 1422,
          "width": 74,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 44,
          "x": 95,
          "dir": 1
        },
        {
          "id": "log4",
          "type": "log",
          "y": 1092,
          "width": 74,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 44,
          "x": 265,
          "dir": -1
        },
        {
          "id": "log5",
          "type": "log",
          "y": 761,
          "width": 74,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 44,
          "x": 95,
          "dir": 1
        },
        {
          "id": "log6",
          "type": "log",
          "y": 431,
          "width": 74,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 44,
          "x": 265,
          "dir": -1
        },
        {
          "id": "rock7",
          "type": "rock",
          "x": 215,
          "y": 1573,
          "radius": 22
        },
        {
          "id": "rock8",
          "type": "rock",
          "x": 128,
          "y": 1322,
          "radius": 24
        },
        {
          "id": "rock9",
          "type": "rock",
          "x": 249,
          "y": 1072,
          "radius": 26
        },
        {
          "id": "rock10",
          "type": "rock",
          "x": 139,
          "y": 821,
          "radius": 22
        },
        {
          "id": "rock11",
          "type": "rock",
          "x": 238,
          "y": 571,
          "radius": 24
        },
        {
          "id": "rock12",
          "type": "rock",
          "x": 105,
          "y": 320,
          "radius": 26
        }
      ]
    }
  },
  {
    "id": 41,
    "name": "Golden Waters",
    "targetTime": 45,
    "hint": "Grand delta begins! Enjoy the scenic flow.",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Long river pacing",
    "world": {
      "width": 360,
      "height": 2180,
      "startX": 180,
      "startY": 2030,
      "finishX": 205,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 2180,
          "cx": 180,
          "width": 264
        },
        {
          "y": 1817,
          "cx": 213,
          "width": 264
        },
        {
          "y": 1453,
          "cx": 234,
          "width": 264
        },
        {
          "y": 1090,
          "cx": 155,
          "width": 264
        },
        {
          "y": 727,
          "cx": 123,
          "width": 264
        },
        {
          "y": 363,
          "cx": 197,
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
          "y": 1444,
          "width": 74,
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
          "y": 1108,
          "width": 74,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 46,
          "x": 95,
          "dir": 1
        },
        {
          "id": "log3",
          "type": "log",
          "y": 772,
          "width": 74,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 46,
          "x": 265,
          "dir": -1
        },
        {
          "id": "log4",
          "type": "log",
          "y": 436,
          "width": 74,
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
          "x": 215,
          "y": 1596,
          "radius": 22
        },
        {
          "id": "rock6",
          "type": "rock",
          "x": 128,
          "y": 1341,
          "radius": 24
        },
        {
          "id": "rock7",
          "type": "rock",
          "x": 249,
          "y": 1087,
          "radius": 26
        },
        {
          "id": "rock8",
          "type": "rock",
          "x": 139,
          "y": 833,
          "radius": 22
        },
        {
          "id": "rock9",
          "type": "rock",
          "x": 238,
          "y": 579,
          "radius": 24
        },
        {
          "id": "rock10",
          "type": "rock",
          "x": 105,
          "y": 324,
          "radius": 26
        }
      ]
    }
  },
  {
    "id": 42,
    "name": "Stone Labyrinth",
    "targetTime": 50,
    "hint": "Boulders scattered like a garden maze.",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Complex stone routing",
    "world": {
      "width": 360,
      "height": 2207,
      "startX": 180,
      "startY": 2057,
      "finishX": 155,
      "finishY": 130,
      "finishRadius": 38,
      "drag": 0.98,
      "waypoints": [
        {
          "y": 2207,
          "cx": 180,
          "width": 258
        },
        {
          "y": 1839,
          "cx": 242,
          "width": 258
        },
        {
          "y": 1471,
          "cx": 181,
          "width": 258
        },
        {
          "y": 1104,
          "cx": 118,
          "width": 258
        },
        {
          "y": 736,
          "cx": 170,
          "width": 258
        },
        {
          "y": 368,
          "cx": 240,
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
          "y": 954,
          "leftX": 115,
          "rightX": 245,
          "postRadius": 18
        },
        {
          "id": "log2",
          "type": "log",
          "y": 1466,
          "width": 74,
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
          "y": 1124,
          "width": 74,
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
          "y": 783,
          "width": 74,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 48,
          "x": 95,
          "dir": 1
        },
        {
          "id": "log5",
          "type": "log",
          "y": 441,
          "width": 74,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 48,
          "x": 265,
          "dir": -1
        },
        {
          "id": "rock6",
          "type": "rock",
          "x": 215,
          "y": 1619,
          "radius": 22
        },
        {
          "id": "rock7",
          "type": "rock",
          "x": 128,
          "y": 1361,
          "radius": 24
        },
        {
          "id": "rock8",
          "type": "rock",
          "x": 249,
          "y": 1103,
          "radius": 26
        },
        {
          "id": "rock9",
          "type": "rock",
          "x": 139,
          "y": 844,
          "radius": 22
        },
        {
          "id": "rock10",
          "type": "rock",
          "x": 238,
          "y": 586,
          "radius": 24
        },
        {
          "id": "rock11",
          "type": "rock",
          "x": 105,
          "y": 328,
          "radius": 26
        }
      ]
    }
  },
  {
    "id": 43,
    "name": "Timber Symphony",
    "targetTime": 55,
    "hint": "Rhythmic moving logs across wide waters.",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Symphonic timing",
    "world": {
      "width": 360,
      "height": 2234,
      "startX": 180,
      "startY": 2084,
      "finishX": 180,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.981,
      "waypoints": [
        {
          "y": 2234,
          "cx": 180,
          "width": 252
        },
        {
          "y": 1862,
          "cx": 209,
          "width": 252
        },
        {
          "y": 1489,
          "cx": 126,
          "width": 252
        },
        {
          "y": 1117,
          "cx": 144,
          "width": 252
        },
        {
          "y": 745,
          "cx": 229,
          "width": 252
        },
        {
          "y": 372,
          "cx": 223,
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
          "id": "log1",
          "type": "log",
          "y": 1487,
          "width": 74,
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
          "y": 1140,
          "width": 74,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 50,
          "x": 95,
          "dir": 1
        },
        {
          "id": "log3",
          "type": "log",
          "y": 794,
          "width": 74,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 50,
          "x": 265,
          "dir": -1
        },
        {
          "id": "log4",
          "type": "log",
          "y": 447,
          "width": 74,
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
          "x": 215,
          "y": 1642,
          "radius": 22
        },
        {
          "id": "rock6",
          "type": "rock",
          "x": 128,
          "y": 1380,
          "radius": 24
        },
        {
          "id": "rock7",
          "type": "rock",
          "x": 249,
          "y": 1118,
          "radius": 26
        },
        {
          "id": "rock8",
          "type": "rock",
          "x": 139,
          "y": 856,
          "radius": 22
        },
        {
          "id": "rock9",
          "type": "rock",
          "x": 238,
          "y": 594,
          "radius": 24
        },
        {
          "id": "rock10",
          "type": "rock",
          "x": 105,
          "y": 332,
          "radius": 26
        }
      ]
    }
  },
  {
    "id": 44,
    "name": "Whirlpool Curve",
    "targetTime": 50,
    "hint": "Sharp curve into a narrow bottleneck.",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Sharp cornering",
    "world": {
      "width": 360,
      "height": 2261,
      "startX": 180,
      "startY": 2111,
      "finishX": 205,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.978,
      "waypoints": [
        {
          "y": 2261,
          "cx": 180,
          "width": 246
        },
        {
          "y": 1884,
          "cx": 145,
          "width": 246
        },
        {
          "y": 1507,
          "cx": 124,
          "width": 246
        },
        {
          "y": 1131,
          "cx": 207,
          "width": 246
        },
        {
          "y": 754,
          "cx": 240,
          "width": 246
        },
        {
          "y": 377,
          "cx": 162,
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
          "y": 1509,
          "width": 74,
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
          "y": 1157,
          "width": 74,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 52,
          "x": 265,
          "dir": -1
        },
        {
          "id": "log3",
          "type": "log",
          "y": 804,
          "width": 74,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 52,
          "x": 95,
          "dir": 1
        },
        {
          "id": "log4",
          "type": "log",
          "y": 452,
          "width": 74,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 52,
          "x": 265,
          "dir": -1
        },
        {
          "id": "rock5",
          "type": "rock",
          "x": 215,
          "y": 1665,
          "radius": 22
        },
        {
          "id": "rock6",
          "type": "rock",
          "x": 128,
          "y": 1399,
          "radius": 24
        },
        {
          "id": "rock7",
          "type": "rock",
          "x": 249,
          "y": 1133,
          "radius": 26
        },
        {
          "id": "rock8",
          "type": "rock",
          "x": 139,
          "y": 868,
          "radius": 22
        },
        {
          "id": "rock9",
          "type": "rock",
          "x": 238,
          "y": 602,
          "radius": 24
        },
        {
          "id": "rock10",
          "type": "rock",
          "x": 105,
          "y": 336,
          "radius": 26
        }
      ]
    }
  },
  {
    "id": 45,
    "name": "Four Pillars",
    "targetTime": 55,
    "hint": "Four gates spaced evenly along the river.",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Gate endurance",
    "world": {
      "width": 360,
      "height": 2288,
      "startX": 180,
      "startY": 2138,
      "finishX": 155,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 2288,
          "cx": 180,
          "width": 270
        },
        {
          "y": 1907,
          "cx": 115,
          "width": 270
        },
        {
          "y": 1525,
          "cx": 179,
          "width": 270
        },
        {
          "y": 1144,
          "cx": 245,
          "width": 270
        },
        {
          "y": 763,
          "cx": 190,
          "width": 270
        },
        {
          "y": 381,
          "cx": 117,
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
          "y": 1416,
          "leftX": 115,
          "rightX": 245,
          "postRadius": 18
        },
        {
          "id": "gate2",
          "type": "gate",
          "y": 994,
          "leftX": 135,
          "rightX": 265,
          "postRadius": 18
        },
        {
          "id": "gate3",
          "type": "gate",
          "y": 572,
          "leftX": 115,
          "rightX": 245,
          "postRadius": 18
        },
        {
          "id": "log4",
          "type": "log",
          "y": 1530,
          "width": 74,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 54,
          "x": 265,
          "dir": -1
        },
        {
          "id": "log5",
          "type": "log",
          "y": 1173,
          "width": 74,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 54,
          "x": 95,
          "dir": 1
        },
        {
          "id": "log6",
          "type": "log",
          "y": 815,
          "width": 74,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 54,
          "x": 265,
          "dir": -1
        },
        {
          "id": "log7",
          "type": "log",
          "y": 458,
          "width": 74,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 54,
          "x": 95,
          "dir": 1
        },
        {
          "id": "rock8",
          "type": "rock",
          "x": 215,
          "y": 1688,
          "radius": 22
        },
        {
          "id": "rock9",
          "type": "rock",
          "x": 128,
          "y": 1419,
          "radius": 24
        },
        {
          "id": "rock10",
          "type": "rock",
          "x": 249,
          "y": 1149,
          "radius": 26
        },
        {
          "id": "rock11",
          "type": "rock",
          "x": 139,
          "y": 879,
          "radius": 22
        },
        {
          "id": "rock12",
          "type": "rock",
          "x": 238,
          "y": 609,
          "radius": 24
        },
        {
          "id": "rock13",
          "type": "rock",
          "x": 105,
          "y": 340,
          "radius": 26
        }
      ]
    }
  },
  {
    "id": 46,
    "name": "Delta Drift",
    "targetTime": 50,
    "hint": "Wide river with shifting islands and rocks.",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Open delta navigation",
    "world": {
      "width": 360,
      "height": 2315,
      "startX": 180,
      "startY": 2165,
      "finishX": 180,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.98,
      "waypoints": [
        {
          "y": 2315,
          "cx": 180,
          "width": 264
        },
        {
          "y": 1929,
          "cx": 151,
          "width": 264
        },
        {
          "y": 1543,
          "cx": 236,
          "width": 264
        },
        {
          "y": 1158,
          "cx": 217,
          "width": 264
        },
        {
          "y": 772,
          "cx": 129,
          "width": 264
        },
        {
          "y": 386,
          "cx": 136,
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
          "y": 1552,
          "width": 74,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 56,
          "x": 95,
          "dir": 1
        },
        {
          "id": "log2",
          "type": "log",
          "y": 1189,
          "width": 74,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 56,
          "x": 265,
          "dir": -1
        },
        {
          "id": "log3",
          "type": "log",
          "y": 826,
          "width": 74,
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
          "y": 463,
          "width": 74,
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
          "y": 1711,
          "radius": 22
        },
        {
          "id": "rock6",
          "type": "rock",
          "x": 128,
          "y": 1438,
          "radius": 24
        },
        {
          "id": "rock7",
          "type": "rock",
          "x": 249,
          "y": 1164,
          "radius": 26
        },
        {
          "id": "rock8",
          "type": "rock",
          "x": 139,
          "y": 891,
          "radius": 22
        },
        {
          "id": "rock9",
          "type": "rock",
          "x": 238,
          "y": 617,
          "radius": 24
        },
        {
          "id": "rock10",
          "type": "rock",
          "x": 105,
          "y": 344,
          "radius": 26
        }
      ]
    }
  },
  {
    "id": 47,
    "name": "Master Slalom",
    "targetTime": 55,
    "hint": "Logs and rocks intertwined in a grand test.",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Mixed obstacle mastery",
    "world": {
      "width": 360,
      "height": 2342,
      "startX": 180,
      "startY": 2192,
      "finishX": 205,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.981,
      "waypoints": [
        {
          "y": 2342,
          "cx": 180,
          "width": 258
        },
        {
          "y": 1952,
          "cx": 216,
          "width": 258
        },
        {
          "y": 1561,
          "cx": 237,
          "width": 258
        },
        {
          "y": 1171,
          "cx": 152,
          "width": 258
        },
        {
          "y": 781,
          "cx": 119,
          "width": 258
        },
        {
          "y": 390,
          "cx": 199,
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
          "y": 1574,
          "width": 74,
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
          "y": 1205,
          "width": 74,
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
          "y": 837,
          "width": 74,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 58,
          "x": 265,
          "dir": -1
        },
        {
          "id": "log4",
          "type": "log",
          "y": 468,
          "width": 74,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 58,
          "x": 95,
          "dir": 1
        },
        {
          "id": "rock5",
          "type": "rock",
          "x": 215,
          "y": 1735,
          "radius": 22
        },
        {
          "id": "rock6",
          "type": "rock",
          "x": 128,
          "y": 1457,
          "radius": 24
        },
        {
          "id": "rock7",
          "type": "rock",
          "x": 249,
          "y": 1180,
          "radius": 26
        },
        {
          "id": "rock8",
          "type": "rock",
          "x": 139,
          "y": 902,
          "radius": 22
        },
        {
          "id": "rock9",
          "type": "rock",
          "x": 238,
          "y": 625,
          "radius": 24
        },
        {
          "id": "rock10",
          "type": "rock",
          "x": 105,
          "y": 347,
          "radius": 26
        }
      ]
    }
  },
  {
    "id": 48,
    "name": "The Long Voyage",
    "targetTime": 65,
    "hint": "Over 2000px of continuous river challenge!",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Endurance mastery",
    "world": {
      "width": 360,
      "height": 2369,
      "startX": 180,
      "startY": 2219,
      "finishX": 155,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.978,
      "waypoints": [
        {
          "y": 2369,
          "cx": 180,
          "width": 252
        },
        {
          "y": 1974,
          "cx": 245,
          "width": 252
        },
        {
          "y": 1579,
          "cx": 180,
          "width": 252
        },
        {
          "y": 1185,
          "cx": 115,
          "width": 252
        },
        {
          "y": 790,
          "cx": 170,
          "width": 252
        },
        {
          "y": 395,
          "cx": 243,
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
          "y": 1035,
          "leftX": 115,
          "rightX": 245,
          "postRadius": 18
        },
        {
          "id": "log2",
          "type": "log",
          "y": 1595,
          "width": 74,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 44,
          "x": 95,
          "dir": 1
        },
        {
          "id": "log3",
          "type": "log",
          "y": 1221,
          "width": 74,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 44,
          "x": 265,
          "dir": -1
        },
        {
          "id": "log4",
          "type": "log",
          "y": 848,
          "width": 74,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 44,
          "x": 95,
          "dir": 1
        },
        {
          "id": "log5",
          "type": "log",
          "y": 474,
          "width": 74,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 44,
          "x": 265,
          "dir": -1
        },
        {
          "id": "rock6",
          "type": "rock",
          "x": 215,
          "y": 1758,
          "radius": 22
        },
        {
          "id": "rock7",
          "type": "rock",
          "x": 128,
          "y": 1476,
          "radius": 24
        },
        {
          "id": "rock8",
          "type": "rock",
          "x": 249,
          "y": 1195,
          "radius": 26
        },
        {
          "id": "rock9",
          "type": "rock",
          "x": 139,
          "y": 914,
          "radius": 22
        },
        {
          "id": "rock10",
          "type": "rock",
          "x": 238,
          "y": 633,
          "radius": 24
        },
        {
          "id": "rock11",
          "type": "rock",
          "x": 105,
          "y": 351,
          "radius": 26
        }
      ]
    }
  },
  {
    "id": 49,
    "name": "Titan's Pass",
    "targetTime": 65,
    "hint": "The penultimate obstacle gauntlet.",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Penultimate trial",
    "world": {
      "width": 360,
      "height": 2396,
      "startX": 180,
      "startY": 2246,
      "finishX": 180,
      "finishY": 130,
      "finishRadius": 38,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 2396,
          "cx": 180,
          "width": 246
        },
        {
          "y": 1997,
          "cx": 209,
          "width": 246
        },
        {
          "y": 1597,
          "cx": 124,
          "width": 246
        },
        {
          "y": 1198,
          "cx": 143,
          "width": 246
        },
        {
          "y": 799,
          "cx": 231,
          "width": 246
        },
        {
          "y": 399,
          "cx": 224,
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
          "y": 1617,
          "width": 74,
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
          "y": 1238,
          "width": 74,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 46,
          "x": 95,
          "dir": 1
        },
        {
          "id": "log3",
          "type": "log",
          "y": 858,
          "width": 74,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 46,
          "x": 265,
          "dir": -1
        },
        {
          "id": "log4",
          "type": "log",
          "y": 479,
          "width": 74,
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
          "x": 215,
          "y": 1781,
          "radius": 22
        },
        {
          "id": "rock6",
          "type": "rock",
          "x": 128,
          "y": 1496,
          "radius": 24
        },
        {
          "id": "rock7",
          "type": "rock",
          "x": 249,
          "y": 1211,
          "radius": 26
        },
        {
          "id": "rock8",
          "type": "rock",
          "x": 139,
          "y": 925,
          "radius": 22
        },
        {
          "id": "rock9",
          "type": "rock",
          "x": 238,
          "y": 640,
          "radius": 24
        },
        {
          "id": "rock10",
          "type": "rock",
          "x": 105,
          "y": 355,
          "radius": 26
        }
      ]
    }
  },
  {
    "id": 50,
    "name": "The Ultimate Puff",
    "targetTime": 75,
    "hint": "The Grand Finale! Become the River King! 👑",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Final Grand Championship",
    "world": {
      "width": 360,
      "height": 2400,
      "startX": 180,
      "startY": 2250,
      "finishX": 205,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.98,
      "waypoints": [
        {
          "y": 2400,
          "cx": 180,
          "width": 270
        },
        {
          "y": 2000,
          "cx": 144,
          "width": 270
        },
        {
          "y": 1600,
          "cx": 124,
          "width": 270
        },
        {
          "y": 1200,
          "cx": 208,
          "width": 270
        },
        {
          "y": 800,
          "cx": 240,
          "width": 270
        },
        {
          "y": 400,
          "cx": 160,
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
          "y": 1500,
          "leftX": 115,
          "rightX": 245,
          "postRadius": 18
        },
        {
          "id": "gate2",
          "type": "gate",
          "y": 1050,
          "leftX": 135,
          "rightX": 265,
          "postRadius": 18
        },
        {
          "id": "gate3",
          "type": "gate",
          "y": 600,
          "leftX": 115,
          "rightX": 245,
          "postRadius": 18
        },
        {
          "id": "log4",
          "type": "log",
          "y": 1620,
          "width": 73,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 48,
          "x": 95,
          "dir": 1
        },
        {
          "id": "log5",
          "type": "log",
          "y": 1240,
          "width": 73,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 48,
          "x": 265,
          "dir": -1
        },
        {
          "id": "log6",
          "type": "log",
          "y": 860,
          "width": 73,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 48,
          "x": 95,
          "dir": 1
        },
        {
          "id": "log7",
          "type": "log",
          "y": 480,
          "width": 73,
          "height": 24,
          "minX": 85,
          "maxX": 275,
          "speed": 48,
          "x": 265,
          "dir": -1
        },
        {
          "id": "rock8",
          "type": "rock",
          "x": 215,
          "y": 1784,
          "radius": 22
        },
        {
          "id": "rock9",
          "type": "rock",
          "x": 128,
          "y": 1499,
          "radius": 24
        },
        {
          "id": "rock10",
          "type": "rock",
          "x": 249,
          "y": 1213,
          "radius": 26
        },
        {
          "id": "rock11",
          "type": "rock",
          "x": 139,
          "y": 927,
          "radius": 22
        },
        {
          "id": "rock12",
          "type": "rock",
          "x": 238,
          "y": 641,
          "radius": 24
        },
        {
          "id": "rock13",
          "type": "rock",
          "x": 105,
          "y": 356,
          "radius": 26
        }
      ]
    }
  }
];
