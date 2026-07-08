export interface Section {
  id: string;
  stop: string;
  label: string;
}

// The page is organized as stops along a stylized North Avenue corridor.
export const sections: Section[] = [
  { id: 'overview', stop: 'A', label: 'Overview' },
  { id: 'today', stop: 'B', label: 'The NNE today' },
  { id: 'vision', stop: 'C', label: 'The vision' },
  { id: 'places', stop: 'D', label: 'Where housing goes' },
  { id: 'your-street', stop: 'E', label: 'What changes for you' },
  { id: 'improvements', stop: 'F', label: 'Streets & transit' },
  { id: 'parks', stop: 'G', label: 'Parks & green space' },
  { id: 'implementation', stop: 'H', label: 'What happens when' },
];
