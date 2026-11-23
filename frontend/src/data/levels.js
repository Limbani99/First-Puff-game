// Level definitions for First Puff
// 10 very easy, casual levels with gradual crew unlocks and gentle physics

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
    id: 1,
    name: 'First Puff',
    targetTime: 20,
    hint: 'Tap the Hippo to move forward!',
    crewUnlocked: ['hippo'],
    teaches: 'Tapping and moving',
    world: {
      width: 360,
      height: 1100,
      startX: 180,
      startY: 960,
      finishX: 180,
      finishY: 140,
      finishRadius: 46,
      drag: 0.978,
      waypoints: [
        { y: 1100, cx: 180, width: 250 },
        { y: 600, cx: 180, width: 250 },
        { y: 0, cx: 180, width: 250 }
      ],
      obstacles: []
    }
  },
  {
    id: 2,
    name: 'Wide River',
    targetTime: 25,
    hint: 'Frog pushes you right.',
    crewUnlocked: ['hippo', 'frog'],
    teaches: 'Sideways steering',
    world: {
      width: 360,
      height: 1200,
      startX: 140,
      startY: 1040,
      finishX: 250,
      finishY: 140,
      finishRadius: 46,
      drag: 0.978,
      waypoints: [
        { y: 1200, cx: 180, width: 290 },
        { y: 600, cx: 180, width: 290 },
        { y: 0, cx: 180, width: 290 }
      ],
      obstacles: []
    }
  },
  {
    id: 3,
    name: 'Gentle Curve',
    targetTime: 30,
    hint: 'Use the Pig to go left.',
    crewUnlocked: ['hippo', 'frog', 'pig'],
    teaches: 'Left and right together',
    world: {
      width: 360,
      height: 1350,
      startX: 210,
      startY: 1200,
      finishX: 130,
      finishY: 130,
      finishRadius: 46,
      drag: 0.978,
      waypoints: [
        { y: 1350, cx: 210, width: 260 },
        { y: 950, cx: 190, width: 260 },
        { y: 600, cx: 130, width: 250 },
        { y: 250, cx: 130, width: 250 },
        { y: 0, cx: 130, width: 250 }
      ],
      obstacles: []
    }
  },
  {
    id: 4,
    name: 'Charge It',
    targetTime: 25,
    hint: 'Hold the button to charge a big puff!',
    crewUnlocked: ['hippo', 'frog', 'pig'],
    teaches: 'Hold-to-charge for long pushes',
    world: {
      width: 360,
      height: 1650,
      startX: 180,
      startY: 1500,
      finishX: 180,
      finishY: 130,
      finishRadius: 46,
      drag: 0.982,
      waypoints: [
        { y: 1650, cx: 180, width: 270 },
        { y: 800, cx: 180, width: 270 },
        { y: 0, cx: 180, width: 270 }
      ],
      obstacles: []
    }
  },
  {
    id: 5,
    name: 'Little Rocks',
    targetTime: 35,
    hint: 'Rocks slow you down. Go around them.',
    crewUnlocked: ['hippo', 'frog', 'pig'],
    teaches: 'Avoiding obstacles and the bump penalty',
    world: {
      width: 360,
      height: 1450,
      startX: 180,
      startY: 1300,
      finishX: 180,
      finishY: 130,
      finishRadius: 46,
      drag: 0.978,
      waypoints: [
        { y: 1450, cx: 180, width: 270 },
        { y: 700, cx: 180, width: 270 },
        { y: 0, cx: 180, width: 270 }
      ],
      obstacles: [
        { id: 'rock1', type: 'rock', x: 140, y: 950, radius: 26 },
        { id: 'rock2', type: 'rock', x: 220, y: 680, radius: 28 },
        { id: 'rock3', type: 'rock', x: 155, y: 400, radius: 26 }
      ]
    }
  },
  {
    id: 6,
    name: 'Zig Zag',
    targetTime: 40,
    hint: 'Turn early, then straighten up.',
    crewUnlocked: ['hippo', 'frog', 'pig'],
    teaches: 'Chaining turns and timing',
    world: {
      width: 360,
      height: 1600,
      startX: 180,
      startY: 1450,
      finishX: 180,
      finishY: 130,
      finishRadius: 46,
      drag: 0.978,
      waypoints: [
        { y: 1600, cx: 180, width: 250 },
        { y: 1250, cx: 235, width: 250 }, // turn right
        { y: 850, cx: 125, width: 250 },  // turn left
        { y: 450, cx: 225, width: 250 },  // turn right
        { y: 0, cx: 180, width: 260 }
      ],
      obstacles: []
    }
  },
  {
    id: 7,
    name: 'Slow Logs',
    targetTime: 40,
    hint: 'Wait for the log to pass.',
    crewUnlocked: ['hippo', 'frog', 'pig'],
    teaches: 'Timing against moving objects',
    world: {
      width: 360,
      height: 1550,
      startX: 180,
      startY: 1400,
      finishX: 180,
      finishY: 130,
      finishRadius: 46,
      drag: 0.978,
      waypoints: [
        { y: 1550, cx: 180, width: 270 },
        { y: 750, cx: 180, width: 270 },
        { y: 0, cx: 180, width: 270 }
      ],
      obstacles: [
        {
          id: 'log1',
          type: 'log',
          y: 920,
          width: 82,
          height: 24,
          minX: 95,
          maxX: 265,
          speed: 48,
          x: 100,
          dir: 1
        },
        {
          id: 'log2',
          type: 'log',
          y: 520,
          width: 82,
          height: 24,
          minX: 95,
          maxX: 265,
          speed: 52,
          x: 250,
          dir: -1
        }
      ]
    }
  },
  {
    id: 8,
    name: 'Brake Time',
    targetTime: 35,
    hint: 'Penguin brakes the raft. Stop on the flag!',
    crewUnlocked: ['hippo', 'frog', 'pig', 'penguin'],
    teaches: 'Using the brake',
    world: {
      width: 360,
      height: 1450,
      startX: 180,
      startY: 1300,
      finishX: 180,
      finishY: 150,
      finishRadius: 36, // Smaller finish pond requires braking
      drag: 0.982,
      waypoints: [
        { y: 1450, cx: 180, width: 260 },
        { y: 500, cx: 180, width: 260 },
        { y: 220, cx: 180, width: 200 },
        { y: 0, cx: 180, width: 170 }
      ],
      obstacles: [
        { id: 'rock1', type: 'rock', x: 125, y: 360, radius: 22 },
        { id: 'rock2', type: 'rock', x: 235, y: 360, radius: 22 }
      ]
    }
  },
  {
    id: 9,
    name: 'Narrow Gate',
    targetTime: 45,
    hint: 'Line up before the gate.',
    crewUnlocked: ['hippo', 'frog', 'pig', 'penguin'],
    teaches: 'Lining up and passing through gaps',
    world: {
      width: 360,
      height: 1650,
      startX: 180,
      startY: 1500,
      finishX: 150,
      finishY: 130,
      finishRadius: 44,
      drag: 0.978,
      waypoints: [
        { y: 1650, cx: 180, width: 270 },
        { y: 1050, cx: 180, width: 270 },
        { y: 650, cx: 150, width: 250 },
        { y: 0, cx: 150, width: 250 }
      ],
      obstacles: [
        {
          id: 'gate1',
          type: 'gate',
          y: 920,
          leftX: 110,
          rightX: 250,
          postRadius: 18
        },
        {
          id: 'log1',
          type: 'log',
          y: 480,
          width: 76,
          height: 24,
          minX: 75,
          maxX: 225,
          speed: 46,
          x: 80,
          dir: 1
        }
      ]
    }
  },
  {
    id: 10,
    name: 'Big Finish',
    targetTime: 60,
    hint: 'Use everything you learned!',
    crewUnlocked: ['hippo', 'frog', 'pig', 'penguin'],
    teaches: 'Combining every skill, with a confetti celebration at the end',
    world: {
      width: 360,
      height: 2100,
      startX: 180,
      startY: 1950,
      finishX: 190,
      finishY: 130,
      finishRadius: 46,
      drag: 0.980,
      waypoints: [
        { y: 2100, cx: 180, width: 270 },
        { y: 1650, cx: 220, width: 270 },
        { y: 1200, cx: 150, width: 260 },
        { y: 700, cx: 210, width: 260 },
        { y: 0, cx: 190, width: 260 }
      ],
      obstacles: [
        { id: 'rock1', type: 'rock', x: 150, y: 1680, radius: 24 },
        { id: 'rock2', type: 'rock', x: 260, y: 1420, radius: 25 },
        {
          id: 'log1',
          type: 'log',
          y: 1120,
          width: 78,
          height: 24,
          minX: 75,
          maxX: 225,
          speed: 45,
          x: 80,
          dir: 1
        },
        { id: 'rock3', type: 'rock', x: 120, y: 840, radius: 24 },
        {
          id: 'gate1',
          type: 'gate',
          y: 600,
          leftX: 135,
          rightX: 285,
          postRadius: 18
        },
        {
          id: 'log2',
          type: 'log',
          y: 360,
          width: 78,
          height: 24,
          minX: 110,
          maxX: 270,
          speed: 50,
          x: 250,
          dir: -1
        },
        { id: 'rock4', type: 'rock', x: 210, y: 240, radius: 22 }
      ]
    }
  }
];
