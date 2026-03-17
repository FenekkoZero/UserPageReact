import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ywofyppcsjfutftslvmq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl3b2Z5cHBjc2pmdXRmdHNsdm1xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM3NzA0OTQsImV4cCI6MjA4OTM0NjQ5NH0.i4uAnbeILGWqaQK4ufJbvxN4w1a3noTjfgXphtvss-w'

export const supabase = createClient(supabaseUrl, supabaseKey)