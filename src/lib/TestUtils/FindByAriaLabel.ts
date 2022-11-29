export const findByAriaLabel = (elements: HTMLElement[], label: string) => {
  return (
    elements.find((button) => button.attributes.getNamedItem('aria-label')?.value === label) ??
    new HTMLElement()
  );
};
