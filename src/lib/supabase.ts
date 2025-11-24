import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface Advertisement {
  id: string
  title: string
  type: string
  location: string
  city: string
  latitude: number
  longitude: number
  description: string
  price: number
  dimensions: string
  image_url: string
  owner_email: string
  created_at: string
  updated_at: string
  status: string
}
