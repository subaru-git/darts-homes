import { drawConnectors, drawLandmarks } from '@mediapipe/drawing_utils';
import { POSE_CONNECTIONS, Results } from '@mediapipe/pose';

export const drawCanvas = (context: CanvasRenderingContext2D, results: Results) => {
  const width = context.canvas.width;
  const height = context.canvas.height;
  context.save();
  context.clearRect(0, 0, width, height);
  context.scale(-1, 1);
  context.translate(-width, 0);
  context.drawImage(results.image, 0, 0, width, height);
  if (results.poseLandmarks) {
    drawConnectors(context, results.poseLandmarks, POSE_CONNECTIONS, {
      color: '#00FF00',
      lineWidth: 1,
    });
    drawLandmarks(context, results.poseLandmarks, {
      color: '#FF0000',
      lineWidth: 1,
      radius: 2,
    });
  }
  context.restore();
};
