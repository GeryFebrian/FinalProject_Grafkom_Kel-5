module.exports = {
  player: {
    radius: 1.1,                      // The radius of the player sphere.
    speed: 2.0,                       // The force applied to the player.
    color: {
      near: [0,0.25,1],               // The color of the player when near the exit.
      far: [1,0.25,0],                // The color of the player when far from the exit.
    },
  },
  margin: 16,                         // The amount of empty space around the maze.
  initialSize: 10,                     // Size of the first level. Needs to be odd.
  levelIncrease: 2,                   // Increase in size per level. This needs to be even.
  wallImage: 'static/stone.png',      // The wall texture image.
  groundImage: 'static/concrete.png', // The floor texture image.
  timeStep: 1.5/60,                   // The timestep for the physics engine.
  initialResolution: 1                // Initial resolution scaling.
};
