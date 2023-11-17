import React from 'react';

import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import {ADDRESS_COORDS} from '../utils/consts';

const ContactsMap = () => {

  const defaultState = {
    center: ADDRESS_COORDS,
    zoom: 18,
  };

  return (
    <YMaps>
      <Map defaultState={defaultState} width={649} height={336}>
        <Placemark
          geometry={ADDRESS_COORDS}
        />
      </Map>
    </YMaps>
  );
};

export { ContactsMap };
