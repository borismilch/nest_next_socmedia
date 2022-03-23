export type { IHeaderLink } from './static/IHeaderLink';
export type { ISideibarItem } from './static/ISidebartem';
export type { IUser } from './session/IUser';
export type { IComment, IPost } from './posts';
export type { MantineChangeEvent } from './utils/MantineChangeEvent';

import { CSSObject } from '@mantine/core';
export type CssStyles = Record<string, CSSObject>;
