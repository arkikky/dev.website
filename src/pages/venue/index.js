import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

// @style
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

// @components
import HeadGraphSeo from '@components/Head';
import Main from '@components/Main';

const Vanue = (props) => {
  const mapContainerRef = useRef();
  const mapRef = useRef();
  useEffect(() => {
    if (!mapContainerRef.current) return;
    const baseUrl = process.env.NEXT_PUBLIC_URL;
    mapboxgl.accessToken =
      'pk.eyJ1IjoiZGlja3lpY24iLCJhIjoiY204Y2lqaWxnMGRzbzJsb3drcHJxcjI2dCJ9.bTzPp61FtB4H7vhV49YLhQ';

    const initializeMap = async () => {
      try {
        const map = new mapboxgl.Map({
          container: mapContainerRef.current,
          // style: 'mapbox://styles/dickyicn/cm8feauk100uv01se5od193rp',
          style: 'mapbox://styles/dickyicn/cm8o6ynl0003e01qzfbhzb1lp',
          center: [115.09905, -8.6301],
          zoom: 16.55,
          pitch: 62,
          minZoom: 17,
          maxZoom: 23,
          antialias: true,
          attributionControl: false,
        });
        mapRef.current = map;
        await new Promise((resolve) => {
          map.on('load', resolve);
        });
        map.addControl(
          new mapboxgl.AttributionControl({
            customAttribution: 'Coinfest Asia 2025',
          })
        );
        map.addControl(
          new mapboxgl.NavigationControl({
            visualizePitch: true,
          }),
          'bottom-right'
        );
        map.addControl(
          new mapboxgl.GeolocateControl({
            positionOptions: {
              enableHighAccuracy: true,
            },
            trackUserLocation: true,
            showUserHeading: true,
          })
        );

        // @added-point
        const customPoints = {
          features: [
            {
              type: 'Feature',
              properties: {
                title: 'Funcky Place',
              },
              geometry: {
                coordinates: [115.09743924240479, -8.629686921135175],
                type: 'Point',
              },
            },
          ],
          type: 'FeatureCollection',
        };
        function forwardGeocoder(query) {
          const matchingFeatures = [];
          for (const feature of customPoints?.features) {
            if (
              feature.properties.title
                .toLowerCase()
                .includes(query.toLowerCase())
            ) {
              feature['place_name'] = `🌲 ${feature.properties.title}`;
              feature['center'] = feature.geometry.coordinates;
              feature['place_type'] = ['park'];
              matchingFeatures.push(feature);
            }
          }
          return matchingFeatures;
        }
        map.addControl(
          new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            localGeocoder: forwardGeocoder,
            zoom: 14,
            placeholder: 'Enter search e.g. Lincoln Park',
            mapboxgl: mapboxgl,
            marker: true,
          })
        );
        // map.addControl(
        //   new MapboxDirections({
        //     accessToken: mapboxgl.accessToken,
        //     unit: 'metric',
        //     profile: 'mapbox/cycling',
        //   }),
        //   'top-left'
        // );

        // @eraser-basecamp
        // map.addSource('eraser', {
        //   type: 'geojson',
        //   data: {
        //     type: 'FeatureCollection',
        //     features: [
        //       {
        //         type: 'Feature',
        //         properties: {},
        //         geometry: {
        //           type: 'Polygon',
        //           coordinates: [
        //             [
        //               [115.09557632815414, -8.628735587720433],
        //               [115.09557317061937, -8.628735741084395],
        //               [115.09557004349338, -8.628736199699306],
        //               [115.09556697689206, -8.628736959148457],
        //               [115.09556400034852, -8.628738012117937],
        //               [115.09556114252847, -8.628739348467075],
        //               [115.09555843095423, -8.628740955326103],
        //               [115.09555589173976, -8.628742817220095],
        //               [115.09555354933913, -8.628744916217995],
        //               [115.09555142631089, -8.628747232105312],
        //               [115.09554954310099, -8.628749742578787],
        //               [115.09554791784576, -8.62875242346119],
        //               [115.09554656619727, -8.628755248934166],
        //               [115.09554550117268, -8.628758191786865],
        //               [115.09554473302875, -8.62876122367801],
        //               [115.09554426916311, -8.628764315408835],
        //               [115.09554411404311, -8.628767437204282],
        //               [115.0955442691626, -8.628770558999754],
        //               [115.09554473302771, -8.628773650730656],
        //               [115.09554550117117, -8.628776682621925],
        //               [115.09554656619535, -8.628779625474792],
        //               [115.0955479178435, -8.62878245094797],
        //               [115.0955495430985, -8.628785131830606],
        //               [115.09555142630825, -8.628787642304335],
        //               [115.09555354933643, -8.628789958191911],
        //               [115.09555589173712, -8.628792057190074],
        //               [115.0955584309517, -8.628793919084316],
        //               [115.0955611425262, -8.628795525943579],
        //               [115.0955640003466, -8.628796862292921],
        //               [115.09556697689057, -8.628797915262567],
        //               [115.09557004349234, -8.628798674711842],
        //               [115.09557317061885, -8.62879913332683],
        //               [115.09557632815414, -8.62879928669082],
        //               [115.09557948568944, -8.62879913332683],
        //               [115.09558261281593, -8.628798674711842],
        //               [115.09558567941772, -8.628797915262567],
        //               [115.09558865596168, -8.628796862292921],
        //               [115.09559151378208, -8.628795525943579],
        //               [115.09559422535658, -8.628793919084316],
        //               [115.09559676457116, -8.628792057190074],
        //               [115.09559910697185, -8.628789958191911],
        //               [115.09560123000003, -8.628787642304335],
        //               [115.09560311320979, -8.628785131830606],
        //               [115.09560473846479, -8.62878245094797],
        //               [115.09560609011292, -8.628779625474792],
        //               [115.0956071551371, -8.628776682621925],
        //               [115.09560792328058, -8.628773650730656],
        //               [115.09560838714567, -8.628770558999754],
        //               [115.09560854226517, -8.628767437204282],
        //               [115.09560838714516, -8.628764315408835],
        //               [115.09560792327953, -8.62876122367801],
        //               [115.0956071551356, -8.628758191786865],
        //               [115.095606090111, -8.628755248934166],
        //               [115.09560473846253, -8.62875242346119],
        //               [115.0956031132073, -8.628749742578787],
        //               [115.09560122999738, -8.628747232105312],
        //               [115.09559910696915, -8.628744916217995],
        //               [115.09559676456851, -8.628742817220095],
        //               [115.09559422535405, -8.628740955326103],
        //               [115.09559151377982, -8.628739348467075],
        //               [115.09558865595976, -8.628738012117937],
        //               [115.09558567941622, -8.628736959148457],
        //               [115.09558261281491, -8.628736199699306],
        //               [115.09557948568892, -8.628735741084395],
        //               [115.09557632815414, -8.628735587720433],
        //               [115.09561439583075, -8.628875620786724],
        //               [115.09561129417864, -8.628875771436366],
        //               [115.09560822239712, -8.628876221934457],
        //               [115.09560521006911, -8.628876967942455],
        //               [115.09560228620501, -8.628878002275894],
        //               [115.09559947896321, -8.628879314973585],
        //               [115.09559681537894, -8.628880893393527],
        //               [115.09559432110402, -8.62888272233468],
        //               [115.09559202015963, -8.62888478418335],
        //               [115.09558993470516, -8.628887059082803],
        //               [115.09558808482466, -8.62888952512452],
        //               [115.09558648833351, -8.628892158559175],
        //               [115.09558516060675, -8.628894934025357],
        //               [115.09558411443118, -8.62889782479381],
        //               [115.09558335988201, -8.628900803024857],
        //               [115.09558290422599, -8.628903840036507],
        //               [115.09558275185132, -8.628906906580678],
        //               [115.09558290422548, -8.628909973124873],
        //               [115.09558335988102, -8.628913010136596],
        //               [115.09558411442973, -8.628915988367766],
        //               [115.0955851606049, -8.628918879136378],
        //               [115.09558648833132, -8.628921654602754],
        //               [115.09558808482224, -8.628924288037636],
        //               [115.09558993470259, -8.628926754079595],
        //               [115.095592020157, -8.628929028979302],
        //               [115.09559432110142, -8.628931090828223],
        //               [115.09559681537652, -8.628932919769621],
        //               [115.09559947896102, -8.628934498189787],
        //               [115.09560228620316, -8.628935810887675],
        //               [115.09560521006766, -8.628936845221274],
        //               [115.09560822239612, -8.628937591229393],
        //               [115.09561129417813, -8.628938041727558],
        //               [115.09561439583075, -8.628938192377223],
        //               [115.09561749748337, -8.628938041727558],
        //               [115.09562056926536, -8.628937591229393],
        //               [115.09562358159381, -8.628936845221274],
        //               [115.09562650545833, -8.628935810887675],
        //               [115.09562931270047, -8.628934498189787],
        //               [115.09563197628498, -8.628932919769621],
        //               [115.09563447056007, -8.628931090828223],
        //               [115.09563677150449, -8.628929028979302],
        //               [115.09563885695891, -8.628926754079595],
        //               [115.09564070683925, -8.628924288037636],
        //               [115.09564230333017, -8.628921654602754],
        //               [115.0956436310566, -8.628918879136378],
        //               [115.09564467723177, -8.628915988367766],
        //               [115.09564543178047, -8.628913010136596],
        //               [115.09564588743599, -8.628909973124873],
        //               [115.09564603981018, -8.628906906580678],
        //               [115.0956458874355, -8.628903840036507],
        //               [115.09564543177947, -8.628900803024857],
        //               [115.09564467723031, -8.62889782479381],
        //               [115.09564363105473, -8.628894934025357],
        //               [115.09564230332798, -8.628892158559175],
        //               [115.09564070683685, -8.62888952512452],
        //               [115.09563885695634, -8.628887059082803],
        //               [115.09563677150187, -8.62888478418335],
        //               [115.09563447055748, -8.62888272233468],
        //               [115.09563197628255, -8.628880893393527],
        //               [115.09562931269828, -8.628879314973585],
        //               [115.09562650545648, -8.628878002275894],
        //               [115.09562358159238, -8.628876967942455],
        //               [115.09562056926438, -8.628876221934457],
        //               [115.09561749748286, -8.628875771436366],
        //               [115.09561439583075, -8.628875620786724],
        //             ],
        //           ],
        //         },
        //       },
        //     ],
        //   },
        // });
        // map.addLayer({
        //   id: 'eraser',
        //   type: 'clip',
        //   source: 'eraser',
        //   layout: {
        //     'clip-layer-scope': ['basemap'],
        //   },
        // });
        // map.addSource('models', {
        //   type: 'geojson',
        //   data: {
        //     type: 'FeatureCollection',
        //     features: [
        //       {
        //         type: 'Feature',
        //         properties: {
        //           'model-uri': `${baseUrl}/assets/venue/CaPatungNuanu-Left.glb`,
        //           rotation: [0.0, 0.0, -18.0],
        //           scale: [14, 14, 26],
        //           color: '#A5A5A5',
        //           intensity: 0.2,
        //         },
        //         geometry: {
        //           coordinates: [115.095575693694, -8.628768064489606],
        //           type: 'Point',
        //         },
        //       },
        //       {
        //         type: 'Feature',
        //         properties: {
        //           'model-uri': `${baseUrl}/assets/venue/tree_obj.glb`,
        //           rotation: [0.0, 0.0, -18.0],
        //           scale: [0.5, 0.5, 0.5],
        //           color: 'transparent',
        //           intensity: 0,
        //         },
        //         geometry: {
        //           type: 'Point',
        //           coordinates: [115.09837114220659, -8.629143507880556],
        //         },
        //       },
        //     ],
        //   },
        // });
        // map.addLayer({
        //   id: 'ca25Models',
        //   type: 'model',
        //   slot: 'middle',
        //   source: 'models',
        //   minzoom: 15,
        //   layout: {
        //     'model-id': ['get', 'model-uri'],
        //   },
        //   paint: {
        //     'model-color': ['get', 'color'],
        //     'model-opacity': 1,
        //     'model-rotation': ['get', 'rotation'],
        //     'model-scale': ['get', 'scale'],
        //     'model-cast-shadows': true,
        //     'model-cutoff-fade-range': 1,
        //     'model-color-mix-intensity': ['get', 'intensity'],
        //     'model-roughness': 1,
        //   },
        // });
      } catch (error) {
        // console.error('Error initializing map:', error);
      }
    };

    initializeMap();

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, []);

  return (
    <>
      {/* @head */}
      <HeadGraphSeo title={`404 Page is Gone!`} otherPage={true} />

      <Main className={'fixed inset-x-0 inset-y-0'}>
        <div
          id="map"
          className="z-10 block h-full w-full"
          ref={mapContainerRef}
        />
      </Main>
    </>
  );
};

Vanue.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
export const getStaticProps = async () => {
  try {
    return {
      props: {
        mode: 'dark',
      },
      revalidate: 900,
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};
export default Vanue;
