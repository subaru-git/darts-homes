import React, { FC, useState } from 'react';
import {
  Input,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
} from '@chakra-ui/react';
import { BiMoveVertical } from 'react-icons/bi';
import { GiHorizontalFlip } from 'react-icons/gi';
import RadioButton from '@/atoms/RadioButton/RadioButton';
import NewGameModal from '@/components/NewGameModal';
import SettingHeading from '@/components/SettingHeading';
import useLocale from '@/hooks/locale';

type NewGameProps = {
  onNewGame: (settings: ArrangeSettings) => void;
  currentSettings: ArrangeSettings;
  isFinished?: boolean;
};

const NewGame: FC<NewGameProps> = ({ onNewGame, currentSettings, isFinished = false }) => {
  const [settings, setSettings] = useState<ArrangeSettings>(currentSettings);
  const { t } = useLocale();
  const defaultHelp = { title: '', hint: { header: '', body: '' } };
  const sim = t.games.arrange.help.find((h) => h.title === 'Simulation Mode') || defaultHelp;
  const mode = t.games.arrange.help.find((h) => h.title === 'Game Mode') || defaultHelp;
  const board = t.games.arrange.help.find((h) => h.title === 'Board Type') || defaultHelp;
  const pro = t.games.arrange.help.find((h) => h.title === 'Pro Mode') || defaultHelp;
  const range = t.games.arrange.help.find((h) => h.title === 'Range') || defaultHelp;
  const out = t.games.arrange.help.find((h) => h.title === 'Out Option') || defaultHelp;
  const bull = t.games.arrange.help.find((h) => h.title === 'Bull Option') || defaultHelp;
  const fixed = t.games.arrange.help.find((h) => h.title === 'Fixed Score') || defaultHelp;
  return (
    <NewGameModal
      onNewGame={() => onNewGame(settings)}
      settings={
        <div className='flex flex-col gap-3'>
          <div className='flex flex-wrap gap-5'>
            <div>
              <SettingHeading
                title={sim?.title}
                hintHeader={sim?.hint.header}
                hintBody={sim?.hint.body}
              />
              <RadioButton
                values={[
                  { value: 'sim-off', label: 'Off', ariaLabel: 'simulation off' },
                  { value: 'sim-on', label: 'On', ariaLabel: 'simulation on' },
                ]}
                defaultValue={settings.simulation ? 'sim-on' : 'sim-off'}
                onChange={(sim) =>
                  setSettings({ ...settings, simulation: sim === 'sim-on' ? true : false })
                }
              />
            </div>
            <div>
              <SettingHeading
                title={mode?.title}
                hintHeader={mode?.hint.header}
                hintBody={mode?.hint.body}
              />
              <RadioButton
                values={[
                  { value: '3-darts', label: '3 darts', ariaLabel: '3 darts' },
                  { value: '6-darts', label: '6 darts', ariaLabel: '6 darts' },
                  { value: '1-leg', label: '1 Leg', ariaLabel: '1 leg' },
                ]}
                onChange={(mode) =>
                  setSettings({
                    ...settings,
                    mode: mode as ArrangeGameMode,
                  })
                }
                defaultValue={settings.mode}
              />
            </div>
            <div>
              <SettingHeading
                title={board?.title}
                hintHeader={board?.hint.header}
                hintBody={board?.hint.body}
              />
              <RadioButton
                values={[
                  { value: 'soft', label: 'Soft', ariaLabel: 'soft' },
                  { value: 'hard', label: 'Hard', ariaLabel: 'hard' },
                ]}
                onChange={(board) =>
                  setSettings({
                    ...settings,
                    hard: board === 'hard' ? true : false,
                  })
                }
                defaultValue={settings.hard ? 'hard' : 'soft'}
              />
            </div>
            <div>
              <SettingHeading
                title={pro?.title}
                hintHeader={pro?.hint.header}
                hintBody={pro?.hint.body}
              />
              <RadioButton
                values={[
                  { value: 'pro-off', label: 'Off', ariaLabel: 'pro off' },
                  { value: 'pro-on', label: 'On', ariaLabel: 'pro on' },
                ]}
                defaultValue={settings.pro ? 'pro-on' : 'pro-off'}
                onChange={(pro) =>
                  setSettings({ ...settings, pro: pro === 'pro-on' ? true : false })
                }
              />
            </div>
          </div>
          <div>
            <SettingHeading
              title={range?.title}
              hintHeader={range?.hint.header}
              hintBody={range?.hint.body}
            />
            <div className='px-4 pt-4'>
              <GiHorizontalFlip />
              <Slider
                onChange={(range) =>
                  setSettings({ ...settings, range: { ...settings.range, x: range } })
                }
                value={settings.range.x}
                max={210}
                isDisabled={!settings.simulation}
                aria-label='range'
              >
                <SliderMark value={0}>0</SliderMark>
                <SliderMark value={44}>44</SliderMark>
                <SliderMark value={210} ml={-5}>
                  210
                </SliderMark>
                <SliderMark
                  value={settings.range.x}
                  textAlign='center'
                  bg='blue.500'
                  color='white'
                  mt='-10'
                  ml='-5'
                  w='16'
                >
                  {settings.range.x}mm
                </SliderMark>
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
            </div>
            <div className='px-4 pt-10'>
              <BiMoveVertical />
              <Slider
                onChange={(range) =>
                  setSettings({ ...settings, range: { ...settings.range, y: range } })
                }
                value={settings.range.y}
                max={210}
                isDisabled={!settings.simulation}
                aria-label='range'
              >
                <SliderMark value={0}>0</SliderMark>
                <SliderMark value={44}>44</SliderMark>
                <SliderMark value={210} ml={-5}>
                  210
                </SliderMark>
                <SliderMark
                  value={settings.range.y}
                  textAlign='center'
                  bg='blue.500'
                  color='white'
                  mt='-10'
                  ml='-5'
                  w='16'
                >
                  {settings.range.y}mm
                </SliderMark>
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
            </div>
          </div>
          <div>
            <SettingHeading
              title={out?.title}
              hintHeader={out?.hint.header}
              hintBody={out?.hint.body}
            />
            <RadioButton
              values={[
                { value: 'single', label: 'Single Out', ariaLabel: 'single out' },
                { value: 'double', label: 'Double Out', ariaLabel: 'double out' },
                { value: 'master', label: 'Master Out', ariaLabel: 'master out' },
              ]}
              onChange={(out) =>
                setSettings({
                  ...settings,
                  out: out as OutOption,
                  separate: out === 'double' ? true : settings.separate,
                })
              }
              defaultValue={settings.out}
            />
          </div>
          <div>
            <SettingHeading
              title={bull?.title}
              hintHeader={bull?.hint.header}
              hintBody={bull?.hint.body}
            />
            <RadioButton
              values={[
                { value: 'fat', label: 'Fat Bull', ariaLabel: 'fat' },
                { value: 'separate', label: 'Separate Bull', ariaLabel: 'separate' },
              ]}
              onChange={(bull) =>
                setSettings({
                  ...settings,
                  separate: bull === 'separate' ? true : false,
                })
              }
              defaultValue={settings.out === 'double' || settings.separate ? 'separate' : 'fat'}
              disabled={settings.out === 'double'}
            />
          </div>
          <div>
            <SettingHeading
              title={fixed?.title}
              hintHeader={fixed?.hint.header}
              hintBody={fixed?.hint.body}
            />
            <Input
              type='number'
              defaultValue={settings.targets?.[0] || ''}
              onChange={(e) => {
                if (e.target.value)
                  setSettings({
                    ...settings,
                    targets: [...Array(8)].fill(parseInt(e.target.value)),
                  });
                else setSettings({ ...settings, targets: [] });
              }}
              disabled={settings.mode === '1-leg'}
            ></Input>
          </div>
        </div>
      }
      isFinished={isFinished}
    />
  );
};

export default NewGame;
