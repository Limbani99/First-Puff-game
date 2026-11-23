// Level definitions for First Puff - 50 Progressive Casual & Hard Levels
// Progressive river physics, challenging obstacles, and rewarding crew mechanics
// 50 Levels total: 150 Stars possible (3 stars per level)
// Level 1-10: Desi Banko Ki Entry
// Level 11-20: Desi Dhamaal
// Level 21-30: Banka Badmasho
// Level 31-40: Maha Dhurandharo
// Level 41-50: Baap No Baap

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
    "name": "Banko Bakhedo",
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
    },
    "zone": "Desi Banko Ki Entry"
  },
  {
    "id": 2,
    "name": "Dedko Banko",
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
    },
    "zone": "Desi Banko Ki Entry"
  },
  {
    "id": 3,
    "name": "Dukkad No Dhamaliyo",
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
    },
    "zone": "Desi Banko Ki Entry"
  },
  {
    "id": 4,
    "name": "Undar No Ustad",
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
    },
    "zone": "Desi Banko Ki Entry"
  },
  {
    "id": 5,
    "name": "Penguin Ni Panoti",
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
    },
    "zone": "Desi Banko Ki Entry"
  },
  {
    "id": 6,
    "name": "Gotaliyo Gabbar",
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
    },
    "zone": "Desi Banko Ki Entry"
  },
  {
    "id": 7,
    "name": "Banko Badmash",
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
          "minX": 102,
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
    },
    "zone": "Desi Banko Ki Entry"
  },
  {
    "id": 8,
    "name": "Chakram Chaudhary",
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
          "maxX": 244,
          "speed": 44,
          "x": 95,
          "dir": 1
        }
      ]
    },
    "zone": "Desi Banko Ki Entry"
  },
  {
    "id": 9,
    "name": "Lafanga No Lafdo",
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
          "maxX": 245,
          "speed": 45,
          "x": 240,
          "dir": -1
        },
        {
          "id": "gate1",
          "type": "gate",
          "y": 658,
          "leftX": 106,
          "rightX": 222,
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
    },
    "zone": "Desi Banko Ki Entry"
  },
  {
    "id": 10,
    "name": "Naseeb No Nawab",
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
          "leftX": 134,
          "rightX": 250,
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
    },
    "zone": "Desi Banko Ki Entry"
  },
  {
    "id": 11,
    "name": "Dedko Dhurandhar",
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
          "minX": 113,
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
    },
    "zone": "Desi Dhamaal"
  },
  {
    "id": 12,
    "name": "Pinku Bawaliyo",
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
          "minX": 123,
          "maxX": 275,
          "speed": 52,
          "x": 123,
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
          "minX": 94,
          "maxX": 271,
          "speed": 52,
          "x": 265,
          "dir": -1
        }
      ]
    },
    "zone": "Desi Dhamaal"
  },
  {
    "id": 13,
    "name": "Undar No Bahubali",
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
          "leftX": 137,
          "rightX": 253,
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
          "leftX": 108,
          "rightX": 224,
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
    },
    "zone": "Desi Dhamaal"
  },
  {
    "id": 14,
    "name": "Banko Bajigar",
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
          "maxX": 252,
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
    },
    "zone": "Desi Dhamaal"
  },
  {
    "id": 15,
    "name": "Dhakkamukki No Dado",
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
          "maxX": 237,
          "speed": 52,
          "x": 237,
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
    },
    "zone": "Desi Dhamaal"
  },
  {
    "id": 16,
    "name": "Lapsano Lafango",
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
          "minX": 108,
          "maxX": 255,
          "speed": 44,
          "x": 108,
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
          "minX": 117,
          "maxX": 255,
          "speed": 44,
          "x": 240,
          "dir": -1
        }
      ]
    },
    "zone": "Desi Dhamaal"
  },
  {
    "id": 17,
    "name": "Khiladi Khalas",
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
          "minX": 124,
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
          "minX": 109,
          "maxX": 274,
          "speed": 46,
          "x": 109,
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
    },
    "zone": "Desi Dhamaal"
  },
  {
    "id": 18,
    "name": "Kudakud No King",
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
          "minX": 136,
          "maxX": 255,
          "speed": 46,
          "x": 136,
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
          "leftX": 132,
          "rightX": 248,
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
          "maxX": 224,
          "speed": 46,
          "x": 105,
          "dir": 1
        }
      ]
    },
    "zone": "Desi Dhamaal"
  },
  {
    "id": 19,
    "name": "Gotalano Gangster",
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
          "minX": 97,
          "maxX": 250,
          "speed": 50,
          "x": 250,
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
          "maxX": 228,
          "speed": 50,
          "x": 95,
          "dir": 1
        },
        {
          "id": "rock5",
          "type": "rock",
          "x": 244,
          "y": 411,
          "radius": 26
        }
      ]
    },
    "zone": "Desi Dhamaal"
  },
  {
    "id": 20,
    "name": "Bapu No Bakhedo",
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
          "maxX": 242,
          "speed": 50,
          "x": 105,
          "dir": 1
        },
        {
          "id": "gate1",
          "type": "gate",
          "y": 807,
          "leftX": 86,
          "rightX": 202,
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
          "minX": 102,
          "maxX": 255,
          "speed": 50,
          "x": 240,
          "dir": -1
        }
      ]
    },
    "zone": "Desi Dhamaal"
  },
  {
    "id": 21,
    "name": "Bawlo Badshah",
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
          "maxX": 235,
          "speed": 54,
          "x": 235,
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
          "minX": 91,
          "maxX": 263,
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
          "minX": 123,
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
    },
    "zone": "Banka Badmasho"
  },
  {
    "id": 22,
    "name": "Bhagambhag No Bhadveer",
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
          "leftX": 116,
          "rightX": 232,
          "postRadius": 16
        },
        {
          "id": "log3",
          "type": "log",
          "y": 987,
          "width": 74,
          "height": 22,
          "minX": 110,
          "maxX": 255,
          "speed": 52,
          "x": 110,
          "dir": 1
        },
        {
          "id": "gate2",
          "type": "gate",
          "y": 834,
          "leftX": 157,
          "rightX": 273,
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
          "leftX": 150,
          "rightX": 266,
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
    },
    "zone": "Banka Badmasho"
  },
  {
    "id": 23,
    "name": "Taplibaj Tolki",
    "targetTime": 50,
    "hint": "Steer across the river bend from right to left!",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Handcrafted Pattern 23",
    "world": {
      "width": 360,
      "height": 1350,
      "startY": 1200,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 1350,
          "cx": 245,
          "width": 170
        },
        {
          "y": 900,
          "cx": 245,
          "width": 170
        },
        {
          "y": 650,
          "cx": 115,
          "width": 175
        },
        {
          "y": 0,
          "cx": 115,
          "width": 170
        }
      ],
      "obstacles": [
        {
          "id": "log1",
          "type": "log",
          "y": 950,
          "width": 62,
          "height": 22,
          "minX": 205,
          "maxX": 275,
          "speed": 38,
          "x": 230,
          "dir": 1
        },
        {
          "id": "rock1",
          "type": "rock",
          "x": 220,
          "y": 720,
          "radius": 18
        },
        {
          "id": "gate1",
          "type": "gate",
          "y": 380,
          "leftX": 70,
          "rightX": 160,
          "postRadius": 14
        }
      ],
      "startX": 245,
      "finishX": 115
    },
    "zone": "Banka Badmasho"
  },
  {
    "id": 24,
    "name": "Kismat No Kangalo",
    "targetTime": 52,
    "hint": "Glide gently into the right bay and back out.",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Handcrafted Pattern 24",
    "world": {
      "width": 360,
      "height": 1400,
      "startY": 1250,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 1400,
          "cx": 135,
          "width": 170
        },
        {
          "y": 1050,
          "cx": 135,
          "width": 170
        },
        {
          "y": 850,
          "cx": 240,
          "width": 175
        },
        {
          "y": 650,
          "cx": 240,
          "width": 175
        },
        {
          "y": 450,
          "cx": 135,
          "width": 170
        },
        {
          "y": 0,
          "cx": 135,
          "width": 170
        }
      ],
      "obstacles": [
        {
          "id": "rock1",
          "type": "rock",
          "x": 145,
          "y": 1000,
          "radius": 18
        },
        {
          "id": "log1",
          "type": "log",
          "y": 750,
          "width": 62,
          "height": 22,
          "minX": 195,
          "maxX": 275,
          "speed": 40,
          "x": 220,
          "dir": 1
        },
        {
          "id": "gate1",
          "type": "gate",
          "y": 360,
          "leftX": 90,
          "rightX": 180,
          "postRadius": 14
        }
      ],
      "startX": 135,
      "finishX": 135
    },
    "zone": "Banka Badmasho"
  },
  {
    "id": 25,
    "name": "Banko Boss",
    "targetTime": 55,
    "hint": "Three gentle steps up and to the right!",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Handcrafted Pattern 25",
    "world": {
      "width": 360,
      "height": 1500,
      "startY": 1350,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 1500,
          "cx": 100,
          "width": 170
        },
        {
          "y": 1150,
          "cx": 100,
          "width": 170
        },
        {
          "y": 950,
          "cx": 180,
          "width": 175
        },
        {
          "y": 650,
          "cx": 180,
          "width": 175
        },
        {
          "y": 450,
          "cx": 260,
          "width": 170
        },
        {
          "y": 0,
          "cx": 260,
          "width": 170
        }
      ],
      "obstacles": [
        {
          "id": "gate1",
          "type": "gate",
          "y": 1100,
          "leftX": 55,
          "rightX": 145,
          "postRadius": 14
        },
        {
          "id": "log1",
          "type": "log",
          "y": 800,
          "width": 64,
          "height": 22,
          "minX": 140,
          "maxX": 220,
          "speed": 38,
          "x": 170,
          "dir": -1
        },
        {
          "id": "rock1",
          "type": "rock",
          "x": 250,
          "y": 400,
          "radius": 18
        }
      ],
      "startX": 100,
      "finishX": 260
    },
    "zone": "Banka Badmasho"
  },
  {
    "id": 26,
    "name": "Undha Pag No Ustad",
    "targetTime": 55,
    "hint": "Step left as you ascend the river terrace.",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Handcrafted Pattern 26",
    "world": {
      "width": 360,
      "height": 1500,
      "startY": 1350,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 1500,
          "cx": 260,
          "width": 170
        },
        {
          "y": 1150,
          "cx": 260,
          "width": 170
        },
        {
          "y": 950,
          "cx": 180,
          "width": 175
        },
        {
          "y": 650,
          "cx": 180,
          "width": 175
        },
        {
          "y": 450,
          "cx": 100,
          "width": 170
        },
        {
          "y": 0,
          "cx": 100,
          "width": 170
        }
      ],
      "obstacles": [
        {
          "id": "gate1",
          "type": "gate",
          "y": 1100,
          "leftX": 215,
          "rightX": 305,
          "postRadius": 14
        },
        {
          "id": "log1",
          "type": "log",
          "y": 800,
          "width": 64,
          "height": 22,
          "minX": 140,
          "maxX": 220,
          "speed": 38,
          "x": 170,
          "dir": 1
        },
        {
          "id": "rock1",
          "type": "rock",
          "x": 110,
          "y": 400,
          "radius": 18
        }
      ],
      "startX": 260,
      "finishX": 100
    },
    "zone": "Banka Badmasho"
  },
  {
    "id": 27,
    "name": "Khurshi No Khalnayak",
    "targetTime": 58,
    "hint": "Use Frog and Pig to smoothly weave each bend.",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Handcrafted Pattern 27",
    "world": {
      "width": 360,
      "height": 1600,
      "startY": 1450,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 1600,
          "cx": 110,
          "width": 170
        },
        {
          "y": 1300,
          "cx": 110,
          "width": 170
        },
        {
          "y": 1050,
          "cx": 250,
          "width": 175
        },
        {
          "y": 750,
          "cx": 110,
          "width": 175
        },
        {
          "y": 450,
          "cx": 250,
          "width": 170
        },
        {
          "y": 0,
          "cx": 250,
          "width": 170
        }
      ],
      "obstacles": [
        {
          "id": "rock1",
          "type": "rock",
          "x": 120,
          "y": 1200,
          "radius": 18
        },
        {
          "id": "log1",
          "type": "log",
          "y": 900,
          "width": 62,
          "height": 22,
          "minX": 150,
          "maxX": 225,
          "speed": 36,
          "x": 180,
          "dir": 1
        },
        {
          "id": "rock2",
          "type": "rock",
          "x": 110,
          "y": 650,
          "radius": 18
        },
        {
          "id": "gate1",
          "type": "gate",
          "y": 350,
          "leftX": 205,
          "rightX": 295,
          "postRadius": 14
        }
      ],
      "startX": 110,
      "finishX": 250
    },
    "zone": "Banka Badmasho"
  },
  {
    "id": 28,
    "name": "Mathakut No Maharathi",
    "targetTime": 58,
    "hint": "Gentle sinusoidal waves guide your raft.",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Handcrafted Pattern 28",
    "world": {
      "width": 360,
      "height": 1600,
      "startY": 1450,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 1600,
          "cx": 130,
          "width": 175
        },
        {
          "y": 1350,
          "cx": 230,
          "width": 175
        },
        {
          "y": 1100,
          "cx": 130,
          "width": 175
        },
        {
          "y": 850,
          "cx": 230,
          "width": 175
        },
        {
          "y": 600,
          "cx": 130,
          "width": 175
        },
        {
          "y": 350,
          "cx": 230,
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
          "id": "rock1",
          "type": "rock",
          "x": 190,
          "y": 1250,
          "radius": 18
        },
        {
          "id": "log1",
          "type": "log",
          "y": 980,
          "width": 60,
          "height": 22,
          "minX": 140,
          "maxX": 215,
          "speed": 36,
          "x": 175,
          "dir": -1
        },
        {
          "id": "gate1",
          "type": "gate",
          "y": 700,
          "leftX": 125,
          "rightX": 215,
          "postRadius": 14
        },
        {
          "id": "rock2",
          "type": "rock",
          "x": 140,
          "y": 450,
          "radius": 18
        }
      ],
      "startX": 190,
      "finishX": 199
    },
    "zone": "Banka Badmasho"
  },
  {
    "id": 29,
    "name": "Fasayo Fatakdo",
    "targetTime": 54,
    "hint": "Cross the central channel into the right stream.",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Handcrafted Pattern 29",
    "world": {
      "width": 360,
      "height": 1500,
      "startY": 1350,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 1500,
          "cx": 105,
          "width": 170
        },
        {
          "y": 1100,
          "cx": 105,
          "width": 170
        },
        {
          "y": 850,
          "cx": 180,
          "width": 180
        },
        {
          "y": 550,
          "cx": 255,
          "width": 170
        },
        {
          "y": 0,
          "cx": 255,
          "width": 170
        }
      ],
      "obstacles": [
        {
          "id": "gate1",
          "type": "gate",
          "y": 1150,
          "leftX": 60,
          "rightX": 150,
          "postRadius": 14
        },
        {
          "id": "log1",
          "type": "log",
          "y": 850,
          "width": 64,
          "height": 22,
          "minX": 145,
          "maxX": 215,
          "speed": 38,
          "x": 180,
          "dir": 1
        },
        {
          "id": "rock1",
          "type": "rock",
          "x": 240,
          "y": 450,
          "radius": 18
        }
      ],
      "startX": 105,
      "finishX": 255
    },
    "zone": "Banka Badmasho"
  },
  {
    "id": 30,
    "name": "Gotalano Gabbar",
    "targetTime": 60,
    "hint": "Left, right, left, and center - stay steady!",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Handcrafted Pattern 30",
    "world": {
      "width": 360,
      "height": 1650,
      "startY": 1500,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 1650,
          "cx": 180,
          "width": 175
        },
        {
          "y": 1300,
          "cx": 110,
          "width": 175
        },
        {
          "y": 950,
          "cx": 250,
          "width": 175
        },
        {
          "y": 600,
          "cx": 110,
          "width": 175
        },
        {
          "y": 300,
          "cx": 180,
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
          "id": "rock1",
          "type": "rock",
          "x": 130,
          "y": 1250,
          "radius": 18
        },
        {
          "id": "log1",
          "type": "log",
          "y": 950,
          "width": 62,
          "height": 22,
          "minX": 205,
          "maxX": 285,
          "speed": 38,
          "x": 240,
          "dir": -1
        },
        {
          "id": "gate1",
          "type": "gate",
          "y": 650,
          "leftX": 65,
          "rightX": 155,
          "postRadius": 14
        },
        {
          "id": "rock2",
          "type": "rock",
          "x": 180,
          "y": 350,
          "radius": 18
        }
      ],
      "startX": 150,
      "finishX": 180
    },
    "zone": "Banka Badmasho"
  },
  {
    "id": 31,
    "name": "Chakram Champion",
    "targetTime": 56,
    "hint": "Climb diagonally across four gentle river terraces.",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Handcrafted Pattern 31",
    "world": {
      "width": 360,
      "height": 1550,
      "startY": 1400,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 1550,
          "cx": 95,
          "width": 170
        },
        {
          "y": 1200,
          "cx": 135,
          "width": 170
        },
        {
          "y": 850,
          "cx": 180,
          "width": 175
        },
        {
          "y": 550,
          "cx": 225,
          "width": 170
        },
        {
          "y": 0,
          "cx": 265,
          "width": 170
        }
      ],
      "obstacles": [
        {
          "id": "rock1",
          "type": "rock",
          "x": 115,
          "y": 1250,
          "radius": 18
        },
        {
          "id": "gate1",
          "type": "gate",
          "y": 900,
          "leftX": 135,
          "rightX": 225,
          "postRadius": 14
        },
        {
          "id": "log1",
          "type": "log",
          "y": 600,
          "width": 62,
          "height": 22,
          "minX": 185,
          "maxX": 255,
          "speed": 38,
          "x": 220,
          "dir": 1
        }
      ],
      "startX": 112,
      "finishX": 256
    },
    "zone": "Maha Dhurandharo"
  },
  {
    "id": 32,
    "name": "Bheja No Bhadko",
    "targetTime": 58,
    "hint": "Step steadily right to left down the great terrace.",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Handcrafted Pattern 32",
    "world": {
      "width": 360,
      "height": 1600,
      "startY": 1450,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 1600,
          "cx": 260,
          "width": 170
        },
        {
          "y": 1250,
          "cx": 215,
          "width": 170
        },
        {
          "y": 950,
          "cx": 170,
          "width": 175
        },
        {
          "y": 600,
          "cx": 125,
          "width": 170
        },
        {
          "y": 0,
          "cx": 100,
          "width": 170
        }
      ],
      "obstacles": [
        {
          "id": "rock1",
          "type": "rock",
          "x": 235,
          "y": 1300,
          "radius": 18
        },
        {
          "id": "gate1",
          "type": "gate",
          "y": 980,
          "leftX": 125,
          "rightX": 215,
          "postRadius": 14
        },
        {
          "id": "log1",
          "type": "log",
          "y": 650,
          "width": 62,
          "height": 22,
          "minX": 95,
          "maxX": 165,
          "speed": 36,
          "x": 130,
          "dir": -1
        }
      ],
      "startX": 241,
      "finishX": 105
    },
    "zone": "Maha Dhurandharo"
  },
  {
    "id": 33,
    "name": "Tantiya Khech Tofani",
    "targetTime": 54,
    "hint": "Sail through the twin wooden gates in succession.",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Handcrafted Pattern 33",
    "world": {
      "width": 360,
      "height": 1500,
      "startY": 1350,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 1500,
          "cx": 110,
          "width": 170
        },
        {
          "y": 1150,
          "cx": 250,
          "width": 175
        },
        {
          "y": 750,
          "cx": 110,
          "width": 175
        },
        {
          "y": 400,
          "cx": 250,
          "width": 170
        },
        {
          "y": 0,
          "cx": 250,
          "width": 170
        }
      ],
      "obstacles": [
        {
          "id": "gate1",
          "type": "gate",
          "y": 1150,
          "leftX": 205,
          "rightX": 295,
          "postRadius": 14
        },
        {
          "id": "log1",
          "type": "log",
          "y": 800,
          "width": 62,
          "height": 22,
          "minX": 85,
          "maxX": 155,
          "speed": 38,
          "x": 120,
          "dir": 1
        },
        {
          "id": "gate2",
          "type": "gate",
          "y": 400,
          "leftX": 205,
          "rightX": 295,
          "postRadius": 14
        }
      ],
      "startX": 170,
      "finishX": 250
    },
    "zone": "Maha Dhurandharo"
  },
  {
    "id": 34,
    "name": "Babal No Badshah",
    "targetTime": 50,
    "hint": "Follow the triangular corridor up to the summit.",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Handcrafted Pattern 34",
    "world": {
      "width": 360,
      "height": 1400,
      "startY": 1250,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 1400,
          "cx": 180,
          "width": 250
        },
        {
          "y": 950,
          "cx": 180,
          "width": 200
        },
        {
          "y": 550,
          "cx": 180,
          "width": 165
        },
        {
          "y": 200,
          "cx": 180,
          "width": 140
        },
        {
          "y": 0,
          "cx": 180,
          "width": 150
        }
      ],
      "obstacles": [
        {
          "id": "rock1",
          "type": "rock",
          "x": 150,
          "y": 1000,
          "radius": 18
        },
        {
          "id": "log1",
          "type": "log",
          "y": 700,
          "width": 58,
          "height": 22,
          "minX": 145,
          "maxX": 215,
          "speed": 36,
          "x": 180,
          "dir": 1
        },
        {
          "id": "gate1",
          "type": "gate",
          "y": 400,
          "leftX": 135,
          "rightX": 225,
          "postRadius": 14
        }
      ],
      "startX": 180,
      "finishX": 180
    },
    "zone": "Maha Dhurandharo"
  },
  {
    "id": 35,
    "name": "Kudka Maar Kaliya",
    "targetTime": 52,
    "hint": "Three gentle shelves climbing from right to left.",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Handcrafted Pattern 35",
    "world": {
      "width": 360,
      "height": 1400,
      "startY": 1250,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 1400,
          "cx": 250,
          "width": 170
        },
        {
          "y": 1000,
          "cx": 250,
          "width": 170
        },
        {
          "y": 750,
          "cx": 180,
          "width": 175
        },
        {
          "y": 400,
          "cx": 110,
          "width": 170
        },
        {
          "y": 0,
          "cx": 110,
          "width": 170
        }
      ],
      "obstacles": [
        {
          "id": "gate1",
          "type": "gate",
          "y": 1000,
          "leftX": 205,
          "rightX": 295,
          "postRadius": 14
        },
        {
          "id": "log1",
          "type": "log",
          "y": 700,
          "width": 62,
          "height": 22,
          "minX": 145,
          "maxX": 215,
          "speed": 38,
          "x": 180,
          "dir": -1
        },
        {
          "id": "rock1",
          "type": "rock",
          "x": 110,
          "y": 380,
          "radius": 18
        }
      ],
      "startX": 250,
      "finishX": 110
    },
    "zone": "Maha Dhurandharo"
  },
  {
    "id": 36,
    "name": "Undar No Akhado",
    "targetTime": 52,
    "hint": "Follow the bold diagonal slash across the river.",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Handcrafted Pattern 36",
    "world": {
      "width": 360,
      "height": 1400,
      "startY": 1250,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 1400,
          "cx": 100,
          "width": 170
        },
        {
          "y": 750,
          "cx": 260,
          "width": 175
        },
        {
          "y": 400,
          "cx": 130,
          "width": 170
        },
        {
          "y": 0,
          "cx": 130,
          "width": 170
        }
      ],
      "obstacles": [
        {
          "id": "rock1",
          "type": "rock",
          "x": 120,
          "y": 1100,
          "radius": 18
        },
        {
          "id": "log1",
          "type": "log",
          "y": 750,
          "width": 62,
          "height": 22,
          "minX": 215,
          "maxX": 285,
          "speed": 38,
          "x": 250,
          "dir": 1
        },
        {
          "id": "gate1",
          "type": "gate",
          "y": 350,
          "leftX": 85,
          "rightX": 175,
          "postRadius": 14
        }
      ],
      "startX": 137,
      "finishX": 130
    },
    "zone": "Maha Dhurandharo"
  },
  {
    "id": 37,
    "name": "Dedka No Dabdabho",
    "targetTime": 58,
    "hint": "A grand rectangular loop: across, up, and back!",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Handcrafted Pattern 37",
    "world": {
      "width": 360,
      "height": 1550,
      "startY": 1400,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 1550,
          "cx": 100,
          "width": 170
        },
        {
          "y": 1200,
          "cx": 260,
          "width": 175
        },
        {
          "y": 600,
          "cx": 260,
          "width": 175
        },
        {
          "y": 350,
          "cx": 100,
          "width": 170
        },
        {
          "y": 0,
          "cx": 100,
          "width": 170
        }
      ],
      "obstacles": [
        {
          "id": "rock1",
          "type": "rock",
          "x": 240,
          "y": 1200,
          "radius": 18
        },
        {
          "id": "gate1",
          "type": "gate",
          "y": 900,
          "leftX": 215,
          "rightX": 305,
          "postRadius": 14
        },
        {
          "id": "log1",
          "type": "log",
          "y": 600,
          "width": 62,
          "height": 22,
          "minX": 215,
          "maxX": 285,
          "speed": 38,
          "x": 250,
          "dir": -1
        },
        {
          "id": "rock2",
          "type": "rock",
          "x": 110,
          "y": 320,
          "radius": 18
        }
      ],
      "startX": 169,
      "finishX": 100
    },
    "zone": "Maha Dhurandharo"
  },
  {
    "id": 38,
    "name": "Penguin No Power",
    "targetTime": 60,
    "hint": "Weave the double S-curves like a graceful snake.",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Handcrafted Pattern 38",
    "world": {
      "width": 360,
      "height": 1600,
      "startY": 1450,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 1600,
          "cx": 250,
          "width": 170
        },
        {
          "y": 1100,
          "cx": 250,
          "width": 170
        },
        {
          "y": 750,
          "cx": 110,
          "width": 175
        },
        {
          "y": 400,
          "cx": 250,
          "width": 175
        },
        {
          "y": 150,
          "cx": 110,
          "width": 170
        },
        {
          "y": 0,
          "cx": 110,
          "width": 170
        }
      ],
      "obstacles": [
        {
          "id": "rock1",
          "type": "rock",
          "x": 245,
          "y": 1250,
          "radius": 18
        },
        {
          "id": "gate1",
          "type": "gate",
          "y": 750,
          "leftX": 65,
          "rightX": 155,
          "postRadius": 14
        },
        {
          "id": "log1",
          "type": "log",
          "y": 450,
          "width": 62,
          "height": 22,
          "minX": 205,
          "maxX": 275,
          "speed": 38,
          "x": 240,
          "dir": 1
        }
      ],
      "startX": 250,
      "finishX": 110
    },
    "zone": "Maha Dhurandharo"
  },
  {
    "id": 39,
    "name": "Dukkad No Dadagiri Dance",
    "targetTime": 54,
    "hint": "Up the left leg, cross diagonally, up the right leg!",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Handcrafted Pattern 39",
    "world": {
      "width": 360,
      "height": 1500,
      "startY": 1350,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 1500,
          "cx": 100,
          "width": 170
        },
        {
          "y": 1000,
          "cx": 100,
          "width": 170
        },
        {
          "y": 600,
          "cx": 260,
          "width": 175
        },
        {
          "y": 0,
          "cx": 260,
          "width": 170
        }
      ],
      "obstacles": [
        {
          "id": "gate1",
          "type": "gate",
          "y": 1050,
          "leftX": 55,
          "rightX": 145,
          "postRadius": 14
        },
        {
          "id": "log1",
          "type": "log",
          "y": 700,
          "width": 62,
          "height": 22,
          "minX": 180,
          "maxX": 255,
          "speed": 38,
          "x": 215,
          "dir": 1
        },
        {
          "id": "rock1",
          "type": "rock",
          "x": 250,
          "y": 350,
          "radius": 18
        }
      ],
      "startX": 100,
      "finishX": 260
    },
    "zone": "Maha Dhurandharo"
  },
  {
    "id": 40,
    "name": "Jeet No Jalebibaj",
    "targetTime": 52,
    "hint": "Angle smoothly down into the apex and out to glory.",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Handcrafted Pattern 40",
    "world": {
      "width": 360,
      "height": 1400,
      "startY": 1250,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 1400,
          "cx": 100,
          "width": 170
        },
        {
          "y": 750,
          "cx": 180,
          "width": 175
        },
        {
          "y": 0,
          "cx": 260,
          "width": 170
        }
      ],
      "obstacles": [
        {
          "id": "rock1",
          "type": "rock",
          "x": 120,
          "y": 1050,
          "radius": 18
        },
        {
          "id": "gate1",
          "type": "gate",
          "y": 750,
          "leftX": 135,
          "rightX": 225,
          "postRadius": 14
        },
        {
          "id": "log1",
          "type": "log",
          "y": 400,
          "width": 60,
          "height": 22,
          "minX": 180,
          "maxX": 250,
          "speed": 38,
          "x": 215,
          "dir": -1
        }
      ],
      "startX": 118,
      "finishX": 246
    },
    "zone": "Maha Dhurandharo"
  },
  {
    "id": 41,
    "name": "Banko Bahubali",
    "targetTime": 60,
    "hint": "Full-width sweeping maneuvers from bank to bank.",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Handcrafted Pattern 41",
    "world": {
      "width": 360,
      "height": 1650,
      "startY": 1500,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 1650,
          "cx": 180,
          "width": 175
        },
        {
          "y": 1250,
          "cx": 100,
          "width": 170
        },
        {
          "y": 850,
          "cx": 260,
          "width": 175
        },
        {
          "y": 450,
          "cx": 100,
          "width": 170
        },
        {
          "y": 0,
          "cx": 110,
          "width": 170
        }
      ],
      "obstacles": [
        {
          "id": "rock1",
          "type": "rock",
          "x": 115,
          "y": 1200,
          "radius": 18
        },
        {
          "id": "log1",
          "type": "log",
          "y": 850,
          "width": 62,
          "height": 22,
          "minX": 215,
          "maxX": 285,
          "speed": 38,
          "x": 250,
          "dir": 1
        },
        {
          "id": "gate1",
          "type": "gate",
          "y": 500,
          "leftX": 65,
          "rightX": 155,
          "postRadius": 14
        }
      ],
      "startX": 150,
      "finishX": 107
    },
    "zone": "Baap No Baap"
  },
  {
    "id": 42,
    "name": "Kismat No King",
    "targetTime": 60,
    "hint": "Follow the keyhole turns through the golden canyons.",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Handcrafted Pattern 42",
    "world": {
      "width": 360,
      "height": 1650,
      "startY": 1500,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 1650,
          "cx": 250,
          "width": 170
        },
        {
          "y": 1300,
          "cx": 110,
          "width": 170
        },
        {
          "y": 1000,
          "cx": 250,
          "width": 175
        },
        {
          "y": 700,
          "cx": 110,
          "width": 175
        },
        {
          "y": 400,
          "cx": 250,
          "width": 170
        },
        {
          "y": 0,
          "cx": 110,
          "width": 170
        }
      ],
      "obstacles": [
        {
          "id": "gate1",
          "type": "gate",
          "y": 1250,
          "leftX": 65,
          "rightX": 155,
          "postRadius": 14
        },
        {
          "id": "log1",
          "type": "log",
          "y": 950,
          "width": 62,
          "height": 22,
          "minX": 205,
          "maxX": 275,
          "speed": 38,
          "x": 240,
          "dir": -1
        },
        {
          "id": "rock1",
          "type": "rock",
          "x": 120,
          "y": 650,
          "radius": 18
        },
        {
          "id": "gate2",
          "type": "gate",
          "y": 350,
          "leftX": 205,
          "rightX": 295,
          "postRadius": 14
        }
      ],
      "startX": 190,
      "finishX": 156
    },
    "zone": "Baap No Baap"
  },
  {
    "id": 43,
    "name": "Maha Mathafodi",
    "targetTime": 62,
    "hint": "A magnificent W-shaped river course to triumph!",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Handcrafted Pattern 43",
    "world": {
      "width": 360,
      "height": 1700,
      "startY": 1550,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 1700,
          "cx": 100,
          "width": 170
        },
        {
          "y": 1350,
          "cx": 180,
          "width": 175
        },
        {
          "y": 1000,
          "cx": 100,
          "width": 175
        },
        {
          "y": 650,
          "cx": 180,
          "width": 175
        },
        {
          "y": 350,
          "cx": 260,
          "width": 170
        },
        {
          "y": 0,
          "cx": 260,
          "width": 170
        }
      ],
      "obstacles": [
        {
          "id": "rock1",
          "type": "rock",
          "x": 130,
          "y": 1350,
          "radius": 18
        },
        {
          "id": "log1",
          "type": "log",
          "y": 1000,
          "width": 62,
          "height": 22,
          "minX": 85,
          "maxX": 155,
          "speed": 36,
          "x": 120,
          "dir": 1
        },
        {
          "id": "gate1",
          "type": "gate",
          "y": 650,
          "leftX": 135,
          "rightX": 225,
          "postRadius": 14
        },
        {
          "id": "rock2",
          "type": "rock",
          "x": 240,
          "y": 350,
          "radius": 18
        }
      ],
      "startX": 134,
      "finishX": 260
    },
    "zone": "Baap No Baap"
  },
  {
    "id": 44,
    "name": "Gotalano Guru",
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
          "x": 253,
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
          "minX": 163,
          "maxX": 219,
          "speed": 120,
          "x": 219,
          "dir": -1
        },
        {
          "id": "rock_12",
          "type": "rock",
          "x": 138,
          "y": 1899,
          "radius": 21
        },
        {
          "id": "gate_1",
          "type": "gate",
          "y": 1822,
          "leftX": 117,
          "rightX": 223,
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
          "maxX": 178,
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
          "x": 243,
          "y": 1364,
          "radius": 18
        },
        {
          "id": "gate_2",
          "type": "gate",
          "y": 1288,
          "leftX": 159,
          "rightX": 263,
          "postRadius": 11
        },
        {
          "id": "log_6",
          "type": "log",
          "y": 1212,
          "width": 60,
          "height": 22,
          "minX": 178,
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
          "x": 124,
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
          "maxX": 188,
          "speed": 119,
          "x": 126,
          "dir": 1
        },
        {
          "id": "rock_21",
          "type": "rock",
          "x": 185,
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
          "leftX": 117,
          "rightX": 223,
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
          "minX": 163,
          "maxX": 231,
          "speed": 112,
          "x": 231,
          "dir": -1
        },
        {
          "id": "rock_24",
          "type": "rock",
          "x": 166,
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
    },
    "zone": "Baap No Baap"
  },
  {
    "id": 45,
    "name": "Akkal No Andhariyo",
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
          "x": 252,
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
          "minX": 180,
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
          "x": 141,
          "y": 1923,
          "radius": 21
        },
        {
          "id": "log_5",
          "type": "log",
          "y": 1846,
          "width": 61,
          "height": 22,
          "minX": 136,
          "maxX": 201,
          "speed": 118,
          "x": 136,
          "dir": 1
        },
        {
          "id": "gate_1",
          "type": "gate",
          "y": 1768,
          "leftX": 102,
          "rightX": 208,
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
          "maxX": 202,
          "speed": 131,
          "x": 202,
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
          "maxX": 231,
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
          "leftX": 163,
          "rightX": 262,
          "postRadius": 11
        },
        {
          "id": "rock_19",
          "type": "rock",
          "x": 241,
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
          "maxX": 186,
          "speed": 117,
          "x": 186,
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
          "minX": 123,
          "maxX": 181,
          "speed": 130,
          "x": 123,
          "dir": 1
        },
        {
          "id": "gate_3",
          "type": "gate",
          "y": 684,
          "leftX": 119,
          "rightX": 221,
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
          "minX": 182,
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
    },
    "zone": "Baap No Baap"
  },
  {
    "id": 46,
    "name": "Chhelli Ghadi No Lafango",
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
          "x": 250,
          "y": 2264,
          "radius": 21
        },
        {
          "id": "log_4",
          "type": "log",
          "y": 2189,
          "width": 61,
          "height": 22,
          "minX": 179,
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
          "minX": 153,
          "maxX": 207,
          "speed": 118,
          "x": 153,
          "dir": 1
        },
        {
          "id": "rock_15",
          "type": "rock",
          "x": 130,
          "y": 1886,
          "radius": 21
        },
        {
          "id": "gate_1",
          "type": "gate",
          "y": 1810,
          "leftX": 107,
          "rightX": 213,
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
          "maxX": 185,
          "speed": 131,
          "x": 185,
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
          "maxX": 224,
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
          "leftX": 169,
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
          "minX": 160,
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
          "minX": 133,
          "maxX": 190,
          "speed": 130,
          "x": 133,
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
          "leftX": 110,
          "rightX": 211,
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
          "minX": 154,
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
          "minX": 179,
          "maxX": 243,
          "speed": 116,
          "x": 179,
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
    },
    "zone": "Baap No Baap"
  },
  {
    "id": 47,
    "name": "Char Chakram Na Chaudhary",
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
          "x": 254,
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
          "minX": 187,
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
          "minX": 155,
          "maxX": 199,
          "speed": 120,
          "x": 155,
          "dir": 1
        },
        {
          "id": "rock_14",
          "type": "rock",
          "x": 130,
          "y": 1917,
          "radius": 21
        },
        {
          "id": "gate_1",
          "type": "gate",
          "y": 1840,
          "leftX": 104,
          "rightX": 210,
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
          "minX": 144,
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
          "maxX": 241,
          "speed": 126,
          "x": 184,
          "dir": 1
        },
        {
          "id": "gate_2",
          "type": "gate",
          "y": 1300,
          "leftX": 176,
          "rightX": 275,
          "postRadius": 11
        },
        {
          "id": "rock_19",
          "type": "rock",
          "x": 251,
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
          "maxX": 192,
          "speed": 119,
          "x": 192,
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
          "minX": 125,
          "maxX": 179,
          "speed": 132,
          "x": 125,
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
          "leftX": 137,
          "rightX": 241,
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
          "minX": 187,
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
          "x": 252,
          "y": 297,
          "radius": 23
        }
      ]
    },
    "zone": "Baap No Baap"
  },
  {
    "id": 48,
    "name": "Bhayankar Babaliyo",
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
          "x": 252,
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
          "leftX": 167,
          "rightX": 273,
          "postRadius": 11
        },
        {
          "id": "rock_14",
          "type": "rock",
          "x": 159,
          "y": 2108,
          "radius": 18
        },
        {
          "id": "log_6",
          "type": "log",
          "y": 2032,
          "width": 61,
          "height": 22,
          "minX": 157,
          "maxX": 214,
          "speed": 130,
          "x": 214,
          "dir": -1
        },
        {
          "id": "rock_15",
          "type": "rock",
          "x": 134,
          "y": 1957,
          "radius": 21
        },
        {
          "id": "log_7",
          "type": "log",
          "y": 1881,
          "width": 61,
          "height": 22,
          "minX": 128,
          "maxX": 180,
          "speed": 123,
          "x": 128,
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
          "leftX": 104,
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
          "maxX": 219,
          "speed": 136,
          "x": 219,
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
          "leftX": 165,
          "rightX": 265,
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
          "maxX": 217,
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
          "leftX": 93,
          "rightX": 192,
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
          "minX": 130,
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
          "minX": 158,
          "maxX": 217,
          "speed": 135,
          "x": 158,
          "dir": 1
        },
        {
          "id": "gate_5",
          "type": "gate",
          "y": 522,
          "leftX": 153,
          "rightX": 259,
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
          "x": 250,
          "y": 296,
          "radius": 23
        }
      ]
    },
    "zone": "Baap No Baap"
  },
  {
    "id": 49,
    "name": "Baap No Baap Badshah",
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
          "x": 251,
          "y": 2363,
          "radius": 21
        },
        {
          "id": "log_5",
          "type": "log",
          "y": 2287,
          "width": 59,
          "height": 22,
          "minX": 185,
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
          "minX": 176,
          "maxX": 221,
          "speed": 126,
          "x": 176,
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
          "leftX": 126,
          "rightX": 228,
          "postRadius": 11
        },
        {
          "id": "rock_16",
          "type": "rock",
          "x": 121,
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
          "maxX": 172,
          "speed": 139,
          "x": 172,
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
          "leftX": 121,
          "rightX": 221,
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
          "minX": 170,
          "maxX": 229,
          "speed": 132,
          "x": 170,
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
          "minX": 171,
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
          "leftX": 122,
          "rightX": 219,
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
          "maxX": 170,
          "speed": 138,
          "x": 122,
          "dir": 1
        },
        {
          "id": "rock_24",
          "type": "rock",
          "x": 104,
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
          "leftX": 127,
          "rightX": 227,
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
          "x": 170,
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
          "minX": 185,
          "maxX": 248,
          "speed": 124,
          "x": 185,
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
    },
    "zone": "Baap No Baap"
  },
  {
    "id": 50,
    "name": "Gujarat No Banko Gabbar! 🏆",
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
          "x": 252,
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
          "x": 259,
          "y": 2188,
          "radius": 18
        },
        {
          "id": "log_6",
          "type": "log",
          "y": 2115,
          "width": 59,
          "height": 22,
          "minX": 167,
          "maxX": 221,
          "speed": 128,
          "x": 167,
          "dir": 1
        },
        {
          "id": "gate_1",
          "type": "gate",
          "y": 2043,
          "leftX": 133,
          "rightX": 235,
          "postRadius": 11
        },
        {
          "id": "rock_17",
          "type": "rock",
          "x": 127,
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
          "maxX": 170,
          "speed": 141,
          "x": 170,
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
          "maxX": 190,
          "speed": 134,
          "x": 139,
          "dir": 1
        },
        {
          "id": "rock_20",
          "type": "rock",
          "x": 214,
          "y": 1605,
          "radius": 21
        },
        {
          "id": "gate_2",
          "type": "gate",
          "y": 1532,
          "leftX": 140,
          "rightX": 239,
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
          "x": 262,
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
          "maxX": 251,
          "speed": 127,
          "x": 251,
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
          "maxX": 220,
          "speed": 140,
          "x": 159,
          "dir": 1
        },
        {
          "id": "gate_3",
          "type": "gate",
          "y": 1095,
          "leftX": 125,
          "rightX": 222,
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
          "maxX": 168,
          "speed": 133,
          "x": 168,
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
          "maxX": 200,
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
          "leftX": 149,
          "rightX": 249,
          "postRadius": 11
        },
        {
          "id": "rock_28",
          "type": "rock",
          "x": 258,
          "y": 512,
          "radius": 18
        },
        {
          "id": "rock_29",
          "type": "rock",
          "x": 186,
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
          "maxX": 252,
          "speed": 139,
          "x": 252,
          "dir": -1
        },
        {
          "id": "rock_30",
          "type": "rock",
          "x": 250,
          "y": 293,
          "radius": 23
        }
      ]
    },
    "zone": "Baap No Baap"
  }
];
