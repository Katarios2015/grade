import React, {useEffect, useRef} from 'react';

import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';


const ContactsMap = () => {
  const defaultState = {
    center: [59.968142, 30.316425],
    zoom: 18,
  };

  return (
    <YMaps>
      <Map
      defaultState={defaultState}
      width={649}
      height={336}
      >
        <Placemark geometry={[59.968142, 30.316425]}
        options={{inColor:'islands#dotIcon'}} />
      </Map>
    </YMaps>
  );
};


export {ContactsMap};

