// Only confirmed text is eligible for display; objects are not printable content.
export const contentText = value => typeof value === 'string' ? value.trim() : '';
export const contentList = value => Array.isArray(value)
  ? [...new Set(value.map(contentText).filter(Boolean))] : [];

