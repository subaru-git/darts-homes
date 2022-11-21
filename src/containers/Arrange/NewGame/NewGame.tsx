import React, { FC, useState } from 'react';
import {
  Box,
  Flex,
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
import { OutOption } from '@/lib/ArrangeGame/ArrangeGame';

type NewGameProps = {
  onNewGame: (settings: ArrangeGameSettings) => void;
  isFinished: boolean;
  currentSettings: ArrangeGameSettings;
};

const NewGame: FC<NewGameProps> = ({ onNewGame, isFinished, currentSettings }) => {
  const [settings, setSettings] = useState<ArrangeGameSettings>(currentSettings);
  const { t } = useLocale();
  const defaultHelp = { title: '', hint: { header: '', body: '' } };
  const sim = t.games.arrange.help.find((h) => h.title === 'Simulation Mode') || defaultHelp;
  const range = t.games.arrange.help.find((h) => h.title === 'Range') || defaultHelp;
  const out = t.games.arrange.help.find((h) => h.title === 'Out Option') || defaultHelp;
  const bull = t.games.arrange.help.find((h) => h.title === 'Bull Option') || defaultHelp;
  return (
    <NewGameModal
      onNewGame={() => onNewGame(settings)}
      settings={
        <Flex direction='column' gap={10}>
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
                <Radio value='single'>Single Out</Radio>
                <Radio value='double'>Double Out</Radio>
                <Radio value='master'>Master Out</Radio>
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
        </Flex>
      }
      isFinished={isFinished}
    />
  );
};

export default NewGame;
