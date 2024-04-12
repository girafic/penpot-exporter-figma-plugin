import { PenpotFile } from '../lib/penpot';
import { GROUP_TYPE } from '../lib/types/group/groupAttributes';
import { GroupShape } from '../lib/types/group/groupShape';
import { createPenpotItem } from './createPenpotItem';

export const createPenpotGroup = (
  file: PenpotFile,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  { type, children = [], ...rest }: GroupShape
) => {
  file.addGroup({
    type: GROUP_TYPE,
    ...rest
  });

  for (const child of children) {
    createPenpotItem(file, child);
  }

  file.closeGroup();
};
