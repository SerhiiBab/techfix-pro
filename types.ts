
export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface DiagnosisResult {
  possibleIssue: string;
  description: string;
  estimatedCost: string;
  urgency: 'Niedrig' | 'Mittel' | 'Hoch';
  nextSteps: string[];
}

export interface RepairBooking {
  customerName: string;
  email: string;
  deviceModel: string;
  issueDescription: string;
  preferredDate: string;
}
