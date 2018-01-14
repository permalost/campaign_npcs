export const CREATE_NPC = "CREATE_NPC";
export const DELETE_NPC = "DELETE_NPC";

export function createNpc(values) {
  return {
    type: CREATE_NPC,
    payload: values
  };
}

export function deleteNpc(name) {
  return {
    type: DELETE_NPC,
    payload: name
  };
}
