// Level definitions for First Puff - 50 Progressive Casual & Hard Levels
// Progressive river physics, challenging obstacles, and rewarding crew mechanics
// 50 Levels total: 150 Stars possible (3 stars per level)
// Level 1-10: ખલાસી થી ભુવાજી (Entry Zone)
// Level 11-20: દેવાયત નો દબદબો (Khavad & Santhal Era)
// Level 21-30: રાવલ રોમાન્સ & ધારલ (Darshan & Dharal Waves)
// Level 31-40: આદિત્ય નો અખાડો (Aditya Gadhvi Folk Magic)
// Level 41-50: મહા સંગ્રામ : બાપ નો બાપ (The Ultimate Clashes)

export const CREW_MEMBERS = {
  "hippo": {
    "id": "hippo",
    "name": "Devayat Khavad",
    "role": "Forward Engine",
    "avatar": "/avatar/devayath.webp",
    "image": "/avatar/devayath.webp",
    "color": "#8b5cf6",
    "bgColor": "bg-purple-600",
    "borderColor": "border-purple-300",
    "direction": "Forward",
    "label": "Forward",
    "description": "Powerful forward engine"
  },
  "penguin": {
    "id": "penguin",
    "name": "Darshan Raval",
    "role": "Brake Shield",
    "avatar": "/avatar/Darshan-Raval.webp",
    "image": "/avatar/Darshan-Raval.webp",
    "color": "#06b6d4",
    "bgColor": "bg-cyan-600",
    "borderColor": "border-cyan-300",
    "direction": "Backward",
    "label": "Brake",
    "description": "Brakes and reverses the raft"
  },
  "frog": {
    "id": "frog",
    "name": "Aditya Gadhvi",
    "role": "Right Jet",
    "avatar": "/avatar/Aditya-Gadhvi.webp",
    "image": "/avatar/Aditya-Gadhvi.webp",
    "color": "#22c55e",
    "bgColor": "bg-emerald-600",
    "borderColor": "border-emerald-300",
    "direction": "Right",
    "label": "Right",
    "description": "Steers the raft to the right"
  },
  "pig": {
    "id": "pig",
    "name": "Gaman Santhal",
    "role": "Left Jet",
    "avatar": "/avatar/singer-gaman-santhal.webp",
    "image": "/avatar/singer-gaman-santhal.webp",
    "color": "#ec4899",
    "bgColor": "bg-pink-600",
    "borderColor": "border-pink-300",
    "direction": "Left",
    "label": "Left",
    "description": "Steers the raft to the left"
  }
};

