export const normalizeDropBoxLink = (link) => `${link}&raw=1`;

export const addRedirectLink = (redirectTo) => ((imageSrc) => ({
  imageSrc,
  redirectTo
}));
