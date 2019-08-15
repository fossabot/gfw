import { createAction, createThunkAction } from 'redux-tools';
import { setComponentStateToUrl } from 'utils/stateToUrl';

import { setAreasProvider, deleteAreaProvider } from 'services/areas';
import {
  setArea,
  setAreas,
  viewArea,
  clearArea
} from 'providers/areas-provider/actions';

export const setSaveAOISaving = createAction('setSaveAOISaving');
export const resetSaveAOI = createAction('resetSaveAOI');

export const setSaveAOISettings = createThunkAction(
  'setSaveAOISettings',
  change => (dispatch, state) =>
    dispatch(
      setComponentStateToUrl({
        key: 'saveAOI',
        change,
        state
      })
    )
);

export const saveAOI = createThunkAction(
  'saveAOI',
  ({
    name,
    email,
    lang,
    tags,
    changesEmail,
    monthlyEmail,
    receiveAlerts,
    activeAreaId,
    viewAfterSave,
    method
  }) => (dispatch, getState) => {
    const { modalSaveAOI, location, geostore } = getState();
    if (modalSaveAOI && !modalSaveAOI.saving) {
      dispatch(setSaveAOISaving({ saving: true, error: false }));

      const { data: geostoreData } = geostore || {};
      const { id: geostoreId } = geostoreData || {};
      const { payload: { type, adm0, adm1, adm2 } } = location || {};
      const isCountry = type === 'country';

      const postData = {
        name,
        id: activeAreaId,
        application: 'gfw',
        geostore: geostoreId,
        resource: {
          type: 'EMAIL',
          content: email
        },
        language: lang,
        iso: {
          region: isCountry ? adm1 : null,
          subRegion: isCountry ? adm2 : null,
          country: isCountry ? adm0 : null
        },
        use: {},
        changesEmail,
        monthlyEmail,
        receiveAlerts,
        tags
      };

      setAreasProvider(postData, method)
        .then(response => {
          if (response.data && response.data.data) {
            const area = response.data.data;
            const { id, attributes } = area || {};
            dispatch(setArea({ id, ...attributes }));
            dispatch(setSaveAOISaving({ saving: false, error: false }));
            if (viewAfterSave) {
              dispatch(viewArea(id));
            }
          }
        })
        .catch(error => {
          dispatch(
            setSaveAOISaving({
              saving: false,
              error: true
            })
          );
          console.info(error);
        });
    }
  }
);

export const deleteAOI = createThunkAction(
  'deleteAOI',
  ({ id, clearAfterDelete }) => (dispatch, getState) => {
    const { data: areas } = getState().areas || {};
    dispatch(setSaveAOISaving({ saving: true, error: false }));

    deleteAreaProvider(id)
      .then(response => {
        if (
          response.status &&
          response.status >= 200 &&
          response.status < 300
        ) {
          dispatch(setAreas(areas.filter(a => a.id !== id)));
          dispatch(setSaveAOISaving({ saving: false, error: false }));
          if (clearAfterDelete) {
            dispatch(clearArea());
          }
        }
      })
      .catch(error => {
        dispatch(
          setSaveAOISaving({
            saving: false,
            error: true
          })
        );
        console.info(error);
      });
  }
);