export const LEVELS = [
  {
    "id": 1,
    "name": "Khalasi Gotilo",
    "targetTime": 37,
    "hint": "Tap the Hippo to move forward!",
    "crewUnlocked": [
      "hippo"
    ],
    "teaches": "Tapping and moving",
    "world": {
      "width": 360,
      "height": 1815,
      "startX": 180,
      "startY": 1665,
      "finishX": 180,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 1815,
          "cx": 180,
          "width": 270
        },
        {
          "y": 908,
          "cx": 180,
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
          "id": "gate_1",
          "type": "gate",
          "y": 918,
          "leftX": 125,
          "rightX": 235,
          "postRadius": 14
        }
      ]
    },
    "zone": "ખલાસી થી ભુવાજી (Entry Zone)"
  },
  {
    "id": 2,
    "name": "Bhuvaji Ni Entry",
    "targetTime": 46,
    "hint": "Frog pushes you right.",
    "crewUnlocked": [
      "hippo",
      "frog"
    ],
    "teaches": "Sideways steering",
    "world": {
      "width": 360,
      "height": 1860,
      "startX": 180,
      "startY": 1710,
      "finishX": 205,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.98,
      "waypoints": [
        {
          "y": 1860,
          "cx": 180,
          "width": 270
        },
        {
          "y": 931,
          "cx": 180,
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
          "id": "log_2",
          "type": "log",
          "x": 180,
          "y": 1153,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": 1,
          "minX": 120,
          "maxX": 240
        },
        {
          "id": "rock_1",
          "type": "rock",
          "x": 125,
          "y": 727,
          "radius": 22
        }
      ]
    },
    "zone": "ખલાસી થી ભુવાજી (Entry Zone)"
  },
  {
    "id": 3,
    "name": "Chogada Tara",
    "targetTime": 55,
    "hint": "Use the Pig to go left.",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig"
    ],
    "teaches": "Left and right together",
    "world": {
      "width": 360,
      "height": 1904,
      "startX": 180,
      "startY": 1754,
      "finishX": 155,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.981,
      "waypoints": [
        {
          "y": 1904,
          "cx": 180,
          "width": 270
        },
        {
          "y": 952,
          "cx": 157,
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
          "id": "gate_3",
          "type": "gate",
          "y": 1293,
          "leftX": 110,
          "rightX": 220,
          "postRadius": 14
        },
        {
          "id": "log_2",
          "type": "log",
          "x": 157,
          "y": 962,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": 1,
          "minX": 97,
          "maxX": 217
        },
        {
          "id": "rock_1",
          "type": "rock",
          "x": 110,
          "y": 631,
          "radius": 22
        }
      ]
    },
    "zone": "ખલાસી થી ભુવાજી (Entry Zone)"
  },
  {
    "id": 4,
    "name": "Ran Ma Rang Rakhje",
    "targetTime": 46,
    "hint": "Hold the button to charge a big puff!",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig"
    ],
    "teaches": "Hold-to-charge for long pushes",
    "world": {
      "width": 360,
      "height": 1949,
      "startX": 180,
      "startY": 1799,
      "finishX": 180,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.978,
      "waypoints": [
        {
          "y": 1949,
          "cx": 180,
          "width": 270
        },
        {
          "y": 975,
          "cx": 167,
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
          "id": "rock_4",
          "type": "rock",
          "x": 228,
          "y": 1395,
          "radius": 22
        },
        {
          "id": "gate_3",
          "type": "gate",
          "y": 1121,
          "leftX": 114,
          "rightX": 224,
          "postRadius": 14
        },
        {
          "id": "log_2",
          "type": "log",
          "x": 169,
          "y": 848,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": 1,
          "minX": 109,
          "maxX": 229
        },
        {
          "id": "rock_1",
          "type": "rock",
          "x": 117,
          "y": 574,
          "radius": 22
        }
      ]
    },
    "zone": "ખલાસી થી ભુવાજી (Entry Zone)"
  },
  {
    "id": 5,
    "name": "Dharal No Dhabkar",
    "targetTime": 65,
    "hint": "Stages slow you down. Go around them.",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig"
    ],
    "teaches": "Avoiding obstacles",
    "world": {
      "width": 360,
      "height": 1993,
      "startX": 180,
      "startY": 1843,
      "finishX": 205,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 1993,
          "cx": 180,
          "width": 270
        },
        {
          "y": 997,
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
          "id": "rock_4",
          "type": "rock",
          "x": 241,
          "y": 1430,
          "radius": 22
        },
        {
          "id": "gate_3",
          "type": "gate",
          "y": 1148,
          "leftX": 134,
          "rightX": 244,
          "postRadius": 14
        },
        {
          "id": "rock1",
          "type": "rock",
          "x": 215,
          "y": 782,
          "radius": 22
        },
        {
          "id": "log_2",
          "type": "log",
          "x": 186,
          "y": 583,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": 1,
          "minX": 126,
          "maxX": 246
        }
      ]
    },
    "zone": "ખલાસી થી ભુવાજી (Entry Zone)"
  },
  {
    "id": 6,
    "name": "Rang Morla",
    "targetTime": 74,
    "hint": "Turn early, then straighten up.",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig"
    ],
    "teaches": "Chaining turns and timing",
    "world": {
      "width": 360,
      "height": 2038,
      "startX": 180,
      "startY": 1888,
      "finishX": 155,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.98,
      "waypoints": [
        {
          "y": 2038,
          "cx": 180,
          "width": 270
        },
        {
          "y": 1020,
          "cx": 206,
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
          "id": "gate_6",
          "type": "gate",
          "y": 1550,
          "leftX": 137,
          "rightX": 247,
          "postRadius": 14
        },
        {
          "id": "log_5",
          "type": "log",
          "x": 198,
          "y": 1341,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": -1,
          "minX": 138,
          "maxX": 258
        },
        {
          "id": "rock_4",
          "type": "rock",
          "x": 258,
          "y": 1133,
          "radius": 22
        },
        {
          "id": "gate_3",
          "type": "gate",
          "y": 925,
          "leftX": 149,
          "rightX": 259,
          "postRadius": 14
        },
        {
          "id": "log_2",
          "type": "log",
          "x": 198,
          "y": 717,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": 1,
          "minX": 138,
          "maxX": 258
        },
        {
          "id": "rock_1",
          "type": "rock",
          "x": 138,
          "y": 508,
          "radius": 22
        }
      ]
    },
    "zone": "ખલાસી થી ભુવાજી (Entry Zone)"
  },
  {
    "id": 7,
    "name": "Mahuva No Sher",
    "targetTime": 74,
    "hint": "Wait for the log to pass.",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig"
    ],
    "teaches": "Timing against moving objects",
    "world": {
      "width": 360,
      "height": 2082,
      "startX": 180,
      "startY": 1932,
      "finishX": 180,
      "finishY": 130,
      "finishRadius": 38,
      "drag": 0.981,
      "waypoints": [
        {
          "y": 2082,
          "cx": 180,
          "width": 270
        },
        {
          "y": 1041,
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
          "id": "rock_4",
          "type": "rock",
          "x": 242,
          "y": 1587,
          "radius": 22
        },
        {
          "id": "log1",
          "type": "log",
          "y": 1267,
          "width": 74,
          "height": 22,
          "minX": 127,
          "maxX": 257,
          "speed": 50,
          "x": 240,
          "dir": -1
        },
        {
          "id": "rock2",
          "type": "rock",
          "x": 215,
          "y": 815,
          "radius": 20
        },
        {
          "id": "gate_3",
          "type": "gate",
          "y": 515,
          "leftX": 132,
          "rightX": 242,
          "postRadius": 14
        }
      ]
    },
    "zone": "ખલાસી થી ભુવાજી (Entry Zone)"
  },
  {
    "id": 8,
    "name": "Kamariya Fever",
    "targetTime": 65,
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
      "height": 2127,
      "startX": 180,
      "startY": 1977,
      "finishX": 205,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.978,
      "waypoints": [
        {
          "y": 2127,
          "cx": 180,
          "width": 270
        },
        {
          "y": 1417,
          "cx": 167,
          "width": 270
        },
        {
          "y": 710,
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
          "id": "gate_6",
          "type": "gate",
          "y": 1626,
          "leftX": 116,
          "rightX": 226,
          "postRadius": 14
        },
        {
          "id": "log_5",
          "type": "log",
          "x": 167,
          "y": 1405,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": -1,
          "minX": 107,
          "maxX": 227
        },
        {
          "id": "rock_4",
          "type": "rock",
          "x": 218,
          "y": 1184,
          "radius": 22
        },
        {
          "id": "gate_3",
          "type": "gate",
          "y": 963,
          "leftX": 104,
          "rightX": 214,
          "postRadius": 14
        },
        {
          "id": "log1",
          "type": "log",
          "y": 817,
          "width": 78,
          "height": 24,
          "minX": 91,
          "maxX": 221,
          "speed": 44,
          "x": 95,
          "dir": 1
        },
        {
          "id": "log_2",
          "type": "log",
          "x": 161,
          "y": 521,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": 1,
          "minX": 101,
          "maxX": 221
        }
      ]
    },
    "zone": "ખલાસી થી ભુવાજી (Entry Zone)"
  },
  {
    "id": 9,
    "name": "Muchho No Val",
    "targetTime": 83,
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
      "height": 2171,
      "startX": 180,
      "startY": 2021,
      "finishX": 155,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 2171,
          "cx": 180,
          "width": 270
        },
        {
          "y": 1447,
          "cx": 151,
          "width": 270
        },
        {
          "y": 724,
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
          "y": 1567,
          "radius": 22
        },
        {
          "id": "log2",
          "type": "log",
          "y": 1326,
          "width": 74,
          "height": 22,
          "minX": 90,
          "maxX": 220,
          "speed": 45,
          "x": 220,
          "dir": -1
        },
        {
          "id": "gate1",
          "type": "gate",
          "y": 1086,
          "leftX": 109,
          "rightX": 219,
          "postRadius": 16
        },
        {
          "id": "log3",
          "type": "log",
          "y": 845,
          "width": 74,
          "height": 22,
          "minX": 108,
          "maxX": 238,
          "speed": 45,
          "x": 108,
          "dir": 1
        },
        {
          "id": "rock5",
          "type": "rock",
          "x": 130,
          "y": 604,
          "radius": 22
        }
      ]
    },
    "zone": "ખલાસી થી ભુવાજી (Entry Zone)"
  },
  {
    "id": 10,
    "name": "Dayra No Dhamako",
    "targetTime": 102,
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
      "height": 2216,
      "startX": 180,
      "startY": 2066,
      "finishX": 180,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.98,
      "waypoints": [
        {
          "y": 2216,
          "cx": 180,
          "width": 270
        },
        {
          "y": 1477,
          "cx": 164,
          "width": 270
        },
        {
          "y": 739,
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
          "id": "log_5",
          "type": "log",
          "x": 169,
          "y": 1702,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": -1,
          "minX": 109,
          "maxX": 229
        },
        {
          "id": "log1",
          "type": "log",
          "y": 1554,
          "width": 70,
          "height": 22,
          "minX": 101,
          "maxX": 231,
          "speed": 42,
          "x": 120,
          "dir": 1
        },
        {
          "id": "rock2",
          "type": "rock",
          "x": 235,
          "y": 1257,
          "radius": 20
        },
        {
          "id": "gate1",
          "type": "gate",
          "y": 959,
          "leftX": 137,
          "rightX": 247,
          "postRadius": 16
        },
        {
          "id": "rock3",
          "type": "rock",
          "x": 135,
          "y": 662,
          "radius": 20
        }
      ]
    },
    "zone": "ખલાસી થી ભુવાજી (Entry Zone)"
  },
  {
    "id": 11,
    "name": "Sher Ne Mathe Savva Sher",
    "targetTime": 61,
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
      "height": 2124,
      "startX": 180,
      "startY": 1974,
      "finishX": 205,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.981,
      "waypoints": [
        {
          "y": 2124,
          "cx": 180,
          "width": 270
        },
        {
          "y": 1415,
          "cx": 194,
          "width": 270
        },
        {
          "y": 709,
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
          "id": "log_5",
          "type": "log",
          "x": 189,
          "y": 1672,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": -1,
          "minX": 129,
          "maxX": 249
        },
        {
          "id": "rock2",
          "type": "rock",
          "x": 215,
          "y": 1423,
          "radius": 22
        },
        {
          "id": "log1",
          "type": "log",
          "y": 1062,
          "width": 77,
          "height": 24,
          "minX": 136,
          "maxX": 266,
          "speed": 50,
          "x": 265,
          "dir": -1
        },
        {
          "id": "rock3",
          "type": "rock",
          "x": 128,
          "y": 702,
          "radius": 24
        },
        {
          "id": "rock_4",
          "type": "rock",
          "x": 254,
          "y": 472,
          "radius": 22
        }
      ]
    },
    "zone": "દેવાયત નો દબદબો (Khavad & Santhal Era)"
  },
  {
    "id": 12,
    "name": "Raaj To Amaru J",
    "targetTime": 61,
    "hint": "Stages ahead! Gentle puffs are key.",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Micro-steering",
    "world": {
      "width": 360,
      "height": 2165,
      "startX": 180,
      "startY": 2015,
      "finishX": 155,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.978,
      "waypoints": [
        {
          "y": 2165,
          "cx": 180,
          "width": 270
        },
        {
          "y": 1443,
          "cx": 212,
          "width": 270
        },
        {
          "y": 722,
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
          "id": "log_5",
          "type": "log",
          "x": 200,
          "y": 1709,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": -1,
          "minX": 140,
          "maxX": 260
        },
        {
          "id": "log1",
          "type": "log",
          "y": 1454,
          "width": 77,
          "height": 24,
          "minX": 147,
          "maxX": 277,
          "speed": 52,
          "x": 147,
          "dir": 1
        },
        {
          "id": "rock3",
          "type": "rock",
          "x": 215,
          "y": 1083,
          "radius": 22
        },
        {
          "id": "log2",
          "type": "log",
          "y": 711,
          "width": 77,
          "height": 24,
          "minX": 118,
          "maxX": 248,
          "speed": 52,
          "x": 248,
          "dir": -1
        },
        {
          "id": "rock_4",
          "type": "rock",
          "x": 237,
          "y": 476,
          "radius": 22
        }
      ]
    },
    "zone": "દેવાયત નો દબદબો (Khavad & Santhal Era)"
  },
  {
    "id": 13,
    "name": "Moje Moj Roje Roj",
    "targetTime": 69,
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
      "height": 2207,
      "startX": 180,
      "startY": 2057,
      "finishX": 180,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 2207,
          "cx": 180,
          "width": 270
        },
        {
          "y": 1471,
          "cx": 197,
          "width": 270
        },
        {
          "y": 736,
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
          "id": "gate_6",
          "type": "gate",
          "y": 1746,
          "leftX": 136,
          "rightX": 246,
          "postRadius": 14
        },
        {
          "id": "gate1",
          "type": "gate",
          "y": 1561,
          "leftX": 140,
          "rightX": 250,
          "postRadius": 16
        },
        {
          "id": "log2",
          "type": "log",
          "y": 1255,
          "width": 74,
          "height": 22,
          "minX": 119,
          "maxX": 249,
          "speed": 50,
          "x": 119,
          "dir": 1
        },
        {
          "id": "gate2",
          "type": "gate",
          "y": 952,
          "leftX": 111,
          "rightX": 221,
          "postRadius": 16
        },
        {
          "id": "rock4",
          "type": "rock",
          "x": 135,
          "y": 646,
          "radius": 22
        },
        {
          "id": "log_5",
          "type": "log",
          "x": 162,
          "y": 481,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": -1,
          "minX": 102,
          "maxX": 222
        }
      ]
    },
    "zone": "દેવાયત નો દબદબો (Khavad & Santhal Era)"
  },
  {
    "id": 14,
    "name": "Santhal Ni Sarkar",
    "targetTime": 69,
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
      "height": 2249,
      "startX": 180,
      "startY": 2099,
      "finishX": 205,
      "finishY": 130,
      "finishRadius": 38,
      "drag": 0.98,
      "waypoints": [
        {
          "y": 2249,
          "cx": 180,
          "width": 270
        },
        {
          "y": 1499,
          "cx": 164,
          "width": 270
        },
        {
          "y": 750,
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
          "id": "log_8",
          "type": "log",
          "x": 170,
          "y": 1784,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": 1,
          "minX": 110,
          "maxX": 230
        },
        {
          "id": "rock_7",
          "type": "rock",
          "x": 111,
          "y": 1598,
          "radius": 22
        },
        {
          "id": "log1",
          "type": "log",
          "y": 1386,
          "width": 74,
          "height": 22,
          "minX": 97,
          "maxX": 227,
          "speed": 52,
          "x": 105,
          "dir": 1
        },
        {
          "id": "gate_6",
          "type": "gate",
          "y": 1227,
          "leftX": 104,
          "rightX": 214,
          "postRadius": 14
        },
        {
          "id": "log_5",
          "type": "log",
          "x": 155,
          "y": 1042,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": -1,
          "minX": 95,
          "maxX": 215
        },
        {
          "id": "rock2",
          "type": "rock",
          "x": 215,
          "y": 863,
          "radius": 22
        },
        {
          "id": "rock_4",
          "type": "rock",
          "x": 207,
          "y": 671,
          "radius": 22
        },
        {
          "id": "gate_3",
          "type": "gate",
          "y": 485,
          "leftX": 105,
          "rightX": 215,
          "postRadius": 14
        }
      ]
    },
    "zone": "દેવાયત નો દબદબો (Khavad & Santhal Era)"
  },
  {
    "id": 15,
    "name": "Sinh Ne Kaun Roke",
    "targetTime": 78,
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
      "height": 2291,
      "startX": 180,
      "startY": 2141,
      "finishX": 155,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.981,
      "waypoints": [
        {
          "y": 2291,
          "cx": 180,
          "width": 270
        },
        {
          "y": 1527,
          "cx": 145,
          "width": 270
        },
        {
          "y": 764,
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
          "y": 1721,
          "radius": 22
        },
        {
          "id": "log1",
          "type": "log",
          "y": 1490,
          "width": 74,
          "height": 22,
          "minX": 82,
          "maxX": 212,
          "speed": 52,
          "x": 212,
          "dir": -1
        },
        {
          "id": "rock5",
          "type": "rock",
          "x": 128,
          "y": 1260,
          "radius": 22
        },
        {
          "id": "log2",
          "type": "log",
          "y": 1031,
          "width": 74,
          "height": 22,
          "minX": 101,
          "maxX": 231,
          "speed": 52,
          "x": 105,
          "dir": 1
        },
        {
          "id": "rock6",
          "type": "rock",
          "x": 235,
          "y": 801,
          "radius": 22
        },
        {
          "id": "log3",
          "type": "log",
          "y": 570,
          "width": 74,
          "height": 22,
          "minX": 113,
          "maxX": 243,
          "speed": 52,
          "x": 240,
          "dir": -1
        }
      ]
    },
    "zone": "દેવાયત નો દબદબો (Khavad & Santhal Era)"
  },
  {
    "id": 16,
    "name": "Bhaibandhi Zindabad",
    "targetTime": 69,
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
      "height": 2333,
      "startX": 180,
      "startY": 2183,
      "finishX": 180,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.978,
      "waypoints": [
        {
          "y": 2333,
          "cx": 180,
          "width": 264
        },
        {
          "y": 1750,
          "cx": 161,
          "width": 264
        },
        {
          "y": 1167,
          "cx": 209,
          "width": 264
        },
        {
          "y": 583,
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
          "id": "gate_6",
          "type": "gate",
          "y": 1858,
          "leftX": 110,
          "rightX": 220,
          "postRadius": 14
        },
        {
          "id": "rock3",
          "type": "rock",
          "x": 215,
          "y": 1662,
          "radius": 22
        },
        {
          "id": "log1",
          "type": "log",
          "y": 1332,
          "width": 74,
          "height": 22,
          "minX": 130,
          "maxX": 260,
          "speed": 44,
          "x": 130,
          "dir": 1
        },
        {
          "id": "rock4",
          "type": "rock",
          "x": 128,
          "y": 1001,
          "radius": 22
        },
        {
          "id": "log2",
          "type": "log",
          "y": 671,
          "width": 74,
          "height": 22,
          "minX": 139,
          "maxX": 269,
          "speed": 44,
          "x": 240,
          "dir": -1
        },
        {
          "id": "log_5",
          "type": "log",
          "x": 200,
          "y": 495,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": -1,
          "minX": 140,
          "maxX": 260
        }
      ]
    },
    "zone": "દેવાયત નો દબદબો (Khavad & Santhal Era)"
  },
  {
    "id": 17,
    "name": "Khokhra Maheman",
    "targetTime": 61,
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
      "height": 2375,
      "startX": 180,
      "startY": 2225,
      "finishX": 205,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 2375,
          "cx": 180,
          "width": 258
        },
        {
          "y": 1781,
          "cx": 198,
          "width": 258
        },
        {
          "y": 1188,
          "cx": 214,
          "width": 258
        },
        {
          "y": 594,
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
          "id": "gate_6",
          "type": "gate",
          "y": 1896,
          "leftX": 140,
          "rightX": 250,
          "postRadius": 14
        },
        {
          "id": "rock3",
          "type": "rock",
          "x": 215,
          "y": 1752,
          "radius": 22
        },
        {
          "id": "log1",
          "type": "log",
          "y": 1470,
          "width": 77,
          "height": 24,
          "minX": 141,
          "maxX": 271,
          "speed": 46,
          "x": 265,
          "dir": -1
        },
        {
          "id": "rock4",
          "type": "rock",
          "x": 128,
          "y": 1188,
          "radius": 24
        },
        {
          "id": "log2",
          "type": "log",
          "y": 905,
          "width": 77,
          "height": 24,
          "minX": 127,
          "maxX": 257,
          "speed": 46,
          "x": 127,
          "dir": 1
        },
        {
          "id": "rock5",
          "type": "rock",
          "x": 249,
          "y": 623,
          "radius": 26
        }
      ]
    },
    "zone": "દેવાયત નો દબદબો (Khavad & Santhal Era)"
  },
  {
    "id": 18,
    "name": "Meldi Maano Khamkaro",
    "targetTime": 78,
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
      "height": 2416,
      "startX": 180,
      "startY": 2266,
      "finishX": 155,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.98,
      "waypoints": [
        {
          "y": 2416,
          "cx": 180,
          "width": 252
        },
        {
          "y": 1812,
          "cx": 218,
          "width": 252
        },
        {
          "y": 1209,
          "cx": 183,
          "width": 252
        },
        {
          "y": 604,
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
          "y": 1827,
          "width": 74,
          "height": 22,
          "minX": 152,
          "maxX": 282,
          "speed": 46,
          "x": 152,
          "dir": 1
        },
        {
          "id": "rock5",
          "type": "rock",
          "x": 215,
          "y": 1579,
          "radius": 22
        },
        {
          "id": "gate1",
          "type": "gate",
          "y": 1331,
          "leftX": 135,
          "rightX": 245,
          "postRadius": 16
        },
        {
          "id": "log3",
          "type": "log",
          "y": 1085,
          "width": 74,
          "height": 22,
          "minX": 110,
          "maxX": 240,
          "speed": 46,
          "x": 240,
          "dir": -1
        },
        {
          "id": "rock6",
          "type": "rock",
          "x": 128,
          "y": 837,
          "radius": 22
        },
        {
          "id": "log4",
          "type": "log",
          "y": 589,
          "width": 74,
          "height": 22,
          "minX": 78,
          "maxX": 208,
          "speed": 46,
          "x": 105,
          "dir": 1
        }
      ]
    },
    "zone": "દેવાયત નો દબદબો (Khavad & Santhal Era)"
  },
  {
    "id": 19,
    "name": "Khovai Gayo Khavad",
    "targetTime": 69,
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
      "height": 2458,
      "startX": 180,
      "startY": 2308,
      "finishX": 180,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.981,
      "waypoints": [
        {
          "y": 2458,
          "cx": 180,
          "width": 246
        },
        {
          "y": 1844,
          "cx": 200,
          "width": 246
        },
        {
          "y": 1229,
          "cx": 148,
          "width": 246
        },
        {
          "y": 615,
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
          "id": "gate_6",
          "type": "gate",
          "y": 1969,
          "leftX": 141,
          "rightX": 251,
          "postRadius": 14
        },
        {
          "id": "rock3",
          "type": "rock",
          "x": 215,
          "y": 1821,
          "radius": 22
        },
        {
          "id": "log1",
          "type": "log",
          "y": 1525,
          "width": 77,
          "height": 24,
          "minX": 108,
          "maxX": 238,
          "speed": 50,
          "x": 238,
          "dir": -1
        },
        {
          "id": "rock4",
          "type": "rock",
          "x": 128,
          "y": 1229,
          "radius": 24
        },
        {
          "id": "log2",
          "type": "log",
          "y": 933,
          "width": 77,
          "height": 24,
          "minX": 86,
          "maxX": 216,
          "speed": 50,
          "x": 95,
          "dir": 1
        },
        {
          "id": "rock5",
          "type": "rock",
          "x": 244,
          "y": 637,
          "radius": 26
        }
      ]
    },
    "zone": "દેવાયત નો દબદબો (Khavad & Santhal Era)"
  },
  {
    "id": 20,
    "name": "Duniya Jhukegi Boss",
    "targetTime": 95,
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
      "height": 2500,
      "startX": 180,
      "startY": 2350,
      "finishX": 205,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.978,
      "waypoints": [
        {
          "y": 2500,
          "cx": 180,
          "width": 270
        },
        {
          "y": 1875,
          "cx": 161,
          "width": 270
        },
        {
          "y": 1251,
          "cx": 144,
          "width": 270
        },
        {
          "y": 625,
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
          "id": "gate_6",
          "type": "gate",
          "y": 2007,
          "leftX": 110,
          "rightX": 220,
          "postRadius": 14
        },
        {
          "id": "rock4",
          "type": "rock",
          "x": 215,
          "y": 1857,
          "radius": 22
        },
        {
          "id": "log2",
          "type": "log",
          "y": 1553,
          "width": 74,
          "height": 22,
          "minX": 87,
          "maxX": 217,
          "speed": 50,
          "x": 105,
          "dir": 1
        },
        {
          "id": "gate1",
          "type": "gate",
          "y": 1251,
          "leftX": 89,
          "rightX": 199,
          "postRadius": 16
        },
        {
          "id": "rock5",
          "type": "rock",
          "x": 128,
          "y": 947,
          "radius": 22
        },
        {
          "id": "log3",
          "type": "log",
          "y": 645,
          "width": 74,
          "height": 22,
          "minX": 127,
          "maxX": 257,
          "speed": 50,
          "x": 240,
          "dir": -1
        }
      ]
    },
    "zone": "દેવાયત નો દબદબો (Khavad & Santhal Era)"
  },
  {
    "id": 21,
    "name": "Tera Zikr",
    "targetTime": 69,
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
      "height": 2542,
      "startX": 180,
      "startY": 2392,
      "finishX": 155,
      "finishY": 130,
      "finishRadius": 38,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 2542,
          "cx": 180,
          "width": 264
        },
        {
          "y": 1907,
          "cx": 139,
          "width": 264
        },
        {
          "y": 1271,
          "cx": 177,
          "width": 264
        },
        {
          "y": 636,
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
          "y": 1969,
          "radius": 22
        },
        {
          "id": "log1",
          "type": "log",
          "y": 1736,
          "width": 76,
          "height": 24,
          "minX": 84,
          "maxX": 214,
          "speed": 54,
          "x": 214,
          "dir": -1
        },
        {
          "id": "rock5",
          "type": "rock",
          "x": 128,
          "y": 1504,
          "radius": 24
        },
        {
          "id": "log2",
          "type": "log",
          "y": 1271,
          "width": 76,
          "height": 24,
          "minX": 112,
          "maxX": 242,
          "speed": 54,
          "x": 112,
          "dir": 1
        },
        {
          "id": "rock6",
          "type": "rock",
          "x": 249,
          "y": 1039,
          "radius": 26
        },
        {
          "id": "log3",
          "type": "log",
          "y": 806,
          "width": 76,
          "height": 24,
          "minX": 144,
          "maxX": 274,
          "speed": 54,
          "x": 265,
          "dir": -1
        },
        {
          "id": "rock7",
          "type": "rock",
          "x": 139,
          "y": 574,
          "radius": 22
        }
      ]
    },
    "zone": "રાવલ રોમાન્સ & ધારલ (Darshan & Dharal Waves)"
  },
  {
    "id": 22,
    "name": "Darshan Weds Dharal",
    "targetTime": 78,
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
      "height": 2584,
      "startX": 180,
      "startY": 2434,
      "finishX": 180,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.98,
      "waypoints": [
        {
          "y": 2584,
          "cx": 180,
          "width": 258
        },
        {
          "y": 1938,
          "cx": 159,
          "width": 258
        },
        {
          "y": 1293,
          "cx": 215,
          "width": 258
        },
        {
          "y": 646,
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
          "y": 2006,
          "radius": 22
        },
        {
          "id": "gate1",
          "type": "gate",
          "y": 1767,
          "leftX": 119,
          "rightX": 229,
          "postRadius": 16
        },
        {
          "id": "log3",
          "type": "log",
          "y": 1530,
          "width": 74,
          "height": 22,
          "minX": 129,
          "maxX": 259,
          "speed": 52,
          "x": 129,
          "dir": 1
        },
        {
          "id": "gate2",
          "type": "gate",
          "y": 1293,
          "leftX": 160,
          "rightX": 270,
          "postRadius": 16
        },
        {
          "id": "rock6",
          "type": "rock",
          "x": 128,
          "y": 1054,
          "radius": 22
        },
        {
          "id": "gate3",
          "type": "gate",
          "y": 817,
          "leftX": 153,
          "rightX": 263,
          "postRadius": 16
        },
        {
          "id": "rock7",
          "type": "rock",
          "x": 235,
          "y": 578,
          "radius": 22
        }
      ]
    },
    "zone": "રાવલ રોમાન્સ & ધારલ (Darshan & Dharal Waves)"
  },
  {
    "id": 23,
    "name": "Blue Family Army",
    "targetTime": 92,
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
      "height": 2228,
      "startY": 2078,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 2228,
          "cx": 245,
          "width": 200
        },
        {
          "y": 1485,
          "cx": 245,
          "width": 200
        },
        {
          "y": 1073,
          "cx": 115,
          "width": 205
        },
        {
          "y": 0,
          "cx": 115,
          "width": 200
        }
      ],
      "obstacles": [
        {
          "id": "rock_7",
          "type": "rock",
          "x": 190,
          "y": 1798,
          "radius": 22
        },
        {
          "id": "log1",
          "type": "log",
          "y": 1568,
          "width": 62,
          "height": 22,
          "minX": 180,
          "maxX": 310,
          "speed": 38,
          "x": 230,
          "dir": 1
        },
        {
          "id": "gate_6",
          "type": "gate",
          "y": 1349,
          "leftX": 147,
          "rightX": 257,
          "postRadius": 14
        },
        {
          "id": "rock1",
          "type": "rock",
          "x": 220,
          "y": 1188,
          "radius": 18
        },
        {
          "id": "log_5",
          "type": "log",
          "x": 115,
          "y": 899,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": -1,
          "minX": 55,
          "maxX": 175
        },
        {
          "id": "gate1",
          "type": "gate",
          "y": 627,
          "leftX": 60,
          "rightX": 170,
          "postRadius": 14
        },
        {
          "id": "rock_4",
          "type": "rock",
          "x": 170,
          "y": 450,
          "radius": 22
        }
      ],
      "startX": 245,
      "finishX": 115
    },
    "zone": "રાવલ રોમાન્સ & ધારલ (Darshan & Dharal Waves)"
  },
  {
    "id": 24,
    "name": "Hawa Banke Aaya",
    "targetTime": 90,
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
      "height": 2170,
      "startY": 2020,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 2170,
          "cx": 135,
          "width": 200
        },
        {
          "y": 1628,
          "cx": 135,
          "width": 200
        },
        {
          "y": 1318,
          "cx": 240,
          "width": 205
        },
        {
          "y": 1008,
          "cx": 240,
          "width": 205
        },
        {
          "y": 698,
          "cx": 135,
          "width": 200
        },
        {
          "y": 0,
          "cx": 135,
          "width": 200
        }
      ],
      "obstacles": [
        {
          "id": "log_8",
          "type": "log",
          "x": 135,
          "y": 1745,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": 1,
          "minX": 75,
          "maxX": 195
        },
        {
          "id": "rock1",
          "type": "rock",
          "x": 145,
          "y": 1550,
          "radius": 18
        },
        {
          "id": "rock_7",
          "type": "rock",
          "x": 185,
          "y": 1312,
          "radius": 22
        },
        {
          "id": "log1",
          "type": "log",
          "y": 1163,
          "width": 62,
          "height": 22,
          "minX": 175,
          "maxX": 305,
          "speed": 40,
          "x": 220,
          "dir": 1
        },
        {
          "id": "gate_6",
          "type": "gate",
          "y": 1023,
          "leftX": 185,
          "rightX": 295,
          "postRadius": 14
        },
        {
          "id": "log_5",
          "type": "log",
          "x": 196,
          "y": 878,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": -1,
          "minX": 136,
          "maxX": 256
        },
        {
          "id": "rock_4",
          "type": "rock",
          "x": 202,
          "y": 734,
          "radius": 22
        },
        {
          "id": "gate1",
          "type": "gate",
          "y": 558,
          "leftX": 80,
          "rightX": 190,
          "postRadius": 14
        }
      ],
      "startX": 135,
      "finishX": 135
    },
    "zone": "રાવલ રોમાન્સ & ધારલ (Darshan & Dharal Waves)"
  },
  {
    "id": 25,
    "name": "Dharal Sang Pyar",
    "targetTime": 95,
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
      "height": 2325,
      "startY": 2175,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 2325,
          "cx": 100,
          "width": 200
        },
        {
          "y": 1783,
          "cx": 100,
          "width": 200
        },
        {
          "y": 1473,
          "cx": 180,
          "width": 205
        },
        {
          "y": 1008,
          "cx": 180,
          "width": 205
        },
        {
          "y": 698,
          "cx": 260,
          "width": 200
        },
        {
          "y": 0,
          "cx": 260,
          "width": 200
        }
      ],
      "obstacles": [
        {
          "id": "gate_9",
          "type": "gate",
          "y": 1886,
          "leftX": 45,
          "rightX": 155,
          "postRadius": 14
        },
        {
          "id": "gate1",
          "type": "gate",
          "y": 1705,
          "leftX": 65,
          "rightX": 175,
          "postRadius": 14
        },
        {
          "id": "log_8",
          "type": "log",
          "x": 180,
          "y": 1410,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": 1,
          "minX": 120,
          "maxX": 240
        },
        {
          "id": "log1",
          "type": "log",
          "y": 1240,
          "width": 64,
          "height": 22,
          "minX": 115,
          "maxX": 245,
          "speed": 38,
          "x": 170,
          "dir": -1
        },
        {
          "id": "rock_7",
          "type": "rock",
          "x": 125,
          "y": 1093,
          "radius": 22
        },
        {
          "id": "gate_6",
          "type": "gate",
          "y": 935,
          "leftX": 144,
          "rightX": 254,
          "postRadius": 14
        },
        {
          "id": "log_5",
          "type": "log",
          "x": 240,
          "y": 776,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": -1,
          "minX": 180,
          "maxX": 300
        },
        {
          "id": "rock1",
          "type": "rock",
          "x": 250,
          "y": 620,
          "radius": 18
        },
        {
          "id": "rock_4",
          "type": "rock",
          "x": 315,
          "y": 459,
          "radius": 22
        }
      ],
      "startX": 100,
      "finishX": 260
    },
    "zone": "રાવલ રોમાન્સ & ધારલ (Darshan & Dharal Waves)"
  },
  {
    "id": 26,
    "name": "Bhula Dunga",
    "targetTime": 95,
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
      "height": 2325,
      "startY": 2175,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 2325,
          "cx": 260,
          "width": 200
        },
        {
          "y": 1783,
          "cx": 260,
          "width": 200
        },
        {
          "y": 1473,
          "cx": 180,
          "width": 205
        },
        {
          "y": 1008,
          "cx": 180,
          "width": 205
        },
        {
          "y": 698,
          "cx": 100,
          "width": 200
        },
        {
          "y": 0,
          "cx": 100,
          "width": 200
        }
      ],
      "obstacles": [
        {
          "id": "gate_9",
          "type": "gate",
          "y": 1886,
          "leftX": 205,
          "rightX": 315,
          "postRadius": 14
        },
        {
          "id": "gate1",
          "type": "gate",
          "y": 1705,
          "leftX": 185,
          "rightX": 295,
          "postRadius": 14
        },
        {
          "id": "log_8",
          "type": "log",
          "x": 180,
          "y": 1410,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": 1,
          "minX": 120,
          "maxX": 240
        },
        {
          "id": "log1",
          "type": "log",
          "y": 1240,
          "width": 64,
          "height": 22,
          "minX": 115,
          "maxX": 245,
          "speed": 38,
          "x": 170,
          "dir": 1
        },
        {
          "id": "rock_7",
          "type": "rock",
          "x": 125,
          "y": 1093,
          "radius": 22
        },
        {
          "id": "gate_6",
          "type": "gate",
          "y": 935,
          "leftX": 106,
          "rightX": 216,
          "postRadius": 14
        },
        {
          "id": "log_5",
          "type": "log",
          "x": 120,
          "y": 776,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": -1,
          "minX": 60,
          "maxX": 180
        },
        {
          "id": "rock1",
          "type": "rock",
          "x": 110,
          "y": 620,
          "radius": 18
        },
        {
          "id": "rock_4",
          "type": "rock",
          "x": 155,
          "y": 459,
          "radius": 22
        }
      ],
      "startX": 260,
      "finishX": 100
    },
    "zone": "રાવલ રોમાન્સ & ધારલ (Darshan & Dharal Waves)"
  },
  {
    "id": 27,
    "name": "Mehndi No Rang",
    "targetTime": 101,
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
      "height": 2480,
      "startY": 2330,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 2480,
          "cx": 110,
          "width": 200
        },
        {
          "y": 2015,
          "cx": 110,
          "width": 200
        },
        {
          "y": 1628,
          "cx": 250,
          "width": 205
        },
        {
          "y": 1163,
          "cx": 110,
          "width": 205
        },
        {
          "y": 698,
          "cx": 250,
          "width": 200
        },
        {
          "y": 0,
          "cx": 250,
          "width": 200
        }
      ],
      "obstacles": [
        {
          "id": "log_8",
          "type": "log",
          "x": 110,
          "y": 2027,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": 1,
          "minX": 50,
          "maxX": 170
        },
        {
          "id": "rock1",
          "type": "rock",
          "x": 120,
          "y": 1860,
          "radius": 18
        },
        {
          "id": "rock_7",
          "type": "rock",
          "x": 175,
          "y": 1682,
          "radius": 22
        },
        {
          "id": "log1",
          "type": "log",
          "y": 1395,
          "width": 62,
          "height": 22,
          "minX": 115,
          "maxX": 245,
          "speed": 36,
          "x": 180,
          "dir": 1
        },
        {
          "id": "gate_6",
          "type": "gate",
          "y": 1164,
          "leftX": 55,
          "rightX": 165,
          "postRadius": 14
        },
        {
          "id": "rock2",
          "type": "rock",
          "x": 110,
          "y": 1008,
          "radius": 18
        },
        {
          "id": "log_5",
          "type": "log",
          "x": 214,
          "y": 818,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": -1,
          "minX": 154,
          "maxX": 274
        },
        {
          "id": "gate1",
          "type": "gate",
          "y": 543,
          "leftX": 195,
          "rightX": 305,
          "postRadius": 14
        }
      ],
      "startX": 110,
      "finishX": 250
    },
    "zone": "રાવલ રોમાન્સ & ધારલ (Darshan & Dharal Waves)"
  },
  {
    "id": 28,
    "name": "Kathiyawadi Crush",
    "targetTime": 101,
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
      "height": 2480,
      "startY": 2330,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 2480,
          "cx": 130,
          "width": 205
        },
        {
          "y": 2093,
          "cx": 230,
          "width": 205
        },
        {
          "y": 1705,
          "cx": 130,
          "width": 205
        },
        {
          "y": 1318,
          "cx": 230,
          "width": 205
        },
        {
          "y": 930,
          "cx": 130,
          "width": 205
        },
        {
          "y": 543,
          "cx": 230,
          "width": 205
        },
        {
          "y": 0,
          "cx": 180,
          "width": 205
        }
      ],
      "obstacles": [
        {
          "id": "rock1",
          "type": "rock",
          "x": 190,
          "y": 1938,
          "radius": 18
        },
        {
          "id": "rock_7",
          "type": "rock",
          "x": 81,
          "y": 1682,
          "radius": 22
        },
        {
          "id": "log1",
          "type": "log",
          "y": 1519,
          "width": 60,
          "height": 22,
          "minX": 113,
          "maxX": 243,
          "speed": 36,
          "x": 175,
          "dir": -1
        },
        {
          "id": "gate_6",
          "type": "gate",
          "y": 1336,
          "leftX": 170,
          "rightX": 280,
          "postRadius": 14
        },
        {
          "id": "gate1",
          "type": "gate",
          "y": 1085,
          "leftX": 115,
          "rightX": 225,
          "postRadius": 14
        },
        {
          "id": "rock2",
          "type": "rock",
          "x": 140,
          "y": 698,
          "radius": 18
        },
        {
          "id": "log_5",
          "type": "log",
          "x": 224,
          "y": 473,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": -1,
          "minX": 164,
          "maxX": 284
        }
      ],
      "startX": 190,
      "finishX": 199
    },
    "zone": "રાવલ રોમાન્સ & ધારલ (Darshan & Dharal Waves)"
  },
  {
    "id": 29,
    "name": "Tu Mileya To Dil Khilya",
    "targetTime": 94,
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
      "height": 2325,
      "startY": 2175,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 2325,
          "cx": 105,
          "width": 200
        },
        {
          "y": 1705,
          "cx": 105,
          "width": 200
        },
        {
          "y": 1318,
          "cx": 180,
          "width": 210
        },
        {
          "y": 852,
          "cx": 255,
          "width": 200
        },
        {
          "y": 0,
          "cx": 255,
          "width": 200
        }
      ],
      "obstacles": [
        {
          "id": "gate1",
          "type": "gate",
          "y": 1783,
          "leftX": 50,
          "rightX": 160,
          "postRadius": 14
        },
        {
          "id": "rock_7",
          "type": "rock",
          "x": 76,
          "y": 1569,
          "radius": 22
        },
        {
          "id": "log1",
          "type": "log",
          "y": 1318,
          "width": 64,
          "height": 22,
          "minX": 115,
          "maxX": 245,
          "speed": 38,
          "x": 180,
          "dir": 1
        },
        {
          "id": "gate_6",
          "type": "gate",
          "y": 1093,
          "leftX": 161,
          "rightX": 271,
          "postRadius": 14
        },
        {
          "id": "log_5",
          "type": "log",
          "x": 242,
          "y": 935,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": -1,
          "minX": 182,
          "maxX": 302
        },
        {
          "id": "rock1",
          "type": "rock",
          "x": 240,
          "y": 698,
          "radius": 18
        },
        {
          "id": "rock_4",
          "type": "rock",
          "x": 310,
          "y": 459,
          "radius": 22
        }
      ],
      "startX": 105,
      "finishX": 255
    },
    "zone": "રાવલ રોમાન્સ & ધારલ (Darshan & Dharal Waves)"
  },
  {
    "id": 30,
    "name": "Saari Ki Saari 2.0",
    "targetTime": 104,
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
      "height": 2558,
      "startY": 2408,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 2558,
          "cx": 180,
          "width": 205
        },
        {
          "y": 2015,
          "cx": 110,
          "width": 205
        },
        {
          "y": 1473,
          "cx": 250,
          "width": 205
        },
        {
          "y": 930,
          "cx": 110,
          "width": 205
        },
        {
          "y": 465,
          "cx": 180,
          "width": 205
        },
        {
          "y": 0,
          "cx": 180,
          "width": 205
        }
      ],
      "obstacles": [
        {
          "id": "log_8",
          "type": "log",
          "x": 121,
          "y": 2098,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": 1,
          "minX": 61,
          "maxX": 181
        },
        {
          "id": "rock1",
          "type": "rock",
          "x": 130,
          "y": 1938,
          "radius": 18
        },
        {
          "id": "rock_7",
          "type": "rock",
          "x": 126,
          "y": 1739,
          "radius": 22
        },
        {
          "id": "log1",
          "type": "log",
          "y": 1473,
          "width": 62,
          "height": 22,
          "minX": 185,
          "maxX": 315,
          "speed": 38,
          "x": 240,
          "dir": -1
        },
        {
          "id": "gate_6",
          "type": "gate",
          "y": 1199,
          "leftX": 124,
          "rightX": 234,
          "postRadius": 14
        },
        {
          "id": "gate1",
          "type": "gate",
          "y": 1008,
          "leftX": 75,
          "rightX": 185,
          "postRadius": 14
        },
        {
          "id": "log_5",
          "type": "log",
          "x": 124,
          "y": 839,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": -1,
          "minX": 64,
          "maxX": 184
        },
        {
          "id": "rock2",
          "type": "rock",
          "x": 180,
          "y": 543,
          "radius": 18
        }
      ],
      "startX": 150,
      "finishX": 180
    },
    "zone": "રાવલ રોમાન્સ & ધારલ (Darshan & Dharal Waves)"
  },
  {
    "id": 31,
    "name": "Coke Studio Champion",
    "targetTime": 97,
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
      "height": 2403,
      "startY": 2253,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 2403,
          "cx": 95,
          "width": 200
        },
        {
          "y": 1860,
          "cx": 135,
          "width": 200
        },
        {
          "y": 1318,
          "cx": 180,
          "width": 205
        },
        {
          "y": 853,
          "cx": 225,
          "width": 200
        },
        {
          "y": 0,
          "cx": 265,
          "width": 200
        }
      ],
      "obstacles": [
        {
          "id": "rock1",
          "type": "rock",
          "x": 115,
          "y": 1938,
          "radius": 18
        },
        {
          "id": "log_8",
          "type": "log",
          "x": 151,
          "y": 1667,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": 1,
          "minX": 91,
          "maxX": 211
        },
        {
          "id": "gate1",
          "type": "gate",
          "y": 1395,
          "leftX": 119,
          "rightX": 229,
          "postRadius": 14
        },
        {
          "id": "rock_7",
          "type": "rock",
          "x": 135,
          "y": 1212,
          "radius": 22
        },
        {
          "id": "log1",
          "type": "log",
          "y": 930,
          "width": 62,
          "height": 22,
          "minX": 153,
          "maxX": 283,
          "speed": 38,
          "x": 220,
          "dir": 1
        },
        {
          "id": "gate_6",
          "type": "gate",
          "y": 756,
          "leftX": 175,
          "rightX": 285,
          "postRadius": 14
        },
        {
          "id": "log_5",
          "type": "log",
          "x": 237,
          "y": 604,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": -1,
          "minX": 177,
          "maxX": 297
        },
        {
          "id": "rock_4",
          "type": "rock",
          "x": 299,
          "y": 452,
          "radius": 22
        }
      ],
      "startX": 112,
      "finishX": 256
    },
    "zone": "આદિત્ય નો અખાડો (Aditya Gadhvi Folk Magic)"
  },
  {
    "id": 32,
    "name": "Sahebo Re Govaliyo",
    "targetTime": 101,
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
      "height": 2480,
      "startY": 2330,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 2480,
          "cx": 260,
          "width": 200
        },
        {
          "y": 1938,
          "cx": 215,
          "width": 200
        },
        {
          "y": 1473,
          "cx": 170,
          "width": 205
        },
        {
          "y": 930,
          "cx": 125,
          "width": 200
        },
        {
          "y": 0,
          "cx": 100,
          "width": 200
        }
      ],
      "obstacles": [
        {
          "id": "rock1",
          "type": "rock",
          "x": 235,
          "y": 2015,
          "radius": 18
        },
        {
          "id": "log_8",
          "type": "log",
          "x": 194,
          "y": 1725,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": 1,
          "minX": 134,
          "maxX": 254
        },
        {
          "id": "gate1",
          "type": "gate",
          "y": 1519,
          "leftX": 119,
          "rightX": 229,
          "postRadius": 14
        },
        {
          "id": "rock_7",
          "type": "rock",
          "x": 97,
          "y": 1250,
          "radius": 22
        },
        {
          "id": "log1",
          "type": "log",
          "y": 1008,
          "width": 62,
          "height": 22,
          "minX": 66,
          "maxX": 196,
          "speed": 36,
          "x": 130,
          "dir": -1
        },
        {
          "id": "gate_6",
          "type": "gate",
          "y": 775,
          "leftX": 66,
          "rightX": 176,
          "postRadius": 14
        },
        {
          "id": "log_5",
          "type": "log",
          "x": 117,
          "y": 617,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": -1,
          "minX": 57,
          "maxX": 177
        },
        {
          "id": "rock_4",
          "type": "rock",
          "x": 167,
          "y": 458,
          "radius": 22
        }
      ],
      "startX": 241,
      "finishX": 105
    },
    "zone": "આદિત્ય નો અખાડો (Aditya Gadhvi Folk Magic)"
  },
  {
    "id": 33,
    "name": "Nagar Nandji Na Laal",
    "targetTime": 94,
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
      "height": 2325,
      "startY": 2175,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 2325,
          "cx": 110,
          "width": 200
        },
        {
          "y": 1783,
          "cx": 250,
          "width": 205
        },
        {
          "y": 1163,
          "cx": 110,
          "width": 205
        },
        {
          "y": 620,
          "cx": 250,
          "width": 200
        },
        {
          "y": 0,
          "cx": 250,
          "width": 200
        }
      ],
      "obstacles": [
        {
          "id": "gate1",
          "type": "gate",
          "y": 1783,
          "leftX": 195,
          "rightX": 305,
          "postRadius": 14
        },
        {
          "id": "log_8",
          "type": "log",
          "x": 211,
          "y": 1609,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": 1,
          "minX": 151,
          "maxX": 271
        },
        {
          "id": "rock_7",
          "type": "rock",
          "x": 123,
          "y": 1463,
          "radius": 22
        },
        {
          "id": "log1",
          "type": "log",
          "y": 1240,
          "width": 62,
          "height": 22,
          "minX": 62,
          "maxX": 192,
          "speed": 38,
          "x": 120,
          "dir": 1
        },
        {
          "id": "gate_6",
          "type": "gate",
          "y": 1027,
          "leftX": 90,
          "rightX": 200,
          "postRadius": 14
        },
        {
          "id": "log_5",
          "type": "log",
          "x": 182,
          "y": 882,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": -1,
          "minX": 122,
          "maxX": 242
        },
        {
          "id": "gate2",
          "type": "gate",
          "y": 620,
          "leftX": 195,
          "rightX": 305,
          "postRadius": 14
        },
        {
          "id": "rock_4",
          "type": "rock",
          "x": 305,
          "y": 445,
          "radius": 22
        }
      ],
      "startX": 170,
      "finishX": 250
    },
    "zone": "આદિત્ય નો અખાડો (Aditya Gadhvi Folk Magic)"
  },
  {
    "id": 34,
    "name": "Vhala Vhala Kanha",
    "targetTime": 87,
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
      "height": 2170,
      "startY": 2020,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 2170,
          "cx": 180,
          "width": 250
        },
        {
          "y": 1473,
          "cx": 180,
          "width": 230
        },
        {
          "y": 853,
          "cx": 180,
          "width": 195
        },
        {
          "y": 310,
          "cx": 180,
          "width": 170
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
          "x": 125,
          "y": 1758,
          "radius": 22
        },
        {
          "id": "rock1",
          "type": "rock",
          "x": 150,
          "y": 1550,
          "radius": 18
        },
        {
          "id": "gate_6",
          "type": "gate",
          "y": 1228,
          "leftX": 125,
          "rightX": 235,
          "postRadius": 14
        },
        {
          "id": "log1",
          "type": "log",
          "y": 1085,
          "width": 58,
          "height": 22,
          "minX": 115,
          "maxX": 245,
          "speed": 36,
          "x": 180,
          "dir": 1
        },
        {
          "id": "log_5",
          "type": "log",
          "x": 180,
          "y": 830,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": -1,
          "minX": 120,
          "maxX": 240
        },
        {
          "id": "gate1",
          "type": "gate",
          "y": 620,
          "leftX": 125,
          "rightX": 235,
          "postRadius": 14
        },
        {
          "id": "rock_4",
          "type": "rock",
          "x": 235,
          "y": 433,
          "radius": 22
        }
      ],
      "startX": 180,
      "finishX": 180
    },
    "zone": "આદિત્ય નો અખાડો (Aditya Gadhvi Folk Magic)"
  },
  {
    "id": 35,
    "name": "Dandiya King Aditya",
    "targetTime": 90,
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
      "height": 2170,
      "startY": 2020,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 2170,
          "cx": 250,
          "width": 200
        },
        {
          "y": 1550,
          "cx": 250,
          "width": 200
        },
        {
          "y": 1163,
          "cx": 180,
          "width": 205
        },
        {
          "y": 620,
          "cx": 110,
          "width": 200
        },
        {
          "y": 0,
          "cx": 110,
          "width": 200
        }
      ],
      "obstacles": [
        {
          "id": "rock_7",
          "type": "rock",
          "x": 195,
          "y": 1758,
          "radius": 22
        },
        {
          "id": "gate1",
          "type": "gate",
          "y": 1550,
          "leftX": 195,
          "rightX": 305,
          "postRadius": 14
        },
        {
          "id": "gate_6",
          "type": "gate",
          "y": 1228,
          "leftX": 137,
          "rightX": 247,
          "postRadius": 14
        },
        {
          "id": "log1",
          "type": "log",
          "y": 1085,
          "width": 62,
          "height": 22,
          "minX": 105,
          "maxX": 235,
          "speed": 38,
          "x": 180,
          "dir": -1
        },
        {
          "id": "log_5",
          "type": "log",
          "x": 137,
          "y": 830,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": -1,
          "minX": 77,
          "maxX": 197
        },
        {
          "id": "rock1",
          "type": "rock",
          "x": 110,
          "y": 589,
          "radius": 18
        },
        {
          "id": "rock_4",
          "type": "rock",
          "x": 165,
          "y": 433,
          "radius": 22
        }
      ],
      "startX": 250,
      "finishX": 110
    },
    "zone": "આદિત્ય નો અખાડો (Aditya Gadhvi Folk Magic)"
  },
  {
    "id": 36,
    "name": "Moti Verana Chokma",
    "targetTime": 90,
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
      "height": 2170,
      "startY": 2020,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 2170,
          "cx": 100,
          "width": 200
        },
        {
          "y": 1163,
          "cx": 260,
          "width": 205
        },
        {
          "y": 620,
          "cx": 130,
          "width": 200
        },
        {
          "y": 0,
          "cx": 130,
          "width": 200
        }
      ],
      "obstacles": [
        {
          "id": "rock1",
          "type": "rock",
          "x": 120,
          "y": 1705,
          "radius": 18
        },
        {
          "id": "gate_6",
          "type": "gate",
          "y": 1360,
          "leftX": 174,
          "rightX": 284,
          "postRadius": 14
        },
        {
          "id": "log1",
          "type": "log",
          "y": 1163,
          "width": 62,
          "height": 22,
          "minX": 195,
          "maxX": 325,
          "speed": 38,
          "x": 250,
          "dir": 1
        },
        {
          "id": "log_5",
          "type": "log",
          "x": 212,
          "y": 963,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": -1,
          "minX": 152,
          "maxX": 272
        },
        {
          "id": "rock_4",
          "type": "rock",
          "x": 204,
          "y": 698,
          "radius": 22
        },
        {
          "id": "gate1",
          "type": "gate",
          "y": 543,
          "leftX": 75,
          "rightX": 185,
          "postRadius": 14
        }
      ],
      "startX": 137,
      "finishX": 130
    },
    "zone": "આદિત્ય નો અખાડો (Aditya Gadhvi Folk Magic)"
  },
  {
    "id": 37,
    "name": "Charan Kavi No Saad",
    "targetTime": 101,
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
      "height": 2403,
      "startY": 2253,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 2403,
          "cx": 100,
          "width": 200
        },
        {
          "y": 1860,
          "cx": 260,
          "width": 205
        },
        {
          "y": 930,
          "cx": 260,
          "width": 205
        },
        {
          "y": 543,
          "cx": 100,
          "width": 200
        },
        {
          "y": 0,
          "cx": 100,
          "width": 200
        }
      ],
      "obstacles": [
        {
          "id": "rock1",
          "type": "rock",
          "x": 240,
          "y": 1860,
          "radius": 18
        },
        {
          "id": "rock_7",
          "type": "rock",
          "x": 205,
          "y": 1667,
          "radius": 22
        },
        {
          "id": "gate1",
          "type": "gate",
          "y": 1395,
          "leftX": 205,
          "rightX": 315,
          "postRadius": 14
        },
        {
          "id": "gate_6",
          "type": "gate",
          "y": 1212,
          "leftX": 205,
          "rightX": 315,
          "postRadius": 14
        },
        {
          "id": "log1",
          "type": "log",
          "y": 930,
          "width": 62,
          "height": 22,
          "minX": 195,
          "maxX": 325,
          "speed": 38,
          "x": 250,
          "dir": -1
        },
        {
          "id": "log_5",
          "type": "log",
          "x": 188,
          "y": 756,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": -1,
          "minX": 128,
          "maxX": 248
        },
        {
          "id": "rock2",
          "type": "rock",
          "x": 110,
          "y": 496,
          "radius": 18
        }
      ],
      "startX": 169,
      "finishX": 100
    },
    "zone": "આદિત્ય નો અખાડો (Aditya Gadhvi Folk Magic)"
  },
  {
    "id": 38,
    "name": "Lok Dayro Rockstars",
    "targetTime": 104,
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
      "height": 2480,
      "startY": 2330,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 2480,
          "cx": 250,
          "width": 200
        },
        {
          "y": 1705,
          "cx": 250,
          "width": 200
        },
        {
          "y": 1163,
          "cx": 110,
          "width": 205
        },
        {
          "y": 620,
          "cx": 250,
          "width": 205
        },
        {
          "y": 233,
          "cx": 110,
          "width": 200
        },
        {
          "y": 0,
          "cx": 110,
          "width": 200
        }
      ],
      "obstacles": [
        {
          "id": "rock1",
          "type": "rock",
          "x": 245,
          "y": 1938,
          "radius": 18
        },
        {
          "id": "log_8",
          "type": "log",
          "x": 250,
          "y": 1725,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": 1,
          "minX": 190,
          "maxX": 310
        },
        {
          "id": "rock_7",
          "type": "rock",
          "x": 159,
          "y": 1567,
          "radius": 22
        },
        {
          "id": "gate_6",
          "type": "gate",
          "y": 1408,
          "leftX": 118,
          "rightX": 228,
          "postRadius": 14
        },
        {
          "id": "gate1",
          "type": "gate",
          "y": 1163,
          "leftX": 55,
          "rightX": 165,
          "postRadius": 14
        },
        {
          "id": "log_5",
          "type": "log",
          "x": 169,
          "y": 933,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": -1,
          "minX": 109,
          "maxX": 229
        },
        {
          "id": "log1",
          "type": "log",
          "y": 698,
          "width": 62,
          "height": 22,
          "minX": 165,
          "maxX": 295,
          "speed": 38,
          "x": 240,
          "dir": 1
        },
        {
          "id": "rock_4",
          "type": "rock",
          "x": 246,
          "y": 458,
          "radius": 22
        }
      ],
      "startX": 250,
      "finishX": 110
    },
    "zone": "આદિત્ય નો અખાડો (Aditya Gadhvi Folk Magic)"
  },
  {
    "id": 39,
    "name": "Dakla No Dhabkaro",
    "targetTime": 94,
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
      "height": 2325,
      "startY": 2175,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 2325,
          "cx": 100,
          "width": 200
        },
        {
          "y": 1550,
          "cx": 100,
          "width": 200
        },
        {
          "y": 930,
          "cx": 260,
          "width": 205
        },
        {
          "y": 0,
          "cx": 260,
          "width": 200
        }
      ],
      "obstacles": [
        {
          "id": "log_8",
          "type": "log",
          "x": 100,
          "y": 1900,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": 1,
          "minX": 40,
          "maxX": 160
        },
        {
          "id": "gate1",
          "type": "gate",
          "y": 1628,
          "leftX": 45,
          "rightX": 155,
          "postRadius": 14
        },
        {
          "id": "rock_7",
          "type": "rock",
          "x": 67,
          "y": 1463,
          "radius": 22
        },
        {
          "id": "gate_6",
          "type": "gate",
          "y": 1318,
          "leftX": 105,
          "rightX": 215,
          "postRadius": 14
        },
        {
          "id": "log1",
          "type": "log",
          "y": 1085,
          "width": 62,
          "height": 22,
          "minX": 155,
          "maxX": 285,
          "speed": 38,
          "x": 215,
          "dir": 1
        },
        {
          "id": "log_5",
          "type": "log",
          "x": 260,
          "y": 882,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": -1,
          "minX": 200,
          "maxX": 320
        },
        {
          "id": "rock_4",
          "type": "rock",
          "x": 315,
          "y": 736,
          "radius": 22
        },
        {
          "id": "rock1",
          "type": "rock",
          "x": 250,
          "y": 543,
          "radius": 18
        }
      ],
      "startX": 100,
      "finishX": 260
    },
    "zone": "આદિત્ય નો અખાડો (Aditya Gadhvi Folk Magic)"
  },
  {
    "id": 40,
    "name": "Garvi Gujarat No Gaurav",
    "targetTime": 90,
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
      "height": 2170,
      "startY": 2020,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 2170,
          "cx": 100,
          "width": 200
        },
        {
          "y": 1163,
          "cx": 180,
          "width": 205
        },
        {
          "y": 0,
          "cx": 260,
          "width": 200
        }
      ],
      "obstacles": [
        {
          "id": "rock1",
          "type": "rock",
          "x": 120,
          "y": 1628,
          "radius": 18
        },
        {
          "id": "gate_6",
          "type": "gate",
          "y": 1360,
          "leftX": 109,
          "rightX": 219,
          "postRadius": 14
        },
        {
          "id": "gate1",
          "type": "gate",
          "y": 1163,
          "leftX": 125,
          "rightX": 235,
          "postRadius": 14
        },
        {
          "id": "log_5",
          "type": "log",
          "x": 203,
          "y": 830,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": -1,
          "minX": 143,
          "maxX": 263
        },
        {
          "id": "log1",
          "type": "log",
          "y": 620,
          "width": 60,
          "height": 22,
          "minX": 152,
          "maxX": 282,
          "speed": 38,
          "x": 215,
          "dir": -1
        },
        {
          "id": "rock_4",
          "type": "rock",
          "x": 285,
          "y": 433,
          "radius": 22
        }
      ],
      "startX": 118,
      "finishX": 246
    },
    "zone": "આદિત્ય નો અખાડો (Aditya Gadhvi Folk Magic)"
  },
  {
    "id": 41,
    "name": "Devayat vs Gaman Maha Dayro",
    "targetTime": 104,
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
      "height": 2558,
      "startY": 2408,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 2558,
          "cx": 180,
          "width": 205
        },
        {
          "y": 1938,
          "cx": 100,
          "width": 200
        },
        {
          "y": 1318,
          "cx": 260,
          "width": 205
        },
        {
          "y": 698,
          "cx": 100,
          "width": 200
        },
        {
          "y": 0,
          "cx": 110,
          "width": 200
        }
      ],
      "obstacles": [
        {
          "id": "gate_9",
          "type": "gate",
          "y": 2113,
          "leftX": 68,
          "rightX": 178,
          "postRadius": 14
        },
        {
          "id": "rock1",
          "type": "rock",
          "x": 115,
          "y": 1860,
          "radius": 18
        },
        {
          "id": "log_8",
          "type": "log",
          "x": 182,
          "y": 1619,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": 1,
          "minX": 122,
          "maxX": 242
        },
        {
          "id": "log1",
          "type": "log",
          "y": 1318,
          "width": 62,
          "height": 22,
          "minX": 195,
          "maxX": 325,
          "speed": 38,
          "x": 250,
          "dir": 1
        },
        {
          "id": "rock_7",
          "type": "rock",
          "x": 155,
          "y": 1124,
          "radius": 22
        },
        {
          "id": "gate_6",
          "type": "gate",
          "y": 959,
          "leftX": 112,
          "rightX": 222,
          "postRadius": 14
        },
        {
          "id": "gate1",
          "type": "gate",
          "y": 775,
          "leftX": 65,
          "rightX": 175,
          "postRadius": 14
        },
        {
          "id": "log_5",
          "type": "log",
          "x": 101,
          "y": 630,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": -1,
          "minX": 41,
          "maxX": 161
        },
        {
          "id": "rock_4",
          "type": "rock",
          "x": 158,
          "y": 465,
          "radius": 22
        }
      ],
      "startX": 150,
      "finishX": 107
    },
    "zone": "મહા સંગ્રામ : બાપ નો બાપ (The Ultimate Clashes)"
  },
  {
    "id": 42,
    "name": "Aditya & Darshan Jugalbandi",
    "targetTime": 104,
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
      "height": 2558,
      "startY": 2408,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 2558,
          "cx": 250,
          "width": 200
        },
        {
          "y": 2015,
          "cx": 110,
          "width": 200
        },
        {
          "y": 1550,
          "cx": 250,
          "width": 205
        },
        {
          "y": 1085,
          "cx": 110,
          "width": 205
        },
        {
          "y": 620,
          "cx": 250,
          "width": 200
        },
        {
          "y": 0,
          "cx": 110,
          "width": 200
        }
      ],
      "obstacles": [
        {
          "id": "gate_9",
          "type": "gate",
          "y": 2113,
          "leftX": 80,
          "rightX": 190,
          "postRadius": 14
        },
        {
          "id": "gate1",
          "type": "gate",
          "y": 1938,
          "leftX": 78,
          "rightX": 188,
          "postRadius": 14
        },
        {
          "id": "log_8",
          "type": "log",
          "x": 180,
          "y": 1784,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": 1,
          "minX": 120,
          "maxX": 240
        },
        {
          "id": "rock_7",
          "type": "rock",
          "x": 174,
          "y": 1619,
          "radius": 22
        },
        {
          "id": "log1",
          "type": "log",
          "y": 1473,
          "width": 62,
          "height": 22,
          "minX": 162,
          "maxX": 292,
          "speed": 38,
          "x": 240,
          "dir": -1
        },
        {
          "id": "gate_6",
          "type": "gate",
          "y": 1289,
          "leftX": 116,
          "rightX": 226,
          "postRadius": 14
        },
        {
          "id": "rock1",
          "type": "rock",
          "x": 120,
          "y": 1008,
          "radius": 18
        },
        {
          "id": "log_5",
          "type": "log",
          "x": 197,
          "y": 795,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": -1,
          "minX": 137,
          "maxX": 257
        },
        {
          "id": "gate2",
          "type": "gate",
          "y": 543,
          "leftX": 178,
          "rightX": 288,
          "postRadius": 14
        }
      ],
      "startX": 190,
      "finishX": 156
    },
    "zone": "મહા સંગ્રામ : બાપ નો બાપ (The Ultimate Clashes)"
  },
  {
    "id": 43,
    "name": "Rupiyo Nathi Joito Prem Jove",
    "targetTime": 108,
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
      "height": 2635,
      "startY": 2485,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 2635,
          "cx": 100,
          "width": 200
        },
        {
          "y": 2093,
          "cx": 180,
          "width": 205
        },
        {
          "y": 1550,
          "cx": 100,
          "width": 205
        },
        {
          "y": 1007,
          "cx": 180,
          "width": 205
        },
        {
          "y": 543,
          "cx": 260,
          "width": 200
        },
        {
          "y": 0,
          "cx": 260,
          "width": 200
        }
      ],
      "obstacles": [
        {
          "id": "rock1",
          "type": "rock",
          "x": 130,
          "y": 2093,
          "radius": 18
        },
        {
          "id": "log_8",
          "type": "log",
          "x": 143,
          "y": 1841,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": 1,
          "minX": 83,
          "maxX": 203
        },
        {
          "id": "log1",
          "type": "log",
          "y": 1550,
          "width": 62,
          "height": 22,
          "minX": 35,
          "maxX": 165,
          "speed": 36,
          "x": 120,
          "dir": 1
        },
        {
          "id": "rock_7",
          "type": "rock",
          "x": 78,
          "y": 1328,
          "radius": 22
        },
        {
          "id": "gate_6",
          "type": "gate",
          "y": 1156,
          "leftX": 103,
          "rightX": 213,
          "postRadius": 14
        },
        {
          "id": "gate1",
          "type": "gate",
          "y": 1007,
          "leftX": 125,
          "rightX": 235,
          "postRadius": 14
        },
        {
          "id": "log_5",
          "type": "log",
          "x": 213,
          "y": 814,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": -1,
          "minX": 153,
          "maxX": 273
        },
        {
          "id": "rock2",
          "type": "rock",
          "x": 240,
          "y": 543,
          "radius": 18
        }
      ],
      "startX": 134,
      "finishX": 260
    },
    "zone": "મહા સંગ્રામ : બાપ નો બાપ (The Ultimate Clashes)"
  },
  {
    "id": 44,
    "name": "Sinh Ni Dhadak",
    "targetTime": 90,
    "hint": "A staggering stage labyrinth. Follow the open water seams; don't corner yourself.",
    "crewUnlocked": [
      "hippo",
      "frog",
      "pig",
      "penguin"
    ],
    "teaches": "Labyrinth route planning",
    "world": {
      "width": 360,
      "height": 3125,
      "startX": 180,
      "startY": 2975,
      "finishX": 180,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.99,
      "waypoints": [
        {
          "y": 3125,
          "cx": 180,
          "width": 180
        },
        {
          "y": 2604,
          "cx": 218,
          "width": 180
        },
        {
          "y": 2084,
          "cx": 142,
          "width": 180
        },
        {
          "y": 1563,
          "cx": 218,
          "width": 172
        },
        {
          "y": 1041,
          "cx": 142,
          "width": 172
        },
        {
          "y": 521,
          "cx": 218,
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
          "id": "rock_9",
          "type": "rock",
          "x": 253,
          "y": 2755,
          "radius": 21
        },
        {
          "id": "rock_10",
          "type": "rock",
          "x": 184,
          "y": 2659,
          "radius": 23
        },
        {
          "id": "rock_11",
          "type": "rock",
          "x": 216,
          "y": 2564,
          "radius": 18
        },
        {
          "id": "log_4",
          "type": "log",
          "y": 2469,
          "width": 63,
          "height": 22,
          "minX": 133,
          "maxX": 263,
          "speed": 120,
          "x": 219,
          "dir": -1
        },
        {
          "id": "rock_12",
          "type": "rock",
          "x": 138,
          "y": 2374,
          "radius": 21
        },
        {
          "id": "gate_1",
          "type": "gate",
          "y": 2278,
          "leftX": 115,
          "rightX": 225,
          "postRadius": 11
        },
        {
          "id": "rock_13",
          "type": "rock",
          "x": 190,
          "y": 2183,
          "radius": 23
        },
        {
          "id": "log_5",
          "type": "log",
          "y": 2088,
          "width": 63,
          "height": 22,
          "minX": 78,
          "maxX": 208,
          "speed": 113,
          "x": 118,
          "dir": 1
        },
        {
          "id": "rock_14",
          "type": "rock",
          "x": 129,
          "y": 1991,
          "radius": 18
        },
        {
          "id": "rock_15",
          "type": "rock",
          "x": 194,
          "y": 1896,
          "radius": 21
        },
        {
          "id": "rock_16",
          "type": "rock",
          "x": 153,
          "y": 1801,
          "radius": 23
        },
        {
          "id": "rock_17",
          "type": "rock",
          "x": 243,
          "y": 1705,
          "radius": 18
        },
        {
          "id": "gate_2",
          "type": "gate",
          "y": 1610,
          "leftX": 156,
          "rightX": 266,
          "postRadius": 11
        },
        {
          "id": "log_6",
          "type": "log",
          "y": 1515,
          "width": 60,
          "height": 22,
          "minX": 146,
          "maxX": 276,
          "speed": 126,
          "x": 239,
          "dir": -1
        },
        {
          "id": "rock_18",
          "type": "rock",
          "x": 181,
          "y": 1420,
          "radius": 21
        },
        {
          "id": "rock_19",
          "type": "rock",
          "x": 213,
          "y": 1324,
          "radius": 23
        },
        {
          "id": "rock_20",
          "type": "rock",
          "x": 124,
          "y": 1229,
          "radius": 18
        },
        {
          "id": "log_7",
          "type": "log",
          "y": 1134,
          "width": 60,
          "height": 22,
          "minX": 91,
          "maxX": 221,
          "speed": 119,
          "x": 126,
          "dir": 1
        },
        {
          "id": "rock_21",
          "type": "rock",
          "x": 185,
          "y": 1038,
          "radius": 21
        },
        {
          "id": "rock_22",
          "type": "rock",
          "x": 128,
          "y": 942,
          "radius": 23
        },
        {
          "id": "gate_3",
          "type": "gate",
          "y": 848,
          "leftX": 115,
          "rightX": 225,
          "postRadius": 11
        },
        {
          "id": "rock_23",
          "type": "rock",
          "x": 197,
          "y": 751,
          "radius": 18
        },
        {
          "id": "log_8",
          "type": "log",
          "y": 656,
          "width": 62,
          "height": 22,
          "minX": 133,
          "maxX": 263,
          "speed": 112,
          "x": 231,
          "dir": -1
        },
        {
          "id": "rock_24",
          "type": "rock",
          "x": 166,
          "y": 561,
          "radius": 21
        },
        {
          "id": "rock_25",
          "type": "rock",
          "x": 253,
          "y": 466,
          "radius": 23
        },
        {
          "id": "rock_26",
          "type": "rock",
          "x": 186,
          "y": 370,
          "radius": 18
        }
      ]
    },
    "zone": "મહા સંગ્રામ : બાપ નો બાપ (The Ultimate Clashes)"
  },
  {
    "id": 45,
    "name": "Dharal No Chamkaro",
    "targetTime": 90,
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
      "height": 3163,
      "startX": 180,
      "startY": 3013,
      "finishX": 180,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.99,
      "waypoints": [
        {
          "y": 3163,
          "cx": 180,
          "width": 175
        },
        {
          "y": 2635,
          "cx": 220,
          "width": 175
        },
        {
          "y": 2109,
          "cx": 140,
          "width": 175
        },
        {
          "y": 1582,
          "cx": 220,
          "width": 167
        },
        {
          "y": 1054,
          "cx": 140,
          "width": 167
        },
        {
          "y": 528,
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
          "id": "rock_11",
          "type": "rock",
          "x": 252,
          "y": 2792,
          "radius": 21
        },
        {
          "id": "rock_12",
          "type": "rock",
          "x": 181,
          "y": 2694,
          "radius": 23
        },
        {
          "id": "log_4",
          "type": "log",
          "y": 2598,
          "width": 61,
          "height": 22,
          "minX": 149,
          "maxX": 279,
          "speed": 125,
          "x": 235,
          "dir": -1
        },
        {
          "id": "rock_13",
          "type": "rock",
          "x": 210,
          "y": 2500,
          "radius": 18
        },
        {
          "id": "rock_14",
          "type": "rock",
          "x": 141,
          "y": 2404,
          "radius": 21
        },
        {
          "id": "log_5",
          "type": "log",
          "y": 2308,
          "width": 61,
          "height": 22,
          "minX": 105,
          "maxX": 235,
          "speed": 118,
          "x": 136,
          "dir": 1
        },
        {
          "id": "gate_1",
          "type": "gate",
          "y": 2210,
          "leftX": 100,
          "rightX": 210,
          "postRadius": 11
        },
        {
          "id": "rock_15",
          "type": "rock",
          "x": 180,
          "y": 2114,
          "radius": 23
        },
        {
          "id": "rock_16",
          "type": "rock",
          "x": 143,
          "y": 2017,
          "radius": 18
        },
        {
          "id": "log_6",
          "type": "log",
          "y": 1920,
          "width": 59,
          "height": 22,
          "minX": 104,
          "maxX": 234,
          "speed": 131,
          "x": 202,
          "dir": -1
        },
        {
          "id": "rock_17",
          "type": "rock",
          "x": 210,
          "y": 1824,
          "radius": 21
        },
        {
          "id": "log_7",
          "type": "log",
          "y": 1727,
          "width": 58,
          "height": 22,
          "minX": 133,
          "maxX": 263,
          "speed": 124,
          "x": 180,
          "dir": 1
        },
        {
          "id": "rock_18",
          "type": "rock",
          "x": 176,
          "y": 1630,
          "radius": 23
        },
        {
          "id": "gate_2",
          "type": "gate",
          "y": 1533,
          "leftX": 158,
          "rightX": 268,
          "postRadius": 11
        },
        {
          "id": "rock_19",
          "type": "rock",
          "x": 241,
          "y": 1436,
          "radius": 18
        },
        {
          "id": "rock_20",
          "type": "rock",
          "x": 158,
          "y": 1339,
          "radius": 21
        },
        {
          "id": "rock_21",
          "type": "rock",
          "x": 187,
          "y": 1243,
          "radius": 23
        },
        {
          "id": "log_8",
          "type": "log",
          "y": 1146,
          "width": 58,
          "height": 22,
          "minX": 89,
          "maxX": 219,
          "speed": 117,
          "x": 186,
          "dir": -1
        },
        {
          "id": "rock_22",
          "type": "rock",
          "x": 103,
          "y": 1049,
          "radius": 18
        },
        {
          "id": "log_9",
          "type": "log",
          "y": 953,
          "width": 58,
          "height": 22,
          "minX": 90,
          "maxX": 220,
          "speed": 130,
          "x": 123,
          "dir": 1
        },
        {
          "id": "gate_3",
          "type": "gate",
          "y": 855,
          "leftX": 115,
          "rightX": 225,
          "postRadius": 11
        },
        {
          "id": "rock_23",
          "type": "rock",
          "x": 208,
          "y": 759,
          "radius": 21
        },
        {
          "id": "rock_24",
          "type": "rock",
          "x": 166,
          "y": 663,
          "radius": 23
        },
        {
          "id": "rock_25",
          "type": "rock",
          "x": 233,
          "y": 565,
          "radius": 18
        },
        {
          "id": "log_10",
          "type": "log",
          "y": 469,
          "width": 61,
          "height": 22,
          "minX": 151,
          "maxX": 281,
          "speed": 123,
          "x": 248,
          "dir": -1
        },
        {
          "id": "rock_26",
          "type": "rock",
          "x": 171,
          "y": 371,
          "radius": 21
        }
      ]
    },
    "zone": "મહા સંગ્રામ : બાપ નો બાપ (The Ultimate Clashes)"
  },
  {
    "id": 46,
    "name": "Khalasi On The River",
    "targetTime": 91,
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
      "height": 3200,
      "startX": 180,
      "startY": 3050,
      "finishX": 180,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.99,
      "waypoints": [
        {
          "y": 3200,
          "cx": 180,
          "width": 175
        },
        {
          "y": 2666,
          "cx": 218,
          "width": 175
        },
        {
          "y": 2134,
          "cx": 142,
          "width": 175
        },
        {
          "y": 1600,
          "cx": 218,
          "width": 167
        },
        {
          "y": 1066,
          "cx": 142,
          "width": 167
        },
        {
          "y": 534,
          "cx": 218,
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
          "id": "rock_12",
          "type": "rock",
          "x": 250,
          "y": 2830,
          "radius": 21
        },
        {
          "id": "log_4",
          "type": "log",
          "y": 2736,
          "width": 61,
          "height": 22,
          "minX": 148,
          "maxX": 278,
          "speed": 125,
          "x": 239,
          "dir": -1
        },
        {
          "id": "rock_13",
          "type": "rock",
          "x": 180,
          "y": 2641,
          "radius": 23
        },
        {
          "id": "rock_14",
          "type": "rock",
          "x": 210,
          "y": 2546,
          "radius": 18
        },
        {
          "id": "log_5",
          "type": "log",
          "y": 2451,
          "width": 61,
          "height": 22,
          "minX": 122,
          "maxX": 252,
          "speed": 118,
          "x": 153,
          "dir": 1
        },
        {
          "id": "rock_15",
          "type": "rock",
          "x": 130,
          "y": 2358,
          "radius": 21
        },
        {
          "id": "gate_1",
          "type": "gate",
          "y": 2263,
          "leftX": 105,
          "rightX": 215,
          "postRadius": 11
        },
        {
          "id": "rock_16",
          "type": "rock",
          "x": 182,
          "y": 2168,
          "radius": 23
        },
        {
          "id": "log_6",
          "type": "log",
          "y": 2074,
          "width": 60,
          "height": 22,
          "minX": 86,
          "maxX": 216,
          "speed": 131,
          "x": 185,
          "dir": -1
        },
        {
          "id": "rock_17",
          "type": "rock",
          "x": 143,
          "y": 1979,
          "radius": 18
        },
        {
          "id": "rock_18",
          "type": "rock",
          "x": 210,
          "y": 1884,
          "radius": 21
        },
        {
          "id": "log_7",
          "type": "log",
          "y": 1789,
          "width": 59,
          "height": 22,
          "minX": 126,
          "maxX": 256,
          "speed": 124,
          "x": 162,
          "dir": 1
        },
        {
          "id": "rock_19",
          "type": "rock",
          "x": 175,
          "y": 1695,
          "radius": 23
        },
        {
          "id": "gate_2",
          "type": "gate",
          "y": 1600,
          "leftX": 163,
          "rightX": 273,
          "postRadius": 11
        },
        {
          "id": "rock_20",
          "type": "rock",
          "x": 247,
          "y": 1505,
          "radius": 18
        },
        {
          "id": "log_8",
          "type": "log",
          "y": 1411,
          "width": 58,
          "height": 22,
          "minX": 126,
          "maxX": 256,
          "speed": 117,
          "x": 222,
          "dir": -1
        },
        {
          "id": "rock_21",
          "type": "rock",
          "x": 158,
          "y": 1316,
          "radius": 21
        },
        {
          "id": "log_9",
          "type": "log",
          "y": 1221,
          "width": 58,
          "height": 22,
          "minX": 99,
          "maxX": 229,
          "speed": 130,
          "x": 133,
          "dir": 1
        },
        {
          "id": "rock_22",
          "type": "rock",
          "x": 187,
          "y": 1126,
          "radius": 23
        },
        {
          "id": "rock_23",
          "type": "rock",
          "x": 105,
          "y": 1033,
          "radius": 18
        },
        {
          "id": "gate_3",
          "type": "gate",
          "y": 938,
          "leftX": 105,
          "rightX": 215,
          "postRadius": 11
        },
        {
          "id": "rock_24",
          "type": "rock",
          "x": 209,
          "y": 843,
          "radius": 21
        },
        {
          "id": "log_10",
          "type": "log",
          "y": 749,
          "width": 59,
          "height": 22,
          "minX": 122,
          "maxX": 252,
          "speed": 123,
          "x": 209,
          "dir": -1
        },
        {
          "id": "rock_25",
          "type": "rock",
          "x": 165,
          "y": 654,
          "radius": 23
        },
        {
          "id": "rock_26",
          "type": "rock",
          "x": 232,
          "y": 559,
          "radius": 18
        },
        {
          "id": "log_11",
          "type": "log",
          "y": 464,
          "width": 60,
          "height": 22,
          "minX": 148,
          "maxX": 278,
          "speed": 116,
          "x": 179,
          "dir": 1
        },
        {
          "id": "rock_27",
          "type": "rock",
          "x": 169,
          "y": 370,
          "radius": 21
        }
      ]
    },
    "zone": "મહા સંગ્રામ : બાપ નો બાપ (The Ultimate Clashes)"
  },
  {
    "id": 47,
    "name": "Santhal No Sinh Mahuva",
    "targetTime": 92,
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
      "height": 3250,
      "startX": 180,
      "startY": 3100,
      "finishX": 180,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.99,
      "waypoints": [
        {
          "y": 3250,
          "cx": 180,
          "width": 175
        },
        {
          "y": 2709,
          "cx": 225,
          "width": 175
        },
        {
          "y": 2166,
          "cx": 135,
          "width": 175
        },
        {
          "y": 1625,
          "cx": 225,
          "width": 167
        },
        {
          "y": 1084,
          "cx": 135,
          "width": 167
        },
        {
          "y": 541,
          "cx": 225,
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
          "id": "rock_11",
          "type": "rock",
          "x": 254,
          "y": 2879,
          "radius": 21
        },
        {
          "id": "rock_12",
          "type": "rock",
          "x": 188,
          "y": 2783,
          "radius": 23
        },
        {
          "id": "log_4",
          "type": "log",
          "y": 2686,
          "width": 61,
          "height": 22,
          "minX": 156,
          "maxX": 286,
          "speed": 127,
          "x": 238,
          "dir": -1
        },
        {
          "id": "rock_13",
          "type": "rock",
          "x": 216,
          "y": 2589,
          "radius": 18
        },
        {
          "id": "log_5",
          "type": "log",
          "y": 2493,
          "width": 61,
          "height": 22,
          "minX": 124,
          "maxX": 254,
          "speed": 120,
          "x": 155,
          "dir": 1
        },
        {
          "id": "rock_14",
          "type": "rock",
          "x": 130,
          "y": 2396,
          "radius": 21
        },
        {
          "id": "gate_1",
          "type": "gate",
          "y": 2300,
          "leftX": 102,
          "rightX": 212,
          "postRadius": 11
        },
        {
          "id": "rock_15",
          "type": "rock",
          "x": 182,
          "y": 2204,
          "radius": 23
        },
        {
          "id": "rock_16",
          "type": "rock",
          "x": 131,
          "y": 2108,
          "radius": 18
        },
        {
          "id": "rock_17",
          "type": "rock",
          "x": 200,
          "y": 2011,
          "radius": 21
        },
        {
          "id": "log_6",
          "type": "log",
          "y": 1914,
          "width": 59,
          "height": 22,
          "minX": 112,
          "maxX": 242,
          "speed": 133,
          "x": 210,
          "dir": -1
        },
        {
          "id": "rock_18",
          "type": "rock",
          "x": 168,
          "y": 1818,
          "radius": 23
        },
        {
          "id": "log_7",
          "type": "log",
          "y": 1721,
          "width": 58,
          "height": 22,
          "minX": 144,
          "maxX": 274,
          "speed": 126,
          "x": 184,
          "dir": 1
        },
        {
          "id": "gate_2",
          "type": "gate",
          "y": 1625,
          "leftX": 170,
          "rightX": 280,
          "postRadius": 11
        },
        {
          "id": "rock_19",
          "type": "rock",
          "x": 251,
          "y": 1529,
          "radius": 18
        },
        {
          "id": "rock_20",
          "type": "rock",
          "x": 173,
          "y": 1433,
          "radius": 21
        },
        {
          "id": "rock_21",
          "type": "rock",
          "x": 200,
          "y": 1336,
          "radius": 23
        },
        {
          "id": "log_8",
          "type": "log",
          "y": 1239,
          "width": 58,
          "height": 22,
          "minX": 96,
          "maxX": 226,
          "speed": 119,
          "x": 192,
          "dir": -1
        },
        {
          "id": "rock_22",
          "type": "rock",
          "x": 107,
          "y": 1143,
          "radius": 18
        },
        {
          "id": "rock_23",
          "type": "rock",
          "x": 181,
          "y": 1046,
          "radius": 21
        },
        {
          "id": "log_9",
          "type": "log",
          "y": 950,
          "width": 58,
          "height": 22,
          "minX": 92,
          "maxX": 222,
          "speed": 132,
          "x": 125,
          "dir": 1
        },
        {
          "id": "rock_24",
          "type": "rock",
          "x": 147,
          "y": 854,
          "radius": 23
        },
        {
          "id": "gate_3",
          "type": "gate",
          "y": 758,
          "leftX": 134,
          "rightX": 244,
          "postRadius": 11
        },
        {
          "id": "rock_25",
          "type": "rock",
          "x": 216,
          "y": 661,
          "radius": 18
        },
        {
          "id": "log_10",
          "type": "log",
          "y": 564,
          "width": 61,
          "height": 22,
          "minX": 156,
          "maxX": 286,
          "speed": 125,
          "x": 253,
          "dir": -1
        },
        {
          "id": "rock_26",
          "type": "rock",
          "x": 179,
          "y": 468,
          "radius": 21
        },
        {
          "id": "rock_27",
          "type": "rock",
          "x": 252,
          "y": 371,
          "radius": 23
        }
      ]
    },
    "zone": "મહા સંગ્રામ : બાપ નો બાપ (The Ultimate Clashes)"
  },
  {
    "id": 48,
    "name": "Sher Aaya Sher!",
    "targetTime": 94,
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
      "height": 3288,
      "startX": 180,
      "startY": 3138,
      "finishX": 180,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.991,
      "waypoints": [
        {
          "y": 3288,
          "cx": 180,
          "width": 175
        },
        {
          "y": 2740,
          "cx": 222,
          "width": 175
        },
        {
          "y": 2192,
          "cx": 138,
          "width": 175
        },
        {
          "y": 1644,
          "cx": 222,
          "width": 167
        },
        {
          "y": 1096,
          "cx": 138,
          "width": 167
        },
        {
          "y": 548,
          "cx": 222,
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
          "id": "rock_12",
          "type": "rock",
          "x": 252,
          "y": 2918,
          "radius": 21
        },
        {
          "id": "rock_13",
          "type": "rock",
          "x": 187,
          "y": 2824,
          "radius": 23
        },
        {
          "id": "gate_1",
          "type": "gate",
          "y": 2729,
          "leftX": 165,
          "rightX": 275,
          "postRadius": 11
        },
        {
          "id": "rock_14",
          "type": "rock",
          "x": 159,
          "y": 2635,
          "radius": 18
        },
        {
          "id": "log_6",
          "type": "log",
          "y": 2540,
          "width": 61,
          "height": 22,
          "minX": 126,
          "maxX": 256,
          "speed": 130,
          "x": 214,
          "dir": -1
        },
        {
          "id": "rock_15",
          "type": "rock",
          "x": 134,
          "y": 2447,
          "radius": 21
        },
        {
          "id": "log_7",
          "type": "log",
          "y": 2352,
          "width": 61,
          "height": 22,
          "minX": 98,
          "maxX": 228,
          "speed": 123,
          "x": 128,
          "dir": 1
        },
        {
          "id": "rock_16",
          "type": "rock",
          "x": 185,
          "y": 2258,
          "radius": 23
        },
        {
          "id": "rock_17",
          "type": "rock",
          "x": 121,
          "y": 2163,
          "radius": 18
        },
        {
          "id": "gate_2",
          "type": "gate",
          "y": 2069,
          "leftX": 102,
          "rightX": 212,
          "postRadius": 11
        },
        {
          "id": "rock_18",
          "type": "rock",
          "x": 200,
          "y": 1974,
          "radius": 21
        },
        {
          "id": "log_8",
          "type": "log",
          "y": 1880,
          "width": 58,
          "height": 22,
          "minX": 121,
          "maxX": 251,
          "speed": 136,
          "x": 219,
          "dir": -1
        },
        {
          "id": "rock_19",
          "type": "rock",
          "x": 166,
          "y": 1785,
          "radius": 23
        },
        {
          "id": "gate_3",
          "type": "gate",
          "y": 1692,
          "leftX": 160,
          "rightX": 270,
          "postRadius": 11
        },
        {
          "id": "rock_20",
          "type": "rock",
          "x": 251,
          "y": 1596,
          "radius": 18
        },
        {
          "id": "rock_21",
          "type": "rock",
          "x": 171,
          "y": 1503,
          "radius": 21
        },
        {
          "id": "log_9",
          "type": "log",
          "y": 1408,
          "width": 58,
          "height": 22,
          "minX": 121,
          "maxX": 251,
          "speed": 129,
          "x": 164,
          "dir": 1
        },
        {
          "id": "rock_22",
          "type": "rock",
          "x": 200,
          "y": 1314,
          "radius": 23
        },
        {
          "id": "rock_23",
          "type": "rock",
          "x": 119,
          "y": 1219,
          "radius": 18
        },
        {
          "id": "gate_4",
          "type": "gate",
          "y": 1125,
          "leftX": 87,
          "rightX": 197,
          "postRadius": 11
        },
        {
          "id": "rock_24",
          "type": "rock",
          "x": 184,
          "y": 1030,
          "radius": 21
        },
        {
          "id": "log_10",
          "type": "log",
          "y": 936,
          "width": 58,
          "height": 22,
          "minX": 98,
          "maxX": 228,
          "speed": 122,
          "x": 182,
          "dir": -1
        },
        {
          "id": "rock_25",
          "type": "rock",
          "x": 148,
          "y": 841,
          "radius": 23
        },
        {
          "id": "log_11",
          "type": "log",
          "y": 748,
          "width": 59,
          "height": 22,
          "minX": 126,
          "maxX": 256,
          "speed": 135,
          "x": 158,
          "dir": 1
        },
        {
          "id": "gate_5",
          "type": "gate",
          "y": 653,
          "leftX": 151,
          "rightX": 261,
          "postRadius": 11
        },
        {
          "id": "rock_26",
          "type": "rock",
          "x": 228,
          "y": 559,
          "radius": 18
        },
        {
          "id": "rock_27",
          "type": "rock",
          "x": 177,
          "y": 464,
          "radius": 21
        },
        {
          "id": "rock_28",
          "type": "rock",
          "x": 250,
          "y": 370,
          "radius": 23
        }
      ]
    },
    "zone": "મહા સંગ્રામ : બાપ નો બાપ (The Ultimate Clashes)"
  },
  {
    "id": 49,
    "name": "Chaar Superstar Ek Raft",
    "targetTime": 95,
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
      "height": 3325,
      "startX": 180,
      "startY": 3175,
      "finishX": 180,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.991,
      "waypoints": [
        {
          "y": 3325,
          "cx": 180,
          "width": 170
        },
        {
          "y": 2771,
          "cx": 225,
          "width": 170
        },
        {
          "y": 2216,
          "cx": 135,
          "width": 170
        },
        {
          "y": 1663,
          "cx": 225,
          "width": 165
        },
        {
          "y": 1109,
          "cx": 135,
          "width": 165
        },
        {
          "y": 554,
          "cx": 225,
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
          "id": "rock_13",
          "type": "rock",
          "x": 251,
          "y": 2954,
          "radius": 21
        },
        {
          "id": "log_5",
          "type": "log",
          "y": 2859,
          "width": 59,
          "height": 22,
          "minX": 153,
          "maxX": 283,
          "speed": 133,
          "x": 244,
          "dir": -1
        },
        {
          "id": "rock_14",
          "type": "rock",
          "x": 186,
          "y": 2763,
          "radius": 23
        },
        {
          "id": "log_6",
          "type": "log",
          "y": 2668,
          "width": 59,
          "height": 22,
          "minX": 143,
          "maxX": 273,
          "speed": 126,
          "x": 176,
          "dir": 1
        },
        {
          "id": "rock_15",
          "type": "rock",
          "x": 212,
          "y": 2571,
          "radius": 18
        },
        {
          "id": "gate_1",
          "type": "gate",
          "y": 2476,
          "leftX": 122,
          "rightX": 232,
          "postRadius": 11
        },
        {
          "id": "rock_16",
          "type": "rock",
          "x": 121,
          "y": 2380,
          "radius": 21
        },
        {
          "id": "rock_17",
          "type": "rock",
          "x": 173,
          "y": 2285,
          "radius": 23
        },
        {
          "id": "log_7",
          "type": "log",
          "y": 2189,
          "width": 58,
          "height": 22,
          "minX": 74,
          "maxX": 204,
          "speed": 139,
          "x": 172,
          "dir": -1
        },
        {
          "id": "rock_18",
          "type": "rock",
          "x": 140,
          "y": 2093,
          "radius": 18
        },
        {
          "id": "gate_2",
          "type": "gate",
          "y": 1998,
          "leftX": 115,
          "rightX": 225,
          "postRadius": 11
        },
        {
          "id": "rock_19",
          "type": "rock",
          "x": 216,
          "y": 1901,
          "radius": 21
        },
        {
          "id": "log_8",
          "type": "log",
          "y": 1806,
          "width": 57,
          "height": 22,
          "minX": 137,
          "maxX": 267,
          "speed": 132,
          "x": 170,
          "dir": 1
        },
        {
          "id": "rock_20",
          "type": "rock",
          "x": 181,
          "y": 1710,
          "radius": 23
        },
        {
          "id": "rock_21",
          "type": "rock",
          "x": 251,
          "y": 1615,
          "radius": 18
        },
        {
          "id": "log_9",
          "type": "log",
          "y": 1519,
          "width": 57,
          "height": 22,
          "minX": 137,
          "maxX": 267,
          "speed": 125,
          "x": 224,
          "dir": -1
        },
        {
          "id": "rock_22",
          "type": "rock",
          "x": 164,
          "y": 1424,
          "radius": 21
        },
        {
          "id": "gate_3",
          "type": "gate",
          "y": 1328,
          "leftX": 116,
          "rightX": 226,
          "postRadius": 11
        },
        {
          "id": "rock_23",
          "type": "rock",
          "x": 183,
          "y": 1233,
          "radius": 23
        },
        {
          "id": "log_10",
          "type": "log",
          "y": 1136,
          "width": 57,
          "height": 22,
          "minX": 74,
          "maxX": 204,
          "speed": 138,
          "x": 122,
          "dir": 1
        },
        {
          "id": "rock_24",
          "type": "rock",
          "x": 104,
          "y": 1040,
          "radius": 18
        },
        {
          "id": "rock_25",
          "type": "rock",
          "x": 200,
          "y": 945,
          "radius": 21
        },
        {
          "id": "gate_4",
          "type": "gate",
          "y": 849,
          "leftX": 122,
          "rightX": 232,
          "postRadius": 11
        },
        {
          "id": "log_11",
          "type": "log",
          "y": 754,
          "width": 58,
          "height": 22,
          "minX": 128,
          "maxX": 258,
          "speed": 131,
          "x": 224,
          "dir": -1
        },
        {
          "id": "rock_26",
          "type": "rock",
          "x": 170,
          "y": 658,
          "radius": 23
        },
        {
          "id": "rock_27",
          "type": "rock",
          "x": 239,
          "y": 563,
          "radius": 18
        },
        {
          "id": "log_12",
          "type": "log",
          "y": 466,
          "width": 59,
          "height": 22,
          "minX": 153,
          "maxX": 283,
          "speed": 124,
          "x": 185,
          "dir": 1
        },
        {
          "id": "rock_28",
          "type": "rock",
          "x": 176,
          "y": 371,
          "radius": 21
        }
      ]
    },
    "zone": "મહા સંગ્રામ : બાપ નો બાપ (The Ultimate Clashes)"
  },
  {
    "id": 50,
    "name": "Akhand Gujarati Mahadayro! 🏆",
    "targetTime": 98,
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
      "height": 3375,
      "startX": 180,
      "startY": 3225,
      "finishX": 180,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.991,
      "waypoints": [
        {
          "y": 3375,
          "cx": 180,
          "width": 170
        },
        {
          "y": 2813,
          "cx": 228,
          "width": 170
        },
        {
          "y": 2250,
          "cx": 132,
          "width": 170
        },
        {
          "y": 1688,
          "cx": 228,
          "width": 165
        },
        {
          "y": 1125,
          "cx": 132,
          "width": 165
        },
        {
          "y": 563,
          "cx": 228,
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
          "id": "rock_14",
          "type": "rock",
          "x": 252,
          "y": 3009,
          "radius": 21
        },
        {
          "id": "log_5",
          "type": "log",
          "y": 2918,
          "width": 59,
          "height": 22,
          "minX": 154,
          "maxX": 284,
          "speed": 135,
          "x": 252,
          "dir": -1
        },
        {
          "id": "rock_15",
          "type": "rock",
          "x": 192,
          "y": 2826,
          "radius": 23
        },
        {
          "id": "rock_16",
          "type": "rock",
          "x": 259,
          "y": 2735,
          "radius": 18
        },
        {
          "id": "log_6",
          "type": "log",
          "y": 2644,
          "width": 59,
          "height": 22,
          "minX": 134,
          "maxX": 264,
          "speed": 128,
          "x": 167,
          "dir": 1
        },
        {
          "id": "gate_1",
          "type": "gate",
          "y": 2554,
          "leftX": 129,
          "rightX": 239,
          "postRadius": 11
        },
        {
          "id": "rock_17",
          "type": "rock",
          "x": 127,
          "y": 2463,
          "radius": 21
        },
        {
          "id": "rock_18",
          "type": "rock",
          "x": 178,
          "y": 2371,
          "radius": 23
        },
        {
          "id": "log_7",
          "type": "log",
          "y": 2280,
          "width": 59,
          "height": 22,
          "minX": 72,
          "maxX": 202,
          "speed": 141,
          "x": 170,
          "dir": -1
        },
        {
          "id": "rock_19",
          "type": "rock",
          "x": 129,
          "y": 2189,
          "radius": 18
        },
        {
          "id": "log_8",
          "type": "log",
          "y": 2098,
          "width": 58,
          "height": 22,
          "minX": 93,
          "maxX": 223,
          "speed": 134,
          "x": 139,
          "dir": 1
        },
        {
          "id": "rock_20",
          "type": "rock",
          "x": 214,
          "y": 2006,
          "radius": 21
        },
        {
          "id": "gate_2",
          "type": "gate",
          "y": 1915,
          "leftX": 134,
          "rightX": 244,
          "postRadius": 11
        },
        {
          "id": "rock_21",
          "type": "rock",
          "x": 171,
          "y": 1824,
          "radius": 23
        },
        {
          "id": "rock_22",
          "type": "rock",
          "x": 262,
          "y": 1733,
          "radius": 18
        },
        {
          "id": "log_9",
          "type": "log",
          "y": 1643,
          "width": 57,
          "height": 22,
          "minX": 155,
          "maxX": 285,
          "speed": 127,
          "x": 251,
          "dir": -1
        },
        {
          "id": "rock_23",
          "type": "rock",
          "x": 174,
          "y": 1551,
          "radius": 21
        },
        {
          "id": "log_10",
          "type": "log",
          "y": 1460,
          "width": 57,
          "height": 22,
          "minX": 124,
          "maxX": 254,
          "speed": 140,
          "x": 159,
          "dir": 1
        },
        {
          "id": "gate_3",
          "type": "gate",
          "y": 1369,
          "leftX": 119,
          "rightX": 229,
          "postRadius": 11
        },
        {
          "id": "rock_24",
          "type": "rock",
          "x": 192,
          "y": 1278,
          "radius": 23
        },
        {
          "id": "rock_25",
          "type": "rock",
          "x": 106,
          "y": 1186,
          "radius": 18
        },
        {
          "id": "log_11",
          "type": "log",
          "y": 1095,
          "width": 57,
          "height": 22,
          "minX": 72,
          "maxX": 202,
          "speed": 133,
          "x": 168,
          "dir": -1
        },
        {
          "id": "rock_26",
          "type": "rock",
          "x": 178,
          "y": 1004,
          "radius": 21
        },
        {
          "id": "log_12",
          "type": "log",
          "y": 913,
          "width": 58,
          "height": 22,
          "minX": 103,
          "maxX": 233,
          "speed": 126,
          "x": 138,
          "dir": 1
        },
        {
          "id": "rock_27",
          "type": "rock",
          "x": 148,
          "y": 821,
          "radius": 23
        },
        {
          "id": "gate_4",
          "type": "gate",
          "y": 731,
          "leftX": 144,
          "rightX": 254,
          "postRadius": 11
        },
        {
          "id": "rock_28",
          "type": "rock",
          "x": 258,
          "y": 640,
          "radius": 18
        },
        {
          "id": "rock_29",
          "type": "rock",
          "x": 186,
          "y": 549,
          "radius": 21
        },
        {
          "id": "log_13",
          "type": "log",
          "y": 458,
          "width": 59,
          "height": 22,
          "minX": 154,
          "maxX": 284,
          "speed": 139,
          "x": 252,
          "dir": -1
        },
        {
          "id": "rock_30",
          "type": "rock",
          "x": 250,
          "y": 366,
          "radius": 23
        }
      ]
    },
    "zone": "મહા સંગ્રામ : બાપ નો બાપ (The Ultimate Clashes)"
  }
];
