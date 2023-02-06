import React, { FC, useState } from 'react';
import {
  Box,
  Flex,
  Input,
  Radio,
  RadioGroup,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Switch,
  Text,
} from '@chakra-ui/react';
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
  const board = t.games.arrange.help.find((h) => h.title === 'Board Type') || defaultHelp;
  const range = t.games.arrange.help.find((h) => h.title === 'Range') || defaultHelp;
  const out = t.games.arrange.help.find((h) => h.title === 'Out Option') || defaultHelp;
  const bull = t.games.arrange.help.find((h) => h.title === 'Bull Option') || defaultHelp;
  const fixed = t.games.arrange.help.find((h) => h.title === 'Fixed Score') || defaultHelp;
  return (
    <NewGameModal
      onNewGame={() => onNewGame(settings)}
      settings={
        <Flex direction='column' gap={10}>
          <Flex gap={10}>
            <Box>
              <SettingHeading
                title={sim?.title}
                hintHeader={sim?.hint.header}
                hintBody={sim?.hint.body}
              />
              <Switch
                defaultChecked={settings.simulation}
                isChecked={settings.simulation}
                onChange={(e) => setSettings({ ...settings, simulation: e.target.checked })}
              />
            </Box>
            <Box>
              <SettingHeading
                title={board?.title}
                hintHeader={board?.hint.header}
                hintBody={board?.hint.body}
              />
              <Flex gap={6}>
                <Text>Soft</Text>
                <Switch
                  defaultChecked={settings.hard}
                  isChecked={settings.hard}
                  onChange={(e) => setSettings({ ...settings, hard: e.target.checked })}
                />
                <Text>Hard</Text>
              </Flex>
            </Box>
          </Flex>
          <Box>
            <SettingHeading
              title={range?.title}
              hintHeader={range?.hint.header}
              hintBody={range?.hint.body}
            />
            <Box px={4} pt={10}>
              <Slider
                onChange={(range) => setSettings({ ...settings, range })}
                value={settings.range}
                max={210}
                isDisabled={!settings.simulation}
                aria-label='range'
              >
                <SliderMark value={0}>0</SliderMark>
                <SliderMark value={44}>44</SliderMark>
                <SliderMark value={210}>210</SliderMark>
                <SliderMark
                  value={settings.range}
                  textAlign='center'
                  bg='blue.500'
                  color='white'
                  mt='-10'
                  ml='-5'
                  w='16'
                >
                  {settings.range}mm
                </SliderMark>
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
            </Box>
          </Box>
          <Box>
            <SettingHeading
              title={out?.title}
              hintHeader={out?.hint.header}
              hintBody={out?.hint.body}
            />
            <RadioGroup
              onChange={(out) =>
                setSettings({
                  ...settings,
                  out: out as OutOption,
                  separate: out === 'double' ? true : settings.separate,
                })
              }
              value={settings.out}
            >
              <Flex gap={4}>
                <Radio value='single' aria-label='single out'>
                  Single Out
                </Radio>
                <Radio value='double' aria-label='double out'>
                  Double Out
                </Radio>
                <Radio value='master' aria-label='master out'>
                  Master Out
                </Radio>
              </Flex>
            </RadioGroup>
          </Box>
          <Box>
            <SettingHeading
              title={bull?.title}
              hintHeader={bull?.hint.header}
              hintBody={bull?.hint.body}
            />
            <Flex gap={10}>
              <Text>Fat Bull</Text>
              <Switch
                onChange={(e) => setSettings({ ...settings, separate: e.target.checked })}
                defaultChecked={settings.out === 'double' || settings.separate}
                isChecked={settings.out === 'double' || settings.separate}
                isDisabled={settings.out === 'double'}
              />
              <Text>Separate Bull</Text>
            </Flex>
          </Box>
          <Box>
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
            ></Input>
          </Box>
        </Flex>
      }
      isFinished={isFinished}
    />
  );
};

export default NewGame;
