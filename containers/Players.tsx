import React, { FC, useState } from "react";
import {
  Editable,
  EditableInput,
  EditablePreview,
  Table,
  TableContainer,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

type PlayersProps = {
  players: string[];
  onUpdateName: (names: string[]) => void;
};

const Players: FC<PlayersProps> = ({ players, onUpdateName }) => {
  const [names, setNames] = useState(players);
  return (
    <>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>
                <Editable
                  defaultValue={names[0]}
                  onChange={(e) => {
                    setNames([e, names[1]]);
                    onUpdateName([e, names[1]]);
                  }}
                >
                  <EditablePreview />
                  <EditableInput />
                </Editable>
              </Th>
              <Th>
                <Editable
                  defaultValue={names[1]}
                  onChange={(e) => {
                    setNames([names[0], e]);
                    onUpdateName([names[0], e]);
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
