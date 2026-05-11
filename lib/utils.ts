export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}

export function formatPhone(phone: string): string {
  const cleaned = phone.replace(/\D/g, '')
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`
  }
  return phone
}

export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function isValidPhone(phone: string): boolean {
  const cleaned = phone.replace(/\D/g, '')
  return cleaned.length === 10
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
}

export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date
  return d.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

export function getServiceLabel(serviceId: string): string {
  const labels: Record<string, string> = {
    'ac-repair': 'AC Not Cooling',
    'heating-repair': 'Heat Not Working',
    'system-making-noise': 'System Making Noise',
    'replacement-estimate': 'Need Replacement Estimate',
    'maintenance-tune-up': 'Maintenance Tune-Up',
    'indoor-air-quality': 'Indoor Air Quality',
    'commercial-hvac': 'Commercial HVAC',
    'duct-cleaning': 'Air Duct Cleaning',
    other: 'Other',
  }
  return labels[serviceId] || serviceId
}

export function getUrgencyLabel(urgency: string): string {
  const labels: Record<string, string> = {
    emergency: 'Emergency / ASAP',
    'this-week': 'This Week',
    'planning-ahead': 'Planning Ahead',
  }
  return labels[urgency] || urgency
}
