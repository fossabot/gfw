// intro
import intro1x from 'pages/topics/assets/climate/intro/leaf.png';
import intro2x from 'pages/topics/assets/climate/intro/leaf@2x.png';

// slides
import climate1 from 'pages/topics/assets/climate/slides/climate1.png';
import climate1Large from 'pages/topics/assets/climate/slides/climate1@2x.png';
import climate2 from 'pages/topics/assets/climate/slides/climate2.png';
import climate2Large from 'pages/topics/assets/climate/slides/climate2@2x.png';
import climate3 from 'pages/topics/assets/climate/slides/climate3.png';
import climate3Large from 'pages/topics/assets/climate/slides/climate3@2x.png';
import climate4 from 'pages/topics/assets/climate/slides/climate4.png';
import climate4Large from 'pages/topics/assets/climate/slides/climate4@2x.png';

// cards
import monitor from 'pages/topics/assets/climate/cards/monitor.png';
import monitorLarge from 'pages/topics/assets/climate/cards/monitor@2x.png';
import explore from 'pages/topics/assets/climate/cards/explore.png';
import exploreLarge from 'pages/topics/assets/climate/cards/explore@2x.png';
import carbon from 'pages/topics/assets/climate/cards/carbon.png';
import carbonLarge from 'pages/topics/assets/climate/cards/carbon@2x.png';
import calculate from 'pages/topics/assets/climate/cards/calculate.png';
import calculateLarge from 'pages/topics/assets/climate/cards/calculate@2x.png';
import insights from 'pages/topics/assets/climate/cards/insights.png';
import insightsLarge from 'pages/topics/assets/climate/cards/insights@2x.png';
import research from 'pages/topics/assets/climate/cards/research.png';
import researchLarge from 'pages/topics/assets/climate/cards/research@2x.png';

// animations
import scene1 from 'pages/topics/assets/climate/animations/scene1.json';
import birds1 from 'pages/topics/assets/climate/animations/birds1.json';
import birds2 from 'pages/topics/assets/climate/animations/birds2.json';
import smoke from 'pages/topics/assets/climate/animations/smoke.json';
import scene3 from 'pages/topics/assets/climate/animations/scene3.json';
import scene4 from 'pages/topics/assets/climate/animations/scene4.json';
import birds4 from 'pages/topics/assets/climate/animations/birds4.json';
import arrows from 'pages/topics/assets/climate/animations/arrow_test.svg';

