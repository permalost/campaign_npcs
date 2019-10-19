import _ from 'lodash';
import React from 'react';

import { CREATE_NPC, DELETE_NPC } from '../actions';

export default function(state = _.mapKeys(npcs, 'name'), action) {
  switch (action.type) {
    case CREATE_NPC:
      // payload == npc
      return { ...state, [action.payload.name]: action.payload };
    case DELETE_NPC:
      // payload == name
      return _.omit(state, action.payload);
    default:
      return state;
  }
}

const npcs = [
  {
    name: 'Trinia',
    thumbnail:
      'http://static2.paizo.com/image/content/PathfinderAdventurePath/PZO1021-Trinia.jpg',
    description:
      "Trinia Sabor is a young but talented artist who's recent commission to paint the king's portrait has brought her increased fame.",
    associations: 'none'
  },
  {
    name: 'Zellara',
    thumbnail:
      'http://static2.paizo.com/image/content/PathfinderAdventurePath/PZO1021-Zellara.jpg',
    description: 'Zellara Esmeranda is a talented Varisian fortune teller.',
    associations: 'none'
  },
  {
    name: 'Eodred Arabasti II',
    thumbnail:
      'http://static2.paizo.com/image/content/PathfinderAdventurePath/PZO1021-Eodred.jpg',
    description:
      'King Eodred Arabasti II, ruler of Korvosa, is rumored to be in ill health.',
    associations: 'King of Korvosa'
  },
  {
    name: 'Ileosa Arabasti',
    thumbnail:
      'http://static2.paizo.com/image/content/PathfinderAdventurePath/PZO1021-IleosaPortrait.jpg',
    description:
      "Queen Ileosa Arabasti's popularity in Korvosa among the commonfolk has never been strong—many see her as a petulant spoiled young woman.",
    associations: 'Queen of Korvosa'
  },
  {
    name: 'Ausio',
    thumbnail:
      'http://static2.paizo.com/image/content/PathfinderAdventurePath/PZO1021-Ausio.jpg',
    description:
      "Ausio Carowyn is one of Korvosa's many nobles—an aristocracy increasingly out of touch with the commonfolk.",
    associations: 'Noble'
  },
  {
    name: 'Boule',
    thumbnail:
      'http://static2.paizo.com/image/content/PathfinderAdventurePath/PZO1021-Boule.jpg',
    description:
      "Boule is a successful businessman, but has long been rumored to be the leader of Korvosa's thieves' guild, the Cerulean Society.",
    associations: 'Cerulean Society'
  },
  {
    name: 'Cressida',
    thumbnail:
      'http://static2.paizo.com/image/content/PathfinderAdventurePath/PZO1021-Cressida.jpg',
    description: 'Captain Cressida Kroft is the leader of the Korvosan Guard.',
    associations: 'Korvosan Guard'
  },
  {
    name: 'Darb',
    thumbnail:
      'http://static2.paizo.com/image/content/PathfinderAdventurePath/PZO1021-Darb.jpg',
    description:
      'Archbanker Darb Tuttle is the leader of the faith of Abadar in Korvosa.',
    associations: 'Archbanker of Abadar'
  },
  {
    name: 'Darvayne',
    thumbnail:
      'http://static2.paizo.com/image/content/PathfinderAdventurePath/PZO1021-Darvayne.jpg',
    description:
      'Darvayne Gios Amprei is one of many Chelish ambassadors who dwell in the city.',
    associations: 'Chelish ambassador'
  },
  {
    name: 'Keppira',
    thumbnail:
      'http://static2.paizo.com/image/content/PathfinderAdventurePath/PZO1021-Keppira.jpg',
    description:
      "High priestess of the Cathedral of Pharasma, mysterious Keppira d'Bear is one of Korvosa's most powerful clerics.",
    associations: 'Cathedral of Pharasma'
  },
  {
    name: 'Marcus',
    thumbnail:
      'http://static2.paizo.com/image/content/PathfinderAdventurePath/PZO1021-Marcus.jpg',
    description:
      "Marcus Endrin is the leader of the Sable Company — Korvosa's elite hippogriff-mounted defenders.",
    associations: 'Sable Company'
  },
  {
    name: 'Ruan',
    thumbnail:
      'http://static2.paizo.com/image/content/PathfinderAdventurePath/PZO1021-Ruan.jpg',
    description:
      'Ruan Mirukova is a talented musician who finds his skills in rising demand for aristocratic galas.',
    associations: 'none'
  },
  {
    name: 'ThousandBones',
    thumbnail:
      'http://static2.paizo.com/image/content/PathfinderAdventurePath/PZO1021-ThousandBones.jpg',
    description:
      'Thousand Bones is a Shoanti shaman who has recently become a spokesperson for his people in Korvosa.',
    associations: 'Shoanti'
  },
  {
    name: 'Toff',
    thumbnail:
      'http://static2.paizo.com/image/content/PathfinderAdventurePath/PZO1021-Toff.jpg',
    description:
      "Toff Ornelos is the headmaster of Korvosa's world-renowned magical university, the Acadamae.",
    associations: 'Acadamae'
  },
  {
    name: 'Zenobia',
    thumbnail:
      'http://static2.paizo.com/image/content/PathfinderAdventurePath/PZO1021-Zenobia.jpg',
    description:
      "Arbiter Zenobia Zenderholm, known locally as the “Hanging Judge,” is well known among Korvosa's citizens for her harsh stance on criminal activity.",
    associations: 'Korvosan Guard'
  }
];
