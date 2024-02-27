import { KeyValuePair } from './data';

export interface Plugin {
  id: PluginID;
  name: PluginName;
  requiredKeys: KeyValuePair[];
}

export interface PluginKey {
  pluginId: PluginID;
  requiredKeys: KeyValuePair[];
}

export enum PluginID {
  NONE = 'None'
  // GOOGLE_SEARCH = 'google-search',
}

export enum PluginName {
  NONE = 'None'
  // GOOGLE_SEARCH = 'Google Search',
}

export const Plugins: Record<PluginID, Plugin> = {
  [PluginID.NONE]: {
    id: PluginID.NONE,
    name: PluginName.NONE,
    requiredKeys: []
  }

  // [PluginID.GOOGLE_SEARCH]: {
  //   id: PluginID.GOOGLE_SEARCH,
  //   name: PluginName.GOOGLE_SEARCH,
  //   requiredKeys: [
  //     {
  //       key: 'GOOGLE_API_KEY',
  //       value: '',
  //     },
  //     {
  //       key: 'GOOGLE_CSE_ID',
  //       value: '',
  //     },
  //   ],
  // },
};

export const PluginList = Object.values(Plugins);
