import {StrictBuilder} from "builder-pattern";
import {on} from "@app/date.helper";

export type Kitty = {
  id: string;
  name: string;
  description: string;
  goal: number;
  currentAmount: number;
  imageUrl?: string;
  owner: string;
  status: KittyStatus;
  createdAt: Date;
  updatedAt: Date;
}

export enum KittyStatus {
  PENDING = 'PENDING',
  OPEN = 'OPEN',
  CLOSED = 'CLOSED'
}

export type CreateKitty = {
  name: string;
  description: string;
  goal: number;
  imageUrl: string;
  owner: string;
}

export function StubKittyBuilder() {
  return StrictBuilder<Kitty>()
  .id("1")
  .name('Kitty 1')
  .description('Description 1')
  .goal(100)
  .currentAmount(50)
  .imageUrl('https://placekitten.com/200/300')
  .owner('Georges DEFO')
  .status(KittyStatus.OPEN)
  .createdAt(on('05/01/2025'))
  .updatedAt(on('05/01/2025'));
}
