export const createMetadata = (title: string, description: string, canonical: string) => {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      images: [{ url: 'https://darts.homes/ogp.png', width: 800, height: 600, alt: 'Darts Homes' }],
    },
    alternates: {
      canonical: `https://darts.homes${canonical}`,
    },
  };
};
