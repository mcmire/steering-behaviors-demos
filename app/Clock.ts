export default interface Clock {
  startTime: number;
  timeSinceLastTick: number;
  deltaTime: number;
  elapsedTime: number;
}
