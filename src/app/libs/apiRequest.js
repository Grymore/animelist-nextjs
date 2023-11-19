export const apiRequest = async (resouce, query) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resouce}?${query}`
  );
  const anime = await response.json();

  return anime;
};
