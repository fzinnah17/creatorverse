// utils.js
import { supabase } from '../client.js';

// Asynchronous function to delete a content creator based on the creator's id.

export const deleteCreator = async (id) => {
  const { data, error } = await supabase.from('creators').delete().eq('id', id);
  return error
  // if (error) {
  //   console.error('Error deleting creator:', error); // If an error occurs during deletion, log the error to the console.
  // }
  // return data; // Return the data (might be useful for handling responses, but not used here).
};
