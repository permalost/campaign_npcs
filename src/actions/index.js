
export const CREATE_NPC = 'create-npc';

export function createNpc(values) {
  return {
    type: CREATE_NPC,
    payload: values,
  };
}
