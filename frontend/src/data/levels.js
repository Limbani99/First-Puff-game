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
    "targetTime": 98,
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
      "height": 2800,
      "startX": 180,
      "startY": 2650,
      "finishX": 205,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.978,
      "waypoints": [
        {
          "y": 2800,
          "cx": 180,
          "width": 270
        },
        {
          "y": 1865,
          "cx": 167,
          "width": 270
        },
        {
          "y": 935,
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
          "id": "log_8",
          "type": "log",
          "x": 174,
          "y": 2366,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": 1,
          "minX": 114,
          "maxX": 234
        },
        {
          "id": "gate_6",
          "type": "gate",
          "y": 2140,
          "leftX": 116,
          "rightX": 226,
          "postRadius": 14
        },
        {
          "id": "log_5",
          "type": "log",
          "x": 167,
          "y": 1850,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": -1,
          "minX": 102,
          "maxX": 232
        },
        {
          "id": "rock_4",
          "type": "rock",
          "x": 218,
          "y": 1559,
          "radius": 22
        },
        {
          "id": "gate_3",
          "type": "gate",
          "y": 1268,
          "leftX": 104,
          "rightX": 214,
          "postRadius": 14
        },
        {
          "id": "log1",
          "type": "log",
          "y": 1076,
          "width": 78,
          "height": 24,
          "minX": 91,
          "maxX": 221,
          "speed": 26,
          "x": 95,
          "dir": 1
        },
        {
          "id": "log_2",
          "type": "log",
          "x": 161,
          "y": 686,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": 1,
          "minX": 96,
          "maxX": 226
        },
        {
          "id": "rock_7",
          "type": "rock",
          "x": 112,
          "y": 454,
          "radius": 22
        }
      ]
    },
    "zone": "ખલાસી થી ભુવાજી (Entry Zone)"
  },
  {
    "id": 9,
    "name": "Muchho No Val",
    "targetTime": 125,
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
      "height": 2845,
      "startX": 180,
      "startY": 2695,
      "finishX": 155,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 2845,
          "cx": 180,
          "width": 270
        },
        {
          "y": 1896,
          "cx": 151,
          "width": 270
        },
        {
          "y": 949,
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
          "id": "gate_9",
          "type": "gate",
          "y": 2408,
          "leftX": 112,
          "rightX": 222,
          "postRadius": 14
        },
        {
          "id": "log_8",
          "type": "log",
          "x": 161,
          "y": 2230,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": 1,
          "minX": 101,
          "maxX": 221
        },
        {
          "id": "rock4",
          "type": "rock",
          "x": 211,
          "y": 2053,
          "radius": 22
        },
        {
          "id": "log2",
          "type": "log",
          "y": 1738,
          "width": 74,
          "height": 22,
          "minX": 90,
          "maxX": 220,
          "speed": 26,
          "x": 220,
          "dir": -1
        },
        {
          "id": "gate1",
          "type": "gate",
          "y": 1423,
          "leftX": 109,
          "rightX": 219,
          "postRadius": 14
        },
        {
          "id": "log3",
          "type": "log",
          "y": 1107,
          "width": 74,
          "height": 22,
          "minX": 108,
          "maxX": 238,
          "speed": 26,
          "x": 108,
          "dir": 1
        },
        {
          "id": "rock5",
          "type": "rock",
          "x": 122,
          "y": 792,
          "radius": 22
        },
        {
          "id": "rock_7",
          "type": "rock",
          "x": 123,
          "y": 635,
          "radius": 22
        },
        {
          "id": "gate_6",
          "type": "gate",
          "y": 457,
          "leftX": 124,
          "rightX": 234,
          "postRadius": 14
        }
      ]
    },
    "zone": "ખલાસી થી ભુવાજી (Entry Zone)"
  },
  {
    "id": 10,
    "name": "Dayra No Dhamako",
    "targetTime": 153,
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
      "height": 2890,
      "startX": 180,
      "startY": 2740,
      "finishX": 180,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.98,
      "waypoints": [
        {
          "y": 2890,
          "cx": 180,
          "width": 270
        },
        {
          "y": 1926,
          "cx": 164,
          "width": 270
        },
        {
          "y": 964,
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
          "id": "gate_9",
          "type": "gate",
          "y": 2449,
          "leftX": 118,
          "rightX": 228,
          "postRadius": 14
        },
        {
          "id": "log_5",
          "type": "log",
          "x": 169,
          "y": 2220,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": -1,
          "minX": 104,
          "maxX": 234
        },
        {
          "id": "log1",
          "type": "log",
          "y": 2027,
          "width": 70,
          "height": 22,
          "minX": 101,
          "maxX": 231,
          "speed": 26,
          "x": 120,
          "dir": 1
        },
        {
          "id": "rock2",
          "type": "rock",
          "x": 231,
          "y": 1639,
          "radius": 22
        },
        {
          "id": "gate1",
          "type": "gate",
          "y": 1251,
          "leftX": 137,
          "rightX": 247,
          "postRadius": 14
        },
        {
          "id": "log_8",
          "type": "log",
          "x": 202,
          "y": 1003,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": 1,
          "minX": 142,
          "maxX": 262
        },
        {
          "id": "rock3",
          "type": "rock",
          "x": 146,
          "y": 863,
          "radius": 22
        },
        {
          "id": "rock_7",
          "type": "rock",
          "x": 141,
          "y": 642,
          "radius": 22
        },
        {
          "id": "gate_6",
          "type": "gate",
          "y": 461,
          "leftX": 136,
          "rightX": 246,
          "postRadius": 14
        }
      ]
    },
    "zone": "ખલાસી થી ભુવાજી (Entry Zone)"
  },
  {
    "id": 11,
    "name": "Sher Ne Mathe Savva Sher",
    "targetTime": 97,
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
      "height": 2935,
      "startX": 180,
      "startY": 2785,
      "finishX": 205,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.981,
      "waypoints": [
        {
          "y": 2935,
          "cx": 180,
          "width": 270
        },
        {
          "y": 1955,
          "cx": 194,
          "width": 270
        },
        {
          "y": 980,
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
          "id": "rock_10",
          "type": "rock",
          "x": 241,
          "y": 2491,
          "radius": 22
        },
        {
          "id": "log_5",
          "type": "log",
          "x": 189,
          "y": 2310,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": -1,
          "minX": 124,
          "maxX": 254
        },
        {
          "id": "gate_9",
          "type": "gate",
          "y": 2122,
          "leftX": 137,
          "rightX": 247,
          "postRadius": 14
        },
        {
          "id": "rock2",
          "type": "rock",
          "x": 249,
          "y": 1966,
          "radius": 22
        },
        {
          "id": "log_8",
          "type": "log",
          "x": 197,
          "y": 1754,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": 1,
          "minX": 137,
          "maxX": 257
        },
        {
          "id": "log1",
          "type": "log",
          "y": 1468,
          "width": 77,
          "height": 24,
          "minX": 136,
          "maxX": 266,
          "speed": 26,
          "x": 265,
          "dir": -1
        },
        {
          "id": "rock_7",
          "type": "rock",
          "x": 150,
          "y": 1201,
          "radius": 22
        },
        {
          "id": "rock3",
          "type": "rock",
          "x": 153,
          "y": 970,
          "radius": 22
        },
        {
          "id": "rock_4",
          "type": "rock",
          "x": 254,
          "y": 652,
          "radius": 22
        },
        {
          "id": "gate_6",
          "type": "gate",
          "y": 464,
          "leftX": 138,
          "rightX": 248,
          "postRadius": 14
        }
      ]
    },
    "zone": "દેવાયત નો દબદબો (Khavad & Santhal Era)"
  },
  {
    "id": 12,
    "name": "Raaj To Amaru J",
    "targetTime": 97,
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
      "height": 2980,
      "startX": 180,
      "startY": 2830,
      "finishX": 155,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.978,
      "waypoints": [
        {
          "y": 2980,
          "cx": 180,
          "width": 270
        },
        {
          "y": 1986,
          "cx": 212,
          "width": 270
        },
        {
          "y": 994,
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
          "id": "rock_10",
          "type": "rock",
          "x": 249,
          "y": 2532,
          "radius": 22
        },
        {
          "id": "log_5",
          "type": "log",
          "x": 200,
          "y": 2352,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": -1,
          "minX": 135,
          "maxX": 265
        },
        {
          "id": "gate_9",
          "type": "gate",
          "y": 2157,
          "leftX": 151,
          "rightX": 261,
          "postRadius": 14
        },
        {
          "id": "log1",
          "type": "log",
          "y": 2001,
          "width": 77,
          "height": 24,
          "minX": 147,
          "maxX": 277,
          "speed": 26,
          "x": 147,
          "dir": 1
        },
        {
          "id": "log_8",
          "type": "log",
          "x": 206,
          "y": 1782,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": 1,
          "minX": 146,
          "maxX": 266
        },
        {
          "id": "rock3",
          "type": "rock",
          "x": 253,
          "y": 1491,
          "radius": 22
        },
        {
          "id": "rock_7",
          "type": "rock",
          "x": 135,
          "y": 1218,
          "radius": 22
        },
        {
          "id": "log2",
          "type": "log",
          "y": 979,
          "width": 77,
          "height": 24,
          "minX": 118,
          "maxX": 248,
          "speed": 26,
          "x": 248,
          "dir": -1
        },
        {
          "id": "rock_4",
          "type": "rock",
          "x": 237,
          "y": 655,
          "radius": 22
        },
        {
          "id": "gate_6",
          "type": "gate",
          "y": 468,
          "leftX": 126,
          "rightX": 236,
          "postRadius": 14
        }
      ]
    },
    "zone": "દેવાયત નો દબદબો (Khavad & Santhal Era)"
  },
  {
    "id": 13,
    "name": "Moje Moj Roje Roj",
    "targetTime": 109,
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
      "height": 3025,
      "startX": 180,
      "startY": 2875,
      "finishX": 180,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 3025,
          "cx": 180,
          "width": 270
        },
        {
          "y": 2016,
          "cx": 197,
          "width": 270
        },
        {
          "y": 1009,
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
          "id": "rock_10",
          "type": "rock",
          "x": 243,
          "y": 2574,
          "radius": 22
        },
        {
          "id": "gate_6",
          "type": "gate",
          "y": 2393,
          "leftX": 136,
          "rightX": 246,
          "postRadius": 14
        },
        {
          "id": "gate1",
          "type": "gate",
          "y": 2140,
          "leftX": 140,
          "rightX": 250,
          "postRadius": 14
        },
        {
          "id": "gate_9",
          "type": "gate",
          "y": 2000,
          "leftX": 141,
          "rightX": 251,
          "postRadius": 14
        },
        {
          "id": "log2",
          "type": "log",
          "y": 1720,
          "width": 74,
          "height": 22,
          "minX": 119,
          "maxX": 249,
          "speed": 26,
          "x": 119,
          "dir": 1
        },
        {
          "id": "gate2",
          "type": "gate",
          "y": 1305,
          "leftX": 111,
          "rightX": 221,
          "postRadius": 14
        },
        {
          "id": "log_8",
          "type": "log",
          "x": 155,
          "y": 1045,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": 1,
          "minX": 95,
          "maxX": 215
        },
        {
          "id": "rock4",
          "type": "rock",
          "x": 101,
          "y": 885,
          "radius": 22
        },
        {
          "id": "log_5",
          "type": "log",
          "x": 162,
          "y": 659,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": -1,
          "minX": 97,
          "maxX": 227
        },
        {
          "id": "rock_7",
          "type": "rock",
          "x": 112,
          "y": 471,
          "radius": 22
        }
      ]
    },
    "zone": "દેવાયત નો દબદબો (Khavad & Santhal Era)"
  },
  {
    "id": 14,
    "name": "Santhal Ni Sarkar",
    "targetTime": 108,
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
      "height": 3070,
      "startX": 180,
      "startY": 2920,
      "finishX": 205,
      "finishY": 130,
      "finishRadius": 38,
      "drag": 0.98,
      "waypoints": [
        {
          "y": 3070,
          "cx": 180,
          "width": 270
        },
        {
          "y": 2046,
          "cx": 164,
          "width": 270
        },
        {
          "y": 1024,
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
          "id": "log_11",
          "type": "log",
          "x": 173,
          "y": 2615,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": -1,
          "minX": 113,
          "maxX": 233
        },
        {
          "id": "log_8",
          "type": "log",
          "x": 170,
          "y": 2435,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": 1,
          "minX": 105,
          "maxX": 235
        },
        {
          "id": "rock_7",
          "type": "rock",
          "x": 111,
          "y": 2181,
          "radius": 22
        },
        {
          "id": "rock_10",
          "type": "rock",
          "x": 219,
          "y": 2032,
          "radius": 22
        },
        {
          "id": "log1",
          "type": "log",
          "y": 1892,
          "width": 74,
          "height": 22,
          "minX": 97,
          "maxX": 227,
          "speed": 26,
          "x": 105,
          "dir": 1
        },
        {
          "id": "gate_6",
          "type": "gate",
          "y": 1675,
          "leftX": 104,
          "rightX": 214,
          "postRadius": 14
        },
        {
          "id": "log_5",
          "type": "log",
          "x": 155,
          "y": 1422,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": -1,
          "minX": 90,
          "maxX": 220
        },
        {
          "id": "rock2",
          "type": "rock",
          "x": 206,
          "y": 1178,
          "radius": 22
        },
        {
          "id": "rock_4",
          "type": "rock",
          "x": 207,
          "y": 916,
          "radius": 22
        },
        {
          "id": "gate_3",
          "type": "gate",
          "y": 662,
          "leftX": 105,
          "rightX": 215,
          "postRadius": 14
        },
        {
          "id": "gate_9",
          "type": "gate",
          "y": 475,
          "leftX": 111,
          "rightX": 221,
          "postRadius": 14
        }
      ]
    },
    "zone": "દેવાયત નો દબદબો (Khavad & Santhal Era)"
  },
  {
    "id": 15,
    "name": "Sinh Ne Kaun Roke",
    "targetTime": 122,
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
      "height": 3115,
      "startX": 180,
      "startY": 2965,
      "finishX": 155,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.981,
      "waypoints": [
        {
          "y": 3115,
          "cx": 180,
          "width": 270
        },
        {
          "y": 2076,
          "cx": 145,
          "width": 270
        },
        {
          "y": 1039,
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
          "id": "gate_9",
          "type": "gate",
          "y": 2657,
          "leftX": 110,
          "rightX": 220,
          "postRadius": 14
        },
        {
          "id": "rock4",
          "type": "rock",
          "x": 209,
          "y": 2340,
          "radius": 22
        },
        {
          "id": "log1",
          "type": "log",
          "y": 2026,
          "width": 74,
          "height": 22,
          "minX": 82,
          "maxX": 212,
          "speed": 26,
          "x": 212,
          "dir": -1
        },
        {
          "id": "log_8",
          "type": "log",
          "x": 152,
          "y": 1865,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": 1,
          "minX": 92,
          "maxX": 212
        },
        {
          "id": "rock5",
          "type": "rock",
          "x": 101,
          "y": 1713,
          "radius": 22
        },
        {
          "id": "log2",
          "type": "log",
          "y": 1402,
          "width": 74,
          "height": 22,
          "minX": 101,
          "maxX": 231,
          "speed": 26,
          "x": 105,
          "dir": 1
        },
        {
          "id": "rock6",
          "type": "rock",
          "x": 230,
          "y": 1089,
          "radius": 22
        },
        {
          "id": "log3",
          "type": "log",
          "y": 775,
          "width": 74,
          "height": 22,
          "minX": 113,
          "maxX": 243,
          "speed": 26,
          "x": 240,
          "dir": -1
        },
        {
          "id": "rock_7",
          "type": "rock",
          "x": 124,
          "y": 478,
          "radius": 22
        }
      ]
    },
    "zone": "દેવાયત નો દબદબો (Khavad & Santhal Era)"
  },
  {
    "id": 16,
    "name": "Bhaibandhi Zindabad",
    "targetTime": 107,
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
      "height": 3150,
      "startX": 180,
      "startY": 3000,
      "finishX": 180,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.978,
      "waypoints": [
        {
          "y": 3150,
          "cx": 180,
          "width": 264
        },
        {
          "y": 2363,
          "cx": 161,
          "width": 264
        },
        {
          "y": 1576,
          "cx": 209,
          "width": 264
        },
        {
          "y": 787,
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
          "id": "log_11",
          "type": "log",
          "x": 170,
          "y": 2727,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": -1,
          "minX": 110,
          "maxX": 230
        },
        {
          "id": "gate_6",
          "type": "gate",
          "y": 2509,
          "leftX": 110,
          "rightX": 220,
          "postRadius": 14
        },
        {
          "id": "rock3",
          "type": "rock",
          "x": 223,
          "y": 2244,
          "radius": 22
        },
        {
          "id": "rock_10",
          "type": "rock",
          "x": 234,
          "y": 2074,
          "radius": 22
        },
        {
          "id": "log1",
          "type": "log",
          "y": 1798,
          "width": 74,
          "height": 22,
          "minX": 130,
          "maxX": 260,
          "speed": 26,
          "x": 130,
          "dir": 1
        },
        {
          "id": "gate_9",
          "type": "gate",
          "y": 1585,
          "leftX": 153,
          "rightX": 263,
          "postRadius": 14
        },
        {
          "id": "rock4",
          "type": "rock",
          "x": 152,
          "y": 1352,
          "radius": 22
        },
        {
          "id": "log_8",
          "type": "log",
          "x": 205,
          "y": 1096,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": 1,
          "minX": 145,
          "maxX": 265
        },
        {
          "id": "log2",
          "type": "log",
          "y": 906,
          "width": 74,
          "height": 22,
          "minX": 139,
          "maxX": 269,
          "speed": 26,
          "x": 240,
          "dir": -1
        },
        {
          "id": "log_5",
          "type": "log",
          "x": 200,
          "y": 668,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": -1,
          "minX": 135,
          "maxX": 265
        },
        {
          "id": "rock_7",
          "type": "rock",
          "x": 138,
          "y": 443,
          "radius": 22
        }
      ]
    },
    "zone": "દેવાયત નો દબદબો (Khavad & Santhal Era)"
  },
  {
    "id": 17,
    "name": "Khokhra Maheman",
    "targetTime": 94,
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
      "height": 3180,
      "startX": 180,
      "startY": 3030,
      "finishX": 205,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 3180,
          "cx": 180,
          "width": 258
        },
        {
          "y": 2385,
          "cx": 198,
          "width": 258
        },
        {
          "y": 1591,
          "cx": 214,
          "width": 258
        },
        {
          "y": 795,
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
          "id": "log_11",
          "type": "log",
          "x": 190,
          "y": 2755,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": -1,
          "minX": 130,
          "maxX": 250
        },
        {
          "id": "gate_6",
          "type": "gate",
          "y": 2539,
          "leftX": 140,
          "rightX": 250,
          "postRadius": 14
        },
        {
          "id": "rock3",
          "type": "rock",
          "x": 254,
          "y": 2346,
          "radius": 22
        },
        {
          "id": "log1",
          "type": "log",
          "y": 1968,
          "width": 77,
          "height": 24,
          "minX": 141,
          "maxX": 271,
          "speed": 26,
          "x": 265,
          "dir": -1
        },
        {
          "id": "rock_10",
          "type": "rock",
          "x": 265,
          "y": 1765,
          "radius": 22
        },
        {
          "id": "rock4",
          "type": "rock",
          "x": 159,
          "y": 1591,
          "radius": 22
        },
        {
          "id": "gate_9",
          "type": "gate",
          "y": 1435,
          "leftX": 150,
          "rightX": 260,
          "postRadius": 14
        },
        {
          "id": "log2",
          "type": "log",
          "y": 1212,
          "width": 77,
          "height": 24,
          "minX": 127,
          "maxX": 257,
          "speed": 26,
          "x": 127,
          "dir": 1
        },
        {
          "id": "rock5",
          "type": "rock",
          "x": 224,
          "y": 834,
          "radius": 22
        },
        {
          "id": "log_8",
          "type": "log",
          "x": 170,
          "y": 610,
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
          "x": 118,
          "y": 445,
          "radius": 22
        }
      ]
    },
    "zone": "દેવાયત નો દબદબો (Khavad & Santhal Era)"
  },
  {
    "id": 18,
    "name": "Meldi Maano Khamkaro",
    "targetTime": 119,
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
      "height": 3210,
      "startX": 180,
      "startY": 3060,
      "finishX": 155,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.98,
      "waypoints": [
        {
          "y": 3210,
          "cx": 180,
          "width": 252
        },
        {
          "y": 2408,
          "cx": 218,
          "width": 252
        },
        {
          "y": 1606,
          "cx": 183,
          "width": 252
        },
        {
          "y": 803,
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
          "id": "gate_15",
          "type": "gate",
          "y": 2783,
          "leftX": 145,
          "rightX": 255,
          "postRadius": 14
        },
        {
          "id": "log_14",
          "type": "log",
          "x": 208,
          "y": 2616,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": 1,
          "minX": 148,
          "maxX": 268
        },
        {
          "id": "log2",
          "type": "log",
          "y": 2427,
          "width": 74,
          "height": 22,
          "minX": 152,
          "maxX": 282,
          "speed": 26,
          "x": 152,
          "dir": 1
        },
        {
          "id": "rock_13",
          "type": "rock",
          "x": 158,
          "y": 2283,
          "radius": 22
        },
        {
          "id": "rock5",
          "type": "rock",
          "x": 259,
          "y": 2098,
          "radius": 22
        },
        {
          "id": "gate_12",
          "type": "gate",
          "y": 1949,
          "leftX": 143,
          "rightX": 253,
          "postRadius": 14
        },
        {
          "id": "gate1",
          "type": "gate",
          "y": 1768,
          "leftX": 135,
          "rightX": 245,
          "postRadius": 14
        },
        {
          "id": "log_11",
          "type": "log",
          "x": 183,
          "y": 1615,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": -1,
          "minX": 123,
          "maxX": 243
        },
        {
          "id": "log3",
          "type": "log",
          "y": 1442,
          "width": 74,
          "height": 22,
          "minX": 110,
          "maxX": 240,
          "speed": 26,
          "x": 240,
          "dir": -1
        },
        {
          "id": "rock_10",
          "type": "rock",
          "x": 221,
          "y": 1281,
          "radius": 22
        },
        {
          "id": "rock6",
          "type": "rock",
          "x": 103,
          "y": 1112,
          "radius": 22
        },
        {
          "id": "gate_9",
          "type": "gate",
          "y": 948,
          "leftX": 94,
          "rightX": 204,
          "postRadius": 14
        },
        {
          "id": "log4",
          "type": "log",
          "y": 783,
          "width": 74,
          "height": 22,
          "minX": 78,
          "maxX": 208,
          "speed": 26,
          "x": 105,
          "dir": 1
        },
        {
          "id": "log_8",
          "type": "log",
          "x": 151,
          "y": 614,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": 1,
          "minX": 91,
          "maxX": 211
        },
        {
          "id": "rock_7",
          "type": "rock",
          "x": 104,
          "y": 447,
          "radius": 22
        }
      ]
    },
    "zone": "દેવાયત નો દબદબો (Khavad & Santhal Era)"
  },
  {
    "id": 19,
    "name": "Khovai Gayo Khavad",
    "targetTime": 105,
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
      "height": 3240,
      "startX": 180,
      "startY": 3090,
      "finishX": 180,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.981,
      "waypoints": [
        {
          "y": 3240,
          "cx": 180,
          "width": 246
        },
        {
          "y": 2431,
          "cx": 200,
          "width": 246
        },
        {
          "y": 1620,
          "cx": 148,
          "width": 246
        },
        {
          "y": 811,
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
          "id": "log_11",
          "type": "log",
          "x": 191,
          "y": 2811,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": -1,
          "minX": 131,
          "maxX": 251
        },
        {
          "id": "gate_6",
          "type": "gate",
          "y": 2595,
          "leftX": 141,
          "rightX": 251,
          "postRadius": 14
        },
        {
          "id": "rock3",
          "type": "rock",
          "x": 253,
          "y": 2400,
          "radius": 22
        },
        {
          "id": "log1",
          "type": "log",
          "y": 2010,
          "width": 77,
          "height": 24,
          "minX": 108,
          "maxX": 238,
          "speed": 26,
          "x": 238,
          "dir": -1
        },
        {
          "id": "rock_10",
          "type": "rock",
          "x": 214,
          "y": 1799,
          "radius": 22
        },
        {
          "id": "rock4",
          "type": "rock",
          "x": 93,
          "y": 1620,
          "radius": 22
        },
        {
          "id": "gate_9",
          "type": "gate",
          "y": 1461,
          "leftX": 94,
          "rightX": 204,
          "postRadius": 14
        },
        {
          "id": "log2",
          "type": "log",
          "y": 1230,
          "width": 77,
          "height": 24,
          "minX": 86,
          "maxX": 216,
          "speed": 26,
          "x": 95,
          "dir": 1
        },
        {
          "id": "rock5",
          "type": "rock",
          "x": 210,
          "y": 840,
          "radius": 22
        },
        {
          "id": "log_8",
          "type": "log",
          "x": 161,
          "y": 618,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": 1,
          "minX": 101,
          "maxX": 221
        },
        {
          "id": "rock_7",
          "type": "rock",
          "x": 111,
          "y": 449,
          "radius": 22
        }
      ]
    },
    "zone": "દેવાયત નો દબદબો (Khavad & Santhal Era)"
  },
  {
    "id": 20,
    "name": "Duniya Jhukegi Boss",
    "targetTime": 143,
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
      "height": 3270,
      "startX": 180,
      "startY": 3120,
      "finishX": 205,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.978,
      "waypoints": [
        {
          "y": 3270,
          "cx": 180,
          "width": 270
        },
        {
          "y": 2453,
          "cx": 161,
          "width": 270
        },
        {
          "y": 1636,
          "cx": 144,
          "width": 270
        },
        {
          "y": 818,
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
          "id": "log_11",
          "type": "log",
          "x": 170,
          "y": 2839,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": -1,
          "minX": 110,
          "maxX": 230
        },
        {
          "id": "gate_6",
          "type": "gate",
          "y": 2625,
          "leftX": 110,
          "rightX": 220,
          "postRadius": 14
        },
        {
          "id": "rock4",
          "type": "rock",
          "x": 216,
          "y": 2429,
          "radius": 22
        },
        {
          "id": "log2",
          "type": "log",
          "y": 2031,
          "width": 74,
          "height": 22,
          "minX": 87,
          "maxX": 217,
          "speed": 26,
          "x": 105,
          "dir": 1
        },
        {
          "id": "rock_10",
          "type": "rock",
          "x": 203,
          "y": 1816,
          "radius": 22
        },
        {
          "id": "gate1",
          "type": "gate",
          "y": 1636,
          "leftX": 89,
          "rightX": 199,
          "postRadius": 14
        },
        {
          "id": "gate_9",
          "type": "gate",
          "y": 1474,
          "leftX": 99,
          "rightX": 209,
          "postRadius": 14
        },
        {
          "id": "rock5",
          "type": "rock",
          "x": 113,
          "y": 1239,
          "radius": 22
        },
        {
          "id": "log3",
          "type": "log",
          "y": 844,
          "width": 74,
          "height": 22,
          "minX": 127,
          "maxX": 257,
          "speed": 26,
          "x": 240,
          "dir": -1
        },
        {
          "id": "log_8",
          "type": "log",
          "x": 191,
          "y": 621,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": 1,
          "minX": 131,
          "maxX": 251
        },
        {
          "id": "rock_7",
          "type": "rock",
          "x": 133,
          "y": 451,
          "radius": 22
        }
      ]
    },
    "zone": "દેવાયત નો દબદબો (Khavad & Santhal Era)"
  },
  {
    "id": 21,
    "name": "Tera Zikr",
    "targetTime": 103,
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
      "height": 3300,
      "startX": 180,
      "startY": 3150,
      "finishX": 155,
      "finishY": 130,
      "finishRadius": 38,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 3300,
          "cx": 180,
          "width": 264
        },
        {
          "y": 2476,
          "cx": 139,
          "width": 264
        },
        {
          "y": 1650,
          "cx": 177,
          "width": 264
        },
        {
          "y": 826,
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
          "id": "gate_9",
          "type": "gate",
          "y": 2868,
          "leftX": 104,
          "rightX": 214,
          "postRadius": 14
        },
        {
          "id": "rock4",
          "type": "rock",
          "x": 198,
          "y": 2556,
          "radius": 22
        },
        {
          "id": "log1",
          "type": "log",
          "y": 2254,
          "width": 76,
          "height": 24,
          "minX": 84,
          "maxX": 214,
          "speed": 26,
          "x": 214,
          "dir": -1
        },
        {
          "id": "rock5",
          "type": "rock",
          "x": 108,
          "y": 1952,
          "radius": 22
        },
        {
          "id": "log2",
          "type": "log",
          "y": 1650,
          "width": 76,
          "height": 24,
          "minX": 112,
          "maxX": 242,
          "speed": 26,
          "x": 112,
          "dir": 1
        },
        {
          "id": "rock6",
          "type": "rock",
          "x": 248,
          "y": 1349,
          "radius": 22
        },
        {
          "id": "log3",
          "type": "log",
          "y": 1046,
          "width": 76,
          "height": 24,
          "minX": 144,
          "maxX": 274,
          "speed": 26,
          "x": 265,
          "dir": -1
        },
        {
          "id": "rock7",
          "type": "rock",
          "x": 162,
          "y": 745,
          "radius": 22
        },
        {
          "id": "log_8",
          "type": "log",
          "x": 202,
          "y": 453,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": 1,
          "minX": 142,
          "maxX": 262
        }
      ]
    },
    "zone": "રાવલ રોમાન્સ & ધારલ (Darshan & Dharal Waves)"
  },
  {
    "id": 22,
    "name": "Darshan Weds Dharal",
    "targetTime": 116,
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
      "height": 3330,
      "startX": 180,
      "startY": 3180,
      "finishX": 180,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.98,
      "waypoints": [
        {
          "y": 3330,
          "cx": 180,
          "width": 258
        },
        {
          "y": 2498,
          "cx": 159,
          "width": 258
        },
        {
          "y": 1666,
          "cx": 215,
          "width": 258
        },
        {
          "y": 833,
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
          "id": "rock_10",
          "type": "rock",
          "x": 224,
          "y": 2896,
          "radius": 22
        },
        {
          "id": "rock5",
          "type": "rock",
          "x": 216,
          "y": 2585,
          "radius": 22
        },
        {
          "id": "gate1",
          "type": "gate",
          "y": 2277,
          "leftX": 119,
          "rightX": 229,
          "postRadius": 14
        },
        {
          "id": "log3",
          "type": "log",
          "y": 1972,
          "width": 74,
          "height": 22,
          "minX": 129,
          "maxX": 259,
          "speed": 26,
          "x": 129,
          "dir": 1
        },
        {
          "id": "gate2",
          "type": "gate",
          "y": 1666,
          "leftX": 160,
          "rightX": 270,
          "postRadius": 14
        },
        {
          "id": "gate_9",
          "type": "gate",
          "y": 1501,
          "leftX": 158,
          "rightX": 268,
          "postRadius": 14
        },
        {
          "id": "rock6",
          "type": "rock",
          "x": 157,
          "y": 1358,
          "radius": 22
        },
        {
          "id": "gate3",
          "type": "gate",
          "y": 1053,
          "leftX": 153,
          "rightX": 263,
          "postRadius": 14
        },
        {
          "id": "rock7",
          "type": "rock",
          "x": 258,
          "y": 745,
          "radius": 22
        },
        {
          "id": "log_8",
          "type": "log",
          "x": 194,
          "y": 454,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": 1,
          "minX": 134,
          "maxX": 254
        }
      ]
    },
    "zone": "રાવલ રોમાન્સ & ધારલ (Darshan & Dharal Waves)"
  },
  {
    "id": 23,
    "name": "Blue Family Army",
    "targetTime": 160,
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
      "height": 3360,
      "startY": 3210,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 3360,
          "cx": 245,
          "width": 245
        },
        {
          "y": 2239,
          "cx": 245,
          "width": 245
        },
        {
          "y": 1618,
          "cx": 115,
          "width": 250
        },
        {
          "y": 0,
          "cx": 115,
          "width": 245
        }
      ],
      "obstacles": [
        {
          "id": "rock_13",
          "type": "rock",
          "x": 190,
          "y": 2924,
          "radius": 22
        },
        {
          "id": "rock_7",
          "type": "rock",
          "x": 190,
          "y": 2712,
          "radius": 22
        },
        {
          "id": "gate_12",
          "type": "gate",
          "y": 2571,
          "leftX": 190,
          "rightX": 300,
          "postRadius": 14
        },
        {
          "id": "log1",
          "type": "log",
          "y": 2365,
          "width": 62,
          "height": 22,
          "minX": 180,
          "maxX": 310,
          "speed": 26,
          "x": 230,
          "dir": 1
        },
        {
          "id": "log_11",
          "type": "log",
          "x": 241,
          "y": 2219,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": -1,
          "minX": 181,
          "maxX": 301
        },
        {
          "id": "gate_6",
          "type": "gate",
          "y": 2034,
          "leftX": 147,
          "rightX": 257,
          "postRadius": 14
        },
        {
          "id": "rock1",
          "type": "rock",
          "x": 206,
          "y": 1792,
          "radius": 22
        },
        {
          "id": "rock_10",
          "type": "rock",
          "x": 170,
          "y": 1514,
          "radius": 22
        },
        {
          "id": "log_5",
          "type": "log",
          "x": 115,
          "y": 1356,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": -1,
          "minX": 50,
          "maxX": 180
        },
        {
          "id": "gate_9",
          "type": "gate",
          "y": 1161,
          "leftX": 60,
          "rightX": 170,
          "postRadius": 14
        },
        {
          "id": "gate1",
          "type": "gate",
          "y": 946,
          "leftX": 60,
          "rightX": 170,
          "postRadius": 14
        },
        {
          "id": "rock_4",
          "type": "rock",
          "x": 170,
          "y": 679,
          "radius": 22
        },
        {
          "id": "log_8",
          "type": "log",
          "x": 115,
          "y": 456,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": 1,
          "minX": 55,
          "maxX": 175
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
    "targetTime": 162,
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
      "height": 3390,
      "startY": 3240,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 3390,
          "cx": 135,
          "width": 245
        },
        {
          "y": 2543,
          "cx": 135,
          "width": 245
        },
        {
          "y": 2059,
          "cx": 240,
          "width": 250
        },
        {
          "y": 1575,
          "cx": 240,
          "width": 250
        },
        {
          "y": 1090,
          "cx": 135,
          "width": 245
        },
        {
          "y": 0,
          "cx": 135,
          "width": 245
        }
      ],
      "obstacles": [
        {
          "id": "gate_12",
          "type": "gate",
          "y": 2952,
          "leftX": 80,
          "rightX": 190,
          "postRadius": 14
        },
        {
          "id": "log_8",
          "type": "log",
          "x": 135,
          "y": 2726,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": 1,
          "minX": 70,
          "maxX": 200
        },
        {
          "id": "rock1",
          "type": "rock",
          "x": 106,
          "y": 2421,
          "radius": 22
        },
        {
          "id": "log_11",
          "type": "log",
          "x": 201,
          "y": 2239,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": -1,
          "minX": 141,
          "maxX": 261
        },
        {
          "id": "rock_7",
          "type": "rock",
          "x": 185,
          "y": 2050,
          "radius": 22
        },
        {
          "id": "log1",
          "type": "log",
          "y": 1817,
          "width": 62,
          "height": 22,
          "minX": 175,
          "maxX": 305,
          "speed": 26,
          "x": 220,
          "dir": 1
        },
        {
          "id": "gate_6",
          "type": "gate",
          "y": 1598,
          "leftX": 185,
          "rightX": 295,
          "postRadius": 14
        },
        {
          "id": "log_5",
          "type": "log",
          "x": 196,
          "y": 1372,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": -1,
          "minX": 131,
          "maxX": 261
        },
        {
          "id": "rock_4",
          "type": "rock",
          "x": 202,
          "y": 1147,
          "radius": 22
        },
        {
          "id": "gate1",
          "type": "gate",
          "y": 872,
          "leftX": 80,
          "rightX": 190,
          "postRadius": 14
        },
        {
          "id": "rock_10",
          "type": "rock",
          "x": 190,
          "y": 636,
          "radius": 22
        },
        {
          "id": "gate_9",
          "type": "gate",
          "y": 458,
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
    "targetTime": 161,
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
      "height": 3420,
      "startY": 3270,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 3420,
          "cx": 100,
          "width": 245
        },
        {
          "y": 2623,
          "cx": 100,
          "width": 245
        },
        {
          "y": 2167,
          "cx": 180,
          "width": 250
        },
        {
          "y": 1483,
          "cx": 180,
          "width": 250
        },
        {
          "y": 1027,
          "cx": 260,
          "width": 245
        },
        {
          "y": 0,
          "cx": 260,
          "width": 245
        }
      ],
      "obstacles": [
        {
          "id": "gate_12",
          "type": "gate",
          "y": 2980,
          "leftX": 45,
          "rightX": 155,
          "postRadius": 14
        },
        {
          "id": "gate_9",
          "type": "gate",
          "y": 2774,
          "leftX": 45,
          "rightX": 155,
          "postRadius": 14
        },
        {
          "id": "gate1",
          "type": "gate",
          "y": 2508,
          "leftX": 65,
          "rightX": 175,
          "postRadius": 14
        },
        {
          "id": "log_11",
          "type": "log",
          "x": 164,
          "y": 2260,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": -1,
          "minX": 104,
          "maxX": 224
        },
        {
          "id": "log_8",
          "type": "log",
          "x": 180,
          "y": 2074,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": 1,
          "minX": 115,
          "maxX": 245
        },
        {
          "id": "log1",
          "type": "log",
          "y": 1824,
          "width": 64,
          "height": 22,
          "minX": 115,
          "maxX": 245,
          "speed": 26,
          "x": 170,
          "dir": -1
        },
        {
          "id": "rock_7",
          "type": "rock",
          "x": 125,
          "y": 1608,
          "radius": 22
        },
        {
          "id": "gate_6",
          "type": "gate",
          "y": 1375,
          "leftX": 144,
          "rightX": 254,
          "postRadius": 14
        },
        {
          "id": "log_5",
          "type": "log",
          "x": 240,
          "y": 1141,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": -1,
          "minX": 175,
          "maxX": 305
        },
        {
          "id": "rock1",
          "type": "rock",
          "x": 205,
          "y": 912,
          "radius": 22
        },
        {
          "id": "rock_4",
          "type": "rock",
          "x": 315,
          "y": 675,
          "radius": 22
        },
        {
          "id": "rock_10",
          "type": "rock",
          "x": 315,
          "y": 460,
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
    "targetTime": 162,
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
      "height": 3450,
      "startY": 3300,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 3450,
          "cx": 260,
          "width": 245
        },
        {
          "y": 2646,
          "cx": 260,
          "width": 245
        },
        {
          "y": 2186,
          "cx": 180,
          "width": 250
        },
        {
          "y": 1496,
          "cx": 180,
          "width": 250
        },
        {
          "y": 1036,
          "cx": 100,
          "width": 245
        },
        {
          "y": 0,
          "cx": 100,
          "width": 245
        }
      ],
      "obstacles": [
        {
          "id": "gate_12",
          "type": "gate",
          "y": 3008,
          "leftX": 205,
          "rightX": 315,
          "postRadius": 14
        },
        {
          "id": "gate_9",
          "type": "gate",
          "y": 2799,
          "leftX": 205,
          "rightX": 315,
          "postRadius": 14
        },
        {
          "id": "gate1",
          "type": "gate",
          "y": 2530,
          "leftX": 185,
          "rightX": 295,
          "postRadius": 14
        },
        {
          "id": "log_11",
          "type": "log",
          "x": 197,
          "y": 2281,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": -1,
          "minX": 137,
          "maxX": 257
        },
        {
          "id": "log_8",
          "type": "log",
          "x": 180,
          "y": 2092,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": 1,
          "minX": 115,
          "maxX": 245
        },
        {
          "id": "log1",
          "type": "log",
          "y": 1840,
          "width": 64,
          "height": 22,
          "minX": 115,
          "maxX": 245,
          "speed": 26,
          "x": 170,
          "dir": 1
        },
        {
          "id": "rock_7",
          "type": "rock",
          "x": 125,
          "y": 1622,
          "radius": 22
        },
        {
          "id": "gate_6",
          "type": "gate",
          "y": 1387,
          "leftX": 106,
          "rightX": 216,
          "postRadius": 14
        },
        {
          "id": "log_5",
          "type": "log",
          "x": 120,
          "y": 1151,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": -1,
          "minX": 55,
          "maxX": 185
        },
        {
          "id": "rock1",
          "type": "rock",
          "x": 155,
          "y": 920,
          "radius": 22
        },
        {
          "id": "rock_4",
          "type": "rock",
          "x": 155,
          "y": 681,
          "radius": 22
        },
        {
          "id": "rock_10",
          "type": "rock",
          "x": 155,
          "y": 462,
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
    "targetTime": 163,
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
      "height": 3480,
      "startY": 3330,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 3480,
          "cx": 110,
          "width": 245
        },
        {
          "y": 2828,
          "cx": 110,
          "width": 245
        },
        {
          "y": 2284,
          "cx": 250,
          "width": 250
        },
        {
          "y": 1632,
          "cx": 110,
          "width": 250
        },
        {
          "y": 979,
          "cx": 250,
          "width": 245
        },
        {
          "y": 0,
          "cx": 250,
          "width": 245
        }
      ],
      "obstacles": [
        {
          "id": "log_11",
          "type": "log",
          "x": 110,
          "y": 3036,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": -1,
          "minX": 50,
          "maxX": 170
        },
        {
          "id": "log_8",
          "type": "log",
          "x": 110,
          "y": 2844,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": 1,
          "minX": 45,
          "maxX": 175
        },
        {
          "id": "rock1",
          "type": "rock",
          "x": 111,
          "y": 2610,
          "radius": 22
        },
        {
          "id": "rock_7",
          "type": "rock",
          "x": 175,
          "y": 2360,
          "radius": 22
        },
        {
          "id": "rock_10",
          "type": "rock",
          "x": 269,
          "y": 2118,
          "radius": 22
        },
        {
          "id": "log1",
          "type": "log",
          "y": 1958,
          "width": 62,
          "height": 22,
          "minX": 115,
          "maxX": 245,
          "speed": 26,
          "x": 180,
          "dir": 1
        },
        {
          "id": "gate_6",
          "type": "gate",
          "y": 1633,
          "leftX": 55,
          "rightX": 165,
          "postRadius": 14
        },
        {
          "id": "rock2",
          "type": "rock",
          "x": 102,
          "y": 1414,
          "radius": 22
        },
        {
          "id": "log_5",
          "type": "log",
          "x": 214,
          "y": 1148,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": -1,
          "minX": 149,
          "maxX": 279
        },
        {
          "id": "gate1",
          "type": "gate",
          "y": 762,
          "leftX": 195,
          "rightX": 305,
          "postRadius": 14
        },
        {
          "id": "gate_9",
          "type": "gate",
          "y": 464,
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
    "targetTime": 164,
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
      "height": 3510,
      "startY": 3360,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 3510,
          "cx": 130,
          "width": 250
        },
        {
          "y": 2962,
          "cx": 230,
          "width": 250
        },
        {
          "y": 2413,
          "cx": 130,
          "width": 250
        },
        {
          "y": 1865,
          "cx": 230,
          "width": 250
        },
        {
          "y": 1316,
          "cx": 130,
          "width": 250
        },
        {
          "y": 769,
          "cx": 230,
          "width": 250
        },
        {
          "y": 0,
          "cx": 180,
          "width": 250
        }
      ],
      "obstacles": [
        {
          "id": "gate_12",
          "type": "gate",
          "y": 3064,
          "leftX": 156,
          "rightX": 266,
          "postRadius": 14
        },
        {
          "id": "rock1",
          "type": "rock",
          "x": 135,
          "y": 2743,
          "radius": 22
        },
        {
          "id": "rock_7",
          "type": "rock",
          "x": 81,
          "y": 2381,
          "radius": 22
        },
        {
          "id": "log1",
          "type": "log",
          "y": 2150,
          "width": 60,
          "height": 22,
          "minX": 113,
          "maxX": 243,
          "speed": 26,
          "x": 175,
          "dir": -1
        },
        {
          "id": "gate_6",
          "type": "gate",
          "y": 1891,
          "leftX": 170,
          "rightX": 280,
          "postRadius": 14
        },
        {
          "id": "gate1",
          "type": "gate",
          "y": 1536,
          "leftX": 115,
          "rightX": 225,
          "postRadius": 14
        },
        {
          "id": "log_11",
          "type": "log",
          "x": 144,
          "y": 1394,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": -1,
          "minX": 84,
          "maxX": 204
        },
        {
          "id": "rock_10",
          "type": "rock",
          "x": 205,
          "y": 1208,
          "radius": 22
        },
        {
          "id": "rock2",
          "type": "rock",
          "x": 135,
          "y": 988,
          "radius": 22
        },
        {
          "id": "gate_9",
          "type": "gate",
          "y": 837,
          "leftX": 163,
          "rightX": 273,
          "postRadius": 14
        },
        {
          "id": "log_5",
          "type": "log",
          "x": 224,
          "y": 669,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": -1,
          "minX": 158,
          "maxX": 288
        },
        {
          "id": "log_8",
          "type": "log",
          "x": 210,
          "y": 466,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": 1,
          "minX": 150,
          "maxX": 270
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
    "targetTime": 165,
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
      "height": 3540,
      "startY": 3390,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 3540,
          "cx": 105,
          "width": 245
        },
        {
          "y": 2596,
          "cx": 105,
          "width": 245
        },
        {
          "y": 2007,
          "cx": 180,
          "width": 255
        },
        {
          "y": 1297,
          "cx": 255,
          "width": 245
        },
        {
          "y": 0,
          "cx": 255,
          "width": 245
        }
      ],
      "obstacles": [
        {
          "id": "log_14",
          "type": "log",
          "x": 105,
          "y": 3093,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": 1,
          "minX": 45,
          "maxX": 165
        },
        {
          "id": "rock_13",
          "type": "rock",
          "x": 50,
          "y": 2905,
          "radius": 22
        },
        {
          "id": "gate1",
          "type": "gate",
          "y": 2715,
          "leftX": 50,
          "rightX": 160,
          "postRadius": 14
        },
        {
          "id": "gate_12",
          "type": "gate",
          "y": 2530,
          "leftX": 58,
          "rightX": 168,
          "postRadius": 14
        },
        {
          "id": "rock_7",
          "type": "rock",
          "x": 76,
          "y": 2389,
          "radius": 22
        },
        {
          "id": "log_11",
          "type": "log",
          "x": 161,
          "y": 2155,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": -1,
          "minX": 101,
          "maxX": 221
        },
        {
          "id": "log1",
          "type": "log",
          "y": 2007,
          "width": 64,
          "height": 22,
          "minX": 115,
          "maxX": 245,
          "speed": 26,
          "x": 180,
          "dir": 1
        },
        {
          "id": "gate_6",
          "type": "gate",
          "y": 1664,
          "leftX": 161,
          "rightX": 271,
          "postRadius": 14
        },
        {
          "id": "log_5",
          "type": "log",
          "x": 242,
          "y": 1424,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": -1,
          "minX": 177,
          "maxX": 307
        },
        {
          "id": "rock_10",
          "type": "rock",
          "x": 310,
          "y": 1218,
          "radius": 22
        },
        {
          "id": "rock1",
          "type": "rock",
          "x": 200,
          "y": 1063,
          "radius": 22
        },
        {
          "id": "gate_9",
          "type": "gate",
          "y": 843,
          "leftX": 200,
          "rightX": 310,
          "postRadius": 14
        },
        {
          "id": "rock_4",
          "type": "rock",
          "x": 310,
          "y": 699,
          "radius": 22
        },
        {
          "id": "log_8",
          "type": "log",
          "x": 255,
          "y": 468,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": 1,
          "minX": 195,
          "maxX": 315
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
    "targetTime": 167,
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
      "height": 3570,
      "startY": 3420,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 3570,
          "cx": 180,
          "width": 250
        },
        {
          "y": 2812,
          "cx": 110,
          "width": 250
        },
        {
          "y": 2056,
          "cx": 250,
          "width": 250
        },
        {
          "y": 1298,
          "cx": 110,
          "width": 250
        },
        {
          "y": 649,
          "cx": 180,
          "width": 250
        },
        {
          "y": 0,
          "cx": 180,
          "width": 250
        }
      ],
      "obstacles": [
        {
          "id": "rock_10",
          "type": "rock",
          "x": 194,
          "y": 3121,
          "radius": 22
        },
        {
          "id": "log_8",
          "type": "log",
          "x": 121,
          "y": 2928,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": 1,
          "minX": 56,
          "maxX": 186
        },
        {
          "id": "rock1",
          "type": "rock",
          "x": 185,
          "y": 2705,
          "radius": 22
        },
        {
          "id": "rock_7",
          "type": "rock",
          "x": 126,
          "y": 2427,
          "radius": 22
        },
        {
          "id": "log1",
          "type": "log",
          "y": 2056,
          "width": 62,
          "height": 22,
          "minX": 185,
          "maxX": 315,
          "speed": 26,
          "x": 240,
          "dir": -1
        },
        {
          "id": "gate_6",
          "type": "gate",
          "y": 1673,
          "leftX": 124,
          "rightX": 234,
          "postRadius": 14
        },
        {
          "id": "gate1",
          "type": "gate",
          "y": 1407,
          "leftX": 75,
          "rightX": 185,
          "postRadius": 14
        },
        {
          "id": "log_5",
          "type": "log",
          "x": 124,
          "y": 1171,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": -1,
          "minX": 59,
          "maxX": 189
        },
        {
          "id": "rock2",
          "type": "rock",
          "x": 223,
          "y": 758,
          "radius": 22
        },
        {
          "id": "gate_9",
          "type": "gate",
          "y": 469,
          "leftX": 125,
          "rightX": 235,
          "postRadius": 14
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
    "targetTime": 162,
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
      "height": 3500,
      "startY": 3350,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 3500,
          "cx": 95,
          "width": 245
        },
        {
          "y": 2709,
          "cx": 135,
          "width": 245
        },
        {
          "y": 1920,
          "cx": 180,
          "width": 250
        },
        {
          "y": 1242,
          "cx": 225,
          "width": 245
        },
        {
          "y": 0,
          "cx": 265,
          "width": 245
        }
      ],
      "obstacles": [
        {
          "id": "gate_12",
          "type": "gate",
          "y": 3084,
          "leftX": 61,
          "rightX": 171,
          "postRadius": 14
        },
        {
          "id": "rock1",
          "type": "rock",
          "x": 74,
          "y": 2823,
          "radius": 22
        },
        {
          "id": "log_11",
          "type": "log",
          "x": 140,
          "y": 2617,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": -1,
          "minX": 80,
          "maxX": 200
        },
        {
          "id": "log_8",
          "type": "log",
          "x": 151,
          "y": 2428,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": 1,
          "minX": 86,
          "maxX": 216
        },
        {
          "id": "gate1",
          "type": "gate",
          "y": 2032,
          "leftX": 119,
          "rightX": 229,
          "postRadius": 14
        },
        {
          "id": "rock_7",
          "type": "rock",
          "x": 135,
          "y": 1765,
          "radius": 22
        },
        {
          "id": "rock_10",
          "type": "rock",
          "x": 261,
          "y": 1526,
          "radius": 22
        },
        {
          "id": "log1",
          "type": "log",
          "y": 1355,
          "width": 62,
          "height": 22,
          "minX": 153,
          "maxX": 283,
          "speed": 26,
          "x": 220,
          "dir": 1
        },
        {
          "id": "gate_6",
          "type": "gate",
          "y": 1101,
          "leftX": 175,
          "rightX": 285,
          "postRadius": 14
        },
        {
          "id": "log_5",
          "type": "log",
          "x": 237,
          "y": 880,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": -1,
          "minX": 172,
          "maxX": 302
        },
        {
          "id": "rock_4",
          "type": "rock",
          "x": 299,
          "y": 658,
          "radius": 22
        },
        {
          "id": "gate_9",
          "type": "gate",
          "y": 436,
          "leftX": 196,
          "rightX": 306,
          "postRadius": 14
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
    "targetTime": 165,
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
      "height": 3530,
      "startY": 3380,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 3530,
          "cx": 260,
          "width": 245
        },
        {
          "y": 2759,
          "cx": 215,
          "width": 245
        },
        {
          "y": 2097,
          "cx": 170,
          "width": 250
        },
        {
          "y": 1324,
          "cx": 125,
          "width": 245
        },
        {
          "y": 0,
          "cx": 100,
          "width": 245
        }
      ],
      "obstacles": [
        {
          "id": "gate_12",
          "type": "gate",
          "y": 3113,
          "leftX": 181,
          "rightX": 291,
          "postRadius": 14
        },
        {
          "id": "rock1",
          "type": "rock",
          "x": 276,
          "y": 2868,
          "radius": 22
        },
        {
          "id": "log_11",
          "type": "log",
          "x": 207,
          "y": 2641,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": -1,
          "minX": 147,
          "maxX": 267
        },
        {
          "id": "log_8",
          "type": "log",
          "x": 194,
          "y": 2455,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": 1,
          "minX": 129,
          "maxX": 259
        },
        {
          "id": "gate1",
          "type": "gate",
          "y": 2162,
          "leftX": 119,
          "rightX": 229,
          "postRadius": 14
        },
        {
          "id": "rock_10",
          "type": "rock",
          "x": 220,
          "y": 2011,
          "radius": 22
        },
        {
          "id": "rock_7",
          "type": "rock",
          "x": 96,
          "y": 1779,
          "radius": 22
        },
        {
          "id": "log1",
          "type": "log",
          "y": 1435,
          "width": 62,
          "height": 22,
          "minX": 66,
          "maxX": 196,
          "speed": 26,
          "x": 130,
          "dir": -1
        },
        {
          "id": "gate_6",
          "type": "gate",
          "y": 1103,
          "leftX": 66,
          "rightX": 176,
          "postRadius": 14
        },
        {
          "id": "log_5",
          "type": "log",
          "x": 117,
          "y": 878,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": -1,
          "minX": 52,
          "maxX": 182
        },
        {
          "id": "rock_4",
          "type": "rock",
          "x": 167,
          "y": 652,
          "radius": 22
        },
        {
          "id": "gate_9",
          "type": "gate",
          "y": 437,
          "leftX": 53,
          "rightX": 163,
          "postRadius": 14
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
    "targetTime": 166,
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
      "height": 3560,
      "startY": 3410,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 3560,
          "cx": 110,
          "width": 245
        },
        {
          "y": 2730,
          "cx": 250,
          "width": 250
        },
        {
          "y": 1781,
          "cx": 110,
          "width": 250
        },
        {
          "y": 949,
          "cx": 250,
          "width": 245
        },
        {
          "y": 0,
          "cx": 250,
          "width": 245
        }
      ],
      "obstacles": [
        {
          "id": "log_11",
          "type": "log",
          "x": 181,
          "y": 3141,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": -1,
          "minX": 121,
          "maxX": 241
        },
        {
          "id": "rock_10",
          "type": "rock",
          "x": 262,
          "y": 2982,
          "radius": 22
        },
        {
          "id": "gate1",
          "type": "gate",
          "y": 2730,
          "leftX": 195,
          "rightX": 305,
          "postRadius": 14
        },
        {
          "id": "log_8",
          "type": "log",
          "x": 211,
          "y": 2464,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": 1,
          "minX": 146,
          "maxX": 276
        },
        {
          "id": "rock_7",
          "type": "rock",
          "x": 123,
          "y": 2240,
          "radius": 22
        },
        {
          "id": "log1",
          "type": "log",
          "y": 1899,
          "width": 62,
          "height": 22,
          "minX": 62,
          "maxX": 192,
          "speed": 26,
          "x": 120,
          "dir": 1
        },
        {
          "id": "gate_6",
          "type": "gate",
          "y": 1573,
          "leftX": 90,
          "rightX": 200,
          "postRadius": 14
        },
        {
          "id": "log_5",
          "type": "log",
          "x": 182,
          "y": 1351,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": -1,
          "minX": 117,
          "maxX": 247
        },
        {
          "id": "gate2",
          "type": "gate",
          "y": 949,
          "leftX": 195,
          "rightX": 305,
          "postRadius": 14
        },
        {
          "id": "rock_4",
          "type": "rock",
          "x": 305,
          "y": 681,
          "radius": 22
        },
        {
          "id": "gate_9",
          "type": "gate",
          "y": 439,
          "leftX": 195,
          "rightX": 305,
          "postRadius": 14
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
    "targetTime": 166,
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
      "height": 3590,
      "startY": 3440,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 3590,
          "cx": 180,
          "width": 250
        },
        {
          "y": 2437,
          "cx": 180,
          "width": 230
        },
        {
          "y": 1411,
          "cx": 180,
          "width": 240
        },
        {
          "y": 513,
          "cx": 180,
          "width": 215
        },
        {
          "y": 0,
          "cx": 180,
          "width": 225
        }
      ],
      "obstacles": [
        {
          "id": "gate_12",
          "type": "gate",
          "y": 3169,
          "leftX": 125,
          "rightX": 235,
          "postRadius": 14
        },
        {
          "id": "rock_7",
          "type": "rock",
          "x": 125,
          "y": 2908,
          "radius": 22
        },
        {
          "id": "rock1",
          "type": "rock",
          "x": 125,
          "y": 2564,
          "radius": 22
        },
        {
          "id": "log_11",
          "type": "log",
          "x": 180,
          "y": 2367,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": -1,
          "minX": 120,
          "maxX": 240
        },
        {
          "id": "rock_10",
          "type": "rock",
          "x": 235,
          "y": 2206,
          "radius": 22
        },
        {
          "id": "gate_6",
          "type": "gate",
          "y": 2032,
          "leftX": 125,
          "rightX": 235,
          "postRadius": 14
        },
        {
          "id": "log1",
          "type": "log",
          "y": 1795,
          "width": 58,
          "height": 22,
          "minX": 115,
          "maxX": 245,
          "speed": 26,
          "x": 180,
          "dir": 1
        },
        {
          "id": "gate_9",
          "type": "gate",
          "y": 1564,
          "leftX": 125,
          "rightX": 235,
          "postRadius": 14
        },
        {
          "id": "log_5",
          "type": "log",
          "x": 180,
          "y": 1373,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": -1,
          "minX": 115,
          "maxX": 245
        },
        {
          "id": "gate1",
          "type": "gate",
          "y": 1026,
          "leftX": 125,
          "rightX": 235,
          "postRadius": 14
        },
        {
          "id": "rock_4",
          "type": "rock",
          "x": 235,
          "y": 716,
          "radius": 22
        },
        {
          "id": "log_8",
          "type": "log",
          "x": 180,
          "y": 441,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": 1,
          "minX": 120,
          "maxX": 240
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
    "targetTime": 173,
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
      "height": 3620,
      "startY": 3470,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 3620,
          "cx": 250,
          "width": 245
        },
        {
          "y": 2586,
          "cx": 250,
          "width": 245
        },
        {
          "y": 1940,
          "cx": 180,
          "width": 250
        },
        {
          "y": 1034,
          "cx": 110,
          "width": 245
        },
        {
          "y": 0,
          "cx": 110,
          "width": 245
        }
      ],
      "obstacles": [
        {
          "id": "gate_12",
          "type": "gate",
          "y": 3198,
          "leftX": 195,
          "rightX": 305,
          "postRadius": 14
        },
        {
          "id": "rock_7",
          "type": "rock",
          "x": 195,
          "y": 2933,
          "radius": 22
        },
        {
          "id": "gate1",
          "type": "gate",
          "y": 2586,
          "leftX": 195,
          "rightX": 305,
          "postRadius": 14
        },
        {
          "id": "log_11",
          "type": "log",
          "x": 228,
          "y": 2387,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": -1,
          "minX": 168,
          "maxX": 288
        },
        {
          "id": "rock_10",
          "type": "rock",
          "x": 266,
          "y": 2225,
          "radius": 22
        },
        {
          "id": "gate_6",
          "type": "gate",
          "y": 2049,
          "leftX": 137,
          "rightX": 247,
          "postRadius": 14
        },
        {
          "id": "log1",
          "type": "log",
          "y": 1810,
          "width": 62,
          "height": 22,
          "minX": 105,
          "maxX": 235,
          "speed": 26,
          "x": 180,
          "dir": -1
        },
        {
          "id": "gate_9",
          "type": "gate",
          "y": 1577,
          "leftX": 97,
          "rightX": 207,
          "postRadius": 14
        },
        {
          "id": "log_5",
          "type": "log",
          "x": 137,
          "y": 1385,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": -1,
          "minX": 72,
          "maxX": 202
        },
        {
          "id": "rock1",
          "type": "rock",
          "x": 165,
          "y": 983,
          "radius": 22
        },
        {
          "id": "rock_4",
          "type": "rock",
          "x": 165,
          "y": 722,
          "radius": 22
        },
        {
          "id": "log_8",
          "type": "log",
          "x": 110,
          "y": 442,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": 1,
          "minX": 50,
          "maxX": 170
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
    "targetTime": 174,
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
      "height": 3650,
      "startY": 3500,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 3650,
          "cx": 100,
          "width": 245
        },
        {
          "y": 1956,
          "cx": 260,
          "width": 250
        },
        {
          "y": 1043,
          "cx": 130,
          "width": 245
        },
        {
          "y": 0,
          "cx": 130,
          "width": 245
        }
      ],
      "obstacles": [
        {
          "id": "rock_13",
          "type": "rock",
          "x": 85,
          "y": 3226,
          "radius": 22
        },
        {
          "id": "gate_12",
          "type": "gate",
          "y": 3063,
          "leftX": 100,
          "rightX": 210,
          "postRadius": 14
        },
        {
          "id": "rock1",
          "type": "rock",
          "x": 119,
          "y": 2868,
          "radius": 22
        },
        {
          "id": "log_11",
          "type": "log",
          "x": 202,
          "y": 2572,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": -1,
          "minX": 142,
          "maxX": 262
        },
        {
          "id": "gate_6",
          "type": "gate",
          "y": 2288,
          "leftX": 174,
          "rightX": 284,
          "postRadius": 14
        },
        {
          "id": "log1",
          "type": "log",
          "y": 1956,
          "width": 62,
          "height": 22,
          "minX": 195,
          "maxX": 325,
          "speed": 26,
          "x": 250,
          "dir": 1
        },
        {
          "id": "log_5",
          "type": "log",
          "x": 212,
          "y": 1620,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": -1,
          "minX": 147,
          "maxX": 277
        },
        {
          "id": "rock_10",
          "type": "rock",
          "x": 240,
          "y": 1426,
          "radius": 22
        },
        {
          "id": "rock_4",
          "type": "rock",
          "x": 204,
          "y": 1174,
          "radius": 22
        },
        {
          "id": "gate1",
          "type": "gate",
          "y": 913,
          "leftX": 75,
          "rightX": 185,
          "postRadius": 14
        },
        {
          "id": "gate_9",
          "type": "gate",
          "y": 771,
          "leftX": 75,
          "rightX": 185,
          "postRadius": 14
        },
        {
          "id": "log_8",
          "type": "log",
          "x": 130,
          "y": 607,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": 1,
          "minX": 70,
          "maxX": 190
        },
        {
          "id": "rock_7",
          "type": "rock",
          "x": 75,
          "y": 444,
          "radius": 22
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
    "targetTime": 178,
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
      "height": 3680,
      "startY": 3530,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 3680,
          "cx": 100,
          "width": 245
        },
        {
          "y": 2848,
          "cx": 260,
          "width": 250
        },
        {
          "y": 1424,
          "cx": 260,
          "width": 250
        },
        {
          "y": 832,
          "cx": 100,
          "width": 245
        },
        {
          "y": 0,
          "cx": 100,
          "width": 245
        }
      ],
      "obstacles": [
        {
          "id": "rock_13",
          "type": "rock",
          "x": 127,
          "y": 3255,
          "radius": 22
        },
        {
          "id": "gate_12",
          "type": "gate",
          "y": 3089,
          "leftX": 159,
          "rightX": 269,
          "postRadius": 14
        },
        {
          "id": "rock1",
          "type": "rock",
          "x": 205,
          "y": 2848,
          "radius": 22
        },
        {
          "id": "rock_7",
          "type": "rock",
          "x": 205,
          "y": 2553,
          "radius": 22
        },
        {
          "id": "gate1",
          "type": "gate",
          "y": 2136,
          "leftX": 205,
          "rightX": 315,
          "postRadius": 14
        },
        {
          "id": "gate_6",
          "type": "gate",
          "y": 1856,
          "leftX": 205,
          "rightX": 315,
          "postRadius": 14
        },
        {
          "id": "log_11",
          "type": "log",
          "x": 260,
          "y": 1602,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": -1,
          "minX": 200,
          "maxX": 320
        },
        {
          "id": "log1",
          "type": "log",
          "y": 1424,
          "width": 62,
          "height": 22,
          "minX": 195,
          "maxX": 325,
          "speed": 26,
          "x": 250,
          "dir": -1
        },
        {
          "id": "log_5",
          "type": "log",
          "x": 188,
          "y": 1158,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": -1,
          "minX": 123,
          "maxX": 253
        },
        {
          "id": "rock_10",
          "type": "rock",
          "x": 184,
          "y": 941,
          "radius": 22
        },
        {
          "id": "rock2",
          "type": "rock",
          "x": 155,
          "y": 760,
          "radius": 22
        },
        {
          "id": "gate_9",
          "type": "gate",
          "y": 611,
          "leftX": 45,
          "rightX": 155,
          "postRadius": 14
        },
        {
          "id": "log_8",
          "type": "log",
          "x": 100,
          "y": 445,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": 1,
          "minX": 40,
          "maxX": 160
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
    "targetTime": 179,
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
      "height": 3710,
      "startY": 3560,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 3710,
          "cx": 250,
          "width": 245
        },
        {
          "y": 2551,
          "cx": 250,
          "width": 245
        },
        {
          "y": 1740,
          "cx": 110,
          "width": 250
        },
        {
          "y": 927,
          "cx": 250,
          "width": 250
        },
        {
          "y": 349,
          "cx": 110,
          "width": 245
        },
        {
          "y": 0,
          "cx": 110,
          "width": 245
        }
      ],
      "obstacles": [
        {
          "id": "gate_12",
          "type": "gate",
          "y": 3283,
          "leftX": 195,
          "rightX": 305,
          "postRadius": 14
        },
        {
          "id": "log_11",
          "type": "log",
          "x": 250,
          "y": 3116,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": -1,
          "minX": 190,
          "maxX": 310
        },
        {
          "id": "rock1",
          "type": "rock",
          "x": 195,
          "y": 2899,
          "radius": 22
        },
        {
          "id": "log_8",
          "type": "log",
          "x": 250,
          "y": 2581,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": 1,
          "minX": 185,
          "maxX": 315
        },
        {
          "id": "rock_7",
          "type": "rock",
          "x": 159,
          "y": 2344,
          "radius": 22
        },
        {
          "id": "gate_6",
          "type": "gate",
          "y": 2106,
          "leftX": 118,
          "rightX": 228,
          "postRadius": 14
        },
        {
          "id": "rock_10",
          "type": "rock",
          "x": 201,
          "y": 1948,
          "radius": 22
        },
        {
          "id": "gate1",
          "type": "gate",
          "y": 1740,
          "leftX": 55,
          "rightX": 165,
          "postRadius": 14
        },
        {
          "id": "log_5",
          "type": "log",
          "x": 169,
          "y": 1396,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": -1,
          "minX": 104,
          "maxX": 234
        },
        {
          "id": "log1",
          "type": "log",
          "y": 1044,
          "width": 62,
          "height": 22,
          "minX": 165,
          "maxX": 295,
          "speed": 26,
          "x": 240,
          "dir": 1
        },
        {
          "id": "rock_4",
          "type": "rock",
          "x": 246,
          "y": 685,
          "radius": 22
        },
        {
          "id": "gate_9",
          "type": "gate",
          "y": 447,
          "leftX": 79,
          "rightX": 189,
          "postRadius": 14
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
    "targetTime": 174,
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
      "height": 3740,
      "startY": 3590,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 3740,
          "cx": 100,
          "width": 245
        },
        {
          "y": 2493,
          "cx": 100,
          "width": 245
        },
        {
          "y": 1496,
          "cx": 260,
          "width": 250
        },
        {
          "y": 0,
          "cx": 260,
          "width": 245
        }
      ],
      "obstacles": [
        {
          "id": "rock_13",
          "type": "rock",
          "x": 45,
          "y": 3312,
          "radius": 22
        },
        {
          "id": "log_8",
          "type": "log",
          "x": 100,
          "y": 3056,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": 1,
          "minX": 35,
          "maxX": 165
        },
        {
          "id": "gate_12",
          "type": "gate",
          "y": 2806,
          "leftX": 45,
          "rightX": 155,
          "postRadius": 14
        },
        {
          "id": "gate1",
          "type": "gate",
          "y": 2619,
          "leftX": 45,
          "rightX": 155,
          "postRadius": 14
        },
        {
          "id": "rock_7",
          "type": "rock",
          "x": 67,
          "y": 2353,
          "radius": 22
        },
        {
          "id": "gate_6",
          "type": "gate",
          "y": 2120,
          "leftX": 105,
          "rightX": 215,
          "postRadius": 14
        },
        {
          "id": "log_11",
          "type": "log",
          "x": 185,
          "y": 1964,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": -1,
          "minX": 125,
          "maxX": 245
        },
        {
          "id": "log1",
          "type": "log",
          "y": 1745,
          "width": 62,
          "height": 22,
          "minX": 155,
          "maxX": 285,
          "speed": 26,
          "x": 215,
          "dir": 1
        },
        {
          "id": "log_5",
          "type": "log",
          "x": 260,
          "y": 1419,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": -1,
          "minX": 195,
          "maxX": 325
        },
        {
          "id": "rock_4",
          "type": "rock",
          "x": 315,
          "y": 1184,
          "radius": 22
        },
        {
          "id": "rock1",
          "type": "rock",
          "x": 205,
          "y": 873,
          "radius": 22
        },
        {
          "id": "rock_10",
          "type": "rock",
          "x": 315,
          "y": 617,
          "radius": 22
        },
        {
          "id": "gate_9",
          "type": "gate",
          "y": 448,
          "leftX": 205,
          "rightX": 315,
          "postRadius": 14
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
    "targetTime": 180,
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
      "height": 3770,
      "startY": 3620,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 3770,
          "cx": 100,
          "width": 245
        },
        {
          "y": 2021,
          "cx": 180,
          "width": 250
        },
        {
          "y": 0,
          "cx": 260,
          "width": 245
        }
      ],
      "obstacles": [
        {
          "id": "log_14",
          "type": "log",
          "x": 120,
          "y": 3340,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": 1,
          "minX": 60,
          "maxX": 180
        },
        {
          "id": "rock_13",
          "type": "rock",
          "x": 72,
          "y": 3170,
          "radius": 22
        },
        {
          "id": "gate_12",
          "type": "gate",
          "y": 3000,
          "leftX": 80,
          "rightX": 190,
          "postRadius": 14
        },
        {
          "id": "rock1",
          "type": "rock",
          "x": 88,
          "y": 2828,
          "radius": 22
        },
        {
          "id": "log_11",
          "type": "log",
          "x": 151,
          "y": 2660,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": -1,
          "minX": 91,
          "maxX": 211
        },
        {
          "id": "gate_6",
          "type": "gate",
          "y": 2363,
          "leftX": 109,
          "rightX": 219,
          "postRadius": 14
        },
        {
          "id": "gate1",
          "type": "gate",
          "y": 2021,
          "leftX": 125,
          "rightX": 235,
          "postRadius": 14
        },
        {
          "id": "rock_10",
          "type": "rock",
          "x": 243,
          "y": 1810,
          "radius": 22
        },
        {
          "id": "gate_9",
          "type": "gate",
          "y": 1640,
          "leftX": 140,
          "rightX": 250,
          "postRadius": 14
        },
        {
          "id": "log_5",
          "type": "log",
          "x": 203,
          "y": 1442,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": -1,
          "minX": 138,
          "maxX": 268
        },
        {
          "id": "log_8",
          "type": "log",
          "x": 209,
          "y": 1300,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": 1,
          "minX": 149,
          "maxX": 269
        },
        {
          "id": "log1",
          "type": "log",
          "y": 1077,
          "width": 60,
          "height": 22,
          "minX": 152,
          "maxX": 282,
          "speed": 26,
          "x": 215,
          "dir": -1
        },
        {
          "id": "rock_4",
          "type": "rock",
          "x": 285,
          "y": 752,
          "radius": 22
        },
        {
          "id": "rock_7",
          "type": "rock",
          "x": 187,
          "y": 450,
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
    "targetTime": 178,
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
      "height": 3800,
      "startY": 3650,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 3800,
          "cx": 180,
          "width": 250
        },
        {
          "y": 2879,
          "cx": 100,
          "width": 245
        },
        {
          "y": 1958,
          "cx": 260,
          "width": 250
        },
        {
          "y": 1037,
          "cx": 100,
          "width": 245
        },
        {
          "y": 0,
          "cx": 110,
          "width": 245
        }
      ],
      "obstacles": [
        {
          "id": "gate_12",
          "type": "gate",
          "y": 3368,
          "leftX": 87,
          "rightX": 197,
          "postRadius": 14
        },
        {
          "id": "gate_9",
          "type": "gate",
          "y": 3139,
          "leftX": 68,
          "rightX": 178,
          "postRadius": 14
        },
        {
          "id": "rock1",
          "type": "rock",
          "x": 65,
          "y": 2763,
          "radius": 22
        },
        {
          "id": "log_8",
          "type": "log",
          "x": 182,
          "y": 2405,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": 1,
          "minX": 117,
          "maxX": 247
        },
        {
          "id": "log_11",
          "type": "log",
          "x": 224,
          "y": 2167,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": -1,
          "minX": 164,
          "maxX": 284
        },
        {
          "id": "log1",
          "type": "log",
          "y": 1958,
          "width": 62,
          "height": 22,
          "minX": 195,
          "maxX": 325,
          "speed": 26,
          "x": 250,
          "dir": 1
        },
        {
          "id": "rock_7",
          "type": "rock",
          "x": 155,
          "y": 1670,
          "radius": 22
        },
        {
          "id": "gate_6",
          "type": "gate",
          "y": 1425,
          "leftX": 112,
          "rightX": 222,
          "postRadius": 14
        },
        {
          "id": "gate1",
          "type": "gate",
          "y": 1151,
          "leftX": 65,
          "rightX": 175,
          "postRadius": 14
        },
        {
          "id": "log_5",
          "type": "log",
          "x": 101,
          "y": 936,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": -1,
          "minX": 36,
          "maxX": 166
        },
        {
          "id": "rock_4",
          "type": "rock",
          "x": 158,
          "y": 691,
          "radius": 22
        },
        {
          "id": "rock_10",
          "type": "rock",
          "x": 161,
          "y": 452,
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
    "targetTime": 179,
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
      "height": 3830,
      "startY": 3680,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 3830,
          "cx": 250,
          "width": 245
        },
        {
          "y": 3017,
          "cx": 110,
          "width": 245
        },
        {
          "y": 2321,
          "cx": 250,
          "width": 250
        },
        {
          "y": 1625,
          "cx": 110,
          "width": 250
        },
        {
          "y": 928,
          "cx": 250,
          "width": 245
        },
        {
          "y": 0,
          "cx": 110,
          "width": 245
        }
      ],
      "obstacles": [
        {
          "id": "log_14",
          "type": "log",
          "x": 175,
          "y": 3397,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": 1,
          "minX": 115,
          "maxX": 235
        },
        {
          "id": "gate_9",
          "type": "gate",
          "y": 3164,
          "leftX": 80,
          "rightX": 190,
          "postRadius": 14
        },
        {
          "id": "gate1",
          "type": "gate",
          "y": 2902,
          "leftX": 78,
          "rightX": 188,
          "postRadius": 14
        },
        {
          "id": "log_8",
          "type": "log",
          "x": 180,
          "y": 2671,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": 1,
          "minX": 115,
          "maxX": 245
        },
        {
          "id": "rock_7",
          "type": "rock",
          "x": 174,
          "y": 2424,
          "radius": 22
        },
        {
          "id": "log1",
          "type": "log",
          "y": 2205,
          "width": 62,
          "height": 22,
          "minX": 162,
          "maxX": 292,
          "speed": 26,
          "x": 240,
          "dir": -1
        },
        {
          "id": "gate_6",
          "type": "gate",
          "y": 1930,
          "leftX": 116,
          "rightX": 226,
          "postRadius": 14
        },
        {
          "id": "rock_13",
          "type": "rock",
          "x": 63,
          "y": 1665,
          "radius": 22
        },
        {
          "id": "rock1",
          "type": "rock",
          "x": 78,
          "y": 1509,
          "radius": 22
        },
        {
          "id": "log_5",
          "type": "log",
          "x": 197,
          "y": 1190,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": -1,
          "minX": 132,
          "maxX": 262
        },
        {
          "id": "gate_12",
          "type": "gate",
          "y": 973,
          "leftX": 186,
          "rightX": 296,
          "postRadius": 14
        },
        {
          "id": "gate2",
          "type": "gate",
          "y": 813,
          "leftX": 178,
          "rightX": 288,
          "postRadius": 14
        },
        {
          "id": "log_11",
          "type": "log",
          "x": 204,
          "y": 626,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": -1,
          "minX": 144,
          "maxX": 264
        },
        {
          "id": "rock_10",
          "type": "rock",
          "x": 233,
          "y": 453,
          "radius": 22
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
    "targetTime": 182,
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
      "height": 3860,
      "startY": 3710,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.979,
      "waypoints": [
        {
          "y": 3860,
          "cx": 100,
          "width": 245
        },
        {
          "y": 3066,
          "cx": 180,
          "width": 250
        },
        {
          "y": 2271,
          "cx": 100,
          "width": 250
        },
        {
          "y": 1475,
          "cx": 180,
          "width": 250
        },
        {
          "y": 795,
          "cx": 260,
          "width": 245
        },
        {
          "y": 0,
          "cx": 260,
          "width": 245
        }
      ],
      "obstacles": [
        {
          "id": "gate_15",
          "type": "gate",
          "y": 3425,
          "leftX": 89,
          "rightX": 199,
          "postRadius": 14
        },
        {
          "id": "log_14",
          "type": "log",
          "x": 161,
          "y": 3251,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": 1,
          "minX": 101,
          "maxX": 221
        },
        {
          "id": "rock1",
          "type": "rock",
          "x": 125,
          "y": 3066,
          "radius": 22
        },
        {
          "id": "rock_13",
          "type": "rock",
          "x": 108,
          "y": 2901,
          "radius": 22
        },
        {
          "id": "log_8",
          "type": "log",
          "x": 143,
          "y": 2697,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": 1,
          "minX": 78,
          "maxX": 208
        },
        {
          "id": "gate_12",
          "type": "gate",
          "y": 2552,
          "leftX": 73,
          "rightX": 183,
          "postRadius": 14
        },
        {
          "id": "log1",
          "type": "log",
          "y": 2271,
          "width": 62,
          "height": 22,
          "minX": 35,
          "maxX": 165,
          "speed": 26,
          "x": 120,
          "dir": 1
        },
        {
          "id": "rock_7",
          "type": "rock",
          "x": 78,
          "y": 1945,
          "radius": 22
        },
        {
          "id": "gate_6",
          "type": "gate",
          "y": 1693,
          "leftX": 103,
          "rightX": 213,
          "postRadius": 14
        },
        {
          "id": "gate1",
          "type": "gate",
          "y": 1475,
          "leftX": 125,
          "rightX": 235,
          "postRadius": 14
        },
        {
          "id": "log_5",
          "type": "log",
          "x": 213,
          "y": 1192,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": -1,
          "minX": 148,
          "maxX": 278
        },
        {
          "id": "log_11",
          "type": "log",
          "x": 238,
          "y": 979,
          "width": 76,
          "height": 20,
          "speed": 24,
          "dir": -1,
          "minX": 178,
          "maxX": 298
        },
        {
          "id": "rock2",
          "type": "rock",
          "x": 205,
          "y": 795,
          "radius": 22
        },
        {
          "id": "rock_10",
          "type": "rock",
          "x": 315,
          "y": 629,
          "radius": 22
        },
        {
          "id": "gate_9",
          "type": "gate",
          "y": 455,
          "leftX": 205,
          "rightX": 315,
          "postRadius": 14
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
    "targetTime": 128,
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
      "height": 3850,
      "startX": 180,
      "startY": 3700,
      "finishX": 180,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.99,
      "waypoints": [
        {
          "y": 3850,
          "cx": 180,
          "width": 225
        },
        {
          "y": 3208,
          "cx": 218,
          "width": 225
        },
        {
          "y": 2567,
          "cx": 142,
          "width": 225
        },
        {
          "y": 1926,
          "cx": 218,
          "width": 217
        },
        {
          "y": 1283,
          "cx": 142,
          "width": 217
        },
        {
          "y": 642,
          "cx": 218,
          "width": 225
        },
        {
          "y": 0,
          "cx": 180,
          "width": 225
        }
      ],
      "obstacles": [
        {
          "id": "rock_9",
          "type": "rock",
          "x": 262,
          "y": 3394,
          "radius": 22
        },
        {
          "id": "rock_10",
          "type": "rock",
          "x": 159,
          "y": 3276,
          "radius": 22
        },
        {
          "id": "rock_11",
          "type": "rock",
          "x": 267,
          "y": 3159,
          "radius": 22
        },
        {
          "id": "log_4",
          "type": "log",
          "y": 3042,
          "width": 63,
          "height": 22,
          "minX": 133,
          "maxX": 263,
          "speed": 26,
          "x": 219,
          "dir": -1
        },
        {
          "id": "rock_12",
          "type": "rock",
          "x": 129,
          "y": 2925,
          "radius": 22
        },
        {
          "id": "gate_1",
          "type": "gate",
          "y": 2806,
          "leftX": 115,
          "rightX": 225,
          "postRadius": 14
        },
        {
          "id": "rock_13",
          "type": "rock",
          "x": 211,
          "y": 2689,
          "radius": 22
        },
        {
          "id": "log_5",
          "type": "log",
          "y": 2572,
          "width": 63,
          "height": 22,
          "minX": 78,
          "maxX": 208,
          "speed": 26,
          "x": 118,
          "dir": 1
        },
        {
          "id": "rock_14",
          "type": "rock",
          "x": 101,
          "y": 2453,
          "radius": 22
        },
        {
          "id": "rock_15",
          "type": "rock",
          "x": 224,
          "y": 2336,
          "radius": 22
        },
        {
          "id": "rock_16",
          "type": "rock",
          "x": 128,
          "y": 2219,
          "radius": 22
        },
        {
          "id": "rock_17",
          "type": "rock",
          "x": 252,
          "y": 2101,
          "radius": 22
        },
        {
          "id": "gate_2",
          "type": "gate",
          "y": 1984,
          "leftX": 156,
          "rightX": 266,
          "postRadius": 14
        },
        {
          "id": "log_6",
          "type": "log",
          "y": 1866,
          "width": 60,
          "height": 22,
          "minX": 146,
          "maxX": 276,
          "speed": 26,
          "x": 239,
          "dir": -1
        },
        {
          "id": "rock_18",
          "type": "rock",
          "x": 142,
          "y": 1749,
          "radius": 22
        },
        {
          "id": "rock_19",
          "type": "rock",
          "x": 238,
          "y": 1631,
          "radius": 22
        },
        {
          "id": "rock_20",
          "type": "rock",
          "x": 114,
          "y": 1514,
          "radius": 22
        },
        {
          "id": "log_7",
          "type": "log",
          "y": 1397,
          "width": 60,
          "height": 22,
          "minX": 90,
          "maxX": 220,
          "speed": 26,
          "x": 126,
          "dir": 1
        },
        {
          "id": "rock_21",
          "type": "rock",
          "x": 197,
          "y": 1279,
          "radius": 22
        },
        {
          "id": "rock_22",
          "type": "rock",
          "x": 101,
          "y": 1161,
          "radius": 22
        },
        {
          "id": "gate_3",
          "type": "gate",
          "y": 1045,
          "leftX": 115,
          "rightX": 225,
          "postRadius": 14
        },
        {
          "id": "rock_23",
          "type": "rock",
          "x": 239,
          "y": 925,
          "radius": 22
        },
        {
          "id": "log_8",
          "type": "log",
          "y": 808,
          "width": 62,
          "height": 22,
          "minX": 133,
          "maxX": 263,
          "speed": 26,
          "x": 231,
          "dir": -1
        },
        {
          "id": "rock_24",
          "type": "rock",
          "x": 157,
          "y": 691,
          "radius": 22
        },
        {
          "id": "rock_25",
          "type": "rock",
          "x": 269,
          "y": 574,
          "radius": 22
        },
        {
          "id": "rock_26",
          "type": "rock",
          "x": 152,
          "y": 456,
          "radius": 22
        }
      ]
    },
    "zone": "મહા સંગ્રામ : બાપ નો બાપ (The Ultimate Clashes)"
  },
  {
    "id": 45,
    "name": "Dharal No Chamkaro",
    "targetTime": 128,
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
      "height": 3900,
      "startX": 180,
      "startY": 3750,
      "finishX": 180,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.99,
      "waypoints": [
        {
          "y": 3900,
          "cx": 180,
          "width": 220
        },
        {
          "y": 3249,
          "cx": 220,
          "width": 220
        },
        {
          "y": 2600,
          "cx": 140,
          "width": 220
        },
        {
          "y": 1951,
          "cx": 220,
          "width": 212
        },
        {
          "y": 1300,
          "cx": 140,
          "width": 212
        },
        {
          "y": 651,
          "cx": 220,
          "width": 220
        },
        {
          "y": 0,
          "cx": 180,
          "width": 220
        }
      ],
      "obstacles": [
        {
          "id": "rock_11",
          "type": "rock",
          "x": 263,
          "y": 3443,
          "radius": 22
        },
        {
          "id": "rock_12",
          "type": "rock",
          "x": 161,
          "y": 3322,
          "radius": 22
        },
        {
          "id": "log_4",
          "type": "log",
          "y": 3203,
          "width": 61,
          "height": 22,
          "minX": 149,
          "maxX": 279,
          "speed": 26,
          "x": 235,
          "dir": -1
        },
        {
          "id": "rock_13",
          "type": "rock",
          "x": 255,
          "y": 3083,
          "radius": 22
        },
        {
          "id": "rock_14",
          "type": "rock",
          "x": 130,
          "y": 2964,
          "radius": 22
        },
        {
          "id": "log_5",
          "type": "log",
          "y": 2846,
          "width": 61,
          "height": 22,
          "minX": 105,
          "maxX": 235,
          "speed": 26,
          "x": 136,
          "dir": 1
        },
        {
          "id": "gate_1",
          "type": "gate",
          "y": 2725,
          "leftX": 100,
          "rightX": 210,
          "postRadius": 14
        },
        {
          "id": "rock_15",
          "type": "rock",
          "x": 196,
          "y": 2607,
          "radius": 22
        },
        {
          "id": "rock_16",
          "type": "rock",
          "x": 99,
          "y": 2487,
          "radius": 22
        },
        {
          "id": "log_6",
          "type": "log",
          "y": 2367,
          "width": 59,
          "height": 22,
          "minX": 104,
          "maxX": 234,
          "speed": 26,
          "x": 202,
          "dir": -1
        },
        {
          "id": "rock_17",
          "type": "rock",
          "x": 238,
          "y": 2249,
          "radius": 22
        },
        {
          "id": "log_7",
          "type": "log",
          "y": 2129,
          "width": 58,
          "height": 22,
          "minX": 133,
          "maxX": 263,
          "speed": 26,
          "x": 180,
          "dir": 1
        },
        {
          "id": "rock_18",
          "type": "rock",
          "x": 158,
          "y": 2010,
          "radius": 22
        },
        {
          "id": "gate_2",
          "type": "gate",
          "y": 1890,
          "leftX": 158,
          "rightX": 268,
          "postRadius": 14
        },
        {
          "id": "rock_19",
          "type": "rock",
          "x": 253,
          "y": 1771,
          "radius": 22
        },
        {
          "id": "rock_20",
          "type": "rock",
          "x": 128,
          "y": 1651,
          "radius": 22
        },
        {
          "id": "rock_21",
          "type": "rock",
          "x": 224,
          "y": 1533,
          "radius": 22
        },
        {
          "id": "log_8",
          "type": "log",
          "y": 1413,
          "width": 58,
          "height": 22,
          "minX": 89,
          "maxX": 219,
          "speed": 26,
          "x": 186,
          "dir": -1
        },
        {
          "id": "rock_22",
          "type": "rock",
          "x": 86,
          "y": 1293,
          "radius": 22
        },
        {
          "id": "log_9",
          "type": "log",
          "y": 1175,
          "width": 58,
          "height": 22,
          "minX": 90,
          "maxX": 220,
          "speed": 26,
          "x": 123,
          "dir": 1
        },
        {
          "id": "gate_3",
          "type": "gate",
          "y": 1054,
          "leftX": 115,
          "rightX": 225,
          "postRadius": 14
        },
        {
          "id": "rock_23",
          "type": "rock",
          "x": 240,
          "y": 936,
          "radius": 22
        },
        {
          "id": "rock_24",
          "type": "rock",
          "x": 145,
          "y": 817,
          "radius": 22
        },
        {
          "id": "rock_25",
          "type": "rock",
          "x": 269,
          "y": 697,
          "radius": 22
        },
        {
          "id": "log_10",
          "type": "log",
          "y": 578,
          "width": 61,
          "height": 22,
          "minX": 151,
          "maxX": 281,
          "speed": 26,
          "x": 248,
          "dir": -1
        },
        {
          "id": "rock_26",
          "type": "rock",
          "x": 153,
          "y": 457,
          "radius": 22
        }
      ]
    },
    "zone": "મહા સંગ્રામ : બાપ નો બાપ (The Ultimate Clashes)"
  },
  {
    "id": 46,
    "name": "Khalasi On The River",
    "targetTime": 129,
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
      "height": 3950,
      "startX": 180,
      "startY": 3800,
      "finishX": 180,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.99,
      "waypoints": [
        {
          "y": 3950,
          "cx": 180,
          "width": 220
        },
        {
          "y": 3291,
          "cx": 218,
          "width": 220
        },
        {
          "y": 2634,
          "cx": 142,
          "width": 220
        },
        {
          "y": 1975,
          "cx": 218,
          "width": 212
        },
        {
          "y": 1316,
          "cx": 142,
          "width": 212
        },
        {
          "y": 659,
          "cx": 218,
          "width": 220
        },
        {
          "y": 0,
          "cx": 180,
          "width": 220
        }
      ],
      "obstacles": [
        {
          "id": "rock_12",
          "type": "rock",
          "x": 261,
          "y": 3493,
          "radius": 22
        },
        {
          "id": "log_4",
          "type": "log",
          "y": 3377,
          "width": 61,
          "height": 22,
          "minX": 148,
          "maxX": 278,
          "speed": 26,
          "x": 239,
          "dir": -1
        },
        {
          "id": "rock_13",
          "type": "rock",
          "x": 159,
          "y": 3260,
          "radius": 22
        },
        {
          "id": "rock_14",
          "type": "rock",
          "x": 256,
          "y": 3143,
          "radius": 22
        },
        {
          "id": "log_5",
          "type": "log",
          "y": 3025,
          "width": 61,
          "height": 22,
          "minX": 122,
          "maxX": 252,
          "speed": 26,
          "x": 153,
          "dir": 1
        },
        {
          "id": "rock_15",
          "type": "rock",
          "x": 119,
          "y": 2911,
          "radius": 22
        },
        {
          "id": "gate_1",
          "type": "gate",
          "y": 2793,
          "leftX": 105,
          "rightX": 215,
          "postRadius": 14
        },
        {
          "id": "rock_16",
          "type": "rock",
          "x": 202,
          "y": 2676,
          "radius": 22
        },
        {
          "id": "log_6",
          "type": "log",
          "y": 2560,
          "width": 60,
          "height": 22,
          "minX": 86,
          "maxX": 216,
          "speed": 26,
          "x": 185,
          "dir": -1
        },
        {
          "id": "rock_17",
          "type": "rock",
          "x": 109,
          "y": 2443,
          "radius": 22
        },
        {
          "id": "rock_18",
          "type": "rock",
          "x": 233,
          "y": 2326,
          "radius": 22
        },
        {
          "id": "log_7",
          "type": "log",
          "y": 2208,
          "width": 59,
          "height": 22,
          "minX": 126,
          "maxX": 256,
          "speed": 26,
          "x": 162,
          "dir": 1
        },
        {
          "id": "rock_19",
          "type": "rock",
          "x": 150,
          "y": 2092,
          "radius": 22
        },
        {
          "id": "gate_2",
          "type": "gate",
          "y": 1975,
          "leftX": 163,
          "rightX": 273,
          "postRadius": 14
        },
        {
          "id": "rock_20",
          "type": "rock",
          "x": 260,
          "y": 1858,
          "radius": 22
        },
        {
          "id": "log_8",
          "type": "log",
          "y": 1742,
          "width": 58,
          "height": 22,
          "minX": 126,
          "maxX": 256,
          "speed": 26,
          "x": 222,
          "dir": -1
        },
        {
          "id": "rock_21",
          "type": "rock",
          "x": 123,
          "y": 1624,
          "radius": 22
        },
        {
          "id": "log_9",
          "type": "log",
          "y": 1507,
          "width": 58,
          "height": 22,
          "minX": 99,
          "maxX": 229,
          "speed": 26,
          "x": 133,
          "dir": 1
        },
        {
          "id": "rock_22",
          "type": "rock",
          "x": 206,
          "y": 1390,
          "radius": 22
        },
        {
          "id": "rock_23",
          "type": "rock",
          "x": 92,
          "y": 1275,
          "radius": 22
        },
        {
          "id": "gate_3",
          "type": "gate",
          "y": 1158,
          "leftX": 105,
          "rightX": 215,
          "postRadius": 14
        },
        {
          "id": "rock_24",
          "type": "rock",
          "x": 229,
          "y": 1041,
          "radius": 22
        },
        {
          "id": "log_10",
          "type": "log",
          "y": 925,
          "width": 59,
          "height": 22,
          "minX": 122,
          "maxX": 252,
          "speed": 26,
          "x": 209,
          "dir": -1
        },
        {
          "id": "rock_25",
          "type": "rock",
          "x": 146,
          "y": 807,
          "radius": 22
        },
        {
          "id": "rock_26",
          "type": "rock",
          "x": 269,
          "y": 690,
          "radius": 22
        },
        {
          "id": "log_11",
          "type": "log",
          "y": 573,
          "width": 60,
          "height": 22,
          "minX": 148,
          "maxX": 278,
          "speed": 26,
          "x": 179,
          "dir": 1
        },
        {
          "id": "rock_27",
          "type": "rock",
          "x": 151,
          "y": 457,
          "radius": 22
        }
      ]
    },
    "zone": "મહા સંગ્રામ : બાપ નો બાપ (The Ultimate Clashes)"
  },
  {
    "id": 47,
    "name": "Santhal No Sinh Mahuva",
    "targetTime": 130,
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
      "height": 4000,
      "startX": 180,
      "startY": 3850,
      "finishX": 180,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.99,
      "waypoints": [
        {
          "y": 4000,
          "cx": 180,
          "width": 220
        },
        {
          "y": 3334,
          "cx": 225,
          "width": 220
        },
        {
          "y": 2666,
          "cx": 135,
          "width": 220
        },
        {
          "y": 2000,
          "cx": 225,
          "width": 212
        },
        {
          "y": 1334,
          "cx": 135,
          "width": 212
        },
        {
          "y": 666,
          "cx": 225,
          "width": 220
        },
        {
          "y": 0,
          "cx": 180,
          "width": 220
        }
      ],
      "obstacles": [
        {
          "id": "rock_11",
          "type": "rock",
          "x": 266,
          "y": 3543,
          "radius": 22
        },
        {
          "id": "rock_12",
          "type": "rock",
          "x": 164,
          "y": 3425,
          "radius": 22
        },
        {
          "id": "log_4",
          "type": "log",
          "y": 3306,
          "width": 61,
          "height": 22,
          "minX": 156,
          "maxX": 286,
          "speed": 26,
          "x": 238,
          "dir": -1
        },
        {
          "id": "rock_13",
          "type": "rock",
          "x": 260,
          "y": 3186,
          "radius": 22
        },
        {
          "id": "log_5",
          "type": "log",
          "y": 3068,
          "width": 61,
          "height": 22,
          "minX": 124,
          "maxX": 254,
          "speed": 26,
          "x": 155,
          "dir": 1
        },
        {
          "id": "rock_14",
          "type": "rock",
          "x": 118,
          "y": 2949,
          "radius": 22
        },
        {
          "id": "gate_1",
          "type": "gate",
          "y": 2831,
          "leftX": 102,
          "rightX": 212,
          "postRadius": 14
        },
        {
          "id": "rock_15",
          "type": "rock",
          "x": 196,
          "y": 2713,
          "radius": 22
        },
        {
          "id": "rock_16",
          "type": "rock",
          "x": 90,
          "y": 2594,
          "radius": 22
        },
        {
          "id": "rock_17",
          "type": "rock",
          "x": 216,
          "y": 2475,
          "radius": 22
        },
        {
          "id": "log_6",
          "type": "log",
          "y": 2356,
          "width": 59,
          "height": 22,
          "minX": 112,
          "maxX": 242,
          "speed": 26,
          "x": 210,
          "dir": -1
        },
        {
          "id": "rock_18",
          "type": "rock",
          "x": 138,
          "y": 2238,
          "radius": 22
        },
        {
          "id": "log_7",
          "type": "log",
          "y": 2118,
          "width": 58,
          "height": 22,
          "minX": 144,
          "maxX": 274,
          "speed": 26,
          "x": 184,
          "dir": 1
        },
        {
          "id": "gate_2",
          "type": "gate",
          "y": 2000,
          "leftX": 170,
          "rightX": 280,
          "postRadius": 14
        },
        {
          "id": "rock_19",
          "type": "rock",
          "x": 264,
          "y": 1882,
          "radius": 22
        },
        {
          "id": "rock_20",
          "type": "rock",
          "x": 138,
          "y": 1764,
          "radius": 22
        },
        {
          "id": "rock_21",
          "type": "rock",
          "x": 232,
          "y": 1644,
          "radius": 22
        },
        {
          "id": "log_8",
          "type": "log",
          "y": 1525,
          "width": 58,
          "height": 22,
          "minX": 96,
          "maxX": 226,
          "speed": 26,
          "x": 192,
          "dir": -1
        },
        {
          "id": "rock_22",
          "type": "rock",
          "x": 90,
          "y": 1407,
          "radius": 22
        },
        {
          "id": "rock_23",
          "type": "rock",
          "x": 196,
          "y": 1287,
          "radius": 22
        },
        {
          "id": "log_9",
          "type": "log",
          "y": 1169,
          "width": 58,
          "height": 22,
          "minX": 92,
          "maxX": 222,
          "speed": 26,
          "x": 125,
          "dir": 1
        },
        {
          "id": "rock_24",
          "type": "rock",
          "x": 118,
          "y": 1051,
          "radius": 22
        },
        {
          "id": "gate_3",
          "type": "gate",
          "y": 933,
          "leftX": 134,
          "rightX": 244,
          "postRadius": 14
        },
        {
          "id": "rock_25",
          "type": "rock",
          "x": 260,
          "y": 814,
          "radius": 22
        },
        {
          "id": "log_10",
          "type": "log",
          "y": 694,
          "width": 61,
          "height": 22,
          "minX": 156,
          "maxX": 286,
          "speed": 26,
          "x": 253,
          "dir": -1
        },
        {
          "id": "rock_26",
          "type": "rock",
          "x": 164,
          "y": 576,
          "radius": 22
        },
        {
          "id": "rock_27",
          "type": "rock",
          "x": 266,
          "y": 457,
          "radius": 22
        }
      ]
    },
    "zone": "મહા સંગ્રામ : બાપ નો બાપ (The Ultimate Clashes)"
  },
  {
    "id": 48,
    "name": "Sher Aaya Sher!",
    "targetTime": 133,
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
      "height": 4050,
      "startX": 180,
      "startY": 3900,
      "finishX": 180,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.991,
      "waypoints": [
        {
          "y": 4050,
          "cx": 180,
          "width": 220
        },
        {
          "y": 3375,
          "cx": 222,
          "width": 220
        },
        {
          "y": 2700,
          "cx": 138,
          "width": 220
        },
        {
          "y": 2025,
          "cx": 222,
          "width": 212
        },
        {
          "y": 1350,
          "cx": 138,
          "width": 212
        },
        {
          "y": 675,
          "cx": 222,
          "width": 220
        },
        {
          "y": 0,
          "cx": 180,
          "width": 220
        }
      ],
      "obstacles": [
        {
          "id": "rock_12",
          "type": "rock",
          "x": 263,
          "y": 3594,
          "radius": 22
        },
        {
          "id": "rock_13",
          "type": "rock",
          "x": 161,
          "y": 3478,
          "radius": 22
        },
        {
          "id": "gate_1",
          "type": "gate",
          "y": 3361,
          "leftX": 165,
          "rightX": 275,
          "postRadius": 14
        },
        {
          "id": "rock_14",
          "type": "rock",
          "x": 151,
          "y": 3246,
          "radius": 22
        },
        {
          "id": "log_6",
          "type": "log",
          "y": 3129,
          "width": 61,
          "height": 22,
          "minX": 126,
          "maxX": 256,
          "speed": 26,
          "x": 214,
          "dir": -1
        },
        {
          "id": "rock_15",
          "type": "rock",
          "x": 122,
          "y": 3014,
          "radius": 22
        },
        {
          "id": "log_7",
          "type": "log",
          "y": 2897,
          "width": 61,
          "height": 22,
          "minX": 98,
          "maxX": 228,
          "speed": 26,
          "x": 128,
          "dir": 1
        },
        {
          "id": "rock_16",
          "type": "rock",
          "x": 203,
          "y": 2781,
          "radius": 22
        },
        {
          "id": "rock_17",
          "type": "rock",
          "x": 87,
          "y": 2664,
          "radius": 22
        },
        {
          "id": "gate_2",
          "type": "gate",
          "y": 2548,
          "leftX": 102,
          "rightX": 212,
          "postRadius": 14
        },
        {
          "id": "rock_18",
          "type": "rock",
          "x": 226,
          "y": 2431,
          "radius": 22
        },
        {
          "id": "log_8",
          "type": "log",
          "y": 2316,
          "width": 58,
          "height": 22,
          "minX": 121,
          "maxX": 251,
          "speed": 26,
          "x": 219,
          "dir": -1
        },
        {
          "id": "rock_19",
          "type": "rock",
          "x": 145,
          "y": 2199,
          "radius": 22
        },
        {
          "id": "gate_3",
          "type": "gate",
          "y": 2084,
          "leftX": 160,
          "rightX": 270,
          "postRadius": 14
        },
        {
          "id": "rock_20",
          "type": "rock",
          "x": 270,
          "y": 1966,
          "radius": 22
        },
        {
          "id": "rock_21",
          "type": "rock",
          "x": 145,
          "y": 1851,
          "radius": 22
        },
        {
          "id": "log_9",
          "type": "log",
          "y": 1734,
          "width": 58,
          "height": 22,
          "minX": 121,
          "maxX": 251,
          "speed": 26,
          "x": 164,
          "dir": 1
        },
        {
          "id": "rock_22",
          "type": "rock",
          "x": 226,
          "y": 1619,
          "radius": 22
        },
        {
          "id": "rock_23",
          "type": "rock",
          "x": 102,
          "y": 1502,
          "radius": 22
        },
        {
          "id": "gate_4",
          "type": "gate",
          "y": 1386,
          "leftX": 87,
          "rightX": 197,
          "postRadius": 14
        },
        {
          "id": "rock_24",
          "type": "rock",
          "x": 203,
          "y": 1269,
          "radius": 22
        },
        {
          "id": "log_10",
          "type": "log",
          "y": 1153,
          "width": 58,
          "height": 22,
          "minX": 98,
          "maxX": 228,
          "speed": 26,
          "x": 182,
          "dir": -1
        },
        {
          "id": "rock_25",
          "type": "rock",
          "x": 122,
          "y": 1036,
          "radius": 22
        },
        {
          "id": "log_11",
          "type": "log",
          "y": 921,
          "width": 59,
          "height": 22,
          "minX": 126,
          "maxX": 256,
          "speed": 26,
          "x": 158,
          "dir": 1
        },
        {
          "id": "gate_5",
          "type": "gate",
          "y": 804,
          "leftX": 151,
          "rightX": 261,
          "postRadius": 14
        },
        {
          "id": "rock_26",
          "type": "rock",
          "x": 275,
          "y": 689,
          "radius": 22
        },
        {
          "id": "rock_27",
          "type": "rock",
          "x": 161,
          "y": 572,
          "radius": 22
        },
        {
          "id": "rock_28",
          "type": "rock",
          "x": 263,
          "y": 456,
          "radius": 22
        }
      ]
    },
    "zone": "મહા સંગ્રામ : બાપ નો બાપ (The Ultimate Clashes)"
  },
  {
    "id": 49,
    "name": "Chaar Superstar Ek Raft",
    "targetTime": 135,
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
      "height": 4100,
      "startX": 180,
      "startY": 3950,
      "finishX": 180,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.991,
      "waypoints": [
        {
          "y": 4100,
          "cx": 180,
          "width": 215
        },
        {
          "y": 3417,
          "cx": 225,
          "width": 215
        },
        {
          "y": 2733,
          "cx": 135,
          "width": 215
        },
        {
          "y": 2051,
          "cx": 225,
          "width": 210
        },
        {
          "y": 1367,
          "cx": 135,
          "width": 210
        },
        {
          "y": 683,
          "cx": 225,
          "width": 215
        },
        {
          "y": 0,
          "cx": 180,
          "width": 215
        }
      ],
      "obstacles": [
        {
          "id": "rock_13",
          "type": "rock",
          "x": 265,
          "y": 3643,
          "radius": 22
        },
        {
          "id": "log_5",
          "type": "log",
          "y": 3525,
          "width": 59,
          "height": 22,
          "minX": 153,
          "maxX": 283,
          "speed": 26,
          "x": 244,
          "dir": -1
        },
        {
          "id": "rock_14",
          "type": "rock",
          "x": 169,
          "y": 3407,
          "radius": 22
        },
        {
          "id": "log_6",
          "type": "log",
          "y": 3290,
          "width": 59,
          "height": 22,
          "minX": 143,
          "maxX": 273,
          "speed": 26,
          "x": 176,
          "dir": 1
        },
        {
          "id": "rock_15",
          "type": "rock",
          "x": 248,
          "y": 3170,
          "radius": 22
        },
        {
          "id": "gate_1",
          "type": "gate",
          "y": 3053,
          "leftX": 122,
          "rightX": 232,
          "postRadius": 14
        },
        {
          "id": "rock_16",
          "type": "rock",
          "x": 107,
          "y": 2935,
          "radius": 22
        },
        {
          "id": "rock_17",
          "type": "rock",
          "x": 201,
          "y": 2818,
          "radius": 22
        },
        {
          "id": "log_7",
          "type": "log",
          "y": 2699,
          "width": 58,
          "height": 22,
          "minX": 74,
          "maxX": 204,
          "speed": 26,
          "x": 172,
          "dir": -1
        },
        {
          "id": "rock_18",
          "type": "rock",
          "x": 100,
          "y": 2581,
          "radius": 22
        },
        {
          "id": "gate_2",
          "type": "gate",
          "y": 2464,
          "leftX": 115,
          "rightX": 225,
          "postRadius": 14
        },
        {
          "id": "rock_19",
          "type": "rock",
          "x": 241,
          "y": 2344,
          "radius": 22
        },
        {
          "id": "log_8",
          "type": "log",
          "y": 2227,
          "width": 57,
          "height": 22,
          "minX": 137,
          "maxX": 267,
          "speed": 26,
          "x": 170,
          "dir": 1
        },
        {
          "id": "rock_20",
          "type": "rock",
          "x": 162,
          "y": 2109,
          "radius": 22
        },
        {
          "id": "rock_21",
          "type": "rock",
          "x": 272,
          "y": 1991,
          "radius": 22
        },
        {
          "id": "log_9",
          "type": "log",
          "y": 1873,
          "width": 57,
          "height": 22,
          "minX": 137,
          "maxX": 267,
          "speed": 26,
          "x": 224,
          "dir": -1
        },
        {
          "id": "rock_22",
          "type": "rock",
          "x": 131,
          "y": 1756,
          "radius": 22
        },
        {
          "id": "gate_3",
          "type": "gate",
          "y": 1638,
          "leftX": 116,
          "rightX": 226,
          "postRadius": 14
        },
        {
          "id": "rock_23",
          "type": "rock",
          "x": 210,
          "y": 1520,
          "radius": 22
        },
        {
          "id": "log_10",
          "type": "log",
          "y": 1401,
          "width": 57,
          "height": 22,
          "minX": 74,
          "maxX": 204,
          "speed": 26,
          "x": 122,
          "dir": 1
        },
        {
          "id": "rock_24",
          "type": "rock",
          "x": 91,
          "y": 1282,
          "radius": 22
        },
        {
          "id": "rock_25",
          "type": "rock",
          "x": 217,
          "y": 1165,
          "radius": 22
        },
        {
          "id": "gate_4",
          "type": "gate",
          "y": 1047,
          "leftX": 122,
          "rightX": 232,
          "postRadius": 14
        },
        {
          "id": "log_11",
          "type": "log",
          "y": 930,
          "width": 58,
          "height": 22,
          "minX": 128,
          "maxX": 258,
          "speed": 26,
          "x": 224,
          "dir": -1
        },
        {
          "id": "rock_26",
          "type": "rock",
          "x": 153,
          "y": 811,
          "radius": 22
        },
        {
          "id": "rock_27",
          "type": "rock",
          "x": 279,
          "y": 694,
          "radius": 22
        },
        {
          "id": "log_12",
          "type": "log",
          "y": 575,
          "width": 59,
          "height": 22,
          "minX": 153,
          "maxX": 283,
          "speed": 26,
          "x": 185,
          "dir": 1
        },
        {
          "id": "rock_28",
          "type": "rock",
          "x": 155,
          "y": 457,
          "radius": 22
        }
      ]
    },
    "zone": "મહા સંગ્રામ : બાપ નો બાપ (The Ultimate Clashes)"
  },
  {
    "id": 50,
    "name": "Akhand Gujarati Mahadayro! 🏆",
    "targetTime": 139,
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
      "height": 4150,
      "startX": 180,
      "startY": 4000,
      "finishX": 180,
      "finishY": 130,
      "finishRadius": 46,
      "drag": 0.991,
      "waypoints": [
        {
          "y": 4150,
          "cx": 180,
          "width": 215
        },
        {
          "y": 3459,
          "cx": 228,
          "width": 215
        },
        {
          "y": 2767,
          "cx": 132,
          "width": 215
        },
        {
          "y": 2076,
          "cx": 228,
          "width": 210
        },
        {
          "y": 1383,
          "cx": 132,
          "width": 210
        },
        {
          "y": 692,
          "cx": 228,
          "width": 215
        },
        {
          "y": 0,
          "cx": 180,
          "width": 215
        }
      ],
      "obstacles": [
        {
          "id": "rock_14",
          "type": "rock",
          "x": 266,
          "y": 3700,
          "radius": 22
        },
        {
          "id": "log_5",
          "type": "log",
          "y": 3588,
          "width": 59,
          "height": 22,
          "minX": 154,
          "maxX": 284,
          "speed": 26,
          "x": 252,
          "dir": -1
        },
        {
          "id": "rock_15",
          "type": "rock",
          "x": 172,
          "y": 3475,
          "radius": 22
        },
        {
          "id": "rock_16",
          "type": "rock",
          "x": 270,
          "y": 3363,
          "radius": 22
        },
        {
          "id": "log_6",
          "type": "log",
          "y": 3251,
          "width": 59,
          "height": 22,
          "minX": 134,
          "maxX": 264,
          "speed": 26,
          "x": 167,
          "dir": 1
        },
        {
          "id": "gate_1",
          "type": "gate",
          "y": 3140,
          "leftX": 129,
          "rightX": 239,
          "postRadius": 14
        },
        {
          "id": "rock_17",
          "type": "rock",
          "x": 113,
          "y": 3029,
          "radius": 22
        },
        {
          "id": "rock_18",
          "type": "rock",
          "x": 208,
          "y": 2915,
          "radius": 22
        },
        {
          "id": "log_7",
          "type": "log",
          "y": 2804,
          "width": 59,
          "height": 22,
          "minX": 72,
          "maxX": 202,
          "speed": 26,
          "x": 170,
          "dir": -1
        },
        {
          "id": "rock_19",
          "type": "rock",
          "x": 87,
          "y": 2692,
          "radius": 22
        },
        {
          "id": "log_8",
          "type": "log",
          "y": 2580,
          "width": 58,
          "height": 22,
          "minX": 93,
          "maxX": 223,
          "speed": 26,
          "x": 139,
          "dir": 1
        },
        {
          "id": "rock_20",
          "type": "rock",
          "x": 229,
          "y": 2467,
          "radius": 22
        },
        {
          "id": "gate_2",
          "type": "gate",
          "y": 2355,
          "leftX": 134,
          "rightX": 244,
          "postRadius": 14
        },
        {
          "id": "rock_21",
          "type": "rock",
          "x": 150,
          "y": 2243,
          "radius": 22
        },
        {
          "id": "rock_22",
          "type": "rock",
          "x": 275,
          "y": 2131,
          "radius": 22
        },
        {
          "id": "log_9",
          "type": "log",
          "y": 2020,
          "width": 57,
          "height": 22,
          "minX": 155,
          "maxX": 285,
          "speed": 26,
          "x": 251,
          "dir": -1
        },
        {
          "id": "rock_23",
          "type": "rock",
          "x": 150,
          "y": 1907,
          "radius": 22
        },
        {
          "id": "log_10",
          "type": "log",
          "y": 1795,
          "width": 57,
          "height": 22,
          "minX": 124,
          "maxX": 254,
          "speed": 26,
          "x": 159,
          "dir": 1
        },
        {
          "id": "gate_3",
          "type": "gate",
          "y": 1683,
          "leftX": 119,
          "rightX": 229,
          "postRadius": 14
        },
        {
          "id": "rock_24",
          "type": "rock",
          "x": 213,
          "y": 1571,
          "radius": 22
        },
        {
          "id": "rock_25",
          "type": "rock",
          "x": 87,
          "y": 1458,
          "radius": 22
        },
        {
          "id": "log_11",
          "type": "log",
          "y": 1346,
          "width": 57,
          "height": 22,
          "minX": 72,
          "maxX": 202,
          "speed": 26,
          "x": 168,
          "dir": -1
        },
        {
          "id": "rock_26",
          "type": "rock",
          "x": 208,
          "y": 1235,
          "radius": 22
        },
        {
          "id": "log_12",
          "type": "log",
          "y": 1123,
          "width": 58,
          "height": 22,
          "minX": 103,
          "maxX": 233,
          "speed": 26,
          "x": 138,
          "dir": 1
        },
        {
          "id": "rock_27",
          "type": "rock",
          "x": 129,
          "y": 1010,
          "radius": 22
        },
        {
          "id": "gate_4",
          "type": "gate",
          "y": 899,
          "leftX": 144,
          "rightX": 254,
          "postRadius": 14
        },
        {
          "id": "rock_28",
          "type": "rock",
          "x": 270,
          "y": 787,
          "radius": 22
        },
        {
          "id": "rock_29",
          "type": "rock",
          "x": 172,
          "y": 675,
          "radius": 22
        },
        {
          "id": "log_13",
          "type": "log",
          "y": 563,
          "width": 59,
          "height": 22,
          "minX": 154,
          "maxX": 284,
          "speed": 26,
          "x": 252,
          "dir": -1
        },
        {
          "id": "rock_30",
          "type": "rock",
          "x": 266,
          "y": 450,
          "radius": 22
        }
      ]
    },
    "zone": "મહા સંગ્રામ : બાપ નો બાપ (The Ultimate Clashes)"
  }
];