export default {
  intro: {
    title:
      'Forests can provide 30% of the solution to keeping global warming below 2°C.',
    text:
      'Forests remove and store carbon from the atmosphere, representing a cost-effective solution for mitigating climate change. The loss or degradation of forests compromises their ability to remove emissions.',
    img1x: intro1x,
    img2x: intro2x
  },
  slides: [
    {
      title: 'Climate',
      subtitle: 'Natural state',
      text:
        'Forests provide a natural solution for removing carbon from the atmosphere. Forests absorb and store carbon emissions caused by human activity, like burning fossel fuels, which include coal, natural gas, and oil.',
      img1x: climate1,
      img2x: climate1Large,
      prompts: [
        {
          id: 'climate-learn',
          content: 'Read how forests remove carbon from the atmosphere.',
          btnText: 'Read the blog',
          link:
            'https://blog.globalforestwatch.org/climate/conserving-forests-could-cut-carbon-emissions-as-much-as-getting-rid-of-every-car-on-earth',
          position: [40, 30]
        },
        {
          id: 'climate-explore',
          content:
            'GFW maps areas helping remove carbon from the atmosphere through tree cover gain.',
          btnText: 'Explore the data',
          link:
            '/map?map=eyJjZW50ZXIiOnsibGF0IjoyNywibG5nIjoxMn0sInpvb20iOjIsImRhdGFzZXRzIjpbeyJkYXRhc2V0IjoiNzBlMjU0OWMtZDcyMi00NGE2LWE4ZDctNGEzODVkNzg1NjVlIiwib3BhY2l0eSI6MSwidmlzaWJpbGl0eSI6dHJ1ZSwibGF5ZXJzIjpbIjNiMjJhNTc0LTI1MDctNGI0YS1hMjQ3LTgwMDU3YzFhMWFkNCJdfSx7ImRhdGFzZXQiOiJmZGM4ZGMxYi0yNzI4LTRhNzktYjIzZi1iMDk0ODUwNTJiOGQiLCJsYXllcnMiOlsiNmY2Nzk4ZTYtMzllYy00MTYzLTk3OWUtMTgyYTc0Y2E2NWVlIiwiYzVkMWUwMTAtMzgzYS00NzEzLTlhYWEtNDRmNzI4YzA1NzFjIl0sIm9wYWNpdHkiOjEsInZpc2liaWxpdHkiOnRydWV9XSwiYmFzZW1hcCI6eyJ2YWx1ZSI6ImRlZmF1bHQifSwibGFiZWwiOiJkZWZhdWx0IiwiY2FuQm91bmQiOnRydWV9&menu=eyJtZW51U2VjdGlvbiI6IiIsImRhdGFzZXRDYXRlZ29yeSI6IiJ9',
          position: [65, 55]
        }
      ],
      animations: [
        {
          id: 'climate-scene1',
          data: scene1
        },
        {
          id: 'climate-birds1',
          data: birds1,
          behind: true
        }
      ]
    },
    {
      title: 'Climate',
      subtitle: 'Drivers of change',
      text:
        "Forests' ability to absorb carbon from the atmosphere can be compromised by conversion into agricultural lands, commodity production, urbanization, disease and fires that cause forest loss. When a tree burns or decays, the carbon stored is released into the atmosphere, further exacerbating climate change.",
      img1x: climate2,
      img2x: climate2Large,
      prompts: [
        {
          id: 'climate-learn',
          content:
            "Read about GFW's research to identify dominant drivers of tree cover loss globally.",
          btnText: 'Read the blog',
          link:
            'https://blog.globalforestwatch.org/data/when-a-tree-falls-is-it-deforestation',
          position: [52, 58]
        },
        {
          id: 'climate-explore',
          content:
            'Read how extreme fires are becoming more common as global temperatures increase.',
          btnText: 'Read the blog',
          link:
            'https://blog.globalforestwatch.org/fires/weather-patterns-that-fueled-great-smoky-mountain-forest-fire-could-increase-with-climate-change',
          position: [45, 40]
        }
      ],
      animations: [
        {
          id: 'climate-smoke',
          data: smoke
        },
        {
          id: 'climate-scene2',
          data: arrows,
          type: 'svg',
          className: 'co2-arrows'
        },
        {
          id: 'climate-birds2',
          data: birds2,
          behind: true
        }
      ]
    },
    {
      title: 'Climate',
      subtitle: 'Compromised state',
      text:
        "With fewer trees to help absorb and regulate carbon in the atmopshere, the Earth's temperature rises and the effects of climate change increase.",
      img1x: climate3,
      img2x: climate3Large,
      prompts: [
        {
          id: 'climate-explore',
          content:
            'GFW data show carbon emissions from tropical tree cover loss.',
          btnText: 'Explore the data',
          link:
            '/map?map=eyJjZW50ZXIiOnsibGF0IjoyNywibG5nIjoxMn0sInpvb20iOjIsImRhdGFzZXRzIjpbeyJkYXRhc2V0IjoiODFjODAyYWEtNWZlYi00ZmJlLTk5ODYtOGYzMGMwNTk3YzRkIiwib3BhY2l0eSI6MSwidmlzaWJpbGl0eSI6dHJ1ZSwibGF5ZXJzIjpbImYxMGJkZWQ0LTk0ZTItNDBiNi04NjAyLWFlNWJkZmMwN2MwOCJdfSx7ImRhdGFzZXQiOiJmZGM4ZGMxYi0yNzI4LTRhNzktYjIzZi1iMDk0ODUwNTJiOGQiLCJsYXllcnMiOlsiNmY2Nzk4ZTYtMzllYy00MTYzLTk3OWUtMTgyYTc0Y2E2NWVlIiwiYzVkMWUwMTAtMzgzYS00NzEzLTlhYWEtNDRmNzI4YzA1NzFjIl0sIm9wYWNpdHkiOjEsInZpc2liaWxpdHkiOnRydWV9XSwiYmFzZW1hcCI6eyJ2YWx1ZSI6ImRlZmF1bHQifSwibGFiZWwiOiJkZWZhdWx0IiwiY2FuQm91bmQiOnRydWV9&menu=eyJtZW51U2VjdGlvbiI6IiIsImRhdGFzZXRDYXRlZ29yeSI6IiIsInNlYXJjaCI6ImJpb21hc3MifQ%3D%3D',
          position: [65, 50]
        },
        {
          id: 'climate-explore-emissions',
          content:
            'GFW tracks emissions from forest loss against invidiual country commitiments.',
          btnText: 'Explore the data',
          link:
            '/map?map=eyJjZW50ZXIiOnsibGF0IjoyNywibG5nIjoxMn0sInpvb20iOjIsImRhdGFzZXRzIjpbeyJkYXRhc2V0IjoiZTY2M2ViMDktMDRkZS00ZjM5LWI4NzEtMzVjNmMyZWQxMGI1Iiwib3BhY2l0eSI6MSwidmlzaWJpbGl0eSI6dHJ1ZSwibGF5ZXJzIjpbImRkNWRmODdmLTM5YzItNGFlYi1hNDYyLTNlZjk2OWIyMGI2NiJdfSx7ImRhdGFzZXQiOiJmZGM4ZGMxYi0yNzI4LTRhNzktYjIzZi1iMDk0ODUwNTJiOGQiLCJsYXllcnMiOlsiNmY2Nzk4ZTYtMzllYy00MTYzLTk3OWUtMTgyYTc0Y2E2NWVlIiwiYzVkMWUwMTAtMzgzYS00NzEzLTlhYWEtNDRmNzI4YzA1NzFjIl0sIm9wYWNpdHkiOjEsInZpc2liaWxpdHkiOnRydWV9LHsiZGF0YXNldCI6ImE5Y2M2ZWMwLTVjMWMtNGUzNi05YjI2LWI0ZWUwYjUwNTg3YiIsImxheWVycyI6WyJiMzJhMmYxNS0yNWU4LTRlY2MtOThlMC02ODc4MmFiMWMwZmUiXSwib3BhY2l0eSI6MSwidmlzaWJpbGl0eSI6dHJ1ZX1dLCJiYXNlbWFwIjp7InZhbHVlIjoiZGFyayJ9LCJsYWJlbCI6ImxpZ2h0TGFiZWxzIiwiY2FuQm91bmQiOnRydWV9&menu=eyJtZW51U2VjdGlvbiI6IiIsImRhdGFzZXRDYXRlZ29yeSI6IiJ9',
          position: [43, 40]
        }
      ],
      animations: [
        {
          id: 'climate-scene3',
          data: scene3
        }
      ]
    },
    {
      title: 'Climate',
      subtitle: 'Recovery state',
      text:
        'Sustainable forest management, improved land tenure, conservation and restoration are all valuable strategies for preserving forests as a natural climate solution. These solutions can have positive economic, biodiversity, and societal impacts. Improvements in forest monitoring data and technology faciliate implementation of these solutions.',
      img1x: climate4,
      img2x: climate4Large,
      prompts: [
        {
          id: 'climate-learn',
          content: 'Learn how forest restoration can help meet climate goals.',
          btnText: 'Read the blog',
          link:
            'https://www.wri.org/blog/2018/09/aligning-ambitions-case-including-restoration-targets-climate-goals',
          position: [60, 55]
        },
        {
          id: 'climate-blog',
          content:
            'Read how GFW monitoring data supports implementation of forests conservation goals.',
          btnText: 'Read the blog',
          link:
            'https://blog.globalforestwatch.org/climate/3-new-features-on-gfw-climate-measure-progress-on-forest-conservation-goals',
          position: [50, 30]
        }
      ],
      animations: [
        {
          id: 'climate-scene4',
          data: scene4
        },
        {
          id: 'climate-birds4',
          data: birds4,
          behind: true
        }
      ]
    }
  ],
  cards: [
    {
      id: 'carbon',
      title: 'View carbon and emissions statistics',
      summary:
        'Find answers to questions about carbon and emissions globally, by country or even subnationally.',
      extLink: '/dashboards/global?category=climate',
      img1x: carbon,
      img2x: carbonLarge,
      btnText: 'view data'
    },
    {
      id: 'monitor',
      title: 'Monitor progress in real time',
      summary:
        'The political will to reduce tropical deforestation has never been higher. Are countries on track to meet commitments? Track progress in near-real time with weekly deforestation alerts - just select a country',
      extLink: '/dashboards/global?category=climate',
      img1x: monitor,
      img2x: monitorLarge,
      btnText: 'view data'
    },
    {
      id: 'explore',
      title: 'Explore data on the map',
      summary: 'View biomass density and loss, emissions and more.',
      extLink:
        '?map=eyJjZW50ZXIiOnsibGF0IjoyNywibG5nIjoxMn0sInpvb20iOjIsImRhdGFzZXRzIjpbeyJkYXRhc2V0IjoiZmRjOGRjMWItMjcyOC00YTc5LWIyM2YtYjA5NDg1MDUyYjhkIiwibGF5ZXJzIjpbIjZmNjc5OGU2LTM5ZWMtNDE2My05NzllLTE4MmE3NGNhNjVlZSIsImM1ZDFlMDEwLTM4M2EtNDcxMy05YWFhLTQ0ZjcyOGMwNTcxYyJdLCJvcGFjaXR5IjoxLCJ2aXNpYmlsaXR5Ijp0cnVlfSx7ImRhdGFzZXQiOiJhOWNjNmVjMC01YzFjLTRlMzYtOWIyNi1iNGVlMGI1MDU4N2IiLCJsYXllcnMiOlsiYjMyYTJmMTUtMjVlOC00ZWNjLTk4ZTAtNjg3ODJhYjFjMGZlIl0sIm9wYWNpdHkiOjEsInZpc2liaWxpdHkiOnRydWV9XSwiYmFzZW1hcCI6eyJ2YWx1ZSI6ImRhcmsifSwibGFiZWwiOiJsaWdodExhYmVscyIsImNhbkJvdW5kIjp0cnVlfQ%3D%3D&menu=eyJtZW51U2VjdGlvbiI6ImRhdGFzZXRzIiwiZGF0YXNldENhdGVnb3J5IjoiY2xpbWF0ZSJ9',
      img1x: explore,
      img2x: exploreLarge,
      btnText: 'view on map'
    },
    {
      id: 'research',
      title: 'The latest research and insights from GFW',
      summary: 'Read about forests and climate on the GFW blog.',
      extLink: 'https://blog.globalforestwatch.org/climate',
      img1x: research,
      img2x: researchLarge,
      btnText: 'read the blog'
    },
    {
      id: 'calculate',
      title: 'Calculate emissions from deforestation',
      summary:
        'Create a customized Forest Monitoring Report with the latest forest-related emissions.',
      extLink: 'http://climate.globalforestwatch.org/',
      img1x: calculate,
      img2x: calculateLarge,
      btnText: 'view data'
    },
    {
      id: 'insights',
      title: 'Build your own insights',
      summary:
        'Use the custom dataset downloader to find information related to forests and climate.',
      extLink: 'http://climate.globalforestwatch.org/',
      img1x: insights,
      img2x: insightsLarge,
      btnText: 'view data'
    },
    {
      id: 'feedback',
      title:
        'What other climate data and analysis would you like to see on GFW?',
      summary: 'Tell us!',
      extLink: '',
      theme: 'theme-card-dark',
      btnText: 'feedback'
    }
  ]
};
