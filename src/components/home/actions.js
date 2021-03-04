export const actionsType = {
  UNLOCK_PRODUCT: 'UNLOCK_PRODUCT'
};

export const unlockProduct = (idProduct) => ({
  type: actionsType.UNLOCK_PRODUCT,
  idProduct
});
