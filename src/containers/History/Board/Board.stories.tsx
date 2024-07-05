import type { Meta, StoryObj } from '@storybook/react';
import { v4 as uuidv4 } from 'uuid';
import Board from './Board';

const meta: Meta<typeof Board> = { component: Board, title: 'Containers/History/Board' };

export default meta;
type Story = StoryObj<typeof Board>;
export const Default: Story = {
  args: {
    history: {
      cricketMarkUp: [
        {
          uuid: uuidv4(),
          targetCount: 3,
          result: 0,
          scores: [
            {
              number: 20,
              count: 0,
              total: 0,
            },
            {
              number: 19,
              count: 0,
              total: 0,
            },
            {
              number: 18,
              count: 0,
              total: 0,
            },
            {
              number: 17,
              count: 0,
              total: 0,
            },
            {
              number: 16,
              count: 0,
              total: 0,
            },
            {
              number: 15,
              count: 0,
              total: 0,
            },
            {
              number: 25,
              count: 0,
              total: 0,
            },
          ],
          playedAt: '2022-11-15T02:47:09.017Z',
        },
        {
          uuid: uuidv4(),
          targetCount: 3,
          result: 3,
          scores: [
            {
              number: 20,
              count: 3,
              total: 2,
            },
            {
              number: 19,
              count: 0,
              total: 1,
            },
            {
              number: 18,
              count: 0,
              total: 0,
            },
            {
              number: 17,
              count: 0,
              total: 0,
            },
            {
              number: 16,
              count: 0,
              total: 0,
            },
            {
              number: 15,
              count: 0,
              total: 0,
            },
            {
              number: 25,
              count: 0,
              total: 0,
            },
          ],
          playedAt: '2022-11-15T02:47:19.233Z',
        },
        {
          uuid: uuidv4(),
          targetCount: 3,
          result: 8,
          scores: [
            {
              number: 20,
              count: 3,
              total: 1,
            },
            {
              number: 19,
              count: 3,
              total: 1,
            },
            {
              number: 18,
              count: 3,
              total: 1,
            },
            {
              number: 17,
              count: 3,
              total: 1,
            },
            {
              number: 16,
              count: 3,
              total: 1,
            },
            {
              number: 15,
              count: 3,
              total: 1,
            },
            {
              number: 25,
              count: 3,
              total: 2,
            },
          ],
          playedAt: '2022-11-15T02:47:38.224Z',
        },
        {
          uuid: uuidv4(),
          targetCount: 3,
          result: 0,
          scores: [
            {
              number: 20,
              count: 0,
              total: 0,
            },
            {
              number: 19,
              count: 0,
              total: 0,
            },
            {
              number: 18,
              count: 0,
              total: 0,
            },
            {
              number: 17,
              count: 0,
              total: 0,
            },
            {
              number: 16,
              count: 0,
              total: 0,
            },
            {
              number: 15,
              count: 0,
              total: 0,
            },
            {
              number: 25,
              count: 0,
              total: 0,
            },
          ],
          playedAt: '2022-11-15T02:48:31.119Z',
        },
        {
          uuid: uuidv4(),
          targetCount: 6,
          result: 2,
          scores: [
            {
              number: 20,
              count: 6,
              total: 2,
            },
            {
              number: 19,
              count: 0,
              total: 0,
            },
            {
              number: 18,
              count: 0,
              total: 0,
            },
            {
              number: 17,
              count: 0,
              total: 0,
            },
            {
              number: 16,
              count: 0,
              total: 0,
            },
            {
              number: 15,
              count: 0,
              total: 0,
            },
            {
              number: 25,
              count: 0,
              total: 0,
            },
          ],
          playedAt: '2022-11-15T02:48:58.126Z',
        },
        {
          uuid: uuidv4(),
          targetCount: 3,
          result: 8,
          scores: [
            {
              number: 20,
              count: 3,
              total: 1,
            },
            {
              number: 19,
              count: 3,
              total: 1,
            },
            {
              number: 18,
              count: 3,
              total: 1,
            },
            {
              number: 17,
              count: 3,
              total: 1,
            },
            {
              number: 16,
              count: 3,
              total: 1,
            },
            {
              number: 15,
              count: 3,
              total: 1,
            },
            {
              number: 25,
              count: 3,
              total: 2,
            },
          ],
          playedAt: '2022-11-15T07:22:32.709Z',
        },
        {
          uuid: uuidv4(),
          targetCount: 3,
          result: 8,
          scores: [
            {
              number: 20,
              count: 3,
              total: 1,
            },
            {
              number: 19,
              count: 3,
              total: 1,
            },
            {
              number: 18,
              count: 3,
              total: 1,
            },
            {
              number: 17,
              count: 3,
              total: 1,
            },
            {
              number: 16,
              count: 3,
              total: 1,
            },
            {
              number: 15,
              count: 3,
              total: 1,
            },
            {
              number: 25,
              count: 3,
              total: 2,
            },
          ],
          playedAt: '2022-11-28T23:40:41.221Z',
        },
      ],
      eaglesEye: [
        {
          uuid: uuidv4(),
          result: 1050,
          scores: [
            ['D-BULL', 'S-BULL', '0'],
            ['0', 'S-BULL', 'D-BULL'],
            ['D-BULL', 'D-BULL', 'D-BULL'],
            ['D-BULL', 'D-BULL', 'D-BULL'],
            ['D-BULL', 'D-BULL', 'D-BULL'],
            ['D-BULL', 'D-BULL', 'D-BULL'],
            ['D-BULL', 'D-BULL', 'D-BULL'],
            ['D-BULL', 'D-BULL', 'D-BULL'],
          ],
          playedAt: '2022-11-16T05:53:48.708Z',
        },
      ],
      doubleTrouble: [
        {
          uuid: uuidv4(),
          result: 300,
          scores: [
            ['D1', 'D1', 'D1'],
            ['D2', 'D2', 'D2'],
            ['D3', 'D3', 'D3'],
            ['D4', 'D4', 'D4'],
            ['D5', 'D5', 'D5'],
            ['D6', 'D6', 'D6'],
            ['D7', 'D7', 'D7'],
            ['D8', 'D8', 'D8'],
            ['D9', 'D9', 'D9'],
            ['D10', 'D10', 'D10'],
            ['D11', 'D11', 'D11'],
            ['D12', 'D12', 'D12'],
            ['D13', 'D13', 'D13'],
            ['D14', 'D14', 'D14'],
            ['D15', 'D15', 'D15'],
            ['D16', 'D16', 'D16'],
            ['D17', 'D17', 'D17'],
            ['D18', 'D18', 'D18'],
            ['D19', 'D19', 'D19'],
            ['D20', 'D20', 'D20'],
          ],
          playedAt: '2022-11-16T00:35:51.278Z',
        },
      ],
      sweet16: [
        {
          uuid: uuidv4(),
          result: 45,
          scores: [
            ['D16', 'D16', 'D16'],
            ['D16', 'D16', 'D16'],
            ['D16', 'D16', 'D16'],
          ],
          playedAt: '2022-11-16T00:52:51.863Z',
          round: 0,
        },
        {
          uuid: uuidv4(),
          result: 45,
          scores: [
            ['D16', 'D16', 'D16'],
            ['D16', 'D16', 'D16'],
            ['D16', 'D16', 'D16'],
          ],
          round: 3,
          playedAt: '2022-11-16T01:47:02.739Z',
        },
        {
          uuid: uuidv4(),
          result: 45,
          scores: [
            ['D16', 'D16', 'D16'],
            ['D16', 'D16', 'D16'],
            ['D16', 'D16', 'D16'],
          ],
          round: 3,
          playedAt: '2022-11-16T01:47:47.878Z',
        },
      ],
      topsAndTens: [
        {
          uuid: uuidv4(),
          result: 45,
          scores: [
            ['D20', 'D20', 'D20'],
            ['D20', 'D20', 'D20'],
            ['D20', 'D20', 'D20'],
          ],
          playedAt: '2022-11-16T01:09:24.712Z',
        },
        {
          uuid: uuidv4(),
          result: 45,
          scores: [
            ['D20', 'D20', 'D20'],
            ['D20', 'D20', 'D20'],
            ['D20', 'D20', 'D20'],
          ],
          playedAt: '2022-11-16T01:10:39.989Z',
        },
        {
          uuid: uuidv4(),
          result: 45,
          scores: [
            ['D20', 'D20', 'D20'],
            ['D20', 'D20', 'D20'],
            ['D20', 'D20', 'D20'],
          ],
          playedAt: '2022-11-16T01:45:29.863Z',
        },
        {
          uuid: uuidv4(),
          result: 45,
          scores: [
            ['D20', 'D20', 'D20'],
            ['D20', 'D20', 'D20'],
            ['D20', 'D20', 'D20'],
          ],
          playedAt: '2022-11-16T01:46:26.878Z',
        },
      ],
      twoDartCombinations: [
        {
          uuid: uuidv4(),
          result: 270,
          scores: [
            ['D17', 'D17', 'D17'],
            ['D16', 'D16', 'D16'],
            ['3', 'D20', '0'],
            ['4', 'D20', '0'],
            ['13', 'D16', '0'],
            ['6', 'D20', '0'],
            ['7', 'D20', '0'],
            ['16', 'D16', '0'],
            ['9', 'D20', '0'],
            ['18', 'D16', '0'],
            ['11', 'D20', '0'],
            ['12', 'D20', '0'],
            ['13', 'D20', '0'],
            ['14', 'D20', '0'],
            ['15', 'D20', '0'],
            ['16', 'D20', '0'],
            ['17', 'D20', '0'],
            ['18', 'D20', '0'],
            ['19', 'D20', '0'],
            ['20', 'D20', '0'],
          ],
          playedAt: '2022-11-16T01:25:36.150Z',
        },
      ],
      aroundTheCompass: [
        {
          uuid: uuidv4(),
          result: 45,
          scores: [
            ['D12', 'D12', 'D12'],
            ['D12', 'D12', 'D12'],
            ['D12', 'D12', 'D12'],
          ],
          round: 3,
          playedAt: '2022-11-16T01:42:27.811Z',
        },
        {
          uuid: uuidv4(),
          result: 45,
          scores: [
            ['D12', 'D12', 'D12'],
            ['D12', 'D12', 'D12'],
            ['D12', 'D12', 'D12'],
          ],
          round: 3,
          playedAt: '2022-11-16T01:44:01.238Z',
        },
        {
          uuid: uuidv4(),
          result: 45,
          scores: [
            ['D12', 'D12', 'D12'],
            ['D12', 'D12', 'D12'],
            ['D12', 'D12', 'D12'],
          ],
          round: 3,
          playedAt: '2022-11-16T01:45:00.538Z',
        },
      ],
      tonsUp: [
        {
          uuid: uuidv4(),
          result: 60,
          scores: [
            ['T20', 'D20', '0'],
            ['T20', 'D20', '0'],
            ['T20', 'D20', '0'],
          ],
          round: 3,
          playedAt: '2022-11-16T02:00:00.424Z',
        },
      ],
      route64: [
        {
          uuid: uuidv4(),
          result: 0,
          scores: [
            ['D20', 'D20', 'D20'],
            ['16', '16', '16'],
            ['20', '20', '20'],
          ],
          round: 3,
          playedAt: '2022-11-16T02:22:00.150Z',
        },
      ],
      eightyThrew: [
        {
          uuid: uuidv4(),
          result: 40,
          scores: [
            ['T20', 'D11', '0'],
            ['D-BULL', 'D16', '0'],
            ['D20', 'D20', 'D20'],
          ],
          round: 3,
          playedAt: '2022-11-16T02:36:42.051Z',
        },
      ],
      shanghaiNights: [
        {
          uuid: uuidv4(),
          result: 30,
          scores: [
            ['T20', 'D20', '20'],
            ['T20', '20', 'D20'],
            ['D20', 'D20', 'D20'],
          ],
          round: 3,
          playedAt: '2022-11-16T02:51:53.119Z',
        },
      ],
      switchHitter: [
        {
          uuid: uuidv4(),
          result: 18,
          scores: [
            ['D19', 'D19', '19'],
            ['19', '19', 'D19'],
            ['D19', 'D19', 'D19'],
          ],
          round: 3,
          playedAt: '2022-11-16T05:17:32.351Z',
        },
      ],
      bullyBully: [
        {
          uuid: uuidv4(),
          result: 21,
          scores: [
            ['D-BULL', 'S-BULL', '0'],
            ['D-BULL', 'S-BULL', '0'],
            ['D-BULL', 'S-BULL', '0'],
          ],
          round: 3,
          playedAt: '2022-11-29T06:11:20.639Z',
        },
      ],
      treblesForShow: [
        {
          uuid: uuidv4(),
          result: 18,
          scores: [
            ['D20', 'D20', 'D20'],
            ['D20', 'D20', 'D20'],
            ['20', '20', '20'],
          ],
          round: 3,
          playedAt: '2022-11-16T05:32:19.825Z',
        },
      ],
    },
  },
};
