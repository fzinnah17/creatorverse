// utils.js
import { supabase } from '../client.js';

export const deleteCreator = async (id) => {
  const { data, error } = await supabase.from('creators').delete().eq('id', id);
  if (error) {
    console.error('Error deleting creator:', error);
  }
  return data;
};
