import ClassRoom from './0-classroom';

export default function initializeRooms() {
  return [new ClassRoom(10), new ClassRoom(20), new ClassRoom(34)];
}
