import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class UserInformation {
  readonly id: string;
  readonly address?: string;
  readonly books?: string;
  readonly allergies?: string;
  readonly snacks?: string;
  constructor(init: ModelInit<UserInformation>);
  static copyOf(source: UserInformation, mutator: (draft: MutableModel<UserInformation>) => MutableModel<UserInformation> | void): UserInformation;
}