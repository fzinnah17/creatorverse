import { createClient } from '@supabase/supabase-js';

const URL = 'https://alcvsjbwklyzkrkrfayo.supabase.co';

const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFsY3ZzamJ3a2x5emtya3JmYXlvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTEyNjc4ODQsImV4cCI6MjAwNjg0Mzg4NH0.lZUBWE4H67zavB8RT-HsPbv43NEGNardXOrkVZbLJL4';

export const supabase = createClient(URL, API_KEY);

