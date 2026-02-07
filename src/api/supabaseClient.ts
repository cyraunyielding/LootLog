import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mcugvvmfosneqbmydfdl.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jdWd2dm1mb3NuZXFibXlkZmRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA0NzE0MzAsImV4cCI6MjA4NjA0NzQzMH0.ocTWkoKCOci1F9JZClsf-fmnBQ5CV90v9HIYPcHhzXk';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);