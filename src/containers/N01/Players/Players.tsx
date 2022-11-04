import React, { FC } from 'react';
import {
  Editable,
  EditableInput,
  EditablePreview,
  Table,
  TableContainer,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

type PlayersProps = {
  players: string[];
  onUpdateName: (names: string[]) => void;
};

const Players: FC<PlayersProps> = ({ players, onUpdateName }) => {
  return (
    <>
      <TableContainer>
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th>
                <Editable
                  defaultValue={players[0]}
                  onChange={(e) => {
                    onUpdateName([e, players[1]]);
                  }}
                >
                  <EditablePreview />
                  <EditableInput />
                </Editable>
              </Th>
              <Th>
                <Editable
                  defaultValue={players[1]}
                  onChange={(e) => {
                    onUpdateName([players[0], e]);
                  }}
                >
                  <EditablePreview />
                  <EditableInput />
                </Editable>
              </Th>
            </Tr>
          </Thead>
        </Table>
      </TableContainer>
    </>
  );
};

export default Players;
