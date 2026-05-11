export type ServiceType =
  | 'ac-repair'
  | 'heating-repair'
  | 'system-making-noise'
  | 'replacement-estimate'
  | 'maintenance-tune-up'
  | 'indoor-air-quality'
  | 'commercial-hvac'
  | 'duct-cleaning'
  | 'other'

export type UrgencyLevel = 'emergency' | 'this-week' | 'planning-ahead'

export type PreferredContact = 'call' | 'email' | 'text'

export interface LeadData {
  name: string
  phone: string
  email: string
  addressOrZip: string
  serviceNeeded: ServiceType
  urgency: UrgencyLevel
  message?: string
  preferredContact: PreferredContact
  source: 'website_chatbot' | 'website_form' | 'phone'
  createdAt: string
}

export interface ChatMessage {
  id: string
  role: 'bot' | 'user'
  content: string
  timestamp: string
}

export interface ChatSession {
  id: string
  messages: ChatMessage[]
  leadData: Partial<LeadData>
  startedAt: string
  completedAt?: string
}
