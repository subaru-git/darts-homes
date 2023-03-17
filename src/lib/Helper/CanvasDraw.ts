export const drawLine = (
  ctx: CanvasRenderingContext2D,
  from: { x: number; y: number },
  to: { x: number; y: number },
  color: string,
) => {
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.moveTo(from.x, from.y);
  ctx.lineTo(to.x, to.y);
  ctx.stroke();
};

export const drawArrow = (
  ctx: CanvasRenderingContext2D,
  from: { x: number; y: number },
  to: { x: number; y: number },
  color: string,
  next: boolean = false,
  end: boolean = false,
  headLength: number = 10,
  headAngle: number = Math.PI / 6,
  lineWidth: number = 3,
) => {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const length = Math.sqrt(dx * dx + dy * dy);
  const ux = dx / length;
  const uy = dy / length;
  if (end || next) {
    to.x -= ux * 5;
    to.y -= uy * 5;
  }
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  ctx.moveTo(from.x, from.y);
  ctx.lineTo(to.x, to.y);
  const angle = Math.atan2(to.y - from.y, to.x - from.x);
  ctx.lineTo(
    to.x - headLength * Math.cos(angle - headAngle),
    to.y - headLength * Math.sin(angle - headAngle),
  );
  ctx.moveTo(to.x, to.y);
  ctx.lineTo(
    to.x - headLength * Math.cos(angle + headAngle),
    to.y - headLength * Math.sin(angle + headAngle),
  );
  ctx.stroke();

  if (end || next) {
    to.x += ux * 5;
    to.y += uy * 5;
  }
  ctx.beginPath();
  ctx.arc(from.x, from.y, 5, 0, 2 * Math.PI);
  ctx.fillStyle = 'white';
  ctx.fill();
  ctx.beginPath();
  ctx.arc(from.x, from.y, 5, 0, 2 * Math.PI);
  ctx.strokeStyle = color;
  ctx.stroke();

  if (end) {
    ctx.beginPath();
    ctx.arc(to.x, to.y, 5, 0, 2 * Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.beginPath();
    ctx.arc(to.x, to.y, 5, 0, 2 * Math.PI);
    ctx.strokeStyle = color;
    ctx.stroke();
  }
};

export interface Rect {
  x: number;
  y: number;
  width: number;
  height: number;
}
export const getSegmentCenter = (rect: Rect, number: string): { x: number; y: number } => {
  const centerX = rect.x + rect.width / 2;
  const centerY = rect.y + rect.height / 2;
  const radius = rect.width / 2;

  const isTriple = number.startsWith('T');
  const isDouble = number.startsWith('D');
  const isSingle = number.startsWith('S');
  const num = isTriple || isDouble || isSingle ? parseInt(number.slice(1)) : parseInt(number);
  const numbers = [20, 1, 18, 4, 13, 6, 10, 15, 2, 17, 3, 19, 7, 16, 8, 11, 14, 9, 12, 5];
  const value = numbers.indexOf(num);
  const baseAngle = 360 / 20;
  const angleOffset = 90;
  const segmentAngle = value * baseAngle;
  let distance: number;
  if (isTriple) {
    distance = radius * 0.535;
  } else if (isDouble) {
    distance = radius * 0.87;
  } else {
    distance = radius * 0.7;
  }

  const angleRad = ((angleOffset - segmentAngle) * Math.PI) / 180;
  const x = centerX + distance * Math.cos(angleRad);
  const y = centerY - distance * Math.sin(angleRad);

  return { x, y };
};
